# Copilot Instructions for samwareing.github.io

## Project Overview

- **Purpose:** This is a personal CV/portfolio site for Sam Wareing, implemented as a single-page React app with a custom terminal-style interface.
- **Architecture:**
  - Initially generated using https://github.com/gitname/react-gh-pages for deploying to GitHub pages.
  - React (functional components, hooks)
  - Bootstrap for layout and styling
  - All business logic and UI are in the `src/` directory, especially `components/`
  - The main interactive feature is a terminal emulator (`TerminalBox`) that parses and responds to user commands

## Key Components & Data Flow

- `src/App.js`: App entry point, renders the terminal UI
- `src/components/terminalBox.jsx`: Main terminal logic, manages command input, output, and state
- `src/components/commands.jsx`: Defines all supported terminal commands and their output (as arrays of strings/JSX)
- `src/components/terminalInput.jsx`, `terminalText.jsx`, `terminalMenuBar.jsx`: Terminal UI subcomponents
- Data flow: User input → `TerminalBox` → command lookup in `commands.jsx` → output rendered in terminal

## Developer Workflows

- **Start dev server:** `npm start` (runs with `react-scripts`)
- **Build for production:** `npm run build`
- **Test:** `npm test` (default React scripts, no custom tests present)
- **Deploy:** `npm run deploy` (uses `gh-pages` to deploy `build/` to GitHub Pages)
- **Eject:** `npm run eject` (irreversible, exposes config)

## Project-Specific Patterns & Conventions

- All terminal commands are defined in `commands.jsx` as functions returning arrays of strings/JSX (not plain strings)
- Command keys are always lowercased before lookup
- Error handling for unknown commands is handled in `TerminalBox` (not in `commands.jsx`)
- The terminal UI is styled with Bootstrap classes and custom CSS
- No Redux or context API; all state is local to components
- No routing; this is a single-page, single-view app
- No backend/API integration; all data is static and client-side

## Integration & Dependencies

- Uses `react`, `react-dom`, `react-scripts`, `bootstrap`, and `gh-pages` (for deployment)
- No custom middleware, API, or server-side code
- Static assets (icons, manifest, etc.) are in `public/`

## Examples

- To add a new terminal command, edit `src/components/commands.jsx` and add a new key/function pair
- To change the terminal's appearance, edit `src/components/terminalBox.jsx` and/or CSS files

## References

- See `package.json` for scripts and dependencies
- See `README.md` for project summary
- See `src/components/commands.jsx` for all available terminal commands

---

_Last updated: 2025-10-02_
