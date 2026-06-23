# Project Transfer: Rubinox Metal and Alloys Website

## 1. Technology Stack Used

This is a static website built with plain front-end web technologies.

- HTML5 static pages.
- Inline CSS inside each HTML page.
- Inline vanilla JavaScript for mobile navigation, lead tracking helpers, current year, and the market ticker loader.
- Static image assets in WebP, JPG, PNG, and ICO formats.
- JSON-LD structured data for SEO.
- Google Analytics / Google Tag Manager using measurement ID `G-JT5X5L5H07`.
- TradingView external widget loader on the home page for indicative metal market data.
- GitHub Pages-style static hosting, indicated by the root `CNAME` file.

No framework such as React, Next.js, Astro, Vue, Angular, Laravel, or WordPress is present in the exported source.

## 2. Folder Structure

```text
.
+-- AGENTS.md
+-- PROJECT_TRANSFER.md
+-- README.md
+-- CNAME
+-- index.html
+-- industries.html
+-- quotation.html
+-- robots.txt
+-- sitemap.xml
+-- site.webmanifest
+-- logo.png
+-- favicon.ico
+-- favicon.png
+-- favicon-16x16.png
+-- favicon-32x32.png
+-- favicon-48x48.png
+-- favicon-64x64.png
+-- favicon-192x192.png
+-- apple-touch-icon.png
+-- assets/
|   +-- hero, material, grade, and product-form images
|   +-- 66 WebP images
|   +-- rubinox-social-preview-2026.jpg
+-- docs/
|   +-- 01-brand-guidelines.md
|   +-- 02-company-information.md
|   +-- 03-products.md
|   +-- 04-material-grades.md
|   +-- 05-seo-keywords.md
|   +-- 06-content-rules.md
|   +-- 07-contact-information.md
+-- materials/
    +-- 72 static HTML pages for materials, grades, and product forms
```

## 3. Pages Created

The exported website contains 75 HTML pages.

Root pages:

- `index.html` - home page for stainless steel, alloy, and industrial metal supply.
- `industries.html` - industries served page.
- `quotation.html` - quotation / RFQ page.

Material category pages:

- `materials/stainless-steel.html`
- `materials/duplex-super-duplex.html`
- `materials/nickel-alloys.html`
- `materials/titanium.html`
- `materials/smo-254.html`
- `materials/aluminium.html`
- `materials/copper.html`
- `materials/brass.html`
- `materials/carbon-steel.html`
- `materials/mild-steel.html`
- `materials/phosphor-bronze.html`
- `materials/other-metals.html`

Stainless steel grade pages include SS 201, 202, 253MA, 304, 304L, 309, 309S, 310, 310S, 316, 316L, 316Ti, 317L, 321, 321H, 347, 347H, 409, 410, 420, 430, 904L, 17-4 PH, and Nitronic 60.

Duplex, nickel alloy, SMO, and titanium grade pages include Duplex 2205, Super Duplex 2507, SMO 254, Inconel 600/625/718, Monel 400/K-500, Hastelloy B-2/B-3/C-22/C-276/C-4/X, Incoloy 800/825, Nickel 200/201, and Titanium Grades 1/2/5/23.

Product-form SEO pages include stainless steel pipes, tubes, sheets, plates, coils, flanges, fittings, fasteners, angles, bars and rods, flats, circles, and wire mesh.

## 4. Components Created

Because this is a static HTML website, components are implemented as repeated HTML/CSS/JS sections rather than reusable framework components.

Common page components:

- Top rail with location, phone, email, and supply/export notes.
- Header with Rubinox logo.
- Desktop navigation.
- Mobile navigation menu with toggle button and accessible `aria-expanded` state.
- WhatsApp quotation button.
- Hero sections with product or material positioning.
- Breadcrumbs.
- Product/material cards.
- Related page link grids.
- Grade and product form tables/lists.
- Quote call-to-action blocks.
- Contact cards.
- Footer with copyright and social/profile links.
- Skip link for accessibility.
- Google Analytics lead-tracking helper functions.

Home page-specific sections:

- Market watch / TradingView widget container.
- Popular grade chips.
- KPI boxes.
- Materials grid.
- Product forms grid.
- Industries served section.
- Quality and documentation section.
- Contact section.

## 5. SEO Implemented

SEO implementation is extensive and page-level.

