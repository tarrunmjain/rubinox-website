
# Rubinox Batch QA Checklist

Date: 2026-06-29
Scope: required checklist for future Rubinox website batches.

## Before Editing

- Confirm active folder: C:\Users\Dell\OneDrive\Documents\rubinox-website-live
- Run git status --short.
- Run git branch and confirm the intended branch.
- Run git pull origin main.
- Confirm the working tree is clean except known pre-existing untracked reports, if still present:
  - CARD_ACCENT_STYLE_AUDIT.md
  - RUBINOX_MASTER_PROJECT_STATUS.md
- Do not stage unrelated untracked files unless inspected and intentionally included.
- Run baseline QA:
  - npm.cmd run qa:sitemap
  - npm.cmd run qa:crawl
  - npm.cmd run qa:schema
  - npm.cmd run qa:accessibility
  - npm.cmd run test:navigation
  - git diff --check
- For visual work, read RUBINOX_SITE_WIDE_DESIGN_RULES.md and docs/site-wide-design-analysis.md first.
- For SEO work, read docs/RUBINOX_SEO_DECISION_LOG.md first.
- For trust/contact changes, read docs/RUBINOX_OWNER_DATA_PENDING.md first.

## During Editing

- Keep edits scoped to the requested files.
- Do not change public SEO URLs unless explicitly approved.
- Do not change H1, title, meta description, canonical, schema or sitemap unless the task requires it.
- Do not describe Rubinox as a manufacturer.
- Do not add fake certifications, stock promises, prices, clients, projects, ratings, branches, warehouses, factories or delivery guarantees.
- Use cautious language such as available on request, where applicable and as per customer requirement.
- Keep public implementation, docs, tooling and data changes in separate batches when possible.

## After Editing

- Run npm.cmd run qa:sitemap.
- Run npm.cmd run qa:crawl.
- Run npm.cmd run qa:schema.
- Run npm.cmd run qa:accessibility.
- Run npm.cmd run test:navigation.
- Run npm.cmd run qa:html where relevant.
- Run git diff --check.
- Run a forbidden phrase scan on changed public HTML where relevant.
- Check rendered pages at 1366, 1280, 768, 390 and 360 widths for visual work.
- Check WhatsApp, email, phone and quotation links on touched pages.
- Check one H1 per touched page.
- Check no manufacturer/factory/stock/price/certification drift on touched pages.
- Confirm git diff --name-only includes only intended files.
- Confirm no public website pages changed in documentation-only batches.
- Commit only intended files.

## Commit Discipline

- Stage exact file paths.
- Do not stage known pre-existing untracked reports unless the task explicitly includes them.
- Use clear commit messages by batch type, for example:
  - docs: add Rubinox master roadmap and growth control system
  - seo: clean legacy HTML validation issues
  - design: polish homepage buyer journey
