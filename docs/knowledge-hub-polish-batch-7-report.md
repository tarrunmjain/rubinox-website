# Knowledge Hub Polish Batch 7 Report

Date: 2026-06-30
Active folder: C:\Users\Dell\OneDrive\Documents\rubinox-website-live
Production domain: https://rubinoxmetal.com

## 1. Knowledge Hub Pages Discovered

Total Knowledge Hub pages discovered: 32 public pages.

- Blog index: blog.html
- Article pages: 30
- Editorial review page: knowledge-hub-author.html

Article pages discovered:

- blog/aluminium-6061-6063-7075-guide.html
- blog/aluminium-vs-stainless-steel.html
- blog/brass-c260-vs-c360.html
- blog/carbon-steel-vs-mild-steel.html
- blog/copper-brass-phosphor-bronze-guide.html
- blog/copper-c101-vs-c110-vs-c122.html
- blog/duplex-2205-vs-super-duplex-2507.html
- blog/duplex-stainless-steel-for-chemical-processing.html
- blog/export-metal-rfq-from-india.html
- blog/hastelloy-c276-vs-c22.html
- blog/high-speed-steel-sourcing-guide.html
- blog/inconel-monel-hastelloy-selection-guide.html
- blog/industrial-metal-product-forms-guide.html
- blog/marine-desalination-material-selection.html
- blog/metal-rfq-checklist-for-buyers.html
- blog/metals-for-automotive-ev-components.html
- blog/metals-for-chemical-petrochemical-industries.html
- blog/mild-steel-is-2062-vs-astm-a36.html
- blog/monel-400-vs-k500.html
- blog/mtc-pmi-third-party-inspection-guide.html
- blog/nickel-alloy-625-vs-718.html
- blog/phosphor-bronze-c510-vs-c521.html
- blog/smo-254-vs-904l-vs-316l.html
- blog/stainless-steel-304-vs-316-vs-316l.html
- blog/stainless-steel-304l-vs-316l.html
- blog/stainless-steel-310-vs-321-vs-347.html
- blog/stainless-steel-for-pharma-food-processing.html
- blog/super-duplex-for-seawater-desalination.html
- blog/titanium-grade-2-vs-grade-5.html
- blog/titanium-vs-stainless-steel.html

## 2. Pages Selected For Polish

Selected and changed:

- blog.html
- All 30 existing article pages under blog/
- data/page-inventory.csv
- data/content-template-map.csv
- docs/RUBINOX_GLOBAL_GROWTH_BACKLOG.md
- docs/RUBINOX_MASTER_ROADMAP.md
- docs/knowledge-hub-polish-batch-7-report.md

Reviewed but not changed in HTML:

- knowledge-hub-author.html. Existing copy already uses organization-level Rubinox Metal and Alloys Procurement Team wording and links to Knowledge Hub, technical resources, quality documentation support, quotation and about/contact routes.

Skipped:

- No new articles were created.
- No article URLs were changed.
- Location/export pages were not touched.

## 3. Blog Index Improvements

blog.html was polished for scanability and buyer journey clarity:

- Updated the section intro to explain grade comparison, standards, RFQ preparation and documentation review.
- Normalized category filters into broad buyer-friendly groups.
- Added visible guide-type labels to every card.
- Added buyer-intent chips to every card.
- Added crawlable card CTAs while keeping each card as a normal anchor link.
- Added an accessible no-results message for search/filter misses.
- Kept all article/resource href values unchanged.

## 4. Article Categories

Normalized visible/index filter categories:

- Stainless Steel
- Duplex & Super Duplex
- Nickel Alloys
- Non-Ferrous Metals
- Carbon Steel & Mild Steel
- RFQ & Procurement
- Standards & Documentation
- Export Support
- Industry Applications
- Product Forms

No Price Factors article category was added because no existing Knowledge Hub article in this batch had that intent.

## 5. Article UX Improvements

All 30 existing article pages were given consistent article meta strips with:

- category
- guide type
- Updated June 2026
- Reviewed by Rubinox Metal and Alloys Procurement Team

Existing article TOCs, answer-first sections, tables, FAQ blocks, editorial notes, related guide blocks, related Rubinox page links and RFQ CTAs were confirmed across the article set. Article body copy and H1 intent were not rewritten.