- Unique `<title>` tags across commercial pages.
- Meta descriptions for primary pages and material pages.
- `index,follow` robots meta tags on pages.
- Canonical URLs using `https://rubinoxmetal.com/...`.
- Open Graph metadata:
  - `og:locale`
  - `og:type`
  - `og:site_name`
  - `og:title`
  - `og:description`
  - `og:url`
  - `og:image`
  - image width, height, type, and alt text
- Twitter card metadata:
  - `summary_large_image`
  - `twitter:title`
  - `twitter:description`
  - `twitter:image`
  - `twitter:image:alt`
- JSON-LD structured data:
  - Organization / LocalBusiness on the home page.
  - WebSite.
  - WebPage.
  - BreadcrumbList on internal pages.
- `robots.txt` allowing crawl access and pointing to the sitemap.
- `sitemap.xml` with production URLs.
- SEO landing pages targeting material, grade, product form, Mumbai, India, supplier, stockist, and exporter search intent.
- Internal links between related grades, materials, product forms, quotation page, and contact sections.
- Social preview image at `assets/rubinox-social-preview-2026.jpg`.
- Image assets include descriptive filenames and visible alt text in page markup.
- Performance-oriented image attributes such as explicit width/height, `decoding="async"`, lazy loading on non-critical images, and high-priority loading for key hero images.

## 6. Dependencies Installed

No local package dependencies are installed or required.

There is no `package.json`, lockfile, build tool configuration, or dependency manifest in the exported source.

External runtime services/scripts used by the static pages:

- Google Tag Manager / Google Analytics: `https://www.googletagmanager.com/gtag/js?id=G-JT5X5L5H07`
- TradingView widget script on the home page.
- WhatsApp links through `https://wa.me/919363193755`
- Mail links using `mailto:tarun@rubinoxmetal.com`
- Phone links using the published Rubinox phone number.

## 7. Environment Variables Required

No environment variables are required for local development or static deployment.

Values currently hardcoded in the HTML:

- Production domain: `https://rubinoxmetal.com`
- Google Analytics measurement ID: `G-JT5X5L5H07`
- Phone / WhatsApp: `+91 9363193755`
- Email: `tarun@rubinoxmetal.com`
- Business address: Kalbadevi, Mumbai - 400002, Maharashtra, India

If the project is later migrated to a framework or CMS, these values should be moved into environment-specific configuration.

## 8. Pending Tasks

Recommended next tasks:

- Verify every URL in `sitemap.xml` returns HTTP 200 after deployment.
- Re-run a crawl after deployment to catch broken internal links, missing assets, or accidental non-canonical URLs.
- Validate JSON-LD with Google's Rich Results Test or Schema Markup Validator.
- Confirm Google Analytics property ownership and event tracking for WhatsApp, email, phone, social, and quotation actions.
- Confirm the TradingView widget loads correctly on production and does not block rendering.
- Add a proper `README.md` with local preview and deployment instructions; current README only contains the project title.
- Consider extracting repeated CSS/JS/header/footer into shared files or a static-site generator if ongoing maintenance becomes frequent.
- Review all technical grade claims and standards with a materials expert before major SEO expansion.
- Compress or audit large assets periodically.
- Confirm social profile URLs and business directory URLs remain current.
- Add Search Console and Bing Webmaster verification if not already configured externally.

## 9. Deployment Details

The project is ready for static hosting. No build step is required.

Current deployment indicators:

- `CNAME` contains `rubinoxmetal.com`, which is typical for GitHub Pages custom-domain deployment.
- `sitemap.xml`, canonical URLs, Open Graph URLs, and schema URLs all target `https://rubinoxmetal.com`.
- The site can be deployed by publishing the repository root as static files.

Suggested deployment flow:

1. Commit all files in the repository.
2. Push to the GitHub repository connected to the hosting provider.
3. If using GitHub Pages, configure Pages to serve from the default branch root.
4. Ensure DNS for `rubinoxmetal.com` points to the hosting provider.
5. Confirm HTTPS is enabled.
6. Visit:
   - `https://rubinoxmetal.com/`
   - `https://rubinoxmetal.com/industries.html`
   - `https://rubinoxmetal.com/quotation.html`
   - representative material pages under `/materials/`
7. Submit or refresh `https://rubinoxmetal.com/sitemap.xml` in Google Search Console.

Source code export completed into the current repository from:

- Repository: `tarrunmjain/rubinox-website`
- Default branch: `main`
- Exported commit observed during clone: `843dee8 Reduce oversized WebP assets (#15)`
