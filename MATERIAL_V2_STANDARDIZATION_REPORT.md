# Material V2 Standardization Report

Project: Rubinox Metal and Alloys

Working repository: `C:\Users\Dell\OneDrive\Documents\rubinox-website-live`

## Batch Status

- Batch 1 - Material family consistency audit: completed.
- Batch 2 - Hero grade chip standardization: completed.
- Batch 3 - Duplex & Super Duplex completion: completed.
- Batch 4 - Aluminium coverage review and completion: completed.
- Batch 5 - Non-ferrous family consistency: completed.
- Batch 6 - Ferrous family consistency: completed.
- Batch 7 - Final material library QA and report: completed.

## Pages Audited

- `materials/stainless-steel.html`
- `materials/duplex-super-duplex.html`
- `materials/nickel-alloys.html`
- `materials/titanium.html`
- `materials/smo-254.html`
- `materials/other-metals.html`
- `materials/aluminium.html`
- `materials/copper.html`
- `materials/brass.html`
- `materials/phosphor-bronze.html`
- `materials/carbon-steel.html`
- `materials/mild-steel.html`

## Audit Findings

| Page | Hero chips before Batch 2 | FAQ visible | FAQPage schema | Buyer guide | RFQ checklist | Product forms |
| --- | --- | --- | --- | --- | --- | --- |
| Stainless Steel | Generic PAN India / export / quotation chips | Yes | Yes | Yes | Yes | Yes |
| Duplex & Super Duplex | Generic PAN India / export / quotation chips | Yes | Yes | Yes | Needs heading standardization | Yes |
| Nickel Alloys | Generic PAN India / export / quotation chips | Yes | Yes | Yes | Yes | Yes |
| Titanium | Generic checkmark chips | Yes | Yes | Yes | Needs heading standardization | Yes |
| SMO 254 | Generic checkmark chips | Yes | Yes | Yes | Needs heading standardization | Yes |
| Special Engineering Alloys | Generic specialty chips, different class | Yes | Yes | Yes | Yes | Yes |
| Aluminium | Stronger family chips, missing 5052/5083 visibility | Yes | Yes | Yes | Yes | Yes |
| Copper | Stronger family chips, missing C145/C172 visibility | Yes | Yes | Yes | Yes | Yes |
| Brass | Stronger family chips, missing C280/C385 visibility | Yes | Yes | Yes | Yes | Yes |
| Phosphor Bronze | Stronger family chips, could be clearer on applications | Yes | Yes | Yes | Yes | Yes |
| Carbon Steel | Stronger family chips, could separate A516 Gr 70 | Yes | Yes | Yes | Yes | Yes |
| Mild Steel | Stronger family chips, could improve line balance | Yes | Yes | Yes | Yes | Yes |

## Missing Chips by Page

- Stainless Steel: grade-specific hero chips for 304, 304L, 316, 316L, 310, 321, 347 and 904L were missing.
- Duplex & Super Duplex: grade/UNS chips for Duplex 2205, Super Duplex 2507, Zeron 100 and UNS references were missing.
- Nickel Alloys: family chips for Inconel, Monel, Hastelloy, Incoloy, Nickel 200 and Nickel 201 were missing.
- Titanium: grade chips for Grade 1, Grade 2, Grade 5 and Grade 23 were missing.
- SMO 254: UNS S31254, 6Mo and ASTM/chloride-service chips were missing.
- Special Engineering Alloys: alloy family chips were present in a different class and have now been aligned by meaning.
- Aluminium, Copper, Brass, Phosphor Bronze, Carbon Steel and Mild Steel: chips existed, but were refined to better match current visible coverage.

## Missing Grade Links and Pages

