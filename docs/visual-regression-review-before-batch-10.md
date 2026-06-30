# Visual Regression Review Before Batch 10

Date: 2026-06-30
Scope: Batch 9R documentation-only visual regression review before any grade/specification rollout work.

## Purpose

This review checks whether recent homepage, product-form, location/export, Knowledge Hub, industry and material-family polish created visual regressions that should block Batch 10.

Batch 10 was not started. No public HTML, CSS, JavaScript, image, sitemap, metadata, schema, canonical or URL changes were made as part of this review.

## Guardrails Used

- Preserve the current Rubinox brand system: navy, silver, white and gold accents.
- Preserve the sticky header, full top rail icon set and compact white footer.
- Do not change URLs, H1 intent, title/meta/canonical tags, schema meaning, sitemap URLs or internal link strategy.
- Do not introduce manufacturer, factory, stock quantity, price, certification, client, project, rating, review or delivery guarantee claims.
- Treat automated technical QA as necessary but not sufficient; subjective visual quality still needs a manual pass.

## Pages Reviewed

42 public pages were included in the visual sample.

Homepage:
- index.html

Industries:
- industries.html

Material family and hub pages:
- materials.html
- materials/stainless-steel.html
- materials/nickel-alloys.html
- materials/duplex-super-duplex.html
- materials/titanium.html
- materials/aluminium.html
- materials/carbon-steel.html

Product-form pages:
- materials/stainless-steel-pipes-supplier-india.html
- materials/stainless-steel-sheets-supplier-india.html
- materials/stainless-steel-plates-supplier-india.html
- materials/stainless-steel-flanges-supplier-india.html
- materials/stainless-steel-fittings-supplier-india.html
- materials/stainless-steel-bars-rods-supplier-india.html
- materials/stainless-steel-angles-supplier-india.html
- materials/stainless-steel-wire-mesh-supplier-india.html
- materials/stainless-steel-perforated-sheets-supplier-india.html

Location and export pages:
- locations.html
- locations/mumbai.html
- locations/chennai.html
- locations/ahmedabad.html
- locations/hyderabad.html
- export/uae.html
- export/saudi-arabia.html
- export/germany.html

Knowledge Hub pages:
- blog.html
- knowledge-hub-author.html
- blog/stainless-steel-304-vs-316-vs-316l.html
- blog/metal-rfq-checklist-for-buyers.html
- blog/inconel-monel-hastelloy-selection-guide.html

Technical, trust and conversion pages:
- technical-resources.html
- quality-documentation-support.html
- quotation.html
- contact.html
- company-profile.html
- registrations-compliance.html

Grade/specification pilot pages:
- materials/ss-316l-supplier-india.html
- materials/inconel-625-supplier-india.html
- materials/duplex-2205-supplier-india.html
- materials/api-5l-grade-b-pipe-supplier-india.html
- materials/astm-a335-p91-pipe-supplier-india.html

## Viewports and Capture Method

Viewport coverage:
- 1366 desktop
- 1280 laptop
- 768 tablet
- 390 mobile
- 360 narrow mobile

Automated screenshot and layout checks covered 123 rendered page/viewport combinations. All 42 sampled pages were checked at 1366 and 390 widths. Representative pages from each group were also checked at 1280, 768 and 360 widths.

Measured results:
- Horizontal overflow: 0
- Duplicate or missing H1 in sampled renders: 0
- Non-sticky header in sampled renders: 0
- Missing top rail icon set in sampled renders: 0
- Non-white footer background in sampled renders: 0

## Visual Status

Overall status: pass with future polish recommendations.

No P0 rescue batch is required before Batch 10. The site is visually stable enough to proceed, provided Batch 10 starts with a grade/specification page template polish gate and keeps visual QA in the loop.

## Strong Pages and Stable Areas

- industries.html: Batch 8R rescue is holding. The page now has stronger hierarchy, more controlled section flow and no urgent visual regression.
- materials.html and the sampled material family pages: strong current baseline with clear routing, premium hero treatment and readable sections.
- Product-form pages: RFQ flow is clearer after Batch 3, with stable desktop and mobile stacking.
- blog.html and sampled Knowledge Hub articles: strong buyer-resource feel, useful search/filter controls on the index and clean article readability.
- quotation.html, contact.html, company-profile.html, registrations-compliance.html and quality-documentation-support.html: acceptable conversion/trust baseline with no emergency visual issue.

## Rescue-Needed Pages

No page reviewed needs emergency rescue before Batch 10.

## Future Polish Candidates

These are not Batch 10 blockers, but they should be planned so the site keeps moving toward a more premium and less template-heavy feel.

| Area | Severity | Observation | Recommended Fix |
| --- | --- | --- | --- |
| Homepage | P2 | Strong brand signal, but the first viewport is busy because the market-watch band and multiple hero chips compete with the main message. | Simplify first-viewport hierarchy in a future homepage polish batch without changing SEO intent. |
| Location/export pages | P1/P2 | Safe and readable, but repetitive across cities/countries and visually text-heavy. | Add more differentiated routing, lighter section rhythm and clearer buyer-path hierarchy in a future location/export polish batch. |
| Technical resources | P1/P2 | Useful content, but table/resource density can feel heavy below the hero. | Improve table navigation, anchor flow and scan comfort while preserving real HTML tables. |
| Grade/specification pilot pages | P1 before mass rollout | Existing pilot pages are readable and safe, but template-heavy; bulk rollout should not copy the density without a visual polish pass. | Start Batch 10 with a polished grade/spec template pilot before expanding the page set. |
| Lower product-form sections | P2 | Stable and useful, though some support-card areas are dense. | Lighten supporting card rhythm in a future product-form refinement if time permits. |

## Batch 10 Safety Recommendation

Batch 10 may start only if it follows these constraints:

- Do not bulk-generate grade/spec pages from the current dense pilot pattern without first improving the template.
- Run subjective visual QA in addition to automated QA.
- Check at 1366, 1280, 768, 390 and 360 widths.
- Preserve public SEO URLs, H1 intent, titles, meta descriptions, canonicals, schema meaning and sitemap URLs unless the user explicitly approves a specific change.
- Keep all claims cautious and RFQ-focused.

## Claim Safety Review

No unsafe manufacturer, factory, stock, price, certification, client, project, rating, review or delivery guarantee claims were introduced. This review did not edit public website copy.

## QA

Baseline technical QA before this report was clean:

- qa:sitemap: passed. 261 sitemap URLs matched 261 local HTML pages; 0 missing; 0 extra; 0 duplicate URLs.
- qa:html: passed. 261 HTML pages checked; 0 invalid pages.
- qa:schema: passed. 261 HTML pages checked; 866 JSON-LD blocks; 0 invalid blocks.
- qa:accessibility: passed. 5 sampled pages; 0 violations.
- test:navigation: passed.
- qa:crawl: passed. 394 links scanned.
- qa:links: passed. 394 links scanned.
- qa:forbidden-claims: completed as review-only; no files rewritten.
- git diff --check: passed.

## Final Decision

Proceed to Batch 10 only after acknowledging the grade/spec template risk. There is no need for a separate emergency rescue batch first, but the next implementation batch must include visual judgment, not only automated technical validation.
