# Site-Wide Design Analysis

Date: 2026-06-29
Live site: https://rubinoxmetal.com
Active local folder: C:\Users\Dell\OneDrive\Documents\rubinox-website-live
Scope: design analysis only. No public HTML, CSS, SEO, sitemap, schema or URL changes were made in this batch.

## Executive Summary

Overall design score: 7.8 / 10.

The site is technically stable after the Claude audit implementation. Header, top rail, sticky behavior, logo visibility, footer color theme, footer icon sizing, FAQ spacing, dark-hero H1 color, responsive tables and horizontal overflow all passed the rendered checks described below. The specific issues recently reported by the owner were not reproducible after the latest fixes: new pages no longer show a blue/dark footer, oversized footer call/email buttons, missing top-bar social icons, premium hero headings in blue, FAQ content touching card edges or exact black text tokens.

The main remaining design work is polish rather than repair. The site has strong industrial credibility, good content depth and a clear navy/silver/gold brand direction, but many long-tail grade, location and export pages are visually repetitive. Future design work should improve scanability, table presentation, homepage conversion hierarchy, image variety and page-group differentiation without changing SEO URLs or making unverified business claims.

## Method

- Pulled `origin/main` before analysis: already up to date.
- Ran baseline QA scripts from the active local folder.
- Performed a static scan of all 261 local HTML pages for top rail, footer icons, platform icons, explicit black text color tokens and footer background rules.
- Performed rendered checks with local HTTP serving and Chromium.
- Checked all 261 pages at 1366px desktop and 390px mobile.
- Checked 53 representative pages at 1280px, 768px and 360px.
- Took temporary screenshots outside the repo for visual judgement. They were not committed.

## Page Inventory

| Page group | Count | Notes |
| --- | ---: | --- |
| Home | 1 | Main conversion and brand entry page |
| Company / trust | 5 | About, mission, profile, registrations, author page |
| Hub pages | 4 | Materials, product forms, product portfolio, grades |
| Industries hub | 1 | Industry overview |
| Location pages | 51 | PAN India city/local landing pages |
| Export pages | 16 | Export hub plus country pages |
| Knowledge Hub | 31 | Blog index plus article pages |
| Technical / documentation | 2 | Technical resources and quality documentation support |
| Price factor pages | 6 | Price guidance pages without fixed pricing claims |
| Material family pages | 13 | Stainless steel, nickel alloys, duplex, titanium, etc. |
| Grade / specification pages | 110 | Grade, alloy and specification pages |
| Product form pages | 17 | Pipes, tubes, sheets, plates, flanges, fittings, etc. |
| RFQ page | 1 | Quotation workflow |
| Contact page | 1 | Contact and address details |
| Legal pages | 2 | Privacy and terms |
| Total | 261 | Matches sitemap count |

## Responsive Checks

| Viewport | Pages checked | Result |
| --- | ---: | --- |
| 1366 x 900 desktop | 261 | Pass |
| 1280 x 800 laptop | 53 representative | Pass |
| 768 x 1024 tablet | 53 representative | Pass |
| 390 x 844 mobile | 261 | Pass |
| 360 x 800 narrow mobile | 53 representative | Pass |

Rendered issue counts across 681 page/viewport checks:

| Check | Issues |
| --- | ---: |
| Horizontal overflow | 0 |
| Missing logo | 0 |
| Sticky/fixed header behavior | 0 |
| Top rail slogan/social consistency | 0 |
| Footer white-theme/icon consistency | 0 |
| Premium hero H1 color | 0 |
| Duplicate H1 | 0 |
| Exact black rendered text samples | 0 |
| Table overflow outside page | 0 |
| FAQ card padding | 0 |
| Oversized footer call/email buttons | 0 |
| Page load errors | 0 |

## Header And Top Rail

Status: stable.

- Top rail consistently shows: `Stockist | Supplier | Importer | Exporter | Project Supplier`.
- Phone, WhatsApp, email, Facebook, Instagram and LinkedIn icons are present across the all-page static scan and the rendered pass.
- Header stays sticky while scrolling.
- Logo remains visible at desktop and mobile widths.
- Desktop navigation is consistent and switches to the mobile menu at constrained widths without horizontal scroll.
- The current header is visually acceptable, though the logo/nav area is dense on laptop widths. Future changes should avoid increasing header height or adding more nav labels.

