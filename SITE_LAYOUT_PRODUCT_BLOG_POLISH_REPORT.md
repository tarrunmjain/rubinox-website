# Site Layout, Product Visuals and Blog Polish Report

Project: Rubinox Metal and Alloys  
Website: https://rubinoxmetal.com  
Repository: tarrunmjain/rubinox-website  
Date: 2026-06-27

## Sprint Summary

This sprint completed the controlled site layout, product visual and Knowledge Hub polish work across five batches while preserving Rubinox's business positioning as Stockist | Supplier | Importer | Exporter | Project Supplier.

## Batch Commits

1. `05d7291` - Standardize header breadcrumbs and layout spacing
2. `d5b2f76` - Polish homepage cards and product form visuals
3. `6b54d97` - Redesign knowledge hub article experience
4. `075c2f7` - Add expanded SEO knowledge hub articles

## Batch 1: Header, Breadcrumb and Layout Polish

- Standardized header/logo sizing behavior across HTML pages.
- Added consistent breadcrumb link treatment and focus style.
- Added site-wide spacing polish for sections, cards and grids.
- Removed visual hero eyebrow/kicker labels where they created inconsistency.
- Added local IndiaMART platform icon asset.

## Batch 2: Homepage Product Visuals and Form Polish

- Removed the homepage Industries preview section as requested.
- Improved homepage contact map/card height alignment.
- Added local SVG visuals for Channels and Perforated Sheets.
- Updated homepage and relevant product form pages to use the new local assets.
- Added natural product-form references for Channels, Perforated Sheets and High Speed Steel across hub, location and export contexts.

## Batch 3: Existing Knowledge Hub Article Experience

- Added 15 local Knowledge Hub visual assets under `assets/blog/`.
- Updated `blog.html` article cards to use local visual assets.
- Added visual article cards to the existing 15 blog article pages.
- Preserved the existing 15 article URLs, H1s, canonicals and schema intent.
- Stabilized `scripts/qa-crawl.cjs` with lower Linkinator concurrency, retry-on-errors and timeout settings to avoid local static-server false negatives on existing WebP assets.

## Batch 4: Expanded SEO Knowledge Hub

- Added 15 new SEO/AEO article pages under `blog/`.
- Added 15 matching local article visuals under `assets/blog/`.
- Added the new article cards to `blog.html`.
- Updated `sitemap.xml` from 204 URLs to 219 URLs.
- Each new article includes one H1, canonical URL, BlogPosting schema, BreadcrumbList schema, visible FAQ content and matching FAQPage schema.

## New Article URLs Added

- `/blog/stainless-steel-304l-vs-316l.html`
- `/blog/stainless-steel-310-vs-321-vs-347.html`
- `/blog/duplex-stainless-steel-for-chemical-processing.html`
- `/blog/super-duplex-for-seawater-desalination.html`
- `/blog/nickel-alloy-625-vs-718.html`
- `/blog/monel-400-vs-k500.html`
- `/blog/hastelloy-c276-vs-c22.html`
- `/blog/titanium-vs-stainless-steel.html`
- `/blog/aluminium-vs-stainless-steel.html`
- `/blog/carbon-steel-vs-mild-steel.html`
- `/blog/mild-steel-is-2062-vs-astm-a36.html`
- `/blog/copper-c101-vs-c110-vs-c122.html`
- `/blog/brass-c260-vs-c360.html`
- `/blog/phosphor-bronze-c510-vs-c521.html`
- `/blog/industrial-metal-product-forms-guide.html`

## Final QA Results

- `pnpm run qa:sitemap`: Pass. 219 sitemap URLs, 219 local HTML pages, 0 missing, 0 duplicates.
- `pnpm run qa:crawl`: Pass. 337 links scanned successfully, no broken internal links.
- `pnpm run qa:schema`: Pass. 219 HTML pages scanned, 594 JSON-LD blocks, 0 invalid.
- `pnpm run qa:accessibility`: Pass. 5 configured pages checked, 0 violations.
- `pnpm run qa:html`: Pass with known legacy baseline. 219 pages checked, 59 invalid legacy pages; all blog pages are valid.
- `pnpm run test:navigation`: Pass.

## Unsafe Wording Scan

A site-wide HTML scan was run for high-risk wording such as manufacturer, best price, lowest price, competitive pricing, guaranteed delivery, ready stock, authorised mill supplier, approved vendor, certified exporter, direct factory, branch office, local warehouse, export history and export volume.

Findings were contextual or defensive rather than unsafe claims, including:

- Rubinox pages explicitly saying Rubinox is not a manufacturer.
- Location/export pages explicitly saying Rubinox does not claim a local branch, local warehouse or guaranteed local availability.
- Customer-context wording such as equipment manufacturers or manufacturer datasheet, not Rubinox manufacturing claims.

No new unsafe Rubinox business claim was added during this sprint.

## Remaining Known Issues

- HTML validation still reports the established legacy baseline of 59 invalid pages, mostly older material/grade pages outside this sprint scope.
- `RUBINOX_MASTER_PROJECT_STATUS.md` remains local and intentionally untracked.

## Deployment Notes

All implementation commits through Batch 4 were pushed to `origin/main`, which deploys through GitHub Pages for `https://rubinoxmetal.com`.