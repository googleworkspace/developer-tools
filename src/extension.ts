/**
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { getBuilderURL, previewCard } from "@googleworkspace/card-dev-assist";
import * as vscode from "vscode";
import { SCOPES, ScopeClassification, getScopeMarkdown } from "./scopes.js";

function getPreviewCardWebviewHtml({
	url,
	screenshot,
}: { url: string; screenshot?: string }): string {
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Card Preview</title>
	</head>
	<body class="vscode-light">
		<h1>Card Preview</h1>
		<p><a href="${url}" target="_blank">View in Card Builder</a></p>
		${screenshot ? `<img src="data:image/png;base64,${screenshot}" alt="Card Screenshot" />` : "<p>Loading screenshot...</p>"}
		
	</body>
	</html>`;
}

export function activate(context: vscode.ExtensionContext) {
	const previewCardCommand = vscode.commands.registerTextEditorCommand(
		"google-workspace.previewCard",
		async ({ selection, document }) => {
			const panel = vscode.window.createWebviewPanel(
				"previewCard",
				"Preview Google Workspace Card JSON",
				vscode.ViewColumn.One,
				{},
			);

			if (selection.isEmpty) {
				vscode.window.showErrorMessage("Please select a card JSON to preview.");
				return;
			}

			const card = JSON.parse(document.getText(selection));

			const url = getBuilderURL(card);

			panel.webview.html = getPreviewCardWebviewHtml({
				url,
			});

			panel.webview.html = getPreviewCardWebviewHtml(await previewCard(card));
		},
	);
	context.subscriptions.push(previewCardCommand);

	const scopeHoverProvider = vscode.languages.registerHoverProvider(
		{ scheme: "file" },
		{
			provideHover(document, position, token) {
				const line = document.lineAt(position.line);
				const scopeRegex = /https:\/\/www.googleapis.com\/auth\/[a-zA-Z._-]+/g;
				console.log(line.text);

				for (const match of line.text.matchAll(scopeRegex)) {
					const start = new vscode.Position(line.lineNumber, match.index ?? 0);
					const end = new vscode.Position(
						line.lineNumber,
						(match.index ?? 0) + match[0].length,
					);
					const range = new vscode.Range(start, end);

					if (!range.contains(position)) {
						continue;
					}

					const matchedScope = document.getText(range);
					const info = SCOPES.get(matchedScope);
					const markdownString = new vscode.MarkdownString(
						getScopeMarkdown(matchedScope),
					);
					return new vscode.Hover(markdownString, range);
				}

				return undefined;
			},
		},
	);
	context.subscriptions.push(scopeHoverProvider);

	const scopeDiagnostics =
		vscode.languages.createDiagnosticCollection("scopes");
	context.subscriptions.push(scopeDiagnostics);

	function updateDiagnostics(
		document: vscode.TextDocument,
		collection: vscode.DiagnosticCollection,
	): void {
		const diagnostics: vscode.Diagnostic[] = [];
		const scopeRegex = /https:\/\/www.googleapis.com\/auth\/[a-zA-Z._-]+/g;

		for (let i = 0; i < document.lineCount; i++) {
			const line = document.lineAt(i);

			for (const match of line.text.matchAll(scopeRegex)) {
				const matchedScope = match[0];

				const start = new vscode.Position(line.lineNumber, match.index ?? 0);
				const end = new vscode.Position(
					line.lineNumber,
					(match.index ?? 0) + match[0].length,
				);
				const range = new vscode.Range(start, end);

				const info = SCOPES.get(matchedScope);

				if (!info) {
					// Create a diagnostic for invalid scopes
					const diagnostic = new vscode.Diagnostic(
						range,
						"❗ This is an invalid scope.",
						vscode.DiagnosticSeverity.Error,
					);
					diagnostics.push(diagnostic);
				}

				if (
					info?.classification === ScopeClassification.RESTRICTED ||
					info?.classification === ScopeClassification.SENSITIVE
				) {
					// Create a diagnostic for restricted or sensitive scopes
					const diagnostic = new vscode.Diagnostic(
						range,
						`⚠️ This is a ${info.classification.toLowerCase()} scope.`,
						vscode.DiagnosticSeverity.Warning,
					);
					diagnostics.push(diagnostic);
				}
			}
		}
		collection.set(document.uri, diagnostics);
	}

	if (vscode.window.activeTextEditor) {
		updateDiagnostics(
			vscode.window.activeTextEditor.document,
			scopeDiagnostics,
		);
	}

	context.subscriptions.push(
		vscode.window.onDidChangeActiveTextEditor((editor) => {
			if (editor) {
				updateDiagnostics(editor.document, scopeDiagnostics);
			}
		}),
	);

	context.subscriptions.push(
		vscode.workspace.onDidChangeTextDocument((event) => {
			updateDiagnostics(event.document, scopeDiagnostics);
		}),
	);
}

export function deactivate() {}
