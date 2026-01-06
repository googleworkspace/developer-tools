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

import { GOOGLE_APIS } from "./apis.js";

export const ScopeClassification = {
	RESTRICTED: "RESTRICTED",
	SENSITIVE: "SENSITIVE",
	NON_SENSITIVE: "NON_SENSITIVE",
};

export type ScopeClassification =
	| typeof ScopeClassification.RESTRICTED
	| typeof ScopeClassification.SENSITIVE
	| typeof ScopeClassification.NON_SENSITIVE;

type Api = {
	title: string;
	version: string | number | null;
	documentationLink?: string;
};

type Scope = {
	description: string;
	classification?: ScopeClassification;
	apis: Api[];
};

export const SCOPES = new Map<string, Scope>();

for (const { title, version, documentationLink, scopes } of GOOGLE_APIS || []) {
	for (const { id, description } of scopes || []) {
		if (!SCOPES.has(id)) {
			SCOPES.set(id, {
				description: description,
				apis: [],
			});
		}

		const scope = SCOPES.get(id);

		if (!scope) {
			continue;
		}

		scope.apis.push({
			title,
			version,
			documentationLink,
		});
	}
}

export const SCRIPT_EXTERNAL_REQUEST_SCOPE =
	"https://www.googleapis.com/auth/script.external_request";
SCOPES.set(SCRIPT_EXTERNAL_REQUEST_SCOPE, {
	description: "Connect to an external service",
	apis: [],
});

/**
 * Scopes that are only available for the current document.
 *
 * @see https://developers.google.com/workspace/add-ons/concepts/workspace-scopes#editor-scopes
 * @see https://justin.poehnelt.com/posts/apps-script-currentonly-scopes/
 */
export const CURRENT_ONLY_SCOPES = [
	"https://www.googleapis.com/auth/documents.currentonly",
	"https://www.googleapis.com/auth/forms.currentonly",
	"https://www.googleapis.com/auth/presentations.currentonly",
	"https://www.googleapis.com/auth/spreadsheets.currentonly",
];

for (const scope of CURRENT_ONLY_SCOPES) {
	SCOPES.set(scope, {
		description:
			"Access the current document, sheet, presentation, or form. The `currentonly` scope is only available within Apps Script Services. This does not include Apps Script Advanced Services or direct calls to Google Workspace APIs.",
		classification: ScopeClassification.NON_SENSITIVE,
		apis: [],
	});
}

const RESTRICTED_SCOPES = [
	"https://www.googleapis.com/auth/chat.admin.delete",
	"https://www.googleapis.com/auth/chat.app.delete",
	"https://www.googleapis.com/auth/chat.delete",
	"https://www.googleapis.com/auth/chat.import",
	"https://www.googleapis.com/auth/chat.messages",
	"https://www.googleapis.com/auth/chat.messages.readonly",
	"https://www.googleapis.com/auth/dataportability.businessmessaging.conversations",
	"https://www.googleapis.com/auth/dataportability.chrome.autofill",
	"https://www.googleapis.com/auth/dataportability.chrome.bookmarks",
	"https://www.googleapis.com/auth/dataportability.chrome.history",
	"https://www.googleapis.com/auth/dataportability.maps.aliased_places",
	"https://www.googleapis.com/auth/dataportability.maps.commute_routes",
	"https://www.googleapis.com/auth/dataportability.maps.starred_places",
	"https://www.googleapis.com/auth/dataportability.myactivity.maps",
	"https://www.googleapis.com/auth/dataportability.myactivity.play",
	"https://www.googleapis.com/auth/dataportability.myactivity.search",
	"https://www.googleapis.com/auth/dataportability.myactivity.shopping",
	"https://www.googleapis.com/auth/dataportability.myactivity.youtube",
	"https://www.googleapis.com/auth/dataportability.mymaps.maps",
	"https://www.googleapis.com/auth/dataportability.play.purchases",
	"https://www.googleapis.com/auth/dataportability.youtube.channel",
	"https://www.googleapis.com/auth/dataportability.youtube.private_videos",
	"https://www.googleapis.com/auth/drive",
	"https://www.googleapis.com/auth/drive.activity",
	"https://www.googleapis.com/auth/drive.activity.readonly",
	"https://www.googleapis.com/auth/drive.meet.readonly",
	"https://www.googleapis.com/auth/drive.metadata",
	"https://www.googleapis.com/auth/drive.metadata.readonly",
	"https://www.googleapis.com/auth/drive.readonly",
	"https://www.googleapis.com/auth/drive.scripts",
	"https://www.googleapis.com/auth/fitness.activity.read",
	"https://www.googleapis.com/auth/fitness.activity.write",
	"https://www.googleapis.com/auth/fitness.blood_glucose.read",
	"https://www.googleapis.com/auth/fitness.blood_glucose.write",
	"https://www.googleapis.com/auth/fitness.blood_pressure.read",
	"https://www.googleapis.com/auth/fitness.blood_pressure.write",
	"https://www.googleapis.com/auth/fitness.body_temperature.read",
	"https://www.googleapis.com/auth/fitness.body_temperature.write",
	"https://www.googleapis.com/auth/fitness.body.read",
	"https://www.googleapis.com/auth/fitness.body.write",
	"https://www.googleapis.com/auth/fitness.heart_rate.read",
	"https://www.googleapis.com/auth/fitness.heart_rate.write",
	"https://www.googleapis.com/auth/fitness.location.read",
	"https://www.googleapis.com/auth/fitness.location.write",
	"https://www.googleapis.com/auth/fitness.nutrition.read",
	"https://www.googleapis.com/auth/fitness.nutrition.write",
	"https://www.googleapis.com/auth/fitness.oxygen_saturation.read",
	"https://www.googleapis.com/auth/fitness.oxygen_saturation.write",
	"https://www.googleapis.com/auth/fitness.reproductive_health.read",
	"https://www.googleapis.com/auth/fitness.reproductive_health.write",
	"https://www.googleapis.com/auth/fitness.sleep.read",
	"https://www.googleapis.com/auth/fitness.sleep.write",
	"https://www.googleapis.com/auth/gmail.compose",
	"https://www.googleapis.com/auth/gmail.insert",
	"https://www.googleapis.com/auth/gmail.metadata",
	"https://www.googleapis.com/auth/gmail.modify",
	"https://www.googleapis.com/auth/gmail.readonly",
	"https://www.googleapis.com/auth/gmail.settings.basic",
	"https://www.googleapis.com/auth/gmail.settings.sharing",
];

