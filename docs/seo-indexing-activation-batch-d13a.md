# D13A Search Indexing Activation And Monitoring Baseline

## Purpose

D13A starts the post-launch indexing monitoring phase for the frozen Rubinox Metal and Alloys website. This is a documentation-only batch for Google Search Console and Bing Webmaster Tools preparation.

## Frozen Baseline

- Frozen D12C commit: 44a273911105b60c16423b881df9eb15211faaf1
- Public URLs: 634
- Local public HTML pages: 634
- Live HTTP 200 pages: 634
- Sitemap URLs: 634
- JSON-LD blocks: 2352
- Invalid JSON-LD blocks: 0
- Orphan pages: 0
- Broken internal links: 0
- Maximum click depth: 3
- GA4: G-JT5X5L5H07
- Old GA4 absent: G-CR18QYPS6C
- Website freeze: active

## Live Endpoint Verification

D13A rechecked:

- https://rubinoxmetal.com/
- https://rubinoxmetal.com/sitemap.xml
- https://rubinoxmetal.com/robots.txt
- https://rubinoxmetal.com/material-location.html
- https://rubinoxmetal.com/export-material.html
- https://rubinoxmetal.com/hss-location.html
- https://rubinoxmetal.com/quotation.html
- https://rubinoxmetal.com/contact.html

Result:

- All checked endpoints returned HTTP 200.
- HTTPS and custom domain were preserved.
- Live sitemap contains 634 URLs.
- robots.txt references https://rubinoxmetal.com/sitemap.xml.
- No accidental sitewide Disallow was found.
- Priority pages remain self-canonical and indexable.
- GA4 and final CSS were present on HTML priority pages.

Live baseline output:

- D:\Websites\Rubinox\visual-qa\d13a-indexing-monitoring\d13a-live-endpoint-baseline.json

## D13A Files

- Priority tracker: docs/seo-indexing-monitoring-tracker-d13a.csv
- Google Search Console action guide: docs/google-search-console-actions-d13a.md
- Bing Webmaster action guide: docs/bing-webmaster-actions-d13a.md
- 30-day monitoring dashboard: docs/seo-30-day-monitoring-dashboard-d13a.csv
- Triage rules: docs/indexing-triage-rules-d13a.md
- Phase 13 roadmap: docs/seo-growth-roadmap-phase13.md

## Priority Tracker Summary

- Tracker URL count: 100
- Priority 1: core discovery and conversion pages.
- Priority 2: core material, grade, product-form, city and export-country pages.
- Priority 3: high-priority material-location, export-material, HSS, quality and knowledge pages.
- Search Console and Bing result fields are marked OWNER TO ENTER because authenticated submissions were not performed by Codex.

## QA Results

- `npm run qa:sitemap`: passed; 634 sitemap URLs, 634 local HTML pages, 0 missing, 0 duplicate sitemap URLs.
- `npm run qa:crawl`: passed; 776 links scanned.
- `npm run qa:schema`: passed; 634 HTML pages, 2352 JSON-LD blocks, 0 invalid.
- `npm run qa:accessibility`: passed; 5 sampled pages, 0 violations.
- `npm run test:navigation`: passed.
- `npm run qa:html`: passed; 634 pages checked, 0 invalid.
- `npm run qa:links`: passed; 776 links scanned.
- `npm run qa:pa11y`: passed; 9/9 sampled URLs passed with 0 errors.
- `npm run qa:forbidden-claims`: completed; broad review flags retained, no file rewrites.
- `npm run qa:images:audit`: completed; 184 image files, 9546 referenced image URLs, 0 missing image files, no image rewrites.
- `git diff --check`: passed.

## Manual Owner Actions Still Required

1. Refresh or submit https://rubinoxmetal.com/sitemap.xml in Google Search Console.
2. Refresh or submit https://rubinoxmetal.com/sitemap.xml in Bing Webmaster Tools.
3. Capture screenshots listed in docs/google-search-console-actions-d13a.md and docs/bing-webmaster-actions-d13a.md.
4. Enter Search Console/Bing status values into docs/seo-indexing-monitoring-tracker-d13a.csv and docs/seo-30-day-monitoring-dashboard-d13a.csv.

## Confirmations

- No website pages were created.
- No public website files were changed.
- No sitemap, robots.txt, canonical, schema, CSS, analytics or design changes were made.
- Protected untracked files were not touched.

## Next Step

Owner should perform Search Console and Bing submissions, then share the resulting screenshots/status.
