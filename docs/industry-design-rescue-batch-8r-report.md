# Batch 8R Industries Page Design Rescue Report

## 1. What Was Visually Wrong

The Batch 8 version of `industries.html` passed technical QA but read like a dense SEO directory. Desktop content felt narrow with unused right-side space, industry cards were cramped, chip walls competed with buyer guidance, and the page journey was scattered across industry cards, location links, grade shortcuts, and a timeline.

## 2. Refactor or Revert Decision

The current Batch 8 page was refactored, not fully reverted. I compared the current page with the pre-Batch-8 version and kept the useful Batch 8 industry images, RFQ language, documentation links, and sector coverage while rebuilding the visible hierarchy.

## 3. Design Changes Made

- Expanded the rescue scope container to use a 1120px to 1180px desktop feel.
- Reworked industry cards into large one-card-per-row desktop modules with image left and content right.
- Improved section rhythm with a short hero, RFQ pathway strip, sector navigation, grouped industry sections, routing blocks, checklist, resources, FAQ, and final CTA.
- Raised card body readability and reduced micro-text pressure.
- Trimmed in-card material/product chips to a maximum of 4 per category.
- Preserved navy, white, silver, and gold branding.

## 4. Sections Reorganized

New visible order:

1. Hero / intro with Request Quote, View Materials, Technical Resources.
2. Trust / RFQ pathway strip with four support cards.
3. Sector navigation chips.
4. Grouped industry sections: Process & Energy, Chemical & Pharma, Marine & Water, Fabrication & Infrastructure, Food & Hygiene.
5. Material and product form routing block.
6. RFQ checklist.
7. Technical and documentation support.
8. Related Knowledge Hub guides.
9. FAQ with aligned FAQ schema.
10. Final CTA band.

## 5. Links Preserved / Reorganized

- Public page URL remained `industries.html`.
- H1 intent, title, meta description, canonical, sitemap URLs, sticky header, top rail icons, and compact white footer were preserved.
- Links remain normal crawlable anchors.
- In-card link density was reduced as required; extra routing emphasis was moved into the material/product routing and related resource sections.
- A mistaken draft duplex hub link was corrected to the existing `/materials/duplex-super-duplex.html` route before QA.

## 6. QA Results

Post-edit QA:

- `npm.cmd run qa:sitemap`: PASS. Sitemap URLs 261, local HTML pages 261, missing 0, extra 0, duplicates 0.
- `npm.cmd run qa:crawl`: PASS. Successfully scanned 394 links.
- `npm.cmd run qa:schema`: PASS. HTML pages scanned 261, JSON-LD blocks 866, invalid blocks 0.
- `npm.cmd run qa:accessibility`: PASS. 5 pages checked, total violations 0.
- `npm.cmd run test:navigation`: PASS. Navigation verification passed.
- `npm.cmd run qa:html`: PASS. HTML pages checked 261, invalid pages 0.
- `npm.cmd run qa:links`: PASS. Successfully scanned 394 links.
- `npm.cmd run qa:pa11y`: PASS. 9/9 URLs passed within configured threshold.
- `npm.cmd run qa:images:audit`: PASS with existing advisories. Missing image files 0; original website images were not modified.
- `npm.cmd run qa:forbidden-claims`: PASS / review-only. Files scanned 332, matches flagged for review 345, no files rewritten.
- `git diff --check`: PASS.

## 7. Visual QA Result

Screenshots were saved outside the repository:

- `C:\Users\Dell\AppData\Local\Temp\rubinox-batch8r-visual\industries-1366.png`
- `C:\Users\Dell\AppData\Local\Temp\rubinox-batch8r-visual\industries-1280.png`
- `C:\Users\Dell\AppData\Local\Temp\rubinox-batch8r-visual\industries-768.png`
- `C:\Users\Dell\AppData\Local\Temp\rubinox-batch8r-visual\industries-390.png`
- `C:\Users\Dell\AppData\Local\Temp\rubinox-batch8r-visual\industries-360.png`

Render checks:

| Width | Main width | First card width | Horizontal overflow | H1 count | Max in-card chips | Header | Top rail icons | Footer |
| --- | ---: | ---: | --- | ---: | ---: | --- | ---: | --- |
| 1366 | 1140 | 1070 | No | 1 | 4 | sticky | 6 | white |
| 1280 | 1140 | 1070 | No | 1 | 4 | sticky | 6 | white |
| 768 | 736 | 688 | No | 1 | 4 | sticky | 6 | white |
| 390 | 362 | 316 | No | 1 | 4 | sticky | 6 | white |
| 360 | 332 | 286 | No | 1 | 4 | sticky | 6 | white |

Visual inspection result: the rescued page now reads as a premium industrial supplier hub rather than a chip-heavy directory. Desktop uses the available width, cards are balanced, content order is clearer, and mobile stacks cleanly without horizontal scroll.

## 8. Claim Safety Result

No fake clients, projects, certificates, stock, pricing, ratings, reviews, factory, mill, manufacturing, or approved-vendor claims were introduced. The copy uses stockist, supplier, importer, exporter, project supplier, RFQ support, documentation support, and available-on-request language.

## 9. Public URL Confirmation

No public SEO URLs were changed. No sitemap URLs were changed. The `industries.html` H1 intent, title/meta/canonical, and schema validity were preserved. FAQ schema was updated to match the visible FAQ content.

## 10. Recommendation Before Batch 10

Proceed to Batch 10 only after owner review of the saved screenshots. The visual rescue is technically clean and significantly improves hierarchy, but the owner should approve the premium direction before further design batches continue.
