// =====================================================================
// FEATURES.JS — Flashcards, Karaoké, Puzzle, Badges, Défi du jour
// =====================================================================

// ─────────────────────────────────────────────────────────────────────
// FLASHCARDS — Répétition espacée (SRS simplifié)
// ─────────────────────────────────────────────────────────────────────
const SRS = {
  // Intervalles en minutes selon la "boîte" (0=nouveau, 1=court, 2=moyen, 3=long, 4=maîtrisé)
  intervals: [0, 1, 10, 60, 1440],

  getQueue() {
    const now = Date.now();
    const unlocked = getUnlockedLevel('flashcards') || 1;
    return flashcards
      .filter(c => (c.lvl || 1) <= unlocked)
      .map(c => {
        const mem = state.flashMem[c.id] || { box: 0, due: 0, seen: 0 };
        return { ...c, ...mem };
      })
      .filter(c => c.due <= now)
      .sort((a, b) => a.due - b.due);
  },

  answer(cardId, correct) {
    const mem = state.flashMem[cardId] || { box: 0, due: 0, seen: 0 };
    if (correct) {
      mem.box = Math.min(mem.box + 1, 4);
    } else {
      mem.box = Math.max(0, mem.box - 1);
    }
    mem.due = Date.now() + SRS.intervals[mem.box] * 60000;
    mem.seen++;
    state.flashMem[cardId] = mem;
    localStorage.setItem('aim_flash', JSON.stringify(state.flashMem));
  },

  countDue() {
    return SRS.getQueue().length;
  }
};

function startFlashcards() {
  state.flashQueue = SRS.getQueue();
  if (state.flashQueue.length === 0) {
    // All mastered — show a random subset to keep practising
    const unlocked = getUnlockedLevel('flashcards') || 1;
    state.flashQueue = flashcards
      .filter(c => (c.lvl||1) <= unlocked)
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
  }
  state.flashIdx = 0;
  state.flashPhase = 'study';
  showScreen('flashcardScreen');
  // Show level badge
  const unlocked2 = getUnlockedLevel('flashcards') || 1;
  const flashLvlEl = document.getElementById('flashLevelBadge');
  if (flashLvlEl) {
    flashLvlEl.textContent = `⭐`.repeat(unlocked2) + ` Niveau ${unlocked2}`;
    flashLvlEl.className = 'level-badge lvl-' + unlocked2;
  }
  loadFlashcard();
}

function loadFlashcard() {
  const card = state.flashQueue[state.flashIdx];
  const total = state.flashQueue.length;
  document.getElementById('flashProgress').style.width = ((state.flashIdx + 1) / total * 100) + '%';
  document.getElementById('flashProgressLabel').textContent = `Carte ${state.flashIdx + 1} / ${total}`;

  const mem = state.flashMem[card.id] || { box: 0 };
  const boxLabels = ['Nouveau', 'À revoir', 'Bien', 'Très bien', 'Maîtrisé ✅'];
  document.getElementById('flashBoxBadge').textContent = boxLabels[mem.box] || 'Nouveau';
  document.getElementById('flashBoxBadge').className = 'flash-box-badge box-' + (mem.box || 0);

  if (state.flashPhase === 'study') {
    showFlashStudy(card);
  } else {
    showFlashQuiz(card);
  }
}

function showFlashStudy(card) {
  document.getElementById('flashStudyZone').style.display = 'block';
  document.getElementById('flashQuizZone').style.display  = 'none';
  document.getElementById('flashEmoji').textContent    = card.emoji;
  document.getElementById('flashWord').textContent     = card.word;
  document.getElementById('flashDef').textContent      = card.def;
  document.getElementById('flashExemple').textContent  = '💬 ' + card.exemple;
  speak(card.word + '. ' + card.def, 0.82);
}

function flashNext() {
  // Switch to quiz mode after studying
  state.flashPhase = 'quiz';
  loadFlashcard();
}

function showFlashQuiz(card) {
  document.getElementById('flashStudyZone').style.display = 'none';
  document.getElementById('flashQuizZone').style.display  = 'block';
  document.getElementById('flashQuizEmoji').textContent   = card.emoji;
  document.getElementById('flashQuizWord').textContent    = card.word;
  document.getElementById('flashQuizPrompt').textContent  = 'Tu t\'en souviens ?';
  document.getElementById('flashAnswerReveal').style.display = 'none';
  document.getElementById('flashRateZone').style.display     = 'none';
  speak('Tu t\'en souviens ? ' + card.word, 0.85);
}

