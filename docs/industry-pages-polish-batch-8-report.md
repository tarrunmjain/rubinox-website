# Industry Pages Polish Batch 8 Report

Date: 2026-06-30
Active folder: C:\Users\Dell\OneDrive\Documents\rubinox-website-live
Production domain: https://rubinoxmetal.com

## 1. Industry Pages Discovered

Public industry pages discovered: 1.

- industries.html

Discovery sources:

- sitemap.xml includes https://rubinoxmetal.com/industries.html.
- data/page-inventory.csv maps https://rubinoxmetal.com/industries.html as the Industries hub.
- Local filename search found industries.html plus industry images and Knowledge Hub articles, but no individual public industry page files.

Individual industry pages discovered: none.

Related but not individual industry pages:

- blog/metals-for-chemical-petrochemical-industries.html
- blog/industrial-metal-product-forms-guide.html
- Industry image assets under assets/

## 2. Pages Changed

- industries.html
- data/page-inventory.csv
- data/content-template-map.csv
- docs/RUBINOX_GLOBAL_GROWTH_BACKLOG.md
- docs/RUBINOX_MASTER_ROADMAP.md
- docs/industry-pages-polish-batch-8-report.md

## 3. Pages Skipped

- No individual industry pages were changed because no individual industry page files or sitemap URLs exist.
- City and export pages were not edited. They are linked only as relevant enquiry-routing references.
- Keyword and location data maps were not edited because no primary URL, URL status or location architecture changed.

Future individual industry pages remain candidates only and should be created only after query evidence, enquiry history or owner-priority review confirms differentiated buyer value.

## 4. Industry Hub Improvements

industries.html was polished into a more practical industry-solutions hub while preserving the existing public URL and SEO intent.

Changes made:

- Added the required safe industry intro with stockist, supplier, importer, exporter and project supplier role language.
- Rebuilt the flat sector list into grouped RFQ pathways:
  - Process & Energy Industries
  - Engineering & Fabrication
  - Marine & Export Applications
  - Infrastructure & Construction
  - Food, Pharma & Hygiene Applications
- Added compact industry cards with industry name, material/grade links, product-form links, standards/RFQ notes and quotation CTAs.
- Replaced the dense material table with mobile-safe RFQ checklist and card-based support sections.
- Updated visible FAQ copy and FAQPage JSON-LD to match the new visible FAQ content.

## 5. Material and Grade Link Improvements

Added crawlable links to relevant material and grade pages, including:

- API 5L Grade B, API 5L X52, API 5L X65 and ASTM A106 Grade B.
- ASTM A335 P11, P22, P91, SA 210 Grade A1 and SA 213 T11/T22/T91.
- SS 304, SS 316, SS 316L, SS 316Ti, SS 904L and SS 310.
- Duplex 2205, Super Duplex 2507, SMO 254, Alloy 20, Inconel 625, Hastelloy C276, Hastelloy C22, Monel 400 and titanium.
- IS 2062, IS 1239, IS 3589, ASTM A36, mild steel and carbon steel.

## 6. Product-Form Link Improvements

Added grouped product-form links for:

- Pipes
- Tubes
- Sheets
- Plates
- Coils
- Flanges
- Fittings
- Fasteners
- Bars
- Rods
- Flats
- Angles
- Channels
- Wire mesh

## 7. Knowledge Hub Link Improvements

Added related guide links for industry material selection and RFQ preparation:

- Chemical and petrochemical metals guide.
- Duplex stainless steel for chemical processing.
- Marine and desalination material selection.
- Stainless steel for pharma and food processing.
- MTC, PMI and third-party inspection guide.
- Metals for automotive and EV components.
- Industrial metal product forms guide.
- Metal RFQ checklist for buyers.

## 8. Technical and Resource Link Improvements

Added visible resource cards and links to:

- technical-resources.html
- quality-documentation-support.html
- quotation.html
- locations.html and selected city pages where useful for enquiry routing.
- export.html and selected export markets where useful for destination routing.

