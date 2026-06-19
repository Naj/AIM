
// ===================== MARIO CHARACTERS =====================
// Personnages Mario pour les écrans de récompense
const MARIO_CHARS = {
  mario: {
    name: 'Mario',
    color: '#e74c3c',
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <!-- Chapeau rouge -->
      <ellipse cx="60" cy="38" rx="28" ry="8" fill="#e74c3c"/>
      <rect x="38" y="28" width="44" height="14" rx="7" fill="#e74c3c"/>
      <!-- Visage -->
      <ellipse cx="60" cy="58" rx="22" ry="20" fill="#f5c58a"/>
      <!-- Moustache -->
      <ellipse cx="52" cy="64" rx="9" ry="4" fill="#7b4b1a"/>
      <ellipse cx="68" cy="64" rx="9" ry="4" fill="#7b4b1a"/>
      <!-- Yeux -->
      <ellipse cx="53" cy="54" rx="5" ry="5" fill="white"/>
      <ellipse cx="67" cy="54" rx="5" ry="5" fill="white"/>
      <circle cx="54" cy="55" r="3" fill="#1a237e"/>
      <circle cx="68" cy="55" r="3" fill="#1a237e"/>
      <circle cx="55" cy="54" r="1" fill="white"/>
      <circle cx="69" cy="54" r="1" fill="white"/>
      <!-- Nez -->
      <ellipse cx="60" cy="61" rx="5" ry="4" fill="#e8a07a"/>
      <!-- Sourire -->
      <path d="M 52 70 Q 60 78 68 70" stroke="#7b4b1a" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Oreilles -->
      <ellipse cx="38" cy="58" rx="5" ry="6" fill="#f5c58a"/>
      <ellipse cx="82" cy="58" rx="5" ry="6" fill="#f5c58a"/>
      <!-- M sur le chapeau -->
      <text x="60" y="40" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial">M</text>
      <!-- Corps rouge -->
      <rect x="44" y="78" width="32" height="22" rx="6" fill="#e74c3c"/>
      <!-- Salopette bleue -->
      <rect x="40" y="85" width="40" height="18" rx="5" fill="#1565c0"/>
      <!-- Boutons -->
      <circle cx="52" cy="90" r="3" fill="#ffd600"/>
      <circle cx="68" cy="90" r="3" fill="#ffd600"/>
    </svg>`
  },
  luigi: {
    name: 'Luigi',
    color: '#2ecc71',
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <!-- Chapeau vert -->
      <ellipse cx="60" cy="36" rx="28" ry="8" fill="#2ecc71"/>
      <rect x="38" y="26" width="44" height="14" rx="7" fill="#2ecc71"/>
      <!-- Visage (Luigi est plus grand/mince) -->
      <ellipse cx="60" cy="60" rx="20" ry="22" fill="#f5c58a"/>
      <!-- Moustache -->
      <ellipse cx="51" cy="66" rx="8" ry="3.5" fill="#7b4b1a"/>
      <ellipse cx="69" cy="66" rx="8" ry="3.5" fill="#7b4b1a"/>
      <!-- Yeux -->
      <ellipse cx="53" cy="55" rx="5" ry="5" fill="white"/>
      <ellipse cx="67" cy="55" rx="5" ry="5" fill="white"/>
      <circle cx="54" cy="56" r="3" fill="#1a237e"/>
      <circle cx="68" cy="56" r="3" fill="#1a237e"/>
      <circle cx="55" cy="55" r="1" fill="white"/>
      <circle cx="69" cy="55" r="1" fill="white"/>
      <!-- Nez -->
      <ellipse cx="60" cy="62" rx="4.5" ry="4" fill="#e8a07a"/>
      <!-- Sourire -->
      <path d="M 52 72 Q 60 80 68 72" stroke="#7b4b1a" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Oreilles -->
      <ellipse cx="40" cy="60" rx="5" ry="6" fill="#f5c58a"/>
      <ellipse cx="80" cy="60" rx="5" ry="6" fill="#f5c58a"/>
      <!-- L sur chapeau -->
      <text x="60" y="40" text-anchor="middle" font-size="10" font-weight="900" fill="white" font-family="Arial">L</text>
      <!-- Corps vert -->
      <rect x="44" y="82" width="32" height="20" rx="6" fill="#2ecc71"/>
      <!-- Salopette bleue -->
      <rect x="40" y="88" width="40" height="15" rx="5" fill="#1565c0"/>
      <circle cx="52" cy="92" r="3" fill="#ffd600"/>
      <circle cx="68" cy="92" r="3" fill="#ffd600"/>
    </svg>`
  },
  peach: {
    name: 'Princesse Peach',
    color: '#ff9fc8',
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <!-- Cheveux blonds -->
      <ellipse cx="60" cy="42" rx="26" ry="26" fill="#ffd600"/>
      <!-- Couronne -->
      <rect x="42" y="20" width="36" height="10" rx="3" fill="#ffd600"/>
      <polygon points="42,20 48,10 54,20" fill="#ffd600"/>
      <polygon points="57,20 60,8 63,20" fill="#ffd600"/>
      <polygon points="66,20 72,10 78,20" fill="#ffd600"/>
      <circle cx="48" cy="14" r="3" fill="#e74c3c"/>
      <circle cx="60" cy="10" r="3" fill="#2ecc71"/>
      <circle cx="72" cy="14" r="3" fill="#3498db"/>
      <!-- Visage -->
      <ellipse cx="60" cy="60" rx="20" ry="20" fill="#fde8d0"/>
      <!-- Yeux -->
      <ellipse cx="53" cy="56" rx="5" ry="5.5" fill="white"/>
      <ellipse cx="67" cy="56" rx="5" ry="5.5" fill="white"/>
      <ellipse cx="54" cy="57" rx="3" ry="3.5" fill="#3d2b1a"/>
      <ellipse cx="68" cy="57" rx="3" ry="3.5" fill="#3d2b1a"/>
      <circle cx="55" cy="56" r="1" fill="white"/>
      <circle cx="69" cy="56" r="1" fill="white"/>
      <!-- Joues roses -->
      <ellipse cx="47" cy="64" rx="7" ry="5" fill="#ffb3c8" opacity="0.6"/>
      <ellipse cx="73" cy="64" rx="7" ry="5" fill="#ffb3c8" opacity="0.6"/>
      <!-- Nez -->
      <ellipse cx="60" cy="63" rx="3.5" ry="3" fill="#f5c0a0"/>
      <!-- Sourire -->
      <path d="M 53 70 Q 60 77 67 70" stroke="#c0605a" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Robe rose -->
      <ellipse cx="60" cy="100" rx="30" ry="20" fill="#ff9fc8"/>
      <rect x="44" y="80" width="32" height="25" rx="4" fill="#ff9fc8"/>
    </svg>`
  },
  toad: {
    name: 'Toad',
    color: '#ffffff',
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <!-- Chapeau à pois -->
      <ellipse cx="60" cy="36" rx="32" ry="32" fill="#e74c3c"/>
      <circle cx="52" cy="26" r="6" fill="white"/>
      <circle cx="68" cy="22" r="5" fill="white"/>
      <circle cx="42" cy="38" r="5" fill="white"/>
      <circle cx="74" cy="35" r="6" fill="white"/>
      <circle cx="60" cy="18" r="4" fill="white"/>
      <!-- Visage blanc rond -->
      <ellipse cx="60" cy="65" rx="22" ry="22" fill="white"/>
      <!-- Yeux -->
      <ellipse cx="52" cy="61" rx="6" ry="6" fill="#3d2b1a"/>
      <ellipse cx="68" cy="61" rx="6" ry="6" fill="#3d2b1a"/>
      <circle cx="53" cy="60" r="2" fill="white"/>
      <circle cx="69" cy="60" r="2" fill="white"/>
      <!-- Joues -->
      <ellipse cx="44" cy="70" rx="7" ry="5" fill="#ffb3c8" opacity="0.7"/>
      <ellipse cx="76" cy="70" rx="7" ry="5" fill="#ffb3c8" opacity="0.7"/>
      <!-- Nez -->
      <ellipse cx="60" cy="67" rx="4" ry="3.5" fill="#f5c0a0"/>
      <!-- Sourire -->
      <path d="M 51 74 Q 60 82 69 74" stroke="#7b4b1a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Corps bleu -->
      <rect x="44" y="87" width="32" height="22" rx="8" fill="#3498db"/>
      <!-- Bords du chapeau -->
      <ellipse cx="60" cy="50" rx="28" ry="6" fill="#e74c3c" opacity="0.5"/>
    </svg>`
  },
  yoshi: {
    name: 'Yoshi',
    color: '#2ecc71',
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <!-- Corps vert -->
      <ellipse cx="60" cy="72" rx="28" ry="25" fill="#2ecc71"/>
      <!-- Tête -->
      <ellipse cx="60" cy="48" rx="26" ry="24" fill="#2ecc71"/>
      <!-- Museau blanc -->
      <ellipse cx="68" cy="55" rx="15" ry="12" fill="#f0f0e0"/>
      <!-- Yeux -->
      <ellipse cx="52" cy="44" rx="8" ry="9" fill="white"/>
      <ellipse cx="66" cy="44" rx="8" ry="9" fill="white"/>
      <circle cx="54" cy="45" r="5" fill="#1a237e"/>
      <circle cx="68" cy="45" r="5" fill="#1a237e"/>
      <circle cx="55" cy="44" r="2" fill="white"/>
      <circle cx="69" cy="44" r="2" fill="white"/>
      <!-- Narines -->
      <circle cx="66" cy="53" r="2" fill="#aaa"/>
      <circle cx="72" cy="53" r="2" fill="#aaa"/>
      <!-- Sourire -->
      <path d="M 57 60 Q 67 68 77 60" stroke="#7b4b1a" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Crête du dos -->
      <ellipse cx="48" cy="35" rx="6" ry="8" fill="#27ae60"/>
      <ellipse cx="38" cy="42" rx="5" ry="7" fill="#27ae60"/>
      <!-- Pieds -->
      <ellipse cx="46" cy="95" rx="12" ry="7" fill="#27ae60"/>
      <ellipse cx="74" cy="95" rx="12" ry="7" fill="#27ae60"/>
      <!-- Ventre -->
      <ellipse cx="60" cy="75" rx="18" ry="14" fill="#a8e6a0"/>
      <!-- Selle rouge -->
      <ellipse cx="55" cy="62" rx="12" ry="6" fill="#e74c3c"/>
    </svg>`
  },
  bowser: {
    name: 'Bowser Jr',
    color: '#f39c12',
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <!-- Carapace verte -->
      <ellipse cx="60" cy="85" rx="30" ry="22" fill="#27ae60"/>
      <!-- Tête -->
      <ellipse cx="60" cy="52" rx="28" ry="26" fill="#f39c12"/>
      <!-- Cornes -->
      <ellipse cx="42" cy="30" rx="6" ry="10" fill="#ffd600" transform="rotate(-15,42,30)"/>
      <ellipse cx="78" cy="30" rx="6" ry="10" fill="#ffd600" transform="rotate(15,78,30)"/>
      <!-- Yeux -->
      <ellipse cx="50" cy="48" rx="8" ry="9" fill="#e8e800"/>
      <ellipse cx="70" cy="48" rx="8" ry="9" fill="#e8e800"/>
      <circle cx="51" cy="49" r="5" fill="#c0392b"/>
      <circle cx="71" cy="49" r="5" fill="#c0392b"/>
      <circle cx="52" cy="48" r="2" fill="black"/>
      <circle cx="72" cy="48" r="2" fill="black"/>
      <!-- Sourcils méchants mais mignons -->
      <path d="M 43 38 L 58 42" stroke="#7b4b1a" stroke-width="3" stroke-linecap="round"/>
      <path d="M 62 42 L 77 38" stroke="#7b4b1a" stroke-width="3" stroke-linecap="round"/>
      <!-- Museau -->
      <ellipse cx="60" cy="62" rx="14" ry="10" fill="#e8b870"/>
      <!-- Dents -->
      <rect x="54" y="64" width="5" height="7" rx="2" fill="white"/>
      <rect x="61" y="64" width="5" height="7" rx="2" fill="white"/>
      <!-- Sourire -->
      <path d="M 48 68 Q 60 76 72 68" stroke="#7b4b1a" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Points sur carapace -->
      <circle cx="55" cy="85" r="4" fill="#ffd600"/>
      <circle cx="65" cy="85" r="4" fill="#ffd600"/>
      <circle cx="60" cy="95" r="4" fill="#ffd600"/>
    </svg>`
  },
  star: {
    name: 'Étoile Mario',
    color: '#ffd600',
    svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
      <!-- Étoile jaune Mario -->
      <polygon points="60,10 72,42 108,42 80,62 90,96 60,76 30,96 40,62 12,42 48,42" fill="#ffd600" stroke="#f39c12" stroke-width="3"/>
      <!-- Yeux -->
      <ellipse cx="50" cy="52" rx="7" ry="8" fill="black"/>
      <ellipse cx="70" cy="52" rx="7" ry="8" fill="black"/>
      <circle cx="52" cy="50" r="3" fill="white"/>
      <circle cx="72" cy="50" r="3" fill="white"/>
      <!-- Sourire -->
      <path d="M 46 66 Q 60 76 74 66" stroke="black" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- Joues -->
      <ellipse cx="42" cy="62" rx="6" ry="4" fill="#ffb347" opacity="0.7"/>
      <ellipse cx="78" cy="62" rx="6" ry="4" fill="#ffb347" opacity="0.7"/>
      <!-- Brillance -->
      <circle cx="75" cy="30" r="5" fill="white" opacity="0.6"/>
      <circle cx="82" cy="22" r="3" fill="white" opacity="0.5"/>
    </svg>`
  }
};

function setMarioReward(charKey, title, stars, msg) {
  const char = MARIO_CHARS[charKey] || MARIO_CHARS.mario;
  const el = document.getElementById('rewardTrophy');
  el.innerHTML = char.svg;
  el.style.fontSize = '0'; // hide text, show SVG
  document.getElementById('rewardTitle').textContent  = title;
  document.getElementById('rewardStars').textContent  = stars;
  document.getElementById('rewardMsg').textContent    = msg;
}

// ===================== NAVIGATION =====================
function showScreen(id) {
  document.querySelectorAll('.screen, .parent-screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() {
  if (state.isRecording) stopRecording();
  showScreen('homeScreen');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('navHome').classList.add('active');
  renderHomeModules(); // refresh locks/badges
}

function startModule(moduleId, revisionMode) {
  if (moduleId === 'memory')   { startMemoryGame();         return; }
  if (moduleId === 'lecture')  { startLecture();            return; }
  if (moduleId === 'dictee')   { startDictee();             return; }
  if (moduleId === 'oral')     { startOral();               return; }
  if (moduleId === 'revision')   { startRevision();           return; }
  if (moduleId === 'math_geo')   { startModule_QCM('math_geo'); return; }
  if (moduleId === 'conj_oral')  { startConjOral();              return; }
  if (moduleId === 'multitable') { showMultiTable();              return; }
  if (moduleId === 'flashcards') { startFlashcards();             return; }
  if (moduleId === 'karaoke')    { startKaraoke();                return; }
  if (moduleId === 'puzzle')     { startPuzzle();                 return; }
  if (moduleId === 'defi')       { startDefiDuJour();             return; }
  if (moduleId === 'badges')     { showBadgesScreen();            return; }

  startModule_QCM(moduleId);
}

function startModule_QCM(moduleId) {
  state.currentModule = moduleId;
  state.currentQ      = 0;
  state.score         = 0;
  state.revisionMode  = false;
  state.sessionQueue  = [...getAvailableQuestions(moduleId)];
  state.sessionQueue.sort(() => Math.random() - 0.5);
  showScreen('activityScreen');
  // Show current level in header
  const lvl = getUnlockedLevel(moduleId);
  const modLvlEl = document.getElementById('qModuleLevelBadge');
  if (modLvlEl) {
    modLvlEl.textContent = `${'⭐'.repeat(lvl)} Niveau ${lvl} — ${state.sessionQueue.length} question${state.sessionQueue.length>1?'s':''}`;
    modLvlEl.className = 'level-badge lvl-' + lvl;
    modLvlEl.style.display = 'inline-block';
  }
  loadQuestion();
}

// ===================== HOME — badges de niveau =====================
function renderHomeModules() {
  // Update lock overlays and level badges on module cards
  document.querySelectorAll('.module-card[data-key]').forEach(card => {
    const key = card.dataset.key;
    if (!key || !modules[key]) return;
    const lvl = getUnlockedLevel(key);
    const badge = card.querySelector('.lvl-badge');
    if (badge) badge.textContent = `Niv. ${lvl}`;
  });
  // Revision button visibility
  const revBtn = document.getElementById('revisionBtn');
  if (revBtn) revBtn.style.display = hasRevisionItems() ? 'flex' : 'none';
}

// ===================== MODE RÉVISION =====================
function startRevision() {
  const queue = getRevisionQueue();
  if (queue.length === 0) { alert('Aucune question à réviser pour l\'instant !'); return; }
  state.currentModule = '__revision__';
  state.currentQ      = 0;
  state.score         = 0;
  state.revisionMode  = true;
  // Convertir les entrées d'erreur en objets-question compatibles
  state.sessionQueue  = queue.map(e => ({
    id: Object.keys(state.errorLog).find(k => state.errorLog[k] === e) || e.id || '',
    text: e.text, image: e.image, answers: e.answers,
    correct: e.correct, explain: e.explain, lvl: e.lvl,
    _errorCount: e.count,
  }));
  showScreen('activityScreen');
  document.getElementById('activityTitle').textContent = '🔁 Mode Révision';
  loadQuestion();
}

// ===================== QCM =====================
function loadQuestion() {
  const q     = state.sessionQueue[state.currentQ];
  const total = state.sessionQueue.length;
  const isRev = state.revisionMode;

  if (!isRev) document.getElementById('activityTitle').textContent = modules[state.currentModule].title;
  document.getElementById('progressLabel').textContent = `Question ${state.currentQ + 1} / ${total}`;
  document.getElementById('progressFill').style.width  = ((state.currentQ + 1) / total * 100) + '%';
  document.getElementById('questionText').textContent  = q.text;
  document.getElementById('imageHint').textContent     = q.image || '';

  // Niveau badge
  const lvlEl = document.getElementById('qLevelBadge');
  if (lvlEl) {
    const lvlNames = {1:'⭐ Niveau 1', 2:'⭐⭐ Niveau 2', 3:'⭐⭐⭐ Niveau 3'};
    lvlEl.textContent = isRev ? `🔁 Révision (${q._errorCount || 1} erreur${(q._errorCount||1)>1?'s':''})` : (lvlNames[q.lvl||1] || '');
    lvlEl.className   = 'level-badge lvl-' + (q.lvl||1) + (isRev ? ' lvl-rev' : '');
  }

  state.answered = false;
  document.getElementById('feedbackCard').className = 'feedback-card';
  document.getElementById('nextBtn').classList.remove('show');
  document.getElementById('questionHint').style.display = 'none';

  const grid = document.getElementById('answersGrid');
  grid.innerHTML = '';
  const shuffled = q.answers.map((a, i) => ({ text: a, isCorrect: i === q.correct }));
  shuffled.sort(() => Math.random() - 0.5);
  shuffled.forEach(ans => {
    const btn = document.createElement('button');
    btn.className   = 'answer-btn';
    btn.textContent = ans.text;
    btn.onclick     = () => selectAnswer(btn, ans.isCorrect, q.explain, q.id);
    grid.appendChild(btn);
  });
  setTimeout(() => speakQuestion(), 500);
}

function speakQuestion() {
  const q = state.sessionQueue[state.currentQ];
  if (q) speak(q.text);
}

function selectAnswer(btn, isCorrect, explain, questionId) {
  if (state.answered) return;
  state.answered = true;
  document.querySelectorAll('#answersGrid .answer-btn').forEach(b => b.disabled = true);

  if (isCorrect) {
    btn.classList.add('correct');
    state.score++; state.stars += 2; state.xp += 10;
    playSound('correct');
    setFeedback('feedbackCard', true, '🌟 Bravo !', explain);
    confetti();
    if (questionId) logSuccess(questionId);
  } else {
    btn.classList.add('wrong'); state.xp += 2;
    playSound('wrong');
    setFeedback('feedbackCard', false, '💪 Pas tout à fait...', explain);
    document.getElementById('questionHint').style.display = 'flex';
    document.getElementById('hintText').textContent = explain;
    // Log l'erreur avec la question complète
    if (questionId && !state.revisionMode) {
      const mod = modules[state.currentModule];
      if (mod) {
        const q = mod.questions.find(q => q.id === questionId);
        if (q) logError(q, state.currentModule);
      }
    }
    // En révision : réincrémenter si raté à nouveau
    if (state.revisionMode && questionId && state.errorLog[questionId]) {
      state.errorLog[questionId].count++;
    }
  }
  saveProgress(); updateStarDisplay(); updateXpBar();
  document.getElementById('nextBtn').classList.add('show');
}

function setFeedback(cardId, good, title, explain) {
  const card = document.getElementById(cardId);
  card.className = 'feedback-card show ' + (good ? 'good' : 'bad');
  card.querySelector('.feedback-emoji').textContent = good ? '🎉' : '🙈';
  card.querySelector('.feedback-text').textContent  = title;
  card.querySelector('.feedback-explain').textContent = explain;
}

function nextQuestion() {
  state.currentQ++;
  if (state.currentQ >= state.sessionQueue.length) {
    const score = state.score, total = state.sessionQueue.length;
    if (!state.revisionMode && state.currentModule !== '__revision__') {
      if (state.currentModule === '__defi__') {
        state.defiDone = true; state.defiCount++;
        localStorage.setItem('aim_defi_done','1');
        localStorage.setItem('aim_defi_day', new Date().toISOString().split('T')[0]);
        localStorage.setItem('aim_defi_count', state.defiCount);
      }
      trackModuleStat(state.currentModule, score, total);
      const newLvl = tryUnlockNextLevel(state.currentModule);
      saveProgress();
      finishModule(score, total, newLvl);
    } else {
      saveProgress();
      finishRevision(score, total);
    }
  } else {
    loadQuestion();
  }
}

function finishModule(score, total, newLvl) {
  const pct = score / total;
  let trophy = '🍄', msg = 'Continue comme ça, tu vas y arriver !', stars = '⭐', bonus = 1;
  if (pct >= 0.8) { trophy = '⭐'; msg = 'Tu es incroyable ! Mario est fier de toi !'; stars = '⭐⭐⭐'; bonus = 5; playSound('win'); confetti(); }
  else if (pct >= 0.5) { trophy = '🦎', msg = 'C\'est bien ! Yoshi est content de toi !'; stars = '⭐⭐'; bonus = 3; }
  state.stars += bonus; saveProgress(); updateStarDisplay();

  const marioChar = pct >= 0.8 ? 'star' : pct >= 0.5 ? 'yoshi' : 'toad';
  const finalMsg = newLvl
    ? `🎉 Félicitations ! Tu as débloqué le Niveau ${newLvl} ! Continue comme ça Maïssa !`
    : (msg + (hasRevisionItems() ? '\n💡 Tu as des questions à réviser !' : ''));
  setMarioReward(marioChar, `${score} / ${total} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''} !`, stars, finalMsg);
  if (newLvl) { playSound('win'); confetti(); }
  showScreen('rewardScreen');
}

function finishRevision(score, total) {
  const pct = score / total;
  const remaining = getRevisionQueue().length;
  let trophy = '🍄', msg = '';
  if (pct >= 0.8) { trophy = '⭐'; msg = `Super ! Tu as maîtrisé ${score}/${total} questions difficiles !`; playSound('win'); confetti(); }
  else if (pct >= 0.5) { msg = `Bien ! Tu progresses sur tes points difficiles. Continue !`; }
  else { msg = `Ces questions sont difficiles — ne lâche pas ! Réessaie bientôt.`; }
  if (remaining > 0) msg += ` (${remaining} question${remaining>1?'s':''} encore à revoir)`;

  state.stars += Math.max(1, score); saveProgress(); updateStarDisplay();
  const revChar = pct >= 0.8 ? 'mario' : pct >= 0.5 ? 'luigi' : 'toad';
  setMarioReward(revChar, `Révision : ${score} / ${total} !`, pct >= 0.8 ? '⭐⭐⭐' : pct >= 0.5 ? '⭐⭐' : '⭐', msg);
  showScreen('rewardScreen');
}

// ===================== LECTURE =====================
function startLecture() {
  const unlocked = getUnlockedLevel('lecture') || 1;
  const available = stories.filter(s => (s.lvl || 1) <= unlocked);
  state._availableStories = available;

  // Reprendre là où Maïssa s'est arrêtée
  const saved = state.moduleProgress['lecture'] || 0;
  state.storyIdx   = Math.min(saved, Math.max(0, available.length - 1));
  state.storyQIdx  = 0;
  state.storyScore = 0;

  showScreen('lectureScreen');
  const lvlNames = {1:'⭐ Niveau 1 — Compréhension simple', 2:'⭐⭐ Niveau 2', 3:'⭐⭐⭐ Niveau 3', 4:'🧠 Niveau 4 — Inférence', 5:'🧠🧠 Niveau 5 — Inférence avancée'};
  const badge = document.getElementById('lectureLevelBadge');
  if (badge) { badge.textContent = lvlNames[unlocked] || ''; badge.style.display = 'inline-block'; }
  loadStory();
}

function loadStory() {
  const s = state._availableStories[state.storyIdx];
  const total = state._availableStories.length;
  document.getElementById('lectureProgressLabel').textContent = `Histoire ${state.storyIdx + 1} / ${total}`;
  document.getElementById('lectureProgress').style.width      = ((state.storyIdx + 1) / total * 100) + '%';
  document.getElementById('storyImage').textContent  = s.image;
  document.getElementById('storyTitle').textContent  = s.title;
  document.getElementById('storyText').textContent   = s.text;
  document.getElementById('storyZone').style.display  = 'block';
  document.getElementById('storyQZone').style.display = 'none';
  // Show inference badge for levels 4-5
  const infoBadge = document.getElementById('storyInferenceBadge');
  if (infoBadge) {
    if ((s.lvl || 1) >= 4) {
      infoBadge.textContent = (s.lvl === 5) ? '🧠🧠 Niveau 5 — Réfléchis bien, les réponses ne sont pas toujours écrites directement !' : '🧠 Niveau 4 — Certaines réponses demandent de réfléchir au-delà du texte !';
      infoBadge.style.display = 'flex';
    } else {
      infoBadge.style.display = 'none';
    }
  }
  // Story level badge
  const stLvl = document.getElementById('storyLevelBadge');
  if (stLvl) {
    const lvlColors = {1:'#4ECB71',2:'#6EC6F0',3:'#A07BE5',4:'#FF7A5A',5:'#e74c3c'};
    stLvl.textContent = 'Niveau ' + (s.lvl || 1);
    stLvl.style.background = lvlColors[s.lvl || 1] || '#A07BE5';
    stLvl.style.display = 'inline-block';
  }
  state.storyQIdx = 0; state.storyAnswered = false;
  setTimeout(() => speak(s.text, 0.8), 400);
}

function speakStory() { speak(state._availableStories[state.storyIdx].text, 0.8); }

function showStoryQuestions() {
  document.getElementById('storyZone').style.display  = 'none';
  document.getElementById('storyQZone').style.display = 'block';
  loadStoryQ();
}

function loadStoryQ() {
  const s = state._availableStories[state.storyIdx];
  const q = s.questions[state.storyQIdx];
  document.getElementById('storyQLabel').textContent = `Question ${state.storyQIdx + 1} / ${s.questions.length}`;
  document.getElementById('storyQText').textContent  = q.text;
  document.getElementById('storyFeedback').className = 'feedback-card';
  document.getElementById('storyNextBtn').classList.remove('show');
  state.storyAnswered = false;
  const grid = document.getElementById('storyAnswers');
  grid.innerHTML = '';
  const shuffled = q.answers.map((a, i) => ({ text: a, isCorrect: i === q.correct }));
  shuffled.sort(() => Math.random() - 0.5);
  shuffled.forEach(ans => {
    const btn = document.createElement('button');
    btn.className   = 'answer-btn';
    btn.textContent = ans.text;
    btn.onclick     = () => {
      if (state.storyAnswered) return;
      state.storyAnswered = true;
      document.querySelectorAll('#storyAnswers .answer-btn').forEach(b => b.disabled = true);
      if (ans.isCorrect) {
        btn.classList.add('correct'); state.storyScore++; state.stars += 2; state.xp += 10;
        playSound('correct'); setFeedback('storyFeedback', true, '🌟 Bravo !', q.explain); confetti();
        if (q.id) logSuccess(q.id);
      } else {
        btn.classList.add('wrong'); state.xp += 2;
        playSound('wrong'); setFeedback('storyFeedback', false, '💪 Pas tout à fait...', q.explain);
        if (q.id) logError({ ...q, moduleKey:'lecture' }, 'lecture');
      }
      updateStarDisplay(); updateXpBar(); saveProgress();
      document.getElementById('storyNextBtn').classList.add('show');
    };
    grid.appendChild(btn);
  });
  setTimeout(() => speak(q.text), 400);
}

function nextStoryQ() {
  const s = state._availableStories[state.storyIdx];
  state.storyQIdx++;
  if (state.storyQIdx >= s.questions.length) {
    const scoreHere = state.storyScore;
    trackModuleStat('lecture', scoreHere, s.questions.length);
    state.storyIdx++;
    state.moduleProgress['lecture'] = state.storyIdx;
    saveProgress();
    if (state.storyIdx >= state._availableStories.length) {
      state.moduleProgress['lecture'] = 0; // reset pour le prochain niveau
      saveProgress();
      const newLvl = tryUnlockNextLevel('lecture');
      finishModule(scoreHere, s.questions.length, newLvl);
    } else { state.storyScore = 0; loadStory(); }
  } else { loadStoryQ(); }
}

// ===================== DICTÉE =====================
function startDictee() {
  const unlocked = getUnlockedLevel('dictee') || 1;
  state.dicteeQueue = dicteeWords.filter(w => (w.lvl || 1) <= unlocked);
  state.dicteeQueue.sort(() => Math.random() - 0.5);
  const savedDictee = state.moduleProgress['dictee'] || 0;
  state.dicteeIdx    = Math.min(savedDictee, Math.max(0, state.dicteeQueue.length - 1));
  state.dicteeTyped  = [];
  state.dicteeCorrect = 0;
  showScreen('dicteeScreen');
  loadDicteeWord();
}

function loadDicteeWord() {
  const w = state.dicteeQueue[state.dicteeIdx];
  const total = state.dicteeQueue.length;
  document.getElementById('dicteeLabel').textContent = `Mot ${state.dicteeIdx + 1} / ${total}`;
  document.getElementById('dicteeFill').style.width  = ((state.dicteeIdx + 1) / total * 100) + '%';
  document.getElementById('dicteeFeedback').className = 'feedback-card';
  document.getElementById('dicteeNextBtn').classList.remove('show');
  state.dicteeTyped = [];
  renderDicteeSlots(); renderDicteeLetters();
  setTimeout(() => speakDicteeWord(), 600);
}

function speakDicteeWord() {
  const w = state.dicteeQueue[state.dicteeIdx];
  // On dit UNIQUEMENT l'indice — jamais le mot lui-même
  speak(w.hint, 0.85);
}

function renderDicteeSlots() {
  const w   = state.dicteeQueue[state.dicteeIdx];
  const row = document.getElementById('dicteeAnswerRow');
  row.innerHTML = '';
  for (let i = 0; i < w.word.length; i++) {
    const slot = document.createElement('div');
    slot.className   = 'letter-slot';
    slot.textContent = state.dicteeTyped[i] || '';
    row.appendChild(slot);
  }
}

function renderDicteeLetters() {
  const w        = state.dicteeQueue[state.dicteeIdx];
  const shuffled = [...w.letters].sort(() => Math.random() - 0.5);
  const container = document.getElementById('dicteeLetters');
  container.innerHTML = '';
  shuffled.forEach(letter => {
    const btn = document.createElement('button');
    btn.className   = 'letter-btn';
    btn.textContent = letter;
    btn.onclick     = () => dicteeAddLetter(letter, btn);
    container.appendChild(btn);
  });
}

function dicteeAddLetter(letter, btn) {
  const w = state.dicteeQueue[state.dicteeIdx];
  if (state.dicteeTyped.length >= w.word.length) return;
  state.dicteeTyped.push(letter);
  btn.disabled = true;
  renderDicteeSlots(); playSound('tap');
}

function dicteeErase() {
  if (state.dicteeTyped.length === 0) return;
  const removed = state.dicteeTyped.pop();
  renderDicteeSlots();
  const btns = document.querySelectorAll('.letter-btn');
  for (let i = btns.length - 1; i >= 0; i--) {
    if (btns[i].textContent === removed && btns[i].disabled) { btns[i].disabled = false; break; }
  }
}

function dicteeValidate() {
  const w = state.dicteeQueue[state.dicteeIdx];
  if (state.dicteeTyped.length < w.word.length) { speak('Le mot n\'est pas complet !', 0.9); return; }
  const typed = state.dicteeTyped.join('');
  const correct = (typed === w.word);
  if (correct) {
    state.dicteeCorrect = (state.dicteeCorrect || 0) + 1;
    state.stars += 3; state.xp += 15; playSound('correct');
    setFeedback('dicteeFeedback', true, '🌟 Parfait !', w.word + ' — bien épelé !'); confetti();
  } else {
    state.xp += 3; playSound('wrong');
    setFeedback('dicteeFeedback', false, '💪 Presque !', 'Le mot s\'écrit : ' + w.word);
    speak('Le mot s\'écrit ' + w.word.split('').join(', '), 0.8);
  }
  document.querySelectorAll('.letter-btn').forEach(b => b.disabled = true);
  updateStarDisplay(); updateXpBar(); saveProgress();
  document.getElementById('dicteeNextBtn').classList.add('show');
}

function nextDicteeWord() {
  state.dicteeIdx++;
  state.moduleProgress['dictee'] = state.dicteeIdx;
  saveProgress();
  if (state.dicteeIdx >= state.dicteeQueue.length) {
    state.moduleProgress['dictee'] = 0;
    trackModuleStat('dictee', state.dicteeCorrect || 0, state.dicteeQueue.length);
    const newLvl = tryUnlockNextLevel('dictee');
    state.stars += 5; saveProgress(); updateStarDisplay();
    const dicteeMsg = newLvl ? `🎉 Niveau ${newLvl} débloqué en dictée ! Bravo !` : 'Bravo Maïssa ! Tu as écouté et écrit tous les mots !';
    setMarioReward('peach', 'Dictée terminée !', '⭐⭐⭐', dicteeMsg);
    showScreen('rewardScreen'); playSound('win'); confetti();
  } else { loadDicteeWord(); }
}

// ===================== ORAL =====================
function startOral() {
  const unlocked = getUnlockedLevel('oral') || 1;
  state.oralQueue = oralQuestions.filter(q => (q.lvl || 1) <= unlocked);
  state.oralQueue.sort(() => Math.random() - 0.5);
  const savedOral = state.moduleProgress['oral'] || 0;
  state.oralIdx = Math.min(savedOral, Math.max(0, state.oralQueue.length - 1));
  showScreen('oralScreen');
  loadOralQ();
}

function loadOralQ() {
  const q = state.oralQueue[state.oralIdx];
  const total = state.oralQueue.length;
  document.getElementById('oralLabel').textContent    = `Question ${state.oralIdx + 1} / ${total}`;
  document.getElementById('oralFill').style.width     = ((state.oralIdx + 1) / total * 100) + '%';
  document.getElementById('oralImage').textContent    = q.image;
  document.getElementById('oralQuestion').textContent = q.text;
  document.getElementById('oralTranscript').textContent = 'Ta réponse apparaîtra ici...';
  document.getElementById('oralTranscript').classList.remove('has-text');
  document.getElementById('oralModelZone').style.display = 'none';
  document.getElementById('oralRecordBtn').classList.remove('recording');
  document.getElementById('oralRecordIcon').textContent  = '🎙️';
  document.getElementById('oralRecordLabel').textContent = 'Appuie pour parler';
  if (state.recognition) { try { state.recognition.abort(); } catch(e) {} state.recognition = null; }
  state.isRecording = false;
  setTimeout(() => speakOralQuestion(), 500);
}

function speakOralQuestion() {
  const q = state.oralQueue[state.oralIdx];
  speak(q.speak || q.text);
}

function toggleRecording() {
  state.isRecording ? stopRecording() : startRecording();
}

function startRecording() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    document.getElementById('oralTranscript').textContent = 'La reconnaissance vocale n\'est pas disponible. Parle quand même, puis clique "Voir la réponse" !';
    document.getElementById('oralTranscript').classList.add('has-text');
    return;
  }
  window.speechSynthesis.cancel();
  const rec = new SR();
  rec.lang = 'fr-FR'; rec.interimResults = true; rec.continuous = false;
  rec.onstart  = () => {
    state.isRecording = true;
    document.getElementById('oralRecordBtn').classList.add('recording');
    document.getElementById('oralRecordIcon').textContent  = '⏹️';
    document.getElementById('oralRecordLabel').textContent = 'J\'écoute...';
    document.getElementById('oralTranscript').textContent  = '...';
  };
  rec.onresult = (e) => {
    let t = '';
    for (let i = e.resultIndex; i < e.results.length; i++) t += e.results[i][0].transcript;
    document.getElementById('oralTranscript').textContent = t;
    document.getElementById('oralTranscript').classList.add('has-text');
  };
  rec.onend  = () => stopRecording();
  rec.onerror = () => stopRecording();
  state.recognition = rec;
  rec.start();
}

function stopRecording() {
  state.isRecording = false;
  if (state.recognition) { try { state.recognition.stop(); } catch(e) {} state.recognition = null; }
  document.getElementById('oralRecordBtn').classList.remove('recording');
  document.getElementById('oralRecordIcon').textContent  = '🎙️';
  document.getElementById('oralRecordLabel').textContent = 'Appuie pour parler';
}

function showOralModel() {
  const q = state.oralQueue[state.oralIdx];
  document.getElementById('oralModelText').textContent   = q.model;
  document.getElementById('oralModelZone').style.display = 'block';
  speak(q.model, 0.85);
  state.stars += 1; state.xp += 8;
  saveProgress(); updateStarDisplay(); updateXpBar();
}

function nextOralQ() {
  if (state.isRecording) stopRecording();
  state.oralIdx++;
  state.moduleProgress['oral'] = state.oralIdx;
  saveProgress();
  if (state.oralIdx >= state.oralQueue.length) {
    state.moduleProgress['oral'] = 0;
    trackModuleStat('oral', state.oralQueue.length, state.oralQueue.length);
    const newLvl = tryUnlockNextLevel('oral');
    state.stars += 5; saveProgress(); updateStarDisplay();
    const oralMsg = newLvl ? `🎉 Niveau ${newLvl} débloqué à l'oral ! Bravo !` : "Tu as répondu à toutes les questions ! Parler, c'est courageux !";
    setMarioReward('mario', 'Super travail oral !', '⭐⭐⭐', oralMsg);
    showScreen('rewardScreen'); playSound('win'); confetti();
  } else { loadOralQ(); }
}

