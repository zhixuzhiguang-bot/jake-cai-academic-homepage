# Jake Cai Academic Homepage

This is a code-based bilingual academic homepage built with React, TypeScript, and Vinext.

## Edit the site

- Page content and bilingual text: `app/page.tsx`
- Colors, typography, spacing, and responsive layout: `app/globals.css`
- Browser title and description: `app/layout.tsx`
- CV file: `public/Yizhou-Jake-Cai-CV.pdf`

The `content.en` and `content.zh` objects in `app/page.tsx` contain the English and Chinese versions. Project cards are in the `projects` arrays. Selected publications are in the `publications` arrays.

## Run locally

Install Node.js 20 or later, then run:

```bash
npm install
npm run dev
```

Open the local address printed in the terminal.

## Build

```bash
npm run build
```

The project contains no proprietary page-builder content and can be moved to another Git repository or adapted for another React-compatible host.