function revealFlashAnswer() {
  const card = state.flashQueue[state.flashIdx];
  document.getElementById('flashAnswerReveal').textContent = card.def;
  document.getElementById('flashAnswerReveal').style.display = 'block';
  document.getElementById('flashRateZone').style.display     = 'flex';
  speak(card.def, 0.85);
}

function rateFlash(correct) {
  const card = state.flashQueue[state.flashIdx];
  SRS.answer(card.id, correct);
  if (correct) {
    state.stars += 1; state.xp += 5;
    playSound('correct');
    if (!state.moduleStats['flashcards']) state.moduleStats['flashcards'] = { correct: 0, total: 0 };
    state.moduleStats['flashcards'].correct++;
    state.moduleStats['flashcards'].total++;
  } else {
    playSound('wrong');
    if (!state.moduleStats['flashcards']) state.moduleStats['flashcards'] = { correct: 0, total: 0 };
    state.moduleStats['flashcards'].total++;
  }
  saveProgress(); updateStarDisplay(); updateXpBar();
  checkBadges();
  state.flashIdx++;
  state.flashPhase = 'study';
  if (state.flashIdx >= state.flashQueue.length) {
    // Done
    const correctCount = state.flashQueue.filter(c => (state.flashMem[c.id]?.box||0) >= 2).length;
    trackModuleStat('flashcards', correctCount, state.flashQueue.length);
    const newLvl = tryUnlockNextLevel('flashcards');
    state.stars += 3; saveProgress(); updateStarDisplay();
    const flashMsg = newLvl
      ? `🎉 Niveau ${newLvl} débloqué en flashcards ! De nouveaux mots t'attendent !`
      : 'Excellent travail de mémoire !';
    setMarioReward('star', 'Flashcards terminées !', '⭐⭐⭐', flashMsg);
    showScreen('rewardScreen'); playSound('win'); confetti();
  } else {
    loadFlashcard();
  }
}

// ─────────────────────────────────────────────────────────────────────
// KARAOKÉ DE PHRASES
// ─────────────────────────────────────────────────────────────────────
function startKaraoke() {
  const unlocked = getUnlockedLevel('karaoke') || 1;
  state.karaokeQueue = karaokePhrase
    .filter(p => (p.lvl||1) <= unlocked)
    .sort(() => Math.random() - 0.5);
  const savedKaraoke = state.moduleProgress['karaoke'] || 0;
  state.karaokeIdx = Math.min(savedKaraoke, Math.max(0, state.karaokeQueue.length - 1));
  state.karaokeStep = -1; // -1 = intro, 0+ = word index
  state.karaokeRecording = false;
  showScreen('karaokeScreen');
  loadKaraokePhrase();
}

function loadKaraokePhrase() {
  const p = state.karaokeQueue[state.karaokeIdx];
  const total = state.karaokeQueue.length;
  document.getElementById('karaokeProgress').style.width = ((state.karaokeIdx + 1) / total * 100) + '%';
  document.getElementById('karaokeProgressLabel').textContent = `Phrase ${state.karaokeIdx + 1} / ${total}`;
  document.getElementById('karaokeTheme').textContent   = p.theme;
  document.getElementById('karaokeEmoji').textContent   = p.emoji;
  document.getElementById('karaokeTranscript').textContent = '';
  document.getElementById('karaokeTranscript').classList.remove('has-text');

  // Split into words (including punctuation attached)
  const words = p.phrase.split(' ');
  state.karaokeWords = words;
  state.karaokeStep  = -1;

  renderKaraokeWords(words, -1);
  document.getElementById('karaokeListenBtn').style.display = 'flex';
  document.getElementById('karaokeRecordBtn').style.display = 'none';
  document.getElementById('karaokeNextBtn').classList.remove('show');
}

