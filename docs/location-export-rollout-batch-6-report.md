# Rubinox Location and Export Rollout Batch 6 Report

Date: 2026-06-29

## Scope

Batch 6A improved 25 existing city/location pages and 10 existing country/export pages. No new public pages were created.

## Existing Page Counts

- Existing location HTML files under locations/: 50.
- Existing export HTML files under export/: 15.
- Sitemap URL count before Batch 6A: 261.
- Sitemap URL count after Batch 6A: 261.

## Pages Improved

### City / Location Pages
- locations/navi-mumbai.html
- locations/thane.html
- locations/hyderabad.html
- locations/gurugram-manesar.html
- locations/noida.html
- locations/faridabad.html
- locations/ghaziabad.html
- locations/rajkot.html
- locations/vapi.html
- locations/ankleshwar.html
- locations/bharuch.html
- locations/kolkata-howrah-durgapur.html
- locations/coimbatore.html
- locations/visakhapatnam.html
- locations/nagpur.html
- locations/nashik.html
- locations/indore-pithampur.html
- locations/raipur.html
- locations/bhilai.html
- locations/jamshedpur.html
- locations/ludhiana.html
- locations/jaipur.html
- locations/chhatrapati-sambhajinagar-aurangabad.html
- locations/mangaluru.html
- locations/hosur.html

### Export Pages
- export/saudi-arabia.html
- export/oman.html
- export/qatar.html
- export/kuwait.html
- export/bahrain.html
- export/singapore.html
- export/malaysia.html
- export/australia.html
- export/uk.html
- export/germany.html

## Deferred Pages

- Existing lower-priority city pages not included in Batch 6A: bhopal-mandideep, chakan-pimpri-chinchwad, dholera-sanand, greater-noida, haridwar-rudrapur, jamnagar, jodhpur-pali, kakinada, mysuru, nellore-krishnapatnam, salem, sriperumbudur-oragadam, thoothukudi, tiruchirappalli, tumakuru, vijayawada, zaheerabad.
- Planned/data-only locations without existing public pages remain deferred: Dahej, Hazira, Kochi, Rourkela, Chandigarh, Baddi, Morbi and other roadmap candidates.
- Existing export pages deferred to Batch 6B: export/netherlands.html, export/thailand.html, export/vietnam.html, export/usa.html.
- Planned/data-only export markets without existing public pages remain deferred: Sri Lanka, Bangladesh, Nepal and South Africa.

## Data and Map Updates

- data/page-inventory.csv updated for the 35 improved existing pages.
- data/location-seo-map.csv updated for improved existing city/export rows.
- data/location-seo-map.csv corrected Chhatrapati Sambhajinagar / Aurangabad from a planned Aurangabad candidate to the existing local URL.
- data/keyword-master-map.csv updated only for rows whose primary_url matches improved Batch 6A URLs.

## Wording Strategy

City pages use PAN India RFQ support from Mumbai and describe Rubinox as a stockist, supplier, importer, exporter and project supplier. Dealer wording appears only as buyer-search language and not as Rubinox positioning. Export pages use exporter-from-India wording for destination enquiries and avoid destination-country local presence claims.

## QA Status

- git diff --check: passed.
- npm run qa:sitemap: passed. Sitemap URLs 261; local HTML pages 261; missing 0; extra 0; duplicates 0.
- npm run qa:html: passed. 261 HTML pages checked; 0 invalid pages.
- npm run qa:schema: passed. 261 HTML pages; 866 JSON-LD blocks; 0 invalid JSON-LD blocks.
- npm run qa:crawl: passed. 394 links scanned successfully.
- npm run qa:links: passed. 394 links scanned successfully.
- npm run qa:accessibility: passed. 5 configured pages checked; 0 violations.
- npm run test:navigation: passed.
- npm run qa:pa11y: passed. 9/9 configured URLs passed within project thresholds.
- npm run qa:images:audit: passed with existing baseline findings; missing image files 0 and original website images not modified.
- npm run qa:forbidden-claims: passed/no rewrites; matches flagged for review decreased from baseline 342 to 338.

## Visual QA Status

Passed. Playwright checked all 35 changed pages at 1366px and 390px widths, plus 10 representative location/export pages at 320px, 390px, 768px, 1366px and 1920px. Checks covered horizontal overflow, single H1, header/logo/footer presence, CTA links, FAQ layout, button/text fit and nonblank screenshots. Failures: 0.

## Claim Safety Status

Passed. Public edited pages use stockist, supplier, importer, exporter and project supplier wording for city RFQs, and exporter-from-India wording for country/export RFQs. Targeted public-page scans found no fake local branch/office, warehouse, stockyard, ready stock, guarantee, same-day, manufacturer, factory, mill, price, rating or client claims in the 35 edited pages.
