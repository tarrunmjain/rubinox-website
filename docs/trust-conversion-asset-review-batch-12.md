# Trust And Conversion Asset Review - Batch 12

Date: 2026-07-01
Website: https://rubinoxmetal.com
Scope: documentation-only trust asset and conversion pathway review.

## Decision

No public website pages were changed in Batch 12. The current site already has a cautious trust and RFQ conversion foundation, but the next trust upgrades require owner-supplied proof and approval. Registration numbers, certificate images, reviews, ratings, client/project names, stock claims, delivery promises and manufacturing language should not be added without verified owner evidence.

## Sources Reviewed

- Control docs: master roadmap, growth backlog, owner-data pending list, SEO/design decision logs, QA checklist and Batch 10E/11B/11C/11D reports.
- Data files: page inventory, tracking event map and tooling status.
- Public trust/conversion pages: home, about, company profile, registrations/compliance, quality documentation support, quotation, contact, technical resources, locations, UAE export page, Knowledge Hub index and Knowledge Hub author page.
- Global components: header top rail, navigation, footer contact links, social icons and business platform icons.

## Current Trust Assets Present

| Asset | Where present | Current status | Claim safety note | Next action |
| --- | --- | --- | --- | --- |
| Company identity | Header/top rail, footer, about, company profile, contact and many page templates | Present | Uses stockist, supplier, importer, exporter and project supplier language | Preserve; do not switch to manufacturer/factory language |
| Company profile page | `company-profile.html` | Present | Uses published Rubinox information and an accuracy note | Keep; upgrade only after owner approval |
| Company profile PDF | `assets/docs/rubinox-company-profile.pdf` and links from company/about pages | Present | Treated as an existing asset, not a certificate | Owner should approve current PDF before stronger public placement |
| Registrations and compliance page | `registrations-compliance.html` | Present | Mentions GST, IEC and MSME/Udyam as requestable details without publishing numbers | Add numbers only after owner approval and verification |
| Owner data warning | `registrations-compliance.html` and company profile accuracy note | Present | Explicitly blocks certificate numbers, registration numbers and approval badges without approval | Preserve |
| Bharat Metals sister concern wording | `about-us.html`, `contact.html` | Present | Describes procurement-focused experience connected with Bharat Metals | Owner should confirm continued public wording |
| Google Business Profile link | Footer and contact platform cards | Present | Links to existing GBP-style URL; no ratings/counts displayed | Owner should confirm official GBP URL and review URL |
| Directory profile links | Footer/contact: IndiaMART, TradeIndia, ExportersIndia, Justdial | Present | Used as business platform links; no ratings/counts displayed | Owner should confirm official listing URLs |
| Social links | Header/footer/contact: LinkedIn, Facebook, Instagram | Present | Used as profile links only | Owner should confirm official URLs |
| Contact CTAs | Header, footer, contact, quotation, page CTAs | Present | WhatsApp, email and phone use current confirmed site details | Preserve unless contact docs are updated first |
| Mumbai office address and map | `contact.html`, footer | Present | Real address is shown with map and cautious visit wording | Owner should confirm business hours if adding more precise hours |
| Google reviews placeholders | `contact.html` | Present as disabled placeholders | No review link, rating, count or text is displayed | Add only after owner provides official review link/QR |
| Quality documentation support | `quality-documentation-support.html`, technical resources, RFQ pages | Present | Uses cautious "where applicable", "review" and "coordination" wording | Preserve; add sample documents only if real and approved |
| MTC/PMI/inspection guidance | Quality documentation, technical resources, quotation and articles | Present | Avoids blanket guarantee language | Preserve |
| Knowledge Hub author/reviewer page | `knowledge-hub-author.html` | Present | Organization-level Procurement Team, no fake person credentials | Preserve until owner approves real author/team details |
| Visual assets | Hero, material, product, grade, industry and blog WebP/JPG assets | Present | Mostly generic or curated visuals; no fake factory claim found in this review | Replace or supplement with real photos only after owner approval |
| GA4 conversion tracking | `assets/js/tracking.js` and data event map | Present | Tracks safe click/form-intent events without RFQ field values | Verify in GA4 owner account and mark approved key events |

## Missing Owner-Provided Trust Assets

