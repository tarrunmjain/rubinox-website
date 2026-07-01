
# Rubinox Website Master Roadmap

Date: 2026-06-29
Active folder: C:\Users\Dell\OneDrive\Documents\rubinox-website-live
Production domain: https://rubinoxmetal.com
Repository: tarrunmjain/rubinox-website
Deployment: GitHub Pages from main branch

## Purpose

This roadmap is the control system for future Rubinox website work. It locks the current verified baseline, separates planning from implementation, and gives future batches a clear order for SEO, AEO/GEO/LLMO, design, conversion, content, tooling and owner-data work.

This batch is documentation and data only. It does not authorize public HTML, CSS, JavaScript, sitemap, schema, URL, content, H1, metadata or design changes.

## Current Baseline

The current state is taken from the latest local QA runs and the design/audit documents in docs/.

| Area | Current status |
| --- | --- |
| Public sitemap URLs | 261 |
| Local public HTML pages | 261 |
| qa:sitemap | Passing - 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 extra, 0 duplicate URLs |
| qa:crawl | Passing - 397 links scanned successfully |
| qa:schema | Passing - 261 pages, 866 JSON-LD blocks, 0 invalid blocks |
| qa:accessibility | Passing - 5 configured pages, 0 violations |
| test:navigation | Passing |
| Rendered visual QA | Passing in Batch 13A live trust asset check; Batch 10E grade/spec checkpoint remains complete |
| Known HTML validation baseline | qa:html passing with 0 invalid pages |
| Design score | 7.8 / 10 overall |
| Header/top rail/footer | Stable and protected |

## Absolute Guardrails

- Rubinox Metal and Alloys is a stockist, supplier, importer, exporter and project supplier.
- Do not describe Rubinox as a manufacturer.
- Do not invent certifications, client names, projects, stock levels, warehouses, factories, branches, delivery guarantees, ratings, reviews or approvals.
- Do not publish fixed prices or price lists. Use price-factor guidance only.
- Do not change public SEO URLs, H1s, titles, meta descriptions, canonicals, schema, sitemap URLs or internal links unless a dedicated task explicitly requires it.
- Do not create new public pages before keyword mapping, Search Console review and owner approval where needed.
- Preserve the navy, silver and gold brand direction.
- Preserve the sticky header, restored white footer, compact footer icons and full top rail icon set.
- Keep technical resources as real HTML tables, not static images.

## A. Governance And Baseline

The governance layer is the operating system for all future work.

1. Master backlog: use docs/RUBINOX_GLOBAL_GROWTH_BACKLOG.md as the single task queue.
2. Decision logs: record SEO and design decisions before implementation.
3. Batch QA checklist: use docs/RUBINOX_BATCH_QA_CHECKLIST.md before and after each batch.
4. Protected design rules: header, top rail, white footer, compact icons, premium dark hero H1 color, table containment and no horizontal overflow.
5. Protected SEO rules: one primary keyword per page, one canonical URL per page, sitemap consistency, no doorway pages and no unverified schema.
6. No-claim-drift rules: supplier/stockist/importer/exporter wording only, with cautious certificate/testing language.
7. Batch discipline: small implementation batches, separate commits for docs, design, SEO, tooling and content.

## B. Measurement And Indexing

Measurement is P0 because future keyword and location decisions should be driven by real data.

| Item | Status | Next action |
| --- | --- | --- |
| Google Search Console | Domain property exists and sitemap is Success with 261 discovered pages | Run 7, 14 and 30 day indexing/performance monitoring; request indexing for priority URLs |
| Bing Webmaster Tools | Sitemap is Success with 261 discovered URLs, 0 errors and 0 warnings | Run 7, 14 and 30 day URL status monitoring; submit priority URLs if needed |
| GA4 | Implemented with `G-JT5X5L5H07` on 261 of 261 HTML pages | Owner to confirm Realtime/DebugView and monitor lead-intent events |
| Sitemap submission | Complete in Google Search Console and Bing Webmaster Tools | Monitor read status and discovered URL count |
| WhatsApp click tracking | Implemented in Batch 11B | Confirm in GA4 Realtime or DebugView during owner monitoring |
| Email RFQ click tracking | Implemented in Batch 11B | Confirm in GA4 Realtime or DebugView during owner monitoring |
| Phone click tracking | Implemented in Batch 11B | Confirm on mobile or emulated mobile during owner monitoring |
| Company profile PDF tracking | Implemented in Batch 11B | Confirm as secondary event after deployment |
| Technical resource engagement | Implemented in Batch 11B | Use for monthly content-path review after data accrues |

