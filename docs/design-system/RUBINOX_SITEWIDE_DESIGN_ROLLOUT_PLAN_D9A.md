# RUBINOX SITEWIDE DESIGN ROLLOUT PLAN D9A

## Purpose

The owner clarified:

- "not just footer. the whole home page design to be replicated across all pages."

D9A controls how the approved homepage design language should be rolled out safely across the full Rubinox Metal and Alloys website.

Important interpretation:

- Apply approved design language, not homepage content.
- Do not blindly copy homepage-only sections to every page.
- Preserve page-specific SEO intent, H1 intent, metadata, schema, URLs, and internal-link strategy.
- Pilot representative pages first, then roll out sitewide only after owner review.

D9A is a documentation and planning batch only. It does not change visible website design and does not replicate any design system sitewide.

## Source Design Locks

The following locks are source of truth:

| Lock | Document |
| --- | --- |
| Top Bar Lock V1 | `docs/design-system/RUBINOX_TOPBAR_LOCK_V1.md` |
| Header Lock V1 | `docs/design-system/RUBINOX_HEADER_LOCK_V1.md` |
| Header + Top Bar Alignment Lock V1 | `docs/design-system/RUBINOX_HEADER_TOPBAR_ALIGNMENT_LOCK_V1.md` |
| Homepage Market Ticker Lock V1 | `docs/design-system/RUBINOX_MARKET_TICKER_LOCK_V1.md` |
| Home Hero Lock V1 | `docs/design-system/RUBINOX_HOME_HERO_LOCK_V1.md` |
| Homepage RFQ Path Lock V1 | `docs/design-system/RUBINOX_HOME_RFQ_PATH_LOCK_V1.md` |
| Card Accent Lock V1 | `docs/design-system/RUBINOX_CARD_ACCENT_LOCK_V1.md` |
| Homepage Section Intro Width Lock V1 | `docs/design-system/RUBINOX_HOME_SECTION_INTRO_WIDTH_LOCK_V1.md` |
| Remaining Homepage Sections Polish Lock V1 | `docs/design-system/RUBINOX_HOME_REMAINING_SECTIONS_POLISH_LOCK_V1.md` |
| Footer Lock V1 | `docs/design-system/RUBINOX_FOOTER_LOCK_V1.md` |
| Master design fingerprint | `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md` |

## Already Sitewide

These systems are already present across all 261 public HTML pages:

- Top Bar Lock V1.
- Header Lock V1.
- Header + Top Bar Alignment Lock V1.

D9A marker audit:

| Pattern | Count |
| --- | ---: |
| `topbar-lock-v1` | 261 |
| `header-lock-v1` | 261 |

No D9A implementation action is needed for these systems except preserving them during future design work.

## Still Needs Sitewide Rollout

These approved patterns still need controlled rollout in D9B/D9C:

- Footer Lock V1.
- Card Accent Lock V1.
- Blue panel contrast rules.
- Number/title inline card rules.
- Chip hover/focus rules.
- CTA contrast and width rules.
- Contact/map card accent rules.
- Section intro width rules where appropriate.

D9A footer marker audit:

| Pattern | Count |
| --- | ---: |
| Homepage D8A-R3 `homeFooterPrototypeD8A` footer | 1 |
| Homepage D8A-R3 `footerUnifiedLinks` footer | 1 |
| Older `Main Materials` footer heading | 260 |
| Older `Forms & RFQ` footer heading | 260 |
| Older footer copyright with `2026` | 260 |

## Must Remain Homepage-Only

Do not blindly replicate these homepage-specific sections:

- Market ticker.
- Homepage hero content.
- Homepage RFQ Path section.
- Homepage-specific remaining-section content.
- Homepage-specific product/material grids where the page purpose differs.

Future non-home page work may borrow design principles from these locks, but not their page-specific content or exact section composition unless separately approved.

## Sitewide Design Language To Apply Later

### Footer

Apply Footer Lock V1 later:

- Brand block left.
- Unified `Quick Links:` block in the middle.
- Contact Details block right.
- Yearless copyright.
- Six brand icons in one row where possible.
- No separate `Main Materials` or `Forms & RFQ` headings.

### Card Accent System

Apply Card Accent Lock V1 where suitable:

- White card base.
- Gold-to-blue top accent line.
- Navy headings.
- Subtle premium shadow.
- Clean borders and 8px-or-less radius unless existing local context requires otherwise.
- Compact spacing.
- No heavy effects.
- No text overflow at 100%, 110%, or 125% zoom.

Candidate areas:

- FAQ cards.
- Materials cards.
- Product form cards.
- Industry cards.
- Material/product category cards.
- Contact/map cards.
- Quote/RFQ cards.
- Clickable and non-clickable information cards.

### Numbered Card Pattern

Apply the approved inline number/title pattern to eligible step cards:

- Number badge and title in the same row.
- Title receives remaining width.
- Safe wrapping inside the row.
- No number-over-title vertical waste unless page-specific content requires a different approved layout.

Candidate areas:

- Process cards.
- RFQ flow cards.
- Step cards.
- Numbered documentation cards.

