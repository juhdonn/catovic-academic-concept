# Quality assurance · October 28, 2026

## Passed

- Astro production build: eight static HTML pages, including custom 404.
- Astro/TypeScript diagnostics: 14 source files, zero errors, zero warnings.
- Dependency audit after moving to Astro 7.4.4: zero reported vulnerabilities.
- Build verification script: 166 link occurrences checked for local targets/fragments; one H1 and main landmark per page, unique IDs, language, descriptions, and demo noindex verified.
- Original-link comparison: all 35 unique original paper, CV, syllabus, DOI, and email URLs are present verbatim in the generated site. The original-link inventory is saved in `original-links.json`.
- Browser layout checks: all seven content pages at 320, 390, 768, and 1280 CSS pixels. Each page's scroll width equaled the viewport width; no horizontal overflow. Desktop, tablet, and phone layouts visually inspected; screenshots included.
- Navigation: desktop navigation and mobile research navigation work; active-page state is present. Mobile menu expands/collapses, and Escape closes it and restores button focus.
- Keyboard: skip link moves focus to the main landmark. Native links, buttons, search field, and disclosure are keyboard controls; visible focus CSS is included. Reduced-motion CSS removes movement.
- Research: subject filters return five economics and five philosophy/religion entries; combined philosophy filter plus “luck” search returns two entries; an unmatched title shows the empty state; reset restores ten entries. Overview disclosure opens.
- Contact: email copy reports success in the local browser; mailto link uses the original public email. No message was sent.
- External research/CV: publisher DOI, both CV viewers, and all eight original Drive paper viewers load. The Lotto Demand destination mismatch is disclosed next to the affected title, rather than presented as a verified download for that title.
- Main text color pairs checked numerically. Ink on paper is 10.82:1, body text on paper 7.45:1, eyebrow on paper 5.47:1, and white on the green button 9.93:1. Muted text was darkened after a marginal contrast finding on sage. Focus, structure, labels, and disclosure controls were reviewed.
- Basic SEO: descriptive page titles, descriptions, English language, viewport, Open Graph title/description/type, and SVG favicon. Demo noindex and robots exclusions intentionally prevent indexing; source and concept notices are visible.
- Performance fundamentals: static HTML, no client framework runtime, small inline interactions, self-hosted fonts, inline vector illustration, and no analytics or third-party font requests. Homepage HTML is about 3.3 KB gzipped, excluding CSS/fonts. This is a measured file size, not a Lighthouse score.

## Issues fixed during QA

- Flagged the original site's mismatched Lotto Demand PDF and removed the misleading title-as-download interaction; retained an explicitly labeled original-file link.
- Preserved and explained both original CV versions.
- Added research-list heading for a coherent heading hierarchy.
- Adjusted narrow-phone typography and header spacing for 320px screens.
- Darkened muted text on the sage background.
- Updated an initially selected older Astro major to the current patched release; audit is clean.

## Limits and remaining source questions

This is not a full assistive-technology or cross-browser certification. No Lighthouse/Core Web Vitals score was measured. Testing used the available in-app browser; Safari and Firefox were not separately tested. Historical syllabus URLs were compared exactly against the original page, not individually opened for complete PDF review. LinkedIn was preserved from the CV, not independently verified. Future availability of third-party document links cannot be guaranteed.

Appointment currency, CV preference, postal code, review status, the correct Lotto Demand document, and the unlinked 2014 paper remain matters for professor confirmation before official adoption. They are disclosed in the demo's Sources page and research notes.

No public deployment, professor contact, form submission, or representation of official endorsement took place.