function renderKaraokeWords(words, activeIdx) {
  const container = document.getElementById('karaokeWordDisplay');
  container.innerHTML = '';
  words.forEach((w, i) => {
    const span = document.createElement('span');
    span.className = 'karaoke-word';
    if (i < activeIdx)  span.classList.add('done');
    if (i === activeIdx) span.classList.add('active');
    span.textContent = w + ' ';
    container.appendChild(span);
  });
}

async function listenAndAnimate() {
  const p = state.karaokeQueue[state.karaokeIdx];
  document.getElementById('karaokeListenBtn').style.display = 'none';
  // Speak word by word with highlight
  const words = state.karaokeWords;
  const fullText = p.phrase;
  // Estimate duration per word (avg 350ms per word at rate 0.85)
  const msPerWord = 370;

  // Start speaking the full phrase
  speak(fullText, 0.85);

  // Animate word by word
  for (let i = 0; i < words.length; i++) {
    renderKaraokeWords(words, i);
    await new Promise(r => setTimeout(r, msPerWord));
  }
  renderKaraokeWords(words, words.length); // all done
  // Show record button
  setTimeout(() => {
    document.getElementById('karaokeRecordBtn').style.display = 'flex';
    speak('À ton tour ! Répète la phrase.', 0.9);
  }, 500);
}

function startKaraokeRecord() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  document.getElementById('karaokeRecordBtn').classList.add('recording');
  document.getElementById('karaokeRecordIcon').textContent = '⏹️';
  if (!SR) {
    document.getElementById('karaokeTranscript').textContent = 'Dis la phrase à voix haute, puis continue !';
    document.getElementById('karaokeTranscript').classList.add('has-text');
    document.getElementById('karaokeNextBtn').classList.add('show');
    return;
  }
  window.speechSynthesis.cancel();
  const rec = new SR();
  rec.lang = 'fr-FR'; rec.interimResults = true;
  rec.onresult = (e) => {
    let t = '';
    for (let i = e.resultIndex; i < e.results.length; i++) t += e.results[i][0].transcript;
    document.getElementById('karaokeTranscript').textContent = t;
    document.getElementById('karaokeTranscript').classList.add('has-text');
  };
  rec.onend = () => {
    document.getElementById('karaokeRecordBtn').classList.remove('recording');
    document.getElementById('karaokeRecordIcon').textContent = '🎙️';
    document.getElementById('karaokeNextBtn').classList.add('show');
    // Award stars for attempting
    state.stars += 2; state.xp += 8;
    if (!state.moduleStats['karaoke']) state.moduleStats['karaoke'] = { correct: 0, total: 0 };
    state.moduleStats['karaoke'].total++;
    saveProgress(); updateStarDisplay(); updateXpBar();
    playSound('correct'); checkBadges();
  };
  rec.onerror = (e) => {
    document.getElementById('karaokeRecordBtn').classList.remove('recording');
    document.getElementById('karaokeRecordIcon').textContent = '🎙️';
    document.getElementById('karaokeNextBtn').classList.add('show');
    showMicError('karaokeTranscript', e.error);
  };
  startSpeechRecognition(rec, 'karaokeTranscript', () => {
    document.getElementById('karaokeRecordBtn').classList.remove('recording');
    document.getElementById('karaokeRecordIcon').textContent = '🎙️';
    document.getElementById('karaokeNextBtn').classList.add('show');
  });
  state.karaokeRecording = true;
}

function nextKaraokePhrase() {
  state.karaokeIdx++;
  state.moduleProgress['karaoke'] = state.karaokeIdx;
  saveProgress();
  if (state.karaokeIdx >= state.karaokeQueue.length) {
    state.moduleProgress['karaoke'] = 0;
    trackModuleStat('karaoke', state.karaokeQueue.length, state.karaokeQueue.length);
    const newLvl = tryUnlockNextLevel('karaoke');
    state.stars += 5; saveProgress(); updateStarDisplay();
    setMarioReward('mario', 'Karaoké terminé !', '⭐⭐⭐',
      newLvl ? `Niveau ${newLvl} débloqué ! Tu chantes super bien !` : 'Tu as répété toutes les phrases ! Ta mémoire s\'améliore !');
    showScreen('rewardScreen'); playSound('win'); confetti();
  } else {
    loadKaraokePhrase();
  }
}

