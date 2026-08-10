# UFSPS-Website
This repository is for the website of the UF IEEE Signal Processing Society. 
## Getting Started

### Prerequisites
- **[Node.js](https://nodejs.org/en/download)** 22 LTS or newer
- **npm**, which comes with Node

### Cloning the Repository

```bash
git clone https://github.com/UFSPS/UFSPS-Website
cd UFSPS-Website
```

### Installing Dependencies

After cloning the repository, install the required dependencies:

```bash
npm install
```

### Running the Application

Start the app locally in your project root
```bash
npm start
```
The app should be running at `http://localhost:5173`. If it is not available at port 5173, the port is already being used and Vite will automatically choose the next available port.

## Build & Deploy

```bash
npm run typecheck   # tsc --noEmit
npm run build       # vite build + SPA 404.html fallback for GitHub Pages
```

Pushes to `main` (and currently `setup-github-pages`) trigger the GitHub Pages
deploy workflow; production is served at https://ieee-sps-uf.raulv.dev via
`public/CNAME`. Set `VITE_BASE_PATH` when hosting under a sub-path.

## Contributing content

Site content lives in typed data modules under `src/data/` (events, projects,
board, chapter info) — most updates don't require touching components. Design
tokens and shared classes live in `src/App.css`.

**[docs/OPEN_ITEMS.md](docs/OPEN_ITEMS.md)** tracks content that still needs
input from board members (photos, link verification, Fall 2026 events, project
status refreshes).
