# Rubinox Location and Export Rollout Batch 6B Report

Date: 2026-06-30

## Scope

Batch 6B improved the remaining existing public location and export pages not covered by Batch 5 or Batch 6A. No new public pages were created.

## Existing Page Counts

- Existing location HTML files under locations/: 50.
- Existing export HTML files under export/: 15.
- Sitemap URL count before Batch 6B: 261.
- Sitemap URL count after Batch 6B: 261.

## Pages Improved

### City / Location Pages
- locations/bhopal-mandideep.html
- locations/chakan-pimpri-chinchwad.html
- locations/dholera-sanand.html
- locations/greater-noida.html
- locations/haridwar-rudrapur.html
- locations/jodhpur-pali.html
- locations/kakinada.html
- locations/mysuru.html
- locations/nellore-krishnapatnam.html
- locations/salem.html
- locations/sriperumbudur-oragadam.html
- locations/thoothukudi.html
- locations/tiruchirappalli.html
- locations/tumakuru.html
- locations/vijayawada.html
- locations/zaheerabad.html

### Export Pages
- export/netherlands.html
- export/thailand.html
- export/vietnam.html
- export/usa.html

## Data-Only / Planned Locations Not Created

- Dahej
- Hazira
- Kochi
- Rourkela
- Chandigarh
- Baddi
- Morbi
- Sri Lanka
- Bangladesh
- Nepal
- South Africa

These rows remain planning data only. Batch 6B did not create HTML, sitemap entries, canonicals or internal navigation for them.

## Pages Still Deferred

- Existing public location/export pages still deferred: none.
- Planned/data-only location, state, product-location and export opportunities remain deferred until Search Console, enquiry history or owner-approved buyer value supports differentiated content.

## Data and Map Updates

- data/page-inventory.csv updated for the 20 improved existing pages.
- data/location-seo-map.csv updated for 21 Batch 6B city/export mapping rows, including cluster pages that map to more than one buyer location.
- data/location-seo-map.csv marks 11 selected planned/no-page examples as data-only planned with no public HTML created in Batch 6B.
- data/keyword-master-map.csv updated only for rows whose primary_url matches improved Batch 6B URLs.

## Wording Strategy

City pages use PAN India RFQ support from Mumbai and describe Rubinox as a stockist, supplier, importer, exporter and project supplier. Dealer wording appears only as buyer-search language and not as Rubinox positioning. Export pages use supplier and exporter-from-India wording for destination enquiries and avoid destination-country local presence claims.

## QA Status

- npm run qa:full: baseline attempt timed out after about 304 seconds with no useful output, so the fallback QA suite below was used.
- git diff --check: passed; only LF-to-CRLF working-copy warnings were printed.
- npm run qa:sitemap: passed. Sitemap URLs 261; local HTML pages 261; missing 0; extra 0; duplicate URLs 0.
- npm run qa:crawl: passed. 394 links scanned successfully.
- npm run qa:schema: passed. 261 HTML pages; 866 JSON-LD blocks; 0 invalid JSON-LD blocks.
- npm run qa:accessibility: passed. 5 configured pages checked; 0 violations.
- npm run test:navigation: passed.
- npm run qa:html: passed. 261 HTML pages checked; 0 invalid pages.
- npm run qa:links: passed. 394 links scanned successfully.
- npm run qa:pa11y: passed. 9/9 configured URLs passed within project thresholds.
- npm run qa:images:audit: passed with existing audit findings; missing image files 0 and original website images not modified.
- npm run qa:forbidden-claims: passed/no rewrites; 329 files scanned and 331 matches flagged for review.
- Targeted public-page sanity scan for the 20 edited HTML pages passed: one H1 per page, titles under 70 characters, three parseable JSON-LD blocks per page and no risky public-copy matches for local-office, stock, price, manufacturer, rating, testimonial or client-style claims.

## Visual QA Status

Passed. Playwright checked all 20 changed pages at 1366px and 390px widths, plus 7 representative location/export pages at 1366px, 1280px, 768px, 390px and 360px. Checks covered horizontal overflow, single H1, header/logo/footer presence, CTA links, FAQ count, text fit and nonblank screenshots. Failures: 0.

## Claim Safety Status

Passed. Public edited pages use stockist, supplier, importer, exporter and project supplier wording for city RFQs, and exporter-from-India wording for country/export RFQs. Dealer wording appears only as buyer-search wording in city FAQs/body copy. No fake local offices, branches, warehouses, local stock, pricing, certifications, clients, project references, reviews, ratings or delivery promises were added.
