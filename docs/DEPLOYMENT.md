# Private demonstration and deployment

Nothing has been uploaded or published.

## Fastest private demonstration

1. From this folder, run `npm ci` once, then `npm run build`.
2. Run `npm run preview -- --port 4321`.
3. Open http://127.0.0.1:4321 on this computer.
4. Present directly or screen-share the browser. No hosting account or public URL is required.

The local address works only on the computer running the preview. Keep the preview running while presenting. To stop it, run `npm run preview -- stop`.

## Send the demo without public hosting

The sibling source ZIP contains the complete project, lockfile, documentation, and screenshots, excluding installed dependencies and build caches. A recipient can unzip it and run the same commands above. The static ZIP contains just the generated `dist/` output and can be served locally with any ordinary static web server, for example `python3 -m http.server 4321 --bind 127.0.0.1` from its extracted folder.

## Temporary hosted demo, after your approval

This is a static site. Build command: `npm ci && npm run build`. Output directory: `dist`. No server adapter or environment secrets are required. Serve the generated files with directory-index routing and the included `404.html` as the error page.

Choose a static host with authenticated access for the intended reviewers. Configure access protection before sharing the preview URL. Do not rely on an obscure URL, robots.txt, or `noindex` for privacy. Do not put a password in client-side JavaScript.

Retain the prominent unofficial-concept labels and demo search exclusions. Use a neutral temporary subdomain; do not imply ownership of the professor’s official identity or an NYU endorsement. Set a removal date for the temporary demonstration. Do not upload the original PDFs; they remain on their original hosts.

No recurring hosting purchase is necessary to demonstrate this build locally. Check a host’s current commercial-use and access-protection terms before choosing a plan.
