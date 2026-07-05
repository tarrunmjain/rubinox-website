# RUBINOX FOOTER LOCK V1

## Approval Status

Status: approved and final.

Owner approval:

- "D8A-R3 footer approved for design lock."

Source prototypes:

- D8A - Homepage Footer Prototype.
- D8A-R2 - Homepage Footer Horizontal Link-Row Correction.
- D8A-R3 - Homepage Footer Unified Quick Links Correction.

Final approved version:

- D8A-R3 unified Quick Links footer.

Approved source commits:

- D8A: `117aabdc68de9f14b811041aff740c2c434a7bc5`
- D8A-R2: `5cb5fccbe8b05e2d523de89e0115e5a5f125e228`
- D8A-R3: `4c5d9efb2d205b2f9c53bacfd629d645462ac278`

Pages run that made D8A-R3 live:

- `28743433455`

## Purpose

This document is the final footer design print for Rubinox Metal and Alloys.

Future footer work must use this lock as the source of truth. Codex must not invent another footer style, add unapproved footer groups, create SEO link dumps, or change footer content without a separately approved design batch.

## Scope

This lock defines the approved footer design for future sitewide use.

Current implementation state:

- The homepage contains the approved D8A-R3 footer prototype.
- Sitewide footer replication was not performed in D8B.
- D8C must handle sitewide footer replication after this lock.

Protected systems:

- Top Bar Lock V1.
- Header Lock V1.
- Homepage Market Ticker Lock V1.
- Home Hero Lock V1.
- Homepage RFQ Path Lock V1.
- Card Accent Lock V1.
- Homepage Section Intro Width Lock V1.
- Remaining Homepage Sections Polish Lock V1.

## Desktop Design Specification

Approved desktop macro layout:

1. Brand block on the left.
2. Unified Quick Links block in the middle.
3. Contact Details block on the right.

Approved desktop behavior:

- Footer background is white with a restrained top border.
- The layout is compact and premium.
- The middle link area must not look like an SEO link dump.
- The footer uses the existing site rail/wrap behavior.
- The homepage prototype uses a three-column grid:
  - brand: `minmax(230px,.95fr)`
  - unified links: `minmax(0,2.2fr)`
  - contact: `minmax(230px,.95fr)`
- Main footer gap is about `24px`.
- Brand logo max width is about `210px` in the homepage prototype.
- Link typography is compact, bold, and readable.
- Link color is Rubinox navy.
- Hover/focus uses restrained Rubinox gold emphasis.
- Hover/focus must not create heavy boxes or layout shift.
- The copyright bar stays below the main footer rail.

## Mobile Design Specification

Approved mobile behavior:

- Footer stacks cleanly in one column.
- Unified Quick Links bank wraps naturally.
- Links remain readable and aligned from the same left edge.
- Brand icons remain in one row where possible.
- Contact details wrap safely.
- Copyright text wraps safely.
- No footer horizontal scroll is allowed.
- Mobile behavior was checked at `390px` and `360px`.

## Brand Block Rules

Approved brand block includes:

- Rubinox logo linked to `/`.
- Short company intro text.
- Six contact/social icons in one row:
  - Call.
  - Email.
  - WhatsApp.
  - Facebook.
  - Instagram.
  - LinkedIn.

Brand icon rules:

- Do not change the icon set.
- Do not change icon URLs.
- Do not allow five icons on one row and one icon below in approved desktop/mobile layouts where the D8A-R3 pattern can keep them together.
- Icons may use compact spacing on mobile to preserve the one-row behavior.
- Icon hover may lift subtly and use restrained border/shadow emphasis.

Approved brand icon links:

| Label | href |
| --- | --- |
| Call Rubinox | `tel:+919363193755` |
| Email Rubinox | `mailto:tarun@rubinoxmetal.com` |
| WhatsApp | `https://wa.me/919363193755` |
| Facebook | `https://www.facebook.com/people/Rubinox-Metal-And-Alloys/61590518053054/` |
| Instagram | `https://www.instagram.com/rubinox_metal/` |
| LinkedIn | `https://www.linkedin.com/company/rubinox-metal-and-alloys` |

## Unified Quick Links Rules

Approved middle footer block:

- One non-clickable heading only: `Quick Links:`
- The heading has a subtle premium gold underline/accent.
- Links start below the heading.
- Links do not continue on the same line after the heading.
- Wrapped rows align from the same left edge.
- The link bank wraps naturally.
- Link text remains readable.
- Separate `Main Materials` and `Forms & RFQ` headings are removed from the final footer design.
- Material, form, and RFQ links remain under the unified Quick Links bank.
- Do not add every city, grade, specification, blog, or location page to this footer.
- Use the main useful links only.

## Final Link Bank Content

The rendered footer has one unified link bank. The table below groups links only for documentation clarity.

| Group | Label | href |
| --- | --- | --- |
| Core | Home | `/` |
| Core | About Us | `/about-us.html` |
| Core | Industries | `/industries.html` |
| Core | Product Portfolio | `/product-portfolio.html` |
| Core | Locations | `/locations.html` |
| Core | Export | `/export.html` |
| Core | Blog | `/blog.html` |
| Core | Technical Resources | `/technical-resources.html` |
| Core | Quality Documentation | `/quality-documentation-support.html` |
| Core | Company Profile | `/company-profile.html` |
| Core | Quotation | `/quotation.html` |
| Core | Contact | `/contact.html` |
| Legal | Privacy Policy | `/privacy-policy.html` |
| Legal | Terms & Conditions | `/terms-and-conditions.html` |
| Materials | Stainless Steel | `/materials/stainless-steel.html` |
| Materials | Duplex & Super Duplex | `/materials/duplex-super-duplex.html` |
| Materials | Nickel Alloys | `/materials/nickel-alloys.html` |
| Materials | Titanium | `/materials/titanium.html` |
| Materials | SMO 254 | `/materials/smo-254.html` |
| Materials | Special Engineering Alloys | `/materials/other-metals.html` |
| Forms / RFQ | Pipes | `/materials/stainless-steel-pipes-supplier-india.html` |
| Forms / RFQ | Tubes | `/materials/stainless-steel-tubes-supplier-india.html` |
| Forms / RFQ | Sheets | `/materials/stainless-steel-sheets-supplier-india.html` |
| Forms / RFQ | Plates | `/materials/stainless-steel-plates-supplier-india.html` |
| Forms / RFQ | Flanges | `/materials/stainless-steel-flanges-supplier-india.html` |
| Forms / RFQ | Request Quotation | `/quotation.html` |

## Contact Details Rules

Approved contact block preserves:

- Phone: `+91 9363193755`
- Email: `tarun@rubinoxmetal.com`
- Address: `A-206, 2nd floor, C.S. No. 2251 to 2255, Krishvi Escape, Sitaram Poddar Marg, Kalbadevi, Mumbai - 400002, Maharashtra, India`
- Platform/directory icons.

Do not change:

- Phone number.
- Email.
- Address.
- Platform/directory icon URLs.
- Schema/contact metadata.
- Footer contact labels.

Approved platform/directory links:

| Label | href |
| --- | --- |
| Google Business Profile | `https://share.google/r7Mz2LfkMJdfYQl76` |
| IndiaMART | `https://www.indiamart.com/rubinox-metal-and-alloys/` |
| TradeIndia | `https://www.tradeindia.com/rubinox-metal-alloys-164651044/` |
| ExportersIndia | `https://www.exportersindia.com/rubinox-metal-alloys/` |
| Justdial | `https://www.justdial.com/Mumbai/RUBINOX-METAL-AND-ALLOYS-Kalbadevi/022PXX22-XX22-260618152908-E2M1_BZDET?ref=auto&searchfrom=auto%7Chome&trkid=4311622168&term=rubinox%20metal` |

## Copyright Rule

Final copyright text:

```text
© Rubinox Metal and Alloys. All rights reserved.
```

Rules:

- Do not re-add year `2026` unless the owner separately approves it.
- Do not remove the copyright symbol.
- Do not remove the company name.
- Do not remove `All rights reserved.`

## Height / Compactness Record

| Viewport | Pre-D8A | D8A | D8A-R2 | D8A-R3 |
| --- | ---: | ---: | ---: | ---: |
| 1366px desktop | 533px | 372px | 319px | 326px |
| 1280px desktop | 533px | 372px | 319px | 326px |
| 390px mobile | 1393px | 1023px | 771px | 693px |
| 360px mobile | 1393px | 1022px | 770px | 717px |

Approved visual conclusion:

- D8A-R3 is slightly taller than D8A-R2 on desktop because the single heading receives its own line and underline.
- D8A-R3 is visually better than D8A-R2 because it removes uneven three-heading rhythm and aligns wrapped rows from one left edge.
- D8A-R3 is shorter than D8A-R2 on mobile.
- Owner approved D8A-R3 for lock.

