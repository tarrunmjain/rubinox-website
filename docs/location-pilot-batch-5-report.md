# Rubinox Batch 5 Location Pilot Report

Date: 2026-06-29
Scope: Location hub polish plus controlled pilot improvements for selected existing city/export pages.

## Existing Pages Discovered

- Location hub: locations.html
- Location pages discovered: 50 existing HTML files under locations/.
- Export hub: export.html
- Export pages discovered: 15 existing HTML files under export/.

## Pages Created

None. Batch 5 did not create public pages or add sitemap URLs.

## Pages Improved

- locations.html
- locations/mumbai.html
- locations/pune.html
- locations/chennai.html
- locations/bengaluru.html
- locations/delhi.html, updated for Delhi NCR buyer intent while preserving the existing URL
- locations/ahmedabad.html
- locations/vadodara.html
- locations/surat.html
- locations/jamnagar.html
- export/uae.html

## Hub Improvements

- Added priority location clusters for Maharashtra, Gujarat, South India, North India/Delhi NCR, East/Central India and export markets.
- Added an RFQ guidance section linking to product forms, grades, technical resources, quality documentation support, quotation and export RFQ pages.
- Preserved the existing hub URL, H1 intent, canonical URL and sitemap entry.

## City Template Pilot

- Added safer short-answer, industry-focus, materials, product-form, buyer-search wording, documentation guidance, RFQ checklist, related-link and FAQ sections.
- Used dealer wording only as buyer-search language and paired it with stockist, supplier, importer, exporter and project supplier positioning.
- Added internal links to relevant material, grade, product-form, quotation, technical and documentation pages.

## UAE / Dubai Export Pilot

- Reframed the page as exporter from India for UAE/Dubai enquiries.
- Added export-safe industry, material, product-form, documentation, packing, destination and FAQ guidance.
- Preserved the existing URL and canonical target.

## Safe Wording Used

- Stockist, supplier, importer, exporter and project supplier.
- Supplier support for city buyers.
- Supplier and exporter from India for UAE/Dubai enquiries.
- Documentation assistance where applicable and as per buyer or project requirement.

## Unsafe Claims Avoided

- No manufacturer, factory, mill or production claims were added.
- No local office, branch, warehouse, stockyard, local inventory or ready-stock claims were added.
- No guaranteed delivery timing, price, certification, client, project, rating or review claims were added.
- No authorized dealer or local Dubai/UAE presence claim was added.

## Data Map Updates

- data/page-inventory.csv: 11 existing rows updated for Batch 5 status and notes.
- data/keyword-master-map.csv: 42 rows updated where the primary URL is a Batch 5 pilot page. Future product-city rows remain planned.
- data/location-seo-map.csv: 11 location/export rows updated for pilot status and notes.

## Sitemap Status

- Local sitemap URL count before Batch 5: 261.
- Local sitemap URL count after Batch 5: 261.
- sitemap.xml was not changed.

## QA Results

- git diff --check: passed. Git printed LF/CRLF normalization warnings only.
- npm run qa:sitemap: passed. Sitemap URLs 261, local HTML pages 261, missing 0, extra 0, duplicates 0.
- npm run qa:crawl: passed. 394 links scanned successfully.
- npm run qa:links: passed. 394 links scanned successfully.
- npm run qa:schema: passed. 261 HTML pages scanned, 866 JSON-LD blocks found, 0 invalid JSON-LD blocks.
- npm run qa:accessibility: passed. 5 checked pages, 0 accessibility violations.
- npm run test:navigation: passed.
- npm run qa:html: passed. 261 HTML pages checked, 0 invalid pages.
- npm run qa:pa11y: passed within repo thresholds. 9/9 URLs passed; quotation and contact retain existing threshold-tolerated Pa11y findings.
- npm run qa:images:audit: passed on final retry. Missing image files 0; existing audit debt remains 54 non-WebP image files, 2 oversized images and 3399 empty-alt icon/reference instances. Original website images were not modified.
- npm run qa:forbidden-claims: completed. 327 files scanned, 339 review candidates flagged by the broad checker, no rewrites. Targeted scan of Batch 5 public pages found no high-risk positive manufacturer, factory, mill, warehouse, stockyard, ready-stock, local-stock, Dubai-dealer, Dubai-stockist or guaranteed-delivery phrasing.

## Visual QA Result

Playwright responsive visual QA passed. Rendered 11 changed public pages across 5 viewport widths: 1366, 1280, 768, 390 and 360 px, for 55 checks. Checks covered horizontal overflow, single H1, sticky header, visible logo, desktop top-rail icons, compact white footer, CTA links, FAQ padding, exact-black text, nonblank screenshots and high-risk public claim phrases.

## Deferred Locations

All non-pilot city, state, country/export and product-location expansions remain deferred until Search Console data, enquiry evidence or clear buyer value supports differentiated implementation.

## Next Recommended Batch

Use Search Console and enquiry data to choose the next small group of location pages. Keep each page differentiated by local industry context, material intent and RFQ usefulness, and avoid mass doorway-page expansion.
