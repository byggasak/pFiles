# pFiles — Prompt Template Manager

A personal, organized repository for prompt engineering templates. Built as a lightweight single-page application for GitHub Pages.

![pFiles](https://img.shields.io/badge/pFiles-Prompt%20Templates-6366f1?style=for-the-badge)

## Purpose & Goal

**pFiles** solves the problem of prompts being scattered across various notes, documents, or chat histories by providing a **clean, fast, and searchable interface** where you can:

1. **Store and Categorize** — Easily organize complex prompts into custom categories with color coding
2. **Rapid Retrieval** — Quickly find prompts using filtering by category and real-time keyword search
3. **One-Click Action** — Copy the entire prompt content to the clipboard instantly with visual feedback

## Features

- 🌙 **Dark Mode UI** — Easy on the eyes with a slate-based dark theme
- 📁 **Categories** — Create custom categories with color coding to organize prompts
- 🔍 **Live Search** — Filter prompts by title or content in real-time
- 📋 **One-Click Copy** — Copy any prompt to clipboard with toast confirmation
- 💾 **Local Storage** — All data persists in your browser's localStorage
- 📱 **Responsive Design** — Works on desktop and mobile devices
- ⚡ **No Backend Required** — Runs entirely in the browser

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Alpine.js](https://alpinejs.dev/) | Lightweight reactivity |
| [Inter](https://fonts.google.com/specimen/Inter) | UI typography |
| [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | Prompt/code display |

## Getting Started

### Prerequisites

- Node.js 18+ and npm

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

### Development

For active development with live CSS rebuilding:

```bash
npm run watch
```

This watches for changes in `input.css` and rebuilds `dist/output.css` automatically.

## Project Structure

```
pFiles/
├── dist/
│   └── output.css       # Built Tailwind CSS (generated)
├── index.html           # Main application
├── input.css            # Tailwind source with custom components
├── package.json         # Dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind theme customization
└── README.md            # This file
```

## Deployment to GitHub Pages

1. **Build the CSS** before committing:

   ```bash
   npm run build
   ```

2. **Commit all files** including `dist/output.css`:

   ```bash
   git add .
   git commit -m "Build for production"
   git push origin main
   ```

3. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `/ (root)`
   - Save

4. Your app will be live at: `https://byggasak.github.io/pFiles/`

## Data Storage

All data is stored in your browser's `localStorage`:

- `pfiles_prompts` — Array of prompt objects
- `pfiles_categories` — Array of category objects

**Note:** Data is browser-specific and will not sync across devices. Export your prompts manually if needed.

## License

MIT License — feel free to use and modify for your own projects.

---

Made with 💜 for the prompt engineering community