// ─────────────────────────────────────────────────────────────────────
// PUZZLE DE PHRASES — Glisser-déposer sur tablette
// ─────────────────────────────────────────────────────────────────────
function startPuzzle() {
  const unlocked = getUnlockedLevel('puzzle') || 1;
  state.puzzleQueue = puzzlePhrases
    .filter(p => (p.lvl||1) <= unlocked)
    .sort(() => Math.random() - 0.5);
  const savedPuzzle = state.moduleProgress['puzzle'] || 0;
  state.puzzleIdx   = Math.min(savedPuzzle, Math.max(0, state.puzzleQueue.length - 1));
  state.puzzleScore = 0;
  showScreen('puzzleScreen');
  loadPuzzle();
}

function loadPuzzle() {
  const p = state.puzzleQueue[state.puzzleIdx];
  const total = state.puzzleQueue.length;
  document.getElementById('puzzleProgress').style.width = ((state.puzzleIdx + 1) / total * 100) + '%';
  document.getElementById('puzzleProgressLabel').textContent = `Puzzle ${state.puzzleIdx + 1} / ${total}`;
  document.getElementById('puzzleHint').textContent = '💡 ' + p.hint;
  document.getElementById('puzzleFeedback').className = 'feedback-card';
  document.getElementById('puzzleNextBtn').classList.remove('show');
  document.getElementById('puzzleValidateBtn').style.display = 'block';

  // Shuffle words
  const shuffled = [...p.words].sort(() => Math.random() - 0.5);
  state.puzzleCurrent   = p;
  state.puzzleArranged  = []; // words placed in drop zone
  state.puzzleAvailable = [...shuffled];

  renderPuzzle();
  // Read hint aloud
  speak('Remets les mots dans le bon ordre. ' + p.hint, 0.85);
}

function renderPuzzle() {
  // Word bank (draggable words)
  const bank = document.getElementById('puzzleWordBank');
  bank.innerHTML = '';
  state.puzzleAvailable.forEach((w, i) => {
    const el = document.createElement('div');
    el.className = 'puzzle-word';
    el.textContent = w;
    el.draggable = true;
    el.dataset.idx = i;
    el.addEventListener('click', () => puzzlePickWord(i));
    el.addEventListener('dragstart', e => { e.dataTransfer.setData('bankIdx', i); });
    bank.appendChild(el);
  });

  // Drop zone (arranged words)
  const zone = document.getElementById('puzzleDropZone');
  zone.innerHTML = '';
  state.puzzleArranged.forEach((w, i) => {
    const el = document.createElement('div');
    el.className = 'puzzle-word placed';
    el.textContent = w;
    el.addEventListener('click', () => puzzleReturnWord(i));
    zone.appendChild(el);
  });

  // Drop zone drag events
  zone.ondragover = e => e.preventDefault();
  zone.ondrop = e => {
    e.preventDefault();
    const idx = parseInt(e.dataTransfer.getData('bankIdx'));
    if (!isNaN(idx)) puzzlePickWord(idx);
  };
}

function puzzlePickWord(bankIdx) {
  const w = state.puzzleAvailable[bankIdx];
  state.puzzleAvailable.splice(bankIdx, 1);
  state.puzzleArranged.push(w);
  renderPuzzle();
  playSound('tap');
}

function puzzleReturnWord(arrangedIdx) {
  const w = state.puzzleArranged[arrangedIdx];
  state.puzzleArranged.splice(arrangedIdx, 1);
  state.puzzleAvailable.push(w);
  renderPuzzle();
}

