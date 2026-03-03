import { defineConfig } from "tsup";

export default defineConfig({
	entry: [
		"src/extension.ts",
		"src/test/scopes.test.ts",
		"src/test/completion.test.ts",
	],
	outDir: "out",
	clean: true,
	external: ["vscode"],
	format: ["cjs"],
	minify: false,
});
