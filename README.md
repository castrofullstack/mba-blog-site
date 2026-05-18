# Christopher Castro MBA Blog

This is the live source for [christophercastro.mba](https://christophercastro.mba/).

## Write New Posts

Blog posts live in:

```text
src/content/blog/
```

Each post is a Markdown file ending in `.md`. Start with frontmatter like this:

```md
---
title: "Post Title"
description: "Short summary for cards and search previews."
pubDate: 2026-05-18
category: "Strategy"
featured: false
---

Write the post here.
```

Set `featured: true` on one post when you want it to appear in the homepage featured slot.

## Local Preview

```sh
npm install
npm run dev
```

Then open the local URL Astro prints.

## Publish

This repo publishes with GitHub Pages. Any push to `main` runs `.github/workflows/deploy.yml` and updates the live site.

```sh
npm run build
git add .
git commit -m "Describe the change"
git push origin main
```

Live URL: [christophercastro.mba](https://christophercastro.mba/)
