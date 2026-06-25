# Contact Page Premium Redesign Plan

Project: Rubinox Metal and Alloys  
Working folder: `C:\Users\Dell\OneDrive\Documents\rubinox-website-live`  
Planning status: ready for approval before implementation

## 1. Current Contact Page Audit

### Current page status

- No standalone `contact.html` currently exists in the root HTML pages.
- The current contact destination is the homepage section `/#contact`.
- Core navigation currently links to `/#contact` from homepage, About Us, Industries, Quotation and material pages.
- The homepage contact section includes office address, Google Map iframe, phone, email, Google Maps link, Instagram/Facebook links, WhatsApp Quote and Quotation Page buttons.
- About Us has a compact contact card with phone, email and address.
- Quotation has a contact-method card grid for WhatsApp, email, phone and office details.

### Current strengths

- Contact details are present and consistent with project documentation:
  - Phone: `+91 9363193755`
  - Email: `tarun@rubinoxmetal.com`
  - Address: A-206, 2nd floor, C.S. No. 2251 to 2255, Krishvi Escape, Sitaram Poddar Marg, near Vinay Hotel, Kalbadevi, Mumbai - 400002, Maharashtra, India
- Homepage already includes a map iframe and direct action buttons.
- Quotation page already has strong procurement-oriented RFQ guidance that can inform the future contact page.
- Existing site schema already includes Organization/LocalBusiness contact details on the homepage.

### Current weaknesses

- No dedicated `/contact.html` URL for SEO, AI search, paid traffic, directory traffic or direct buyer sharing.
- Contact content is buried near the bottom of the homepage rather than presented as a premium support centre.
- Current contact block uses inline styles and lacks the reusable premium hero/card language used on Homepage, About Us, Industries and Quotation.
- Contact methods are not visually separated into clear buyer choices.
- No visible FAQ section dedicated to contact, RFQ support, documentation, PAN India or export enquiry handling.
- No ContactPage-specific schema plan yet.
- Current homepage contact/footer area contains visible encoding artifacts in the address punctuation, checkmark text, bullet separators and copyright line; these should be corrected during future implementation.

### Missing conversion opportunities

- No above-the-fold WhatsApp, phone and email contact method cards on a standalone page.
- No procurement support checklist near contact CTAs.
- No QR/review prompt strategy.
- No directory links for Google Business Profile, IndiaMART, TradeIndia, ExportersIndia, Justdial and LinkedIn.
- No buyer-focused routing such as "urgent quote", "project BOQ/MTO", "documentation query" or "export enquiry".

### Missing trust elements

- PAN India support is mentioned but not visually positioned as a trust signal.
- Export support is mentioned but needs clearer expectations and documentation scope.
- Bharat Metals heritage is not referenced on contact page content.
- No "documentation reviewed where applicable" section for MTC, PMI, third-party inspection and packing/marking requirements.
- No office/support centre framing.

### Missing SEO/AEO opportunities

- No dedicated contact URL, title, meta description, canonical or ContactPage schema.
- No FAQPage schema tied to visible contact FAQs.
- No answer-ready sections for:
  - How to contact Rubinox Metal and Alloys?
  - What details should buyers send for RFQ?
  - Can Rubinox support PAN India enquiries?
  - Can Rubinox support export enquiries?
  - Can buyers request MTC, PMI or inspection?

## 2. Design Goal

Transform the contact experience into a premium Procurement & Customer Support Centre.

The page should feel like:

- A Fortune 500 industrial company contact page.
- A procurement support desk for purchase teams and EPC buyers.
- An RFQ assistance centre for material, grade and documentation review.
- A technical support entry point for specifications, standards, BOQ/MTO and export enquiry preparation.

The page must keep Rubinox positioned as a Stockist | Supplier | Importer | Exporter | Project Supplier. Do not call Rubinox a manufacturer.

## 3. Hero Design

Use the standardized boxed navy hero component used across About Us, Industries and Quotation.

Recommended URL: `/contact.html`

Hero content:

- Breadcrumb: `Home > Contact`
- Eyebrow: `Procurement Support Centre`
- H1: `Contact Rubinox Metal and Alloys`
- Subheading: `Connect with Rubinox for metal RFQs, grade/specification review, documentation requirements, PAN India enquiries and export enquiry support.`
- Trust chips:
  - Stockist | Supplier | Importer | Exporter
  - PAN India Enquiries
  - Export Enquiry Support
  - MTC / PMI / Inspection Review
  - BOQ / MTO Project RFQs

Hero CTA buttons:

- Primary: `WhatsApp RFQ` -> `https://wa.me/919363193755`
- Secondary: `Email RFQ` -> `mailto:tarun@rubinoxmetal.com?subject=Quotation%20Request%20-%20Rubinox`
- Tertiary optional: `Request Quotation` -> `/quotation.html`

Design notes:

- Navy gradient hero with gold accent, rounded corners and consistent hero spacing.
- H1 in white, subheading in light muted text, trust chips in rectangular style.
- Keep one H1 only.

## 4. Contact Method Cards

Create a premium four-card section immediately below the hero.

### Call card

- Icon: phone handset, navy stroke inside gold-tinted square.
- Title: `Call Rubinox`
- Description: `Call for urgent enquiry coordination or to clarify grade, form, size and delivery details before sending documents.`
- Action button: `Call +91 9363193755` -> `tel:+919363193755`

### Email card

- Icon: mail/envelope.
- Title: `Email RFQ`
- Description: `Best for BOQ, MTO, drawings, specifications, multiple line items and documentation requirements.`
- Action button: `Email RFQ` -> `mailto:tarun@rubinoxmetal.com?subject=Quotation%20Request%20-%20Rubinox`

### WhatsApp card

- Icon: message circle/chat.
- Title: `WhatsApp Requirement`
- Description: `Useful for quick item lists, photos, grade checks and short RFQs.`
- Action button: `Send on WhatsApp` -> `https://wa.me/919363193755`

### Office address card

- Icon: map pin/building.
- Title: `Mumbai Office`
- Description: `A-206, 2nd floor, C.S. No. 2251 to 2255, Krishvi Escape, Sitaram Poddar Marg, Kalbadevi, Mumbai - 400002.`
- Action button: `Open Google Maps` -> current Google Maps search link.

Layout:

- Desktop: 4-card grid.
- Tablet: 2 columns.
- Mobile: single column with full-width buttons.

## 5. Office Information Section

Create a two-column section:

- Left: office details and service scope.
- Right: Google Map embed.

Include:

- Full address.
- Google Map iframe with accessible title.
- External link: `Open Location in Google Maps`.
- Office hours: `Monday to Saturday, business hours. Confirm availability before visiting.`
- Service area: Mumbai-based support for PAN India and export enquiries.
- PAN India support: quote review for industrial buyers, fabricators, EPC teams and project procurement.
- Export support: export enquiries reviewed based on destination, grade, quantity, packing and documentation expectations.

Important:

- Do not claim guaranteed delivery, stock availability or fixed response times.
- Do not invent branch offices.

## 6. Procurement Support Section

Section heading: `What to Send for Faster RFQ Review`

Explain that complete RFQ details help the Rubinox team review the requirement more accurately.

Recommended checklist:

- Material family.
- Grade / specification / UNS / ASTM / EN / IS reference.
- Product form.
- Size and dimensions.
- Quantity.
- Delivery location or export destination.
- Required standard.
- Finish / condition.
- MTC requirement.
- PMI requirement.
- Inspection or third-party inspection requirement.
- Drawing, BOQ or MTO where applicable.

Design:

- Premium checklist cards or two-column specification table.
- Gold check icons or small navy/gold bullet markers.
- Link to `/quotation.html` for full RFQ form.

## 7. PAN India & Export Support

Create a trust-building support section with two or three cards.

Cards:

- `PAN India Enquiries`: Mumbai-based support for buyers across India.
- `Export Enquiries`: Review destination, port, packing, standards and documentation expectations.
- `Project Supply Coordination`: BOQ/MTO, multi-line schedules and documentation requirements reviewed where applicable.

Use conservative wording:

- `can review`
- `where applicable`
- `as per buyer requirement`
- `based on material, grade, quantity and documentation scope`

Avoid:

- Stock promises.
- Delivery guarantees.
- Export capability guarantees.
- Certifications or vendor approvals.

## 8. Google Reviews Section

Purpose: build trust without inventing ratings or review counts.

Recommended placement:

- After Office Information and before Business Directory.
- Small trust card or CTA strip titled `Customer Feedback and Business Listing`.

Buttons:

- `View Google Reviews`
- `Write a Google Review`

Implementation note:

- Use only verified Google Business Profile review links.
- Do not show star ratings, review count or review quotes unless verified from the live Google Business Profile and approved.
- Add a QR code only if the final review URL is verified.

## 9. Business Directory Section

Section heading: `Find Rubinox on Business Platforms`

Recommended icon style:

- Monoline navy icons inside gold-tinted square or silver-bordered card.
- Use external-link icon on outbound links.

Recommended cards:

