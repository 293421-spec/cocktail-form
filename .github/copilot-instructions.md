**Repo Overview**

- **Stack:** React + Vite (see package.json). This is a small single-page frontend using ESM modules and Vite dev server.
- **Entry:** The app mounts in [src/main.jsx](src/main.jsx) and renders `App` from [src/App.jsx](src/App.jsx).
- **Build/dev:** Scripts are defined in [package.json](package.json) (`npm run dev`, `npm run build`, `npm run preview`, `npm run lint`).

**Big Picture / Architecture**

- Single frontend project (no backend in this repo). UI state and form examples live in [src/App.jsx](src/App.jsx).
- Vite provides HMR and bundling via the plugin in [vite.config.js](vite.config.js).
- Network integrations (if added) should use the existing dependency `axios` declared in [package.json](package.json).

**Key Files to Inspect**

- [package.json](package.json): npm scripts and deps (React 19, Vite, axios, ESLint).
- [vite.config.js](vite.config.js): Vite plugins and build options; adjust plugin-react here.
- [src/main.jsx](src/main.jsx): app bootstrap and root render.
- [src/App.jsx](src/App.jsx): example UI (inline styles, Polish labels like “Dodaj koktajl”). Copy patterns from here for new components.

**Developer Workflows**

- Start dev server: `npm run dev` (runs `vite` with HMR).
- Build for production: `npm run build` (vite build).
- Preview production build locally: `npm run preview`.
- Lint codebase: `npm run lint` (uses ESLint configured in project devDeps).

**Project-Specific Conventions & Patterns**

- Files are standard JS/JSX ESM modules (project `type: "module"`).
- Minimal folder structure: place new components under `src/` (e.g., `src/components/`) and import from `src/main.jsx` or `src/App.jsx` as appropriate.
- Styling: small projects use `index.css` for global styles and inline styles are used in `App.jsx` for simple pages—follow existing style choice for consistency.
- Localization: UI text currently contains Polish strings in `App.jsx`; be mindful when changing copy.

**Integration & Extensibility Notes**

- If adding API calls, reuse `axios` and centralize base URLs/config in a new `src/api/` module.
- Vite plugin changes belong in [vite.config.js](vite.config.js).

**Missing / Not Present**

- No test runner configured—no `test` script present.
- No CI or `.github` configuration exists yet; this file is the first guidance for AI agents.

**How AI agents should act here**

- Make minimal, focused edits: follow the existing file style (JSX, ESM, simple CSS import).
- Preserve Polish UI copy unless asked to translate.
- When adding new files, update imports in [src/main.jsx](src/main.jsx) or [src/App.jsx](src/App.jsx) and run `npm run dev` locally to validate HMR behavior.

If anything here is unclear or you want additional sections (component conventions, testing setup, CI examples), tell me which area to expand and I will update this file.
