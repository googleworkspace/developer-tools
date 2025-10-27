import fs from "node:fs/promises";
import { google } from "googleapis";
import ky from "ky";

const discovery = google.discovery("v1");

const { data: apis } = await discovery.apis.list({
	fields: "items(title,description,discoveryRestUrl,documentationLink,version)",
});

const allApis = (apis.items || []).sort(
	(a, b) => a.id?.localeCompare(b.id ?? "") || 0,
);
const chunkSize = 10;
const apisWithScopes: Array<
	typeof apis & {
		scopes?: { id: string; description: string }[];
	}
> = [];

for (let i = 0; i < allApis.length; i += chunkSize) {
	const chunk = allApis.slice(i, i + chunkSize);
	console.log(`Processing chunk ${i / chunkSize + 1}`);

	apisWithScopes.push(
		...(await Promise.all(
			chunk.map(async (api) => {
				if (api.discoveryRestUrl) {
					try {
						const spec = (await ky(api.discoveryRestUrl).then((res) =>
							res.json(),
						)) as {
							auth?: {
								oauth2?: {
									scopes?: Record<string, { description: string }>;
								};
							};
						};
						return {
							...api,
							scopes: Object.entries(spec.auth?.oauth2?.scopes ?? {}).map(
								([id, { description }]) => ({ id, description }),
							),
						};
					} catch (error) {
						console.log(`Error fetching ${api.discoveryLink}`);
						console.log(error);
					}
				}

				return api;
			}),
		)),
	);
}

await fs.writeFile(
	"./src/apis.ts",
	`/**
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

export const GOOGLE_APIS = ${JSON.stringify(apisWithScopes, null, 2)};
`,
);

function _isWorkspaceAPI(api: {
	documentationLink?: string;
}): boolean {
	return Boolean(
		api.documentationLink?.includes("hangouts") ||
			api.documentationLink?.includes("workspace") ||
			api.documentationLink?.includes("apps-script"),
	);
}
