const TEAM_TARGET_M = 95;
const INDIV_TARGET_M = 85;

function getScoreBadgeClass(s) {
  if (s >= 90) return 'csb-high';
  if (s >= 75) return 'csb-mid';
  return 'csb-low';
}

function buildMetricsHTML(a) {
  const sc = a.cq >= 90 ? 'gold' : a.cq >= 80 ? 'green' : 'orange';
  return `
    <div class="mm"><div class="mm-val ${sc}">${a.cq}%</div><div class="mm-lbl">CQ Score</div></div>
    <div class="mm"><div class="mm-val teal">${a.callHandling}%</div><div class="mm-lbl">Call Handling</div></div>
    <div class="mm"><div class="mm-val teal">${a.processHandling}%</div><div class="mm-lbl">Process Handling</div></div>
    <div class="mm"><div class="mm-val white">${a.audits}</div><div class="mm-lbl">Audits</div></div>
    <div class="mm"><div class="mm-val ${a.ncf > 0 ? 'red' : 'green'}">${a.ncf}</div><div class="mm-lbl">NCF</div></div>
    <div class="mm"><div class="mm-val orange">${a.totalErrors}</div><div class="mm-lbl">Total Errors</div></div>`;
}

function buildModalBody(agentKey, highlightParam) {
  const a = AGENTS[agentKey];
  let html = '';

  const gap = INDIV_TARGET_M - a.cq;
  const gc = a.cq >= TEAM_TARGET_M ? 'bar-green' : a.cq >= 90 ? 'bar-gold' : a.cq >= INDIV_TARGET_M ? 'bar-green' : 'bar-orange';
  const gapText = gap > 0
    ? `${gap}% below individual target (${INDIV_TARGET_M}%)`
    : `✓ Individual target met · ${TEAM_TARGET_M - a.cq > 0 ? (TEAM_TARGET_M - a.cq) + '% to team target (' + TEAM_TARGET_M + '%)' : 'Team target met!'}`;
  const pctColor = a.cq >= TEAM_TARGET_M ? '#16a34a' : a.cq >= 90 ? '#b8860b' : a.cq >= INDIV_TARGET_M ? '#16a34a' : '#ea580c';

  html += `
    <div class="modal-sec-lbl">CQ Score</div>
    <div class="gauge-wrap">
      <div style="flex:1;">
        <div class="gauge-track">
          <div class="bar-fill ${gc}" style="width:${a.cq}%;height:100%;border-radius:6px;transition:width 1.2s cubic-bezier(.4,0,.2,1);"></div>
          <div class="gauge-target" style="left:${INDIV_TARGET_M}%;background:#f59e0b;" title="Individual Target ${INDIV_TARGET_M}%"></div>
          <div style="position:absolute;top:-2px;bottom:-2px;left:${TEAM_TARGET_M}%;width:2px;background:#dc2626;border-radius:2px;" title="Team Target ${TEAM_TARGET_M}%"></div>
        </div>
        <div class="gauge-labels">
          <span>0%</span>
          <span style="color:#f59e0b;font-weight:700;">Indiv. ${INDIV_TARGET_M}%</span>
          <span style="color:#dc2626;font-weight:700;">Team ${TEAM_TARGET_M}%</span>
          <span>100%</span>
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0;min-width:70px;">
        <div style="font-family:Georgia,serif;font-size:30px;font-weight:800;color:${pctColor};line-height:1;">${a.cq}%</div>
        <div style="font-size:10px;color:#8a7a60;margin-top:2px;">${gapText}</div>
      </div>
    </div>`;

  // Param breakdown — only params the team is actually scored/dinged on (ACTIVE_PARAMS from data.js)
  html += `<div class="modal-sec-lbl">Errors by Parameter</div><div class="param-mini-grid">`;
  ACTIVE_PARAMS.forEach(k => {
    const v = a.params[k] || 0;
    const hl = k === highlightParam;
    const color = PARAM_COLORS[k];
    html += `<div class="pmg-item${hl ? ' pmg-hl' : ''}">
      <div class="pmg-val" style="color:${v === 0 ? '#16a34a' : color};">${v === 0 ? '✓' : v}</div>
      <div class="pmg-lbl">${PARAM_LABELS[k]}</div>
    </div>`;
  });
  html += `</div>`;

  // AOIs
  if (a.aois.length) {
    html += `<div class="modal-sec-lbl">Areas of Improvement</div><div class="aoi-list">`;
    a.aois.forEach(aoi => {
      const c = PARAM_COLORS[aoi.cat];
      html += `<div class="aoi-item" style="border-left-color:${c};">
        <div class="aoi-cat" style="color:${c};">${aoi.label}</div>
        <div class="aoi-text">${aoi.text}</div>
      </div>`;
    });
    html += `</div>`;
  }

  // Cases
  html += `<div class="modal-sec-lbl">Audit Cases — ${a.audits} total</div>`;
  a.cases.forEach((c, i) => {
    const hl = highlightParam && a.paramCaseMap[highlightParam] && a.paramCaseMap[highlightParam].includes(i);
    const sbClass = getScoreBadgeClass(c.score);
    html += `<div class="case-card${hl ? ' case-hl' : ''}" id="case-${agentKey}-${i}">
      <div class="case-hd">
        <div class="case-query">${c.query}${hl ? ' <span class="case-flag">▶ Flagged</span>' : ''}</div>
        <span class="case-badge ${sbClass}">${c.score}%</span>
      </div>
      <div class="case-text">${c.comment}</div>
    </div>`;
  });

  // What to do better
  if (a.aois.length) {
    html += `<div class="modal-sec-lbl">What To Do Better</div>
      <div class="better-box">`;
    a.aois.forEach(aoi => {
      html += `<div class="better-item"><span class="better-arrow">▸</span>${aoi.text}</div>`;
    });
    html += `</div>`;
  }

  return html;
}

function openModal(agentKey, highlightParam) {
  const a = AGENTS[agentKey];
  if (!a) return;
  document.getElementById('m-name').textContent = a.name;
  document.getElementById('m-role').textContent = 'Presales Outbound Team · September 2026';
  document.getElementById('m-metrics').innerHTML = buildMetricsHTML(a);
  document.getElementById('m-body').innerHTML = buildModalBody(agentKey, highlightParam || null);
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  if (highlightParam) {
    setTimeout(() => {
      const first = document.querySelector('.case-hl');
      if (first) first.scrollIntoView({behavior:'smooth', block:'center'});
    }, 300);
  } else {
    document.getElementById('m-body').scrollTop = 0;
  }
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});
