// ===================== STATE =====================
const state = {
  stars:          parseInt(localStorage.getItem('aim_stars')    || '0'),
  xp:             parseInt(localStorage.getItem('aim_xp')       || '0'),
  sessions:       parseInt(localStorage.getItem('aim_sessions') || '0'),
  totalCorrect:   parseInt(localStorage.getItem('aim_correct')  || '0'),
  totalAnswered:  parseInt(localStorage.getItem('aim_answered') || '0'),
  streak:         parseInt(localStorage.getItem('aim_streak')   || '0'),
  activeDays:     JSON.parse(localStorage.getItem('aim_days')   || '[]'),
  moduleStats:    JSON.parse(localStorage.getItem('aim_mstats') || '{}'),

  // Niveaux débloqués par module : { fr_vocab: 2, math_calc: 1, ... }
  unlockedLevels: JSON.parse(localStorage.getItem('aim_levels') || '{}'),

  // Erreurs enregistrées : { questionId: { count, lastSeen, moduleKey, lvl } }
  errorLog:       JSON.parse(localStorage.getItem('aim_errors') || '{}'),

  // Session QCM
  currentModule:  null,
  currentQ:       0,
  score:          0,
  answered:       false,
  sessionQueue:   [],   // liste des questions actives dans la session

  // Lecture
  storyIdx: 0, storyQIdx: 0, storyScore: 0, storyAnswered: false,

  // Dictée
  dicteeIdx: 0, dicteeTyped: [], dicteeQueue: [],

  // Oral
  oralIdx: 0, oralQueue: [], isRecording: false, recognition: null,

  // Conjugaison orale
  conjIdx: 0, conjQueue: [],

  // Flashcards SRS
  flashMem:   JSON.parse(localStorage.getItem('aim_flash')  || '{}'),
  flashQueue: [], flashIdx: 0, flashPhase: 'study',

  // Karaoké
  karaokeQueue: [], karaokeIdx: 0, karaokeWords: [], karaokeStep: -1,

  // Puzzle
  puzzleQueue: [], puzzleIdx: 0, puzzleScore: 0,
  puzzleCurrent: null, puzzleArranged: [], puzzleAvailable: [],

  // Badges
  earnedBadges: JSON.parse(localStorage.getItem('aim_badges') || '[]'),

  // Progression en cours par module séquentiel { lecture: 2, dictee: 1, ... }
  moduleProgress: JSON.parse(localStorage.getItem('aim_progress') || '{}'),

  // Défi du jour
  lastDefiDay: localStorage.getItem('aim_defi_day') || '',
  defiDone:    localStorage.getItem('aim_defi_done') === '1',
  defiCount:   parseInt(localStorage.getItem('aim_defi_count') || '0'),
  selectedTable: 2,
  // Memory
  memDifficulty: 'easy', memPairs: 0, memTotal: 4,
  memFlipped: [], memMatched: [], memCards: [], memLocked: false,

  // Parent
  pin: '',
};

// ─── Persistance ───────────────────────────────────────────────────────────
function saveProgress() {
  localStorage.setItem('aim_stars',    state.stars);
  localStorage.setItem('aim_xp',       state.xp);
  localStorage.setItem('aim_sessions', state.sessions);
  localStorage.setItem('aim_correct',  state.totalCorrect);
  localStorage.setItem('aim_answered', state.totalAnswered);
  localStorage.setItem('aim_streak',   state.streak);
  localStorage.setItem('aim_days',     JSON.stringify(state.activeDays));
  localStorage.setItem('aim_mstats',   JSON.stringify(state.moduleStats));
  localStorage.setItem('aim_levels',   JSON.stringify(state.unlockedLevels));
  localStorage.setItem('aim_errors',   JSON.stringify(state.errorLog));
  // Sauvegarde de la progression en cours pour chaque module séquentiel
  localStorage.setItem('aim_progress', JSON.stringify(state.moduleProgress));
}

function resetAllData() {
  ['aim_stars','aim_xp','aim_sessions','aim_correct','aim_answered',
   'aim_streak','aim_days','aim_mstats','aim_lastday','aim_levels','aim_errors',
   'aim_flash','aim_badges','aim_defi_day','aim_defi_done','aim_defi_count','aim_progress']
    .forEach(k => localStorage.removeItem(k));
  location.reload();
}

// ─── Tracking stats ────────────────────────────────────────────────────────
function trackModuleStat(key, correct, total) {
  if (!state.moduleStats[key]) state.moduleStats[key] = { correct: 0, total: 0 };
  state.moduleStats[key].correct += correct;
  state.moduleStats[key].total   += total;
  state.totalCorrect   += correct;
  state.totalAnswered  += total;
  state.sessions++;
}

