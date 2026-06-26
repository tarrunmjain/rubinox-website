# Site-Wide Polish and Blog Audit

Project: Rubinox Metal and Alloys  
Website: https://rubinoxmetal.com  
Repository: tarrunmjain/rubinox-website  
Audit date: 2026-06-27  
Deployment: GitHub Pages from `main`

## Executive Summary

The site-wide polish and Knowledge Hub sprint was completed in seven safe batches. The work improved the homepage material/product focus, added High Speed Steel and two stainless steel product-form pages, aligned visual spacing and section heading treatment, fixed footer/mobile utility presentation, upgraded material RFQ CTA blocks, polished location/export pages, and added a new Blog / Knowledge Hub with 15 buyer-focused SEO/AEO articles.

The final public sitemap contains 196 URLs. All new pages created during this sprint are linked, crawlable, included in the sitemap, schema-valid, and HTML-valid. Existing legacy HTML validation issues remain at the known baseline of 59 invalid pages; no new validation debt was introduced by the blog rollout or new pages.

## Batch Summary

| Batch | Scope | Commit | Push status |
| --- | --- | --- | --- |
| 1 | Homepage focus updates plus High Speed Steel, Channels and Perforated Sheets pages | `ed5188b` | Pushed to `origin/main` |
| 2 | Site-wide heading accent, section spacing and content alignment polish | `e5408c8` | Pushed to `origin/main` |
| 3 | Footer platform/social icon and mobile top bar polish | `7fc4040` | Pushed to `origin/main` |
| 4 | Premium material/grade/product-form RFQ CTA sections | `374e0ec` | Pushed to `origin/main` |
| 5 | Location/export page visual polish and branded link chips | `dc0a2c6` | Pushed to `origin/main` |
| 6 | Blog / Knowledge Hub with 15 SEO/AEO articles | `44de715` | Pushed to `origin/main` |
| 7 | Final audit report | Pending at report creation | To be committed after report review/QA |

## New Pages Created

Material and product-form pages:

- `/materials/high-speed-steel.html`
- `/materials/stainless-steel-channels-supplier-india.html`
- `/materials/stainless-steel-perforated-sheets-supplier-india.html`

Knowledge Hub pages:

- `/blog.html`
- `/blog/stainless-steel-304-vs-316-vs-316l.html`
- `/blog/duplex-2205-vs-super-duplex-2507.html`
- `/blog/inconel-monel-hastelloy-selection-guide.html`
- `/blog/titanium-grade-2-vs-grade-5.html`
- `/blog/smo-254-vs-904l-vs-316l.html`
- `/blog/metal-rfq-checklist-for-buyers.html`
- `/blog/mtc-pmi-third-party-inspection-guide.html`
- `/blog/stainless-steel-for-pharma-food-processing.html`
- `/blog/metals-for-automotive-ev-components.html`
- `/blog/metals-for-chemical-petrochemical-industries.html`
- `/blog/marine-desalination-material-selection.html`
- `/blog/aluminium-6061-6063-7075-guide.html`
- `/blog/copper-brass-phosphor-bronze-guide.html`
- `/blog/high-speed-steel-sourcing-guide.html`
- `/blog/export-metal-rfq-from-india.html`

## Pages and Systems Modified

- Homepage Popular Grades no longer includes the legacy SS Supplier Mumbai chip.
- Homepage prominent material cards now feature High Speed Steel instead of Other/Speciality Metals.
- Homepage Product Forms now includes Channels and Perforated Sheets.
- Footer quick links now include Blog across the static HTML site.
- `sitemap.xml` now includes the three new material/product pages, the Knowledge Hub, and 15 blog article URLs.
- Site-wide heading accents and spacing were aligned with the Rubinox navy/silver/gold visual language.
- Homepage contact box chips were reduced to stronger unique proof points and aligned with map sizing.
- Footer IndiaMART presentation was corrected so no broken image appears.
- Footer social/platform icon wrapping and mobile top-bar contact/social icon layout were polished.
- Material, grade and product-form pages now use contextual premium RFQ CTA boxes.
- Location and export pages now hide skip links until focus and use branded chip/card link styling for related links.

## Final QA Results

| QA command | Result |
| --- | --- |
| `pnpm run qa:sitemap` | Pass. 196 sitemap URLs, 196 local HTML pages, 0 missing URLs, 0 sitemap-only URLs, 0 duplicates. |
| `pnpm run qa:crawl` | Pass. 285 links scanned, no broken internal links reported. |
| `pnpm run qa:schema` | Pass. 196 HTML pages scanned, 525 JSON-LD blocks found, 0 invalid JSON-LD blocks. |
| `pnpm run qa:accessibility` | Pass. 5 configured pages checked, 0 Axe violations. |
| `pnpm run qa:html` | Expected baseline. 196 pages checked, 59 legacy invalid pages remain; all new sprint pages validate. |
| `pnpm run test:navigation` | Pass. Navigation verification passed. |

