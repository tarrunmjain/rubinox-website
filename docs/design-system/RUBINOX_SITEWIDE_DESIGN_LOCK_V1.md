# RUBINOX SITEWIDE DESIGN LOCK V1

## Approval Status

Status: Final approved design lock.

Owner approval: "D9C-R6 approved for final sitewide design lock"

Lock date: 2026-07-21

Final approved live commit: `7198472d18708515f648df50fa03eda3d88094de`

Successful GitHub Pages run: `29010629259`

Live site: `https://rubinoxmetal.com`

## Purpose

This document is the final sitewide design fingerprint for Rubinox Metal and Alloys after the completed homepage locks, footer lock, D9C sitewide rollout and D9C-R3/R4/R5/R6 correction passes.

D9D did not introduce a visible website redesign. It records the approved final system so future public pages can be added without drifting away from the locked Rubinox visual language.

## Business Identity Guardrail

Rubinox Metal and Alloys must be described only as:

`Stockist | Supplier | Importer | Exporter | Project Supplier`

Future content and design work must keep claims practical, buyer-focused and RFQ-focused. Do not add unverified approvals, client names, ratings, fixed public pricing, stock promises, delivery promises, or false role language. The only approved heritage wording is:

`Supported by the 40-year metals trade heritage of sister concern Bharat Metals, Chennai.`

Do not transfer that heritage statement into a direct Rubinox age claim.

## Source Locks Included

The final sitewide lock includes these approved source locks:

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

The final rollout and correction trail is:

- `docs/design-system/RUBINOX_SITEWIDE_DESIGN_ROLLOUT_PLAN_D9A.md`
- `docs/design-pilot-sitewide-design-batch-d9b.md`
- `docs/design-sitewide-standardization-batch-d9c.md`
- `docs/design-correction-sitewide-visual-consistency-batch-d9c-r3.md`
- `docs/design-correction-quotation-before-send-batch-d9c-r4.md`
- `docs/design-correction-quotation-factor-guides-batch-d9c-r5.md`
- `docs/design-correction-knowledge-hub-filter-hover-batch-d9c-r6.md`

## Locked Implementation Markers

Final public HTML pages must retain:

- `body.sitewideDesignV1`
- `assets/css/rubinox-sitewide-design-v1.css`
- `siteFooter homeFooterPrototypeD8A sitewideFooterD9C`
- Unified footer heading: `Quick Links:`
- Current GA4 ID: `G-JT5X5L5H07`

The old GA4 ID `G-CR18QYPS6C` must remain absent.

## Final Sitewide Rules A-T

A. Shared rail: the approved top bar and header alignment rail remains the horizontal reference for future layout work.

B. Top bar: desktop and mobile top bar spacing, contact icons, social icon behavior and LinkedIn special handling remain locked.

C. Header: logo scale, nav rhythm, menu behavior and mobile header treatment remain locked.

D. Final CSS layer: new public pages must include `assets/css/rubinox-sitewide-design-v1.css` and `body.sitewideDesignV1`.

E. Footer: Footer Lock V1 is sitewide. The footer uses one unified `Quick Links:` bank, preserves contact details and keeps six brand icons in one row where space allows.

F. Footer exclusions: do not bring back separate footer headings named `Main Materials` or `Forms & RFQ`; do not add a `2026` footer copyright year.

G. Clickable card hover: use a stable 1px border, subtle Rubinox gold border/accent, slight lift and restrained shadow. Hover must not create a heavy frame, filled card surface, or layout shift.

H. Chip and small-link hover: chips remain light/white with thin gold border/accent, slight lift and soft shadow. D9C-R6 is the final rule for Knowledge Hub filter chips.

I. CTA buttons: primary CTAs keep the approved Rubinox gold treatment. Ghost/secondary links must stay controlled and must not create old silver frames on hover.

J. Card accents: card accent bars follow Card Accent Lock V1 and are allowed on repeated content cards, FAQ-style items and sitewide support cards.

K. FAQ/card containment: text inside cards, FAQ items, chips, buttons and boxes must wrap naturally without clipping or horizontal scroll.

L. Blue panel contrast: blue/dark panels must preserve readable heading and paragraph contrast using the final D9C navy/silver palette.

M. Section spacing: hero-to-section and section-to-section spacing must feel premium, not collapsed, while preserving documented exceptions from D9C-R3.

