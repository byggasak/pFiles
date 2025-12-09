# pFiles — Prompt Template Manager

A personal, organized repository for prompt engineering templates. Built as a lightweight single-page application for GitHub Pages with **GitHub-based storage**.

![pFiles](https://img.shields.io/badge/pFiles-Prompt%20Templates-6366f1?style=for-the-badge)

## Purpose & Goal

**pFiles** solves the problem of prompts being scattered across various notes, documents, or chat histories by providing a **clean, fast, and searchable interface** where you can:

1. **Store and Categorize** — Easily organize complex prompts into custom categories with color coding
2. **Rapid Retrieval** — Quickly find prompts using filtering by category and real-time keyword search
3. **One-Click Action** — Copy the entire prompt content to the clipboard instantly with visual feedback
4. **GitHub Storage** — All prompts are stored in a JSON file on GitHub, making them version-controlled and accessible anywhere

## Features

- 🌙 **Dark Mode UI** — Easy on the eyes with a slate-based dark theme
- 📁 **Categories** — Create custom categories with color coding to organize prompts
- 🔍 **Live Search** — Filter prompts by title or content in real-time
- 📋 **One-Click Copy** — Copy any prompt to clipboard with toast confirmation
- 🔄 **GitHub Sync** — All data stored in `data/prompts.json` on GitHub
- 📱 **Responsive Design** — Works on desktop and mobile devices
- ⚡ **No Backend Required** — Uses GitHub API for storage

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Alpine.js](https://alpinejs.dev/) | Lightweight reactivity |
| [GitHub API](https://docs.github.com/en/rest) | Data storage & sync |
| [Inter](https://fonts.google.com/specimen/Inter) | UI typography |
| [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | Prompt/code display |

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A GitHub account
- A GitHub Personal Access Token (PAT) with `repo` scope

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/byggasak/pFiles.git
   cd pFiles
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build the CSS:**

   ```bash
   npm run build
   ```

4. **Open `index.html` in your browser** or use a local server:

   ```bash
   npx serve .
   ```

### GitHub Token Setup

To add and manage prompts via the UI, you need a GitHub Personal Access Token:

1. Go to [GitHub Settings → Tokens](https://github.com/settings/tokens/new?scopes=repo&description=pFiles)
2. Generate a new token with `repo` scope
3. Copy the token
4. In pFiles, click **Settings** in the sidebar
5. Paste your token and save

Your token is stored locally in your browser's localStorage and is never shared.

### Development

For active development with live CSS rebuilding:

```bash
npm run watch
```

## Project Structure

```
pFiles/
├── data/
│   └── prompts.json     # All prompts & categories (GitHub storage)
├── dist/
│   └── output.css       # Built Tailwind CSS (generated)
├── index.html           # Main application
├── input.css            # Tailwind source with custom components
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind theme customization
└── README.md            # This file
```

## Data Storage

All prompts and categories are stored in `data/prompts.json`:

```json
{
  "categories": [
    { "id": "development", "name": "Development", "color": "#22c55e" }
  ],
  "prompts": [
    {
      "id": "1234567890",
      "title": "Code Review Assistant",
      "content": "You are an expert...",
      "categoryId": "development",
      "createdAt": "2024-12-09T10:00:00.000Z"
    }
  ]
}
```

### Manual Editing

You can also edit `data/prompts.json` directly on GitHub:
1. Navigate to the file on GitHub
2. Click the edit (pencil) icon
3. Make your changes
4. Commit

Changes will appear in the app on next page load.

## Deployment to GitHub Pages

1. **Build the CSS** before committing:

   ```bash
   npm run build
   ```

2. **Commit and push**:

   ```bash
   git add .
   git commit -m "Update prompts"
   git push origin main
   ```

3. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
   - Save

4. Your app will be live at: `https://byggasak.github.io/pFiles/`

## Security Notes

- Your GitHub token is stored in `localStorage` (browser only)
- The token is only used for GitHub API requests
- Never commit your token to the repository
- For private repos, only users with repo access can view/modify prompts

## License

MIT License — feel free to use and modify for your own projects.

---

Made with 💜 for the prompt engineering community