function validatePuzzle() {
  const p = state.puzzleCurrent;
  const correct = p.correct.map(i => p.words[i]);
  const isCorrect = JSON.stringify(state.puzzleArranged) === JSON.stringify(correct);

  document.getElementById('puzzleValidateBtn').style.display = 'none';

  if (isCorrect) {
    state.puzzleScore++;
    state.stars += 3; state.xp += 12;
    playSound('correct'); confetti();
    document.getElementById('puzzleFeedback').className = 'feedback-card show good';
    document.getElementById('puzzleFeedback').querySelector('.feedback-emoji').textContent = '🎉';
    document.getElementById('puzzleFeedback').querySelector('.feedback-text').textContent  = '🌟 Parfait !';
    document.getElementById('puzzleFeedback').querySelector('.feedback-explain').textContent = '✅ ' + correct.join(' ');
    if (!state.moduleStats['puzzle']) state.moduleStats['puzzle'] = { correct: 0, total: 0 };
    state.moduleStats['puzzle'].correct++;
    state.moduleStats['puzzle'].total++;
  } else {
    state.xp += 3;
    playSound('wrong');
    document.getElementById('puzzleFeedback').className = 'feedback-card show bad';
    document.getElementById('puzzleFeedback').querySelector('.feedback-emoji').textContent = '🙈';
    document.getElementById('puzzleFeedback').querySelector('.feedback-text').textContent  = '💪 Pas tout à fait !';
    document.getElementById('puzzleFeedback').querySelector('.feedback-explain').textContent = '✅ La bonne réponse : ' + correct.join(' ');
    if (!state.moduleStats['puzzle']) state.moduleStats['puzzle'] = { correct: 0, total: 0 };
    state.moduleStats['puzzle'].total++;
  }
  saveProgress(); updateStarDisplay(); updateXpBar(); checkBadges();
  document.getElementById('puzzleNextBtn').classList.add('show');
  speak(isCorrect ? 'Bravo !' : 'La bonne réponse est : ' + correct.join(' '), 0.85);
}

function nextPuzzle() {
  state.puzzleIdx++;
  state.moduleProgress['puzzle'] = state.puzzleIdx;
  saveProgress();
  if (state.puzzleIdx >= state.puzzleQueue.length) {
    const total = state.puzzleQueue.length;
    state.moduleProgress['puzzle'] = 0;
    trackModuleStat('puzzle', state.puzzleScore, total);
    const newLvl = tryUnlockNextLevel('puzzle');
    const pct = state.puzzleScore / total;
    setMarioReward(
      pct >= 0.8 ? 'star' : pct >= 0.5 ? 'yoshi' : 'toad',
      `${state.puzzleScore} / ${total} phrases correctes !`,
      pct >= 0.8 ? '⭐⭐⭐' : pct >= 0.5 ? '⭐⭐' : '⭐',
      newLvl ? `Niveau ${newLvl} débloqué !` : pct >= 0.8 ? 'Tu maîtrises les phrases !' : 'Continue à t\'entraîner !'
    );
    showScreen('rewardScreen');
    if (pct >= 0.8) { playSound('win'); confetti(); }
  } else {
    loadPuzzle();
  }
}

// ─────────────────────────────────────────────────────────────────────
// DÉFI DU JOUR
// ─────────────────────────────────────────────────────────────────────
function startDefiDuJour() {
  const todayKey = new Date().toISOString().split('T')[0];
  if (state.lastDefiDay === todayKey && state.defiDone) {
    // Already done today
    showDefiAlreadyDone();
    return;
  }
  const questions = buildDailyChallenge();
  if (!questions || questions.length === 0) {
    setMarioReward('star', 'Pas encore de défi disponible', '⭐', 'Termine d\'abord une activité pour débloquer le défi du jour !');
    showScreen('rewardScreen');
    return;
  }
  state.currentModule   = '__defi__';
  state.currentQ        = 0;
  state.score           = 0;
  state.revisionMode    = false;
  state.sessionQueue    = questions;
  state.lastDefiDay     = todayKey;
  state.defiDone        = false;
  document.getElementById('activityTitle').textContent = '🎯 Défi du jour';
  showScreen('activityScreen');
  loadQuestion();
}

function showDefiAlreadyDone() {
  setMarioReward('star', 'Défi du jour déjà fait !', '⭐⭐⭐', 'Tu reviens demain pour un nouveau défi. Bravo d\'être aussi régulière !');
  showScreen('rewardScreen');
}

// Override nextQuestion to handle defi completion
const _origNextQuestion = nextQuestion;
// We patch via the finishModule path — defi uses '__defi__' key
// The existing finishModule handles this since it just calls trackModuleStat