- Duplex & Super Duplex: Zeron 100 / UNS S32760 has category content but no focused page yet. To be reviewed in Batch 3.
- Aluminium: broad grades such as 1050, 1060, 1070, 1100, 2014, 2024, 3003, 3105, 5086, 5454, 5754, 6082, 7050 and 8011 need commercial/thin-content review in Batch 4.
- Copper: C102 is not yet a focused page and should be reviewed in Batch 5.
- Brass: CZ108, CZ121, CZ124 and C272 are not yet focused pages and should be reviewed in Batch 5.
- Phosphor Bronze: PB1, PB2 and C51000/C52100 naming coverage should be reviewed in Batch 5 without creating duplicate pages against C510/C521.
- Mild Steel: IS 2062 and S275 require duplicate/thin-content review in Batch 6.

## Inconsistent Hero Styling

- Older pages used generic CTA-like chips rather than material/grade chips.
- Titanium and SMO 254 used checkmark chips, unlike newer category pages.
- Special Engineering Alloys uses `.tagrow` / `.tag` rather than `.miniRow` / `.miniTag`, but the visual style is already rectangular navy/gold/white and should remain unless a broader component cleanup is approved.

## Inconsistent FAQ Styling

- FAQ sections exist across all audited category pages.
- Some older pages use inline padding on `.faqItem`; this is visual debt for later cleanup, not a blocker for Batch 2.

## Inconsistent Product Form Sections

- All audited pages have product-form coverage.
- The strongest pattern is a product forms availability matrix on newer enhanced pages.
- Older pages should be standardized only when their family batch is active to avoid broad unrelated edits.

## Batch 2 Actions Completed

- Replaced generic hero chips with material/grade-aware chips on:
  - Stainless Steel
  - Duplex & Super Duplex
  - Nickel Alloys
  - Titanium
  - SMO 254
- Refined existing chips on:
  - Aluminium
  - Copper
  - Brass
  - Phosphor Bronze
  - Carbon Steel
  - Mild Steel
- Updated Special Engineering Alloys chips to emphasize:
  - Alloy Steel
  - Tool Steel
  - Spring Steel
  - Bearing Steel
  - Cobalt Alloys
  - Specialty Metals

## Recommended Next Actions

1. Complete Duplex & Super Duplex family review, especially Zeron 100 / UNS S32760 and UNS S32205/S31803 coverage.
2. Review Aluminium broad grade coverage and avoid thin pages for less common grades.
3. Standardize Copper, Brass and Phosphor Bronze naming without creating duplicate pages for equivalent designations.
4. Standardize Carbon Steel and Mild Steel overlap, keeping A36 and 1018 canonical to the stronger Carbon Steel pages unless a distinct mild-steel angle is justified.
5. Run final full QA and update this report with commit hashes and known unrelated legacy issues.


## Batch 3 Actions Completed

- Created `materials/zeron-100-supplier-india.html` as a non-thin focused page for Zeron 100 / UNS S32760.
- Linked Zeron 100 from the Duplex & Super Duplex category page, focused pages section, UNS references and product forms matrix.
- Added Zeron 100 to `sitemap.xml` with the existing Duplex material image asset.
- Added FAQPage schema to existing Duplex 2205 and Super Duplex 2507 focused pages after visible FAQ content.
- Added related Zeron 100 links on Duplex 2205 and Super Duplex 2507 pages.
- Converted the Super Duplex 2507 main wrapper from `div role="main"` to native `main` markup for HTML validation consistency.
- Standardized the Duplex category quotation section heading to `Duplex and Super Duplex RFQ Checklist`.

## Batch 3 QA Status

- `qa:schema`: passed. HTML pages scanned: 106. JSON-LD blocks found: 256. Invalid JSON-LD blocks: 0.
- `test:navigation`: passed.
- `qa:crawl`: passed. Successfully scanned 183 local links.
- `qa:html`: completed with known unrelated legacy issues. Batch 3 touched pages are valid: `materials/duplex-super-duplex.html`, `materials/duplex-2205-supplier-india.html`, `materials/super-duplex-2507-supplier-india.html` and `materials/zeron-100-supplier-india.html`. Overall invalid pages after this batch: 59, all outside the Duplex batch scope except pre-existing `industries.html` and older legacy grade/product pages.
- `qa:sitemap`: passed. Sitemap URLs: 106. Local HTML pages: 106. Missing from sitemap: 0. Sitemap URLs without local file: 0. Duplicate sitemap URLs: 0.


