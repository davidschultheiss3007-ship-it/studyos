/* ══════════════════════════════════════════════════════════════════════
   StudyOS v3 · core.js · PASS A (nach Refactor)
   ──────────────────────────────────────────────────────────────────────
   Daten ausgelagert nach data/_registry.js + data/<modul>.js
   Erwartet beim Start: window.MODULES, window.QUESTIONS, window.FULL_CONTENT

    1. Legacy CSS Injection      — Styles für FULL_CONTENT HTML
    2. (Daten in data/-Files)
    3. Store                     — LocalStorage-Wrapper
    4. Util                      — esc, slug, dom helpers
    5. BlockRenderer             — typisierte Content-Blöcke
    6. Router                    — Hash-basiert, Deep-Linking
    7. App                       — Shell, Sidebar, Topbar, Cmd-K, Overlay
    8. Views                     — Home, Modules, Module, Topic, Subtopic, FullNotes, Learn, Progress
    9. Notes-Layout-Styles
   10. Init
   ══════════════════════════════════════════════════════════════════════ */
'use strict';

/* ── Aliase auf globale Daten (aus data/-Files geladen) ── */
const MODULES      = window.MODULES;
const QUESTIONS    = window.QUESTIONS;
const FULL_CONTENT = window.FULL_CONTENT;