// ─────────────────────────────────────────────────────────────────────
// BADGES — Vérification et déclenchement
// ─────────────────────────────────────────────────────────────────────
function checkBadges() {
  const earned = state.earnedBadges || [];
  const newBadges = [];
  BADGES_DEF.forEach(b => {
    if (!earned.includes(b.id)) {
      try {
        if (b.check(state)) {
          earned.push(b.id);
          newBadges.push(b);
        }
      } catch(e) {}
    }
  });
  state.earnedBadges = earned;
  if (newBadges.length > 0) {
    localStorage.setItem('aim_badges', JSON.stringify(earned));
    showBadgeToast(newBadges[0]);
  }
}

function showBadgeToast(badge) {
  // Remove existing toast
  const existing = document.getElementById('badgeToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'badgeToast';
  toast.className = 'badge-toast';
  toast.innerHTML = `
    <div class="badge-toast-icon">${badge.emoji}</div>
    <div class="badge-toast-info">
      <div class="badge-toast-title">🏅 Nouveau badge !</div>
      <div class="badge-toast-name">${badge.label}</div>
      <div class="badge-toast-desc">${badge.desc}</div>
    </div>
  `;
  document.body.appendChild(toast);
  playSound('win');
  // Animate in
  requestAnimationFrame(() => { toast.classList.add('show'); });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

function showBadgesScreen() {
  showScreen('badgesScreen');
  renderBadgesGrid();
}

function renderBadgesGrid() {
  const earned = state.earnedBadges || [];
  const grid = document.getElementById('badgesGrid');
  grid.innerHTML = '';
  BADGES_DEF.forEach(b => {
    const isEarned = earned.includes(b.id);
    const el = document.createElement('div');
    el.className = 'badge-card' + (isEarned ? ' earned' : ' locked');
    el.innerHTML = `
      <div class="badge-emoji">${isEarned ? b.emoji : '🔒'}</div>
      <div class="badge-label">${isEarned ? b.label : '???'}</div>
      <div class="badge-desc">${isEarned ? b.desc : 'Continue à jouer pour débloquer !'}</div>
    `;
    grid.appendChild(el);
  });
}

// ─────────────────────────────────────────────────────────────────────
// CÉLÉBRATION DE PALIER — 50, 100, 200 étoiles
// ─────────────────────────────────────────────────────────────────────
function checkStarMilestone(prevStars, newStars) {
  const milestones = [50, 100, 200];
  for (const m of milestones) {
    if (prevStars < m && newStars >= m) {
      setTimeout(() => showMilestoneCelebration(m), 800);
      return;
    }
  }
}

function showMilestoneCelebration(stars) {
  const configs = {
    50:  { char: 'luigi',  title: '50 étoiles !',  msg: 'Luigi est tellement fier de toi ! Tu travailles si bien !', sound: 'win' },
    100: { char: 'mario',  title: '100 étoiles !', msg: 'MARIO VOUS APPLAUDIT ! 🎉 100 étoiles — tu es une vraie championne !', sound: 'win' },
    200: { char: 'star',   title: '200 étoiles !', msg: 'LÉGENDE ! 🌟 200 étoiles — Peach, Mario et Luigi sont tous debout pour toi !', sound: 'win' },
  };
  const cfg = configs[stars];
  if (!cfg) return;

  // Extra confetti burst
  for (let i = 0; i < 3; i++) setTimeout(() => confetti(), i * 400);

  // Show milestone overlay
  const overlay = document.createElement('div');
  overlay.className = 'milestone-overlay';
  overlay.innerHTML = `
    <div class="milestone-card">
      <div class="milestone-chars">
        ${MARIO_CHARS[cfg.char]?.svg || '⭐'}
      </div>
      <div class="milestone-stars">${'⭐'.repeat(Math.min(stars/50, 4))}</div>
      <div class="milestone-title">${cfg.title}</div>
      <div class="milestone-msg">${cfg.msg}</div>
      <button class="milestone-btn" onclick="this.closest('.milestone-overlay').remove(); playSound('win');">
        🎉 Yay !
      </button>
    </div>
  `;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('show'));
  playSound('win');
}

// Patch saveProgress to check milestones
const _origSaveProgress = saveProgress;
function saveProgressWithMilestone() {
  const prev = parseInt(localStorage.getItem('aim_stars') || '0');
  _origSaveProgress();
  checkStarMilestone(prev, state.stars);
  checkBadges();
}
// Override
window.saveProgress = saveProgressWithMilestone;