## Batch 4 Actions Completed

- Created `materials/aluminium-6082-supplier-india.html` as a focused non-thin structural/extrusion Aluminium page.
- Updated `materials/aluminium.html` to include Aluminium 6082 in hero chips, common grades, comparison guidance and buyer specification examples.
- Added category-level coverage for broader aluminium grade enquiries such as 1050, 1060, 1070, 1100, 2014, 2024, 3003, 3105, 5086, 5454, 5754, 7050 and 8011 without creating thin standalone pages.
- Added a visible FAQ and matching FAQPage schema coverage for broader aluminium grade enquiries.
- Linked Aluminium 6082 from existing Aluminium grade pages and added the new URL to `sitemap.xml`.

## Batch 4 QA Status

- `qa:schema`: passed. HTML pages scanned: 107. JSON-LD blocks found: 259. Invalid JSON-LD blocks: 0.
- `test:navigation`: passed.
- `qa:crawl`: passed. Successfully scanned 184 local links.
- `qa:html`: completed with known unrelated legacy issues. All touched Aluminium pages are valid: `materials/aluminium.html`, `materials/aluminium-5052-supplier-india.html`, `materials/aluminium-5083-supplier-india.html`, `materials/aluminium-6061-supplier-india.html`, `materials/aluminium-6063-supplier-india.html`, `materials/aluminium-6082-supplier-india.html` and `materials/aluminium-7075-supplier-india.html`. Overall invalid pages after this batch: 59, all outside the Aluminium batch scope.
- `qa:sitemap`: passed. Sitemap URLs: 107. Local HTML pages: 107. Missing from sitemap: 0. Sitemap URLs without local file: 0. Duplicate sitemap URLs: 0.


## Batch 5 Actions Completed

- Updated Copper category guidance with C102 / oxygen-free copper reference handling without creating a thin duplicate page.
- Updated Brass category guidance with CZ108, CZ121, CZ124 and C272 reference handling without creating duplicate thin pages.
- Updated Phosphor Bronze category guidance with PB1, PB2, C51000 and C52100 naming coverage without duplicating existing C510 and C521 pages.
- Added matching visible FAQ entries and FAQPage schema entries on the Copper, Brass and Phosphor Bronze category pages.
- Fixed duplicated Brass C464 standards wording in both visible FAQ content and FAQPage schema.
- Corrected inherited mojibake separator/copyright entities across Copper, Brass and Phosphor Bronze family pages touched in this batch.

## Batch 5 QA Status

- `qa:schema`: passed. HTML pages scanned: 107. JSON-LD blocks found: 259. Invalid JSON-LD blocks: 0.
- `test:navigation`: passed.
- `qa:crawl`: passed. Successfully scanned 184 local links.
- `qa:html`: completed with known unrelated legacy issues. All touched non-ferrous pages are valid: `materials/copper.html`, `materials/brass.html`, `materials/phosphor-bronze.html` and `materials/brass-c464-supplier-india.html`. Overall invalid pages after this batch: 59, all outside the non-ferrous batch scope.


## Batch 6 Actions Completed

- Created `materials/mild-steel-is-2062-supplier-india.html` as a focused non-thin IS 2062 structural steel page.
- Created `materials/mild-steel-s275-supplier-india.html` as a focused non-thin EN S275 structural steel page.
- Updated the Mild Steel category page with IS 2062 and S275 comparison guidance, visible FAQ coverage and matching FAQPage schema.
- Updated Carbon Steel category guidance to clarify IS 2062 and EN S275 as related structural steel references, not automatic substitutes.
- Added internal links from related Carbon Steel and Mild Steel pages to the new IS 2062 and S275 pages where appropriate.
- Added both new pages to `sitemap.xml` with the existing mild steel image asset.

## Batch 6 QA Status

