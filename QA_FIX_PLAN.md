# QA Fix Plan

Created: 2026-06-23

Sources used:

- `TOOLING_STATUS.md`
- `tool-reports/accessibility-axe.json`
- `tool-reports/html-validate.json`
- `tool-reports/image-optimization.json`
- `tool-reports/external-links.csv`
- `tool-reports/sitemap-analysis.json`
- `tool-reports/schema-jsonld.json`

This is a planning document only. No website HTML, content, design, or image assets have been
changed as part of this plan.

## Current QA Baseline

- Axe accessibility checks: 5 violations across 5 representative pages.
- HTML validation: 75 invalid pages, 360 total errors, 0 warnings.
- Image optimization preview: 75 images analyzed, about 600.1 KB possible savings.
- External link check: 233 rows checked, 0 non-OK rows in the latest report.
- Sitemap analysis: 75 sitemap URLs, 75 local HTML pages, 0 missing, 0 duplicates.
- Schema validation: 149 JSON-LD blocks, 0 invalid.

## Priority Order

1. Fix the 5 Axe accessibility violations.
2. Apply safe automatic HTML validation fixes that do not alter design or meaning.
3. Review HTML validation fixes that may affect semantics, markup structure, or visible text.
4. Review image optimization previews before replacing any original assets.
5. Keep external link monitoring active; no link edits are needed from the latest report.

## 1. Safe Automatic Fixes

These are low-risk mechanical changes. They should still be done in a separate implementation
pass and verified with the full QA suite afterward.

### HTML Validation: Mechanical Markup Cleanup

Affected rule counts from `html-validate`:

- `doctype-style`: 75 occurrences.
- `no-implicit-button-type`: 73 occurrences.
- `no-trailing-whitespace`: 19 occurrences.
- `tel-non-breaking`: 3 occurrences.
- Some `no-raw-characters`: 22 occurrences, if the raw character is clearly inside text content.

Safe fixes:

- Change `<!doctype html>` to `<!DOCTYPE html>` across all HTML pages.
- Add `type="button"` to menu toggle buttons and any non-submit buttons.
- Remove trailing whitespace in HTML files.
- Replace spaces inside displayed telephone numbers with non-breaking spaces only where the validator flags telephone formatting.
- Encode raw ampersands in visible text as `&amp;` when it does not change displayed meaning.

Why these are safe:

- They should not change page layout, content meaning, visual style, SEO targeting, or URLs.
- They reduce validator noise and make later review-before-fixing items easier to isolate.

Verification after fix:

- Run `pnpm run qa:html`.
- Run `pnpm run qa:crawl`.
- Run `pnpm run test:navigation`.

### External Link Monitoring

Latest report:

- 233 checked rows.
- 0 non-OK rows.

Safe action:

- Keep the existing `qa:external-links` script as a recurring pre-release check.
- Do not edit URLs right now.

Verification:

- Run `pnpm run qa:external-links` before releases.
- Treat future 403, 429, timeout, or redirect changes as review-needed rather than automatic URL edits.

## 2. Review-Before-Fixing Items

These items are actionable, but they can affect accessibility, semantics, design, image quality,
or third-party integrations. They should be reviewed before implementation.

### Axe Accessibility: 5 Violations

#### A11Y-1: Home Page Iframe Missing Accessible Name

Report:

- Page: `/`
- Rule: `frame-title`
- Impact: serious
- Nodes: 1

Likely source:

- The embedded Google Maps or market widget iframe on the home page.

Recommended fix:

- Add a concise `title` attribute to the iframe, such as `title="Rubinox Metal and Alloys location map"` or a similarly accurate label.

Review needed because:

- The iframe purpose should be confirmed before naming it.
- If the iframe is third-party generated, the fix may need to target wrapper markup or initialization code.

Verification:

- Run `pnpm run qa:accessibility`.
- Check the home page visually to confirm the iframe still renders.

#### A11Y-2: Quotation Page Color Contrast

Report:

- Page: `/quotation.html`
- Rule: `color-contrast`
- Impact: serious
- Nodes: 4