## C. Technical Baseline

Keep the current QA stack active before any website implementation batch:

- npm.cmd run qa:sitemap
- npm.cmd run qa:crawl
- npm.cmd run qa:schema
- npm.cmd run qa:accessibility
- npm.cmd run test:navigation
- git diff --check

Known technical debt:

- Legacy HTML validation cleanup is complete; keep `qa:html` in the standard QA suite to protect the 0 invalid-page baseline.
- The site uses repeated inline CSS/JS by design. This is workable for static hosting but increases batch risk.
- The latest public inventory is much larger than the older PROJECT_TRANSFER snapshot: 261 public URLs, not 75.

## D. Design Roadmap

Design work is polish, not repair. Do not run a full redesign in one batch.

| Phase | Name | Scope | Acceptance |
| --- | --- | --- | --- |
| Phase 0 | Baseline lock | Protect current header, top rail, footer, dark hero H1, FAQ padding and table containment | Existing QA and rendered checks remain passing |
| Phase 1 | Homepage buyer journey polish | Clarify Market Watch role, RFQ path, proof chips and internal routing | No H1/meta/canonical changes, no price or stock promises |
| Phase 2 | Technical resources and table UX | Add captions, scroll hints, anchors and better grouping | Tables remain real HTML and mobile-safe |
| Phase 3 | Five-page grade/spec pilot | ss-316l, inconel-625, duplex-2205, api-5l-grade-b, astm-a335-p91 | One H1, no claim drift, no footer/top rail regression |
| Phase 4 | Product form page polish | Pipes, tubes, sheets, plates, coils, flanges, fittings, fasteners, bars/rods and wire mesh | Product wording remains supplier-focused |
| Phase 5 | Hub and Knowledge Hub polish | grades, materials, product forms, product portfolio and blog index | Existing URLs remain unchanged |
| Phase 6 | Location and export page differentiation | Better city/export modules and RFQ guidance | No fake local office, warehouse, stockyard or delivery claims |
| Phase 7 | Trust asset upgrade | Real photos, verified registrations, profile PDF and directory links | Owner assets and approvals required |

## E. Technical SEO Roadmap

- Schema monitoring: run qa:schema after every public page edit.
- Sitemap monitoring: run qa:sitemap after every page add, rename or removal.
- Crawl monitoring: run qa:crawl after navigation, footer or internal-link edits.
- Canonical protection: no canonical changes without a dedicated SEO decision.
- robots.txt verification: confirm sitemap reference and crawl allowance after deployment changes.
- Internal linking discipline: keep related grade, form, location, export, technical and RFQ links crawlable.
- Legacy HTML cleanup: handle the 58 validation issues in a separate P0 batch.
- Core Web Vitals and Lighthouse: run focused checks on home, technical resources, quotation, one grade, one city and one blog page.
- PageSpeed checks: use PageSpeed Insights after deployment for mobile and desktop signals.
- Image compression/WebP: audit large assets before adding new visuals.

## F. Keyword Roadmap

Do not create thousands of public pages. Build the keyword matrix first, then decide which pages deserve public URLs.

Keyword groups:

- Material keywords: stainless steel, duplex, super duplex, nickel alloys, titanium, copper, brass, aluminium, carbon steel, mild steel.
- Grade keywords: SS 316L, Inconel 625, Copper Nickel 90/10, API 5L Grade B, ASTM A335 P91 and other existing grades.
- Product form keywords: pipes, tubes, rods, sheets, plates, coils, flanges, fittings, fasteners, angles, wire mesh.
- Specification keywords: ASTM, ASME, API, EN, DIN, IS, schedule 40/80, seamless and welded pipe.
- City keywords: map only the highest value cities first.
- State keywords: map 10-15 industrial state pages after city data.
- Country/export keywords: map 10-20 export pages, based on verified export enquiry support.
- Buyer-intent keywords: supplier, stockist, importer, exporter, project supplier, RFQ and quotation.
- Price-factor keywords: use price-factor guides without fixed prices.
- Dealer terms: map safely to supplier/stockist pages; do not imply authorized dealership, local branch or local stock.

## G. Location SEO Roadmap

Location expansion must be data-led and cautious.

1. Improve the city hub before adding more pages.
2. Prioritize 30-50 main city pages only after keyword mapping and Search Console data.
3. Add 10-15 industrial state pages only where search demand and buyer utility support them.
4. Add 10-20 country/export pages with export-from-India wording.
5. Add selected product-city pages only after the keyword master map proves unique intent.
6. Avoid fake local office, warehouse, stockyard, ready-stock or guaranteed delivery claims.

Safe wording examples:

- supplier for Chennai buyers
- RFQ support for Pune buyers
- exporter from India for Dubai/UAE enquiries

## H. GEO / AEO / AISEO / LLMO Roadmap

Use answer-first content and structured clarity to improve citation and answer visibility.

- Add concise answer-first blocks on grade, spec, form and technical pages.
- Add visible FAQs only where they genuinely help buyers.
- Add FAQ schema only when matching visible FAQ content exists.
- Use comparison tables for grade/spec/material choices.
- Keep technical tables accessible and text-based.
- Add author/editorial trust carefully through organization-level review unless real people are approved.
- Maintain and audit llms.txt workflow; do not change it in content batches without a decision.
- Run AI citation testing for Perplexity, Gemini and ChatGPT query patterns after core pages stabilize.
- Add concise definitions on grade/spec pages.
- Build Knowledge Hub topic clusters around standards, MTC/PMI, export RFQs, material selection and price factors.

## I. E-E-A-T Roadmap

Trust work is owner-data dependent. Do not fill gaps with invented proof.

- GST number and public-display approval.
- MSME/Udyam details and public-display approval.
- IEC details and public-display approval.
- Certificate/document images if real and approved.
- Real office photos.
- Real product/catalogue photos.
- Approved team/contact person image if available.
- Business hours.
- Google Business Profile link and review link.
- Official directory links: IndiaMART, TradeIndia, Justdial, ExportersIndia and others if approved.
- LinkedIn/company social links.
- Company profile PDF improvement after owner review.
- Vendor onboarding pack.
- Client/project references only if real and approved.

## J. Conversion Roadmap

The current conversion path is WhatsApp, email and RFQ handoff. Keep it simple until backend ownership is clear.

- Current flow: WhatsApp, mailto, phone and quotation page.
- Future backend options: Formspree, Google Apps Script or Cloudflare Worker.
- Thank-you page: only after a real backend exists.
- File upload: only after backend, storage and privacy handling are approved.
- GA4 conversion tracking: track WhatsApp, email, phone, PDF download and RFQ submissions.
- Lead logging: define owner-approved storage and privacy process before collecting structured leads.
- CTA improvements: improve clarity without changing public SEO intent in the first design batches.

## K. Content Roadmap

- Knowledge Hub cluster strategy: standards, documentation, material selection, export RFQ and price factors.
- Top material articles: stainless steel, duplex/super duplex, nickel alloys, titanium, copper/brass and carbon/mild steel.
- Top standards articles: ASTM/API/EN/DIN/IS introductions for buyers.
- Documentation/MTC/PMI articles: explain what to request and when documentation is available.
- Export RFQ articles: packaging, marking, delivery location/port and documentation questions.
- Price-factor articles: explain inputs without publishing fixed prices.
- Video script ideas: RFQ checklist, grade selection, MTC/PMI basics and export enquiry checklist.
- Product form content: add buyer-friendly form, size, standard and application cues.

## L. Visual Asset Roadmap

