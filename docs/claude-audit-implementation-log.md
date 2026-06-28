# Claude Audit Implementation Log

Date: 2026-06-28

## Baseline Status

- Active folder used: `C:\Users\Dell\OneDrive\Documents\rubinox-website-live`.
- Git branch: `main`, tracking `origin/main`.
- `git pull origin main`: already up to date.
- Public sitemap baseline: 219 URLs and 219 local public HTML pages.
- Local recursive HTML inventory includes additional non-public/report HTML files; QA sitemap uses 219 public pages.
- `robots.txt` allows crawl access and references `https://rubinoxmetal.com/sitemap.xml`.
- JSON-LD baseline: 219 public HTML pages scanned, 594 JSON-LD blocks, 0 invalid JSON-LD blocks.
- Quotation page already has a static GitHub Pages-compatible RFQ form with email and WhatsApp handoff.
- Blog articles already have BlogPosting schema and publish/update dates.
- Home, About, Contact and Quotation pages already include visible FAQs with FAQPage schema.
- The homepage Phase 3 sections are present, including quality/documentation, PAN India/export, RFQ flow and buyer FAQ sections.

## Already Done Before This Session

- Expanded site architecture exists beyond the older transfer note: root pages, material pages, product-form pages, grade pages, location pages, export pages and 30 Knowledge Hub articles.
- FAQ schema is already present across many core, location, export, blog and material pages.
- BlogPosting schema is already present on all 30 current blog article pages.
- Accessibility baseline passes on the configured sample pages.
- Navigation verification passes.
- Sitemap and crawl QA pass.

## Needs Improvement

- Legacy HTML validation baseline reports 59 invalid pages. The first batch did not attempt unrelated page-family validation cleanup.
- Product and ItemList schema are not yet broadly implemented across public pages.
- Technical resources hub and dedicated quality/documentation support page do not exist yet.
- High-value requested pages for copper nickel, ASTM/API/IS pipe specifications and additional nickel alloy grades do not exist yet.
- Blog article pages do not yet show the requested visible reviewer line: `Reviewed by Rubinox Metal and Alloys Procurement Team`.

## Implemented In This Session

- Homepage Market Watch disclaimer expanded to clarify that values are indicative signals only, not live pricing, confirmed stock or a formal quotation.
- Homepage popular grade chips deep-linked to available grade pages for SS 304, SS 316L, Duplex 2205, Super Duplex 2507, Inconel 625, Monel 400, Hastelloy C276, Titanium Grade 2 and SMO 254.
- Homepage Why Choose cards now include buyer-focused supporting copy without manufacturer, stock, certification or price promises.
- Footer copyright text updated sitewide to `© 2026 Rubinox Metal and Alloys`.
- Quotation page RFQ form now includes an explicit Standard / Specification field, Delivery Location / Port wording, Message / Documentation Notes wording and safer business-hours response guidance.
- Quotation page email and WhatsApp handoff now include the complete RFQ detail set instead of only the shortest material/grade/size/quantity subset.

## Deferred Because It Needs Owner Approval Or Larger Follow-Up

- GA4/Search Console ownership and verification.
- GST, MSME, IEC or registration numbers and document images.
- Real client names, project references, order history, team size, stockyard details, real photos or years of experience.
- Fixed price lists or live price claims.
- Broad schema generation for Product and ItemList entities until page-by-page content and validation strategy is selected.

## Batch 2 - High-Value Specification Pages

- Added 17 specification-led material and pipe pages requested in the audit backlog.
- Connected the new pages from grades.html plus nickel alloy, copper, carbon steel and mild steel hubs.
- Added all new public URLs to sitemap.xml and refreshed related hub lastmod entries to 2026-06-28.
- Kept copy RFQ-focused and conservative: no manufacturer language, stock promises, price claims or unverified certifications.