- `qa:schema`: passed. HTML pages scanned: 109. JSON-LD blocks found: 265. Invalid JSON-LD blocks: 0.
- `test:navigation`: passed.
- `qa:crawl`: passed. Successfully scanned 186 local links.
- `qa:html`: completed with known unrelated legacy issues. All touched ferrous pages and new pages are valid, including `materials/mild-steel-is-2062-supplier-india.html` and `materials/mild-steel-s275-supplier-india.html`. Overall invalid pages after this batch: 59, all outside the ferrous batch scope.
- `qa:sitemap`: passed. Sitemap URLs: 109. Local HTML pages: 109. Missing from sitemap: 0. Sitemap URLs without local file: 0. Duplicate sitemap URLs: 0.


## Batch 7 Final Sprint Summary

### Families Completed

- Duplex & Super Duplex
- Aluminium
- Copper
- Brass
- Phosphor Bronze
- Carbon Steel
- Mild Steel

### Pages Created

- `materials/zeron-100-supplier-india.html`
- `materials/aluminium-6082-supplier-india.html`
- `materials/mild-steel-is-2062-supplier-india.html`
- `materials/mild-steel-s275-supplier-india.html`

### Pages Enhanced

- Category pages enhanced or standardized: `materials/duplex-super-duplex.html`, `materials/aluminium.html`, `materials/copper.html`, `materials/brass.html`, `materials/phosphor-bronze.html`, `materials/carbon-steel.html` and `materials/mild-steel.html`.
- Existing grade pages enhanced with internal links, visible FAQ/schema coverage where needed, wording fixes or entity cleanup across the Duplex, Aluminium, Copper/Brass/Phosphor Bronze and ferrous batches.

### Sitemap Changes

- Added Zeron 100, Aluminium 6082, IS 2062 Mild Steel and EN S275 Mild Steel public URLs.
- Final sitemap QA confirms 109 sitemap URLs, 109 local HTML pages, no missing URLs, no orphan sitemap URLs and no duplicate sitemap URLs.

### Final QA Baseline

- `qa:schema`: passed. HTML pages scanned: 109. JSON-LD blocks found: 265. Invalid JSON-LD blocks: 0.
- `test:navigation`: passed.
- `qa:crawl`: passed. Successfully scanned 186 local links.
- `qa:html`: completed with known unrelated legacy issues. The pages touched or created during this sprint are valid. Overall invalid pages remain at 59 because of older legacy pages outside the completed family batches.
- `qa:sitemap`: passed. Sitemap URLs: 109. Local HTML pages: 109. Missing from sitemap: 0. Sitemap URLs without local file: 0. Duplicate sitemap URLs: 0.

### Commit Hashes

- `3c17d10` - Standardize material page hero grade chips
- `302b600` - Complete Duplex and Super Duplex material family
- `70b90fe` - Complete Aluminium material family coverage
- `9dbb43c` - Standardize non-ferrous material families
- `999633b` - Standardize ferrous material families

### Skipped Items and Rationale

- No separate Copper C102 page was created. C102 is now covered at category level to avoid a thin or duplicate oxygen-free copper page against the existing C101 coverage.
- No separate CZ108, CZ121, CZ124 or C272 Brass pages were created. These buyer references are now covered at category level to avoid duplicate or equivalence-risk pages.
- No separate PB1, PB2, C51000 or C52100 Phosphor Bronze pages were created. C51000 and C52100 are handled through the existing C510 and C521 pages plus category-level naming guidance.
- No broad Carbon Steel duplicate pages were created for IS/EN structural references. IS 2062 and EN S275 were created under Mild Steel because the existing site structure already has mild-steel structural grade pages for S235 and S355.

### Known Remaining Issues

- `qa:html` still reports 59 invalid legacy pages, mainly older Stainless Steel/Nickel/Titanium/SMO focused pages and `industries.html`. These were outside the material-family completion sprint scope and were not changed.
- `RUBINOX_MASTER_PROJECT_STATUS.md` remains an untracked local file and was intentionally not staged or committed.