The location/export routing copy explicitly avoids local branch, local inventory, approved-vendor and fixed-delivery implications.

## 9. RFQ CTA Improvements

RFQ pathways now ask buyers to share:

- Industry or end use.
- Grade and standard.
- Product form.
- Size, schedule, class, thickness, finish or drawing.
- Quantity or BOQ/MTO.
- Documentation needs such as MTC, PMI, inspection, packing or traceability where applicable.
- Destination city, site, port or country.
- Project notes, phase priority and alternates permitted by the buyer.

The final CTA copy now says "quotation support" rather than "fast quotation support."

## 10. Schema Status

- WebPage schema preserved.
- BreadcrumbList schema preserved.
- FAQPage schema updated to match visible FAQ content.
- No Product offer, price, LocalBusiness, fake certification, fake project, fake review or fake client schema was added.

## 11. Sitemap and SEO Status

- Sitemap URLs were not changed.
- No public URLs were added, removed or renamed.
- industries.html title, meta description, canonical URL and H1 intent were preserved.
- WebPage and Breadcrumb schema meaning was preserved.
- Internal links remain normal crawlable anchors.

## 12. QA Results

Baseline:

- git pull origin main: already up to date.
- qa:full: timed out during baseline, so the requested fallback suite was used.
- Baseline fallback passed for qa:sitemap, qa:crawl, qa:schema, qa:accessibility, test:navigation, qa:html, qa:links and qa:pa11y.
- Baseline qa:images:audit reported existing audit-only findings with 0 missing image files.
- Baseline qa:forbidden-claims reported review matches only and did not rewrite files.

Post-edit checks:

- qa:html: 261 pages checked, 0 invalid pages.
- qa:schema: 261 pages scanned, 866 JSON-LD blocks, 0 invalid blocks.
- git diff --check: no whitespace errors; only LF-to-CRLF working-copy warnings on edited files.
- qa:sitemap: 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 extra, 0 duplicates.
- qa:crawl: passed, 394 links scanned successfully.
- qa:accessibility: 5 configured pages checked, 0 violations.
- test:navigation: passed.
- qa:links: passed, 394 links scanned successfully.
- qa:pa11y: 9 of 9 URLs passed within configured thresholds.
- qa:images:audit: 179 image files, 4192 referenced image URLs, 0 missing image files; existing non-WebP, oversized and alt-text audit counts remain.
- qa:forbidden-claims: 331 files scanned, 346 matches flagged for review, no files rewritten.

## 13. Visual QA Results

Focused Playwright visual QA was run on industries.html at:

- 1366px
- 1280px
- 768px
- 390px
- 360px

Result: passed.

Checked:

- No horizontal scroll.
- One H1.
- Sticky header.
- Logo visible.
- Top rail visible.
- Compact white footer remains.
- Industry cards render and stack.
- Quotation links present.
- FAQ padding remains usable.
- No exact black text token found.
- No failed local asset responses.
- Raster images render.

## 14. Claim Safety Result

No unsafe manufacturer, factory, mill, ready-stock, fixed-price, approved-vendor, client, project, rating, certification or delivery-guarantee claims were added.

Safe language used:

- RFQ support.
- Supply enquiry support.
- Documentation support where applicable.
- Project supplier support.
- Subject to grade, size, quantity, documentation and logistics requirements.

The visible FAQ clarifies that Rubinox supports industry RFQs as a stockist, supplier, importer, exporter and project supplier.

## 15. Future Industry Page Recommendations

Future individual pages may be considered only after evidence supports differentiated content. Candidate topics:

- Oil and gas / petrochemical.
- Chemical processing.
- Pharma.
- Food and dairy.
- Power / boiler / energy.
- Marine / offshore / desalination.
- EPC / projects.
- Fabrication / engineering.
- Construction / infrastructure.
- Automotive / aerospace support.
- Water treatment.

Future pages should preserve cautious supplier/stockist/importer/exporter/project supplier wording and avoid fake proof, fake approvals, stock promises, fixed prices, local-branch claims and delivery guarantees.
