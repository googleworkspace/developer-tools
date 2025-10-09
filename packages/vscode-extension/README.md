# Google Workspace Developer Tools

This VS Code extension provides a set of tools to help Google Workspace developers.

## Features

- **OAuth2 Scope Linting**: Get warnings and additional information for Google Workspace [OAuth2 scopes](https://developers.google.com/identity/protocols/oauth2/scopes) in your code.

  ![OAuth2 Scope Linting](https://raw.githubusercontent.com/googleworkspace/vscode-extension/main/packages/vscode-extension/assets/scope-diagnostics.png)

- **MCP (Model Context Protocol) Server**: Registers the Google Workspace Developer Tools MCP server, enabling enhanced development tools.

## Usage

### OAuth2 Scope Linting

Warnings and suggestions will automatically appear for OAuth2 scopes in your code.

## Installation

You can install the Google Workspace Developer Tools extension in a few ways.

### From within VS Code (Recommended)

1. Launch Visual Studio Code.
2. Go to the **Extensions** view (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Search for `Google Workspace Developer Tools`.
4. Click **Install**.

### From a Marketplace

Install the extension from your preferred marketplace:

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=google-workspace.google-workspace-developer-tools)
- [Open VSX Registry](https://open-vsx.org/extension/google-workspace/google-workspace-developer-tools)

### Using the Command Line

If you have the `code` command-line tool installed, you can install the extension with this command:

```sh
code --install-extension google-workspace.google-workspace-developer-tools
```