Only use visuals that are accurate for Rubinox and the product page.

- Real office/contact images.
- Metal rack/product imagery.
- Product form visuals.
- Technical resource diagrams.
- Documentation/MTC desk image.
- India map visual.
- Export/world map visual.
- Page-specific WebP assets.
- No fake factory, mill, production-line or certification visuals.

## M. Tooling Roadmap

Document first, install later.

- Existing npm QA scripts: keep qa:sitemap, qa:crawl, qa:schema, qa:accessibility and test:navigation as baseline.
- Codex SEO skill suite candidate: optional after core control files are stable.
- Google Search Console MCP candidate: useful after owner verifies Search Console access.
- Better Search Console candidate: optional if it improves query/page grouping.
- Lighthouse / Lighthouse CI: recommended after current QA remains stable.
- PageSpeed Insights API: useful for deployed mobile/desktop checks.
- Pa11y: optional broader accessibility regression suite.
- Link checker: existing crawl covers internal links; external checks can be added later.
- HTML validator: use for the 58 legacy issue cleanup batch.
- Schema/Rich Results testing workflow: combine qa:schema with Google's public tools for representative templates.
- Image audit helper: add before large visual asset batches.
- llms.txt workflow: validate after AISEO/LLMO plan is approved.
- On-Page.ai MCP: optional paid/credit-based targeted scans.
- Semrush plugin/MCP: optional paid/subscription-based competitor scans.

## Next Three Batches

1. P0 external setup: owner verifies Search Console through DNS TXT, submits sitemap and imports into Bing Webmaster Tools.
2. P0/P1 measurement follow-up: verify GA4 event receipt after deployment and mark approved lead events as key events.
3. P1 design/data follow-up: technical resources table UX or homepage buyer journey refinement, guided by owner priority and measurement/search data after data accrues.

<!-- RUBINOX BATCH 4 KEYWORD LOCATION START -->
## Batch 4 Keyword And Location Architecture Status

Batch 4 completed the planning/data architecture layer for future keyword and location SEO expansion. It expanded data/keyword-master-map.csv from 20 rows to 955 rows and data/location-seo-map.csv from 56 rows to 97 rows. No public pages were created or edited.

Future city, state, country/export, product-city and product-country pages remain planned candidates. Implementation still requires query review, differentiated page value, safe claim checks and full QA before publication.
<!-- RUBINOX BATCH 4 KEYWORD LOCATION END -->

<!-- RUBINOX BATCH 7 ROADMAP START -->
## Batch 7 Knowledge Hub Status

- Phase 5 Knowledge Hub polish is complete for existing public Knowledge Hub assets: blog.html, 30 article pages and the organization-level author/review page.
- Blog index links remain normal crawlable anchors; client-side filtering only hides or shows existing cards visually.
- Article URLs, H1 intent, title/meta/canonical targets, sitemap URLs and schema meaning were preserved.
- Future Knowledge Hub topic clusters, price-factor articles and standards articles remain roadmap items; no new public articles were created in Batch 7.
<!-- RUBINOX BATCH 7 ROADMAP END -->

<!-- RUBINOX BATCH 8 ROADMAP START -->
## Batch 8 Industry Hub Status

- Industry page discovery found one public industry page: industries.html.
- The existing industries hub was polished with grouped RFQ pathways for process and energy, engineering and fabrication, marine and export applications, infrastructure and construction, and food/pharma/hygiene applications.
- Existing URL, H1 intent, title/meta description, canonical target, sitemap URL and WebPage/Breadcrumb schema meaning were preserved.
- The hub now links more clearly to relevant material, grade, product-form, technical resource, quality documentation, Knowledge Hub, location/export and quotation pages.
- Individual industry pages remain future candidates only and should be created only after keyword, Search Console, enquiry history or owner-priority review confirms differentiated buyer value.
<!-- RUBINOX BATCH 8 ROADMAP END -->


<!-- RUBINOX BATCH 9 ROADMAP START -->
## Batch 9 Material Family Hub Status

