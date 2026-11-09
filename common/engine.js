/* ECO A1 — interactive unit engine.  Each unit page loads ../units/uN.js which calls ECO.unit({...}). */
(function () {
  'use strict';
  const I = window.I18N, TTS = window.TTS, t = k => I.t(k), c = o => I.c(o), tr = o => I.tr(o), store = I.store;
  const ECO = window.ECO = {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const el = h => { const x = document.createElement('template'); x.innerHTML = h.trim(); return x.content.firstElementChild; };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const rich = s => esc(s).replace(/&lt;(\/?)(b|i|br)&gt;/g, '<$1$2>');
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const plain = s => String(s == null ? '' : s).replace(/<[^>]+>/g, '');

  let U = null, S = null, KEY = '', SECS = [], EXS = [];
  const TAGC = { A: '#1b8fc9', B: '#e8781e', C: '#5aa02c', D: '#8e3fa0', E: '#d23a5b', mundo: '#9c5a2b', sintesis: '#13998a', yaconoces: '#8aa11a', portada: '#5b2a1c', examen: '#a32638', resultados: '#2b2420' };
  const colorOf = s => TAGC[s.tag] || TAGC[s.id] || '#5b2a1c';
  const save = () => { store.set(KEY, S); summary(); progress(); };

  /* ---------- text grading ---------- */
  const PUNCT = /[¿?¡!.,;:"“”'‘’«»()\[\]…–—-]/g;
  const norm = s => String(s).toLowerCase().replace(/ /g, ' ').replace(PUNCT, ' ').replace(/\s+/g, ' ').trim();
  const strip = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  function gradeText(input, alts, strictPunct) {
    const raw = String(input || ''); const ni = norm(raw);
    const list = String(alts).split('|').map(x => x.trim()).filter(Boolean);
    if (!ni) return { s: 0, empty: true, best: list[0] };
    for (const a of list) if (ni === norm(a)) {
      if (strictPunct && ((/¿/.test(a) && !/¿/.test(raw)) || (/¡/.test(a) && !/¡/.test(raw)))) return { s: 0.5, why: 'punct', best: a };
      return { s: 1, best: a };
    }
    for (const a of list) if (strip(ni) === strip(norm(a))) return { s: 0.5, why: 'accent', best: a };
    return { s: 0, best: list[0] };
  }
  const tl = a => esc(a).replace(/[áéíóúñüÁÉÍÓÚÑ¿¡]/g, m => `<b class="tl">${m}</b>`);
  const MARK = s => s == null ? '' : s >= 0.999 ? '<span class="mk ok">○</span>' : s > 0 ? '<span class="mk half">△</span>' : '<span class="mk no">✕</span>';
  const fbText = r => r.s >= 0.999 ? `<span class="good">¡Correcto!</span>` : r.s > 0 ? `<span class="etag e-acento">${t(r.why === 'punct' ? 'punct' : 'accent')}</span> → <span class="ans">${tl(r.best)}</span>` : `${t('correct')} → <span class="ans">${tl(r.best)}</span>`;
  const sayBtn = (txt, g, cls) => `<button class="say ${cls || ''}" data-say="${esc(plain(txt))}"${g ? ` data-g="${g}"` : ''} title="${t('listen')}" aria-label="${t('listen')}">🔊</button>`;
  const genderOf = who => (U.people && U.people[who]) || (/^(B)$/.test(who) ? 'm' : 'f');
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-say]'); if (b) { e.preventDefault(); TTS.say(b.dataset.say, b, b.dataset.g || 'f'); }
  });

  /* ---------- exercise components: each returns {n, get, set, grade, paint, reveal} ---------- */
  const C = {};
  const itemWrap = (inner, i, cls) => `<div class="item ${cls || ''}" data-i="${i}"><div class="item-main">${inner}</div><div class="item-side"><span class="mkbox"></span></div><div class="fb"></div></div>`;
  const paintItem = (box, i, r, html) => {
    const it = $$('.item', box)[i]; if (!it) return;
    it.classList.remove('is-ok', 'is-half', 'is-no');
    if (r == null) { $('.mkbox', it).innerHTML = ''; $('.fb', it).innerHTML = ''; return; }
    it.classList.add(r.s >= 0.999 ? 'is-ok' : r.s > 0 ? 'is-half' : 'is-no');
    $('.mkbox', it).innerHTML = MARK(r.s); $('.fb', it).innerHTML = html || '';
  };

  C.fill = (b, box) => {
    if (b.bank && b.bank.length) box.insertAdjacentHTML('beforeend', `<div class="wordbank"><b>${t('bank')}:</b> ${b.bank.map(w => `<button type="button" class="wchip" data-w="${esc(w)}">${esc(w)}</button>`).join('')}</div>`);
    const list = el('<div class="items"></div>'); box.appendChild(list);
    b.items.forEach((it, i) => {
      const parts = it.q.split('___');
      const html = parts.map((p, k) => rich(p) + (k < parts.length - 1 ? `<input class="inp blank" data-k="${k}" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:${Math.max(4, Math.min(22, String(it.a[k] || '').split('|')[0].length + 2))}ch">` : '')).join('');
      list.insertAdjacentHTML('beforeend', itemWrap(`<span class="qn">${i + 1}</span><span class="qt">${html}</span>${it.hint ? ` <span class="hintc">(${esc(it.hint)})</span>` : ''}${it.say ? sayBtn(it.say) : ''}`, i));
    });
    let last = null;
    list.addEventListener('focusin', e => { if (e.target.matches('.blank')) last = e.target; });
    $$('.wchip', box).forEach(ch => ch.onmousedown = e => e.preventDefault());
    $$('.wchip', box).forEach(ch => ch.onclick = () => { const tgt = (last && document.body.contains(last)) ? last : $$('.blank', list).find(x => !x.value); if (tgt) { tgt.value = ch.dataset.w; tgt.dispatchEvent(new Event('input')); const all = $$('.blank', list); const nx = all[all.indexOf(tgt) + 1]; if (nx) nx.focus(); } });
    const ins = i => $$('.blank', $$('.item', list)[i]);
    return {
      n: b.items.length,
      get: () => b.items.map((_, i) => ins(i).map(x => x.value)),
      set: a => b.items.forEach((_, i) => ins(i).forEach((x, k) => { x.value = (a[i] || [])[k] || ''; })),
      grade: a => b.items.map((it, i) => { const rs = it.a.map((alt, k) => gradeText((a[i] || [])[k], alt)); return { s: rs.reduce((x, r) => x + r.s, 0) / rs.length, parts: rs, empty: rs.every(r => r.empty) }; }),
      paint: res => res.forEach((r, i) => {
        if (!r) return paintItem(list, i, null);
        ins(i).forEach((x, k) => { const p = r.parts[k]; x.classList.remove('ok', 'half', 'no'); x.classList.add(p.s >= 1 ? 'ok' : p.s > 0 ? 'half' : 'no'); });
        const bad = r.parts.map((p, k) => p.s < 1 ? (r.parts.length > 1 ? `${k + 1}) ` : '') + fbText(p) : '').filter(Boolean).join(' &nbsp; ');
        paintItem(list, i, r, r.s >= 1 ? fbText({ s: 1 }) : bad);
      }),
      clear: () => $$('.blank', list).forEach(x => x.classList.remove('ok', 'half', 'no'))
    };
  };

  C.choice = (b, box) => {
    const list = el('<div class="items"></div>'); box.appendChild(list);
    b.items.forEach((it, i) => {
      const q = it.q ? `<span class="qt">${rich(it.q)}</span>` : `<span class="qt muted">🎧 ${t('listen')}</span>`;
      list.insertAdjacentHTML('beforeend', itemWrap(`<span class="qn">${i + 1}</span>${it.say ? sayBtn(it.say, it.g, 'big') : ''}${q}<div class="opts">${it.opts.map((o, k) => `<button type="button" class="opt" data-k="${k}">${rich(o)}</button>`).join('')}</div>`, i, 'choice'));
    });
    $$('.item', list).forEach(itEl => $$('.opt', itEl).forEach(o => o.onclick = () => { $$('.opt', itEl).forEach(x => x.classList.remove('sel')); o.classList.add('sel'); }));
    return {
      n: b.items.length,
      get: () => $$('.item', list).map(x => { const s = $('.opt.sel', x); return s ? +s.dataset.k : null; }),
      set: a => $$('.item', list).forEach((x, i) => $$('.opt', x).forEach(o => o.classList.toggle('sel', a[i] === +o.dataset.k))),
      grade: a => b.items.map((it, i) => ({ s: a[i] === it.a ? 1 : 0, empty: a[i] == null })),
      paint: res => res.forEach((r, i) => {
        const x = $$('.item', list)[i]; $$('.opt', x).forEach(o => o.classList.remove('ok', 'no'));
        if (!r) return paintItem(list, i, null);
        $$('.opt', x)[b.items[i].a].classList.add('ok');
        const s = $('.opt.sel', x); if (s && r.s < 1) s.classList.add('no');
        paintItem(list, i, r, r.s >= 1 ? fbText({ s: 1 }) : `${t('correct')} → <span class="ans">${tl(plain(b.items[i].opts[b.items[i].a]))}</span>`);
      })
    };
  };

  C.tf = (b, box) => {
    const bb = { items: b.items.map(it => ({ q: it.q, say: it.say, opts: [t('tru'), t('fal')], a: it.a ? 0 : 1 })) };
    const comp = C.choice(bb, box); $$('.item', box).forEach(x => x.classList.add('tf'));
    return comp;
  };

  C.match = (b, box) => {
    const L = 'abcdefghijklmnopqrstuvwxyz';
    box.insertAdjacentHTML('beforeend', `<div class="mright">${b.right.map((r, k) => `<div class="mr"><b>${k + 1}</b> ${rich(r)} ${/[a-záéíóúñ]/i.test(r) && !/^[\d\s]+$/.test(r) ? sayBtn(r) : ''}</div>`).join('')}</div>`);
    const list = el('<div class="items"></div>'); box.appendChild(list);
    b.left.forEach((l, i) => list.insertAdjacentHTML('beforeend', itemWrap(`<span class="qn">${L[i] || i + 1}</span><span class="qt">${rich(l)}</span><select class="inp msel"><option value="">${t('choose')}</option>${b.right.map((r, k) => `<option value="${k}">${k + 1}. ${esc(plain(r)).slice(0, 60)}</option>`).join('')}</select>`, i, 'match')));
    const sels = () => $$('.msel', list);
    return {
      n: b.left.length,
      get: () => sels().map(s => s.value === '' ? null : +s.value),
      set: a => sels().forEach((s, i) => { s.value = a[i] == null ? '' : a[i]; }),
      grade: a => b.left.map((_, i) => ({ s: a[i] === b.a[i] ? 1 : 0, empty: a[i] == null })),
      paint: res => res.forEach((r, i) => paintItem(list, i, r, r && (r.s >= 1 ? fbText({ s: 1 }) : `${t('correct')} → <span class="ans">${b.a[i] + 1}. ${tl(plain(b.right[b.a[i]]))}</span>`)))
    };
  };

  C.classify = (b, box) => {
    const list = el('<div class="items cls"></div>'); box.appendChild(list);
    b.items.forEach((it, i) => list.insertAdjacentHTML('beforeend', itemWrap(`<span class="qt">${rich(it.w)}</span>${sayBtn(it.w)}<div class="opts">${b.cats.map((ct, k) => `<button type="button" class="opt cat c${k % 6}" data-k="${k}">${rich(ct)}</button>`).join('')}</div>`, i, 'choice')));
    $$('.item', list).forEach(x => $$('.opt', x).forEach(o => o.onclick = () => { $$('.opt', x).forEach(y => y.classList.remove('sel')); o.classList.add('sel'); }));
    const bb = { items: b.items.map(it => ({ opts: b.cats, a: it.c })) };
    return {
      n: b.items.length,
      get: () => $$('.item', list).map(x => { const s = $('.opt.sel', x); return s ? +s.dataset.k : null; }),
      set: a => $$('.item', list).forEach((x, i) => $$('.opt', x).forEach(o => o.classList.toggle('sel', a[i] === +o.dataset.k))),
      grade: a => bb.items.map((it, i) => ({ s: a[i] === it.a ? 1 : 0, empty: a[i] == null })),
      paint: res => res.forEach((r, i) => {
        const x = $$('.item', list)[i]; $$('.opt', x).forEach(o => o.classList.remove('ok', 'no'));
        if (!r) return paintItem(list, i, null);
        $$('.opt', x)[b.items[i].c].classList.add('ok'); const s = $('.opt.sel', x); if (s && r.s < 1) s.classList.add('no');
        paintItem(list, i, r, r.s >= 1 ? '' : `${t('correct')} → <span class="ans">${esc(plain(b.cats[b.items[i].c]))}</span>`);
      })
    };
  };

  C.order = (b, box) => {
    const list = el('<div class="items"></div>'); box.appendChild(list);
    const toks = b.items.map(it => { const w = it.a.split('|')[0].trim().split(/\s+/); let s = shuffle(w.map((x, k) => ({ x, k }))); if (w.length > 2 && s.every((y, k) => y.k === k)) s = s.reverse(); return s; });
    const state = b.items.map(() => []);
    b.items.forEach((it, i) => list.insertAdjacentHTML('beforeend', itemWrap(`<span class="qn">${i + 1}</span><div class="ord"><div class="ord-line" title="${esc(t('tap'))}"></div><div class="ord-bank">${toks[i].map((o, k) => `<button type="button" class="tok" data-k="${k}">${esc(o.x)}</button>`).join('')}</div><button type="button" class="btn sm ghost ord-clr">↺ ${t('clear')}</button></div>`, i)));
    const draw = i => {
      const x = $$('.item', list)[i];
      $('.ord-line', x).innerHTML = state[i].map(k => `<button type="button" class="tok in" data-k="${k}">${esc(toks[i][k].x)}</button>`).join('') || `<span class="small">${t('tap')}</span>`;
      $$('.ord-bank .tok', x).forEach(btn => { btn.disabled = state[i].includes(+btn.dataset.k); });
    };
    $$('.item', list).forEach((x, i) => {
      x.addEventListener('click', e => {
        const tk = e.target.closest('.tok'); if (tk) { const k = +tk.dataset.k; if (tk.classList.contains('in')) state[i].splice(state[i].indexOf(k), 1); else if (!state[i].includes(k)) state[i].push(k); draw(i); }
        if (e.target.closest('.ord-clr')) { state[i] = []; draw(i); }
      });
      draw(i);
    });
    return {
      n: b.items.length,
      get: () => state.map((s, i) => s.map(k => toks[i][k].x).join(' ')),
      set: a => b.items.forEach((_, i) => { const words = String(a[i] || '').split(' ').filter(Boolean); const used = []; state[i] = []; words.forEach(w => { const k = toks[i].findIndex((o, kk) => o.x === w && !used.includes(kk)); if (k >= 0) { used.push(k); state[i].push(k); } }); draw(i); }),
      grade: a => b.items.map((it, i) => { const r = gradeText(a[i], it.a); return r; }),
      paint: res => res.forEach((r, i) => paintItem(list, i, r, r && fbText(r)))
    };
  };

  C.dictation = (b, box) => {
    const list = el('<div class="items"></div>'); box.appendChild(list);
    b.items.forEach((it, i) => list.insertAdjacentHTML('beforeend', itemWrap(`<span class="qn">${i + 1}</span>${sayBtn(it.say, it.g, 'big')}<input class="inp dict" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(t('type'))}">`, i)));
    const ins = () => $$('.dict', list);
    return {
      n: b.items.length,
      get: () => ins().map(x => x.value),
      set: a => ins().forEach((x, i) => { x.value = a[i] || ''; }),
      grade: a => b.items.map((it, i) => gradeText(a[i], it.say, true)),
      paint: res => res.forEach((r, i) => paintItem(list, i, r, r && fbText(r)))
    };
  };

  C.open = (b, box) => {
    const list = el('<div class="items"></div>'); box.appendChild(list);
    b.items.forEach((it, i) => list.insertAdjacentHTML('beforeend', itemWrap(`<span class="qn">${i + 1}</span><span class="qt">${rich(it.q)}</span>${sayBtn(it.q)}<textarea class="ta oinp" rows="2" spellcheck="false" placeholder="${esc(t('type'))}"></textarea>`, i)));
    const ins = () => $$('.oinp', list);
    return {
      n: b.items.length, open: true,
      get: () => ins().map(x => x.value),
      set: a => ins().forEach((x, i) => { x.value = a[i] || ''; }),
      grade: a => b.items.map((it, i) => { const v = String(a[i] || '').trim(); return { s: v ? 1 : 0, empty: !v }; }),
      paint: res => res.forEach((r, i) => paintItem(list, i, r && (r.empty ? { s: 0 } : r), r && (b.items[i].model ? `📝 ${t('model')}: <span class="ans">${tl(b.items[i].model)}</span> ${sayBtn(b.items[i].model)}` : (r.empty ? t('empty') : ''))))
    };
  };

  /* ---------- exercise card ---------- */
  function exCard(b, secId) {
    const card = el(`<div class="card ex" id="ex-${b.id}">
      <div class="act-head"><span class="act-pill" style="background:var(--tc)">${b.listen ? '<span class="hp">🎧</span>' : ''}${b.n ? `<b style="background:var(--tc2)">${esc(b.n)}</b>` : ''}</span><span class="act-bar"></span></div>
      <h3 class="ex-title">${rich(b.title.es)}</h3>${I.lang !== 'es' && tr(b.title) ? `<p class="kr-sub">${esc(tr(b.title))}</p>` : ''}
      <div class="ex-body"></div>
      <div class="ex-ctl"><button class="btn chk">✔ ${t('check')}</button><button class="btn ghost rst">↺ ${t('retry')}</button>${b.type === 'open' ? '' : `<button class="btn ghost shw">👁 ${t('showAns')}</button>`}<span class="ex-score"></span></div></div>`);
    const body = $('.ex-body', card);
    const comp = C[b.type](b, body);
    const score = st => { const sc = $('.ex-score', card); if (!st) { sc.innerHTML = ''; return; } const p = Math.round(st.s * 100); sc.innerHTML = `<b>${Math.round(st.s * comp.n * 10) / 10} / ${comp.n}</b> <span class="pct ${p >= 90 ? 'hi' : p >= 60 ? 'mid' : 'lo'}">${p}%</span> ${p === 100 ? t('perfect') : p >= 70 ? t('good') : t('keep')}`; };
    $('.chk', card).onclick = () => {
      const a = comp.get(); const res = comp.grade(a);
      if (!comp.open && res.some(r => r.empty) && !res.every(r => r.empty) && !confirm(t('unans'))) return;
      if (res.every(r => r.empty)) { alert(t('empty')); return; }
      comp.paint(res);
      const s = res.reduce((x, r) => x + r.s, 0) / res.length;
      const old = S.ex[b.id] || { a: 0 };
      S.ex[b.id] = { s, n: comp.n, a: old.a + 1, ans: a, best: Math.max(old.best || 0, s) };
      save(); score(S.ex[b.id]); secDots();
    };
    $('.rst', card).onclick = () => { comp.set(comp.get().map(x => Array.isArray(x) ? x.map(() => '') : null)); comp.paint(comp.grade(comp.get()).map(() => null)); if (comp.clear) comp.clear(); score(null); if (b.type === 'order') { body.innerHTML = ''; const fresh = C.order(b, body); Object.assign(comp, fresh); } };
    const shw = $('.shw', card);
    if (shw) shw.onclick = () => {
      const ans = b.type === 'fill' ? b.items.map(it => it.a.map(x => x.split('|')[0])) : b.type === 'choice' ? b.items.map(it => it.a) : b.type === 'tf' ? b.items.map(it => it.a ? 0 : 1) : b.type === 'match' ? b.a.slice() : b.type === 'classify' ? b.items.map(it => it.c) : b.type === 'order' ? b.items.map(it => it.a.split('|')[0]) : b.items.map(it => it.say);
      comp.set(ans); comp.paint(comp.grade(ans));
    };
    const st = S.ex[b.id];
    if (st && st.ans) { try { comp.set(st.ans); comp.paint(comp.grade(st.ans)); score(st); } catch (e) { } }
    EXS.push({ b, sec: secId });
    return card;
  }

  /* ---------- content blocks ---------- */
  const trLine = o => { const x = tr(o); return x && I.lang !== 'es' ? `<div class="trl">${esc(x)}</div>` : ''; };
  function block(b, secId) {
    switch (b.type) {
      case 'note': return el(`<div class="tip"><span class="tip-ic">💡</span><div>${b.es ? `<div class="tip-es">${rich(b.es)}</div>` : ''}${c(b) && I.lang !== 'es' ? `<div>${rich(I.lang === 'ko' ? (b.ko || b.en) : (b.en || b.ko))}</div>` : (!b.es ? `<div>${rich(b.en || b.ko)}</div>` : '')}</div></div>`);
      case 'dialog': {
        const lines = b.lines || [];
        const d = el(`<div class="card dlg"><div class="dlg-top"><span class="dlg-pill2">💬 ${b.title ? rich(c(b.title.es ? b.title : b.title)) : 'Diálogo'}</span>${b.title && tr(b.title) && I.lang !== 'es' ? `<span class="small">${esc(tr(b.title))}</span>` : ''}<span class="sp"></span><button class="btn sm playall">▶ ${t('playAll')}</button><button class="btn sm ghost trt">🌐 ${t('trans')}</button></div>
          <div class="chatlist">${lines.map(l => `<div class="cl ${genderOf(l.who) === 'm' ? 'm' : 'f'}"><span class="who">${esc(l.who || '')}</span><div class="bub">${sayBtn(l.es, genderOf(l.who))} <span class="es">${rich(l.es)}</span>${trLine(l)}</div></div>`).join('')}</div></div>`);
        $('.playall', d).onclick = e => TTS.play(lines.map(l => ({ t: l.es, g: genderOf(l.who) })), e.currentTarget);
        $('.trt', d).onclick = () => d.classList.toggle('notr');
        if (!store.get('showTr', true)) d.classList.add('notr');
        return d;
      }
      case 'reading': {
        const d = el(`<div class="card reading"><div class="dlg-top"><span class="dlg-pill2 r">📖 ${b.title ? rich(b.title.es || c(b.title)) : 'Lectura'}</span>${b.title && tr(b.title) && I.lang !== 'es' ? `<span class="small">${esc(tr(b.title))}</span>` : ''}<span class="sp"></span><button class="btn sm playall">▶ ${t('playAll')}</button><button class="btn sm ghost trt">🌐 ${t('trans')}</button></div>
          ${(b.paras || []).map(p => `<p class="rp">${sayBtn(p.es)} <span class="es">${rich(p.es)}</span>${trLine(p)}</p>`).join('')}</div>`);
        $('.playall', d).onclick = e => TTS.play((b.paras || []).map(p => ({ t: p.es, g: 'f' })), e.currentTarget);
        $('.trt', d).onclick = () => d.classList.toggle('notr');
        return d;
      }
      case 'vocab': return el(`<div class="card vocab">${b.title ? `<h3>📚 ${rich(b.title.es || c(b.title))} ${tr(b.title) && I.lang !== 'es' ? `<small class="small">${esc(tr(b.title))}</small>` : ''}</h3>` : ''}
          <div class="vgrid">${b.items.map(v => `<button type="button" class="vcard" data-say="${esc(plain(v.es))}"><span class="ve">${esc(v.e || '🔹')}</span><b>${rich(v.es)}</b><small>${esc(I.lang === 'es' ? (v.en || '') : tr(v))}</small></button>`).join('')}</div></div>`);
      case 'table': {
        const cell = (x, h) => { const s = String(x == null ? '' : x); return `<${h ? 'th' : 'td'}${s && /[a-záéíóúñ]/i.test(s) && !h ? ' class="spk" data-say="' + esc(plain(s).replace(/\//g, ',')) + '"' : ''}>${rich(s)}</${h ? 'th' : 'td'}>`; };
        return el(`<div class="card tbl">${b.title ? `<h3>📐 ${rich(b.title.es || c(b.title))} ${tr(b.title) && I.lang !== 'es' ? `<small class="small">${esc(tr(b.title))}</small>` : ''}</h3>` : ''}
          <div class="tscroll"><table class="gtab2">${b.head ? `<thead><tr>${b.head.map(h => cell(h, true)).join('')}</tr></thead>` : ''}<tbody>${b.rows.map(r => `<tr>${r.map((x, k) => k === 0 && b.head && !b.head[0] ? `<th>${rich(x)}</th>` : cell(x)).join('')}</tr>`).join('')}</tbody></table></div>
          ${b.note && (tr(b.note) || b.note.es) ? `<p class="small">💡 ${esc(I.lang === 'es' ? (b.note.es || b.note.en || '') : tr(b.note))}</p>` : ''}</div>`);
      }
      case 'speak': {
        const d = el(`<div class="card speak"><div class="act-head"><span class="act-pill" style="background:var(--tc)"><span class="hp">🗣️</span>${b.n ? `<b style="background:var(--tc2)">${esc(b.n)}</b>` : ''}</span><span class="act-bar"></span></div>
          <h3 class="ex-title">${rich((b.title && b.title.es) || t('speak'))}</h3>${b.title && tr(b.title) && I.lang !== 'es' ? `<p class="kr-sub">${esc(tr(b.title))}</p>` : ''}
          <div class="tip"><span class="tip-ic">👥</span><div>${esc(I.lang === 'es' ? (b.prompt.es || b.prompt.en || '') : tr(b.prompt))}</div></div>
          ${b.model && b.model.length ? `<div class="modelo"><span class="modelo-tab">modelo</span><div class="modelo-in">${b.model.map(l => `<div class="ml">${sayBtn(l.es, genderOf(l.who))} ${l.who ? `<b>${esc(l.who)}:</b> ` : ''}${rich(l.es)}${trLine(l)}</div>`).join('')}<div style="margin-top:8px"><button class="btn sm playall">▶ ${t('playAll')}</button> <button class="btn sm ghost mic">🎙️ ${t('mic')}</button><span class="heard small"></span></div></div></div>` : ''}</div>`);
        const pa = $('.playall', d); if (pa) pa.onclick = e => TTS.play(b.model.map(l => ({ t: l.es, g: genderOf(l.who) })), e.currentTarget);
        const mic = $('.mic', d); if (mic) mic.onclick = () => {
          const R = window.SpeechRecognition || window.webkitSpeechRecognition; const out = $('.heard', d);
          if (!R) { out.textContent = ' ' + t('micNo'); return; }
          const r = new R(); r.lang = 'es-ES'; r.interimResults = false; mic.classList.add('playing');
          r.onresult = e => { out.innerHTML = ` ${t('heard')}: <b>${esc(e.results[0][0].transcript)}</b>`; };
          r.onend = () => mic.classList.remove('playing'); r.onerror = () => mic.classList.remove('playing'); r.start();
        };
        return d;
      }
      default: return exCard(b, secId);
    }
  }

  /* ---------- sections ---------- */
  function secItems(id) { return EXS.filter(x => x.sec === id); }
  function secPct(id) { const xs = secItems(id); if (!xs.length) return null; return xs.filter(x => S.ex[x.b.id]).length / xs.length; }
  function secAvg(id) { const xs = secItems(id).filter(x => S.ex[x.b.id]); if (!xs.length) return null; return xs.reduce((a, x) => a + S.ex[x.b.id].s, 0) / xs.length; }
  function secDots() {
    $$('#nav a[data-id]').forEach(a => { const p = secPct(a.dataset.id); const d = $('.dot', a); if (d) d.className = 'dot ' + (p == null ? 'none' : p >= 1 ? 'full' : p > 0 ? 'part' : ''); });
  }
  function totals() { const n = EXS.length, d = EXS.filter(x => S.ex[x.b.id]).length; const avg = d ? EXS.filter(x => S.ex[x.b.id]).reduce((a, x) => a + S.ex[x.b.id].s, 0) / d : 0; return { n, d, avg }; }
  function progress() {
    const T = totals(); const p = T.n ? T.d / T.n : 0;
    const bar = $('#topbar i'); if (bar) bar.style.width = (p * 100) + '%';
    const lb = $('#toplbl'); if (lb) lb.textContent = `${t('progress')} ${Math.round(p * 100)}%`;
    const rg = $('#ring'); if (rg) rg.innerHTML = ring(p);
  }
  function summary() {
    const T = totals(); const sum = store.get('sum', {});
    sum['u' + U.num] = { d: T.d, n: T.n, p: Math.round(T.avg * 100), e: S.exams.length ? S.exams[S.exams.length - 1].t : null };
    store.set('sum', sum);
  }
  function ring(p) { const r = 52, cc = 2 * Math.PI * r; return `<svg viewBox="0 0 130 130" class="ring"><circle cx="65" cy="65" r="${r}" class="rb"/><circle cx="65" cy="65" r="${r}" class="rf" stroke-dasharray="${cc}" stroke-dashoffset="${cc * (1 - p)}"/><text x="65" y="72" text-anchor="middle">${Math.round(p * 100)}%</text></svg>`; }

  function secHeader(s) {
    return `<div class="sec-head" style="--tc:${colorOf(s)}"><span class="sec-tag">${s.tag || (s.id === 'mundo' ? '🌎' : s.id === 'sintesis' ? '🧩' : s.id === 'yaconoces' ? '✅' : '★')}</span><div><h2>${esc(s.name)}</h2>${s.sub ? `<p>${rich(s.sub.es || '')}${I.lang !== 'es' && tr(s.sub) ? ` · <span>${esc(tr(s.sub))}</span>` : ''}</p>` : ''}</div></div>`;
  }
  function buildCover(sec) {
    sec.insertAdjacentHTML('beforeend', `<div class="cover"><div class="cover-hero gen" style="background:linear-gradient(120deg,#1b8fc9,#3fb3e0 50%,#8fd3f4)"><div class="hero-emo">${esc(U.emoji)}</div><div class="badge"><small>Unidad</small>${U.num}</div></div>
      <div class="cover-body"><h1>${esc(U.title)}</h1><p class="cov-top">${esc(c(U.topics))} · <span class="small" style="color:#fde7b0">ECO A1 · p. ${esc(U.pages)}</span></p>
      <table class="obj"><tr><th>${t('goals')}</th><td>${(U.goals || []).map(g => `<div>• <b>${esc(g.es)}</b>${I.lang !== 'es' && tr(g) ? ` <span class="gtr">— ${esc(tr(g))}</span>` : ''}</div>`).join('')}</td></tr></table></div></div>
      <div class="grid2"><div class="card"><h3>👩‍🎓 ${t('student')}</h3><label class="lbl">${t('nameLbl')}</label><input id="stuName" class="inp wide" placeholder="${esc(t('namePh'))}"><p class="small">${t('nameNote')}</p></div>
      <div class="card center"><h3>📈 ${t('myProg')}</h3><div id="ring"></div><button class="btn big" id="goNext">${t('cont')} →</button></div></div>
      <div class="card"><h3>✍️ ${t('howTo')}</h3><div class="legend"><div><span class="mk ok">○</span> ${t('lgOk')}</div><div><span class="mk half">△</span> ${t('lgHalf')}</div><div><span class="mk no">✕</span> ${t('lgNo')}</div><div>${sayBtn('Hola, ¿cómo te llamas?')} ${t('listen')} · 🔊 ${t('voice')}</div></div><p class="small">${t('tipStudy')}</p></div>`);
    const nm = $('#stuName', sec); nm.value = store.get('name', ''); nm.oninput = () => store.set('name', nm.value);
    $('#goNext', sec).onclick = () => { const nx = SECS.find(x => x.id !== 'portada' && secPct(x.id) != null && secPct(x.id) < 1); go(nx ? nx.id : 'examen'); };
  }

  /* ---------- ¡Compruébalo! exam ---------- */
  function pool() {
    const P = [];
    EXS.forEach(({ b }) => {
      if (b.type === 'fill') b.items.forEach((it, i) => P.push({ k: `${b.id}:${i}`, blk: { type: 'fill', items: [it] }, inst: b.title }));
      if (b.type === 'choice') b.items.forEach((it, i) => P.push({ k: `${b.id}:${i}`, blk: { type: 'choice', items: [it] }, inst: b.title }));
      if (b.type === 'tf') b.items.forEach((it, i) => P.push({ k: `${b.id}:${i}`, blk: { type: 'tf', items: [it] }, inst: b.title }));
      if (b.type === 'order') b.items.forEach((it, i) => P.push({ k: `${b.id}:${i}`, blk: { type: 'order', items: [it] }, inst: b.title }));
      if (b.type === 'dictation') b.items.forEach((it, i) => P.push({ k: `${b.id}:${i}`, blk: { type: 'dictation', items: [it] }, inst: b.title }));
      if (b.type === 'match') b.left.forEach((l, i) => {
        const wrong = shuffle(b.right.map((_, k) => k).filter(k => k !== b.a[i])).slice(0, 3); const opts = shuffle([b.a[i], ...wrong]);
        P.push({ k: `${b.id}:${i}`, blk: { type: 'choice', items: [{ q: l, opts: opts.map(k => b.right[k]), a: opts.indexOf(b.a[i]) }] }, inst: b.title });
      });
      if (b.type === 'classify') b.items.forEach((it, i) => P.push({ k: `${b.id}:${i}`, blk: { type: 'choice', items: [{ q: it.w, opts: b.cats, a: it.c }] }, inst: b.title }));
    });
    return P;
  }
  function buildExam(sec) {
    const P = pool();
    sec.insertAdjacentHTML('beforeend', `<div class="card exam-intro"><h3>🎯 ${t('examSub')}</h3><div class="ex-ctl"><button class="btn newx">🔀 ${t('examNew')}</button><span class="small">${Math.min(20, P.length)} × ${Math.round(100 / Math.min(20, P.length) * 10) / 10} ${t('pts')}</span></div></div><div class="exam-list"></div>
      <div class="card center"><button class="btn big subx">📝 ${t('examSubmit')}</button><div class="exam-res"></div></div>
      <div class="card"><h3>📜 ${t('examHist')}</h3><div class="hist2"></div></div>`);
    const list = $('.exam-list', sec); let comps = [];
    const hist = () => { $('.hist2', sec).innerHTML = S.exams.length ? S.exams.slice(-10).map(x => `<div class="hb2"><i style="height:${x.t}%"></i><b>${x.t}</b><small>${esc(x.d)}</small></div>`).join('') : `<p class="small">${t('notYet')}</p>`; };
    const draw = keys => {
      list.innerHTML = ''; comps = [];
      keys.forEach((k, qi) => {
        const q = P.find(p => p.k === k) || (k.includes(':') ? null : null); if (!q) return;
        const card = el(`<div class="card exq"><div class="exq-h"><span class="qbig">${qi + 1}</span><span>${rich(q.inst.es)}${I.lang !== 'es' && tr(q.inst) ? ` <small class="small">· ${esc(tr(q.inst))}</small>` : ''}</span></div><div class="exq-b"></div></div>`);
        list.appendChild(card);
        const cp = C[q.blk.type](q.blk, $('.exq-b', card)); $$('.qn', card).forEach(x => x.remove());
        comps.push(cp);
      });
    };
    const fresh = () => { S.examQ = shuffle(P).slice(0, 20).map(p => p.k); S.examAns = null; save(); draw(S.examQ); $('.exam-res', sec).innerHTML = ''; };
    $('.newx', sec).onclick = fresh;
    $('.subx', sec).onclick = () => {
      if (!comps.length) return;
      const ans = comps.map(cp => cp.get()); const res = comps.map((cp, i) => cp.grade(ans[i]));
      if (res.some(r => r[0].empty) && !confirm(t('unans'))) return;
      comps.forEach((cp, i) => cp.paint(res[i]));
      const tot = Math.round(res.reduce((a, r) => a + r[0].s, 0) / res.length * 100);
      const d = new Date(); S.exams.push({ t: tot, d: `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}` });
      S.examAns = ans; save(); hist();
      $('.exam-res', sec).innerHTML = `<div class="stamp ${tot >= 90 ? '' : tot >= 70 ? 'g1' : 'g2'}" style="margin:16px auto"><b>${tot}</b><small>/ 100</small><em>${tot >= 90 ? t('perfect') : tot >= 70 ? t('good') : t('keep')}</em></div>`;
    };
    if (P.length) { if (!S.examQ || !S.examQ.every(k => P.some(p => p.k === k))) fresh(); else { draw(S.examQ); if (S.examAns) { try { comps.forEach((cp, i) => { cp.set(S.examAns[i]); cp.paint(cp.grade(S.examAns[i])); }); } catch (e) { } } } }
    hist();
  }

  /* ---------- Resultados ---------- */
  function radar(labels, vals) {
    const n = labels.length, cx = 150, cy = 140, r = 100; if (n < 3) return '';
    const pt = (i, v) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + Math.cos(a) * r * v, cy + Math.sin(a) * r * v]; };
    const grid = [0.25, 0.5, 0.75, 1].map(g => `<polygon class="rg" points="${labels.map((_, i) => pt(i, g).join(',')).join(' ')}"/>`).join('');
    const axes = labels.map((_, i) => `<line class="rg" x1="${cx}" y1="${cy}" x2="${pt(i, 1)[0]}" y2="${pt(i, 1)[1]}"/>`).join('');
    const poly = `<polygon class="rv" points="${vals.map((v, i) => pt(i, Math.max(0.02, v)).join(',')).join(' ')}"/>`;
    const lab = labels.map((l, i) => { const [x, y] = pt(i, 1.2); return `<text x="${x}" y="${y + 4}" text-anchor="middle">${esc(l)}</text>`; }).join('');
    return `<svg viewBox="0 0 300 290" class="radar">${grid}${axes}${poly}${vals.map((v, i) => `<circle class="rd" cx="${pt(i, Math.max(0.02, v))[0]}" cy="${pt(i, Math.max(0.02, v))[1]}" r="4"/>`).join('')}${lab}</svg>`;
  }
  function renderResults() {
    const sec = $('#sec-resultados'); const T = totals(); const last = S.exams.length ? S.exams[S.exams.length - 1].t : null;
    const rs = SECS.filter(s => secItems(s.id).length);
    const final = Math.round((last != null ? (T.avg * 0.6 + last / 100 * 0.4) : T.avg) * 100);
    sec.innerHTML = secHeader({ id: 'resultados', tag: '📊', name: 'Resultados', sub: { es: 'Boletín de la unidad', ko: t('resultsSub'), en: t('resultsSub') } }) + `<div class="card report">
      <div class="rp-head"><div><h2>Unidad ${U.num} · ${esc(U.title)}</h2><p>👩‍🎓 ${esc(store.get('name', '') || '—')} · ${new Date().toLocaleDateString()}</p></div><div class="stamp ${final >= 90 ? '' : final >= 70 ? 'g1' : 'g2'}"><b>${final}</b><small>/ 100</small><span>${t('overall')}</span></div></div>
      <div class="grid2"><div><h3>📊 ${t('bySec')}</h3>${rs.map(s => { const a = secAvg(s.id), p = secPct(s.id); return `<a class="sbar" href="#/${s.id}"><span><b style="color:${colorOf(s)}">${s.tag || '•'}</b> ${esc(s.name)}</span><div class="bar"><u style="width:${(p || 0) * 100}%"></u><i style="width:${(a || 0) * (p || 0) * 100}%"></i></div><span>${a == null ? '—' : Math.round(a * 100) + '%'} <small class="small">${secItems(s.id).filter(x => S.ex[x.b.id]).length}/${secItems(s.id).length}</small></span></a>`; }).join('')}
        <p class="small">✔ ${t('solved')}: ${T.d} / ${T.n} · ${t('score')}: ${Math.round(T.avg * 100)}% · 🎯 ¡Compruébalo!: ${last == null ? '—' : last}</p></div>
        <div class="center">${radar(rs.map(s => s.tag || s.name.split(' ')[0]), rs.map(s => (secAvg(s.id) || 0) * (secPct(s.id) || 0)))}</div></div>
      <div class="ex-ctl"><button class="btn" onclick="window.print()">🖨️ ${t('print')}</button><button class="btn ghost rstall">🗑️ ${t('reset')}</button></div></div>`;
    $('.rstall', sec).onclick = () => { if (confirm(t('resetQ'))) { store.set(KEY, null); location.reload(); } };
  }

  /* ---------- shell, nav, routing ---------- */
  function go(id) { location.hash = '#/' + id; }
  function route() {
    const id = (location.hash.match(/^#\/(\w+)/) || [])[1] || 'portada';
    const x = SECS.find(z => z.id === id) || SECS[0];
    $$('main > section').forEach(s => { s.hidden = s.id !== 'sec-' + x.id; });
    $$('#nav a').forEach(a => a.classList.toggle('on', a.dataset.id === x.id));
    if (x.id === 'resultados') renderResults();
    const i = SECS.indexOf(x), pv = SECS[i - 1], nx = SECS[i + 1];
    $('#pager').innerHTML = `${pv ? `<a class="btn ghost" href="#/${pv.id}">← ${esc(pv.name)}</a>` : '<span></span>'}${nx ? `<a class="btn" href="#/${nx.id}">${esc(nx.name)} →</a>` : `<a class="btn" href="../">🏠 ${t('home')}</a>`}`;
    document.body.classList.remove('navopen'); TTS.stop(); window.scrollTo(0, 0); progress();
  }
  function render() {
    EXS = [];
    document.title = `Unidad ${U.num} · ${U.title} — ECO A1`;
    document.body.innerHTML = `<header class="top"><button id="menu" class="menu" aria-label="menu">☰</button>
      <a class="brand" href="#/portada"><span class="lb">Unidad<b>${U.num}</b></span><span class="bt">${esc(U.title)}<small>ECO A1 · Español lengua extranjera</small></span></a>
      <button id="sndBtn" class="sndbtn" title="${esc(t('voice'))}">🔊<span> ${t('voice')}</span></button>
      <div class="prog"><span id="toplbl"></span><div id="topbar"><i></i></div></div>
      <a class="home" href="../" title="${esc(t('home'))}">🏠<span> ${t('home')}</span></a><span id="langslot"></span></header>
      <div class="wrap"><nav id="nav"></nav><main><div id="pager" class="pager"></div></main></div>
      <footer class="foot">${t('footer')}</footer>`;
    $('#langslot').appendChild(I.switcher());
    $('#menu').onclick = () => document.body.classList.toggle('navopen');
    $('#sndBtn').onclick = () => TTS.panel();
    SECS = U.sections.map(s => Object.assign({}, s)).concat([
      { id: 'examen', name: '¡Compruébalo!', sub: { es: 'Examen de la unidad', ko: '단원 평가 100점', en: 'Unit test (100 pts)' }, grp: 'gEval' },
      { id: 'resultados', name: 'Resultados', sub: { es: 'Mi boletín', ko: '나의 성적표', en: 'My report card' }, grp: 'gEval' }]);
    SECS.forEach(s => { if (!s.grp) s.grp = s.id === 'portada' ? 'gStart' : ['mundo', 'sintesis', 'yaconoces'].includes(s.id) ? 'gCult' : 'gUnit'; });
    let grp = null, nav = '';
    SECS.forEach(s => {
      if (s.grp !== grp) { grp = s.grp; nav += `<div class="ng">${t(grp)}</div>`; }
      const badge = `<span class="nb" style="background:${colorOf(s)}">${s.tag || (s.id === 'portada' ? '★' : s.id === 'mundo' ? '🌎' : s.id === 'sintesis' ? '🧩' : s.id === 'yaconoces' ? '✓' : s.id === 'examen' ? '🎯' : '📊')}</span>`;
      nav += `<a href="#/${s.id}" data-id="${s.id}">${badge}<span class="nl"><b>${esc(s.id === 'portada' ? t('cover') : s.name)}</b><small>${esc(s.id === 'portada' ? U.title : (I.lang === 'es' ? (s.sub && s.sub.es) : tr(s.sub)) || (s.sub && s.sub.es) || '')}</small></span><span class="dot"></span></a>`;
    });
    $('#nav').innerHTML = nav;
    const main = $('main');
    SECS.forEach(s => {
      const sec = document.createElement('section'); sec.id = 'sec-' + s.id; sec.hidden = true; sec.style.setProperty('--tc', colorOf(s)); sec.style.setProperty('--tc2', 'color-mix(in srgb,' + colorOf(s) + ' 70%, #000)');
      main.insertBefore(sec, $('#pager'));
      try {
        if (s.id === 'resultados') return;
        if (s.id === 'examen') { sec.innerHTML = secHeader(s); return; }
        if (s.id === 'portada') buildCover(sec); else sec.innerHTML = secHeader(s);
        (s.blocks || []).forEach(b => sec.appendChild(block(b, s.id)));
      } catch (err) { console.error(s.id, err); sec.insertAdjacentHTML('beforeend', `<p class="warn">⚠️ ${esc(err.message)}</p>`); }
    });
    try { buildExam($('#sec-examen')); } catch (err) { console.error(err); }
    secDots(); route(); summary();
    keys();
  }

  /* ---------- accent keyboard ---------- */
  function keys() {
    const LOW = ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü', '¿', '¡'];
    const bar = el(`<div id="keys" class="keys" hidden><span class="keys-l">${t('keys')}</span><div class="keys-row">${LOW.map(ch => `<button type="button" class="key" data-c="${ch}">${ch}</button>`).join('')}<button type="button" class="key shift">⇧</button></div></div>`);
    document.body.appendChild(bar);
    let target = null, upper = false, hideT = null;
    const isF = n => n && n.matches && n.matches('main input.inp:not(select), main textarea');
    document.addEventListener('focusin', e => { if (isF(e.target)) { clearTimeout(hideT); target = e.target; bar.hidden = false; document.body.classList.add('keys-on'); } });
    document.addEventListener('focusout', e => { if (isF(e.target)) hideT = setTimeout(() => { if (!isF(document.activeElement)) { bar.hidden = true; document.body.classList.remove('keys-on'); } }, 180); });
    const press = b => {
      if (b.classList.contains('shift')) { upper = !upper; b.classList.toggle('on', upper); $$('.key[data-c]', bar).forEach(k => { k.textContent = upper ? k.dataset.c.toUpperCase() : k.dataset.c; }); return; }
      const tg = target; if (!tg) return; const ch = upper ? b.dataset.c.toUpperCase() : b.dataset.c;
      const s = tg.selectionStart ?? tg.value.length, e = tg.selectionEnd ?? s;
      tg.value = tg.value.slice(0, s) + ch + tg.value.slice(e); tg.focus(); try { tg.setSelectionRange(s + 1, s + 1); } catch (_) { }
      tg.dispatchEvent(new Event('input', { bubbles: true }));
    };
    bar.addEventListener('mousedown', e => { e.preventDefault(); const b = e.target.closest('.key'); if (b) press(b); });
    bar.addEventListener('touchstart', e => { e.preventDefault(); const b = e.target.closest('.key'); if (b) press(b); }, { passive: false });
  }

  ECO.unit = function (d) {
    U = d; U.num = String(U.num); KEY = 'u' + U.num;
    S = Object.assign({ ex: {}, exams: [], examQ: null, examAns: null }, store.get(KEY, null) || {});
    const start = () => { render(); window.addEventListener('hashchange', route); document.addEventListener('langchange', () => { const h = location.hash; render(); location.hash = h; route(); }); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  };
  ECO._test = { gradeText, norm };
})();