### Blue Panel Contrast

Apply the D7 locked contrast rule to eligible dark/blue panels:

- Silver headings.
- White or near-white body copy.
- Gold CTAs.
- No blue text on blue background.

Candidate areas:

- CTA bands.
- Blue info cards.
- Quote support blocks.
- Export/support blocks.

### Chip Hover Pattern

Apply the approved chip hover/focus style to clickable chips:

- Light surface.
- Rubinox gold border emphasis.
- Slight lift.
- Restrained shadow.
- Visible focus.
- No filled gold background.

Non-clickable chips remain static.

Candidate areas:

- City/location chips.
- Material chips.
- Grade chips.
- Tag chips.

### Section Intro Width

Apply page-type-sensitive intro-width improvements:

- Homepage approved intro width is `1000px`.
- Non-home pages may use similar readable width when intro text is trapped in a narrow left column with empty right space.
- Do not stretch long text across the entire viewport.
- Preserve readable maximum line length.
- Preserve page-specific SEO content and H1 intent.

### CTA Rule

Apply the approved CTA language:

- Blue CTA bands use silver heading, white body, and gold CTA buttons.
- CTA copy width should use available space.
- Buttons must wrap safely.
- No live price, stock, delivery, certification, approval, or manufacturer promises.

### Contact / Map Cards

Apply the approved card accent where suitable:

- White contact/map cards may use the gold-to-blue top accent.
- Preserve contact details and map embeds.
- Do not alter schema/contact metadata unless separately approved.

### Zoom / Reflow Rule

All future sitewide design work must pass:

- 100% zoom.
- 110% zoom.
- 125% zoom.
- Widths: 1366, 1280, 768, 390, 360.
- No text overflow from cards, chips, boxes, CTAs, or footer links.
- No horizontal overflow caused by changed sections.

## Page-Type Inventory

Public HTML count: 261.

| Page type | Count | Representative files | Current design issues likely present | Approved rules to apply later | Risks | Priority |
| --- | ---: | --- | --- | --- | --- | --- |
| Homepage | 1 | `index.html` | Source of approved locks; should mainly be protected. | Use as comparison reference only. | Accidentally changing approved homepage locks. | Reference only |
| Company pages | 3 | `about-us.html`, `company-profile.html`, `mission-vision.html` | Older footer; card/section surfaces may not match current premium homepage language. | Footer, card accent, intro width where suitable, CTA contrast. | Changing company claims or business identity. | High |
| Registration/compliance pages | 2 | `registrations-compliance.html`, `quality-documentation-support.html` | Older footer; documentation cards may need accent/contrast consistency. | Footer, card accent, number/title rows where suitable, safe copy wrapping. | Accidentally inventing certification or approval claims. | High |
| Portfolio/index pages | 3 | `product-portfolio.html`, `materials.html`, `grades.html` | Older footer; category cards may need homepage card language. | Footer, card accent, intro width, chip hover where applicable. | Over-broad SEO link additions. | High |
| Material family pages | 14 | `materials/stainless-steel.html`, `materials/nickel-alloys.html`, `materials/titanium.html` | Older footer; category grids/cards may need accent consistency. | Footer, card accent, intro width, CTA contrast. | Changing material taxonomy or internal-link strategy. | High |
| Material/grade/spec pages | 126 | `materials/ss-304-supplier-india.html`, `materials/inconel-625-supplier-india.html`, `materials/api-5l-grade-b-pipe-supplier-india.html` | Older footer; dense cards/tables/chips may need safe wrapping and accent consistency. | Footer, card accent, numbered card rules, chip hover, CTA contrast. | Breaking SEO templates, schema, canonical URLs, or 126-page consistency. | Pilot first, then scripted |
| Product form root | 1 | `product-forms.html` | Older footer; product-form cards may need card accent language. | Footer, card accent, intro width, CTA contrast. | Over-changing content that supports product-form SEO. | High |
| Industry page | 1 | `industries.html` | Older footer; industry cards may need card accent and hover consistency. | Footer, card accent, intro width, CTA contrast. | Changing industry wording or adding claims. | High |
| Location pages | 51 | `locations.html`, `locations/mumbai.html`, `locations/pune.html` | Older footer; city chips/cards may need chip hover and CTA consistency. | Footer, card accent, chip hover, section intro width where suitable. | Changing location URLs, local SEO intent, or city coverage. | Medium-high |
| Export/country pages | 16 | `export.html`, `export/uae.html`, `export/saudi-arabia.html` | Older footer; export support panels may need blue-panel contrast and card accents. | Footer, blue panel contrast, card accent, CTA width. | Accidentally implying delivery guarantees or restricted approvals. | Medium-high |
| Knowledge Hub index | 2 | `blog.html`, `knowledge-hub-author.html` | Older footer; article cards may need card accent/hover consistency. | Footer, card accent for article cards where suitable. | Changing article URLs or author/knowledge structure. | Medium |
| Knowledge Hub articles | 36 | `blog/stainless-steel-304-vs-316-vs-316l.html`, `blog/metal-rfq-checklist-for-buyers.html`, `duplex-2205-price-factors-india.html` | Older footer; article cards/related links may need consistent accent and CTA behavior. | Footer, card accent, CTA contrast where present. | Changing article editorial copy or price-factor disclaimers. | Medium |
| Contact/quotation pages | 2 | `contact.html`, `quotation.html` | Older footer; contact/map/RFQ cards are strong candidates for approved accent and CTA polish. | Footer, contact/map accent, numbered card rules, CTA contrast/width, chip safety. | Breaking lead paths, form behavior, contact details, tracking. | High |
| Technical/resource page | 1 | `technical-resources.html` | Older footer; resource cards may need premium card accent. | Footer, card accent, number/title rows where suitable. | Inventing standards or approvals. | Medium |
| Policy/legal pages | 2 | `privacy-policy.html`, `terms-and-conditions.html` | Older footer; should stay minimal and readable. | Footer only unless owner approves light typography polish. | Unwanted legal text/layout changes. | Low |