/* ── 1. Legacy CSS für FULL_CONTENT ── */
(function () {
  const s = document.createElement('style');
  s.id = 's-legacy';
  s.textContent = `
    .note-page{padding:0}
    .note-page h3{font-family:var(--font-read);font-size:24px;font-weight:600;letter-spacing:-.02em;margin:0 0 10px;color:var(--text)}
    .note-page h4{font-family:var(--font-read);font-size:19px;font-weight:600;margin:22px 0 8px;color:var(--text)}
    .note-page p,.note-page li{color:var(--text-2);line-height:1.7;font-size:15.5px}
    .note-page ul,.note-page ol{margin:8px 0 0;padding-left:20px;color:var(--text-2)}
    .note-page li{margin:4px 0}
    .note-formula{font-family:var(--font-mono);font-size:15px;font-weight:500;background:rgba(116,215,255,.07);border:1px solid rgba(116,215,255,.2);padding:12px 16px;border-radius:12px;margin:12px 0;color:var(--text);overflow-x:auto;display:block;text-align:center}
    .note-callout{border-left:3px solid var(--acc-1);background:var(--acc-1-soft);padding:13px 16px;border-radius:12px;color:var(--text-2);line-height:1.65;font-size:14.5px;margin:14px 0}
    .note-callout b,.note-callout strong{color:var(--text)}
    .note-warning{border-left-color:var(--warn)!important;background:var(--warn-soft)!important}
    .note-table{overflow-x:auto;border:1px solid var(--line);border-radius:14px;margin:14px 0}
    .note-table table{border-collapse:collapse;width:100%;min-width:520px}
    .note-table th,.note-table td{padding:11px 14px;border-bottom:1px solid var(--line);text-align:left;font-size:13.5px;line-height:1.55;vertical-align:top}
    .note-table th{font-family:var(--font-mono);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--text-3);background:rgba(255,255,255,.025)}
    .note-table tr:last-child td{border-bottom:0}
    .note-table tr:hover td{background:rgba(116,215,255,.03)}
    .note-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:14px 0}
    .note-card{background:rgba(255,255,255,.035);border:1px solid var(--line);border-radius:14px;padding:14px}
    .note-card b{display:block;font-weight:650;color:var(--text);margin-bottom:6px;font-family:var(--font-ui)}
    .note-card p{margin:0;font-size:14px;color:var(--text-2);line-height:1.55}
    html[data-theme=light] .note-formula{background:rgba(9,132,255,.06);border-color:rgba(9,132,255,.18)}
    html[data-theme=light] .note-table th{background:rgba(16,24,39,.025)}
    html[data-theme=light] .note-card{background:#f7f9fd}
    @media(max-width:640px){.note-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(s);
})();


/* ── 2./3./4. Daten (FULL_CONTENT, MODULES, QUESTIONS) ──────────────────
   Ausgelagert nach data/_registry.js + data/<modul>.js
   Werden über window.* alias konsumiert (siehe oben).
   ──────────────────────────────────────────────────────────────────── */

/* ── 5. STORE ─────────────────────────────────────────────────────────── */
const Store = (() => {
  const KEY = 'studyos';
  let _c = null;
  const load = () => { if (_c) return _c; try { _c = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { _c = {}; } return _c; };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(_c)); } catch {} };
  function get(p, fb=null) { const ps=p.split('.'); let cur=load(); for (const k of ps) { if (cur==null||typeof cur!=='object') return fb; cur=cur[k]; } return cur??fb; }
  function set(p, v) { const ps=p.split('.'); let obj=load(); for (let i=0;i<ps.length-1;i++) { if (typeof obj[ps[i]]!=='object'||obj[ps[i]]==null) obj[ps[i]]={}; obj=obj[ps[i]]; } obj[ps[ps.length-1]]=v; save(); }

  const markRead = (mid,tid,sid) => { set(`progress.${mid}.${tid}.${sid}`, true); dispatchEvent(new CustomEvent('studyos:progress')); };
  const isRead   = (mid,tid,sid) => !!get(`progress.${mid}.${tid}.${sid}`);
  const topicProgress = (mid,tid) => {
    const t = MODULES.find(m=>m.id===mid)?.topics.find(t=>t.id===tid);
    if (!t) return 0;
    const done = t.subtopics.filter(s=>isRead(mid,tid,s.id)).length;
    return Math.round(done / t.subtopics.length * 100);
  };
  const moduleProgress = (mid) => {
    const m = MODULES.find(m=>m.id===mid); if (!m) return 0;
    let total=0, done=0;
    m.topics.forEach(t => t.subtopics.forEach(s => { total++; if (isRead(mid,t.id,s.id)) done++; }));
    return total ? Math.round(done/total*100) : 0;
  };

  const getTheme = () => get('settings.theme', 'dark');
  const setTheme = (t) => { set('settings.theme', t); document.documentElement.dataset.theme = t; };

  function updateStreak() {
    const today = new Date().toDateString();
    const last  = get('streak.last', '');
    if (last === today) return;
    const yest = new Date(Date.now()-86400000).toDateString();
    set('streak.days', last===yest ? get('streak.days',0)+1 : 1);
    set('streak.last', today);
  }
  const getStreak = () => get('streak.days', 0);

  return { get, set, markRead, isRead, topicProgress, moduleProgress, getTheme, setTheme, updateStreak, getStreak };
})();

/* ── 6. UTIL ──────────────────────────────────────────────────────────── */
const U = {
  esc: (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
  pad: (n) => String(n).padStart(2, '0'),
  $:  (sel, root=document) => root.querySelector(sel),
  $$: (sel, root=document) => [...root.querySelectorAll(sel)],
  icon: (id, cls='') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`,
  pb:   (pct) => `<div class="progress"><div class="progress__bar" style="width:${pct}%"></div></div>`,
  find: {
    mod:    (mid) => MODULES.find(m => m.id === mid),
    topic:  (mid, tid) => U.find.mod(mid)?.topics.find(t => t.id === tid),
    sub:    (mid, tid, sid) => U.find.topic(mid, tid)?.subtopics.find(s => s.id === sid)
  }
};

/* ── 7. BLOCK RENDERER ────────────────────────────────────────────────── */
/* Generischer Dispatcher für typisierte Content-Blöcke. Erweiterbar:
   neue Block-Typen einfach als weitere Methode hinzufügen.            */
const BlockRenderer = {
  text:       (b) => `<p class="notes__p">${b.content}</p>`,
  list:       (b) => `${b.ordered?'<ol':'<ul'} class="notes__list">${b.items.map(i=>`<li>${i}</li>`).join('')}${b.ordered?'</ol>':'</ul>'}`,
  definition: (b) => `<div class="block-definition"><p class="block-definition__term">${U.esc(b.term||'Definition')}</p><p class="block-definition__body">${b.content}</p></div>`,
  formula:    (b) => `<div class="block-formula"><span>${b.latex}</span>${U.icon('function','block-formula__icon')}</div>`,
  merksatz:   (b) => `<div class="block-merksatz">${b.content}</div>`,
  beispiel:   (b) => `<div class="block-beispiel"><span class="block-beispiel__label">${U.esc(b.label||'Beispiel')}</span><div>${b.content}</div></div>`,
  callout:    (b) => `<div class="block-callout block-callout--${b.variant||'info'}">${b.content}</div>`,
  table:      (b) => `<div class="block-table"><table>${b.headers?`<thead><tr>${b.headers.map(h=>`<th>${U.esc(h)}</th>`).join('')}</tr></thead>`:''}<tbody>${(b.rows||[]).map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`,
  html:       (b) => b.raw,

  /* Dispatcher — Blocks-Array → HTML */
  renderBlocks(blocks=[]) {
    return blocks.map(b => (this[b.type] || this._unknown)(b)).join('');
  },
  _unknown: (b) => `<p style="color:var(--text-3);font-style:italic">[Unbekannter Block-Typ: ${U.esc(b.type)}]</p>`,

  /* Hauptmethode: rendert ein komplettes Subtopic.
     Priorität: blocks[] > legacyKey > Placeholder.                   */
  renderSubtopic(sub) {
    if (Array.isArray(sub.blocks) && sub.blocks.length) {
      return `<div class="notes__body">${this.renderBlocks(sub.blocks)}</div>`;
    }
    if (sub.legacyKey && FULL_CONTENT[sub.legacyKey]) {
      return FULL_CONTENT[sub.legacyKey];
    }
    return `<div class="notes__empty"><p style="color:var(--text-3);font-style:italic">Für dieses Unterthema ist noch kein Inhalt hinterlegt.</p></div>`;
  }
};

/* ── 8. ROUTER ────────────────────────────────────────────────────────── */
const Router = (() => {
  const routes = [];
  const register = (pattern, handler) => routes.push({ pattern, handler });
  function dispatch() {
    const path = (location.hash || '#/').replace(/^#\/?/, '');
    Store.set('last', '#/' + path);
    for (const r of routes) {
      const m = path.match(r.pattern);
      if (m) { try { r.handler(...m.slice(1)); } catch(e){ console.error(e); Views.home(); } return; }
    }
    Views.home();
  }
  const navigate = (hash) => { if (location.hash === hash) dispatch(); else location.hash = hash; };
  const init = () => { window.addEventListener('hashchange', dispatch); dispatch(); };
  return { register, dispatch, navigate, init };
})();

/* ── 9. APP (Shell, Navigation, Overlay, Cmd-K) ───────────────────────── */
const App = (() => {
  /* Sidebar Modules */
  function renderSidebarModules() {
    const el = U.$('[data-nav-modules]'); if (!el) return;
    el.innerHTML = MODULES.map(m => `
      <button class="nav__item" data-nav-mod="${m.id}" onclick="Router.navigate('#/m/${m.id}')">
        <span class="nav__module-dot" style="color:var(--acc-1)"></span>
        <span>${U.esc(m.title)}</span>
      </button>`).join('');
    const cnt = U.$('[data-count="modules"]'); if (cnt) cnt.textContent = MODULES.length;
  }

  function setActiveNav(key) {
    U.$$('[data-nav]').forEach(n => n.classList.toggle('is-active', n.dataset.nav === key));
    U.$$('[data-nav-mod]').forEach(n => n.classList.toggle('is-active', n.dataset.navMod === key));
  }

  function setBreadcrumb(crumbs) {
    const el = U.$('[data-breadcrumb]'); if (!el) return;
    el.innerHTML = crumbs.map((c, i) => i === crumbs.length - 1
      ? `<span class="breadcrumb__current">${U.esc(c.label)}</span>`
      : `<a href="${c.href}">${U.esc(c.label)}</a>${U.icon('chevron-right','breadcrumb__sep')}`
    ).join('');
  }

  /* Full-Content Overlay */
  function openFullOverlay({ title, eyebrow, html, printMode = false }) {
    const ov = U.$('#full-overlay'); if (!ov) return;
    ov.querySelector('[data-full-title]').textContent   = title;
    ov.querySelector('[data-full-eyebrow]').textContent = eyebrow;
    const body = ov.querySelector('[data-full-body]');
    body.innerHTML = html;
    body.classList.toggle('full-overlay__body--print', printMode);
    ov.removeAttribute('hidden');
    ov.dataset.printMode = printMode ? '1' : '0';
    document.body.style.overflow = 'hidden';
  }
  function closeFullOverlay() {
    const ov = U.$('#full-overlay'); if (!ov) return;
    ov.setAttribute('hidden', '');
    delete ov.dataset.printMode;
    document.body.style.overflow = '';
    /* Wenn Overlay aus Deep-Link geöffnet, beim Schließen Hash-Suffix entfernen */
    if (location.hash.match(/\/(s|full)\//)) {
      const cleaned = location.hash.replace(/\/(s|full)\/.*$/, '').replace(/\/full$/, '');
      history.replaceState(null, '', cleaned || '#/');
    }
  }

  /* Command Palette */
  let cmdOpen = false;
  function openCmd() {
    cmdOpen = true;
    const cmd = U.$('#command-palette');
    cmd.removeAttribute('hidden');
    const inp = cmd.querySelector('[data-cmd-input]'); inp.value = '';
    setTimeout(() => inp.focus(), 30);
    renderCmd('');
  }
  function closeCmd() { cmdOpen = false; U.$('#command-palette').setAttribute('hidden', ''); }

  function buildCmdItems() {
    const items = [
      { l:'Startseite',    sub:'Navigation', ic:'home',    act:()=>Router.navigate('#/') },
      { l:'Module',        sub:'Navigation', ic:'layers',  act:()=>Router.navigate('#/modules') },
      { l:'Lernbereich',   sub:'Navigation', ic:'brain',   act:()=>Router.navigate('#/learn') },
      { l:'Fortschritt',   sub:'Navigation', ic:'chart',   act:()=>Router.navigate('#/progress') }
    ];
    MODULES.forEach(m => {
      items.push({ l:m.title, sub:'Modul', ic:'book', act:()=>Router.navigate(`#/m/${m.id}`) });
      m.topics.forEach(t => {
        items.push({ l:t.title, sub:m.title, ic:'layers', act:()=>Router.navigate(`#/m/${m.id}/t/${t.id}`) });
        items.push({ l:`${t.title} · Gesamter Hefteintrag`, sub:'Hefteintrag', ic:'book', act:()=>Router.navigate(`#/m/${m.id}/t/${t.id}/full`) });
        t.subtopics.forEach(s =>
          items.push({ l:s.title, sub:t.title, ic:'bookmark', act:()=>Router.navigate(`#/m/${m.id}/t/${t.id}/s/${s.id}`) })
        );
      });
    });
    return items;
  }

  function renderCmd(q) {
    const items = buildCmdItems();
    const f = q ? items.filter(i => (i.l + ' ' + i.sub).toLowerCase().includes(q.toLowerCase())) : items;
    const list = U.$('[data-cmd-list]');
    list.innerHTML = f.length
      ? f.slice(0, 60).map((it, i) => `
          <div class="command-palette__item${i===0?' is-active':''}" data-ci="${i}">
            ${U.icon(it.ic, 'command-palette__item-icon')}
            <span class="command-palette__item-title">${U.esc(it.l)}</span>
            <span class="command-palette__item-sub">${U.esc(it.sub)}</span>
          </div>`).join('')
      : `<div class="command-palette__empty">Keine Treffer für „${U.esc(q)}"</div>`;
    list.querySelectorAll('[data-ci]').forEach(el => {
      el.addEventListener('click', () => { f[+el.dataset.ci]?.act(); closeCmd(); });
    });
  }

  function initCmdKeyboardNav() {
    const cmd = U.$('#command-palette');
    cmd.querySelector('[data-cmd-input]').addEventListener('keydown', (e) => {
      const items = cmd.querySelectorAll('[data-ci]');
      const cur = cmd.querySelector('.command-palette__item.is-active');
      const idx = cur ? +cur.dataset.ci : -1;
      if (e.key === 'ArrowDown') { e.preventDefault(); items[Math.min(idx+1, items.length-1)]?.scrollIntoView({block:'nearest'}); items.forEach(i=>i.classList.remove('is-active')); items[Math.min(idx+1, items.length-1)]?.classList.add('is-active'); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); items[Math.max(idx-1, 0)]?.scrollIntoView({block:'nearest'}); items.forEach(i=>i.classList.remove('is-active')); items[Math.max(idx-1, 0)]?.classList.add('is-active'); }
      if (e.key === 'Enter')     { e.preventDefault(); cur?.click(); }
    });
  }

  /* Init */
  function init() {
    Store.setTheme(Store.getTheme());
    U.$('[data-action="theme"]')?.addEventListener('click', () =>
      Store.setTheme(Store.getTheme() === 'dark' ? 'light' : 'dark'));

    U.$$('[data-action="print"]').forEach(b =>
      b.addEventListener('click', () => window.print()));

    U.$('[data-menu-toggle]')?.addEventListener('click', () =>
      U.$('[data-sidebar]')?.classList.toggle('is-open'));
    document.addEventListener('click', e => {
      if (!e.target.closest('[data-sidebar]') && !e.target.closest('[data-menu-toggle]'))
        U.$('[data-sidebar]')?.classList.remove('is-open');
    });

    [['home','#/'], ['modules','#/modules'], ['learn','#/learn'], ['progress','#/progress']].forEach(([k, h]) =>
      U.$(`[data-nav="${k}"]`)?.addEventListener('click', e => { e.preventDefault(); Router.navigate(h); }));

    U.$('[data-search-input]')?.addEventListener('focus', () => openCmd());
    U.$('[data-cmd-close]')?.addEventListener('click', closeCmd);
    U.$('.command-palette__backdrop')?.addEventListener('click', closeCmd);
    U.$('[data-cmd-input]')?.addEventListener('input', e => renderCmd(e.target.value));
    initCmdKeyboardNav();

    U.$$('[data-full-close]').forEach(el => el.addEventListener('click', closeFullOverlay));
    U.$('.full-overlay__backdrop')?.addEventListener('click', closeFullOverlay);

    document.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openCmd(); }
      if (e.key === 'Escape') {
        if (cmdOpen) closeCmd();
        else if (!U.$('#full-overlay').hasAttribute('hidden')) closeFullOverlay();
      }
    });

    Store.updateStreak();
    const sd = U.$('[data-streak-days]'); if (sd) sd.textContent = Store.getStreak();
    renderSidebarModules();
  }

  return { init, setActiveNav, setBreadcrumb, openFullOverlay, closeFullOverlay };
})();

