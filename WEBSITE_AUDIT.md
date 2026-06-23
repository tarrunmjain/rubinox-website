# Rubinox Website Audit

Audit date: 2026-06-23

Scope: static source audit of the current Rubinox Metal and Alloys repository. This audit
checked local HTML files, internal links, local assets, sitemap coverage, metadata, H1 tags,
image alt text, mobile-readiness signals, performance risks, and SEO opportunities.

No website design or page content changes were made as part of this audit.

## Audit Summary

- Total files scanned: 167.
- HTML pages scanned: 75.
- Root HTML pages: 3.
- Material, grade, and product-form pages: 72.
- Sitemap URLs: 75.
- Internal links scanned: 2,060.
- Unique external anchor links found: 4.
- Images in HTML pages: 149.
- Local broken internal links found: 0.
- Missing local assets found: 0.
- Missing page titles found: 0.
- Missing meta descriptions found: 0.
- Missing H1 tags found: 0.
- Missing image alt text found: 0.

## 1. Broken Links

### Local Internal Links

No broken local internal links were found in the static crawl.

The audit checked:

- Root-relative links such as `/materials/stainless-steel.html`.
- Relative links inside `materials/`.
- Same-page and cross-page fragment links.
- Local image, script, and source paths.

Result:

- Broken internal page links: 0.
- Missing local asset references: 0.
- Missing fragment targets: 0.

### External Links

The static crawl found these unique external anchor links:

- `https://wa.me/919363193755`
- `https://www.facebook.com/profile.php?id=61590518053054`
- `https://www.google.com/maps/search/?api=1&query=Krishvi%20Escape%2C%20Sitaram%20Poddar%20Marg%2C%20Kalbadevi%2C%20Mumbai%20400002`
- `https://www.instagram.com/rubinox_metal/`

External links should be live-checked separately because social, WhatsApp, and Google Maps
URLs can change behavior based on region, login state, device, or anti-bot rules.

Recommended follow-up:

- Open each external URL in a browser.
- Confirm WhatsApp opens the correct phone number.
- Confirm Instagram and Facebook profiles are public and correct.
- Confirm Google Maps opens the intended Kalbadevi location.

## 2. Missing Pages

No missing local pages were found from the static sitemap/source comparison.

Checks performed:

- Every HTML file is represented in `sitemap.xml`.
- Every `sitemap.xml` URL maps to a local HTML page.
- Product, grade, material, and form image assets were compared against likely matching page slugs.

Result:

- HTML files missing from sitemap: 0.
- Sitemap URLs missing from local source: 0.
- Expected pages inferred from asset slugs but missing locally: 0.

Current page coverage:

- `index.html`
- `industries.html`
- `quotation.html`
- 72 pages under `materials/`

## 3. Duplicate Content

No exact duplicate pages were found in the static text hash scan.

No duplicate metadata was found:

- Duplicate page titles: 0.
- Duplicate meta descriptions: 0.
- Duplicate H1 tags: 0.

SEO risk to monitor:

- Many material and grade pages use a similar layout and repeated commercial boilerplate:
  header, navigation, CTA blocks, contact blocks, documentation language, and related links.
- This is normal for programmatic SEO pages, but future content expansion should add enough
  page-specific details to avoid thin or near-duplicate content.

Recommended follow-up:

- Review pages by material family and ensure each page has unique technical value.
- Add grade-specific applications, standards, equivalents, forms, and buyer guidance where useful.
- Avoid creating more pages that only swap the grade or city name.

## 4. Missing Meta Titles

No missing `<title>` tags were found.

Result:

- Pages scanned: 75.
- Missing titles: 0.

Recommendation:

- Keep each future page title unique.
- Use a clear pattern such as `[Material / Grade / Product] Supplier in India | Rubinox`.
- Keep titles buyer-focused and avoid stuffing too many keywords.

## 5. Missing Meta Descriptions

No missing meta descriptions were found.

Result:

- Pages scanned: 75.
- Missing meta descriptions: 0.

Recommendation:

- Keep descriptions unique and concise.
- Include material, grade or product form, supply location, and quotation intent.
- Avoid repeating identical descriptions across new pages.

## 6. Missing H1 Tags

No missing H1 tags were found.

Result:

- Pages scanned: 75.
- Missing H1 tags: 0.
- Pages with multiple H1 tags: 0.

Recommendation:

- Continue using one clear H1 per page.
- Match H1 text to the primary search intent naturally.
- Do not use H1 tags for repeated section headings or decorative text.

