# Quotation Page Premium Redesign Plan

Project: Rubinox Metal and Alloys  
Page: `/quotation.html`  
Deliverable type: planning only  
Implementation status: not implemented

## 1. Current Quotation Page Status

### Existing Page Structure

The current `quotation.html` page is a static HTML page with:

1. Standard head metadata, Open Graph tags and Twitter card tags.
2. Google Analytics and lead tracking helper script.
3. Header with desktop navigation, mobile navigation and WhatsApp Quote CTA.
4. Main content wrapper with breadcrumb text.
5. One H1: `Request a Fast Quotation`.
6. Introductory RFQ guidance paragraph.
7. Two-column grid:
   - `Send These Details` checklist.
   - `Quick Actions` card with WhatsApp, Email RFQ and Back to Home buttons.
8. Contact details nested inside the Quick Actions card.
9. Two-column grid:
   - `How We Review Your RFQ`.
   - `What Affects the Quoted Price?`.
10. `Materials You Can Enquire For` internal link section.
11. Two-column grid for product-form guidance:
   - Pipes, Tubes & Fittings.
   - Sheets, Plates & Bars.
12. `Delivery, Packing & Commercial Terms` section.
13. `Quotation FAQs` section with three visible Q&A items.
14. Footer with company name and About Us link.

### Existing SEO Metadata

Current title:

`Request a Metal Quotation | Rubinox Mumbai`

Current meta description:

`Request pricing for stainless steel, nickel alloys, duplex, titanium and other metals. Share grade, size, quantity and delivery location.`

Current canonical:

`https://rubinoxmetal.com/quotation.html`

Current social metadata:

- Open Graph title and description match the page title/description.
- Open Graph URL points to `https://rubinoxmetal.com/quotation.html`.
- Social preview image points to `/assets/rubinox-social-preview-2026.jpg`.
- Twitter card metadata is present.

SEO status:

- The URL is correct and should be preserved.
- The title is acceptable but could be stronger for RFQ intent.
- The meta description is short and useful, but can be improved to mention RFQ details, documentation and PAN India/export enquiry review without adding unsupported claims.
- Current page has clear quotation intent, but limited AEO/GEO answer-ready structure.

Recommended title only if improving during implementation:

`Request Metal Quotation | Industrial Metals RFQ | Rubinox`

Recommended meta description only if improving during implementation:

`Send an RFQ to Rubinox for stainless steel, nickel alloys, duplex, titanium and industrial metals. Share grade, form, size, quantity, standard, documentation and delivery details.`

### Existing H1

Current H1:

`Request a Fast Quotation`

Assessment:

- One H1 exists.
- It is concise and conversion-oriented.
- For premium redesign, consider `Request a Metal Quotation` or `Request an Industrial Metal Quotation` if the intent should be more specific.
- Keep one H1 only.

### Existing Schema

Current schema:

- `WebPage` schema for `/quotation.html`.
- `BreadcrumbList` schema for Home > Quotation.

Not currently present:

- `FAQPage` schema.
- No Product, Offer, Review or AggregateRating schema, which is correct for this page.

Schema recommendation:

- Preserve existing `WebPage` and `BreadcrumbList` schema.
- Add `FAQPage` schema only after a visible FAQ section is added or expanded.
- FAQPage schema must match the visible FAQ questions and answers exactly in meaning.

### Existing CTA / Form Structure

Current CTA structure:

- Header WhatsApp Quote button.
- Mobile menu WhatsApp Quote button.
- Main Quick Actions card with:
  - WhatsApp Quote.
  - Email RFQ.
  - Back to Home.
- Contact text includes phone, email and address.

Current form status:

- There is no embedded enquiry form.
- The page works as a guided CTA page rather than a form workflow.
- If a form is added later, it must be accessible, tested and connected to a reliable submission workflow before launch.

### Current Strengths

- Page already has a clear RFQ intent.
- One H1 is present.
- Canonical and social metadata are present.
- WebPage and BreadcrumbList schema are present.
- Key RFQ fields are already introduced: material, grade, product form, size, quantity, standard and delivery location.
- WhatsApp and email CTAs exist.
- Internal links to major material pages are present.
- The page does not claim Rubinox is a manufacturer.
- No actual pricing, stock quantity, certification or client claims are made.