// ===================== MEMORY =====================
let memDiff = 'easy';

function setDifficulty(diff, btn) {
  memDiff = diff;
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  startMemoryGame();
}

function startMemoryGame() {
  // Niveaux de mémoire : 1=easy, 2=medium, 3=hard
  const memLvl = getUnlockedLevel('memory') || 1;
  const maxDiff = memLvl >= 3 ? 'hard' : memLvl >= 2 ? 'medium' : 'easy';
  // Auto-set difficulty to unlocked max if current is too high
  if (memDiff === 'hard'   && memLvl < 3) memDiff = maxDiff;
  if (memDiff === 'medium' && memLvl < 2) memDiff = 'easy';
  // Lock/unlock diff buttons
  document.querySelectorAll('.diff-btn').forEach(btn => {
    const d = btn.textContent.includes('Facile') ? 'easy' : btn.textContent.includes('Moyen') ? 'medium' : 'hard';
    const needed = d === 'hard' ? 3 : d === 'medium' ? 2 : 1;
    btn.disabled = memLvl < needed;
    btn.style.opacity = memLvl < needed ? '0.4' : '1';
    btn.title = memLvl < needed ? `🔒 Débloque le niveau ${needed} pour accéder` : '';
  });
  // Show level badge
  const memLvlEl = document.getElementById('memLevelBadge');
  if (memLvlEl) { memLvlEl.textContent = `⭐`.repeat(memLvl) + ` Niveau ${memLvl}`; memLvlEl.className = 'level-badge lvl-' + memLvl; }
  showScreen('memoryScreen');
  const emojis = memoryEmojis[memDiff];
  const total  = emojis.length;
  state.memPairs = 0; state.memTotal = total;
  state.memFlipped = []; state.memMatched = []; state.memLocked = false;
  document.getElementById('memScore').textContent  = `Paires trouvées : 0 / ${total}`;
  document.getElementById('memFill').style.width   = '0%';
  const pairs = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
  state.memCards = pairs;
  const grid = document.getElementById('memoryGrid');
  grid.innerHTML = '';
  grid.className = 'memory-grid ' + memDiff;
  pairs.forEach((emoji, i) => {
    const card = document.createElement('div');
    card.className       = 'mem-card';
    card.dataset.index   = i;
    card.dataset.emoji   = emoji;
    card.innerHTML       = '❓';
    card.onclick         = () => flipCard(card, i);
    grid.appendChild(card);
  });
}