Recommended fix:

- Identify the exact low-contrast text nodes from the Axe report.
- Adjust foreground or background colors only enough to meet WCAG AA contrast.

Review needed because:

- This can alter the visual design.
- Color adjustments should preserve the Rubinox brand feel and page hierarchy.

Verification:

- Run `pnpm run qa:accessibility`.
- Run a visual check on desktop and mobile.

#### A11Y-3: Industries Page Color Contrast

Report:

- Page: `/industries.html`
- Rule: `color-contrast`
- Impact: serious
- Nodes: 3

Recommended fix:

- Identify the low-contrast text nodes.
- Adjust text or background color with the smallest design-safe change.

Review needed because:

- This is a visual design change.
- It should be coordinated with quotation page contrast fixes for consistency.

Verification:

- Run `pnpm run qa:accessibility`.
- Run a visual check on desktop and mobile.

#### A11Y-4: Stainless Steel Page Landmark Region

Report:

- Page: `/materials/stainless-steel.html`
- Rule: `region`
- Impact: moderate
- Nodes: 1

Recommended fix:

- Ensure all main page content is contained in semantic landmarks.
- Prefer wrapping the primary content in `<main id="main-content">` or correcting existing landmark placement.

Review needed because:

- The page already has repeated layout patterns across material pages.
- A fix may need to be applied consistently to many similar pages, not just this sample page.

Verification:

- Run `pnpm run qa:accessibility`.
- Check related material pages if applying the pattern broadly.

#### A11Y-5: SS 304 Page Landmark Region

Report:

- Page: `/materials/ss-304-supplier-india.html`
- Rule: `region`
- Impact: moderate
- Nodes: 1

Recommended fix:

- Same as A11Y-4: correct landmark structure for generated or repeated material page layouts.

Review needed because:

- This likely indicates a repeated template issue across grade pages.
- The fix should be planned as a template-pattern cleanup rather than a one-off edit.

Verification:

- Run `pnpm run qa:accessibility`.
- Spot-check several grade pages.

### HTML Validation: Semantic Markup Changes

Affected rule counts:

- `prefer-native-element`: 163 occurrences.
- `aria-label-misuse`: 3 occurrences.
- `element-required-attributes`: 1 occurrence.
- `attribute-allowed-values`: 1 occurrence.
- Some `no-raw-characters`: 22 occurrences, when inside URLs, attributes, scripts, or schema.

Recommended fixes:

- Replace `div role="navigation"` with native `<nav>` elements where appropriate.
- Correct ARIA label usage only after confirming the intended accessible name.
- Add missing required attributes once the affected element is identified.
- Correct invalid attribute values after checking browser behavior and intent.
- Treat raw character fixes inside scripts, URLs, JSON-LD, or attributes carefully.

Review needed because:

- Navigation and ARIA changes affect accessibility semantics.
- Incorrect changes can make accessibility worse despite satisfying a validator.
- The same markup patterns repeat across 75 pages, so a broad edit should be tested carefully.

Verification:

- Run `pnpm run qa:html`.
- Run `pnpm run qa:accessibility`.
- Run `pnpm run test:navigation`.
- Run `pnpm run qa:crawl`.

### Image Optimization Savings

Latest image report:

- Images analyzed: 75.
- Original total: 7411.3 KB.
- Optimized preview total: 6811.3 KB.
- Potential savings preview: 600.1 KB.

Top opportunities:

- `assets/rubinox-social-preview-2026.jpg`: about 142.6 KB savings.
- `apple-touch-icon.png`: about 30.3 KB savings.
- `favicon-192x192.png`: about 30.3 KB savings.
- `assets/grade-super-duplex-2507.webp`: about 12.6 KB savings.
- `assets/grade-hastelloy-c-22.webp`: about 11.8 KB savings.
- `assets/form-coils.webp`: about 11.8 KB savings.
- `assets/form-plates.webp`: about 11.8 KB savings.
- `assets/mat-carbon-steel.webp`: about 11.6 KB savings.