const SENSITIVE_SCOPES = [
	"https://www.googleapis.com/auth/chat.admin.memberships",
	"https://www.googleapis.com/auth/chat.admin.memberships.readonly",
	"https://www.googleapis.com/auth/chat.admin.spaces",
	"https://www.googleapis.com/auth/chat.admin.spaces.readonly",
	"https://www.googleapis.com/auth/chat.app.memberships",
	"https://www.googleapis.com/auth/chat.app.spaces",
	"https://www.googleapis.com/auth/chat.app.spaces.create",
	"https://www.googleapis.com/auth/chat.customemojis",
	"https://www.googleapis.com/auth/chat.customemojis.readonly",
	"https://www.googleapis.com/auth/documents",
	"https://www.googleapis.com/auth/documents.readonly",
	"https://www.googleapis.com/auth/chat.memberships",
	"https://www.googleapis.com/auth/chat.memberships.app",
	"https://www.googleapis.com/auth/chat.memberships.readonly",
	"https://www.googleapis.com/auth/chat.messages.create",
	"https://www.googleapis.com/auth/chat.messages.reactions",
	"https://www.googleapis.com/auth/chat.messages.reactions.create",
	"https://www.googleapis.com/auth/chat.messages.reactions.readonly",
	"https://www.googleapis.com/auth/chat.spaces",
	"https://www.googleapis.com/auth/chat.spaces.create",
	"https://www.googleapis.com/auth/chat.spaces.readonly",
	"https://www.googleapis.com/auth/chat.users.readstate",
	"https://www.googleapis.com/auth/chat.users.readstate.readonly",
	"https://www.googleapis.com/auth/chat.users.spacesettings",
	"https://www.googleapis.com/auth/drive.apps.readonly",
	"https://www.googleapis.com/auth/gmail.addons.current.message.metadata",
	"https://www.googleapis.com/auth/gmail.addons.current.message.readonly",
	"https://www.googleapis.com/auth/gmail.send",
];

for (const id of RESTRICTED_SCOPES) {
	const scope = SCOPES.get(id);
	if (!scope) {
		continue;
	}

	scope.classification = ScopeClassification.RESTRICTED;
}

for (const id of SENSITIVE_SCOPES) {
	const scope = SCOPES.get(id);
	if (!scope) {
		continue;
	}

	scope.classification = ScopeClassification.SENSITIVE;
}

export function getScopeMarkdown(id: string): string {
	const scope = SCOPES.get(id);
	if (!scope) {
		return `**${id}** (Unknown scope)`;
	}

	const content = [scope.description];

	if (
		scope.classification === ScopeClassification.RESTRICTED ||
		scope.classification === ScopeClassification.SENSITIVE
	) {
		content.push(
			`This scope is ${scope.classification.toLowerCase()}. See [OAuth2 Verification](https://support.google.com/cloud/answer/13463073) for more information.`,
		);

		const suggestions: { id: string; sharedPrefix: string }[] = [];

		for (const [altId, alt] of SCOPES) {
			if (
				alt.classification === ScopeClassification.SENSITIVE ||
				alt.classification === ScopeClassification.RESTRICTED
			) {
				continue;
			}

			const sharedPrefix = getSharedPrefix(id, altId);

			if (sharedPrefix.length < id.length) {
				continue;
			}

			suggestions.push({
				id: altId,
				sharedPrefix,
			});
		}

		suggestions.sort((a, b) => b.sharedPrefix.length - a.sharedPrefix.length);

		if (suggestions.length > 0) {
			content.push("Consider these scopes:");

			for (const { id } of suggestions) {
				content.push(
					`- \`${id.replace("https://www.googleapis.com/auth/", "")}\` ${SCOPES.get(id)?.description ?? ""}`,
				);
			}
		}
	}

	if (scope.apis.length > 0) {
		content.push("This scope is used by the following APIs:");
		const apiList = scope.apis
			.map(
				(api) =>
					`- [${api.title} ${api.version ?? ""}](${api.documentationLink})`,
			)
			.join("\n");
		content.push(apiList);
	}

	return content.join("\n\n");
}

function getSharedPrefix(a: string, b: string): string {
	let i = 0;
	while (i < a.length && i < b.length && a[i] === b[i]) {
		i++;
	}
	return a.slice(0, i);
}
