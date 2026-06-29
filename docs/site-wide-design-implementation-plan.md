# Site-Wide Design Implementation Plan

Date: 2026-06-29
Active local folder: C:\Users\Dell\OneDrive\Documents\rubinox-website-live
Source document: docs/site-wide-design-analysis.md
Scope: future implementation plan only. This document does not authorize SEO URL changes, new public pages or unverified business claims.

## Implementation Principles

- Keep the current navy, white, silver and gold brand direction.
- Preserve the restored white footer, compact footer icons and full top rail icon set.
- Keep the header sticky and avoid increasing its visual height.
- Keep technical tables as real HTML tables.
- Keep each batch small enough to visually verify at 1366, 1280, 768, 390 and 360 widths.
- Commit design work separately from SEO/content expansion work.
- Do not create new pages during visual polish unless separately requested.

## Phase 0 - Baseline Lock

Goal: prevent regression before design polish begins.

Tasks:

1. Save the current header/top rail/footer behavior as the baseline.
2. Keep an all-page static scan for top rail icons, footer icons, footer background and exact black text tokens.
3. Keep rendered checks for horizontal overflow, sticky header, premium hero H1 color, FAQ padding and table containment.
4. Treat the 58 legacy HTML validation errors as a separate cleanup item.

Acceptance checks:

- `npm.cmd run qa:sitemap`
- `npm.cmd run qa:crawl`
- `npm.cmd run qa:schema`
- `npm.cmd run qa:accessibility`
- `npm.cmd run test:navigation`
- `git diff --check`
- Rendered 1366 and 390 checks on all pages touched in the batch.

## Phase 1 - Homepage Buyer Journey Polish

Priority: highest.

Why first: the homepage sets trust and conversion expectations before the user reaches grade or product pages.

Recommended work:

1. Improve the Market Watch section so it feels intentional and useful, while keeping the current disclaimer that values are indicative and not final pricing.
2. Tighten the hero-to-RFQ journey with clearer hierarchy between WhatsApp, email and call CTAs.
3. Strengthen the proof chips and section rhythm without adding fake trust badges.
4. Add better links from the homepage into grades, product forms, technical resources and RFQ support.
5. Keep the existing H1 intent and canonical URL unchanged.

Do not add:

- Fixed prices.
- Live price claims.
- Ready stock promises.
- Manufacturer or factory language.
- Fake ratings, reviews or client logos.

## Phase 2 - Technical Resources And Table UX

Priority: high.

Why second: technical tables are high-intent buyer assets and must feel readable on mobile.

Recommended work:

1. Add table captions and short use notes above dense tables.
2. Add visible mobile scroll affordance where horizontal scrolling is intentional.
3. Tighten long table cell text where possible.
4. Add anchor links or a compact resource index at the top of the page.
5. Keep documentation wording cautious: `where applicable`, `as per customer requirement`, `available on request`.

Acceptance checks:

- No page-level horizontal scroll at 390 and 360 widths.
- Tables remain text-based HTML.
- Accessibility scan remains clean.

## Phase 3 - Grade And Specification Page Pilot

Priority: high.

Pilot pages:

- materials/ss-316l-supplier-india.html
- materials/inconel-625-supplier-india.html
- materials/duplex-2205-supplier-india.html
- materials/api-5l-grade-b-pipe-supplier-india.html
- materials/astm-a335-p91-pipe-supplier-india.html

Recommended work:

1. Improve section rhythm while preserving page content and H1 intent.
2. Keep FAQ cards padded and readable.
3. Make standards/forms/application sections more scannable.
4. Improve related links so buyers can move between grade, form, technical and RFQ pages.
5. Use more specific visuals only when assets are accurate and not misleading.

Acceptance checks:

- One H1 per page.
- Premium hero H1 stays white when used on dark hero sections.
- No exact black text.
- No footer/topbar regression.
- No claim drift.

## Phase 4 - Product Form Page Polish

Priority: medium-high.

Recommended work:

1. Add clearer form-specific hierarchy for pipes, tubes, sheets, plates, coils, flanges, fittings, fasteners, bars/rods and wire mesh.
2. Use concise use-case cards and RFQ requirement chips.
3. Add more helpful cross-links to grades and technical resources.
4. Keep product wording supplier-focused and avoid manufacturing claims.

Acceptance checks:

- No page-level horizontal scroll.
- Product cards do not become oversized on mobile.
- Footer remains white and compact.

## Phase 5 - Hub And Knowledge Hub Polish

Priority: medium.

Recommended work:

1. Improve `grades.html`, `materials.html`, `product-forms.html` and `product-portfolio.html` scanability.
2. Add stronger category groupings without changing URLs.
3. Improve `blog.html` article cards with clearer guide type, topic and buyer intent.
4. Consider filters only if they can be implemented simply and accessibly in static HTML/JS.

Acceptance checks:

- Existing article and hub URLs remain unchanged.
- Internal links remain crawlable as normal links.
- No new pages are created in this design batch.

## Phase 6 - Location And Export Page Differentiation

Priority: medium.

Recommended work:

1. Reduce mechanical repetition through better layout modules and city/export-specific RFQ guidance.
2. Keep claims limited to PAN India supply, export enquiry support and documentation assistance.
3. Do not imply local branch offices, warehouses, stockyards or guaranteed delivery timelines.
4. Link back to relevant material, product form and RFQ pages.

Acceptance checks:

- No invented offices, stock promises or delivery claims.
- No duplicate H1s.
- All pages remain in sitemap.

## Phase 7 - Trust Asset Upgrade

Priority: dependent on owner assets.

Recommended work only after assets are supplied:

1. Add real office/product/process imagery where appropriate.
2. Add verified business-profile links and documentation examples.
3. Improve company profile PDF presentation.
4. Add registration/compliance details only when verified by source documents.

Do not create placeholders that look like certifications, approvals or awards.

## Recommended First Batch

Implement only this first:

1. Homepage Market Watch and buyer journey polish.
2. Technical resources mobile table affordance polish.
3. Five-page grade/spec pilot using the pages listed in Phase 3.

This gives high visual impact while keeping risk controlled.

## Batch QA Checklist

For every future implementation batch:

1. Run `git status --short` before editing.
2. Confirm no unrelated untracked files are staged.
3. Run the relevant QA scripts before and after changes.
4. Render touched pages at 1366, 1280, 768, 390 and 360 widths.
5. Check top rail icons, sticky header, logo, white footer, footer icons and no exact black text.
6. Check no horizontal scroll.
7. Check one H1 per page.
8. Check WhatsApp, email and quote links still work.
9. Check no manufacturer/factory/stock/pricing/certification claim drift.
10. Commit only the intended files.

## Non-Goals

- No full redesign in one batch.
- No color-theme replacement.
- No new material/spec/location/export pages.
- No SEO URL restructuring.
- No schema redesign unless schema QA requires it.
- No invented trust proof.