## Footer

Status: stable and back on theme.

- Footer background is white on checked pages.
- Social/contact icon buttons are compact and consistent.
- Business platform icons are present across all pages: Google Business Profile, IndiaMART, TradeIndia, ExportersIndia and Justdial.
- No rendered oversized footer call/email buttons were found.
- Footer links are clear, but the Quick Links column is now long. This is acceptable for SEO/navigation, but future design work could group links more elegantly without removing important internal links.

## Hero And Page Heading Treatment

Status: stable.

- Premium dark hero H1 text computes to white on all rendered checks.
- Non-premium card-based grade heroes use navy headings on white cards, which is consistent with that template and should not be treated as the blog-style blue-on-dark issue.
- Hero spacing is generally healthy. Homepage and Knowledge Hub hero sections feel strongest because they include real visual context.
- Many long-tail grade/spec pages still feel templated because the hero image and proof chips repeat. That is a design opportunity, not a deployment defect.

## Typography And Color

Status: stable.

- No explicit black text color token was found in the all-page HTML scan.
- No exact black rendered text samples were found in the 681 page/viewport checks.
- The main text system is navy for headings and muted blue for body copy, matching the brand theme.
- Some pages are dense because body copy, table text and card lists are all similar weight. Future improvement should add stronger hierarchy through section labels, shorter intros, better table headers and spacing, not through a new color palette.

## FAQ And Card Layout

Status: stable.

- FAQ card padding passed at desktop, tablet and mobile widths.
- The new page FAQ content fits inside cards with margins on all sides.
- Long question headings wrap properly and no card text was found touching the border.
- Future work can improve FAQ readability by limiting each page to the most useful 4 to 6 questions and keeping paragraph lengths tighter.

## Technical Resources And Tables

Status: functional and readable.

- Tables do not create page-level horizontal scroll at mobile widths.
- The technical-resource page is usable on 390px and 360px screens.
- The current design is content-heavy. Future polish should add scroll affordance, stronger table captions, grouped resource cards and clearer visual separation between charts.
- Do not replace technical tables with images; keep real HTML tables for accessibility and SEO.

## Page Group Findings

| Group | Score | Strengths | Weaknesses / opportunities |
| --- | ---: | --- | --- |
| Homepage | 8.0 | Strong brand, industrial hero, clear RFQ CTAs | Market Watch band feels underused; section rhythm can be tightened |
| Header/footer system | 9.0 | Consistent, sticky, icons present, white footer restored | Desktop nav is dense at laptop widths |
| Hubs | 7.8 | Clear internal linking, useful categories | Could use stronger visual hierarchy and comparison/filter cues |
| Material family pages | 7.7 | Good content depth, brand-consistent cards | Visual variety can be improved by family-specific diagrams/images |
| Grade/spec pages | 7.3 | Not thin, good RFQ focus, one H1 each | Repetitive template, dense tables, similar hero visuals |
| Product form pages | 7.5 | Practical RFQ content and product coverage | Could benefit from form-specific specs, icons and use-case grouping |
| Location/export pages | 7.1 | Broad coverage and consistent layout | High repetition; local/export trust cues need careful owner-supplied proof |
| Knowledge Hub | 8.1 | Strong hero, useful guide topics, article depth | Blog index could use filters/tags and richer article card hierarchy |
| Technical/documentation pages | 7.6 | Valuable buyer resources, tables contained | Dense on mobile; needs better table UX and anchors |
| Trust/conversion pages | 7.8 | Clear company positioning and RFQ support | Needs owner-supplied real assets/docs for premium credibility |
| Legal pages | 7.0 | Clean and stable | Plain, but acceptable for their purpose |

## Strengths

- Consistent industrial brand palette: navy, white, silver and gold.
- Strong post-audit technical stability: sitemap, crawl, schema, accessibility and navigation passed.
- Header and footer now feel coherent across old and new pages.
- Content depth is good; new material/spec pages do not feel thin.
- RFQ intent is clear across grade, form and technical pages.
- No visible manufacturer/factory/stock/pricing/certification claim drift was introduced in this audit batch.

