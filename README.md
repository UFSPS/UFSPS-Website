# IEEE SPS @ UF Site

Static multi-page site for the IEEE Signal Processing Society chapter at the University of Florida.

## Structure

- `index.html`, `about.html`, `events.html`, `projects.html`, `resources.html`, `join.html`: public pages
- `assets/css/site.css`: shared visual system and layout
- `assets/js/site.js`: shared navigation, reveal, and utility logic
- `assets/js/render.js`: JSON-driven rendering for officers, events, projects, resources, and footer content
- `data/*.json`: structured chapter content that officers can update without changing layout code
- `assets/img/`: logos and project images

## Officer Update Workflow

1. Edit `data/officers.json` to change leadership information.
2. Edit `data/events.json` for upcoming and past chapter programming.
3. Edit `data/projects.json` and `data/resources.json` as the chapter's public-facing work evolves.
4. Keep the copy on the page files concise and organization-facing.

## Deployment

- Publish the repository root with GitHub Pages.
- Keep `CNAME` set to `ieee-sps-uf.raulv.dev`.
- Add a DNS `CNAME` record from `ieee-sps-uf.raulv.dev` to `jibby2k1.github.io`.