N. Homepage-only controls: market ticker, homepage hero, homepage RFQ path, homepage section intro rules and homepage remaining-section polish remain homepage-only unless a future lock explicitly expands them.

O. Homepage intro width: future homepage intro copy uses the approved `1000px` max-width pattern where the section structure supports it.

P. Zoom/reflow: text inside sections, cards, boxes and CTAs must not overflow at 100%, 110% or 125% zoom.

Q. Focus accessibility: keyboard focus-visible remains clear and brand-consistent through subtle Rubinox gold outlines.

R. Static hosting: keep the site static and compatible with GitHub Pages from `main`.

S. SEO and analytics: preserve public URLs, H1 intent, titles, meta descriptions, canonicals, JSON-LD, sitemap strategy, CNAME and GA4 tracking unless a future SEO task explicitly scopes a change.

T. Future page gate: before publishing any new page, compare it against this lock, the master design fingerprint and the relevant page family already in the site.

## Page-Type Guide

Homepage:

- Keep the market ticker, hero, RFQ path, section intro width, remaining-section polish and footer exactly within the approved homepage lock family.

Core pages:

- Use the sitewide hero/card/grid/footer language from D9C and D9C-R3.
- Keep CTAs and link chips aligned to the final hover system.

Material, grade, product-form, location and export pages:

- Use the final sitewide body class and CSS file.
- Keep internal links useful, grouped and visually calm.
- Preserve the unified footer and avoid homepage-only modules.

Knowledge Hub and blog pages:

- Keep `button.blogFilter` hover, focus and active states from D9C-R6.
- Filter chips must stay identifiable, light, brand-consistent and layout-stable.

Quotation page:

- Keep the D9C-R4 inline helper text alignment.
- Keep the D9C-R5 factor-guide chip bank alignment and hover/focus treatment.

## D9D Verification Evidence

All D9D screenshots and audit output were saved on D drive only:

- Final representative screenshots: `D:\Websites\Rubinox\visual-qa\d9d-final-sitewide-design-lock\final`
- Hover/focus screenshots: `D:\Websites\Rubinox\visual-qa\d9d-final-sitewide-design-lock\hover-focus`
- Zoom/reflow screenshots and JSON: `D:\Websites\Rubinox\visual-qa\d9d-final-sitewide-design-lock\zoom-reflow`
- Audit JSON: `D:\Websites\Rubinox\visual-qa\d9d-final-sitewide-design-lock\audit`

D9D static audit results:

- Public HTML pages: 261.
- Final CSS references: 261.
- `sitewideDesignV1` body class pages: 261.
- Unified footer pages: 261.
- Old split footer headings: 0.
- Footer `2026` copyright findings: 0.
- Current GA4 pages: 261.
- Old GA4 pages: 0.
- Homepage-only leakage into non-home pages: 0.
- D9C-R3/R4/R5/R6 CSS correction markers: present.
- CTA gold, card accent, FAQ/card accent and blue-panel contrast rules: present.

Focused browser spot-check:

- `blog.html` loaded with 11 Knowledge Hub filter buttons.
- `Carbon Steel & Mild Steel` hover used a white surface, Rubinox gold border, navy text, soft shadow and slight lift.
- Active filter state used a subtle pale-gold surface, Rubinox gold border and navy text.
- Footer showed one `Quick Links:` heading, 26 footer links and six footer icons in one row.

Zoom/reflow note:

- D9D preserved the owner zoom/reflow rule. D9D spot-check screenshots and JSON are archived under the zoom/reflow folder.
- The homepage spot-check at 100%, 110% and 125% found no text-overflow samples in audited section, card, link, button and footer text.

## Final QA Gate

Before D9D was committed, the standard QA suite must pass or be documented with the exact residual risk:

- `npm run qa:sitemap`
- `npm run qa:crawl`
- `npm run qa:schema`
- `npm run qa:accessibility`
- `npm run test:navigation`
- `npm run qa:html`
- `npm run qa:links`
- `npm run qa:pa11y`
- `npm run qa:forbidden-claims`
- `npm run qa:images:audit`
- `git diff --check`

## Final Future-Work Instruction

D10 and all future work must treat this file plus `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md` as the source of truth for Rubinox sitewide visual consistency.