function flipCard(card, index) {
  if (state.memLocked || state.memMatched.includes(index) || state.memFlipped.includes(index)) return;
  card.innerHTML         = card.dataset.emoji;
  card.style.background  = 'linear-gradient(135deg, #fff9ee, #fffde0)';
  playSound('flip');
  state.memFlipped.push(index);
  if (state.memFlipped.length === 2) {
    state.memLocked = true;
    const [a, b]  = state.memFlipped;
    const cards   = document.querySelectorAll('.mem-card');
    if (state.memCards[a] === state.memCards[b]) {
      cards[a].classList.add('matched'); cards[b].classList.add('matched');
      state.memMatched.push(a, b); state.memPairs++;
      state.stars += 3; state.xp += 15;
      playSound('correct'); saveProgress(); updateStarDisplay(); updateXpBar();
      document.getElementById('memScore').textContent = `Paires trouvées : ${state.memPairs} / ${state.memTotal}`;
      document.getElementById('memFill').style.width  = (state.memPairs / state.memTotal * 100) + '%';
      state.memFlipped = []; state.memLocked = false;
      if (state.memPairs === state.memTotal) {
        trackModuleStat('memory', state.memTotal, state.memTotal); saveProgress();
        setTimeout(() => {
          state.stars += 10; saveProgress(); updateStarDisplay();
          setMarioReward('yoshi', 'Mémoire parfaite !', '⭐⭐⭐', 'Tu as trouvé toutes les paires ! Yoshi est fier de toi !');
          showScreen('rewardScreen'); confetti(); playSound('win');
        }, 600);
      }
    } else {
      setTimeout(() => {
        cards[a].innerHTML = '❓'; cards[b].innerHTML = '❓';
        cards[a].style.background = ''; cards[b].style.background = '';
        state.memFlipped = []; state.memLocked = false;
      }, 900);
    }
  }
}

