# GitHub + Netlify deployment handoff

Prepared October 28, 2026. **Netlify Free publication approved; deployment setup is in progress.**

The existing Astro 7.4.4 static site builds successfully. Its design, content, unofficial labels, and search exclusions are preserved. No existing Git repository or configured GitHub/Netlify command-line tool was found in this project. The private repository https://github.com/juhdonn/catovic-academic-concept has been created. Source upload and Netlify connection are in progress.

## Choose visibility before publishing

- Low-cost starting point: Netlify Free with a personally owned private GitHub repository and a public demo URL. The source stays private; the built HTML/CSS/JS delivered to browsers is readable and downloadable. Everyone with the URL can view and forward it. Noindex is not privacy.
- For an authenticated review by your partner: Netlify Pro, starting at $20/month, supports invited users for private projects and shared-password protection. Keep automatic credit recharge off to control usage charges. Do not purchase a plan without explicit spending approval.
- Netlify Free is $0, includes 300 credits/month, and pauses projects at the usage limit. Production deployments consume 15 credits each; bandwidth and requests also consume credits. Free-plan projects currently display Netlify branding when public. Personal is $9/month and permits disabling the badge but still does not allow inviting a partner to an owner-only private project.
- Free/Personal have one owner seat. A personally owned repository is the appropriate free starting point; organization-owned private repositories and additional private-repository contributors require Pro. If the actual account's import screen requires a paid plan, stop and review it before upgrading; alternatively upload the local dist folder manually while keeping the source in private GitHub.
- Vercel Hobby is restricted to personal/non-commercial use, so it is not the recommended plan for this business demonstration.

Official references:
- https://www.netlify.com/pricing/
- https://docs.netlify.com/manage/security/secure-access-to-sites/project-visibility/
- https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/
- https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/billing-faq-for-credit-based-plans/
- https://www.netlify.com/blog/introducing-netlify-free-plan/
- https://docs.netlify.com/build/configure-builds/manage-dependencies/
- https://vercel.com/docs/plans/hobby

## 1. Create the private GitHub repository (after approval for remote setup)

1. Sign in to GitHub yourself. Open https://github.com/new.
2. Select your personal GitHub account as Owner. Use `catovic-academic-concept` as the repository name, or another name you prefer.
3. Set visibility to **Private**. Leave README, license, and .gitignore initialization unchecked because the project already contains files.
4. Create the repository. Copy its HTTPS repository URL. Confirm the repository displays a Private badge.
5. If prompted for account registration, terms, or a new app authorization, complete those yourself. Never paste an access token into chat, source files, or a shell command.

## 2. Upload the existing project

In Terminal, use this exact project directory:

```sh
cd /Users/jadenramos/.codex/.chatgpt-projects/g-p-6ae270743a0c81918dcddcdc45baf6c3/catovic-concept
npm run check
npm run build
git init -b main
git add .
git status --short
```

Before committing, confirm no `.env`, tokens, or provider credentials appear in the staged list. This project has no required environment secrets; ignore rules exclude dependencies, build output, caches, and provider state. Only this project subfolder should be uploaded, not its parent ChatGPT project or other source folders.

```sh
git commit -m "Add unofficial academic portfolio concept"
```

If Git asks for your identity, set your own name and preferred GitHub commit email locally for this repository, then retry the commit. Do not invent an identity.

Run `git remote add origin` followed by the exact HTTPS URL copied from GitHub, then:

```sh
git push -u origin main
```

Use GitHub Desktop or an existing supported Git credential manager to authenticate. If HTTPS password authentication fails, use GitHub Desktop's Add Local Repository and Publish/Push workflow rather than placing a token in a command. Keep the repository private throughout.

## 3. Import on Netlify

1. Sign in to Netlify yourself. If creating an account, accept its terms yourself. Choose Free unless you explicitly approved a paid plan.
2. Before importing, inspect your team's Default project visibility settings and select Private for production and previews while setting up. Defaults vary by account age; do not assume the project is protected.
3. Choose **Add new project → Import an existing project → GitHub** (labels may vary slightly).
4. During the GitHub connection, grant access to **Only select repositories**, selecting only `catovic-academic-concept`. Review and approve that account permission yourself.
5. Select the repository and branch `main`.
6. Base directory: leave blank, since this repository contains the website directly at its root. Framework: Astro. Build command: `npm run check && npm run build`. Publish directory: `dist`. Node: 24. The checked-in `netlify.toml` and `.nvmrc` already specify these settings. No environment secrets or server adapter are required.
7. STOP before **Deploy project** unless deployment has been explicitly approved. The visibility setting is a separate choice from the private GitHub repository.
8. After approval, deploy. If staying on Free, keep ownership/deployment with one account. If importing asks for an upgrade, stop rather than accepting charges.
9. For a Free open-link demo, deliberately make the site public only after approval. For a Pro private demo, keep it private and arrange partner access using the approved account invite workflow; do not send an invite without explicit authorization to message that recipient.
10. Copy the actual HTTPS URL returned by Netlify. Do not guess its name. Test it in a signed-out window and on a phone: an open-link demo should load; a protected demo should require authorized access. Check `/research/`, `/teaching/`, `/about/`, `/cv/`, `/contact/`, and `/sources/` directly.

The free provider subdomain is sufficient; no domain purchase is needed. Avoid using an official-sounding university subdomain. The source site already labels the concept as unofficial and excludes indexing.

## 4. Future updates

Edit locally, run `npm run check` and `npm run build`, then commit and push to `main`. The connected Netlify project rebuilds automatically and keeps the same primary URL. A pull request can create a separate Deploy Preview; its visibility must also match the selected access policy. Further private-repository contributors may require Pro; the free workflow assumes one account owns the deployment.

Once automatic deploys are connected, pushing to main is a publishing action. Only do it for changes authorized for publication. Avoid unnecessary production rebuilds because they consume credits. Review billing usage and retain a removal date for this temporary concept.

## Manual fallback without paid Git integration

After publication approval, build locally and upload **only `dist/`** using Netlify's manual deployment interface. This produces a real HTTPS site while the GitHub repository stays private. Future updates require another local build and upload; do not upload the source folder, node_modules, or credentials. Apply the same visibility rules. Manual upload has no automatic GitHub rebuilds.

## What has not happened

The private repository has been created. No public website deployment, HTTPS demo URL, plan purchase, or partner invitation has been completed yet. Netlify sign-in was completed by the user; GitHub authorization is awaiting the user.
