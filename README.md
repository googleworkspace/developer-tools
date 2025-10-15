# Google Workspace Developer Tools

[![Build Status](https://github.com/googleworkspace/developer-tools/actions/workflows/test.yml/badge.svg)](https://github.com/googleworkspace/developer-tools/actions/workflows/test.yml)
[![Release Status](https://github.com/googleworkspace/developer-tools/actions/workflows/release.yml/badge.svg)](https://github.com/googleworkspace/developer-tools/actions/workflows/release.yml)
[![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

A collection of developer tools to enhance your Google Workspace development experience. This monorepo contains extensions, utilities, and resources designed to streamline development workflows for Google Workspace APIs and integrations.

## 🚀 Quick Start

### VS Code Extension

Get intelligent OAuth2 scope linting and enhanced development tools directly in your editor:

**Install from Visual Studio Code:**

1. Open the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
2. Search for "Google Workspace Developer Tools"
3. Click Install

**Or install via command line:**

```sh
code --install-extension google-workspace.google-workspace-developer-tools
```

**Marketplaces:**

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=google-workspace.google-workspace-developer-tools)
- [Open VSX Registry](https://open-vsx.org/extension/google-workspace/google-workspace-developer-tools)

### Gemini CLI Extension

If you have the `gemini` command-line tool installed:

```sh
gemini extensions install \
  "https://github.com/googleworkspace/developer-tools"
```

![Extension Demo](https://raw.githubusercontent.com/googleworkspace/developer-tools/refs/heads/main/docs/gemini.gif)

## 📦 Packages

### VS Code Extension (`packages/vscode-extension`)

A comprehensive VS Code extension providing:

- **OAuth2 Scope Linting**: Automatic warnings and suggestions for Google Workspace OAuth2 scopes in your code
  - Validates scope URLs against the official Google API registry
  - Highlights restricted and sensitive scopes
  - Provides hover documentation with scope descriptions and API associations
- **MCP (Model Context Protocol) Server**: Integrated support for enhanced AI-powered development tools

[Learn more →](./packages/vscode-extension)

## 🛠️ Development

This is a monorepo managed with [pnpm](https://pnpm.io/) and [Turbo](https://turbo.build/).

### Prerequisites

- Node.js (v18 or later recommended)
- pnpm (`npm install -g pnpm`)

### Setup

```sh
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint and format code
pnpm lint

# Watch mode for development
pnpm --filter google-workspace-developer-tools dev
```

### Project Structure

```
├── packages/
│   └── vscode-extension/     # VS Code extension
├── turbo.json                # Turbo build configuration
└── pnpm-workspace.yaml       # pnpm workspace configuration
```

## 🤝 Contributing

We welcome contributions! Whether it's bug reports, feature requests, or code contributions, please check out our [contributing guidelines](CONTRIBUTING.md) to get started.

### Ways to Contribute

- 🐛 Report bugs and issues
- 💡 Suggest new features or improvements
- 📝 Improve documentation
- 🔧 Submit pull requests

## 💬 Support

If you have questions or encounter issues:

- 📋 [File an issue](https://github.com/googleworkspace/developer-tools/issues) on GitHub
- 💡 Check existing issues for solutions
- 📚 Review the documentation in each package

## 📄 License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ for the Google Workspace developer community