/* ── 10. VIEWS ────────────────────────────────────────────────────────── */
const Views = (() => {
  const mount = () => U.$('#view-mount');
  const render = (html) => { const el = mount(); el.innerHTML = `<div class="view">${html}</div>`; el.scrollTop = 0; };

  /* ─ Home ─ */
  function home() {
    App.setActiveNav('home');
    App.setBreadcrumb([{ label: 'Startseite' }]);

    const totalSubs = MODULES.reduce((a, m) => a + m.topics.reduce((b, t) => b + t.subtopics.length, 0), 0);

    const cards = MODULES.map(m => {
      const pct = Store.moduleProgress(m.id);
      const subCount = m.topics.reduce((a, t) => a + t.subtopics.length, 0);
      return `
        <article class="module-card" onclick="Router.navigate('#/m/${m.id}')">
          <div class="module-card__icon">${U.icon(m.icon)}</div>
          <h3 class="module-card__title">${U.esc(m.title)}</h3>
          <p class="module-card__desc">${U.esc(m.subtitle)}</p>
          <div class="module-card__foot">
            ${U.pb(pct)}
            <div class="module-card__stat"><span>${m.topics.length} Themen · ${subCount} Unterthemen</span><span>${pct}%</span></div>
          </div>
        </article>`;
    }).join('');

    const placeholders = `
      <article class="module-card module-card--disabled">
        <div class="module-card__icon">${U.icon('plus')}</div>
        <h3 class="module-card__title">Neues Modul</h3>
        <p class="module-card__desc">Statistik, Marketing, Bilanzierung — als Objekt in MODULES[] ergänzen.</p>
        <div class="module-card__foot">${U.pb(0)}<div class="module-card__stat"><span>bereit</span><span>0%</span></div></div>
      </article>
      <article class="module-card" onclick="Router.navigate('#/learn')">
        <div class="module-card__icon">${U.icon('brain')}</div>
        <h3 class="module-card__title">Schnell lernen</h3>
        <p class="module-card__desc">Zufällige Fragen aus allen integrierten Themen — Quiz, Aufgaben, Karteikarten.</p>
        <div class="module-card__foot">${U.pb(QUESTIONS.length ? 38 : 0)}<div class="module-card__stat"><span>${QUESTIONS.length} Fragen</span><span>Mixed</span></div></div>
      </article>`;

    render(`
      <div class="view--home">
        <section class="hero">
          <div class="hero__eyebrow">StudyOS · v3</div>
          <h1 class="hero__title">Deine Module. <em>Dein Wissen.</em></h1>
          <p class="hero__lead">Eine modulare Lernplattform: Hefteinträge, Quiz, Fortschritt. Neue Module werden ohne Layout-Änderung als Objekt ergänzt.</p>
          <div class="hero__meta">
            <span class="pill pill--accent">${MODULES.length} Modul${MODULES.length !== 1 ? 'e' : ''}</span>
            <span class="pill">${totalSubs} Unterthemen</span>
            <span class="pill">${QUESTIONS.length} Lernfragen</span>
            <span class="pill">⌘K Schnellzugriff</span>
          </div>
        </section>
        <div>
          <div class="section-head">
            <div><h2 class="section-head__title">Module</h2><p class="section-head__sub">Klicke auf ein Modul um in die Themen einzutauchen.</p></div>
          </div>
          <div class="grid grid--3">${cards}${placeholders}</div>
        </div>
      </div>`);
  }

  /* ─ Modules List ─ */
  function modulesList() {
    App.setActiveNav('modules');
    App.setBreadcrumb([{ label: 'Startseite', href: '#/' }, { label: 'Module' }]);
    const cards = MODULES.map(m => {
      const pct = Store.moduleProgress(m.id);
      return `<article class="module-card" onclick="Router.navigate('#/m/${m.id}')">
        <div class="module-card__icon">${U.icon(m.icon)}</div>
        <h3 class="module-card__title">${U.esc(m.title)}</h3>
        <p class="module-card__desc">${U.esc(m.subtitle)}</p>
        <div class="module-card__foot">${U.pb(pct)}<div class="module-card__stat"><span>${m.topics.length} Themen</span><span>${pct}%</span></div></div>
      </article>`;
    }).join('');
    render(`
      <section class="hero">
        <div class="hero__eyebrow">Bibliothek</div>
        <h1 class="hero__title">Deine <em>Studienbibliothek</em>.</h1>
        <p class="hero__lead">Jedes Modul: Themen, Unterthemen, Hefteinträge, Quiz — generisch gerendert, ohne Sondercode.</p>
      </section>
      <div class="section-head" style="margin-top:var(--sp-8)"><div><h2 class="section-head__title">Alle Module</h2></div></div>
      <div class="grid grid--3">${cards}</div>`);
  }

  /* ─ Modul-Detail ─ */
  function moduleView(mid) {
    const mod = U.find.mod(mid);
    if (!mod) { Router.navigate('#/'); return; }
    App.setActiveNav(mid);
    App.setBreadcrumb([{ label: 'Startseite', href: '#/' }, { label: mod.title }]);

    const cards = mod.topics.map((t, i) => {
      const pct = Store.topicProgress(mid, t.id);
      const done = t.subtopics.filter(s => Store.isRead(mid, t.id, s.id)).length;
      return `
        <article class="topic-card" onclick="Router.navigate('#/m/${mid}/t/${t.id}')">
          <div class="topic-card__num">KAPITEL ${U.pad(i + 1)}</div>
          <h3 class="topic-card__title">${U.esc(t.title)}</h3>
          <p class="topic-card__intro">${U.esc(t.intro)}</p>
          <div style="margin-top:auto;padding-top:var(--sp-3);display:flex;flex-direction:column;gap:var(--sp-2)">
            ${U.pb(pct)}
            <div style="display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:11px;color:var(--text-3)">
              <span>${t.subtopics.length} Unterthemen</span>
              <span>${done} / ${t.subtopics.length} gelesen</span>
            </div>
          </div>
        </article>`;
    }).join('');

    const totalSubs = mod.topics.reduce((a, t) => a + t.subtopics.length, 0);
    const totalDone = mod.topics.reduce((a, t) => a + t.subtopics.filter(s => Store.isRead(mid, t.id, s.id)).length, 0);

    render(`
      <section class="hero">
        <div class="hero__eyebrow">Modul</div>
        <h1 class="hero__title">${U.esc(mod.title)}</h1>
        <p class="hero__lead">${U.esc(mod.subtitle)}</p>
        <div class="hero__meta">
          <span class="pill pill--${Store.moduleProgress(mid) === 100 ? 'ok' : 'accent'}">${Store.moduleProgress(mid)}% abgeschlossen</span>
          <span class="pill">${mod.topics.length} Themen</span>
          <span class="pill">${totalDone} / ${totalSubs} gelesen</span>
        </div>
      </section>
      <div class="section-head" style="margin-top:var(--sp-8)">
        <div><h2 class="section-head__title">Themen</h2><p class="section-head__sub">Klicke ein Thema, um Unterthemen zu sehen.</p></div>
        <button class="btn btn--primary" onclick="Router.navigate('#/learn')">${U.icon('brain')} Lernen starten</button>
      </div>
      <div class="grid grid--3">${cards}</div>`);
  }

  /* ─ Topic-Detail ─ */
  function topicView(mid, tid) {
    const mod = U.find.mod(mid);
    const top = U.find.topic(mid, tid);
    if (!top) { moduleView(mid); return; }

    App.setActiveNav(mid);
    App.setBreadcrumb([
      { label: 'Startseite', href: '#/' },
      { label: mod.title,    href: `#/m/${mid}` },
      { label: top.title }
    ]);

    const items = top.subtopics.map((s, i) => {
      const done = Store.isRead(mid, tid, s.id);
      return `
        <button class="subtopic-item" onclick="Router.navigate('#/m/${mid}/t/${tid}/s/${s.id}')">
          <span class="subtopic-item__num">${U.pad(i + 1)}</span>
          <span class="subtopic-item__title">${U.esc(s.title)}</span>
          <span class="subtopic-item__check${done ? ' subtopic-item__check--done' : ''}">${done ? U.icon('check') : ''}</span>
          ${U.icon('chevron-right', 'subtopic-item__arrow')}
        </button>`;
    }).join('');

    const pct = Store.topicProgress(mid, tid);

    render(`
      <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-5);flex-wrap:wrap">
        <button class="btn btn--ghost" onclick="Router.navigate('#/m/${mid}')">${U.icon('arrow-left')} Modul</button>
        <div style="flex:1"></div>
        <button class="btn" onclick="Router.navigate('#/m/${mid}/t/${tid}/s/${top.subtopics[0]?.id}')">${U.icon('book')} Unterthema öffnen</button>
        <button class="btn btn--primary" onclick="Router.navigate('#/m/${mid}/t/${tid}/full')">${U.icon('layers')} Gesamter Hefteintrag</button>
      </div>
      <section class="hero" style="padding:var(--sp-7) var(--sp-8)">
        <div class="hero__eyebrow">${U.esc(mod.title)}</div>
        <h1 class="hero__title" style="font-size:clamp(28px,3.5vw,42px)">${U.esc(top.title)}</h1>
        <p class="hero__lead">${U.esc(top.intro)}</p>
        <div class="hero__meta">
          <span class="pill pill--${pct === 100 ? 'ok' : 'accent'}">${pct}% gelesen</span>
          <span class="pill">${top.subtopics.length} Unterthemen</span>
        </div>
      </section>
      <div class="section-head" style="margin-top:var(--sp-8)">
        <div><h2 class="section-head__title">Unterthemen</h2><p class="section-head__sub">Öffnen markiert als gelesen · Grüner Haken bedeutet fertig.</p></div>
      </div>
      <div class="subtopic-list">${items}</div>`);
  }

  /* ─ Subtopic-Hefteintrag (Overlay, deeplink-fähig) ─ */
  function subtopicView(mid, tid, sid) {
    const mod = U.find.mod(mid);
    const top = U.find.topic(mid, tid);
    const sub = U.find.sub(mid, tid, sid);
    if (!sub) { topicView(mid, tid); return; }

    topicView(mid, tid);

    const idx = top.subtopics.findIndex(s => s.id === sid);
    const prev = top.subtopics[idx - 1];
    const next = top.subtopics[idx + 1];

    const nav = `
      <div class="notes__nav">
        ${prev ? `<button class="btn btn--ghost" onclick="Router.navigate('#/m/${mid}/t/${tid}/s/${prev.id}')">${U.icon('arrow-left')} ${U.esc(prev.title)}</button>` : '<span></span>'}
        <span class="notes__nav-meta">Unterthema ${idx + 1} von ${top.subtopics.length}</span>
        ${next ? `<button class="btn" onclick="Router.navigate('#/m/${mid}/t/${tid}/s/${next.id}')">${U.esc(next.title)} ${U.icon('arrow-right')}</button>` : '<span></span>'}
      </div>`;

    const body = `
      <article class="notes">
        <header class="notes__header">
          <div class="notes__eyebrow">${U.esc(mod.title)} · ${U.esc(top.title)}</div>
          <h1 class="notes__title">${U.esc(sub.title)}</h1>
          <p class="notes__intro">Unterthema ${idx + 1} von ${top.subtopics.length} im Thema „${U.esc(top.title)}".</p>
        </header>
        ${BlockRenderer.renderSubtopic(sub)}
        ${nav}
        <footer class="notes__footer">
          <button class="btn btn--primary" onclick="Router.navigate('#/m/${mid}/t/${tid}/full')">${U.icon('layers')} Gesamter Hefteintrag</button>
          <button class="btn btn--ghost" onclick="Router.navigate('#/m/${mid}/t/${tid}')">${U.icon('arrow-left')} Zurück zur Themenübersicht</button>
        </footer>
      </article>`;

    App.openFullOverlay({
      title: sub.title,
      eyebrow: `${top.title} · ${mod.title}`,
      html: body
    });
    Store.markRead(mid, tid, sid);
  }

  /* ─ Gesamter Hefteintrag ─ */
  function fullNotesView(mid, tid) {
    const mod = U.find.mod(mid);
    const top = U.find.topic(mid, tid);
    if (!top) { moduleView(mid); return; }

    topicView(mid, tid);

    const sections = top.subtopics.map((s, i) => `
      <section class="notes__section">
        <div class="notes__section-meta">
          <span class="notes__section-num">${U.pad(i + 1)}</span>
          <span class="notes__section-of">/ ${U.pad(top.subtopics.length)}</span>
        </div>
        <h2 class="notes__section-title">${U.esc(s.title)}</h2>
        ${BlockRenderer.renderSubtopic(s)}
      </section>
      ${i < top.subtopics.length - 1 ? '<hr class="notes__sep">' : ''}
    `).join('');

    const body = `
      <article class="notes notes--full">
        <header class="notes__header notes__header--full">
          <div class="notes__eyebrow">${U.esc(mod.title)}</div>
          <h1 class="notes__title">${U.esc(top.title)}</h1>
          <p class="notes__intro">${U.esc(top.intro)}</p>
          <div class="notes__hero-meta">
            <span class="pill pill--accent">${top.subtopics.length} Unterthemen</span>
            <span class="pill">Gesamter Hefteintrag</span>
            <span class="pill">Print-Ready</span>
          </div>
        </header>
        ${sections}
        <footer class="notes__footer notes__footer--full">
          <button class="btn btn--primary" onclick="window.print()">${U.icon('printer')} Drucken / PDF</button>
          <button class="btn btn--ghost" onclick="Router.navigate('#/m/${mid}/t/${tid}')">${U.icon('arrow-left')} Zurück</button>
        </footer>
      </article>`;

    App.openFullOverlay({
      title: `Gesamter Hefteintrag — ${top.title}`,
      eyebrow: `${mod.title} · ${top.subtopics.length} Unterthemen`,
      html: body,
      printMode: true
    });

    top.subtopics.forEach(s => Store.markRead(mid, tid, s.id));
  }

  /* ─ Lernbereich ─ */
  let _q = null;
  function learn() {
    App.setActiveNav('learn');
    App.setBreadcrumb([{ label: 'Startseite', href: '#/' }, { label: 'Lernbereich' }]);

    const opts = [
      `<option value="all">Alle Themen</option>`,
      ...MODULES.flatMap(m => m.topics.map(t => `<option value="${t.id}">${U.esc(t.title)}</option>`))
    ].join('');

    render(`
      <section class="hero">
        <div class="hero__eyebrow">Lernbereich</div>
        <h1 class="hero__title">Active Recall statt <em>nur lesen</em>.</h1>
        <p class="hero__lead">Wähle Thema und Aufgabentyp. Die App generiert Fragen aus den integrierten Inhalten.</p>
      </section>
      <div class="learn-card">
        <div class="learn-controls">
          <select id="lTopic" class="ls">${opts}</select>
          <select id="lType" class="ls">
            <option value="quiz">Quiz</option>
            <option value="task">Rechenaufgabe</option>
            <option value="cloze">Lückentext</option>
            <option value="flash">Karteikarte</option>
          </select>
          <button class="btn btn--primary" id="lNew">${U.icon('zap')} Neue Frage</button>
          <button class="btn" id="lShow">Antwort zeigen</button>
        </div>
        <div id="lTag" class="learn-tag">Bereit</div>
        <div id="lQ" class="learn-q">Klicke auf „Neue Frage", um zu beginnen.</div>
        <div id="lA" class="learn-a"></div>
        <div id="lFb" class="learn-fb"></div>
      </div>`);

    if (!U.$('#s-learn')) {
      const s = document.createElement('style'); s.id = 's-learn';
      s.textContent = `.learn-card{background:linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.015));border:1px solid var(--line);border-radius:var(--r-xl);padding:var(--sp-6);margin-top:var(--sp-6);box-shadow:var(--shadow-sm)}html[data-theme=light] .learn-card{background:#fff}.learn-controls{display:flex;gap:var(--sp-3);flex-wrap:wrap;margin-bottom:var(--sp-5)}.ls{height:42px;border:1px solid var(--line);background:rgba(255,255,255,.03);color:var(--text);border-radius:12px;padding:0 12px;cursor:pointer;font-size:14px}html[data-theme=light] .ls{background:#fff}.ls:focus{outline:2px solid var(--acc-1);outline-offset:2px}.learn-tag{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--text-3);margin-bottom:var(--sp-3)}.learn-q{font-size:20px;line-height:1.45;letter-spacing:-.02em;font-weight:550;margin:var(--sp-3) 0 var(--sp-4);color:var(--text)}.learn-a{display:grid;gap:var(--sp-3)}.qa{border:1px solid var(--line);background:rgba(255,255,255,.035);color:var(--text);border-radius:14px;padding:13px 15px;text-align:left;cursor:pointer;font-size:14.5px;transition:all var(--dur-1) var(--ease-out);width:100%;font-weight:500}html[data-theme=light] .qa{background:#f7f9fd}.qa:hover{border-color:var(--acc-1);transform:translateX(2px)}.qa.correct{border-color:var(--ok);background:var(--ok-soft)}.qa.wrong{border-color:var(--bad);background:var(--bad-soft)}.qh{filter:blur(7px);user-select:none;background:rgba(255,255,255,.025);border:1px solid var(--line);border-radius:14px;padding:13px 15px;color:var(--text);transition:filter var(--dur-2) var(--ease-out);cursor:pointer}.qh.show{filter:none;cursor:default}.learn-fb{margin-top:var(--sp-4);color:var(--text-2);line-height:1.6;font-size:14.5px;min-height:24px}.learn-fb strong{color:var(--text)}`;
      document.head.appendChild(s);
    }

    U.$('#lNew').addEventListener('click', nextQ);
    U.$('#lShow').addEventListener('click', () => {
      U.$('#qha')?.classList.add('show');
      if (_q) U.$('#lFb').innerHTML = (_q.ans ? `<strong>Antwort:</strong> ${U.esc(_q.ans)}. ` : '') + U.esc(_q.e || '');
    });
    U.$('#lA').addEventListener('click', e => {
      const b = e.target.closest('[data-ai]');
      if (!b || !_q) return;
      const ok = +b.dataset.ai === _q.c;
      b.classList.add(ok ? 'correct' : 'wrong');
      U.$$('#lA [data-ai]').forEach(el => { if (+el.dataset.ai === _q.c) el.classList.add('correct'); el.disabled = true; });
      U.$('#lFb').innerHTML = `<strong>${ok ? 'Richtig.' : 'Falsch.'}</strong> ${U.esc(_q.e)}`;
    });
  }
  function nextQ() {
    const t = U.$('#lTopic')?.value, ty = U.$('#lType')?.value;
    let pool = QUESTIONS.filter(x => (t === 'all' || x.topic === t) && x.type === ty);
    if (!pool.length) pool = QUESTIONS.filter(x => t === 'all' || x.topic === t);
    if (!pool.length) pool = QUESTIONS;
    _q = pool[Math.floor(Math.random() * pool.length)];
    const lbl = MODULES.flatMap(m => m.topics).find(t => t.id === _q.topic)?.title || _q.topic;
    U.$('#lTag').textContent = lbl;
    U.$('#lQ').textContent = _q.q;
    U.$('#lFb').innerHTML = '';
    const ans = U.$('#lA');
    if (_q.type === 'quiz') ans.innerHTML = _q.a.map((a, i) => `<button class="qa" data-ai="${i}">${U.esc(a)}</button>`).join('');
    else ans.innerHTML = `<div id="qha" class="qh" onclick="this.classList.add('show')">${U.esc(_q.ans)}</div>`;
  }

  /* ─ Fortschritt ─ */
  function progress() {
    App.setActiveNav('progress');
    App.setBreadcrumb([{ label: 'Startseite', href: '#/' }, { label: 'Fortschritt' }]);

    const cards = MODULES.map(mod => {
      const pct = Store.moduleProgress(mod.id);
      const total = mod.topics.reduce((a, t) => a + t.subtopics.length, 0);
      const done = mod.topics.reduce((a, t) => a + t.subtopics.filter(s => Store.isRead(mod.id, t.id, s.id)).length, 0);
      return `
        <div class="card">
          <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-4);cursor:pointer" onclick="Router.navigate('#/m/${mod.id}')">
            <div class="module-card__icon" style="width:36px;height:36px;margin-bottom:0">${U.icon(mod.icon)}</div>
            <h3 style="font-size:16px;font-weight:650;margin:0;letter-spacing:-.02em;flex:1">${U.esc(mod.title)}</h3>
            <span class="pill pill--${pct === 100 ? 'ok' : 'accent'}">${pct}%</span>
          </div>
          ${mod.topics.map(t => {
            const tp = Store.topicProgress(mod.id, t.id);
            return `<div style="margin-bottom:var(--sp-3);cursor:pointer" onclick="Router.navigate('#/m/${mod.id}/t/${t.id}')">
              <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px">
                <span style="color:var(--text-2)">${U.esc(t.title)}</span>
                <span style="font-family:var(--font-mono);font-size:11px;color:var(--text-3)">${tp}%</span>
              </div>
              ${U.pb(tp)}
            </div>`;
          }).join('')}
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--sp-4);padding-top:var(--sp-3);border-top:1px solid var(--line)">
            <span style="font-family:var(--font-mono);font-size:11px;color:var(--text-3)">${done} / ${total} gelesen</span>
            <button class="btn" style="height:32px;padding:0 12px;font-size:12px" onclick="Router.navigate('#/m/${mod.id}')">öffnen ${U.icon('chevron-right')}</button>
          </div>
        </div>`;
    }).join('');

    render(`
      <section class="hero">
        <div class="hero__eyebrow">Fortschritt</div>
        <h1 class="hero__title">Dein <em>Lernstand</em>.</h1>
        <p class="hero__lead">Fortschritt wird lokal im Browser gespeichert. Jedes geöffnete Unterthema gilt als gelesen.</p>
        <div class="hero__meta">
          <span class="pill pill--accent">${Store.getStreak()} Tage Streak</span>
          <span class="pill">${QUESTIONS.length} Lernfragen</span>
        </div>
      </section>
      <div class="section-head" style="margin-top:var(--sp-8)">
        <div><h2 class="section-head__title">Module</h2></div>
        <button class="btn" onclick="if(confirm('Fortschritt wirklich zurücksetzen?')){Store.set('progress',{});location.reload()}">${U.icon('x')} Zurücksetzen</button>
      </div>
      <div class="grid grid--${Math.min(MODULES.length, 2)}">${cards}</div>`);
  }

  return { home, modulesList, moduleView, topicView, subtopicView, fullNotesView, learn, progress };
})();