- Material family discovery confirmed one top-level materials hub plus 13 existing public family pages: stainless steel, nickel alloys, duplex and super duplex, titanium, aluminium, copper, brass, carbon steel, mild steel, SMO 254, phosphor bronze, high speed steel and special engineering alloys.
- Batch 9 polished only those existing URLs with crawlable RFQ pathway links to grade/specification pages, product-form cues, technical resources, quality documentation, Knowledge Hub guides and quotation routes.
- Existing URLs, H1 intent, title/meta descriptions, canonical targets, sitemap URLs and schema meaning were preserved.
- New material or grade pages remain future candidates only after keyword, Search Console, enquiry history or owner-priority review confirms differentiated buyer value.
<!-- RUBINOX BATCH 9 ROADMAP END -->

<!-- RUBINOX BATCH 10B ROADMAP START -->
## Batch 10B Grade / Specification Rollout Status

- Grade/specification discovery remains 110 existing public pages.
- Previously polished pages remain: 5 Batch 1 pilot pages and 10 Batch 10A gate pages.
- Batch 10B polished 35 additional existing grade/specification pages with the approved gate rhythm and mobile-safe component rules.
- 60 remaining grade/specification pages are deferred to Batch 10C.
- Existing URLs, H1 intent, title/meta descriptions, canonical targets, sitemap URLs and schema meaning were preserved.
- FAQ schema was updated only on pages that already had FAQPage schema, and only to match visible FAQ content.
- Future Batch 10C work should continue the same visual gate: all changed pages at 1366 and 390, representative pages at 1280, 768 and 360, with no page below 8/10.
<!-- RUBINOX BATCH 10B ROADMAP END -->

## Batch 10C Grade / Specification Rollout Status

Date: 2026-07-01

- Batch 10C polished 30 additional existing grade/specification pages with the approved Batch 10A/10B gate rhythm.
- Batch 10C covered remaining stainless/Mumbai stainless pages, aluminium grades, copper grades, brass grades and one high-intent ASTM A36 carbon steel page.
- 30 remaining grade/specification pages are deferred to Batch 10D.
- No new public pages, sitemap URLs, public SEO URLs, title/meta/canonical targets or broad internal-link strategy changes were introduced.
- FAQ schema was updated only on pages that already had FAQPage schema, and only to match visible FAQ content.
- Future Batch 10D work should continue the same visual gate: all changed pages at 1366 and 390, representative pages at 1280, 768 and 360, with no page below 8/10.

## Batch 10D Final Grade / Specification Rollout Status

- Grade/specification discovery remains 110 existing public pages.
- Batch 10D polished the final 30 existing grade/specification pages with the approved Batch 10A/10B/10C gate rhythm.
- Existing rollout completion: 5 Batch 1 pilot pages, 10 Batch 10A pages, 35 Batch 10B pages, 30 Batch 10C pages and 30 Batch 10D pages.
- Remaining existing grade/specification pages deferred after Batch 10D: 0.
- No new public pages, sitemap URLs, public SEO URLs, title/meta/canonical targets or broad internal-link strategy changes were introduced.
- FAQ schema was updated only on pages that already had FAQPage schema, and only to match visible FAQ content.
- Future grade/specification expansion remains gated by keyword evidence, enquiry history or owner priority.

## Batch 10E Post Grade / Specification Rollout Checkpoint

- Batch 10E confirmed local and remote `main` at `9078dd6` / `9078dd68d096b70e1ce08c086e211a0e8dee61c1`.
- Full local QA passed, including sitemap, crawl, schema, accessibility, navigation, HTML, links, pa11y, image audit, forbidden-claims review, `git diff --check` and `qa:full`.
- Representative live URL checks returned 200 for the home, grades, materials, technical resources, quotation and selected grade/specification pages.
- Representative visual review covered 15 grade/specification pages across 1366, 1280, 768, 390 and 360 widths with 75 screenshots and 0 layout failures.
- Existing grade/specification rollout remains approved complete: 110 of 110 pages in scope, with no public page, URL, H1, metadata, canonical, schema, sitemap or broad internal-link strategy changes in this checkpoint.
- It is safe to proceed to tracking and measurement setup, pending owner access for Search Console, Bing Webmaster Tools and GA4.

