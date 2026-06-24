# Homepage Phase 3 Review Report

Project: Rubinox Metal and Alloys  
Repository: `tarrunmjain/rubinox-website`  
Working folder: `C:\Users\Dell\OneDrive\Documents\rubinox-website-live`  
Reviewed file: `index.html`

## 1. Review Summary

Homepage Premium Redesign Phase 3 has been implemented in `index.html` only. The update adds stronger RFQ conversion content, documentation trust signals, PAN India and export enquiry positioning, homepage GEO/AEO FAQ content, FAQPage schema and a final CTA band.

The homepage now passes the local homepage-specific QA checks that were improved during implementation:
- Homepage schema is valid.
- Homepage navigation verification passes.
- Homepage accessibility scan reports 0 violations.
- Homepage HTML validation reports `index.html: valid`.

No commit or push has been made.

## 2. Section Order in `index.html`

Current homepage section order:

1. Header and navigation
2. Market Watch strip
3. Hero section
4. SEO/internal keyword link paragraph
5. Materials We Supply
6. Why Choose Rubinox Metal & Alloys?
7. Simple RFQ Flow for Industrial Metal Enquiries
8. PAN India Supply and Export Enquiry Support
9. Product Forms Available
10. Industries We Serve
11. Quality, Documentation and Standards Support
12. Leading Stainless Steel & Alloy Supplier in India
13. Metal Supply FAQs for Buyers
14. Send Your Metal Requirement to Rubinox final CTA band
15. Contact
16. Footer

Phase 3 additions are placed logically after the trust/material overview and before the final contact area.

## 3. SEO Preservation

Preserved homepage SEO elements:
- Existing `<title>` preserved: `Stainless Steel Supplier in Mumbai, India | Rubinox`
- Existing meta description preserved.
- Existing canonical URL preserved: `https://rubinoxmetal.com/`
- Existing Open Graph tags preserved.
- Existing Twitter Card tags preserved.
- Existing Google Analytics / gtag tracking preserved.
- Existing primary H1 preserved.
- Homepage still has exactly one H1.
- Existing internal links and navigation destinations were preserved.

SEO-friendly additions:
- RFQ flow content now includes buyer fields such as material, grade, product form, dimensions, quantity, standards, MTC, PMI, inspection and delivery/export destination.
- PAN India/export section adds natural regional coverage language without creating city landing pages.
- FAQ content supports AI-search, featured-snippet and buyer-question discovery.

## 4. Schema Confirmation

Existing schema preserved:
- `Organization` / `LocalBusiness`
- `WebSite`
- `WebPage`

New schema added:
- `FAQPage` schema with `@id`: `https://rubinoxmetal.com/#homepage-faq`

FAQ schema confirmation:
- Visible FAQ section exists before FAQPage schema usage.
- FAQPage schema contains 8 questions.
- Schema questions match the visible homepage FAQ questions.
- No Product, Offer, AggregateRating or Review schema was added.

Latest schema QA:
- Command: `pnpm run qa:schema`
- Result: 75 HTML pages scanned, 157 JSON-LD blocks found, 0 invalid JSON-LD blocks.

## 5. CTA Links Confirmed

Primary Phase 3 CTA links:

RFQ Flow section:
- Open Quotation Page: `/quotation.html`
- WhatsApp Quote: `https://wa.me/919363193755`
- Email RFQ: `mailto:tarun@rubinoxmetal.com?subject=Quotation%20Request%20-%20Rubinox`
- Contact Details: `#contact`

Final CTA band:
- WhatsApp Quote: `https://wa.me/919363193755`
- Email RFQ: `mailto:tarun@rubinoxmetal.com?subject=Quotation%20Request%20-%20Rubinox`
- Request Quotation: `/quotation.html`

Existing CTA/link destinations preserved:
- Header WhatsApp link
- Header quotation link
- Header contact anchor
- Contact WhatsApp link
- Contact email link
- Contact quotation page link
- Phone links

