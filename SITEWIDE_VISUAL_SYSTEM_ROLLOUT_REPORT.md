# Site-Wide Rubinox Visual System Rollout Report

## Project

Rubinox Metal and Alloys static website

Production URL: https://rubinoxmetal.com
Repository: https://github.com/tarrunmjain/rubinox-website
Working folder: C:\Users\Dell\OneDrive\Documents\rubinox-website-live

## Objective Completed

The Rubinox visual system has been rolled out across the full static HTML website while preserving existing SEO value, URLs, page H1s, schema intent, material-page content, and business positioning.

The rollout standardizes the visual foundation around the contact page pilot system:

- Navy, silver and gold Rubinox visual language
- Standard top utility bar
- Standard desktop and mobile header navigation
- Gold WhatsApp Quote CTA treatment
- Standard footer with quick links, material links, product form links, contact details, social links and business platform links
- Silver/navy icon system
- Gold CTA button system
- Mobile menu behavior that closes after navigation link taps

Rubinox continues to be positioned only as a Stockist | Supplier | Importer | Exporter | Project Supplier. No manufacturer claims, pricing claims, stock promises, certifications, approvals, client names, mill authorization claims or vendor-status claims were added.

## Verified Social and Business Links Used

- Phone: tel:+919363193755
- Email: mailto:tarun@rubinoxmetal.com
- WhatsApp: https://wa.me/919363193755
- Facebook: https://www.facebook.com/profile.php?id=61590518053054
- Instagram: https://www.instagram.com/rubinox_metal/
- LinkedIn: https://www.linkedin.com/company/rubinox-metal-and-alloys
- Google Business Profile: https://share.google/FjasMdKGFXSZBmsqp
- IndiaMART: https://www.indiamart.com/rubinox-metal-and-alloys
- TradeIndia: https://www.tradeindia.com/rubinox-metal-alloys-164651044/
- ExportersIndia: https://www.exportersindia.com/rubinox-metal-alloys/
- Justdial: https://www.justdial.com/Mumbai/RUBINOX-METAL-AND-ALLOYS-Kalbadevi/022PXX22-XX22-260618152908-E2M1_BZDET?ref=auto&searchfrom=auto%7Chome&trkid=4311622168&term=rubinox%20metal

## Assets Added or Verified

The rollout uses local icon assets instead of remote image dependencies where possible.

Added/verified assets:

- assets/icons/social/facebook.svg
- assets/icons/social/instagram.svg
- assets/icons/social/whatsapp.svg
- assets/icons/social/linkedin.ico
- assets/icons/platforms/google.ico
- assets/icons/platforms/indiamart.ico
- assets/icons/platforms/tradeindia.ico
- assets/icons/platforms/exportersindia.ico
- assets/icons/platforms/justdial.ico
- assets/og-rubinox.jpg

The production OG image asset was added because quotation.html already referenced https://rubinoxmetal.com/assets/og-rubinox.jpg and external-link QA required the file to exist.

## Rollout Batches

### Batch 1: Core Pages

Applied the visual system to:

- index.html
- about-us.html
- industries.html
- quotation.html
- contact.html

Commit:

- cc52e3c Roll out Rubinox visual system to core pages

Key outcomes:

- Standardized top utility bar and header
- Standardized footer and verified business platform links
- Added local social/platform icon assets
- Preserved existing SEO metadata, schema and H1s
- Fixed homepage footer-year script guard after yearless footer standardization
- Kept homepage, About Us, Industries, Quotation and Contact layouts intact apart from the approved visual-system rollout

### Batch 2: Material Category Pages

Applied the visual system to 12 material category pages:

- materials/stainless-steel.html
- materials/duplex-super-duplex.html
- materials/nickel-alloys.html
- materials/titanium.html
- materials/smo-254.html
- materials/other-metals.html
- materials/aluminium.html
- materials/copper.html
- materials/brass.html
- materials/phosphor-bronze.html
- materials/carbon-steel.html
- materials/mild-steel.html

Commit:

- 51cb2cf Roll out Rubinox visual system to material categories

Key outcomes:

- Standardized header, top bar, mobile navigation and footer
- Preserved category page content, SEO metadata, H1s and schema
- Strengthened footer CSS to override legacy dark footer rules on material pages
- Kept visible material-page content and CTAs intact

### Batch 3: Grade, Product Form and Location Material Pages

Applied the visual system to the remaining 93 material pages under materials/.

Commit:

- b76e46c Roll out Rubinox visual system to grade and form pages

Key outcomes:

- Standardized top bar, header, mobile navigation and footer across all remaining material pages
- Added standard footer to materials/stainless-steel-supplier-mumbai.html, which previously had no detectable footer
- Preserved existing page H1s, meta tags, canonical URLs, JSON-LD schema, content meaning and internal links
- Added button icons to existing CTA buttons without changing destinations
- Kept known legacy page-content issues untouched, including existing pricing wording on the Mumbai supplier page