// ─── Enregistrer une erreur sur une question ───────────────────────────────
function logError(question, moduleKey) {
  const id = question.id;
  if (!state.errorLog[id]) {
    state.errorLog[id] = { count: 0, moduleKey, lvl: question.lvl || 1, text: question.text, image: question.image || '', answers: question.answers, correct: question.correct, explain: question.explain };
  }
  state.errorLog[id].count++;
  state.errorLog[id].lastSeen = Date.now();
}

// Marquer une question comme maîtrisée (retirer de la liste d'erreurs si réussie)
function logSuccess(questionId) {
  if (state.errorLog[questionId]) {
    state.errorLog[questionId].count = Math.max(0, state.errorLog[questionId].count - 1);
    if (state.errorLog[questionId].count === 0) delete state.errorLog[questionId];
  }
}

// ─── Niveaux ───────────────────────────────────────────────────────────────
// Retourne le niveau actuellement débloqué pour un module (1 par défaut)
function getUnlockedLevel(moduleKey) {
  return state.unlockedLevels[moduleKey] || 1;
}

// Calcule le % de réussite d'un module pour débloquer le niveau suivant.
// Fonctionne pour TOUS les types de modules (QCM et non-QCM).
function getModuleLevelScore(moduleKey) {
  // Priorité 1 : moduleStats (alimenté par trackModuleStat pour tous les modules)
  const stats = state.moduleStats[moduleKey];
  if (stats && stats.total >= 3) {
    return Math.round((stats.correct / stats.total) * 100);
  }
  // Priorité 2 : pour les modules QCM, utiliser l'errorLog
  const mod = modules[moduleKey];
  if (mod && mod.questions) {
    const qs = mod.questions;
    if (qs.length === 0) return 100;
    const errors = qs.filter(q => state.errorLog[q.id] && state.errorLog[q.id].count > 0).length;
    return Math.round(((qs.length - errors) / qs.length) * 100);
  }
  // Priorité 3 : si le module a été joué au moins une fois, on lui donne 70%
  if (stats && stats.total >= 1) return 70;
  return 0;
}

// Tente de débloquer le niveau suivant après une session
const MAX_LEVELS = { lecture: 5 }; // certains modules vont jusqu'au niveau 5
function tryUnlockNextLevel(moduleKey) {
  const current = getUnlockedLevel(moduleKey);
  const maxLevel = MAX_LEVELS[moduleKey] || 3;
  if (current >= maxLevel) return null;
  const score = getModuleLevelScore(moduleKey);
  const threshold = LEVEL_THRESHOLDS[current + 1] || 80;
  if (score >= threshold) {
    state.unlockedLevels[moduleKey] = current + 1;
    saveProgress();
    return current + 1;
  }
  return null;
}

// Filtre les questions d'un module selon le niveau débloqué
function getAvailableQuestions(moduleKey) {
  const mod = modules[moduleKey];
  const maxLvl = getUnlockedLevel(moduleKey);
  return mod.questions.filter(q => (q.lvl || 1) <= maxLvl);
}

// ─── Mode Révision ─────────────────────────────────────────────────────────
// Retourne les questions à réviser triées par nb d'erreurs (les plus échouées en premier)
function getRevisionQueue() {
  const errors = Object.values(state.errorLog)
    .filter(e => e.count > 0)
    .sort((a, b) => b.count - a.count || b.lastSeen - a.lastSeen)
    .slice(0, 10); // max 10 questions à la fois
  return errors;
}

function hasRevisionItems() {
  return Object.values(state.errorLog).some(e => e.count > 0);
}

// ─── Streak & calendrier ───────────────────────────────────────────────────
function checkStreak() {
  const today = new Date().toDateString();
  const lastDay = localStorage.getItem('aim_lastday');
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastDay === today) return;
  state.streak = (lastDay === yesterday) ? state.streak + 1 : 1;
  localStorage.setItem('aim_lastday', today);
  localStorage.setItem('aim_streak', state.streak);
  const todayISO = new Date().toISOString().split('T')[0];
  if (!state.activeDays.includes(todayISO)) {
    state.activeDays.push(todayISO);
    if (state.activeDays.length > 35) state.activeDays.shift();
  }
  saveProgress();
}

// ─── UI helpers ────────────────────────────────────────────────────────────
function updateStarDisplay() {
  document.getElementById('starCount').textContent = state.stars;
}
function updateXpBar() {
  document.getElementById('xpFill').style.width = Math.min(state.xp % 100, 100) + '%';
}
function updateStreakPill() {
  const pill = document.getElementById('streakPill');
  if (pill) pill.textContent = `🔥 ${state.streak} jour${state.streak > 1 ? 's' : ''} de suite`;
}
