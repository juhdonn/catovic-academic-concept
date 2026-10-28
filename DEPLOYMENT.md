# Live demo deployment

Published October 28, 2026, with the founders’ explicit approval.

- Public HTTPS URL: https://academic-web-studio-catovic-demo.netlify.app/
- Private source: https://github.com/juhdonn/catovic-academic-concept
- Netlify dashboard: https://app.netlify.com/projects/academic-web-studio-catovic-demo/overview
- Hosting: Netlify Free; no custom domain or paid plan purchased.
- Branch: main. Build: `npm run check && npm run build`. Publish directory: `dist`. Node: 24.
- GitHub integration deploys future commits automatically. The one-time GitHub import workflow unpacked the initial source into ordinary files; the source archive is no longer in the working tree. Normal source changes do not run the import workflow.

## Updating the demo

For a small change, open the relevant file in the private GitHub repository, use the pencil/Edit button, make the change, and commit to main. Netlify automatically builds and updates the same URL. For larger changes, use GitHub Desktop to clone this private repository, edit and check locally, then commit and push. Clone it into a new folder instead of overwriting the original local project; its original folder is not yet a Git checkout. Use Node 24 and `npm ci`, then `npm run check` and `npm run build`.

Academic data lives in `src/data/profile.ts`; page copy in `src/pages/`; design tokens in `src/styles/global.css`. Never commit credentials or `.env` files. Netlify only needs access to this private repository.

## Review and cost controls

Anyone who receives the public URL can view and forward it; source delivered to browsers is inspectable. Noindex is a search-engine instruction, not authentication. Netlify adds its Free-plan badge. The repository is private and does not become public when the website is published. Deploy Previews currently remain private to the team; share the main public URL with your partner.

Free includes 300 credits per month with a hard limit. Production deploys consume 15 credits plus metered traffic usage. Sites pause when allowance is exhausted. No auto-recharge or paid upgrade was enabled during this setup. These terms were checked in official Netlify pricing documentation on October 28, 2026.

## Verification

The original production build succeeded. The public URL opened in a separate browser session without Netlify authentication. All seven content pages loaded directly, research filtering/search returned the expected results, and the unofficial-concept labels remain visible. A documentation-only commit verifies the automatic deployment connection. See local QA notes for the earlier responsive and accessibility checks.

This record supersedes the pre-deployment status paragraphs in the initial preparation notes under docs/. The site remains an unofficial design concept, not endorsed by Ibraheem Catovic or NYU. No professor outreach or partner invitation was sent.