## 6. Business Rule Review

Compliant wording confirmed:
- Rubinox is described as a stockist, supplier, importer, exporter and project supplier.
- The FAQ explicitly states Rubinox should not be described as a manufacturer.
- Documentation language uses buyer-safe wording such as `where applicable`, `as per requirement`, `subject to applicable material route`, and `reviewed based on requirement`.
- No pricing claims were added.
- No unsupported ready-stock promise was added.
- No same-day dispatch or guaranteed availability claim was added.
- No ISO, approved vendor, mill authorization, client-name or manufacturer-level certification claim was added.

Additional safe cleanup completed:
- Removed old speed/pricing style wording from the homepage.
- Replaced `fastest quotation` helper text with `clear quotation review`.
- Changed older `Fast Quotation` label to `RFQ Support`.

## 7. Accessibility and HTML Review

Accessibility improvements:
- Homepage Google Maps iframe now has a descriptive title.
- Header navigation wrappers were converted to native `<nav>` elements.
- Mobile menu button has an explicit `type="button"`.
- Homepage Axe result is now 0 violations.

Latest accessibility QA:
- Command: `pnpm run qa:accessibility`
- Result: `/` reports 0 accessibility violations.
- Site total: 4 remaining violations on other pages, not the homepage.

Latest HTML QA:
- Command: `pnpm run qa:html`
- Result: `index.html: valid`.
- Other pages still have pre-existing HTML validation errors outside the Phase 3 scope.

## 8. Mobile Risks

Current responsive safeguards:
- Phase 3 grids collapse to one column under the existing `max-width:900px` breakpoint.
- Final CTA buttons become full-width on mobile.
- RFQ, documentation, geography and FAQ cards use flexible grids and wrapping tags.
- No remote images or new libraries were added.

Potential mobile review points before commit:
- Check the RFQ tag row wrapping on narrow mobile widths because it contains many short buyer fields.
- Check the final CTA band button stacking and padding on 360px to 430px widths.
- Check that long FAQ questions remain readable without crowding.
- Check the city/region tag cloud for comfortable vertical spacing.

No obvious mobile-breaking markup was found in the static review.

## 9. QA Commands and Results

Required QA run after implementation:

1. `pnpm run qa:schema`
   - Passed.
   - 75 pages scanned.
   - 157 JSON-LD blocks found.
   - 0 invalid JSON-LD blocks.

2. `pnpm run test:navigation`
   - Passed.
   - Navigation verification passed.

3. `pnpm run qa:accessibility`
   - Completed.
   - Homepage `/`: 0 accessibility violations.
   - Remaining site total: 4 violations on other pages.

Recommended QA run:

4. `pnpm run qa:html`
   - Completed.
   - `index.html: valid`.
   - Other pages still have existing validation errors outside this task.

## 10. Files Changed

Changed website file:
- `index.html`

Existing untracked file unrelated to Phase 3:
- `RUBINOX_MASTER_PROJECT_STATUS.md`

Report file created by this review:
- `HOMEPAGE_PHASE3_REVIEW_REPORT.md`

Generated QA folders were removed after validation so they are not left for commit.

## 11. Commit Readiness

Commit readiness status: ready, with one staging note.

Recommended commit scope:
- Stage `index.html`.
- Stage `HOMEPAGE_PHASE3_REVIEW_REPORT.md` if the review report should be kept in the repo.
- Do not accidentally stage unrelated files unless intended.

Current caution:
- `RUBINOX_MASTER_PROJECT_STATUS.md` is untracked from a prior task. Decide whether to include it in the same commit, commit it separately, or leave it untracked.

Suggested commit message:
- `Implement homepage Phase 3 conversion sections`

Recommended pre-commit command:
- `git status --short`

Recommended staging command if committing only this Phase 3 implementation and report:
- `git add index.html HOMEPAGE_PHASE3_REVIEW_REPORT.md`