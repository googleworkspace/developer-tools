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

import * as assert from "node:assert";
import {
	SCOPES,
	SCRIPT_EXTERNAL_REQUEST_SCOPE,
	getScopeMarkdown,
} from "../scopes.js";

suite("getScopeMarkdown", () => {
	test("it returns markdown for a known scope", () => {
		const markdown = getScopeMarkdown("https://www.googleapis.com/auth/drive");
		assert.ok(markdown.includes("This scope is restricted."));
	});

	test("it returns markdown for an unknown scope", () => {
		const markdown = getScopeMarkdown("https://example.com");
		assert.strictEqual(markdown, "**https://example.com** (Unknown scope)");
	});

	test("it returns scope for script.external_request", () => {
		const scope = SCOPES.get(SCRIPT_EXTERNAL_REQUEST_SCOPE);
		assert.ok(scope);
		assert.strictEqual(scope?.description, "Connect to an external service");
	});
});