- Google Business Profile: map pin / business icon.
- IndiaMART: storefront / marketplace icon.
- TradeIndia: directory / network icon.
- ExportersIndia: globe / export icon.
- Justdial: search / directory icon.
- LinkedIn: professional network icon.

Known existing links:

- IndiaMART: `https://www.indiamart.com/rubinox-metal-and-alloys`
- LinkedIn: `https://www.linkedin.com/company/rubinox-metal-and-alloys`

Links to verify before implementation:

- Google Business Profile direct listing URL.
- TradeIndia profile URL.
- ExportersIndia profile URL.
- Justdial profile URL.

Outbound link strategy:

- Open in new tab with `target="_blank"` and `rel="noopener"`.
- Track outbound clicks with existing lead/social tracking pattern if appropriate.
- Use descriptive labels, not raw URLs.
- Avoid linking to unverified or incomplete profiles.

## 10. FAQ Section

Add visible FAQ before FAQPage schema.

Recommended FAQs:

1. `How can I contact Rubinox Metal and Alloys?`
   - Answer direction: phone, WhatsApp, email and office location.
2. `What details should I send for a metal quotation?`
   - Material, grade, product form, size, quantity, documentation and location.
3. `Can I send a BOQ, MTO or drawing?`
   - Yes, Rubinox can review clear project schedules and drawings.
4. `Can Rubinox support PAN India enquiries?`
   - Yes, enquiries from buyers across India can be reviewed.
5. `Can Rubinox support export enquiries?`
   - Export enquiries can be reviewed where applicable with destination and documentation details.
6. `Can buyers request MTC, PMI or third-party inspection?`
   - Buyers can mention requirements; support reviewed where applicable.
7. `Which materials can I enquire for?`
   - Stainless steel, duplex, nickel alloys, titanium, SMO 254, aluminium, copper, brass, carbon steel, mild steel, phosphor bronze and special engineering alloys.
8. `Which product forms can buyers enquire for?`
   - Pipes, tubes, sheets, plates, coils, bars, rods, flanges, fittings, fasteners, angles, flats, circles and wire mesh.
9. `Is Rubinox a manufacturer?`
   - No. Rubinox is a stockist, supplier, importer, exporter and project supplier.
10. `Can I visit the Rubinox office?`
    - Buyers may use the Mumbai office address; recommend confirming availability before visiting.

FAQPage schema plan:

- Add only after the visible FAQ section exists.
- Schema questions and answers must exactly match visible content.
- Do not add Product, Offer, Review or AggregateRating schema.
- Consider `ContactPage`, `BreadcrumbList` and `FAQPage` JSON-LD.

## 11. Final CTA Band

Section heading: `Ready to Contact Rubinox for Your Metal Requirement?`

Supporting text:

`Share material, grade, form, dimensions, quantity, standard, documentation requirement and delivery location for RFQ review.`

CTA buttons:

- `WhatsApp RFQ` -> `https://wa.me/919363193755`
- `Email RFQ` -> mailto RFQ link.
- `Request Quotation` -> `/quotation.html`
- Optional: `Call Rubinox` -> `tel:+919363193755`

Design:

- Navy CTA band with gold primary button and white/outline secondary buttons.
- Match Quotation and About final CTA style.

## 12. Internal Linking Plan

Primary internal links:

- Homepage: `/`
- About Us: `/about-us.html`
- Industries: `/industries.html`
- Quotation: `/quotation.html`
- Contact: `/contact.html` once created

Major material pages:

- `/materials/stainless-steel.html`
- `/materials/duplex-super-duplex.html`
- `/materials/nickel-alloys.html`
- `/materials/titanium.html`
- `/materials/smo-254.html`
- `/materials/aluminium.html`
- `/materials/copper.html`
- `/materials/brass.html`
- `/materials/carbon-steel.html`
- `/materials/mild-steel.html`
- `/materials/phosphor-bronze.html`
- `/materials/other-metals.html`

Migration note:

- During implementation, update core navigation from `/#contact` to `/contact.html`.
- Keep a compact `#contact` section or anchor on the homepage for backward compatibility unless a broader navigation migration is approved.
- Update footer links where the existing pattern uses contact links.

## 13. SEO

Recommended title:

`Contact Rubinox Metal and Alloys | Metal Supplier in Mumbai, India`

Recommended meta description:

`Contact Rubinox Metal and Alloys in Mumbai for stainless steel, nickel alloys, duplex, titanium, SMO 254 and industrial metal RFQs with PAN India and export enquiry support.`

Recommended canonical:

`https://rubinoxmetal.com/contact.html`

Open Graph:

