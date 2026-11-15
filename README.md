# AWS Worklog FCAJ

### Lê Công Luyến · AWS First Cloud AI Journey

A bilingual internship portfolio documenting weekly progress, technical articles, community events, a workshop, and personal reflections throughout the AWS First Cloud AI Journey program.

**[View the live report](https://nitaxiso.github.io/aws-worklog-fcaj/)** · **[Explore events & community activities](https://nitaxiso.github.io/aws-worklog-fcaj/#/events)**

## Live website

| Destination | Public URL |
| --- | --- |
| Full internship report | https://nitaxiso.github.io/aws-worklog-fcaj/ |
| Events & community activities | https://nitaxiso.github.io/aws-worklog-fcaj/#/events |

The report is hosted on **GitHub Pages** and can be viewed without running a local server. Stopping localhost or shutting down the development computer does not stop the public website. The `#/events` fragment opens the events view directly; navigation is handled in the browser.

Readers can switch between **Vietnamese and English**, browse twelve weekly worklogs, read three technical blog articles, and explore event reports and workshop materials. Planned activities remain labeled as planned rather than presented as completed achievements.

## Technology

The deployed application uses **native HTML, CSS and JavaScript**, with repository Markdown as its content source. There is no React, Hugo, application backend, database, or compilation step. GitHub Actions publishes the static repository to GitHub Pages.

## Run locally

Use Python 3 to serve the repository root:

```sh
python -m http.server 8000
```

Open http://localhost:8000. Use an HTTP server rather than opening HTML with `file://`, because the application fetches Markdown. Alternatively, `npm start` runs `npx serve -l 3000 .` and may download the server package; no npm install is required for the Python option.

## Architecture

- `index.html`: entry point and native UI assets.
- `static/css/fcaj-port.css`: responsive presentation and themes.
- `static/report-runtime.js`: explicit Markdown path manifest, JSON frontmatter parsing, report assembly and safe article rendering.
- `static/fcaj-port.js`: hash routes, VI/EN navigation, search, article reader and image viewer.
- `content/`: authoritative report content, structured metadata and supporting images.
- `checks/`: dependency-free Node.js and Python checks.

Report content is read from repository files, not browser report storage. The site provides no editor, import workflow or report-writing API. Existing browser report data is not loaded, overwritten or removed. Display preferences may be stored separately. The settings view provides a read-only export of repository report data.

## Edit content

Use `_index.vi.md` for Vietnamese and `_index.md` for English in the same directory. Preserve the YAML frontmatter delimiters. Fields beginning `report_` contain **JSON values on one line**, not arbitrary YAML; keep stable IDs, ordering and unrelated fields intact. Structured views use these fields, while the full blog reader displays the selected language's Markdown body. Update both representations when editing article titles or summaries.

| Section | Directory |
| --- | --- |
| Profile | `content/` |
| Twelve weekly worklogs | `content/1-Worklog/` |
| Proposal | `content/2-Proposal/` |
| Three blog articles | `content/3-BlogsPosted/` |
| Event reports and evidence | `content/4-EventParticipated/` |
| Workshop chapters | `content/5-Workshop/` |
| Self-evaluation | `content/6-Self-evaluation/` |
| Feedback | `content/7-Feedback/` |

Workshop prerequisites live in `content/5-Workshop/5.2-Prerequisite/`; the interface endpoint step lives in `content/5-Workshop/5.4-S3-onprem/5.4.2-create-interface-endpoint/`. Directory spelling does not change numbered UI routes. Keep relative image URLs valid and place evidence beside its content or in the existing static asset groups. Source-document links remain in article Markdown for provenance but are hidden in the article UI.

For new report documents, add the matching language paths to `reportPaths` in `static/report-runtime.js`; a new section or additional article may also require router and index updates. Do not mark plans as completed or invent publication links, attendance, measurements or missing evidence.

## Checks

Run from the repository root with Node.js and Python 3:

```sh
node --check static/report-runtime.js
node --check static/fcaj-port.js
node checks/blog_articles.cjs
node checks/fcaj_port.cjs
node checks/ui_fcaj.cjs
python checks/preserve_content.py
```

The preservation check compares against a reviewed SHA-256 baseline; intentional edits require a scoped baseline review, not a blanket refresh. Historical migration parity can be checked with `node checks/report_migration.cjs <external-recovery-directory>` when the original recovery evidence is available; it is not a standalone fresh-clone check. Review rendered VI/EN pages, links, diagrams, mobile layout, keyboard navigation and console/network errors before publishing.

## Deploy to GitHub Pages

The existing GitHub Actions workflow deploys the repository directly on pushes to `main` or `master`, or through manual workflow dispatch. In repository **Settings > Pages**, select **GitHub Actions** as the source. The workflow uploads the repository root and deploys it with the official Pages actions; there is no Hugo or compilation step. Commit and push reviewed changes only when ready to publish. Because the root is uploaded, keep private data, credentials and recovery files outside the repository.

## Current limitations

- JavaScript and successful Markdown fetches are required; there is no server-rendered fallback.
- Blog Markdown supports the headings, paragraphs, emphasis, lists, links and diagrams used by the current articles, not the entire Markdown specification. Raw HTML is escaped and non-HTTP(S) links are rejected.
- Search covers report navigation and titles, not a full-text article index.
- Some historical workshop image references remain unresolved; missing images are not fabricated.
- Report text, publication status, event evidence and workshop outcomes require human review; a rendered page does not establish FCAJ acceptance or completion.
- Google Fonts require external network access; system fallbacks remain available.

## References

- [FCAJ project requirements](https://hcm-rules.awsfcaj.com/project)
- [Workshop structure reference](https://workshop-sample.awsfcaj.com/1-worklog/)
- [Bilingual workshop template reference](https://github.com/thienluhoan/fcj-workshop-template)
