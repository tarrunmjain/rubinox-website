# Navigation and Legal Pages Verification Report

## Project

- Project: Rubinox Metal and Alloys website
- Repository: tarrunmjain/rubinox-website
- Production URL: https://rubinoxmetal.com
- Deployment: GitHub Pages from main branch
- Business positioning preserved: Stockist | Supplier | Importer | Exporter | Project Supplier

## Batch Summary

### Batch 1: Company, Portfolio and Legal Hub Pages

Status: Completed, committed and pushed.

Commit:

- d40ff6a Add company portfolio legal hub pages

Pages created:

1. mission-vision.html
2. registrations-compliance.html
3. product-portfolio.html
4. materials.html
5. product-forms.html
6. grades.html
7. privacy-policy.html
8. terms-and-conditions.html

Batch 1 updates:

- Added all 8 new public pages to sitemap.xml.
- Added footer legal links site-wide:
  - /privacy-policy.html
  - /terms-and-conditions.html
- Verified each new page has one H1 and a production canonical URL.
- Added WebPage and BreadcrumbList schema on the new pages.
- Added FAQPage schema only where visible FAQ content exists.

Batch 1 QA results:

- pnpm run qa:sitemap: Passed. 204 sitemap URLs, 204 local HTML pages, 0 missing, 0 sitemap-only, 0 duplicates.
- pnpm run qa:crawl: Passed. No broken internal links reported.
- pnpm run qa:schema: Passed. 204 pages checked, 549 JSON-LD blocks, 0 invalid JSON-LD.
- pnpm run qa:accessibility: Passed. 0 Axe violations on configured pages.
- pnpm run qa:html: Passed with known legacy baseline only. 204 pages checked, 59 legacy invalid pages. New pages validated after the phone spacing fix on privacy-policy.html.
- pnpm run test:navigation: Passed.

### Batch 2: Site-Wide Dropdown Navigation

Status: Completed, committed and pushed.

Commit:

- 3cb07b3 Add dropdown navigation structure

Header changes:

- Added a crawlable desktop dropdown navigation structure across 204 public HTML pages.
- Final top-level desktop labels:
  - Company Profile
  - Product Portfolio
  - Request Quote
  - Knowledge Hub
  - Contact
- Company Profile dropdown links:
  - /about-us.html
  - /mission-vision.html
  - /industries.html
  - /locations.html
  - /export.html
  - /registrations-compliance.html
- Product Portfolio dropdown links:
  - /product-portfolio.html
  - /materials.html
  - /product-forms.html
  - /grades.html
- Preserved WhatsApp Quote CTA.
- Added mobile accordion navigation sections for Company Profile and Product Portfolio.
- Preserved existing top bar, logo, footer, SEO metadata, schema and page content.
- Replaced the temporary dropdown symbol with the HTML entity `&#9662;` to avoid mojibake.

Batch 2 QA results:

- pnpm run qa:sitemap: Passed. Sitemap remained at 204 URLs, with 0 missing and 0 duplicates.
- pnpm run qa:crawl: Passed. 293 links scanned, no broken internal links reported.
- pnpm run qa:schema: Passed. 204 pages checked, 549 JSON-LD blocks, 0 invalid JSON-LD.
- pnpm run qa:accessibility: Passed. 0 Axe violations on configured pages.
- pnpm run qa:html: Passed with known legacy baseline only. 204 pages checked, 59 legacy invalid pages.
- pnpm run test:navigation: Passed.

## Footer Legal Links

The footer now includes the following legal links site-wide:

- Privacy Policy: /privacy-policy.html
- Terms & Conditions: /terms-and-conditions.html

These were added to the existing footer quick-links area instead of the header, keeping the main navigation focused on company, product, RFQ, knowledge and contact paths.

## Final Sitemap Count

- Final sitemap URL count: 204
- Expected count after 8 new pages: 204
- Result: Matches expected final count.

## Unsafe Wording Scan

Active HTML pages were scanned for the following risk terms and phrases:

- manufacturer
- manufactured by Rubinox
- factory
- ready stock
- lowest price
- best price
- competitive pricing
- guaranteed delivery
- branch office
- local warehouse
- authorised mill
- approved vendor
- certified exporter
- exported to
- global clients
- delivery guarantee
- ISO
- PED
- NORSOK
- mill approved
- mill authorized

Result:

- No unsafe affirmative manufacturer, pricing, ready-stock, fake certification, fake branch, fake warehouse, fake export-history, approved-vendor, mill-authorization or delivery-guarantee claims were added by this task.
- `manufacturer` hits are safe negative wording such as "Rubinox is not a manufacturer."
- `ISO`, `PED` and `NORSOK` hits on registrations-compliance.html are explicit non-claims, stating that Rubinox does not claim those certifications unless separately verified.
- Existing duplex/NORSOK references are project-specification context, not Rubinox certification claims.
- `local warehouse` and `guaranteed delivery` hits on location/export pages are safe disclaimers stating that Rubinox does not claim local branches, local warehouses or guaranteed delivery timelines.
- The `approved vendor` hit on materials/other-metals.html refers to buyer-provided approved vendor notes in a project file, not a Rubinox approved-vendor status claim.

## Business Rule Confirmation

Confirmed:

- Rubinox remains described as Stockist | Supplier | Importer | Exporter | Project Supplier.
- No manufacturer claim was added.
- No pricing claim was added.
- No ready-stock promise was added.
- No delivery guarantee was added.
- No branch-office or local-warehouse claim was added.
- No ISO, PED, NORSOK, mill authorization or approved-vendor claim was added.
- No export-history, export-volume or global-client claim was added.

## Indexing Readiness Notes

The new structure is ready for Search Console and Bing indexing submission from a technical navigation standpoint:

- New hub and legal pages are public, crawlable and in sitemap.xml.
- Header dropdown links are real anchor links.
- Footer legal links are real anchor links.
- Schema validation remains clean.
- Accessibility QA remains clean on configured pages.
- Crawl QA passes.

## Remaining Recommendations

- Continue reducing the known legacy HTML validation baseline of 59 invalid pages in future batches.
- Visually spot-check the dropdown menu on common desktop widths and mobile widths after GitHub Pages refreshes.
- Consider expanding navigation tests later to explicitly assert the new Company Profile and Product Portfolio dropdown links.
- Keep RUBINOX_MASTER_PROJECT_STATUS.md local-only and excluded from commits.
