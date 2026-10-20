# Aristos

Website for Aristos fine art prints, built with Next.js and Tailwind CSS.

- `/` — home page
- `/shop` — all collections
- `/collections/[slug]` — prints in one collection
- `/prints/[slug]` — print product page

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Content to replace

- Photos: live in `public/images/`; the home page hero is `hero-jetty.webp`.
- Bracketed text such as `[YOUR PRICE]` and `[YOUR ABN]` marks copy still to be written.
- Collections, prints and their size, paper and framing options live in `src/lib/prints.ts`.