## Batch 11B Tracking Implementation Status

- GA4 is standardized on the owner-confirmed Measurement ID `G-JT5X5L5H07` for the Rubinox Website stream.
- All 261 public HTML pages include one GA4 loader, one GA4 config call and one `/assets/js/tracking.js` include.
- The old accidental ID `G-CR18QYPS6C` was removed from `quotation.html`.
- Safe lead-intent events are implemented for WhatsApp, email, phone, quotation CTAs, quotation-form intent, company profile PDF/page links, technical resources, quality documentation, Knowledge Hub article links and existing directory/social outbound links.
- Google Search Console setup moved to verified monitoring in Batch 11D: domain property exists, sitemap was submitted on 2026-07-01, status Success and 261 discovered pages were reported.
- Bing Webmaster Tools setup moved to monitoring in Batch 11D: sitemap status Success, 261 discovered URLs, 0 errors and 0 warnings were reported.
- No repo verification file or meta tag was required; Search Console and Bing follow-up is now URL inspection, priority URL submission where useful and 7/14/30 day monitoring.

## Batch 12 Trust And Conversion Asset Review Status

- Batch 12 completed a documentation-only review of current trust assets, missing owner-supplied proof and current RFQ conversion pathways.
- Public pages were not changed; URLs, H1s, title/meta/canonical targets, schema, sitemap URLs, analytics and broad internal-link strategy remain unchanged.
- Current trust assets include the company profile page/PDF, cautious registrations/compliance page, quality documentation support, Bharat Metals sister concern wording, GBP/directory/social links, contact CTAs, map/address, Knowledge Hub organization-level reviewer page and existing visual assets.
- Owner assets that were pending in Batch 12 were partly completed in Batch 13A: GST/Udyam/IEC status-card display, office/profile images, GBP/review/social/directory links, contact person, business hours and company profile PDF are owner-approved and implemented. Product rack, packing/dispatch and contact/team photos remain owner-side future inputs.
- Backend RFQ implementation remains a future owner decision. No backend, upload handling, CAPTCHA, thank-you page or personal-data GA4 tracking was added.
- Future Phase 7 trust work should use `docs/trust-asset-placement-map.md` and `docs/trust-claims-risk-register.md` before any public-page edit.

## Batch 13A Verified Trust Asset Implementation Status

- Batch 13A implemented owner-approved trust assets and verified public trust details without publishing raw certificate PDFs or private/source documents.
- Public trust additions stayed within verified GST, Udyam, IEC, GBP/review, social, directory, business hours, contact person and sister concern wording approvals.
- Approved real images used were office/front, lobby/front, conference room, company profile brochure and Google review QR assets only.
- The public company profile PDF was regenerated and remains available as `assets/docs/rubinox-company-profile.pdf`.
- No manufacturer, factory, stock, price, fake certification, client, project, rating, review-snippet, testimonial, vendor onboarding or delivery guarantee claims were introduced.

## Batch 13A-Live Verified Trust Asset QA Status

- Live trust asset QA confirmed public pages and the company profile PDF returned HTTP 200.
- Live checks confirmed the Google review QR/link path, public profile PDF delivery and absence of raw certificate PDF publication.
- The live QA report is `docs/verified-trust-assets-live-check-batch-13a.md`.

## Batch 13B Final Website Lock And Monitoring Control

- Batch 13B is documentation/data only and locks the current website for monitoring.
- Created `docs/verified-owner-assets-batch-13a-report.md`, `docs/RUBINOX_FINAL_CURRENT_STATUS_2026-07-01.md` and `docs/RUBINOX_NEXT_30_DAYS_ACTION_CHECKLIST.md`.
- Public website pages, sitemap URLs, schema blocks, metadata, canonical targets, H1s, tracking code, visual assets and broad internal-link strategy were not changed.
- Next work should be Search Console, Bing and GA4 monitoring at 7, 14 and 30 days, followed only by data-led owner-approved implementation batches.