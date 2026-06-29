# Rubinox Codex SEO Plugin Review

Date: 2026-06-29
Reviewed project: https://github.com/AgriciDaniel/codex-seo
Local review folder: `C:\Users\Dell\Downloads\codex-seo-review`
Reviewed commit: `97c59bcdac3c9538bf0e3ae456c1e73aa387f85a`
Install decision: deferred. Do not install until the license conflict is clarified and the owner explicitly approves the license terms.

## Files Inspected

- `README.md`
- `LICENSE`
- `install.ps1`
- `.codex-plugin/plugin.json`
- `requirements.txt`
- `requirements-core.txt`
- `requirements-google.txt`
- `requirements-visual.txt`
- `requirements-report.txt`
- `requirements-ocr.txt`
- `scripts/bootstrap_environment.py`
- `scripts/verify_environment.py`
- `scripts/google_auth.py`
- `extensions/dataforseo/install.ps1`
- `extensions/firecrawl/install.ps1`
- repo-wide `.codex`, credential, API, DataForSEO, Google, Firecrawl, and Gemini references via `rg`

## License Review

The license is not clearly safe/free/open-source for Rubinox use.

Findings:

- `README.md` displays an MIT license badge and states that Codex SEO is released under MIT.
- `.codex-plugin/plugin.json` also declares `"license": "MIT"`.
- The actual root `LICENSE` file is a proprietary software license from Avalon Reset.
- The proprietary license says use is contingent on active membership in the copyright holder's community program.
- The proprietary license restricts copying, redistribution, publishing, sharing, derivative distribution, sublicensing, renting, lending, and competing use.

Conclusion: README/plugin metadata conflicts with the actual root license. Because the actual license is proprietary and membership-restricted, the plugin was not installed.

## What The Installer Would Install

`install.ps1` would:

- Resolve Python 3.10+ and Git.
- Use `CODEX_HOME` or default to `~/.codex`.
- Create or use `~/.codex/skills`.
- Create or use `~/.codex/agents`.
- Clone `https://github.com/AgriciDaniel/codex-seo` at ref `v1.9.6-codex.5` into a temporary folder.
- Remove existing Codex SEO skill directories under `~/.codex/skills` for `seo` and `seo-*` names.
- Remove existing `seo-*.md` and `seo-*.toml` agents under `~/.codex/agents`.
- Copy `skills/` directories into `~/.codex/skills/`.
- Copy `scripts/`, `schema/`, `pdf/`, `hooks/`, and `extensions/` into `~/.codex/skills/seo/`.
- Copy `requirements*.txt`, `CHANGELOG.md`, and `README.md` into `~/.codex/skills/seo/`.
- Copy TOML agent profiles into `~/.codex/agents/`.
- Create a Python virtualenv at `~/.codex/skills/seo/.venv/`.
- Upgrade pip, install core requirements, best-effort install optional dependency groups, optionally install Playwright Chromium, and run environment verification.

The installer writes outside the Rubinox repo, primarily under `~/.codex/skills`, `~/.codex/agents`, and the temporary clone directory. It does not appear to write Rubinox website files directly.

## Dependency Review

Core requirements:

- `beautifulsoup4`
- `requests`
- `lxml`
- `defusedxml`
- `Pillow`
- `urllib3`
- `validators`
- `Markdown`

Optional groups:

- Visual: `playwright`
- Reports: `matplotlib`, `weasyprint`, `openpyxl`
- Google APIs: `google-api-python-client`, `google-auth`, `google-auth-oauthlib`, `google-auth-httplib2`, `google-analytics-data`
- OCR: `rapidocr-onnxruntime`

The main bootstrap may install optional dependencies even when credentials are not configured. Playwright Chromium install can be skipped with `CODEX_SEO_SKIP_PLAYWRIGHT_BROWSER=1`.

## Credential And API Review

Core install:

- Does not require paid API credentials to copy skills and bootstrap local core workflows.
- Does not prompt for owner credentials in `install.ps1`.
- May install Google API client libraries as optional Python dependencies.

Optional integrations:

- Google API workflows use config under `~/.config/codex-seo/google-api.json`, OAuth token under `~/.config/codex-seo/oauth-token.json`, service account paths, API key environment variables, and GA4 property IDs.
- DataForSEO extension prompts for username/password and writes MCP settings into `~/.codex/settings.json`.
- Firecrawl extension prompts for an API key and writes MCP settings into `~/.codex/settings.json`.
- Gemini/nanobanana image workflow expects a Google AI API key and MCP settings.

These optional integrations should not be configured until the Rubinox owner approves accounts, costs, and credential storage outside the repo.

## Does It Need A Restart?

Yes. The README says to restart Codex after installation so newly installed skills and agents are discovered.

## Does It Need Paid APIs?

The core local skill suite appears usable without paid APIs, but several workflows are degraded or setup-required without credentials. DataForSEO, Firecrawl, Google API, GA4, and Gemini/nanobanana workflows require accounts, keys, OAuth, service accounts, or paid/credit-based access depending on the provider and command.

## DataForSEO, Google, Firecrawl, Gemini Optionality

- DataForSEO: optional extension for live SERP, keyword, backlinks, maps, merchant, content, and AI visibility data. Paid/credit-based.
- Google APIs: optional for Search Console, PageSpeed/CrUX, URL Inspection, Indexing API, GA4, and related reporting. Requires owner-controlled credentials.
- Firecrawl: optional extension for JS-rendered crawl and scrape workflows. API key/credits required.
- Gemini/nanobanana: optional image generation workflow. Requires Google AI API key/MCP setup.

## Recommended Decision

Do not install Codex SEO for Rubinox yet.

Reasons:

1. The actual root `LICENSE` is proprietary and membership-restricted.
2. The README and plugin manifest claim MIT, creating a license conflict.
3. The installer would modify `~/.codex/skills`, `~/.codex/agents`, create a Python virtualenv, and remove existing `seo-*` Codex SEO installs if present.
4. Optional integrations can write credentials into Codex settings and should be owner-approved separately.

Recommended next step: ask the project maintainer or owner to clarify the license conflict in writing. Install only if the license is corrected to an acceptable open-source license or Rubinox explicitly approves the proprietary/membership license terms.

## Install Status

Not installed.

Because installation was deferred:

- `~/.codex/skills/seo` was not created by this batch.
- `~/.codex/agents/seo-*.toml` was not installed by this batch.
- No Codex SEO verification script was run from an installed location.
- No credentials were added.
- No Rubinox repo files were modified by the installer.