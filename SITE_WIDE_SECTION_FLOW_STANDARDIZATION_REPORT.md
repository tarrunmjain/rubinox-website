# Site-Wide Section Flow Standardization Report

Project: Rubinox Metal and Alloys  
Website: https://rubinoxmetal.com  
Repository: tarrunmjain/rubinox-website  
Working folder: `C:\Users\Dell\OneDrive\Documents\rubinox-website-live`  
Report date: 2026-06-28

## 1. Objective

Standardize the section flow across the Rubinox static website without changing SEO metadata, H1s, canonicals, schema intent, URLs, sitemap entries, CTAs, visual styling, or business claims.

The approved homepage flow was preserved as the reference pattern:

1. Hero
2. Materials / offer discovery
3. Product forms / capability discovery
4. Why choose / trust
5. Quality / documentation
6. Location / export coverage
7. RFQ process
8. SEO / context content
9. FAQ
10. Final CTA / contact

The task was applied with page-family judgment rather than forcing the homepage order onto every page.

## 2. Pages Scanned

Total HTML pages scanned: 219

Page-family counts from the local repository:

| Page family | Count | Result |
| --- | ---: | --- |
| Core pages | 26 | Reviewed; no safe reorder needed. |
| Portfolio hub pages | 4 | Reviewed; no safe reorder needed. |
| Material category pages | 13 | 6 pages received safe section-flow fixes. |
| Grade pages | 78 | Reviewed; no safe reorder needed. |
| Product form pages | 17 | 2 pages received safe section-flow fixes. |
| Location hub page | 1 | Reviewed; no safe reorder needed. |
| Location child pages | 50 | Reviewed; no safe reorder needed. |
| Export hub page | 1 | Reviewed; no safe reorder needed. |
| Export child pages | 15 | Reviewed; no safe reorder needed. |
| Knowledge Hub page | 1 | Reviewed; no safe reorder needed. |
| Blog article pages | 30 | Reviewed; no safe reorder needed. |

## 3. Audit Method

The audit checked visible section and heading order across all HTML files, including:

- `<section>` order.
- H2 order inside older `div.card` page structures.
- FAQ placement.
- Final CTA placement.
- Related/internal-link card placement.
- RFQ checklist placement.
- Representative manual review across core, portfolio, material, product-form, location, export and blog page families.

A specific anomaly scan checked that related/focused link blocks and buyer-navigation blocks do not appear below FAQ sections.

## 4. Findings

Most site families already followed the desired procurement page flow:

- Core and portfolio pages already place discovery, guidance, checklist/trust and FAQ before final CTA.
- Location and export pages already keep short answer, industry/material guidance, RFQ checklist, FAQ and CTA in a logical order.
- Blog articles already follow hero, article visual, direct answer, comparison/guidance, related links, FAQ and CTA.
- Grade pages already keep related links before FAQs in the reviewed pattern.

Safe reorder issues were found on a small set of material/category and product-form pages where related/focused link cards appeared after the FAQ section.

## 5. Changes Implemented

### Batch 1: Core and Portfolio Hub Pages

Commit: none required.

Pages reviewed included:

- `index.html`
- `about-us.html`
- `industries.html`
- `quotation.html`
- `contact.html`
- `product-portfolio.html`
- `materials.html`
- `product-forms.html`
- `grades.html`

No safe reorder was needed. Homepage approved flow was preserved.

### Batch 2: Material Category Pages

Commit: `0f3aadc Standardize material category page flow`

Files changed:

- `materials/aluminium.html`
- `materials/brass.html`
- `materials/copper.html`
- `materials/high-speed-steel.html`
- `materials/phosphor-bronze.html`
- `materials/stainless-steel.html`

Change summary:

- Moved related/focused material navigation cards above FAQ sections.
- Kept FAQ sections near the bottom.
- Kept final RFQ CTA sections after FAQs.
- Kept visible FAQ before FAQPage schema where schema existed.
- Did not change copy, metadata, H1, canonical URLs, sitemap, CTAs or business positioning.

### Batch 3: Grade and Product Form Pages

Commit: `ff5d2f8 Standardize grade and product form page flow`

Files changed:

- `materials/stainless-steel-channels-supplier-india.html`
- `materials/stainless-steel-perforated-sheets-supplier-india.html`

Change summary:

- Moved `Related Pages` blocks above the FAQ sections.
- Kept FAQPage schema immediately after the visible FAQ.
- Kept final RFQ CTA sections after FAQ/schema.
- Did not change copy, metadata, H1, canonical URLs, sitemap, CTAs or business positioning.

### Batch 4: Location and Export Pages

