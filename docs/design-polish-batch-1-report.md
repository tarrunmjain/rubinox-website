# Rubinox Design Polish Batch 1 Report

Date: 2026-06-29

## Scope

Batch 1 polished the homepage, the technical resources page, and five pilot material/grade pages without changing public URLs, H1 intent, title/meta descriptions, canonicals, sitemap entries, analytics IDs, or JSON-LD schema.

Changed pages:

- `index.html`
- `technical-resources.html`
- `materials/ss-316l-supplier-india.html`
- `materials/inconel-625-supplier-india.html`
- `materials/duplex-2205-supplier-india.html`
- `materials/api-5l-grade-b-pipe-supplier-india.html`
- `materials/astm-a335-p91-pipe-supplier-india.html`

## Design Improvements

- Refined the homepage hero CTA hierarchy so WhatsApp remains the primary RFQ action, with email and call actions treated as secondary contact paths.
- Reworked homepage proof chips to use claim-safe buyer language: stockist, supplier, importer, exporter, project supplier, documentation review, PAN India, and export enquiry support.
- Added a compact homepage buyer path section linking buyers to grades, product forms, technical resources, documentation support, and quotation.
- Improved the Market Watch layout and disclaimer treatment so values are clearly positioned as context, not formal quotation data.
- Added technical resources guidance cards and table-use notes to make dense reference content easier to scan before RFQ preparation.
- Converted technical-resource table wrappers to consistent scroll containers with visible mobile scroll hints while preserving real HTML tables.
- Added grade-page shortcut navigation, specification signal cards, clearer RFQ-detail table framing, and stronger related-resource blocks across the five pilot pages.

## Claim Safety

No new unsafe capability, inventory, pricing, client, location, review, rating, or delivery claims were introduced. Copy continues to position Rubinox Metal and Alloys as a stockist, supplier, importer, exporter, and project supplier.

## QA Results

Automated checks completed after edits:

- `npm.cmd run qa:sitemap` passed: 261 sitemap URLs/pages, no missing, extra, or duplicate URLs.
- `npm.cmd run qa:crawl` passed: 394 links scanned.
- `npm.cmd run qa:schema` passed: 261 pages, 866 JSON-LD blocks, 0 invalid.
- `npm.cmd run qa:accessibility` passed: 5 configured pages, 0 violations.
- `npm.cmd run test:navigation` passed.
- `npm.cmd run qa:images:audit` completed: 179 image files, 4192 references, 0 missing, 54 non-WebP, 2 oversized, 3399 missing/empty alt instances. Existing audit findings were not rewritten in this batch.
- `npm.cmd run qa:forbidden-claims` completed: 321 files scanned, 330 existing matches flagged by the broad scanner. No new unsafe claim pattern was added by this batch.
- `npm.cmd run qa:links` passed: 394 links scanned.
- `npm.cmd run qa:pa11y` passed: 9/9 URLs. Homepage, technical resources, and pilot pages had 0 errors; existing quotation/contact thresholded findings remained within configured limits.
- `npm.cmd run qa:lighthouse:home` passed: Performance 86, Accessibility 100, Best Practices 100, SEO 100.
- `git diff --check` passed with no whitespace errors.

Rendered viewport QA completed with Playwright:

- Checked 7 touched pages across 5 viewport widths: 1366, 1280, 768, 390, and 360.
- Verified no horizontal overflow, one visible H1, sticky header behavior, visible logo, six top-rail icons, compact white footer, contained tables, FAQ padding, and WhatsApp/email/quotation links.

## Preserved Items

- No public pages were added.
- No URLs were renamed.
- No H1 intent changes were made.
- No title, meta description, canonical, Open Graph, Twitter card, analytics, sitemap, or JSON-LD schema changes were intentionally made.
- The white compact footer, sticky header, full top rail icon set, navy/white/silver/gold brand direction, and real HTML tables were preserved.

## Deferred Items

- Existing image audit findings remain available for a separate image-alt and asset-optimization batch.
- Existing broad forbidden-claims scanner matches remain a separate review item because the scanner intentionally flags many safe or legacy contexts.
- Broader site-wide content and HTML validation cleanup was outside this design-polish batch.
