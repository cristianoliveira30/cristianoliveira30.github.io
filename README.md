# Portfolio — Cristian Oliveira

Static portfolio built with Vue 3, TypeScript, Vite and Tailwind CSS, available in English, Portuguese (Brazil) and German. The default language follows the browser language (English as fallback).

## Requirements

- Node.js 20.19+ or 22.12+
- npm 10+

## Development

```bash
npm install
npm run dev
```

Vite prints the local URL, usually `http://localhost:5173`.

## Checks

```bash
npm run type-check
npm run build
npm run preview
```

The contents of `dist/` are static files and can be published on GitHub Pages.

## Publishing

`.github/workflows/deploy.yml` builds the project with Node 22 and publishes `dist/` to GitHub Pages whenever the `master` branch receives a push.

## Content

All text lives in `src/i18n/messages.ts` (one dictionary per language). Structured content is in `src/data/`:

- `projects.ts`: project cards (images, technologies, links)
- `experience.ts`: experience and education
- `skills.ts`: skill groups
- `navigation.ts`: navigation, profile links, email and CV files

Résumé files (`.docx`, English and Brazilian Portuguese) are served from `public/cv/`.

## Structure

```text
src/
├── assets/       # Local images and architecture diagrams
├── components/
│   ├── base/     # Reusable primitives
│   └── sections/ # Page sections
├── composables/  # Reusable behaviour
├── data/         # Typed portfolio content
├── i18n/         # Dictionaries and locale handling
├── layouts/      # Page structure
├── styles/       # Global CSS and tokens
├── types/        # Shared types
├── App.vue       # Page composition
└── main.ts       # Entry point
```