## Recommended D9B Pilot Pages

Use the homepage only as visual comparison:

- `index.html` - comparison reference only; do not redesign in D9B.

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

This pilot set covers company, compliance, material family, grade/spec, product form, industry, city/location, export, knowledge index, article, contact, and quotation workflows.

## D9B Pilot Scope

D9B should apply approved design language only to the pilot pages.

Allowed D9B design applications:

- Footer Lock V1.
- Card Accent Lock V1 where page structures already use cards.
- Blue panel contrast where blue/dark panels already exist.
- Chip hover/focus where chips are clickable.
- Inline number/title rows where process/step cards already exist.
- CTA contrast and width where CTA bands already exist.
- Section intro width only where text is visibly trapped in a narrow left column.
- Contact/map card accent on contact/quote pages where suitable.

D9B must not:

- Change SEO titles, meta descriptions, canonicals, H1 intent, schema meaning, sitemap URLs, GA4, public URLs, or page slugs.
- Add new pages.
- Delete pages.
- Add homepage-only sections to non-home pages.
- Add new business claims.
- Add manufacturer/factory/mill/production wording.
- Add stock, price, delivery, certification, approval, client, project, testimonial, rating, or review claims.

## D9C Sitewide Rollout Scope

D9C should happen only after owner approves D9B live pilot pages.

D9C should:

- Replicate the approved Footer Lock V1 across all public HTML pages.
- Apply approved shared card, chip, CTA, blue-panel, contact/map, and intro-width patterns across all eligible pages.
- Preserve page-specific content and SEO.
- Preserve all 261 public URLs.
- Validate all 261 pages.
- Run visual screenshots on representative pages.
- Run zoom/reflow checks at 100%, 110%, and 125%.

D9C should use scripts only after the D9B pilot patterns are tested and owner-approved.

## Exclusion Rules

Do not change:

- H1 intent.
- Title/meta/canonical.
- Schema meaning.
- Sitemap URLs.
- GA4 tracking.
- Contact details.
- Page slugs or URLs.
- Image assets unless separately approved.
- PDFs.
- Raw certificate details.
- Vendor onboarding wording.
- Client/project references.
- Page-specific content claims.

## Risk Controls

- Commit small batches.
- Pilot first.
- Use owner review after D9B.
- Avoid huge blind transformations.
- Use scripts for repeated footer/card changes only after tested.
- Preserve `CNAME` and deployment settings.
- Use D drive for screenshots, temp files, QA output, and npm cache.
- Keep protected untracked files untouched.

## QA Checklist

Required checks for D9B/D9C:

- `npm run qa:sitemap`
- `npm run qa:crawl`
- `npm run qa:schema`
- `npm run qa:accessibility`
- `npm run test:navigation`
- `npm run qa:html`
- `npm run qa:links`
- `npm run qa:pa11y`
- `npm run qa:forbidden-claims`
- `git diff --check`
- Image audit where useful.
- Visual screenshots for representative pages.
- Zoom/reflow at 100%, 110%, and 125%.
- No horizontal overflow.
- No text overflow.
- Mobile checks at 390px and 360px.

## Proposed Sequence

1. D9A - Sitewide rollout plan and pilot selection.
2. D9B - Pilot implementation on representative pages.
3. D9B-R2 - Pilot corrections if owner requests.
4. D9C - Full sitewide replication after pilot approval.
5. D9D - Final sitewide design fingerprint lock.
6. D10 - Final launch QA and monitoring.

## D9A Validation Notes

D9A does not require a full screenshot set because it is documentation/planning only.

Artifact folder prepared:

- `D:\Websites\Rubinox\visual-qa\d9a-sitewide-design-rollout-plan`

D9A verified:

- `HEAD` and `origin/main` started at `b8d4600539493daa1add54d9cc9827431039ed80`.
- Public HTML count remained 261.
- Top bar/header markers are already sitewide.
- Approved D8A-R3 footer remains homepage-only before D9B/D9C.
- No visible website design changes were made in D9A.
- No sitewide replication was performed in D9A.