### Current Weaknesses

- Visual design is simpler than the redesigned Homepage, About Us and Industries pages.
- It lacks a premium hero, trust strip, RFQ process flow and final CTA band.
- The page does not yet fully explain MTC, PMI, inspection, BOQ/MTO, PAN India or export enquiry workflows.
- The FAQ section is short and not structured as premium FAQ cards.
- There is no FAQPage schema, because current FAQs are limited and not yet in the preferred visual structure.
- Contact details are not elevated into clear contact method cards.
- The page has limited conversion hierarchy: all guidance is text-heavy and card density is low.
- Some visible text currently contains mojibake/encoding artifacts in breadcrumb/footer/contact separators; these should be cleaned during future implementation without changing meaning.

## 2. Redesign Objective

The redesigned quotation page should become the main RFQ conversion hub for Rubinox Metal and Alloys.

Primary objectives:

- Help buyers send complete, technically usable metal enquiries.
- Reduce back-and-forth by clearly listing required RFQ details.
- Position Rubinox as a Stockist | Supplier | Importer | Exporter | Project Supplier, not a manufacturer.
- Support purchase managers, EPC teams, fabricators, exporters, maintenance teams and project engineers.
- Preserve current SEO value while improving conversion, clarity and trust.
- Match the premium visual quality of the redesigned Homepage, About Us and Industries page.

How it should improve RFQ quality:

- Prompt buyers to provide material, grade, product form, size, standard, quantity and delivery location.
- Separate normal item enquiries from BOQ/MTO/project enquiries.
- Ask for documentation needs early: MTC, PMI, inspection and third-party inspection where applicable.
- Encourage drawings, item lists and project specifications when available.
- Make export enquiry requirements clearer: destination, packing, documentation and timeline.

How it should support procurement buyers:

- Give a fast checklist before contacting Rubinox.
- Explain what details affect quotation accuracy without publishing prices.
- Provide multiple contact paths: WhatsApp, email, phone and optional form.
- Link buyers to material pages so they can clarify grade/product context before sending RFQ.

## 3. Recommended Page Structure

### Section 1: Premium Hero

Purpose:

- Establish the page as the main RFQ hub.
- Present Rubinox as a professional procurement partner.
- Give immediate WhatsApp and Email RFQ CTAs.

Recommended content:

- H1: `Request an Industrial Metal Quotation`
- Subheading: Explain that buyers can share material, grade, product form, dimensions, quantity, standard, documentation requirement and delivery location for RFQ review.
- Trust chips:
  - Stockist
  - Supplier
  - Importer
  - Exporter
  - Project Supplier
- Primary CTA: WhatsApp Quote.
- Secondary CTA: Email RFQ.
- Tertiary CTA: View RFQ Checklist.

Design:

- Navy gradient background with subtle gold accent.
- White H1, muted silver supporting text and gold CTA.
- Same premium hero language as About Us and Industries.

### Section 2: RFQ Checklist

Purpose:

- Give buyers a scan-friendly checklist before they contact Rubinox.

Recommended cards:

- Material family.
- Grade / UNS / specification.
- Product form.
- Size / dimensions.
- Quantity.
- Standard.
- Finish / condition.
- Documentation and inspection.
- Delivery city or export destination.
- Timeline and project deadline.

Design:

- Premium grid of checklist cards with compact icons.
- Use gold-tinted icon boxes and Rubinox navy headings.

### Section 3: Material and Grade Guidance

Purpose:

- Help buyers understand what material details to include.

Include:

- Stainless steel: grade examples such as 304, 316, 316L, 310, 321, 347, 904L.
- Duplex and Super Duplex: 2205, 2507 and UNS references where applicable.
- Nickel alloys: Inconel, Monel, Hastelloy, Incoloy, Nickel 200/201.
- Titanium: Grade 1, Grade 2, Grade 5 and Grade 23.
- SMO 254 and Special Engineering Alloys.

Important wording:

- Use examples as enquiry guidance only.
- Do not imply universal availability or stock.
- Use phrases such as `share the required grade`, `where applicable`, and `based on buyer specification`.

