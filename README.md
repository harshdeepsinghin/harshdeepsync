# Harshdeep.studio

A personal portfolio website for Harshdeep, an artist.

Built with Next.js and Firebase Studio.

## Deployment (GitHub Pages)

The site is statically exported and deployed to GitHub Pages at https://harshdeep.studio.

### How it works

1. `next.config.ts` sets `output: 'export'` enabling static export.
2. An npm script `export` runs `next build && next export` producing the `out/` folder.
3. The GitHub Actions workflow `.github/workflows/deploy.yml` builds and exports the site on every push to `main` and uploads `out/` as a Pages artifact.
4. The `deploy` job publishes it to GitHub Pages. A `public/CNAME` file configures the custom domain `harshdeep.studio`.

### Local preview of static export

```
npm ci
npm run export
npx serve out
```

### Notes / Caveats

- Using `output: 'export'` disables server-side rendering and dynamic server functions. Ensure all pages are static / client-side.
- `next/image` optimization is disabled (`unoptimized: true`) for static export.
- If you add dynamic routes or need SSR, you'll need a different hosting approach (e.g., Vercel) instead of Pages.
