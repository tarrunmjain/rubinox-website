# Design Rollout: Sitewide Homepage Design Language - Batch D9A

## Batch Name

D9A - Sitewide Homepage Design System Replication Plan.

## Owner Clarification

Owner clarified:

- "not just footer. the whole home page design to be replicated across all pages."

This batch responds by planning a controlled sitewide design-language rollout. D9A does not perform footer-only replication and does not perform sitewide design replication.

## Scope

Allowed in D9A:

- Read completed design locks.
- Audit current public page types.
- Map approved homepage design rules to page types.
- Select representative D9B pilot pages.
- Create documentation and rollout plan.
- Run QA from the active D-drive project folder.

Not allowed in D9A:

- Visible website design changes.
- Public HTML/CSS rollout changes.
- Footer replication.
- Card-system replication.
- Content changes.
- SEO/meta/canonical/schema/sitemap/analytics changes.
- Image/PDF changes.
- New pages.
- Deleted pages.

## Files Inspected

Source design locks:

- `docs/design-system/RUBINOX_TOPBAR_LOCK_V1.md`
- `docs/design-system/RUBINOX_HEADER_LOCK_V1.md`
- `docs/design-system/RUBINOX_HEADER_TOPBAR_ALIGNMENT_LOCK_V1.md`
- `docs/design-system/RUBINOX_MARKET_TICKER_LOCK_V1.md`
- `docs/design-system/RUBINOX_HOME_HERO_LOCK_V1.md`
- `docs/design-system/RUBINOX_HOME_RFQ_PATH_LOCK_V1.md`
- `docs/design-system/RUBINOX_CARD_ACCENT_LOCK_V1.md`
- `docs/design-system/RUBINOX_HOME_SECTION_INTRO_WIDTH_LOCK_V1.md`
- `docs/design-system/RUBINOX_HOME_REMAINING_SECTIONS_POLISH_LOCK_V1.md`
- `docs/design-system/RUBINOX_FOOTER_LOCK_V1.md`
- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`

Website and QA files inspected:

- `sitemap.xml`
- `package.json`
- Public HTML file inventory: 261 files.
- Representative public pages across company, compliance, material, grade/spec, product, industry, location, export, knowledge, contact, quotation and legal page types.

## Page Types Found

| Page type | Count | Representative files |
| --- | ---: | --- |
| Homepage | 1 | `index.html` |
| Company pages | 3 | `about-us.html`, `company-profile.html`, `mission-vision.html` |
| Registration/compliance pages | 2 | `registrations-compliance.html`, `quality-documentation-support.html` |
| Portfolio/index pages | 3 | `product-portfolio.html`, `materials.html`, `grades.html` |
| Material family pages | 14 | `materials/stainless-steel.html`, `materials/nickel-alloys.html`, `materials/titanium.html` |
| Material/grade/spec pages | 126 | `materials/ss-304-supplier-india.html`, `materials/inconel-625-supplier-india.html` |
| Product form root | 1 | `product-forms.html` |
| Industry page | 1 | `industries.html` |
| Location pages | 51 | `locations.html`, `locations/mumbai.html`, `locations/pune.html` |
| Export/country pages | 16 | `export.html`, `export/uae.html`, `export/saudi-arabia.html` |
| Knowledge Hub index | 2 | `blog.html`, `knowledge-hub-author.html` |
| Knowledge Hub articles | 36 | `blog/stainless-steel-304-vs-316-vs-316l.html`, `blog/metal-rfq-checklist-for-buyers.html` |
| Contact/quotation pages | 2 | `contact.html`, `quotation.html` |
| Technical/resource page | 1 | `technical-resources.html` |
| Policy/legal pages | 2 | `privacy-policy.html`, `terms-and-conditions.html` |

## Existing Sitewide Status

Already sitewide:

- Top Bar Lock V1: 261 pages.
- Header Lock V1: 261 pages.
- Header + Top Bar Alignment Lock V1: 261 pages.

Pending rollout:

- Footer Lock V1.
- Card Accent Lock V1.
- Blue panel contrast rules.
- Number/title inline card rules.
- Chip hover rules.
- CTA contrast/width rules.
- Contact/map accent rules.
- Section intro width rules where appropriate.

Footer audit before D9B/D9C:

- D8A-R3 unified footer is homepage-only.
- 260 non-home pages still have older `Main Materials` and `Forms & RFQ` footer headings.
- 260 non-home pages still have the older `2026` footer copyright.

## Representative D9B Pilot Pages

Homepage comparison reference:

- `index.html` - reference only, not to redesign.

Pilot implementation pages:

1. `company-profile.html`
2. `registrations-compliance.html`
3. `materials/stainless-steel.html`
4. `materials/ss-304-supplier-india.html`
5. `product-forms.html`
6. `industries.html`
7. `locations/mumbai.html`
8. `export/uae.html`
9. `blog.html`
10. `blog/stainless-steel-304-vs-316-vs-316l.html`
11. `contact.html`
12. `quotation.html`

## Design Rules To Apply Later

D9B/D9C should apply these approved design rules where page-type-appropriate:

- Footer Lock V1.
- Card Accent Lock V1.
- Blue panel contrast rules.
- Inline number/title card rows.
- Clickable chip hover/focus pattern.
- CTA contrast and width rule.
- Contact/map card accents.
- Section intro width correction where paragraphs are trapped in narrow left columns.
- Zoom/reflow safety at 100%, 110%, and 125%.

## Homepage-Only Sections Not To Copy Blindly

Do not replicate these as sitewide content:

- Market ticker.
- Homepage hero content.
- Homepage RFQ Path section.
- Homepage-specific remaining-section content.
- Homepage-specific materials/product grids when page purpose differs.

## No Visible Website Changes

D9A did not edit public HTML pages for visible design.

D9A did not edit CSS for visible design.

D9A did not change:

- SEO metadata.
- Canonicals.
- Schema meaning.
- Sitemap URLs.
- GA4 tracking.
- Images.
- PDFs.
- Contact details.
- Public page content.

## No Sitewide Replication

D9A did not replicate:

- Footer Lock V1.
- Card Accent Lock V1.
- Chip hover rules.
- Blue-panel contrast rules.
- CTA rules.
- Section intro rules.

Replication is reserved for D9B pilot and D9C full rollout.

## QA Results

D9A final QA results:

- `npm run qa:sitemap` - passed. Sitemap URLs: 261; local HTML pages: 261; missing URLs: 0; sitemap-only URLs: 0; duplicate sitemap URLs: 0.
- `npm run qa:crawl` - passed. Successfully scanned 400 links.
- `npm run qa:schema` - passed. HTML pages scanned: 261; JSON-LD blocks found: 866; invalid JSON-LD blocks: 0.
- `npm run qa:accessibility` - passed. Accessibility pages checked: 5; total violations: 0.
- `npm run test:navigation` - passed. Navigation verification passed.
- `npm run qa:html` - passed. HTML pages checked: 261; invalid pages: 0.
- `npm run qa:links` - passed. Successfully scanned 400 links.
- `npm run qa:pa11y` - passed. 9/9 URLs passed; `quotation.html` remained within the existing threshold.
- `npm run qa:forbidden-claims` - completed. Files scanned: 382; matches flagged for review: 669; no files were rewritten.
- `git diff --check` - passed with a line-ending warning for `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`; no whitespace errors were reported.

## Next Step

D9B - Sitewide Design Pilot on representative pages.