### Section 4: Product Form Guidance

Purpose:

- Help buyers send correct dimensions by product type.

Recommended matrix:

| Product form | Details buyers should share |
| --- | --- |
| Pipes and tubes | OD/NB, wall thickness/schedule, length, seamless/welded preference, standard, quantity |
| Sheets and plates | Thickness, width, length, finish, tolerance, cutting requirement, quantity |
| Coils and strips | Thickness, width, coil weight, finish, edge condition, quantity |
| Bars and rods | Diameter, length, condition, tolerance, quantity |
| Flanges | Type, class, facing, standard, size, bore, quantity |
| Fittings | Type, schedule, end connection, standard, quantity |
| Fasteners | Size, thread, length, grade, standard, quantity |
| Fabricated/drawing items | Drawing, tolerance, material, finish, testing and quantity |

### Section 5: Documentation and Inspection Requirements

Purpose:

- Capture documentation needs before quotation.

Include:

- MTC requirements.
- PMI requirements.
- Dimensional inspection.
- Hydro test, ultrasonic testing, hardness, IGC or other tests where applicable.
- Third-party inspection coordination where applicable.
- Packing and marking requirements.

Guardrails:

- Do not claim certifications.
- Do not claim approval status.
- Do not guarantee documentation unless reviewed for the specific enquiry.
- Use `can be reviewed where applicable` and `should be specified at enquiry stage`.

### Section 6: BOQ / MTO Project Enquiry Support

Purpose:

- Improve conversion for EPC, infrastructure and project buyers.

Recommended content:

- Buyers can share BOQ, MTO, drawings, item lists and project specifications.
- Ask for item code, material, grade, dimensions, quantity, standard, inspection and delivery schedule.
- Mention that multi-line enquiries are reviewed based on clarity of technical and commercial details.

Do not claim:

- Project approval.
- Vendor approval.
- Mill authorization.
- Guaranteed project stock.

### Section 7: PAN India and Export Enquiry Support

Purpose:

- Make domestic and international enquiry requirements clear.

PAN India details to ask for:

- Delivery city and state.
- Site delivery or transporter pickup.
- Timeline.
- Packing and unloading limitations if relevant.

Export details to ask for:

- Destination country and port/city.
- Incoterm or delivery expectation if known.
- Packing, marking and documentation needs.
- Material specification and inspection requirements.

Use careful wording:

- `Rubinox can review PAN India and export enquiries where applicable.`

### Section 8: Contact Method Cards

Purpose:

- Make contact actions obvious and professional.

Cards:

- WhatsApp RFQ: fastest path for item lists/photos/drawings.
- Email RFQ: best for BOQ/MTO, drawings, standards and project specifications.
- Phone: useful for urgent clarification before sending documents.
- Visit / office details: address card for trust and location clarity.

Recommended CTA behavior:

- WhatsApp opens in new tab.
- Email opens `mailto:` with quotation subject.
- Phone uses `tel:+919363193755`.
- Keep analytics tracking where present.

### Section 9: FAQ Section

Purpose:

- Improve AEO/GEO coverage and buyer self-service.
- Make page eligible for FAQPage schema only when visible FAQs exist.

Design:

- 2-column FAQ card grid on desktop.
- 1-column stack on mobile.
- Rubinox navy FAQ headings with muted answer text.

### Section 10: Final CTA Band

Purpose:

- Close the page with strong conversion actions.

Recommended content:

- Heading: `Ready to Send Your Metal RFQ?`
- Supporting copy: Ask buyers to include material, grade, form, size, quantity, standard, documentation and delivery location.
- CTAs:
  - WhatsApp Quote.
  - Email RFQ.
  - Call Rubinox.

Design:

- Navy gradient band with gold border/accent.
- Same design language as About Us final CTA.

## 4. RFQ Form / Enquiry Flow Recommendation

Current page does not have a form. Two future paths are possible.

### Recommended Phase 1: Guided CTA Flow, No Form

This is the safest near-term approach.

Use structured content and CTAs to guide buyers to WhatsApp or email. This avoids form-delivery risk and preserves static-site simplicity.

Recommended visible flow:

1. Choose material family.
2. Share grade/specification.
3. Share product form.
4. Share size/dimensions.
5. Share quantity.
6. Share standard and finish/condition.
7. Mention MTC, PMI or inspection requirement.
8. Share delivery city/export destination and timeline.
9. Attach drawing, BOQ or MTO if applicable.
10. Send via WhatsApp or Email RFQ.

### Recommended Phase 2: Optional Static Enquiry Form

Only add a form if submission handling is confirmed.

Form fields:

- Full name.
- Company name.
- Phone / WhatsApp.
- Email.
- Material.
- Grade / specification.
- Product form.
- Size / dimensions.
- Quantity.
- Standard.
- Finish / condition.
- MTC / PMI / inspection requirement.
- Delivery city / export destination.
- Timeline.
- Drawing / BOQ / MTO note.
- Message.

Implementation requirement:

- The form must have proper labels, required-field handling, validation and a reliable submission destination.
- Do not add a fake form that does not submit.
- If a file upload is desired, confirm hosting/form backend support first.

## 5. Conversion Improvements

### WhatsApp CTA

Recommended placement:

- Header.
- Hero primary CTA.
- Quick contact card.
- Final CTA band.

Recommended CTA text:

- `WhatsApp RFQ`
- `Send Requirement on WhatsApp`
- `WhatsApp Quote`

Use the same Rubinox gold button style as the homepage.

### Email RFQ CTA

Recommended placement:

- Hero secondary CTA.
- Contact method card.
- Final CTA band.

Recommended subject:

`Quotation Request - Rubinox Metal and Alloys`

Optional prefilled body for future implementation:

- Material:
- Grade/specification:
- Product form:
- Size/dimensions:
- Quantity:
- Standard:
- Documentation/inspection:
- Delivery location:
- Timeline:

### Phone CTA

Recommended placement:

- Contact method card.
- Final CTA band as secondary action.

Use:

`tel:+919363193755`

### Form CTA If Added Later

Only if a real form exists:

- `Submit RFQ for Review`
- `Send Enquiry`

Do not use wording that implies instant pricing or guaranteed stock.

### Short Enquiry Guidance

Add a compact copy block near CTAs:

`For faster RFQ review, share material, grade, product form, size, quantity, standard, documentation need and delivery location.`

### Trust Notes

Trust notes should be factual and careful:

- Mumbai-based supplier.
- Stockist | Supplier | Importer | Exporter | Project Supplier.
- PAN India enquiry support.
- Export enquiry review where applicable.
- Documentation and inspection requirements reviewed where applicable.
- Bharat Metals heritage may be referenced only if aligned with approved About Us wording.

Avoid:

- Manufacturer claims.
- Certification claims.
- Client names.
- Vendor approval claims.
- Guaranteed stock or delivery promises.

## 6. GEO / AEO Recommendations

Add answer-ready sections written in concise Q&A or explainer format.

### What details are needed for a metal quotation?

Recommended answer direction:

Buyers should share material family, grade or specification, product form, size/dimensions, quantity, standard, finish/condition, documentation or inspection requirement, delivery location and timeline. Drawings, BOQ or MTO files help for project and custom enquiries.

### Can Rubinox quote for project BOQ/MTO?

Recommended answer direction:

Rubinox can review BOQ, MTO, drawings and multi-item project enquiries where the buyer shares item details, material grade, dimensions, standards, quantities, inspection scope and delivery schedule.

### Can Rubinox support PAN India enquiries?

Recommended answer direction:

Rubinox is based in Mumbai and can review PAN India enquiries for industrial buyers, project teams, fabricators and procurement departments. Buyers should mention delivery city, state, timeline and packing expectations.

### Can Rubinox support export enquiries?

Recommended answer direction:

Rubinox can review export enquiries where applicable. Buyers should share destination country, port/city, material specification, quantity, packing requirement, inspection scope and documentation expectations.

### Can buyers request MTC/PMI/inspection?

Recommended answer direction:

Buyers can mention MTC, PMI, third-party inspection, dimensional inspection or other testing requirements during RFQ. Documentation and inspection requirements should be reviewed at enquiry stage and aligned with material, form, specification and project needs.

