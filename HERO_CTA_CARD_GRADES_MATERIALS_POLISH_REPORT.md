# Hero CTA, Card Hover, Grades Hub and Materials Hub Polish Report

## Executive Summary

This sprint completed the approved safe visual and hub-structure polish batches for the Rubinox Metal and Alloys static website. The work preserved existing SEO URLs, H1s, metadata, canonicals, schema, sitemap entries, navigation behavior and Rubinox business positioning.

Rubinox remains positioned as a Stockist | Supplier | Importer | Exporter | Project Supplier. No pricing, stock promises, manufacturer claims, certification claims, vendor status claims, branch office claims, warehouse claims or delivery guarantees were added.

## Batches Completed

### Batch 1: Hero CTA Gold Button Consistency

- Standardized hero CTA buttons on pages that still used the secondary/ghost hero CTA style.
- Updated only premium hero CTA button classes from `btn ghost` to `btn primary`.
- Preserved button destinations, labels, H1s, schema and page content.
- Commit: `94af889 Standardize hero CTA button styling`

### Batch 2: Clickable Card and Tile Hover/Focus Behavior

- Added consistent hover and keyboard focus states to clickable link grids, related cards, article cards and form/card links where the pattern was missing.
- Kept changes scoped to interaction styling and accessibility-friendly focus visibility.
- Did not change card content, links, metadata, schema or sitemap.
- Commit: `9f7b79d Standardize clickable card hover states`

### Batch 3: Grades Hub Expansion

- Expanded `grades.html` into a fuller material-grade hub grouped by material family.
- Added visible grade coverage for stainless steel, duplex/super duplex, nickel alloys, titanium, SMO 254/6Mo, aluminium, copper, brass, phosphor bronze, carbon steel, mild steel and high speed steel.
- Linked only to existing grade/category pages; no new grade pages were created.
- Preserved one H1, canonical, WebPage schema, BreadcrumbList schema and FAQPage schema.
- Commit: `13b4724 Expand grades hub material coverage`

### Batch 4: Materials Hub Final 12-Card Grid

- Replaced the basic `materials.html` material family link grid with the final 12 image-led material cards.
- Main grid now contains:
  1. Stainless Steel
  2. Aluminium
  3. Copper
  4. Brass
  5. Carbon Steel
  6. Mild Steel
  7. Nickel Alloys
  8. Duplex & Super Duplex
  9. SMO 254
  10. Titanium
  11. Phosphor Bronze
  12. High Speed Steel
- Removed Special Engineering Alloys from the prominent main card grid.
- Kept `/materials/other-metals.html` live and linked only as a secondary text link for hard-to-source or project-specific alloys.
- Added one local branded asset: `assets/mat-high-speed-steel.svg`.
- Preserved metadata, H1, canonical, sitemap and JSON-LD schema.
- Commit: `c25237b Redesign materials hub final card grid`

## Files Changed Summary

### Website Files

- `blog.html`
- `blog/*.html`
- `grades.html`
- `materials.html`
- `assets/mat-high-speed-steel.svg`
- Relevant root, material, location/export and hub pages for clickable-card hover/focus consistency.

### Documentation File

- `HERO_CTA_CARD_GRADES_MATERIALS_POLISH_REPORT.md`

## Final QA Results

Final QA was run after all implementation batches:

| Check | Result |
| --- | --- |
| `pnpm run qa:sitemap` | Pass. Sitemap URLs: 219. Local HTML pages: 219. Missing: 0. Duplicates: 0. |
| `pnpm run qa:crawl` | Pass. 338 links scanned successfully. No broken internal links reported. |
| `pnpm run qa:schema` | Pass. 219 pages scanned, 594 JSON-LD blocks, 0 invalid JSON-LD blocks. |
| `pnpm run qa:accessibility` | Pass. 5 checked pages, 0 Axe violations. |
| `pnpm run qa:html` | Known legacy baseline only. 219 pages checked, 59 invalid pages. `grades.html` and `materials.html` are valid. |
| `pnpm run test:navigation` | Pass. |

## Sitemap Count

- Final sitemap URL count: 219.
- No sitemap changes were required in this sprint.

## Unsafe Wording Scan Results

A targeted scan was run for sensitive wording including manufacturer, ready stock, pricing claims, guaranteed delivery, branch office, local warehouse, vendor/mill authorization, export history/client claims and standards/certification-sensitive terms.

Findings:

- The sprint-edited hub pages did not introduce unsafe business claims.
- `grades.html` matched `ISO` only as part of JavaScript `isOpen`, not as a standards/certification claim.
- Existing website matches for `manufacturer` are either safe negative statements such as "Rubinox is not a manufacturer," buyer-sector references such as "equipment manufacturers," or neutral source-document wording such as "manufacturer datasheet."
- Existing export/location pages contain phrases such as local warehouse and guaranteed delivery inside explicit non-claim language, for example: Rubinox is based in Mumbai and does not claim a local office, local warehouse or guaranteed delivery timeline.
- Existing standards terms such as ISO, PED and NORSOK appear as specification or buyer-document references. No new certification, approval or vendor-status claim was added in this sprint.

## Manual Visual Checks Performed

- Verified the materials hub now uses image-led white cards with rounded corners, soft border/shadow, navy heading text, muted body text and navy/gold/silver top accent treatment.
- Verified High Speed Steel has a local branded visual asset and no external hotlink.
- Verified Special Engineering Alloys is not displayed as a prominent material family card.
- Verified grade hub links point to existing pages or appropriate family hubs.
- Verified hero CTA buttons use the gold primary style in affected premium hero sections.
- Verified clickable card/link focus styles remain keyboard-visible.

## Remaining Known Issues

- HTML validation still reports the established legacy baseline: 59 invalid pages. This sprint did not attempt unrelated legacy HTML cleanup.
- Some legacy pages contain sensitive words in safe or negative contexts. Future wording audits can review them manually if the brand wants stricter phrasing.
- The site is still a static multi-page HTML codebase with duplicated inline CSS; future global changes require careful batch updates.

## Recommended Next Tasks

1. Run a dedicated legacy HTML validation cleanup sprint for the remaining 59 invalid pages.
2. Create a controlled global component/style extraction plan to reduce duplicated inline CSS.
3. Continue material and product-form page polish using the finalized top-accent card system.
4. Review safe-context sensitive wording if the brand wants fewer false-positive compliance terms in future scans.