// ===================== REWARDS =====================
function showRewards() {
  const rewardChar = state.stars >= 100 ? 'star' : state.stars >= 50 ? 'mario' : state.stars >= 20 ? 'luigi' : 'toad';
  const rewardBadges = state.stars >= 100 ? '⭐⭐⭐' : state.stars >= 50 ? '⭐⭐' : state.stars >= 20 ? '⭐' : '🍄';
  const rewardTxt = state.stars >= 100 ? 'Tu es une vraie championne !'
    : state.stars >= 50 ? 'De super progrès ! Bravo Maïssa !'
    : state.stars >= 20 ? 'Tu travailles vraiment bien !'
    : 'Chaque étoile compte — courage !';
  setMarioReward(rewardChar, `${state.stars} étoiles gagnées !`, rewardBadges, rewardTxt);
  showScreen('rewardScreen');
}


// ===================== CONJUGAISON ORALE =====================
function startConjOral() {
  const unlocked = getUnlockedLevel('conj_oral') || 1;
  state.conjQueue = conjugaisonOrale.filter(q => (q.lvl || 1) <= unlocked);
  state.conjQueue.sort(() => Math.random() - 0.5);
  const savedConj = state.moduleProgress['conj_oral'] || 0;
  state.conjIdx = Math.min(savedConj, Math.max(0, state.conjQueue.length - 1));
  showScreen('conjOralScreen');
  loadConjQ();
}

