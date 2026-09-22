# Christian Gonzalez — Portfolio

A static Astro portfolio for a Technical Lead and Solution Architect. Content is organized in TypeScript data files, with minimal client-side JavaScript for the mobile navigation.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. To validate or preview the production site:

```bash
npm run build
npm run preview
```

`npm run build` includes Astro's TypeScript and component checks.

## Add your assets

- Portrait: `public/avatar.jpg` — shown in the hero section.
- LinkedIn banner: `public/banner.png` — used for social sharing metadata.
- Resume: `public/Christian_Gonzalez_Tech_Lead_Solution_Architect_Resume.docx` — linked from every resume button.
- Brand images: `public/Logo.png` in the header and `public/LogoFull.png` in the footer.
- Favicon: `public/favicon.svg`.

The build still succeeds without the portrait and displays a designed placeholder. The current banner is used as supplied; for best social previews, use an image near 1200 × 630 pixels.

## Update content and links

- `src/config/site.ts`: LinkedIn URL, GitHub URL, email, asset paths and canonical site URL. Replace the example LinkedIn URL and deployed domain before launch.
- `src/data/experience.ts`: roles and career history.
- `src/data/projects.ts`: case studies, delivered technologies and architecture considerations.
- `src/data/skills.ts`: skills and categories.
- `src/data/credentials.ts`: certification and course certificate titles, issuers and verification links.
- `src/pages/index.astro`: section copy and layout.

## Deploy to Vercel

Import this repository into Vercel and select the Astro preset. Use `npm run build` as the build command and `dist` as the output directory. Set `site.url` in `src/config/site.ts` to the final public domain, then redeploy. No environment variables or server runtime are needed.
