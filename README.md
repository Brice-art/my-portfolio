# Brice Byiringiro — Portfolio

A simple, multipage personal portfolio built with React, Vite, and Tailwind CSS.

## Pages

- `/` — short introduction, selected work, and what I do
- `/about` — background, toolkit, and experience
- `/projects` — three featured projects
- `/contact` — email and social links

## Design

Dark-first 60-30-10 palette: dark ink surfaces (60%), light neutral text and borders (30%), and a single amber accent used sparingly for calls to action and highlights (10%).

## Development

```bash
npm install
npm run dev
```

Build for production with `npm run build`, and check the code with `npm run lint`.

When deploying, configure the host to rewrite unknown paths to `index.html` so direct visits to routes like `/about` work.