function loadConjQ() {
  const q     = state.conjQueue[state.conjIdx];
  const total = state.conjQueue.length;
  document.getElementById('conjLabel').textContent    = `Verbe ${state.conjIdx + 1} / ${total}`;
  document.getElementById('conjFill').style.width     = ((state.conjIdx + 1) / total * 100) + '%';
  document.getElementById('conjVerb').textContent     = q.verb;
  document.getElementById('conjTense').textContent    = q.tense.toUpperCase();
  document.getElementById('conjPrompt').textContent   = q.prompt;
  document.getElementById('conjImage').textContent    = q.image;
  document.getElementById('conjHint').textContent     = q.hint;
  document.getElementById('conjTranscript').textContent = 'Ta conjugaison apparaîtra ici...';
  document.getElementById('conjTranscript').classList.remove('has-text');
  document.getElementById('conjModelZone').style.display = 'none';
  document.getElementById('conjRecordBtn').classList.remove('recording');
  document.getElementById('conjRecordIcon').textContent  = '🎙️';
  document.getElementById('conjRecordLabel').textContent = 'Appuie pour conjuguer';
  if (state.recognition) { try { state.recognition.abort(); } catch(e) {} state.recognition = null; }
  state.isRecording = false;
  setTimeout(() => speak(q.speak || q.prompt, 0.85), 500);
}