## 6. Internal Linking Improvements

Internal link strategy remained stable. Improvements were limited to blog index card CTAs and clearer card labels. Existing article related-guide blocks, related material/grade/resource links and quotation CTAs were preserved.

Confirmed:

- Blog card links remain normal crawlable anchors.
- Article-to-article related guide links remain crawlable.
- Existing links to technical-resources.html, quality-documentation-support.html and quotation.html remain in place where relevant.
- sitemap.xml was not changed.

## 7. Schema Status

Schema types currently present on article pages:

- BlogPosting
- BreadcrumbList
- FAQPage

Schema safety updates:

- BlogPosting dateModified was updated to 2026-06-30 on the touched article pages.
- dateModified aligns with visible Updated June 2026 wording.
- Author remains an Organization entry for Rubinox Metal and Alloys Procurement Team.
- Publisher remains Rubinox Metal and Alloys.
- mainEntityOfPage and URL values continue to point to the existing article URLs.
- No Person schema, AggregateRating, Review, Offer, price or availability schema was added.

qa:schema result: 261 HTML pages scanned, 866 JSON-LD blocks found, 0 invalid JSON-LD blocks.

## 8. Sitemap Status

qa:sitemap result:

- Sitemap URLs: 261
- Local HTML pages: 261
- Missing from sitemap: 0
- Sitemap URLs without local file: 0
- Duplicate sitemap URLs: 0

No sitemap URLs were added, removed or changed.

## 9. QA Results

qa:full was attempted as a baseline command and timed out, so the fallback QA suite was used.

Final fallback QA:

- qa:sitemap: PASS, 261 URLs, 0 missing, 0 extra, 0 duplicates.
- qa:crawl: PASS, 394 links scanned successfully.
- qa:schema: PASS, 261 pages, 866 JSON-LD blocks, 0 invalid blocks.
- qa:accessibility: PASS, 5 configured pages, 0 violations.
- test:navigation: PASS.
- qa:html: PASS, 261 pages checked, 0 invalid pages.
- qa:links: PASS, 394 links scanned successfully.
- qa:pa11y: PASS, 9/9 URLs within thresholds.
- qa:images:audit: PASS for missing images, 0 missing image files; existing audit counts remain 54 non-WebP images, 2 oversized images and 3399 missing/empty alt instances; no image files were modified.
- qa:forbidden-claims: PASS/no rewrite, 339 matches flagged for review after report creation.
- git diff --check: PASS; Git emitted CRLF normalization warnings only.

## 10. Visual QA Results

Browser-based repository QA completed successfully for configured pages:

- qa:accessibility rendered 5 configured pages and found 0 violations.
- qa:pa11y rendered 9 configured URLs including blog.html and passed within thresholds.
- test:navigation passed.

Custom Playwright visual sweeps for every changed article page and the representative all-width set were attempted, but the local shell harness repeatedly timed out and left orphaned headless browser workers. Those workers were cleaned up. Because the custom visual harness did not complete, this report does not claim a full screenshot sweep.

Risk note: article-page HTML changes were limited to the meta strip and dateModified value. Existing article layouts, TOCs, related guide blocks, FAQ grids and CTA sections were already present and then validated by qa:html, qa:schema, crawl and link checks.

## 11. Claim Safety Result

No unsafe business claims were introduced.

Confirmed unchanged/safe:

- Rubinox remains positioned as stockist, supplier, importer, exporter and project supplier.
- No manufacturing, factory, mill, producer or approved-vendor claim was added.
- No stock quantity, ready-stock, fixed-price, lowest-price, certification, client, project, rating, review, branch, warehouse or delivery guarantee claim was added.
- Reviewer wording remains Rubinox Metal and Alloys Procurement Team.
- No fake person names, photos, degrees, years of experience or credentials were added.

## 12. Future Knowledge Hub Recommendations

- Use Search Console and enquiry data before creating new Knowledge Hub articles.
- Keep future standards and documentation guides answer-first, conservative and visibly tied to buyer RFQ preparation.
- Add price-factor guides only without fixed prices, live price claims or lowest-price wording.
- Re-run a targeted screenshot visual sweep after browser harness stability is restored.
- Keep the author/review page organization-level unless owner-approved real team/person details are available.
