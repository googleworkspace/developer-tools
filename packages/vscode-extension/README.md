# Google Workspace Developer Tools

[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/google-workspace.google-workspace-developer-tools?label=VS%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=google-workspace.google-workspace-developer-tools)
[![Open VSX](https://img.shields.io/open-vsx/v/google-workspace/google-workspace-developer-tools?label=Open%20VSX)](https://open-vsx.org/extension/google-workspace/google-workspace-developer-tools)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Enhance your Google Workspace development experience with intelligent OAuth2 scope linting, hover documentation, and AI-powered development tools directly in Visual Studio Code.

## ✨ Features

### 🔐 OAuth2 Scope Intelligence

Automatically validate and document Google Workspace OAuth2 scopes in your code:

- **Real-time Validation**: Instantly identify invalid or unknown OAuth2 scope URLs
- **Security Classification**: Visual warnings for restricted and sensitive scopes
- **Hover Documentation**: See scope descriptions, associated APIs, and documentation links on hover
- **Multi-API Support**: Coverage for all Google Workspace APIs (Gmail, Drive, Calendar, Chat, Admin, and more)

Get code completions for all Google OAuth2 scopes:

![OAuth2 Scope Linting & Completions](https://raw.githubusercontent.com/googleworkspace/vscode-extension/main/packages/vscode-extension/assets/scope-completion.gif)

**Scope Classifications:**

- 🔴 **Restricted**: Scopes requiring additional verification (e.g., `drive`, `gmail.modify`)
- 🟡 **Sensitive**: Scopes accessing sensitive user data (e.g., `gmail.readonly`, `calendar`)
- 🟢 **Non-Sensitive**: Basic access scopes (e.g., `userinfo.email`, `userinfo.profile`)

### 🤖 MCP (Model Context Protocol) Server

Integrated support for AI-powered development through the Google Workspace Developer Tools MCP server:

- Access Google Workspace API documentation directly in your AI coding assistant
- Get context-aware suggestions for Google Workspace development
- Enhanced Copilot and other AI tool capabilities for Google Workspace projects

## 🚀 Quick Start

### Installation

#### From VS Code (Recommended)

1. Open Visual Studio Code
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS)
3. Search for **"Google Workspace Developer Tools"**
4. Click **Install**

#### From Marketplace

- **[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=google-workspace.google-workspace-developer-tools)**
- **[Open VSX Registry](https://open-vsx.org/extension/google-workspace/google-workspace-developer-tools)**

#### Command Line

```bash
code --install-extension google-workspace.google-workspace-developer-tools
```

### Usage

#### OAuth2 Scope Linting

The extension works automatically once installed:

1. **Write Code**: Include Google OAuth2 scope URLs in your code:

   ```javascript
   const SCOPES = [
     "https://www.googleapis.com/auth/gmail.readonly",
     "https://www.googleapis.com/auth/drive.file",
   ];
   ```

2. **Get Instant Feedback**:
   - Warnings appear for restricted/sensitive scopes
   - Invalid scopes are highlighted with error diagnostics
   - Hover over any scope for detailed information

3. **Learn More**: Click on scope URLs in hover tooltips to access official documentation

**Supported File Types**: Works in all text files including JavaScript, TypeScript, Python, JSON, YAML, and more.

## 🔍 How It Works

The extension:

1. Scans your code for Google OAuth2 scope URLs (`https://www.googleapis.com/auth/*`)
2. Validates them against the official Google API registry
3. Provides real-time diagnostics based on scope classification
4. Offers rich hover information with:
   - Scope description
   - Security classification
   - Associated Google Workspace APIs
   - Links to API documentation

## 📋 Requirements

- Visual Studio Code version 1.50.0 or higher
- No additional dependencies required

## ⚙️ Extension Settings

This extension works out of the box with no configuration required. Future versions may include customizable settings.

## 🐛 Known Issues

Please report issues on our [GitHub Issues page](https://github.com/googleworkspace/developer-tools/issues).

## 📝 Release Notes

See [CHANGELOG.md](./CHANGELOG.md) for detailed release notes and version history.

### Recent Updates

- **0.5.x**: Enhanced scope validation and MCP server integration
- **0.4.x**: Added support for additional Google Workspace APIs
- **0.3.x**: Initial public release with OAuth2 scope linting

## 🤝 Contributing

We welcome contributions! This extension is part of the [Google Workspace Developer Tools](https://github.com/googleworkspace/developer-tools) monorepo.

## 📚 Resources

- [Google Workspace APIs Documentation](https://developers.google.com/workspace)
- [OAuth 2.0 Scopes Reference](https://developers.google.com/identity/protocols/oauth2/scopes)
- [GitHub Repository](https://github.com/googleworkspace/developer-tools)

## 📄 License

Apache 2.0 License - see [LICENSE](./LICENSE) for details.

## 💬 Support

- 🐛 [Report a Bug](https://github.com/googleworkspace/developer-tools/issues)
- 💡 [Request a Feature](https://github.com/googleworkspace/developer-tools/issues)
- 📖 [View Documentation](https://github.com/googleworkspace/developer-tools)