Commit: none required.

The location/export pages already follow a consistent order:

1. Hero
2. Short answer / RFQ support
3. Industry focus or country/city overview
4. Priority materials and product forms
5. Documentation or industry-material guidance
6. RFQ checklist
7. Related links
8. FAQ
9. Final CTA

No city or country child pages were created or modified.

### Batch 5: Knowledge Hub and Blog Pages

Commit: none required.

The Knowledge Hub and blog article pages already follow the article-oriented flow:

1. Hero
2. Featured visual or direct answer
3. Comparison / guidance content
4. Related pages
5. FAQ
6. CTA

No safe reorder was needed.

## 6. QA Results

Baseline QA before changes:

| Command | Result |
| --- | --- |
| `pnpm run qa:sitemap` | Pass. 219 sitemap URLs, 219 local HTML pages, 0 missing, 0 sitemap-only, 0 duplicates. |
| `pnpm run qa:crawl` | Pass. No broken internal links; 338 links scanned by the script. |
| `pnpm run qa:schema` | Pass. 219 HTML pages, 594 JSON-LD blocks, 0 invalid. |
| `pnpm run qa:accessibility` | Pass. 5 representative pages, 0 Axe violations. |
| `pnpm run qa:html` | Known legacy baseline: 219 pages checked, 59 invalid pages. |
| `pnpm run test:navigation` | Pass. |

QA after material/category and product-form changes:

| Command | Result |
| --- | --- |
| `pnpm run qa:sitemap` | Pass. 219 sitemap URLs, 219 local HTML pages, 0 missing, 0 sitemap-only, 0 duplicates. |
| `pnpm run qa:crawl` | Pass. No broken internal links; 338 links scanned by the script. |
| `pnpm run qa:schema` | Pass on rerun. 219 HTML pages, 594 JSON-LD blocks, 0 invalid. |
| `pnpm run qa:accessibility` | Pass. 5 representative pages, 0 Axe violations. |
| `pnpm run qa:html` | Known legacy baseline restored: 219 pages checked, 59 invalid pages. |
| `pnpm run test:navigation` | Pass. |

Note: one schema QA run briefly reported a remote `https://schema.org` context dereference failure on `blog/industrial-metal-product-forms-guide.html`; the JSON was valid and the immediate schema rerun passed with 0 invalid JSON-LD blocks. No schema file/content change was made for that transient validator issue.

## 7. Final Flow Rule Applied

The practical site-wide rule now used is:

1. Hero / page intent
2. Material, grade, product, city, country or article discovery content
3. Buyer guidance, standards, applications, comparisons and documentation support
4. RFQ checklist or specification guidance
5. Related/internal links
6. FAQ with matching FAQPage schema where present
7. Final RFQ CTA / contact path

This preserves homepage strategy while respecting page type differences.

## 8. Preserved Items

Confirmed preserved:

- Existing URLs.
- H1 text and one-H1 intent.
- SEO titles and meta descriptions.
- Canonical URLs.
- Open Graph and Twitter metadata.
- JSON-LD intent and valid schema state.
- Sitemap count and entries.
- Header, footer, navigation and CTAs.
- Visual styling, colors, typography and layout classes.
- Static site behavior and GitHub Pages deployment assumptions.

## 9. Business Claim Safety

No new business claims were added.

The sprint did not add or imply:

- Manufacturing claims.
- Pricing or lowest-price positioning.
- Stock promises.
- Certifications or approvals.
- Client names.
- Vendor status or mill authorization.
- Branch offices, local warehouses, export history, export volume or delivery guarantees.

## 10. Items Left for Later Review

No blocking section-flow issue remains from this pass.

Potential future work:

- Clean the known legacy HTML validation baseline of 59 invalid pages.
- Expand accessibility QA beyond the current 5 representative pages.
- Consider converting older `div.card` content blocks into semantic `<section>` wrappers in a future accessibility/HTML cleanup pass. That was intentionally not done here to avoid broad structural churn.

## 11. Git / Deployment Summary

Commits pushed during this sprint:

- `0f3aadc Standardize material category page flow`
- `ff5d2f8 Standardize grade and product form page flow`

Report commit:

- Pending at report creation.

Excluded from commits:

- `RUBINOX_MASTER_PROJECT_STATUS.md`
- `CARD_ACCENT_STYLE_AUDIT.md`
- Generated QA report folders
- `node_modules/`

## Final Confirmation

The website source remains static HTML and deploys through GitHub Pages from `main`. The safe section-flow fixes were limited to the affected material and product-form pages, and the final QA state matches the expected baseline.
