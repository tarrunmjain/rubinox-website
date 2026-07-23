# Rubinox Website Freeze V1

## Freeze Status

- Freeze date: 2026-07-23
- Final live baseline commit before D12C documentation: af0500fd7be4b3767048962eb9983da2f417e29e
- Final D12C documentation commit: recorded by Git history under `seo: finalize live QA and site freeze`
- Active local folder: `D:\Websites\Rubinox\rubinox-website-live`

## Final Live Site Baseline

- Public sitemap URLs: 634
- Local public HTML pages: 634
- JSON-LD blocks: 2352
- Invalid JSON-LD blocks: 0
- GA4: `G-JT5X5L5H07`
- Old GA4 ID absent: `G-CR18QYPS6C`
- D11C pages created: 240
- D12B pages created: 120
- D12C created pages: 0

## Protected Files

These files must remain untracked unless the owner explicitly changes their status:

- `CARD_ACCENT_STYLE_AUDIT.md`
- `RUBINOX_MASTER_PROJECT_STATUS.md`

## Final Documentation Paths

- `docs/design-system/RUBINOX_SITEWIDE_DESIGN_LOCK_V1.md`
- `docs/design-system/RUBINOX_DESIGN_FINGERPRINT.md`
- `docs/design-system/RUBINOX_FOOTER_LOCK_V1.md`
- `docs/design-system/RUBINOX_CARD_ACCENT_LOCK_V1.md`
- `docs/seo-final-live-qa-site-freeze-d12c.md`
- `docs/seo-search-engine-resubmission-d12c.md`
- `docs/seo-indexing-priority-d12c.csv`

## Frozen Areas

- Public URL architecture and sitemap structure.
- Final sitewide design system.
- Top bar, header and footer.
- SEO page architecture.
- Schema patterns.
- GA4 tracking.
- CNAME and GitHub Pages deployment compatibility.

## Allowed Changes After Freeze

- Critical broken-link fixes.
- Factual contact or regulatory updates.
- Security fixes.
- Verified indexing or technical corrections.
- Owner-approved content additions.

## Forbidden Without Owner Approval

- Bulk page generation.
- Redesign or new header/footer variants.
- URL removals, redirects or broad URL changes.
- Broad metadata rewrites.
- New city/country/material architecture.
- Unsupported role, stock, price, certification, approval, review, branch or project claims.

## Future Codex Startup Checklist

1. Use `D:\Websites\Rubinox\rubinox-website-live`.
2. Do not use the old C-drive folder.
3. Read this freeze file and the sitewide design lock.
4. Run `git status --short`.
5. Confirm the protected untracked files are untouched.
6. Keep temp, cache and screenshots on D drive.
7. Run relevant QA before and after edits.
8. Preserve public URLs, schema, sitemap and GA4 unless the task explicitly requires a correction.

## Rollback And Recovery

- Prefer `git log --oneline`, `git show` and targeted revert commits.
- Do not use destructive resets unless the owner explicitly approves.
- If a deployment fails at the GitHub Pages deploy step only, inspect the run and retry Pages by API only with approval.

## Deployment Verification

- Confirm local and remote `main` hashes.
- Confirm GitHub Pages run completes successfully.
- Verify homepage, sitemap, robots, the three hubs and representative pages on https://rubinoxmetal.com.

## Search Console And Bing Monitoring

- Use `docs/seo-search-engine-resubmission-d12c.md`.
- Use `docs/seo-indexing-priority-d12c.csv` for selective inspection.
- Do not create additional pages until indexing and performance data identifies a specific, validated gap.
