(() => {
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const LETTERS = 'ABCD';
  const DATA = window.QUIZ_DATA;

  $('loading').hidden = true;
  if (!Array.isArray(DATA) || !DATA.length) { $('loadError').hidden = false; return; }

  /* ---------- storage (progress per question: 1 = last answer wrong, 2 = mastered) ---------- */
  const KEY = 'latsol-progress';
  let canStore = true, progress = {};
  try { progress = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; localStorage.setItem(KEY + '-test', '1'); }
  catch (e) { canStore = false; progress = {}; }
  if (!canStore) $('storageNote').hidden = false;
  const save = () => { if (canStore) try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch (e) {} };
  const prog = (sid) => (progress[sid] = progress[sid] || {});
  const stats = (s) => {
    const p = prog(s.id), all = s.questions.map((_, i) => i);
    return {
      all,
      mastered: all.filter((i) => p[i] === 2),
      todo: all.filter((i) => p[i] !== 2),
      wrong: all.filter((i) => p[i] === 1),
    };
  };

  /* ---------- theme ---------- */
  const themeBtn = $('themeBtn');
  const isDark = () => document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  const syncTheme = () => { themeBtn.textContent = isDark() ? 'Mode terang' : 'Mode gelap'; document.querySelector('meta[name=theme-color]').content = isDark() ? '#1B1916' : '#F4EEE2'; };
  themeBtn.onclick = () => {
    const t = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('latsol-theme', t); } catch (e) {}
    syncTheme();
  };
  syncTheme();

  /* ---------- views + phone back button ---------- */
  const views = { home: $('viewHome'), setup: $('viewSetup'), play: $('viewPlay'), done: $('viewDone') };
  let current = null, subject = null, session = null;
  function show(name, push = true) {
    if ((name === 'setup' && !subject) || ((name === 'play' || name === 'done') && !session)) name = subject ? 'setup' : 'home';
    if (name === 'home') renderHome();
    if (name === 'setup') renderSetup();
    for (const k in views) views[k].hidden = k !== name;
    if (push && name !== current) history.pushState({ v: name }, '');
    current = name;
    window.scrollTo(0, 0);
  }
  // a finished or abandoned session can't be resumed, so back from play/done lands on setup
  addEventListener('popstate', (e) => {
    const v = (e.state && e.state.v) || 'home';
    show(v === 'play' || v === 'done' ? 'setup' : v, false);
  });
  document.addEventListener('click', (e) => { const b = e.target.closest('[data-go]'); if (b) show(b.dataset.go); });
  $('homeBtn').onclick = () => show('home');

  /* ---------- home ---------- */
  function renderHome() {
    const list = $('subjectList');
    list.replaceChildren();
    for (const s of DATA) {
      const st = stats(s), pct = Math.round((st.mastered.length / st.all.length) * 100);
      const b = el('button', 'subject');
      b.type = 'button';
      b.append(el('span', 'code', s.id.toUpperCase()), el('span', 'name', s.name), el('span', 'pct', pct + '%'));
      const meta = st.mastered.length || st.wrong.length
        ? `${st.mastered.length} dari ${st.all.length} soal dikuasai` + (st.wrong.length ? ` · ${st.wrong.length} perlu diulang` : '')
        : `${st.all.length} soal, belum dimulai`;
      b.append(el('span', 'meta', meta));
      const track = el('span', 'track'), fill = el('i');
      fill.style.width = pct + '%';
      track.append(fill);
      b.append(track);
      b.setAttribute('aria-label', `${s.name}, ${meta}`);
      b.onclick = () => { subject = s; show('setup'); };
      const li = el('li'); li.append(b); list.append(li);
    }
  }

  /* ---------- setup ---------- */
  const form = $('setupForm');
  const val = (name) => form.elements[name].value;
  function renderSetup() {
    const st = stats(subject);
    $('setupTitle').textContent = subject.name;
    $('setupStats').textContent = `${st.mastered.length} dari ${st.all.length} soal sudah dikuasai.`;
    const text = { all: `${st.all.length} soal`, todo: `${st.todo.length} soal yang belum pernah benar di percobaan pertama`, wrong: `${st.wrong.length} soal yang terakhir kamu jawab salah` };
    for (const k in text) {
      form.querySelector(`[data-count=${k}]`).textContent = text[k];
      const input = form.querySelector(`input[name=pool][value=${k}]`);
      input.disabled = st[k].length === 0;
      if (input.disabled && input.checked) form.querySelector('input[name=pool][value=all]').checked = true;
    }
    updateStart();
  }
  function updateStart() {
    const n = Math.min(+val('count'), stats(subject)[val('pool')].length);
    $('startBtn').textContent = val('mode') === 'card' ? `Buka ${n} kartu` : `Mulai ${n} soal`;
  }
  form.addEventListener('change', updateStart);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let pool = stats(subject)[val('pool')].slice();
    if (!pool.length) { $('poolEmpty').hidden = false; $('poolEmpty').textContent = 'Tidak ada soal di pilihan ini. Pilih "Semua soal".'; return; }
    $('poolEmpty').hidden = true;
    if (val('order') === 'shuffle') shuffle(pool);
    start(pool.slice(0, +val('count')), val('mode'));
  });
  $('resetBtn').onclick = () => {
    if (!confirm(`Hapus semua progres ${subject.name}? Tanda dikuasai dan perlu diulang akan kembali kosong.`)) return;
    delete progress[subject.id]; save(); renderSetup();
  };

  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  /* ---------- session ---------- */
  function start(list, mode) {
    // queue grows when a wrong answer is pushed back to the end; first[] records first-try results only
    session = { mode, queue: list.slice(), unique: list.length, pos: 0, first: {}, streak: 0, answered: false };
    show('play');
    renderQuestion();
  }

  function renderStem(text, box) {
    box.replaceChildren();
    const lines = text.split('\n');
    let pre = null;
    for (const line of lines) {
      const code = /^\s|^</.test(line) || /[{}]/.test(line);
      if (code) {
        if (!pre) { pre = el('pre'); pre.append(el('code')); box.append(pre); }
        pre.firstChild.textContent += (pre.firstChild.textContent ? '\n' : '') + line;
      } else { pre = null; box.append(el('p', '', line)); }
    }
  }

  function renderQuestion() {
    const s = session, idx = s.queue[s.pos], q = subject.questions[idx];
    s.answered = false; s.picked = null;
    const retry = s.pos >= s.unique;
    $('qCounter').textContent = `${Math.min(s.pos + 1, s.queue.length)} / ${s.queue.length}` + (s.queue.length > s.unique ? ` (${s.queue.length - s.unique} ulangan)` : '');
    $('streak').textContent = s.streak >= 3 ? `${s.streak} benar beruntun` : '';
    const bar = $('progress');
    bar.setAttribute('aria-valuemax', s.queue.length); bar.setAttribute('aria-valuenow', s.pos);
    bar.firstElementChild.style.width = (s.pos / s.queue.length) * 100 + '%';

    $('qNum').textContent = `Soal no. ${idx + 1}` + (retry ? ', ulangan' : '');
    renderStem(q.q, $('stem'));
    const opts = $('opts'); opts.replaceChildren();
    q.o.forEach((o, i) => {
      const b = el('button', 'opt'); b.type = 'button';
      b.append(el('span', 'l', LETTERS[i]), el('span', '', o));
      if (s.mode === 'quiz') { b.onclick = () => pick(i); b.setAttribute('aria-pressed', 'false'); } else b.disabled = true;
      const li = el('li'); li.append(b); opts.append(li);
    });
    const v = $('verdict'); v.textContent = ''; v.className = 'verdict';
    $('explain').hidden = true;

    const act = $('actions'); act.replaceChildren();
    if (s.mode === 'card') {
      const reveal = el('button', 'primary', 'Lihat kunci jawaban'); reveal.type = 'button';
      reveal.onclick = () => { showAnswer(null); cardButtons(); };
      act.append(reveal);
    }
    const card = $('card'); card.classList.remove('enter'); void card.offsetWidth; card.classList.add('enter');
    $('qNum').tabIndex = -1; $('qNum').focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  function showAnswer(picked) {
    const s = session, q = subject.questions[s.queue[s.pos]];
    s.answered = true;
    [...$('opts').querySelectorAll('.opt')].forEach((b, i) => {
      b.disabled = true; b.classList.remove('picked'); b.removeAttribute('aria-pressed');
      if (i === q.a) { b.classList.add('right'); b.append(el('span', 'tag', 'Kunci jawaban')); }
      else if (i === picked) { b.classList.add('wrong'); b.append(el('span', 'tag', 'Jawabanmu')); }
    });
    const ex = $('explain'); ex.replaceChildren(el('b', '', 'Penjelasan'), document.createTextNode(q.e)); ex.hidden = false;
  }

  function record(correct) {
    const s = session, idx = s.queue[s.pos], p = prog(subject.id);
    if (!(idx in s.first)) { s.first[idx] = correct; p[idx] = correct ? 2 : 1; save(); }
    if (correct) s.streak++; else { s.streak = 0; s.queue.push(idx); }
  }

  // first tap only selects; grading waits for the confirm button so a mis-tap can be changed
  function pick(i) {
    const s = session; if (s.answered) return;
    s.picked = i;
    $('opts').querySelectorAll('.opt').forEach((b, j) => { b.classList.toggle('picked', j === i); b.setAttribute('aria-pressed', j === i); });
    let ok = $('actions').querySelector('.primary');
    if (!ok) {
      ok = el('button', 'primary'); ok.type = 'button';
      ok.onclick = () => answer(session.picked);
      $('actions').replaceChildren(ok);
      ok.scrollIntoView({ block: 'nearest' });
    }
    ok.textContent = `Yakin, jawab ${LETTERS[i]}`;
  }

  function answer(i) {
    const s = session; if (s.answered || i == null) return;
    const q =subject.questions[s.queue[s.pos]], ok = i === q.a;
    record(ok);
    showAnswer(i);
    const v = $('verdict');
    v.className = 'verdict ' + (ok ? 'ok' : 'bad');
    v.textContent = ok ? 'Benar.' : `Salah. Jawabannya ${LETTERS[q.a]}. Soal ini akan muncul lagi di akhir sesi.`;
    nextButton();
  }

  function cardButtons() {
    const act = $('actions'); act.replaceChildren();
    const no = el('button', 'ghost', 'Belum hafal'), yes = el('button', 'primary', 'Sudah hafal');
    no.type = yes.type = 'button';
    no.onclick = () => { record(false); next(); };
    yes.onclick = () => { record(true); next(); };
    act.append(no, yes); yes.focus({ preventScroll: true });
  }

  function nextButton() {
    const act = $('actions'); act.replaceChildren();
    const last = session.pos + 1 >= session.queue.length;
    const b = el('button', 'primary', last ? 'Lihat hasil' : 'Soal berikutnya'); b.type = 'button';
    b.onclick = next; act.append(b); b.focus({ preventScroll: true });
  }

  function next() {
    session.pos++;
    if (session.pos >= session.queue.length) return finish();
    renderQuestion();
  }

  function finish() {
    const s = session, ids = Object.keys(s.first).map(Number);
    const right = ids.filter((i) => s.first[i]).length, missed = ids.filter((i) => !s.first[i]);
    $('score').replaceChildren(document.createTextNode(right), el('small', '', ` / ${s.unique}`));
    const card = s.mode === 'card';
    $('doneTitle').textContent = !missed.length
      ? (card ? 'Semua kartu sudah kamu tandai hafal.' : 'Semua benar di percobaan pertama.')
      : `${missed.length} soal sempat ${card ? 'belum hafal' : 'salah'}, dan sudah kamu ulang sampai ${card ? 'hafal' : 'benar'}.`;
    $('doneSub').textContent = `Angka di atas menghitung jawaban yang benar di percobaan pertama saja. Soal yang salah tercatat sebagai "perlu diulang" di ${subject.name}.`;
    const again = $('againBtn');
    if (missed.length) {
      again.textContent = `Ulangi ${missed.length} soal yang salah`;
      again.onclick = () => start(shuffle(missed.slice()), s.mode);
    } else {
      again.textContent = 'Lanjut soal lain yang belum dikuasai';
      again.onclick = () => { form.elements.pool.value = stats(subject).todo.length ? 'todo' : 'all'; form.requestSubmit(); };
    }
    const list = $('missed'); list.replaceChildren();
    $('missedTitle').hidden = !missed.length;
    for (const i of missed) {
      const q = subject.questions[i], li = el('li');
      li.append(el('div', 'q', `${i + 1}. ${q.q}`), el('div', 'a', `Jawaban: ${LETTERS[q.a]}. ${q.o[q.a]}`));
      list.append(li);
    }
    show('done');
    $('score').tabIndex = -1; $('score').focus({ preventScroll: true });
  }

  /* ---------- keyboard: 1-4 / A-D answer, Enter goes on ---------- */
  document.addEventListener('keydown', (e) => {
    if (current !== 'play' || e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key.toLowerCase();
    const i = '1234'.indexOf(k) >= 0 ? '1234'.indexOf(k) : 'abcd'.indexOf(k);
    if (session.mode === 'quiz' && !session.answered && k.length === 1 && i >= 0) { e.preventDefault(); pick(i); }
    else if (k === 'enter' && (session.answered || session.picked != null) && !(e.target.closest && e.target.closest('button'))) { e.preventDefault(); $('actions').querySelector('.primary').click(); }
  });

  history.replaceState({ v: 'home' }, '');
  show('home', false);
})();
