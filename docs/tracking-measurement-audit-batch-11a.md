# Rubinox Tracking And Measurement Audit - Batch 11A

Date: 2026-07-01
Scope: planning and readiness audit for analytics, search measurement, conversion events and reporting. Public website pages were not changed in this batch.

Batch 11B update: this audit has been superseded for implementation status by `docs/tracking-implementation-batch-11b-report.md`. GA4 and event tracking are now implemented; Search Console and Bing remain owner-side setup actions.

## Guardrails

- No public HTML, CSS, JavaScript, assets, sitemap, robots, schema, canonical tags, titles or meta descriptions were changed.
- No fake GA4 measurement IDs, Search Console verification tokens, Bing verification tokens, API keys, secrets or placeholder credentials were added.
- Existing business claims were not expanded. This audit does not introduce manufacturer, factory, stock, price, certification, client, project, review, rating or delivery claims.
- Static GitHub Pages compatibility is preserved.

## Existing Tracking Status

| Area | Current status | Evidence | Batch 11A action |
| --- | --- | --- | --- |
| GA4 page tracking | Partially present in public HTML | 195 of 261 HTML pages include an existing GA4 measurement snippet | Document only; owner must confirm property access before any cleanup |
| GA4 lead events | Partially present in public HTML | 177 HTML pages include a `generate_lead` helper and `trackLeadAndGo` appears 211 times | Document current pattern and create event map |
| Pages without GA4 snippet | Present | 66 HTML pages do not include the current GA4 snippet | Defer any standardization until owner confirms the active property |
| Google Search Console verification | Not found in repo | No `google-site-verification` meta tag or root verification HTML file found | Plan owner verification and sitemap submission |
| Bing Webmaster verification | Not found in repo | No `msvalidate.01` meta tag or `BingSiteAuth.xml` found | Plan owner verification or GSC import |
| robots.txt sitemap reference | Present | `robots.txt` points to `https://rubinoxmetal.com/sitemap.xml` | No change |
| XML sitemap | Present | Local QA confirms 261 sitemap URLs match 261 local HTML pages | No change |
| Core contact CTAs | Present across site | WhatsApp, email, phone and quotation links appear on all 261 HTML pages | Map as lead events |
| Company profile PDF link | Limited presence | PDF link appears on 2 HTML pages | Map as secondary document event |

## Pages Missing Current GA4 Snippet

The current GA4 snippet is absent from 66 HTML files. This is an audit finding only; Batch 11A does not add tracking code.

- Root/company and utility pages: `terms-and-conditions.html`, `technical-resources.html`, price-factor pages, `privacy-policy.html`, `mission-vision.html`, `materials.html`, `quality-documentation-support.html`, `product-portfolio.html`, `product-forms.html`, `quotation.html`, `registrations-compliance.html`, `knowledge-hub-author.html`, `grades.html`, `company-profile.html`, `blog.html`.
- Newer grade/spec pages in `materials/`: ASTM A335 P5/P9, EN/DIN pipe and tube specification pages, seamless/welded/schedule pipe pages and `stainless-steel-supplier-mumbai.html`.
- Blog articles under `blog/`.

## Measurement Gaps

1. Owner has not confirmed that the existing GA4 property is the correct live property.
2. The current event helper uses a broad `generate_lead` event, but event naming and key-event setup have not been documented inside GA4.
3. GA4 coverage is not universal across the 261-page site.
4. GSC and Bing verification are pending, so query, indexing and sitemap-submission data are not yet available inside tooling.
5. Official social profile, Google Business Profile, directory listing and review URLs still need owner confirmation before any public links are added.

## Recommended Next Gate

Batch 11B has completed the approved repository-side tracking work.

- Confirmed GA4 Measurement ID: `G-JT5X5L5H07`.
- Previous accidental GA4 ID `G-CR18QYPS6C` was removed from `quotation.html`.
- GA4 coverage is now 261 of 261 HTML pages.
- `assets/js/tracking.js` now tracks safe lead-intent events without sending personal RFQ field values.
- Google Search Console uses owner-managed DNS TXT verification; no repo verification file or meta tag is required.
- Bing Webmaster Tools will be imported from GSC after verification; no repo verification file or meta tag is required.
- Sitemap submission remains an owner action after GSC verification: `https://rubinoxmetal.com/sitemap.xml`.