## 7. FAQ Recommendations

Add 8 to 10 visible FAQ items. Recommended questions and answer direction:

1. What details should I send for a metal quotation?  
   Answer direction: material, grade, form, size, quantity, standard, documentation, delivery location and timeline.

2. Can I send a BOQ, MTO or drawing for quotation?  
   Answer direction: yes, buyers can share BOQ/MTO/drawings for review; include item details and inspection scope.

3. Which materials can I enquire for?  
   Answer direction: stainless steel, duplex, super duplex, nickel alloys, titanium, SMO 254, aluminium, copper, brass, carbon steel, mild steel, phosphor bronze and special engineering alloys.

4. What product forms can Rubinox review for quotation?  
   Answer direction: pipes, tubes, sheets, plates, coils, bars, rods, flanges, fittings, fasteners, angles, flats, circles, wire mesh and drawing-based items.

5. Can I request MTC, PMI or third-party inspection?  
   Answer direction: documentation and inspection requirements can be reviewed where applicable when specified during RFQ.

6. Can Rubinox support PAN India delivery enquiries?  
   Answer direction: Rubinox can review PAN India enquiries; buyers should share delivery city, state and timeline.

7. Can Rubinox review export enquiries?  
   Answer direction: export enquiries can be reviewed where applicable; share destination, packing, documentation and inspection requirements.

8. Can I send a photo or handwritten item list?  
   Answer direction: photos can help, but typed item lists, drawings and specifications reduce ambiguity.

9. Why does a quotation require grade, standard and dimensions?  
   Answer direction: these details affect material route, product form, tolerance, documentation and commercial review.

10. Does Rubinox manufacture metals?  
   Answer direction: no. Rubinox should be described as a Stockist | Supplier | Importer | Exporter | Project Supplier, not as a manufacturer.

## 8. FAQPage Schema Plan

Add FAQPage schema only after the visible FAQ section is implemented.

Rules:

- Schema questions must match visible FAQ questions.
- Schema answers must match visible answer meaning.
- Keep answers concise and factual.
- Do not add Product schema.
- Do not add Offer schema.
- Do not add Review schema.
- Do not add AggregateRating schema.
- Do not include prices, ratings, stock promises or certification claims.

Recommended schema placement:

- After the visible FAQ section or near the existing JSON-LD blocks in the head/body pattern used elsewhere in the site.
- Preserve existing WebPage and BreadcrumbList schema.

## 9. Internal Linking Plan

Preserve existing internal links and add a cleaner premium link structure.

Required links:

- Homepage: `/`
- About Us: `/about-us.html`
- Industries: `/industries.html`
- Stainless Steel: `/materials/stainless-steel.html`
- Nickel Alloys: `/materials/nickel-alloys.html`
- Duplex & Super Duplex: `/materials/duplex-super-duplex.html`
- Titanium: `/materials/titanium.html`
- SMO 254: `/materials/smo-254.html`
- Special Engineering Alloys: `/materials/other-metals.html`
- Contact anchor or footer: `/#contact`

Recommended placement:

- Hero breadcrumb links to Home and Quotation.
- Material guidance cards link to major material category pages.
- Product form guidance can link to stainless steel form pages where relevant.
- Contact method cards link to WhatsApp, email and phone.
- Footer/About links should remain consistent with current navigation.

## 10. Design Direction

The redesigned quotation page should match the premium style of Homepage, About Us and Industries.

Visual language:

- Navy: `#07101f`, `#102554`, `#132a63`.
- Gold: `#e2a02f`, `#f2bc55`, `#f6d58b`.
- Silver/light background: `#eef2f7`, `#f8fafc`, `#d8e0ec`.
- White cards with subtle borders and shadows.

Recommended design system:

- Premium hero with navy gradient and gold accents.
- Trust strip with five small cards: Stockist, Supplier, Importer, Exporter, Project Supplier.
- RFQ checklist cards with icon boxes.
- Matrix/table for product form guidance.
- Process timeline for RFQ review.
- Contact method cards.
- FAQ grid.
- Final CTA band.

Mobile direction:

- Mobile-first layout clarity.
- One-column card stack.
- Large tap targets for WhatsApp, Email and Phone.
- Avoid nested cards on mobile.
- Keep RFQ checklist scannable.
- Avoid clutter and long unbroken paragraphs.

## 11. Accessibility Notes

Implementation should preserve or improve accessibility.

Requirements:

- Keep one H1.
- Use semantic `<main>` instead of relying only on `role="main"` if updating structure.
- Use real `<nav>` elements where possible.
- Use clear button/link text such as `WhatsApp RFQ`, `Email RFQ`, `Call Rubinox`.
- Maintain skip link behavior.
- Use visible focus states for keyboard navigation.
- Ensure mobile tap targets are at least 44px high.
- Use sufficient contrast for navy, gold and muted text.
- If a form is added, every field must have a label.
- Form errors must be readable and connected to inputs.
- Do not rely on placeholder text as the only label.
- Tables should have clear headers and avoid horizontal overflow on mobile.

## 12. SEO Preservation

Preserve:

- URL: `/quotation.html`.
- Canonical: `https://rubinoxmetal.com/quotation.html`.
- One H1.
- Existing analytics tracking intent.
- Existing internal links where possible.
- Existing WebPage and BreadcrumbList schema.
- Social preview image unless a new approved image is available.

Possible SEO improvements:

- Improve title and meta description only if approved during implementation.
- Add richer RFQ, BOQ/MTO, documentation and export content for AEO/GEO coverage.
- Add visible FAQs and matching FAQPage schema.
- Add contextual links to major material category pages.

Avoid:

- Keyword stuffing.
- Manufacturer wording.
- Product/Offer schema.
- Pricing tables.
- Stock availability promises.
- Unsupported certification or approval claims.

## 13. Implementation Risks

### Form Functionality Risk

Adding a form without a working backend can create lost leads. If no form service is confirmed, keep the page as a guided WhatsApp/email RFQ flow.

### Schema Mismatch Risk

FAQPage schema must not be added before visible FAQs exist. Schema must match visible FAQ content.

### Overclaiming Risk

Avoid manufacturer claims, certification claims, approvals, client names, mill authorization and vendor approval language.

### Mobile Layout Risk

RFQ checklist cards, tables and contact cards can become cluttered on mobile. Use stacked layouts and avoid horizontal scrolling unless tables are intentionally wrapped in an overflow container.

### Navigation Consistency Risk

Quotation page navigation should remain aligned with Homepage, About Us, Industries and material pages. Keep About Us and WhatsApp Quote visible in both desktop and mobile navigation.

### CTA Tracking Risk

Existing analytics `trackLeadAndGo` behavior should be preserved when CTAs are reorganized.

### Encoding Cleanup Risk

Current page includes visible mojibake characters in some separators. These should be corrected carefully during implementation without changing business meaning or metadata unintentionally.

## 14. QA Commands After Future Implementation

Run these from:

`C:\Users\Dell\OneDrive\Documents\rubinox-website-live`

Recommended commands:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:schema
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run test:navigation
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:accessibility
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:html
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:crawl
```

Manual QA checklist:

- Confirm one H1.
- Confirm canonical remains `/quotation.html`.
- Confirm WebPage and BreadcrumbList schema remain valid.
- Confirm FAQPage schema exists only if visible FAQs exist.
- Confirm WhatsApp, email and phone CTAs work.
- Confirm no pricing, stock promises, manufacturer claims or unsupported certification claims were added.
- Confirm mobile layout is readable and CTAs are easy to tap.
- Confirm navigation matches the latest site-wide pattern.

## Recommended Implementation Priority

High ROI:

- Premium hero with WhatsApp and Email RFQ CTAs.
- RFQ checklist cards.
- Contact method cards.
- Documentation and inspection requirements section.
- FAQ section plus matching FAQPage schema.
- Final CTA band.

Medium ROI:

- Product form guidance matrix.
- BOQ/MTO project enquiry support section.
- PAN India and export enquiry support section.
- Material and grade guidance cards with internal links.

Nice to Have:

- Optional real enquiry form if backend/submission handling is confirmed.
- Email prefill body template.
- Downloadable RFQ checklist, only if the file and maintenance workflow are approved.