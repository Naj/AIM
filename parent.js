// ===================== PARENT DASHBOARD =====================

function showParentLock() {
  document.querySelectorAll('.screen, .parent-screen').forEach(s => s.classList.remove('active'));
  document.getElementById('parentLock').style.display = 'block';
  document.getElementById('parentDashboard').style.display = 'none';
  document.getElementById('parentScreen').classList.add('active');
  state.pin = '';
  updatePinDots();
}

function pinPress(digit) {
  if (!digit || state.pin.length >= 4) return;
  state.pin += digit;
  playSound('tap');
  updatePinDots();
  if (state.pin.length === 4) {
    setTimeout(() => {
      if (state.pin === '1234') {
        document.getElementById('parentLock').style.display = 'none';
        renderDashboard();
        document.getElementById('parentDashboard').style.display = 'block';
      } else {
        state.pin = ''; updatePinDots();
        speak('Code incorrect, réessaye.', 0.9);
      }
    }, 200);
  }
}

function pinErase() {
  state.pin = state.pin.slice(0, -1);
  updatePinDots();
}

function updatePinDots() {
  for (let i = 0; i < 4; i++) {
    const d = document.getElementById('dot' + i);
    if (d) d.classList.toggle('filled', i < state.pin.length);
  }
}

function resetParent() {
  state.pin = '';
  document.getElementById('parentLock').style.display = 'block';
  document.getElementById('parentDashboard').style.display = 'none';
}

function confirmReset() {
  if (confirm('Remettre à zéro toutes les données de Maïssa ? Cette action est irréversible.')) {
    resetAllData();
  }
}

function renderDashboard() {
  // Chiffres globaux
  document.getElementById('dashStars').textContent = state.stars;
  document.getElementById('dashSessions').textContent = state.sessions;
  const pct = state.totalAnswered > 0 ? Math.round(state.totalCorrect / state.totalAnswered * 100) : 0;
  document.getElementById('dashCorrect').textContent = pct + '%';
  document.getElementById('dashStreak').textContent = state.streak;

  // Calendrier
  renderCalendar();

  // Niveaux débloqués
  renderLevelsGrid();

  // Erreurs à retravailler
  renderErrorsList();

  // Stats par module
  renderModuleStats();
}

function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  grid.innerHTML = '';
  const todayISO = new Date().toISOString().split('T')[0];
  for (let i = 34; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    const iso = d.toISOString().split('T')[0];
    const div = document.createElement('div');
    div.className = 'cal-day';
    if (state.activeDays.includes(iso)) div.classList.add('active');
    if (iso === todayISO) div.classList.add('today');
    div.textContent = d.getDate();
    grid.appendChild(div);
  }
}

function renderLevelsGrid() {
  const moduleInfo = [
    { key: 'fr_vocab',   icon: '🔤', name: 'Les mots' },
    { key: 'fr_phrases', icon: '✍️', name: 'Les phrases' },
    { key: 'fr_ortho',   icon: '🔡', name: 'Orthographe' },
    { key: 'math_calc',  icon: '🔢', name: 'Calcul' },
    { key: 'math_prob',  icon: '🧩', name: 'Problèmes' },
    { key: 'math_num',   icon: '💯', name: 'Nombres' },
    { key: 'fr_conj',    icon: '🔀', name: 'Conjugaison' },
    { key: 'math_frac',  icon: '🍕', name: 'Fractions' },
    { key: 'math_geo',   icon: '📐', name: 'Géométrie' },
  ];
  const grid = document.getElementById('levelsGrid');
  grid.innerHTML = '';
  moduleInfo.forEach(m => {
    const lvl = getUnlockedLevel(m.key);
    const maxLvl = (MAX_LEVELS && MAX_LEVELS[m.key]) || 3;
    const stars = '⭐'.repeat(Math.min(lvl, 5));
    const card = document.createElement('div');
    card.className = 'level-card';
    card.innerHTML = `
      <div class="level-card-icon">${m.icon}</div>
      <div class="level-card-info">
        <div class="level-card-name">${m.name}</div>
        <div class="level-card-lvl">Niveau ${lvl} / ${maxLvl}</div>
      </div>
      <div class="level-stars">${stars}</div>
    `;
    grid.appendChild(card);
  });
}

function renderErrorsList() {
  const container = document.getElementById('errorsList');
  container.innerHTML = '';
  const errors = Object.values(state.errorLog)
    .filter(e => e.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  const moduleNames = {
    fr_vocab:'Les mots', fr_phrases:'Les phrases', fr_ortho:'Orthographe',
    math_calc:'Calcul', math_prob:'Problèmes', math_num:'Nombres',
    lecture:'Lecture', dictee:'Dictée', oral:'Oral'
  };

  if (errors.length === 0) {
    container.innerHTML = '<div class="errors-empty">✅ Aucune erreur à retravailler — bravo !</div>';
    return;
  }
  errors.forEach(e => {
    const row = document.createElement('div');
    row.className = 'error-row';
    row.innerHTML = `
      <div class="error-count">${e.count}</div>
      <div>
        <div class="error-text">${e.text || '—'}</div>
        <div class="error-module">${moduleNames[e.moduleKey] || e.moduleKey || ''} · Niveau ${e.lvl || 1}</div>
      </div>
    `;
    container.appendChild(row);
  });
}

function renderModuleStats() {
  const moduleInfo = [
    { key: 'fr_vocab',   icon: '🔤', name: 'Vocabulaire' },
    { key: 'fr_phrases', icon: '✍️', name: 'Phrases' },
    { key: 'fr_ortho',   icon: '🔡', name: 'Orthographe' },
    { key: 'lecture',    icon: '📖', name: 'Lecture' },
    { key: 'dictee',     icon: '🎤', name: 'Dictée' },
    { key: 'oral',       icon: '🗣️', name: 'Oral' },
    { key: 'math_calc',  icon: '🔢', name: 'Calcul' },
    { key: 'math_prob',  icon: '🧩', name: 'Problèmes' },
    { key: 'math_num',   icon: '💯', name: 'Nombres' },
    { key: 'memory',     icon: '🧠', name: 'Mémoire' },
    { key: 'fr_conj',    icon: '🔀', name: 'Conjugaison' },
    { key: 'math_frac',  icon: '🍕', name: 'Fractions' },
    { key: 'math_geo',   icon: '📐', name: 'Géométrie' },
    { key: 'conj_oral',  icon: '🗣️', name: 'Conjugaison orale' },
  ];
  const container = document.getElementById('moduleStats');
  container.innerHTML = '';
  moduleInfo.forEach(m => {
    const s = state.moduleStats[m.key];
    const pct = s && s.total > 0 ? Math.round(s.correct / s.total * 100) : 0;
    const done = s && s.total > 0;
    const row = document.createElement('div');
    row.className = 'mod-stat-row';
    row.innerHTML = `
      <div class="mod-stat-icon">${m.icon}</div>
      <div class="mod-stat-info">
        <div class="mod-stat-name">${m.name}</div>
        <div class="mod-stat-bar"><div class="mod-stat-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="mod-stat-pct">${done ? pct + '%' : '—'}</div>
    `;
    container.appendChild(row);
  });
}
