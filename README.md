# CQ Dashboard — Presales Outbound · September 2026

Interactive quality-audit dashboard for the Presales Outbound team, built from September 2026 audit data.

## Files
- `index.html` — the dashboard page (open this, or serve the folder)
- `data.js` — all agent/audit data (`AGENTS`, `PARAM_LABELS`, `PARAM_COLORS`, `PARAM_ORDER`, `ACTIVE_PARAMS`)
- `charts.js` — Chart.js visualizations, derived dynamically from `data.js`
- `modal.js` — agent detail modal (click any row/parameter to open)
- `logo_full.png`, `logo_icon.png` — brand assets

## To publish on GitHub Pages
1. Create a new repo (e.g. `presales-outbound-cq-dashboard-sept`) and push these files to the root (or a `docs/` folder).
2. In repo Settings → Pages, set the source branch/folder.
3. Your dashboard will be live at `https://<username>.github.io/<repo>/`.

## Notes on this month's data
- Source: `_CES_Dashboard_Combined_-_Presales_-_Sheet22.csv` (82 audits, 16 agents).
- Same 6-parameter audit form as the other September cycles (Opening, Probing, Sales Closure, Soft Skills, Closing, Follow Up) with a single `CQ Score` per audit, rounded half-up to match your summary image.
- Team results: **88% CQ**, 82 audits, **0 NCFs** — the only team this cycle with a clean sheet.
- **No discrepancies** — audit counts, NCF counts and CQ scores matched your summary image for all 16 agents.
- **Data cleanup**: `Nivedita_M` had a stray tab character at the end of her name in the export; it was trimmed so her audits group correctly.
- **Small samples**: 15 agents were audited only 5 times each (Yaseen_S: 7), so one audit can move a score by several points. Rankings are worth reading with that in mind.
- 12 of 16 agents cleared the 85% individual target; 2 (Dorothy_A 97%, Rahulyadav_P 95%) also cleared the 95% team target. Below the individual target: Jyotsna_B 82%, Divya_K 81%, Rahul_M 81%, Vinesh_S 79%.
- **Soft Skills** drove 51 of the 100 flagged errors (51%), followed by Probing (19) and Sales Closure (18).
- Case comments come from each parameter's `Attribute Comments` column; flagged rows without a logged comment are labeled "No written remark logged for this audit — flagged on: [Parameter]" rather than invented.
