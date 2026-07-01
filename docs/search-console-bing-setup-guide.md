# Search Console And Bing Setup Guide

Date: 2026-07-01
Scope: owner setup guide for Rubinox measurement. No verification files, meta tags or DNS records were added in Batch 11A.

## Google Search Console Plan

Preferred property:

- Domain property for `rubinoxmetal.com`, verified through DNS.

Fallback property:

- URL-prefix property for `https://rubinoxmetal.com/`, verified by owner-approved HTML file, meta tag or Google Analytics association.

Owner steps:

1. Sign in to Google Search Console with the account that should own the property.
2. Add a domain property for `rubinoxmetal.com` if DNS access is available.
3. If DNS access is not available, add a URL-prefix property for `https://rubinoxmetal.com/`.
4. Provide the chosen verification method to the implementation batch.
5. After verification, submit `https://rubinoxmetal.com/sitemap.xml`.
6. Confirm sitemap discovery and indexing status after Google processes the file.

Repository rules:

- Do not commit placeholder verification files or fake meta tags.
- Commit an HTML verification file or meta tag only if the owner provides the exact token and approves that method.
- Do not store Google account credentials, OAuth secrets or service-account JSON in the repo.

## Bing Webmaster Tools Plan

Preferred route:

- Import the verified Google Search Console property into Bing Webmaster Tools after GSC is active.

Fallback routes:

- DNS verification.
- Owner-provided XML verification file.
- Owner-provided meta tag.

Owner steps:

1. Sign in to Bing Webmaster Tools with the account that should own the site.
2. Import from Google Search Console if the owner approves account linking.
3. If import is not preferred, choose DNS, XML file or meta-tag verification.
4. Provide only the approved verification value to the implementation batch.
5. Submit `https://rubinoxmetal.com/sitemap.xml` after verification.

Repository rules:

- Do not commit `BingSiteAuth.xml` without the exact owner-provided value.
- Do not add `msvalidate.01` meta tags without the exact owner-provided value.
- Do not commit account credentials or API keys.

## Post-Verification QA

After either platform is verified:

1. Confirm `robots.txt` still references `https://rubinoxmetal.com/sitemap.xml`.
2. Run local sitemap QA.
3. Submit or resubmit the sitemap in the verified platform.
4. Document the verification method in `docs/RUBINOX_OWNER_DATA_PENDING.md` without exposing secrets.
5. Wait for query and indexing data before making SEO decisions from the reports.

