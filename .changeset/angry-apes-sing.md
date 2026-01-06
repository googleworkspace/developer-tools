---
"google-workspace-developer-tools": patch
---

Added missing currentonly scopes for Apps Script (Docs, Sheets, Slides, Forms). The currentonly scope is only available within Apps Script Services. This does not include Apps Script Advanced Services or direct calls to Google Workspace APIs.

For more information, see [Editor scopes](https://developers.google.com/workspace/add-ons/concepts/workspace-scopes#editor-scopes) and [Apps Script currentonly scopes](https://justin.poehnelt.com/posts/apps-script-currentonly-scopes/).