function toggleConjRecording() {
  state.isRecording ? stopConjRecording() : startConjRecording();
}

function startConjRecording() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    document.getElementById('conjTranscript').textContent = 'Reconnaissance vocale indisponible. Dis ta conjugaison à voix haute puis clique "Voir la réponse" !';
    document.getElementById('conjTranscript').classList.add('has-text');
    return;
  }
  window.speechSynthesis.cancel();
  const rec = new SR();
  rec.lang = 'fr-FR'; rec.interimResults = true; rec.continuous = false;
  rec.onstart = () => {
    state.isRecording = true;
    document.getElementById('conjRecordBtn').classList.add('recording');
    document.getElementById('conjRecordIcon').textContent  = '⏹️';
    document.getElementById('conjRecordLabel').textContent = "J'écoute ta conjugaison...";
    document.getElementById('conjTranscript').textContent  = '...';
  };
  rec.onresult = (e) => {
    let t = '';
    for (let i = e.resultIndex; i < e.results.length; i++) t += e.results[i][0].transcript;
    document.getElementById('conjTranscript').textContent = t;
    document.getElementById('conjTranscript').classList.add('has-text');
  };
  rec.onend = () => stopConjRecording();
  rec.onerror = () => stopConjRecording();
  state.recognition = rec;
  rec.start();
}