## Zoom / Reflow Safety Specification

Footer requirements at 100%, 110%, and 125% browser zoom:

- Footer link text must not overflow.
- Unified link rows must wrap inside their area.
- Quick Links heading must not overlap links.
- Brand icons must stay inside the brand block.
- Contact text must wrap safely.
- Footer must not create horizontal scroll.
- Mobile must remain clean at `390px` and `360px`.
- Text may wrap naturally inside its container.
- Avoid fixed widths that cause overflow.

D8B footer-specific zoom/reflow results:

| Declared viewport | Zoom | Effective width used for reflow check | Footer overflow | Link-bank overflow | Brand icons |
| --- | ---: | ---: | --- | --- | --- |
| 1366px | 100% | 1366px | Pass | Pass | 6 in 1 row |
| 1366px | 110% | 1241px | Pass | Pass | 6 in 1 row |
| 1366px | 125% | 1092px | Pass | Pass | 6 in 1 row |
| 1280px | 100% | 1280px | Pass | Pass | 6 in 1 row |
| 1280px | 110% | 1163px | Pass | Pass | 6 in 1 row |
| 1280px | 125% | 1024px | Pass | Pass | 6 in 1 row |
| 390px | 100% | 390px | Pass | Pass | 6 in 1 row |
| 390px | 110% | 354px | Pass | Pass | 6 in 1 row |
| 390px | 125% | 312px | Pass | Pass | 6 in 1 row |
| 360px | 100% | 360px | Pass | Pass | 6 in 1 row |
| 360px | 110% | 327px | Pass | Pass | 6 in 1 row |
| 360px | 125% | 288px | Pass | Pass | 6 in 1 row |

## Allowed Content

Only these content groups belong in the locked footer:

- Logo and approved brand intro text.
- Six contact/social icons.
- Unified Quick Links bank with approved links.
- Contact details.
- Platform/directory icons.
- Copyright line.

## Forbidden Content

Do not add:

- Every city link.
- Every grade link.
- Long SEO dumps.
- Manufacturer, factory, mill, production, manufacturing unit, or `we manufacture` wording.
- Fake certification or approval claims.
- Stock, price, or delivery promises.
- Client, project, testimonial, rating, review, or award references.
- Year `2026` in the copyright unless the owner separately approves it.
- Separate `Main Materials` or `Forms & RFQ` headings in the final footer.
- Footer variants without approval.

## HTML Pattern

Representative final structure:

```html
<footer class="siteFooter homeFooterPrototypeD8A">
  <div class="wrap footerLayout">
    <div class="footerBrand">
      <a href="/" aria-label="Rubinox Home">
        <img src="/logo.png" alt="Rubinox Metal and Alloys">
      </a>
      <p>Rubinox Metal and Alloys is a Mumbai-based stockist, supplier, importer, exporter and project supplier for industrial metals and alloy products.</p>
      <div class="footerIconGroup" role="group" aria-label="Social and contact links">
        <!-- Call, Email, WhatsApp, Facebook, Instagram, LinkedIn -->
      </div>
    </div>

    <nav class="footerLinkBank footerUnifiedLinks" aria-labelledby="footerQuickLinksTitle">
      <h2 class="footerUnifiedTitle" id="footerQuickLinksTitle">Quick Links:</h2>
      <div class="footerInlineLinks">
        <!-- Approved final link bank only -->
      </div>
    </nav>

    <div class="footerContact">
      <h2>Contact Details</h2>
      <!-- Phone, email, address and platform icons -->
    </div>
  </div>
  <div class="footerBottom">
    <div class="wrap">&copy; Rubinox Metal and Alloys. All rights reserved.</div>
  </div>
</footer>
```

Relative path guidance for D8C:

- Root pages may use root-relative paths as currently approved.
- Nested pages must preserve correct asset and page paths for GitHub Pages static hosting.
- Validate every footer link after replication.

## CSS Pattern

Representative selector guidance:

```css
.siteFooter .footerLayout {
  display:grid;
  box-sizing:border-box;
}

.siteFooter .footerLinkBank,
.siteFooter .footerUnifiedLinks {
  width:100%;
  min-width:0;
}

.siteFooter .footerUnifiedTitle {
  position:relative;
  display:inline-flex;
  white-space:nowrap;
}

.siteFooter .footerUnifiedTitle::after {
  content:"";
  position:absolute;
  left:0;
  bottom:0;
  width:64px;
  height:2px;
  background:linear-gradient(90deg,#e2a02f,rgba(226,160,47,0));
}

.siteFooter .footerInlineLinks {
  display:flex;
  flex-wrap:wrap;
  min-width:0;
  width:100%;
}

.siteFooter .footerInlineLinks a {
  min-width:0;
  max-width:100%;
  overflow-wrap:anywhere;
}

.siteFooter .footerIconGroup {
  display:flex;
  flex-wrap:nowrap;
  max-width:100%;
}

.siteFooter .footerBrand p,
.siteFooter .footerContact p {
  overflow-wrap:break-word;
}
```

Responsive guidance:

- At tablet widths, the contact block may move below the brand/link row.
- At mobile widths, the footer stacks in one column.
- Preserve `min-width:0`, `flex-wrap:wrap`, `overflow-wrap`, and compact icon sizing to protect zoom/reflow behavior.

## Sitewide Replication Instructions for D8C

D8C must:

- Replicate this approved footer across all public HTML pages.
- Use correct relative paths for root and nested pages.
- Preserve `CNAME`, custom domain, SEO metadata, schema, sitemap, analytics, images, PDFs, and page body content.
- Not change page content outside the footer.
- Validate all footer links after replication.
- Ensure copyright has no `2026` on all pages.
- Ensure old footer variants are removed from all pages.
- Preserve the approved D8A-R3 one-heading Quick Links structure.
- Preserve contact details and platform URLs exactly.

## QA Checklist

Future footer work must check:

- Visual widths: `1366`, `1280`, `768`, `390`, `360`.
- Zoom levels: `100%`, `110%`, `125%`.
- Footer link crawl.
- Icon row check.
- Copyright no-year check.
- Contact details check.
- Mobile layout check.
- Non-home comparison before D8C replication.
- HTML validation.
- Sitemap.
- Schema.
- Accessibility.
- Navigation.
- Link crawl.
- Pa11y.
- Forbidden claims.
- `git diff --check`.

## D8B QA Results

D8B was a documentation/design-lock batch. No visible HTML/CSS change was required.

Final QA from the active D-drive project folder:

- `npm run qa:sitemap` - passed; 261 sitemap URLs, 261 local HTML pages, 0 missing, 0 duplicates.
- `npm run qa:crawl` - passed; 400 links scanned successfully.
- `npm run qa:schema` - passed; 261 pages, 866 JSON-LD blocks, 0 invalid.
- `npm run qa:accessibility` - passed; 5 checked pages, 0 accessibility violations.
- `npm run test:navigation` - passed.
- `npm run qa:html` - passed; 261 pages, 0 invalid.
- `npm run qa:links` - passed; 400 links scanned successfully.
- `npm run qa:pa11y` - passed; 9/9 URLs within threshold.
- `npm run qa:forbidden-claims` - completed; no files were rewritten.
- `git diff --check` - passed with line-ending normalization warnings only.

## D8B Screenshot References

Final footer screenshots:

- `D:\Websites\Rubinox\visual-qa\d8b-footer-lock-v1\final`

Hover/focus screenshots:

- `D:\Websites\Rubinox\visual-qa\d8b-footer-lock-v1\hover-focus`

Zoom/reflow screenshots:

- `D:\Websites\Rubinox\visual-qa\d8b-footer-lock-v1\zoom-reflow`

Non-home check screenshots:

- `D:\Websites\Rubinox\visual-qa\d8b-footer-lock-v1\nonhome-check`

Programmatic visual QA metrics:

- `D:\Websites\Rubinox\visual-qa\d8b-footer-lock-v1\d8b-footer-lock-qa-metrics.json`

## Non-Home Check Result

D8B checked these pages before D8C replication:

- `/company-profile.html`
- `/materials/stainless-steel.html`
- `/product-forms.html`

Result:

- Checked non-home pages do not use the homepage `homeFooterPrototypeD8A` class.
- Checked non-home pages do not use the D8A-R3 `footerUnifiedLinks` markup.
- Sitewide footer replication was not performed in D8B.

## Business Identity Guardrail

Rubinox Metal and Alloys is a:

- Stockist.
- Supplier.
- Importer.
- Exporter.
- Project Supplier.

Rubinox must not be described as a manufacturer.