## 7. Missing Alt Text

No missing or empty image alt text was found.

Result:

- Images found in HTML: 149.
- Images missing alt text: 0.
- Images missing width/height attributes: 0.

Recommendation:

- Keep alt text descriptive and product-specific.
- Avoid keyword-stuffed alt text.
- For future decorative images, use empty alt only when the image is truly decorative.

## 8. Mobile Issues

No definite mobile-blocking issue was found in the static scan.

Positive signals:

- All 75 pages include viewport metadata.
- Pages include mobile menu markup and JavaScript.
- The mobile menu uses `aria-expanded`.
- CSS includes responsive media queries.
- Common grids collapse for smaller screens.

Potential issues to verify visually:

- The home page has dense sections, chip rows, product cards, and a market ticker area that
  should be manually checked at 360px, 390px, 430px, 768px, and desktop widths.
- Long product names and grade names in cards or related-link grids may wrap heavily on small
  screens.
- The TradingView market ticker area may clip or consume vertical space on mobile depending
  on the third-party script output.
- Some pages use extensive inline styles and repeated CSS, making mobile fixes harder to apply
  consistently across all 75 pages.

Recommended follow-up:

- Run mobile visual QA on the home page, quotation page, industries page, and representative
  material pages.
- Test mobile menu open/close behavior.
- Test WhatsApp, email, and phone CTAs on an actual mobile device.
- Check for horizontal scrolling with browser dev tools.

## 9. Performance Issues

The site is static and should be fast, but several performance risks are present.

### Image Weight

Largest assets found:

- `assets/form-wire-mesh.webp` - about 299 KB.
- `assets/rubinox-social-preview-2026.jpg` - about 207 KB.
- `assets/form-fasteners.webp` - about 175 KB.
- `assets/grade-ss-321h.webp` - about 149 KB.
- `assets/mat-copper.webp` - about 148 KB.
- `assets/mat-titanium.webp` - about 145 KB.

Image positives:

- Images use WebP for most product/material assets.
- All HTML image references include width and height.
- Important hero images use priority loading in representative pages.
- Non-critical images use lazy loading in some areas.

Image risks:

- No `srcset` or `sizes` strategy was found, so mobile users may download images sized for
  larger layouts.
- The crawl found 75 image references without `loading` or `fetchpriority`. Some are likely
  logos or above-the-fold images, but this should be reviewed before changing.

### CSS and JavaScript

Performance risks:

- CSS is inline and repeated across pages, which increases HTML size and prevents shared CSS
  browser caching.
- JavaScript for navigation and lead tracking is repeated across pages.
- Google Analytics loads across pages.
- The home page loads a TradingView third-party widget, which can affect load time and layout
  stability.

Recommended follow-up:

- Run Lighthouse/PageSpeed on production pages.
- Review third-party script impact.
- Consider shared CSS and JS files after design/content stability is confirmed.
- Consider responsive image variants for common hero/material assets.

## 10. SEO Opportunities

The current SEO foundation is strong.

Already implemented:

- Unique titles.
- Unique meta descriptions.
- Canonical URLs.
- Open Graph tags.
- Twitter card tags.
- JSON-LD structured data.
- Breadcrumb schema.
- Sitemap.
- Robots file.
- Internal linking.
- Grade, material, and product-form landing pages.

Recommended opportunities:

- Validate JSON-LD with Schema Markup Validator or Google Rich Results Test.
- Submit or refresh `https://rubinoxmetal.com/sitemap.xml` in Google Search Console.
- Add deeper page-specific technical content to high-value grade pages.
- Add FAQ sections based on real buyer questions.
- Add comparison pages only where useful, such as SS 304 vs SS 316 or Duplex 2205 vs Super Duplex 2507.
- Add industry-specific content for oil and gas, chemical, marine, fabrication, and infrastructure buyers.
- Add internal links from related grades to relevant product-form pages and quotation page where not already present.
- Monitor Search Console for pages with impressions but low CTR, then improve titles/descriptions.
- Avoid thin city pages unless there is a clear supply or service reason.
- Consider adding verified trust signals only if supporting proof exists.

## Priority Recommendations

1. Live-check the 4 external links.
2. Run mobile visual QA on key templates.
3. Validate structured data.
4. Run Lighthouse/PageSpeed on the home page and representative material pages.
5. Review large images and consider responsive image variants.
6. Strengthen unique content on the most important grade and product pages.
7. Keep sitemap, canonicals, and internal links in sync whenever new pages are added.
