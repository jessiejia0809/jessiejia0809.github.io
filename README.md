# Jessie Jia

Minimalist researcher and filmmaker website, built with Astro and published at https://jessiejia0809.github.io/.

Start with [EDITING.md](EDITING.md) for text, images, galleries, draft controls and publishing.

## Development

Use Node 22.12+ (`.nvmrc` selects Node 22).

```sh
npm ci
npm run dev
npm run build
npm test
```

The content editing integration tests temporarily change fixtures, verify their generated output, and restore the originals in a finally block. Run on a clean worktree without other concurrent edits.

`master` deploys to GitHub Pages through `.github/workflows/deploy.yml`. Pull requests build without deploying. Pages must use GitHub Actions. Content resides in `content/`; page templates and image originals for optimization reside in `src/`. No CMS, database or server is required.

The previous Academic Pages implementation is preserved by the Git tag `pre-cinematic-redesign-2026-09-29`. Historical downloads and images retain their URLs in `public/files/` and `public/images/`. The previous theme license remains in LICENSE.