## Site-Wide Verification

A full structural verification was run across all HTML pages.

Results:

- HTML pages checked: 110
- Pages with one H1: 110
- Pages with standardized top utility bar: 110
- Pages with required top bar text: 110
- Pages with ordered top bar contact/social icons: 110
- Pages with standardized footer: 110
- Pages with social/contact footer icons: 110
- Pages with business platform footer icons: 110
- Missing local icon assets: 0
- Verification issues: 0

Footer copyright standard:

- &copy; Rubinox Metal and Alloys. All rights reserved.

## QA Results

### Schema

Command:

```powershell
pnpm run qa:schema
```

Result:

- HTML pages scanned: 110
- JSON-LD blocks found: 268
- Invalid JSON-LD blocks: 0
- Status: Passed

### Navigation

Command:

```powershell
pnpm run test:navigation
```

Result:

- Navigation verification passed
- Status: Passed

### Crawl

Command:

```powershell
pnpm run qa:crawl
```

Result:

- Successfully scanned 196 links
- Status: Passed

### Sitemap

Command:

```powershell
pnpm run qa:sitemap
```

Result:

- Sitemap URLs: 110
- Local HTML pages: 110
- Missing from sitemap: 0
- Sitemap URLs without local file: 0
- Duplicate sitemap URLs: 0
- Status: Passed

### Accessibility

Command:

```powershell
pnpm run qa:accessibility
```

Result:

- Pages checked by configured script: 5
- Total violations: 2
- Known remaining issues:
  - materials/stainless-steel.html: region landmark issue
  - materials/ss-304-supplier-india.html: region landmark issue
- Status: Passed with known unrelated legacy baseline

No new color contrast, footer, icon or CTA accessibility regressions were introduced by the rollout.

### HTML Validation

Command:

```powershell
pnpm run qa:html
```

Result:

- HTML pages checked: 110
- Invalid pages: 59
- Core valid pages:
  - index.html
  - about-us.html
  - contact.html
  - quotation.html
- Material category pages: valid
- Remaining issues are legacy validation items on industries.html and older grade/product pages, such as raw ampersands, lowercase doctype, nested/legacy markup and native-main preferences.
- Status: Passed with known unrelated legacy baseline

### External Links

Command:

```powershell
pnpm run qa:external-links
```

Result:

- All checked local, production, social, business platform, Google Maps and analytics links returned OK states
- Status: Passed

### Image Optimization Preview

Command:

```powershell
pnpm run qa:images
```

Result:

- Images analyzed: 89
- Original total: 9260.7 KB
- Optimized preview total: 8371.1 KB
- Potential savings preview: 889.6 KB
- Original website images were not modified
- Status: Passed as report-only preview

## Representative Mobile Checks

A Playwright mobile viewport check was run for representative grade/form pages:

- /materials/ss-304-supplier-india.html
- /materials/inconel-625-supplier-india.html
- /materials/stainless-steel-pipes-supplier-india.html
- /materials/stainless-steel-supplier-mumbai.html

Results:

- H1 count: 1 on every sampled page
- Standard footer present: yes
- Horizontal overflow: none detected
- Mobile menu button present: yes
- Mobile Quotation link present: yes
- Mobile menu closes after tapping Quotation: yes

## SEO Preservation

The rollout did not intentionally change:

- Page URLs
- Canonical URLs
- H1 text
- Title tags
- Meta descriptions
- FAQ content
- FAQPage schema content
- WebPage schema intent
- BreadcrumbList schema intent
- Material page content meaning
- Sitemap URLs

The only SEO-adjacent asset change was adding assets/og-rubinox.jpg to satisfy an already-existing production Open Graph image reference.

## Known Remaining Issues Not Fixed in This Rollout

These were intentionally left for separate QA/content cleanup tasks:

- HTML validation legacy issues on 59 pages
- Accessibility landmark/region issues on materials/stainless-steel.html and materials/ss-304-supplier-india.html
- Potential image optimization savings of approximately 889.6 KB
- Existing content wording issues that predate this rollout, including old competitive-pricing wording on materials/stainless-steel-supplier-mumbai.html
- Any future conversion/content redesign work outside header, footer, icon and CTA visual standardization

## Commit Summary

- cc52e3c Roll out Rubinox visual system to core pages
- 51cb2cf Roll out Rubinox visual system to material categories
- b76e46c Roll out Rubinox visual system to grade and form pages

## Final Status

The Rubinox visual system rollout is complete across the live repository source. All 110 HTML pages now share the standardized top utility bar, header, mobile navigation behavior, footer, icon system and CTA visual treatment.

The final documentation report is ready to be committed separately as the completion record for the site-wide rollout.