function stopConjRecording() {
  state.isRecording = false;
  if (state.recognition) { try { state.recognition.stop(); } catch(e) {} state.recognition = null; }
  document.getElementById('conjRecordBtn').classList.remove('recording');
  document.getElementById('conjRecordIcon').textContent  = '🎙️';
  document.getElementById('conjRecordLabel').textContent = 'Appuie pour conjuguer';
}

function showConjModel() {
  const q = state.conjQueue[state.conjIdx];
  document.getElementById('conjModelText').textContent   = q.model;
  document.getElementById('conjModelZone').style.display = 'block';
  speak(q.model, 0.8);
  state.stars += 2; state.xp += 10;
  saveProgress(); updateStarDisplay(); updateXpBar();
}

function nextConjQ() {
  if (state.isRecording) stopConjRecording();
  state.conjIdx++;
  state.moduleProgress['conj_oral'] = state.conjIdx;
  saveProgress();
  if (state.conjIdx >= state.conjQueue.length) {
    state.moduleProgress['conj_oral'] = 0;
    trackModuleStat('conj_oral', state.conjQueue.length, state.conjQueue.length);
    const newLvl = tryUnlockNextLevel('conj_oral');
    state.stars += 5; saveProgress(); updateStarDisplay();
    const conjMsg = newLvl ? `🎉 Niveau ${newLvl} débloqué en conjugaison ! Bravo !` : "Tu as conjugué tous les verbes ! Luigi est fier de toi !";
    setMarioReward('luigi', 'Conjugaison terminée !', '⭐⭐⭐', conjMsg);
    showScreen('rewardScreen'); playSound('win'); confetti();
  } else { loadConjQ(); }
}