## Weaknesses And Risks

- Long-tail grade/spec pages risk feeling mechanically repeated even when the content is valid.
- Location/export pages need differentiation without inventing local offices, stockyards, clients or delivery promises.
- The homepage Market Watch area is visually weaker than the hero and later sections.
- Technical tables are readable but not yet premium; they need better mobile affordances and section framing.
- Some pages rely on generic metal imagery; more page-specific real/product imagery would improve trust.
- Legacy HTML validation errors remain on 58 material pages and should be cleaned separately before large future design rewrites.

## Top 10 Recommended Improvements

1. Preserve the fixed header/footer system as the new baseline and do not redesign it first.
2. Improve the homepage Market Watch and RFQ path so the first screen leads into a clearer buyer journey.
3. Add a stronger shared section rhythm for grade/spec pages: hero, forms, standards, applications, documentation, FAQ and RFQ.
4. Make technical tables more scannable on mobile with captions, scroll hints and tighter column content.
5. Add page-group-specific visual assets or diagrams for material families and product forms.
6. Improve Knowledge Hub filtering and article-card hierarchy without changing article URLs.
7. Reduce repeated copy patterns on location/export pages while staying within verified supply/export-support claims.
8. Add owner-supplied trust assets where available: real office/product photos, profile PDF previews and documentation examples.
9. Clean the 58 legacy HTML validation issues before broad design refactoring.
10. Build a repeatable visual QA checklist for every future batch: 1366, 1280, 768, 390 and 360 widths.

## What To Implement First

Start with a low-risk design polish batch rather than a full redesign:

1. Homepage buyer journey polish.
2. Technical resources table UX polish.
3. Grade/spec page card and section rhythm polish on a 5-page pilot.
4. Product-form hub and key form pages polish.
5. Knowledge Hub index filtering/card polish.

This order improves visible quality while avoiding unnecessary SEO, schema or URL churn.

## What Not To Change

- Do not change canonical URLs, public filenames, H1 intent, metadata, sitemap URLs or existing schema unless a separate SEO task requires it.
- Do not describe Rubinox as a manufacturer, factory, mill, approved vendor or certified body unless verified by the owner.
- Do not add fake stock quantities, delivery guarantees, price lists, client logos, ratings, reviews, certificates or project names.
- Do not change official contact details without updating the source contact documentation first.
- Do not replace the white footer with a dark/blue footer.
- Do not enlarge footer call/email links into tall CTA buttons.
- Do not remove top rail social/contact icons.
- Do not make premium hero headings blue on dark backgrounds.
- Do not replace technical HTML tables with static images.

## QA Results

| Command / check | Result |
| --- | --- |
| `git pull origin main` | Already up to date |
| `npm.cmd run qa:sitemap` | Pass - 261 sitemap URLs, 261 local HTML pages, no missing/extra/duplicate URLs |
| `npm.cmd run qa:crawl` | Pass - 394 links scanned successfully |
| `npm.cmd run qa:schema` | Pass - 261 pages scanned, 866 JSON-LD blocks, 0 invalid blocks |
| `npm.cmd run qa:accessibility` | Pass - 5 scripted pages checked, 0 violations |
| `npm.cmd run test:navigation` | Pass - navigation verification passed |
| `npm.cmd run qa:html` | Known baseline - 261 pages checked, 58 invalid legacy material pages |
| Static design scan | Pass - 261 pages, 0 topbar/footer/black-token issues |
| Rendered responsive scan | Pass - 681 page/viewport checks, 0 measured issues |

## Remaining Known Baseline Issues

- `npm.cmd run qa:html` reports 58 invalid legacy material pages. This is a pre-existing cleanup item and should be handled as a separate technical cleanup batch.
- The design system is still inline and repeated across many static pages. That is normal for the current stack, but it increases maintenance risk when future design changes are made.
- Some long-tail pages need richer visual differentiation, but this should be implemented carefully and in batches.
