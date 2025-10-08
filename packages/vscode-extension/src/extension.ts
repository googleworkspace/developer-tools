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

import * as vscode from "vscode";
import { SCOPES, ScopeClassification, getScopeMarkdown } from "./scopes.js";

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.lm.registerMcpServerDefinitionProvider(
			"google-workspace-developer",
			{
				provideMcpServerDefinitions: async () => {
					return [
						new vscode.McpHttpServerDefinition(
							"google-workspace-developer",
							vscode.Uri.parse("https://workspace-developer.goog/mcp"),
						),
					];
				},
				resolveMcpServerDefinition: async (
					server: vscode.McpServerDefinition,
				) => {
					return server;
				},
			},
		),
	);
	const scopeHoverProvider = vscode.languages.registerHoverProvider(
		{ scheme: "file" },
		{
			provideHover(document, position, token) {
				const line = document.lineAt(position.line);
				const scopeRegex = /https:\/\/www.googleapis.com\/auth\/[a-zA-Z._-]+/g;

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