// ===================== TABLE DE MULTIPLICATION =====================
function showMultiTable() {
  showScreen('multiTableScreen');
  renderMultiTable(state.selectedTable || 2);
}

function renderMultiTable(n) {
  state.selectedTable = n;
  // Update active button
  document.querySelectorAll('.table-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.n) === n);
  });
  const grid = document.getElementById('tableGrid');
  grid.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const row = document.createElement('div');
    row.className = 'table-row' + (i % 2 === 0 ? ' even' : '');
    const result = n * i;
    row.innerHTML = `
      <span class="t-left">${n} × ${i}</span>
      <span class="t-eq">=</span>
      <span class="t-result">${result}</span>
      <button class="t-listen" onclick="speak('${n} fois ${i} égale ${result}', 0.85)" title="Écouter">🔊</button>
    `;
    row.onclick = (e) => {
      if (e.target.classList.contains('t-listen')) return;
      speak(`${n} fois ${i} égale ${result}`, 0.85);
      row.classList.add('highlight');
      setTimeout(() => row.classList.remove('highlight'), 800);
    };
    grid.appendChild(row);
  }
  // Update title
  document.getElementById('tableTitle').textContent = `Table de ${n}`;
  // Quiz bouton
  document.getElementById('tableQuizBtn').onclick = () => startTableQuiz(n);
}

function startTableQuiz(n) {
  // Lance 5 questions de la table sélectionnée dans le mode QCM standard
  const q = [];
  const picked = [];
  while (picked.length < 5) {
    const i = Math.floor(Math.random() * 10) + 1;
    if (!picked.includes(i)) {
      picked.push(i);
      const res = n * i;
      // Generate 3 wrong answers
      const wrongs = new Set();
      while (wrongs.size < 3) {
        const wrong = res + (Math.floor(Math.random() * 7) - 3);
        if (wrong !== res && wrong > 0) wrongs.add(wrong);
      }
      const answers = [String(res), ...[...wrongs].map(String)];
      q.push({
        id: `tq_${n}_${i}`,
        lvl: n <= 5 ? 2 : 3,
        text: `${n} × ${i} = ?`,
        image: '🔢',
        answers,
        correct: 0,
        explain: `${n} × ${i} = ${res}. Table de ${n} !`
      });
    }
  }
  state.currentModule  = `table_${n}`;
  state.currentQ       = 0;
  state.score          = 0;
  state.revisionMode   = false;
  state.sessionQueue   = q;
  document.getElementById('activityTitle').textContent = `🔢 Table de ${n}`;
  showScreen('activityScreen');
  loadQuestion();
}


// ===================== CONFETTI =====================
function confetti() {
  const emojis = ['⭐','🌟','✨','🎉','💫','🌈','🎊'];
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      el.style.fontSize = (14 + Math.random() * 18) + 'px';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 3500);
    }, i * 80);
  }
}