/* ── Notes-Layout-Styles (für Hefteinträge im Overlay) ─────────────── */
(function () {
  const s = document.createElement('style'); s.id = 's-notes';
  s.textContent = `
    .notes{max-width:780px;margin:0 auto;font-family:var(--font-read);font-size:17px;line-height:1.72;color:var(--text)}
    .notes--full{max-width:820px}
    .notes>*+*{margin-top:var(--sp-5)}
    .notes__header{margin-bottom:var(--sp-7);padding-bottom:var(--sp-5);border-bottom:1px solid var(--line)}
    .notes__header--full{margin-bottom:var(--sp-10);padding-bottom:var(--sp-6)}
    .notes__eyebrow{font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--acc-1);margin-bottom:var(--sp-3)}
    .notes__title{font-family:var(--font-read);font-weight:600;font-size:clamp(28px,4vw,42px);letter-spacing:-.03em;line-height:1.1;margin:0 0 var(--sp-3);color:var(--text)}
    .notes__intro{font-size:17px;line-height:1.6;color:var(--text-2);margin:0;font-style:italic;font-weight:400}
    .notes__hero-meta{display:flex;gap:var(--sp-2);flex-wrap:wrap;margin-top:var(--sp-4)}
    .notes__body>*+*{margin-top:var(--sp-4)}
    .notes__p{margin:0;color:var(--text-2);line-height:1.72}
    .notes__list{margin:8px 0;padding-left:22px;color:var(--text-2)}
    .notes__list li{margin:4px 0}
    .notes__section{margin-bottom:var(--sp-10)}
    .notes__section>*+*{margin-top:var(--sp-4)}
    .notes__section-meta{display:flex;align-items:baseline;gap:6px;margin-bottom:var(--sp-2)}
    .notes__section-num{font-family:var(--font-mono);font-size:13px;font-weight:700;letter-spacing:.06em;color:var(--acc-1)}
    .notes__section-of{font-family:var(--font-mono);font-size:11px;color:var(--text-3);font-weight:500}
    .notes__section-title{font-family:var(--font-read);font-size:28px;font-weight:600;letter-spacing:-.025em;margin:0 0 var(--sp-4);color:var(--text);line-height:1.15}
    .notes__sep{border:0;border-top:1px solid var(--line);margin:var(--sp-10) 0}
    .notes__nav{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:var(--sp-3);margin-top:var(--sp-8);padding-top:var(--sp-5);border-top:1px solid var(--line)}
    .notes__nav .btn{justify-self:start}
    .notes__nav .btn:last-child{justify-self:end}
    .notes__nav-meta{font-family:var(--font-mono);font-size:11px;color:var(--text-3);text-align:center;font-weight:500}
    .notes__footer{display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap;margin-top:var(--sp-7);padding-top:var(--sp-5);border-top:1px solid var(--line)}
    .notes__footer--full{margin-top:var(--sp-10)}
    @media(max-width:640px){
      .notes__nav{grid-template-columns:1fr;gap:var(--sp-2)}
      .notes__nav .btn{justify-self:stretch !important}
      .notes__nav-meta{order:-1}
    }
    @media print{
      .notes__nav,.notes__footer{display:none !important}
      .notes__sep{border-top:1px solid #ddd}
      .notes__section-title{color:#000;font-size:22pt;page-break-after:avoid}
      .notes__section{page-break-inside:auto}
    }`;
  document.head.appendChild(s);
})();

/* ── 11. INIT ─────────────────────────────────────────────────────────── */
Router.register(/^$/,                                          Views.home);
Router.register(/^modules$/,                                   Views.modulesList);
Router.register(/^learn$/,                                     Views.learn);
Router.register(/^progress$/,                                  Views.progress);
Router.register(/^m\/([^/]+)$/,                                Views.moduleView);
Router.register(/^m\/([^/]+)\/t\/([^/]+)$/,                    Views.topicView);
Router.register(/^m\/([^/]+)\/t\/([^/]+)\/s\/([^/]+)$/,        Views.subtopicView);
Router.register(/^m\/([^/]+)\/t\/([^/]+)\/full$/,              Views.fullNotesView);

window.Router = Router;
window.Views  = Views;
window.Store  = Store;
window.MODULES = MODULES;

App.init();
Router.init();
