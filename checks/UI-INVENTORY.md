# UI preservation inventory

- Presentation changes: `styles.css` only. Existing `index.html` edits retained byte-for-byte from this task's baseline.
- Runtime unchanged: `app.js`; no dependencies, routes, storage keys, default data, report text or handlers changed.
- Routes retained: student information; worklog overview + weeks 1–12; proposal; blogs overview/details; events overview/details; workshop overview/chapters; self-assessment; feedback; settings.
- Functions retained: bilingual switching/search; hierarchical sidebar; sequential navigation; student editing/avatar upload; worklog/task editors; proposal/editor/diagram upload; blog/event/workshop editors/photos; self-assessment; feedback; import/export/reset/print.
- Check: `python checks/preserve_content.py` checks app.js, index.html and all 112 report/static files against their pre-redesign SHA-256 values.
- Existing persistence hazards (not changed): constructor removes legacy localStorage keys; loadData replaces stored events 1/2 when name/photo predicates fail; clears className AWS092026; missing sections receive defaults; invalid/non-12-week storage falls back to defaults. Do not migrate or reset without a verified export.
- Print: existing all-section flow retained, scroll containers expanded and table/image clipping removed. Dynamic detail content remains governed by the existing renderer; JSON export is the full data archive.
- Browser/mobile/print preview verification is intentionally delegated to the parent agent.

## Subsequent content update

The hash baseline was refreshed after the explicitly requested three blog summaries, source URLs and diagrams were added. It now protects that reviewed release snapshot, not the pre-blog snapshot. Runtime persistence and routing were not modified.