Recommended approach:

- First review optimized previews in `tool-reports/optimized-assets-preview/`.
- Compare original and optimized images visually before replacing any production assets.
- Prioritize the social preview JPG and duplicate large icon PNGs first.
- Keep filenames and dimensions stable if assets are replaced, so website HTML does not need to change.

Review needed because:

- Image optimization can introduce visible quality loss.
- Social preview images must remain sharp for sharing.
- Favicons and touch icons should remain crisp on high-density screens.

Verification:

- Run `pnpm run qa:images`.
- Run `pnpm run test:lighthouse`.
- Visually inspect key pages and social preview asset.

## 3. Do-Not-Touch Items

These should not be changed during the QA fix pass unless the user explicitly asks.

### Website Content and SEO Copy

Do not touch:

- Product descriptions.
- Grade descriptions.
- H1 titles.
- Meta titles and descriptions.
- Keyword targeting.
- RFQ copy.
- Company positioning.

Reason:

- The requested fixes are QA/technical quality fixes, not content rewrites.
- SEO copy changes should be handled in a separate SEO/content pass.

### Website Design and Visual System

Do not touch without approval:

- Brand colors, except reviewed contrast fixes.
- Layout, spacing, card style, typography, hero composition, or navigation design.
- Image choices or cropping, except reviewed optimization replacement.

Reason:

- The user explicitly requested no design/content changes yet.
- Contrast fixes should be the only design-adjacent exception, and those require review.

### Production URLs and Contact Links

Do not change right now:

- `https://rubinoxmetal.com/...` canonical and schema URLs.
- WhatsApp link `https://wa.me/919363193755`.
- Email links for `tarun@rubinoxmetal.com`.
- Social profile links.
- Google Maps links.

Reason:

- Latest external link report shows 0 non-OK rows.
- URL changes can affect SEO, schema, analytics, and buyer contact behavior.

### Schema and Sitemap

Do not change right now:

- `sitemap.xml`.
- JSON-LD schema blocks.
- Canonical URLs.

Reason:

- Sitemap analysis is clean.
- Schema validation shows 149 JSON-LD blocks and 0 invalid blocks.

### Original Images

Do not overwrite:

- Files under `assets/`.
- Root favicons, logo, touch icons, and social preview image.

Reason:

- Optimization previews need visual review first.
- Original assets are production source files.

## Suggested Implementation Sequence

### Pass 1: Safe Mechanical HTML Fixes

Scope:

- `doctype-style`.
- `no-implicit-button-type`.
- `no-trailing-whitespace`.
- Clear text-only `no-raw-characters`.
- Telephone non-breaking spaces.

Expected result:

- Large reduction in HTML validation errors with minimal visual or semantic risk.

### Pass 2: Accessibility Fixes

Scope:

- Add iframe title on home page after confirming iframe purpose.
- Fix color contrast on quotation and industries pages after reviewing exact elements.
- Correct landmark regions on material/grade page templates.

Expected result:

- Axe representative-page violations reduced from 5 to 0.

### Pass 3: Semantic HTML Review

Scope:

- Native `<nav>` replacements.
- ARIA label corrections.
- Required/invalid attribute corrections.

Expected result:

- Further HTML validation reduction and stronger accessibility semantics.

### Pass 4: Image Optimization Review

Scope:

- Compare optimized previews against original images.
- Replace only approved assets.

Expected result:

- Lower asset weight without visual quality loss.

### Pass 5: Monitoring

Scope:

- Keep `qa:external-links`, `qa:sitemap`, `qa:schema`, and `qa:crawl` as pre-release checks.

Expected result:

- Continued protection against broken links, sitemap drift, schema regressions, and crawler issues.

## Verification Checklist for Any Future Fix Pass

Run after each implementation pass:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:sitemap
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:crawl
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:accessibility
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:schema
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:html
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run test:navigation
```

Run for image-specific changes:

```powershell
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run qa:images
C:\Users\Dell\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\pnpm.cmd run test:lighthouse
```