## Sitemap Count

- Baseline before this sprint: 177 URLs.
- Added in sprint: 3 material/product-form pages, 1 blog hub, 15 blog article pages.
- Final sitemap count: 196 URLs.

## Unsafe Wording Scan

Scan terms used:

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

Result summary:

| Term | Matches | Assessment |
| --- | ---: | --- |
| `manufacturer` | 20 | Safe context. Used in negative positioning FAQs such as Rubinox is not a manufacturer, or in buyer-sector phrases such as manufacturers/processors. |
| `manufactured by Rubinox` | 0 | No issue found. |
| `factory` | 0 | No issue found. |
| `ready stock` | 0 | No issue found. |
| `lowest price` | 0 | No issue found. |
| `best price` | 0 | No issue found. |
| `competitive pricing` | 0 | No issue found. |
| `guaranteed delivery` | 30 | Safe negative context on location/export pages, such as no local availability or guaranteed delivery timeline is claimed. |
| `branch office` | 0 | No issue found. |
| `local warehouse` | 130 | Safe negative context on city/export pages stating Rubinox does not claim a local warehouse. |
| `authorised mill` | 0 | No issue found. |
| `approved vendor` | 1 | Safe buyer-document context on Special Engineering Alloys page; it references buyer-provided approved vendor notes, not Rubinox status. |
| `certified exporter` | 0 | No issue found. |
| `exported to` | 0 | No issue found. |
| `global clients` | 0 | No issue found. |
| `delivery guarantee` | 2 | Safe negative context; no delivery guarantee is claimed. |

No unsafe Rubinox business claims were added. The site continues to position Rubinox as Stockist | Supplier | Importer | Exporter | Project Supplier.

## Design Issues Found and Fixed

- The homepage Popular Grades section had an off-intent legacy Mumbai supplier chip; it was removed from the hero chip set.
- High Speed Steel was missing from the homepage prominent material focus despite being a priority sourcing category; it was added with a dedicated page.
- Two product-form slots were blank or incomplete; Channels and Perforated Sheets were added with dedicated pages.
- Section heading accents were not visually consistent across pages; gold/navy section heading treatment was aligned.
- Section spacing was slightly generous in several templates; spacing was modestly reduced without making sections cramped.
- Homepage contact proof chips repeated contact methods; duplicates were removed so the box feels cleaner.
- Footer social/platform icons had wrapping and IndiaMART image issues; the footer now presents consistently.
- Mobile top bar contact links previously stacked vertically on some pages; Call, WhatsApp, Email, Facebook, Instagram and LinkedIn now fit compactly.
- Location/export pages had plain-text related-link sections and visible skip-link lines; related links now use branded chip/card styling and skip links are hidden until keyboard focus.
- Material bottom contact sections were basic compared with the premium core-page CTAs; they now use contextual RFQ CTA boxes.
- Blog pages initially triggered avoidable HTML validation errors from generated title length, lowercase doctype and phone spacing; these were corrected before commit.

## Remaining Known Issues

- `qa:html` still reports the known legacy baseline of 59 invalid pages. These are pre-existing validation issues and were not expanded by this sprint.
- The HTML validation baseline includes legacy material pages such as selected nickel alloy, stainless grade/form and industry pages. These can be cleaned in a future focused validation sprint.
- The accessibility script currently checks 5 configured representative pages, not all 196 pages.
- Blog cards use branded visual placeholders rather than dedicated article imagery. This avoids broken/hotlinked images and is safe, but a future asset pass could improve visual richness.
- Existing inline CSS/JS remains page-level because the project is a static HTML site without a shared stylesheet/build pipeline.

## Final Recommendations

1. Run a dedicated legacy HTML validation cleanup sprint for the remaining 59 invalid pages.
2. Expand the accessibility script to sample or scan all core templates, all new blog pages, and representative location/export pages.
3. Create optimized WebP article imagery for the 15 Knowledge Hub pages once final visual direction is approved.
4. Consider extracting repeated header, footer, CTA and blog/article styles into a shared static CSS file in a later technical-maintenance phase.
5. Add a content governance checklist for future pages covering one H1, visible FAQ before FAQPage schema, no pricing/stock/manufacturer claims, canonical checks and sitemap inclusion.
6. Use the Knowledge Hub articles for internal linking from future material, industry, location and export pages where contextually useful.

## Final Confirmation

- Final sitemap count: 196 URLs.
- Blog hub and 15 blog articles are created, linked, crawlable and included in sitemap.
- High Speed Steel, Channels and Perforated Sheets pages are created, linked, crawlable and included in sitemap.
- New sprint pages are HTML-valid.
- Schema validation has 0 invalid JSON-LD blocks.
- Accessibility validation has 0 violations on configured pages.
- Navigation verification passed.
- No unsafe business claims were added.
- `RUBINOX_MASTER_PROJECT_STATUS.md` remains excluded from sprint commits.