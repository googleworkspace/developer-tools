import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/extension.ts", "src/test/**/*.ts"],
	outDir: "out",
	clean: true,
	external: ["vscode"],
	format: ["cjs"],
	minify: false,
});
