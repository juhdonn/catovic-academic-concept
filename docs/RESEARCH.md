# Research, source record, and design audit

Reviewed October 28, 2026. Public evidence only; no outreach.

## What was inspected

The original site's entire visible navigation consists of Home, Teaching, and Research. All three were opened in a browser. CV and contact are embedded links/information, not separate original pages. Both linked CVs were opened. All eight Google Drive research links and the Cambridge DOI destination were opened; the 2014 article has no link on the original page.

Primary URLs:

- Home: https://sites.google.com/view/ibraheemcatovic/home
- Research: https://sites.google.com/view/ibraheemcatovic/research
- Teaching: https://sites.google.com/view/ibraheemcatovic/teaching
- Homepage CV, file `CV_Ibraheem_Catovic_08-25.pdf`: https://drive.google.com/file/d/1KW6lJ5JcgOYCUc1Ldx6BMatuKMg0T2D0/view
- Research CV, file `CV_Ibraheem_Catovic.pdf`: https://drive.google.com/file/d/1KhIXUaanJop2lA9BAXLpG3_CXM6NqD9g/view
- Publisher article: https://doi.org/10.1017/esa.2025.10026
- Official NYU faculty bulletin: https://bulletins.nyu.edu/nyu/faculty-information/faculty-information.pdf
- Official Rutgers listing: https://economics.sas.rutgers.edu/people/faculty/people/86-faculty/1212-catovic-ibraheem
- University of Maryland dissertation: https://api.drum.lib.umd.edu/server/api/core/bitstreams/509cafbf-0538-40e8-8e60-2508cddc1ce7/content

The complete original paper and syllabus links are retained as structured data in `src/data/profile.ts`; the website's Sources page exposes the source record to reviewers.

## Verified information used

- Name: Ibraheem Catovic.
- Personal site and NYU bulletin list Visiting Clinical Assistant Professor, Department of Economics, New York University. August 2025 CV lists September 2023–Present. This is a source-stated appointment; a 2026 end date has not been confirmed.
- Email: ibraheem.catovic@nyu.edu, on original site and CV.
- Interests: behavioral economics, experimental economics, neuroeconomics, psychology, philosophy, religion.
- Ph.D. Economics, University of Maryland, 2021; M.A. Economics, Maryland, 2017; B.A. Economics and Math/Statistics, Rutgers, 2012, with Honors and Summa Cum Laude, as stated in the homepage CV. The dissertation independently supports the Ph.D. year.
- Prior CV-listed roles: Senior Healthcare Economist, MITRE, September 2021–April 2024; Research Analyst, Federal Reserve Bank of Philadelphia, August 2014–July 2015; Research Assistant, Federal Reserve Board of Governors, October 2012–July 2014.
- Address exactly as printed in the CV: Department of Economics, New York University, 19 West 4th Street, New York, NY 10002. Postal code requires confirmation; it has not been silently corrected.
- LinkedIn URL is printed in the CV; the profile itself was not independently audited.

## Research inventory and link outcomes

| Title | Status on original site | Observed destination |
|---|---|---|
| Distribution-Dependent Number Preferences | Journal of the Economic Science Association, 2025, 11(2), 279–287 | DOI resolves to Cambridge article with matching author/title and abstract |
| What Determines Lotto Demand? Mega Millions, Hope and Regret | peer review | **Mismatch**: original Drive file is `esa_revision2_distribution-dependent_number_preferences.pdf`; visible title is Distribution-Dependent Number Preferences |
| A Survey of Prize Linked Savings | working paper, with Erkut Ozbay | `pls_survey.pdf` viewer loads |
| Behavioral Modifications to Prize Linked Savings | working paper | `pls_third_year_paper.pdf`; first page matches title, Ibraheem Catovic, May 1, 2018 version |
| Afterlife Justice as Fairness | working paper | `afterlife_justice_as_fairness.pdf`; matching first page, October 2026, abstract visible |
| Reinterpreting the Qur'anic Prostration Narrative of Iblis and Adam | working paper | `satan_reinterpreted.pdf`; matching title, June 2026, introduction visible |
| Mitigating Moral Luck | working paper | `mitigating_moral_luck.pdf` viewer loads |
| Resolving Religious Luck | working paper | `resolving_religious_luck.pdf` viewer loads |
| Justice and Expected Afterlife Value: A Resolution to the Ashari Paradox of the Three Brothers | working paper | `ashari_three_brothers.pdf` viewer loads |
| Prospects of Islamic Banking in the United States: A Survey of Muslim Americans | Journal of Islamic Economics, Banking and Finance, 2014 | No original article link supplied; no replacement invented |

The published article's short overview is an original paraphrase of its abstract. No other paper abstracts or findings were invented. Subject categories are editorial. “Under review” maps the original “peer review” label and is explicitly qualified.

Cambridge shows a 2025 issue citation and a December 2, 2025 online date. The concept uses the year/volume/pages rather than making an unsupported chronology claim. The August 2025 CV still describes the article as forthcoming; the live research page and publisher support the final published label.

## Original-site audit

Strengths: direct professional email and CV access, simple three-item navigation, substantive research list, extensive syllabus archive, lightweight presentation, and no unnecessary interface complexity.

Weaknesses observed: the same large centered appointment block pushes content down on each page; research titles and generic “Link” labels form a largely undifferentiated list; published articles and working papers are mixed without a strong visual distinction; the homepage gives little access to actual work; biography/education are confined to a PDF; CV links differ between pages; the Lotto Demand link points at a different paper. The original was visually inspected, but no historical performance or accessibility score was measured.

## New hierarchy and rationale

1. Overview: name remains prominent in the masthead, followed by a research-led introduction, verified source-stated appointment, featured work, teaching, contact.
2. Research: all work in readable rows with status, subject, venue, coauthors, explicit destinations, filters, and title search.
3. Teaching: preserve the useful archive and all syllabus URLs, without implying these are current course assignments.
4. About: verified education and professional history in readable HTML, with source-date qualifications.
5. Contact: email first, copy action, address as sourced, original site, LinkedIn, CV.
6. CV: persistent navigation entry, both original files, clear version context.
7. Sources: public evidence and uncertainty record, plus visible unofficial-demo disclosure throughout.

Design choices: restrained forest and sage colors, warm paper, editorial serif headings, quiet sans-serif navigation, fine rules, generous spacing, and an original abstract decision-path diagram. It is explicitly not a research visualization. No synthetic portrait, institutional logo, fake metric, testimonial, or endorsement is used.

## Before client presentation / official adoption

The concept is ready for a private demonstration. Before adopting it as an official portfolio, confirm appointment currency, CV preference, postal address, paper status, and the correct Lotto Demand PDF with the professor. The Rutgers listing also calls him Lecturer (Instructor); its currency is unclear, so it is not asserted as a current role. No award or extra appointment has been inferred.