| Missing asset | Why it matters | Risk if added without proof | Priority |
| --- | --- | --- | --- |
| GST number and public display approval | Registration trust and vendor onboarding | Public wrong/unauthorized number | P1 |
| MSME/Udyam details and public display approval | Vendor onboarding and trust page | Implied registration without proof | P1 |
| IEC details and public display approval | Export credibility and onboarding | Implied export registration without proof | P1 |
| Certificate/document images | Trust and documentation pages | Fake certification implication | P1 |
| Official GBP URL, review link and review QR | Local trust and review capture | Wrong listing, fake review pathway or rating claims | P1 |
| Official social and directory URL confirmation | Profile consistency and outbound trust | Linking to stale or unofficial profiles | P2 |
| Real office, product, packing and dispatch photos | E-E-A-T and visual credibility | Fake factory/stockyard/warehouse implication | P1 |
| Team/contact person name, designation and photo | Contact trust and authoring | Fake credentials or personal attribution | P2 |
| Exact business hours | Contact UX and local trust | Incorrect availability expectation | P2 |
| Company profile PDF owner approval | Vendor onboarding and PDF tracking | Public pack may contain unapproved or stale claims | P1 |
| Vendor onboarding document pack | Procurement support | Publishing private or incomplete documents | P2 |
| Real clients, projects, memberships or associations | Authority proof | Fake endorsements, approved-vendor or project claims | P1 |
| Bank/vendor reference documents | Private onboarding support | Privacy and fraud risk if public | P2, private only |
| Backend RFQ preference and spam protection | Conversion quality and lead logging | Collecting data without approved storage/privacy process | P1 |

## Conversion Path Score Table

Score is a Batch 12 planning score out of 5, based on clarity, buyer usefulness, tracking coverage and remaining owner-data gaps.

| Path | Current score | Strengths | Gaps / next action |
| --- | ---: | --- | --- |
| Header WhatsApp/email/phone | 5 | Global, visible, current contact details retained, tracked | Verify GA4 event receipt in owner account |
| Homepage CTA path | 4 | Clear RFQ and material routing | Future homepage buyer-journey polish can improve trust proof placement |
| Quotation page | 4.5 | Strong static RFQ guidance, WhatsApp/email/phone routes, safe form intent tracking | No backend submit, no file upload, no thank-you page yet |
| Contact page | 4.5 | Strongest trust surface: map, contact cards, GBP/directory cards, review placeholders | Owner should provide official review link/QR and exact hours |
| Company profile page/PDF | 4 | Useful for vendor onboarding and tracked PDF engagement | Owner approval needed before stronger proof placement |
| Registrations/compliance page | 4 | Safe request-based GST/MSME/IEC wording | Public numbers/docs pending owner proof |
| Quality documentation support | 4 | Clear MTC, PMI and inspection guidance | Add real sample document images only if approved |
| Technical resources | 4 | Strong RFQ preparation content and technical links | Future table UX polish remains separate |
| Product form pages | 4 | Product-form RFQ routes and WhatsApp/email CTAs are in place | Backend RFQ and real product photos pending |
| Grade/specification pages | 4 | Rollout complete across existing 110 pages with RFQ rhythm | Monitor indexing and conversion data before further edits |
| Material family pages | 4 | Hub-to-grade/product/RFQ routing present | Add real material/product photos later |
| Location/export pages | 3.8 | Safe city/export RFQ wording, no local-branch claims | Add trust proof cautiously without fake local presence |
| Knowledge Hub/article path | 4 | Organization-level review page, article CTAs and tracking | Real author/person details only if owner approves |

## RFQ Backend Options

No backend was implemented in Batch 12.

| Option | Fit | Pros | Watchouts |
| --- | --- | --- | --- |
| Current static flow | Keep now | Lowest risk; WhatsApp, email and phone already work | No structured lead log, no real success page |
| Google Apps Script + Google Sheets | Good low-cost owner workflow | Owner-controlled sheet, can email notifications | Needs script ownership, spam protection and privacy wording |
| Formspree, Basin or Getform | Good hosted-form shortcut | Quick setup and spam controls | Third-party data processor; pricing and privacy need owner approval |
| Cloudflare Workers | Strong custom option | More control over validation, routing and privacy | Requires technical maintenance and deployment setup |
| Netlify Forms | Only if hosting changes | Simple if hosted on Netlify | Current site appears GitHub Pages; not suitable without hosting change |
| WhatsApp Business API / WATI / Twilio | Later-stage lead ops | Better WhatsApp automation and templates | Cost, compliance and setup complexity |

Backend rules for any future implementation:

- Do not send buyer names, email addresses, phone numbers, BOQ details, drawings or message bodies to GA4.
- Add a thank-you page only after a real successful backend submit exists.
- Add file upload only after storage, retention, privacy and spam policy are approved.
- Add CAPTCHA or a spam-control method before public backend forms.
- Track conversion only after successful backend submit, with safe non-personal parameters.

## Public Page Change Decision

Public pages were not changed. The audit found no urgent public-page correction that outweighed the claim-safety risk of moving ahead without owner assets.

## Batch 12 Claim Safety Result

No new public claims were added. Future trust work must continue to avoid unsupported manufacturer, factory, stock, price, certification, client, project, rating, delivery, approved-vendor or fake review claims.