- `og:type`: website
- `og:title`: same as page title.
- `og:description`: same or slightly shortened meta description.
- `og:url`: `https://rubinoxmetal.com/contact.html`
- `og:image`: existing social preview image unless a contact-specific image is created.

Twitter Card:

- `summary_large_image`
- Title and description aligned with OG.
- Image alt: `Contact Rubinox Metal and Alloys in Mumbai`

Schema:

- `ContactPage` / `WebPage`
- `BreadcrumbList`
- `FAQPage`
- Reference existing Organization/LocalBusiness `@id`: `https://rubinoxmetal.com/#organization`

## 14. Accessibility

Contrast:

- Use white text on navy hero.
- Navy headings on light cards.
- Muted body text must meet contrast on white/silver background.
- Gold buttons should use navy text if contrast is stronger than white.

Keyboard navigation:

- All contact buttons and directory links must be keyboard reachable.
- Mobile menu behavior must remain unchanged.
- Do not trap focus in map iframe.

Link labels:

- Use descriptive labels such as `Call +91 9363193755`, `Email RFQ to Rubinox`, `Open Rubinox location in Google Maps`.
- Avoid vague labels like `Click here`.

Map accessibility:

- Keep a meaningful iframe `title`.
- Provide a text address immediately near the map.
- Provide an external Google Maps link.

Forms:

- If a form is later added, keep it static/mailto only unless a backend is explicitly approved.
- Every field needs visible label, correct input type and required-state indication.

## 15. Mobile Design

Mobile layout recommendations:

- Hero content stacks cleanly with CTAs full width or two clear rows.
- Contact method cards stack one per row.
- Phone, WhatsApp and email buttons should be large tap targets.
- Map should appear after the office text or inside a responsive card with fixed height around 260-320px.
- Business directory cards should be a 1-column mobile list, not tiny icons only.
- Sticky WhatsApp CTA may be considered later, but avoid adding if it conflicts with existing global CTAs.

Mobile risk notes:

- Long address text must wrap cleanly.
- Directory names should not overflow cards.
- Map embed should not create horizontal scroll.

## 16. Google Reviews Integration Strategy

Recommended placements:

- Small trust/review strip below Office Information.
- Secondary review CTA near final CTA band.
- Optional QR code in office/contact card area for desktop visitors.

Review button:

- `View Google Reviews` should link to verified Google Business Profile listing/review page.
- `Write a Google Review` should link only to a verified write-review URL.

QR code:

- Generate only after review URL is confirmed.
- Place in a small card titled `Scan to Review Rubinox`.
- Add text fallback link below the QR code.

Trust badges:

- Use neutral badges such as `Google Business Profile` or `Business Listing`.
- Do not show ratings, review counts or review quotes unless verified and approved.

## 17. Implementation Order

1. Confirm whether the approved URL is `/contact.html`.
2. Verify Google Business Profile, review URL, TradeIndia, ExportersIndia and Justdial URLs.
3. Create `contact.html` using the standardized header/topbar/nav pattern.
4. Add page-specific SEO tags, canonical, OG/Twitter tags and JSON-LD placeholders.
5. Build standardized boxed hero with breadcrumb, H1, subheading, trust chips and CTA buttons.
6. Add contact method card grid.
7. Add office information/map section.
8. Add procurement support checklist section.
9. Add PAN India and export support section.
10. Add Google Reviews section using only verified URLs.
11. Add business directory section using verified outbound links.
12. Add visible FAQ section.
13. Add ContactPage/WebPage, BreadcrumbList and FAQPage schema.
14. Add final CTA band.
15. Update navigation/footer links from `/#contact` to `/contact.html` only in approved scope.
16. Add `contact.html` to `sitemap.xml`.
17. Preserve or keep a homepage contact anchor for legacy `/#contact` links if navigation migration is not site-wide yet.
18. QA:
    - `pnpm run qa:html`
    - `pnpm run qa:schema`
    - `pnpm run qa:accessibility`
    - `pnpm run test:navigation`
    - `pnpm run qa:crawl`
    - `pnpm run qa:sitemap`

## Implementation Risks

- Navigation consistency risk if `/#contact` is changed on only some pages.
- Sitemap risk if `contact.html` is created but not added to `sitemap.xml`.
- Schema mismatch risk if FAQPage schema does not match visible FAQ text.
- Overclaiming risk around export support, documentation support, reviews and business directory presence.
- Accessibility risk from embedded map and external-directory icons if labels are weak.
- Layout risk from long office address on mobile.
- Existing homepage contact/footer mojibake should be corrected only during approved implementation scope.
