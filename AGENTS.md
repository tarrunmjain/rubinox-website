# Rubinox Metal and Alloys Agent Guide

This repository contains the static website source and project knowledge base for Rubinox
Metal and Alloys. Treat this file as the first-read operating guide for any future agent,
developer, or content contributor working in this project.

## Current Project State

- Site type: static HTML website.
- Stack: HTML5, inline CSS, inline vanilla JavaScript, static image assets.
- Root pages: `index.html`, `industries.html`, `quotation.html`.
- Material library: `materials/` with 72 static HTML pages.
- Assets: `assets/` plus root logo, favicons, manifest, robots, sitemap, and CNAME.
- Production domain: `https://rubinoxmetal.com`.
- Deployment style: static hosting, likely GitHub Pages because `CNAME` contains `rubinoxmetal.com`.
- No package manager, build step, framework, or environment variables are currently required.

## Critical Guardrails

- Do not overwrite existing website code unless the user explicitly asks for implementation changes.
- Do not change visual design, layout, colors, typography, or component styling unless the user asks for design work.
- Do not commit unless the user explicitly asks.
- Do not invent business claims, certifications, stock quantities, delivery guarantees, client names, or manufacturing capabilities.
- Do not describe Rubinox as a manufacturer unless that is separately verified.
- Preserve canonical URLs, analytics IDs, contact information, sitemap URLs, and structured data unless the task specifically concerns them.
- Keep documentation updates separate from website implementation changes whenever possible.

## Main Knowledge Files

- `PROJECT_TRANSFER.md` - transferred source audit, stack, pages, SEO, dependencies, deployment, and pending work.
- `docs/RUBINOX_MASTER_CONTEXT.md` - consolidated business, website, SEO, and maintenance context.
- `docs/WEBSITE_ROADMAP.md` - staged roadmap for audit, SEO, content, technical cleanup, analytics, and future design work.
- `docs/01-brand-guidelines.md` - brand voice, naming, tone, and visual direction.
- `docs/02-company-information.md` - company profile, location, markets, industries, and quality support.
- `docs/03-products.md` - product forms and product page guidance.
- `docs/04-material-grades.md` - material families and common grades.
- `docs/05-seo-keywords.md` - target keyword groups and metadata rules.
- `docs/06-content-rules.md` - accuracy, SEO, CTA, and claim rules.
- `docs/07-contact-information.md` - official contact details and RFQ guidance.

## Brand Summary

Rubinox Metal and Alloys is a Mumbai-based stockist, supplier, trader, importer, and exporter
of industrial metals and alloy products. The company serves PAN India and export buyers with
quotation support, documentation assistance, and project supply coordination.

Core materials:

- Stainless steel.
- Duplex and super duplex stainless steel.
- Nickel alloys, including Inconel, Monel, Hastelloy, Incoloy, Nickel 200, and Nickel 201.
- SMO 254.
- Titanium.
- Aluminium.
- Copper.
- Brass.
- Carbon steel.
- Mild steel.
- Phosphor bronze.

Core product forms:

- Pipes and tubes.
- Sheets, plates, and coils.
- Bars and rods.
- Flanges and fittings.
- Fasteners.
- Angles and channels.
- Flats and circles.
- Wire mesh.

## Contact Details

- Company: Rubinox Metal and Alloys
- Phone: +91 9363193755
- WhatsApp: `https://wa.me/919363193755`
- Email: `tarun@rubinoxmetal.com`
- Address: A-206, 2nd floor, C.S. No. 2251 to 2255, Krishvi Escape, Sitaram Poddar Marg, near Vinay Hotel, Kalbadevi, Mumbai - 400002, Maharashtra, India

If contact information changes, update `docs/07-contact-information.md` first, then align the
website, schema, sitemap-adjacent references, CTAs, and documentation.

## Content Rules

- Use `Rubinox Metal and Alloys` as the formal company name.
- Use `Rubinox Metal & Alloys` only where a shorter display name is needed.
- Write for purchase managers, fabricators, EPC teams, exporters, project engineers, and industrial buyers.
- Keep copy clear, technical, practical, and quotation-focused.
- Ask for material, grade/specification, size, quantity, and delivery location in RFQ sections.
- Use `PAN India supply` and `export support` consistently.
- Use `available on request`, `where applicable`, or `as per customer requirement` for certificates, testing, and inspection.

## Website Structure Rules

For new material, grade, or product pages, follow the existing static page pattern:

1. Page-specific title, meta description, canonical URL, Open Graph tags, and Twitter card tags.
2. Google Analytics snippet, if matching existing pages.
3. JSON-LD `WebPage` and `BreadcrumbList`.
4. Header, desktop navigation, mobile navigation, and WhatsApp CTA.
5. Breadcrumb.
6. Hero section with H1 and buyer-focused intro.
7. Grade, forms, applications, documentation, related pages, and quotation CTA sections.
8. Contact block and footer.

Before adding a new public page, also check whether `sitemap.xml` needs to include the URL.

## SEO Rules

- One primary keyword per page.
- H1 should match the page intent naturally.
- Canonical URL should point to the production URL.
- Internal links should connect related material, grade, product form, quotation, and contact pages.
- Do not keyword-stuff repeated exact-match phrases.
- Preserve existing schema and social metadata patterns.
- Use descriptive image alt text that matches the visible product or material.

## Development Workflow

1. Read `PROJECT_TRANSFER.md` and `docs/RUBINOX_MASTER_CONTEXT.md`.
2. Inspect the relevant existing HTML page before editing.
3. Keep edits scoped to the requested files.
4. If working on content, consult `docs/06-content-rules.md`.
5. If working on SEO, consult `docs/05-seo-keywords.md`.
6. If working on contact details, consult `docs/07-contact-information.md`.
7. Verify changed files with `git diff` and targeted searches.

## Verification Checklist

For documentation-only work:

- Confirm no website HTML/CSS/JS/assets were changed.
- Confirm new docs are present under `docs/`.
- Confirm `git status --short` shows only intended files.

For website changes:

- Check the page opens locally.
- Check desktop and mobile navigation.
- Check WhatsApp, email, phone, and quotation links.
- Check canonical URL, title, meta description, OG/Twitter tags, and JSON-LD.
- Check internal links and sitemap if a page was added, renamed, or removed.
- Do not commit until asked.
