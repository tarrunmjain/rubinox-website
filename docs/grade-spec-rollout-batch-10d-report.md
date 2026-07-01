# Rubinox Batch 10D Final Grade / Specification Rollout Report

Date: 2026-07-01

## Scope Summary

Batch 10D completed the controlled grade/specification page rollout using the approved Batch 10A, 10B and 10C gate template rhythm.

- Existing grade/specification pages discovered: 110
- Batch 1 pilot pages already polished: 5
- Batch 10A-Gate pages already polished: 10
- Batch 10B pages already polished: 35
- Batch 10C pages already polished: 30
- Batch 10D pages polished in this batch: 30
- Remaining existing grade/specification pages deferred after Batch 10D: 0
- New public pages created: 0
- Public URLs changed: 0
- Rollout status: complete for all 110 existing grade/specification pages in scope

## Batch 10D Pages Changed

- materials/carbon-steel-1018-supplier-india.html
- materials/carbon-steel-1045-supplier-india.html
- materials/din-2391-precision-tube-supplier-india.html
- materials/din-2448-seamless-pipe-supplier-india.html
- materials/en-10216-seamless-pipe-supplier-india.html
- materials/en-10217-welded-pipe-supplier-india.html
- materials/en-10305-1-precision-tube-supplier-india.html
- materials/hastelloy-b-2-supplier-india.html
- materials/hastelloy-b-3-supplier-india.html
- materials/hastelloy-c-4-supplier-india.html
- materials/hastelloy-x-supplier-india.html
- materials/incoloy-800-supplier-india.html
- materials/mild-steel-1020-supplier-india.html
- materials/mild-steel-a500-supplier-india.html
- materials/mild-steel-a513-supplier-india.html
- materials/mild-steel-is-2062-supplier-india.html
- materials/mild-steel-s235-supplier-india.html
- materials/mild-steel-s275-supplier-india.html
- materials/mild-steel-s355-supplier-india.html
- materials/phosphor-bronze-c510-supplier-india.html
- materials/phosphor-bronze-c521-supplier-india.html
- materials/phosphor-bronze-c544-supplier-india.html
- materials/sa-210-grade-a1-boiler-tube-supplier-india.html
- materials/sa-213-t11-tube-supplier-india.html
- materials/sa-213-t22-tube-supplier-india.html
- materials/sa-213-t91-tube-supplier-india.html
- materials/schedule-40-pipe-supplier-india.html
- materials/schedule-80-pipe-supplier-india.html
- materials/seamless-pipe-supplier-india.html
- materials/welded-pipe-supplier-india.html

## Template Improvements

- Rolled the approved grade/specification gate structure into the final 30 existing pages.
- Added compact hero sections, buyer-safe chips, quick navigation, overview/quick-answer sections, standards/specification tables, product-form cards, application context cards, documentation/RFQ checklist, related resources, visible FAQ sections and final RFQ CTAs.
- Reused the tightened gate CSS from the previous rollout batches and added the existing material RFQ CTA CSS where older specification pages did not already include it.
- Used only existing grade, family or product-form visuals already present in the repository.
- Kept wording RFQ-focused and avoided exact chemical, mechanical, stock, price, delivery or certification claims.

## Link And RFQ Improvements

- Added crawlable shortcut links to page sections.
- Added related product-form links for RFQ routing.
- Added related material, technical-resource, quality/documentation, Knowledge Hub and quotation paths where relevant.
- Strengthened RFQ prompts around grade/specification, product form, dimensions, quantity, documentation needs and delivery location.
- No broad internal-link strategy, sitemap URLs or public URL routing changed.

## Schema Status

- Existing WebPage, BreadcrumbList and Product schema meaning was preserved.
- FAQPage schema was preserved only on pages that already had FAQ schema.
- FAQPage schema was updated only to match visible FAQ content.
- Pages without existing FAQPage schema did not receive new FAQPage schema.
- No offers, prices, aggregate ratings, client proof, certification proof or availability claims were added to schema.

## Visual Gate

Screenshot folder:
`C:\Users\Dell\AppData\Local\Temp\rubinox-batch10d-visual-final-20260701`

Contact sheets:
- contact-1366-viewport.png
- contact-1280-viewport.png
- contact-768-viewport.png
- contact-390-viewport.png
- contact-360-viewport.png

Coverage:
- All 30 changed pages captured at 1366 and 390.
- 10 representative pages captured at 1280, 768 and 360.
- Total captures: 90.
- Programmatic layout result: 90 viewport checks, 0 overflow problems, 0 failed image responses, 1 H1 per page, hero images loaded, gate marker present.
- Manual contact-sheet review: pass.

Scores:

| Category | Score |
| --- | ---: |
| Premium feel | 8.6 |
| Content hierarchy | 8.6 |
| Readability | 8.7 |
| Card balance | 8.6 |
| Chip/link density | 8.5 |
| CTA clarity | 8.6 |
| Mobile comfort | 8.5 |
| Brand consistency | 8.7 |
| Buyer journey clarity | 8.6 |
| Overall page quality | 8.6 |

No changed page scored below 8/10.

## QA Results

| Check | Result |
| --- | --- |
| npm.cmd run qa:sitemap | PASS: 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 extra, 0 duplicates |
| npm.cmd run qa:crawl | PASS: 394 links scanned |
| npm.cmd run qa:schema | PASS: 261 HTML pages, 866 JSON-LD blocks, 0 invalid |
| npm.cmd run qa:accessibility | PASS: 5 pages checked, 0 violations |
| npm.cmd run test:navigation | PASS |
| npm.cmd run qa:html | PASS: 261 pages checked, 0 invalid |
| npm.cmd run qa:links | PASS: 394 links scanned |
| npm.cmd run qa:pa11y | PASS: 9/9 URLs within threshold; quotation 5 and contact 2 are existing threshold findings |
| npm.cmd run qa:images:audit | PASS: 179 image files, 4208 referenced image URLs, 0 missing; existing audit notes remain 54 non-WebP, 2 oversized and 3399 missing/empty alt instances |
| npm.cmd run qa:forbidden-claims | PASS for review workflow: 337 files scanned, 504 review matches, no files rewritten |
| Strict changed-page claim audit | PASS: 0 increases for strict unsafe terms across the 30 changed pages |
| git diff --check | PASS: no whitespace errors; Git reported line-ending normalization warnings only |
| Metadata/H1 preservation check | PASS: title, meta description, canonical and H1 text preserved on all 30 changed pages |

## Claim Safety Result

Human review of changed lines found no unsafe manufacturer, factory, plant, production, ready-stock, fixed-price, certification, client, rating or delivery-guarantee claims introduced.

Safe wording used:
- Rubinox is described as a stockist, supplier, importer, exporter and project supplier.
- Manufacturer appears only in visible FAQs that answer that Rubinox is not a manufacturer.
- Documentation wording uses where applicable and enquiry-wise review language.
- Delivery wording asks buyers to provide a delivery city, project site, port or export destination; no delivery timeline or guarantee is claimed.
- Project wording is used only for buyer RFQ context, project supplier role language, project specification references or project-site location details.
- No chemical/mechanical values, stock quantities, prices, certifications, client names, reviews or ratings were added.

## SEO And URL Safety

Confirmed preserved:
- Public SEO URLs.
- H1 intent and H1 text.
- Title/meta/canonical targets.
- Sitemap URLs.
- Schema meaning.
- Broad internal-link strategy.

## Completion Decision

Batch 10D completes the existing grade/specification rollout. Future new grade/specification URLs remain gated by keyword evidence, enquiry history or owner priority and are not part of this rollout.
