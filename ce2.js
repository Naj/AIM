// =====================================================================
// CE2.JS — Les 4 ateliers calés sur les formats des évaluations Repères
//
//   1. Dénombrer des collections  → cubes groupés, total écrit en chiffres
//   2. Problèmes entendus         → énoncé lu à voix haute, 6 propositions
//   3. Accorder le nom/adjectif   → groupe nominal complet affiché
//   4. Mots de la même famille    → trouver l'intrus
//
// Chaque atelier suit le motif des modules existants : file filtrée par
// niveau débloqué, position sauvegardée dans state.moduleProgress,
// trackModuleStat + tryUnlockNextLevel en fin de série.
// =====================================================================

// ─── Utilitaires communs ──────────────────────────────────────────────
function ce2Start(key, bank, screenId, loader) {
  var unlocked = getUnlockedLevel(key) || 1;
  var queue = bank.filter(function (it) { return (it.lvl || 1) <= unlocked; });
  if (queue.length === 0) queue = bank.slice(0, 5);
  var saved = (state.moduleProgress && state.moduleProgress[key]) || 0;
  if (saved >= queue.length) saved = 0;
  state.ce2 = state.ce2 || {};
  state.ce2[key] = { queue: queue, idx: saved, score: 0, answered: false };
  showScreen(screenId);
  loader();
}

function ce2Ctx(key) { return (state.ce2 || {})[key] || null; }

function ce2Progress(key, labelId, fillId, mot) {
  var c = ce2Ctx(key); if (!c) return;
  var lab = document.getElementById(labelId);
  var fil = document.getElementById(fillId);
  if (lab) lab.textContent = mot + ' ' + (c.idx + 1) + ' / ' + c.queue.length;
  if (fil) fil.style.width = ((c.idx + 1) / c.queue.length * 100) + '%';
}

// Fin de série : récompense + progression de niveau
function ce2Finish(key, perso, titre, phraseHaute, phraseBasse) {
  var c = ce2Ctx(key); if (!c) return;
  var total = c.queue.length;
  if (state.moduleProgress) { state.moduleProgress[key] = 0; }
  trackModuleStat(key, c.score, total);
  var newLvl = tryUnlockNextLevel(key);
  var pct = total ? c.score / total : 0;
  state.stars += 4; saveProgress(); updateStarDisplay();
  setMarioReward(
    pct >= 0.8 ? 'star' : pct >= 0.5 ? perso : 'toad',
    c.score + ' / ' + total + ' — ' + titre,
    pct >= 0.8 ? '⭐⭐⭐' : pct >= 0.5 ? '⭐⭐' : '⭐',
    newLvl ? ('🎉 Niveau ' + newLvl + ' débloqué !') : (pct >= 0.8 ? phraseHaute : phraseBasse)
  );
  showScreen('rewardScreen');
  if (pct >= 0.8) { playSound('win'); confetti(); }
}

function ce2Next(key, loader, perso, titre, phraseHaute, phraseBasse) {
  var c = ce2Ctx(key); if (!c) return;
  c.idx++;
  if (state.moduleProgress) { state.moduleProgress[key] = c.idx; saveProgress(); }
  if (c.idx >= c.queue.length) ce2Finish(key, perso, titre, phraseHaute, phraseBasse);
  else loader();
}

function ce2HideNext(btnId) {
  var b = document.getElementById(btnId);
  if (b) b.classList.remove('show');
}
function ce2ShowNext(btnId) {
  var b = document.getElementById(btnId);
  if (b) b.classList.add('show');
}


// =====================================================================
// 1. DÉNOMBRER DES COLLECTIONS
// =====================================================================
function startDenombrement() {
  ce2Start('denombrement', DENOMBREMENT, 'denombrementScreen', loadDenombrement);
}

function loadDenombrement() {
  var c = ce2Ctx('denombrement'); if (!c) return;
  var it = c.queue[c.idx];
  c.answered = false;
  c.aideVue = false;
  ce2Progress('denombrement', 'denomProgressLabel', 'denomProgress', 'Collection');
  ce2HideNext('denomNextBtn');

  var zone = document.getElementById('denomCollection');
  var html = '';
  for (var i = 0; i < it.h; i++) {
    html += '<div class="dn-grp"><div class="dn-hundred">' + repeatDiv(100) + '</div><div class="dn-lbl">100</div></div>';
  }
  for (var j = 0; j < it.t; j++) {
    html += '<div class="dn-grp"><div class="dn-ten">' + repeatDiv(10) + '</div><div class="dn-lbl">10</div></div>';
  }
  if (it.u > 0) {
    html += '<div class="dn-grp"><div class="dn-ones">' + repeatDiv(it.u) + '</div><div class="dn-lbl">' + it.u + '</div></div>';
  }
  zone.innerHTML = html;

  document.getElementById('denomH').textContent = '?';
  document.getElementById('denomT').textContent = '?';
  document.getElementById('denomU').textContent = '?';
  var input = document.getElementById('denomInput');
  input.value = '';
  input.disabled = false;
  document.getElementById('denomFeedback').className = 'feedback-card';

  var lvlEl = document.getElementById('denomLevelBadge');
  if (lvlEl) {
    lvlEl.style.display = 'inline-block';
    lvlEl.textContent = ['', '⭐ Niveau 1', '⭐⭐ Niveau 2', '⭐⭐⭐ Niveau 3'][it.lvl || 1];
    lvlEl.className = 'level-badge lvl-' + (it.lvl || 1);
  }
  speak('Combien y a-t-il de cubes en tout ?', 0.85);
}

function repeatDiv(n) {
  var s = '';
  for (var i = 0; i < n; i++) s += '<div class="dn-cube"></div>';
  return s;
}

function denomAide() {
  var c = ce2Ctx('denombrement'); if (!c || c.answered) return;
  var it = c.queue[c.idx];
  c.aideVue = true;
  document.getElementById('denomH').textContent = it.h;
  document.getElementById('denomT').textContent = it.t;
  document.getElementById('denomU').textContent = it.u;
  speak('Compte les plaques de cent, puis les barres de dix, puis les cubes seuls.', 0.85);
}

function denomValider() {
  var c = ce2Ctx('denombrement'); if (!c || c.answered) return;
  var it = c.queue[c.idx];
  var total = it.h * 100 + it.t * 10 + it.u;
  var input = document.getElementById('denomInput');
  var val = parseInt((input.value || '').replace(/\s/g, ''), 10);
  if (isNaN(val)) { speak('Écris le nombre de cubes.', 0.9); return; }

  c.answered = true;
  input.disabled = true;
  document.getElementById('denomH').textContent = it.h;
  document.getElementById('denomT').textContent = it.t;
  document.getElementById('denomU').textContent = it.u;

  var calcul = it.h + ' centaines + ' + it.t + ' dizaines + ' + it.u + ' unités = ' + total;
  if (val === total) {
    if (!c.aideVue) c.score++; else c.score += 0.5;
    state.stars += 2; state.xp += 10;
    playSound('correct');
    setFeedback('denomFeedback', true, '🌟 Bravo !', calcul + ' cubes.');
    confetti();
  } else {
    playSound('wrong');
    // Pas de logError : une collection de cubes ne se rejoue pas en QCM dans la Révision
    setFeedback('denomFeedback', false, '💪 Presque !', 'Il y en a ' + total + '. ' + calcul + '.');
  }
  saveProgress(); updateStarDisplay();
  ce2ShowNext('denomNextBtn');
}

function denomNext() {
  var c = ce2Ctx('denombrement');
  if (c) c.score = Math.round(c.score);
  ce2Next('denombrement', loadDenombrement, 'yoshi', 'collections comptées',
    'Tu sais grouper par 100 et par 10 — exactement ce qu\'il faut !',
    'Pense à compter les plaques d\'abord, puis les barres.');
}


// =====================================================================
// 2. PROBLÈMES ENTENDUS
// =====================================================================
function startProbEcoute() {
  ce2Start('prob_ecoute', PROB_ECOUTE, 'probEcouteScreen', loadProbEcoute);
}

function loadProbEcoute() {
  var c = ce2Ctx('prob_ecoute'); if (!c) return;
  var it = c.queue[c.idx];
  c.answered = false;
  c.ecoutes = 0;
  ce2Progress('prob_ecoute', 'probProgressLabel', 'probProgress', 'Problème');
  ce2HideNext('probNextBtn');
  document.getElementById('probFeedback').className = 'feedback-card';
  document.getElementById('probEcoutesLabel').textContent = 'Appuie pour écouter l\'énoncé';

  var lvlEl = document.getElementById('probLevelBadge');
  if (lvlEl) {
    lvlEl.style.display = 'inline-block';
    lvlEl.textContent = ['', '⭐ Niveau 1', '⭐⭐ Niveau 2', '⭐⭐⭐ Niveau 3'][it.lvl || 1];
    lvlEl.className = 'level-badge lvl-' + (it.lvl || 1);
  }

  var grid = document.getElementById('probOptions');
  grid.innerHTML = '';
  var opts = it.opts.slice();
  opts.sort(function () { return Math.random() - 0.5; });
  opts.forEach(function (o) {
    var btn = document.createElement('button');
    btn.className = 'answer-btn prob-opt';
    btn.textContent = o + ' ' + it.unite;
    btn.onclick = function () { probChoisir(btn, o === it.rep); };
    grid.appendChild(btn);
  });
  setTimeout(probEcouter, 400);
}

function probEcouter() {
  var c = ce2Ctx('prob_ecoute'); if (!c) return;
  var it = c.queue[c.idx];
  // La lecture auto est différée : la série peut s'être terminée entre-temps
  if (!it) return;
  var lbl0 = document.getElementById('probEcoutesLabel');
  if (!lbl0) return;
  c.ecoutes = (c.ecoutes || 0) + 1;
  document.getElementById('probEcoutesLabel').textContent =
    c.ecoutes === 1 ? 'Écoute n° 1 — tu peux réécouter' : 'Écoute n° ' + c.ecoutes;
  speak(it.enonce, 0.78);
}

function probChoisir(btn, bon) {
  var c = ce2Ctx('prob_ecoute'); if (!c || c.answered) return;
  var it = c.queue[c.idx];
  c.answered = true;
  document.querySelectorAll('#probOptions .answer-btn').forEach(function (b) { b.disabled = true; });

  if (bon) {
    btn.classList.add('correct');
    c.score++; state.stars += 2; state.xp += 10;
    playSound('correct');
    setFeedback('probFeedback', true, '🌟 Exact !', it.aide);
    confetti();
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#probOptions .answer-btn').forEach(function (b) {
      if (b.textContent.indexOf(it.rep + ' ') === 0) b.classList.add('correct');
    });
    playSound('wrong');
    // Pas de logError : l'énoncé est entendu, pas affiché — il ne se rejoue pas en QCM
    setFeedback('probFeedback', false, '💪 Réécoute bien', it.aide);
  }
  saveProgress(); updateStarDisplay();
  ce2ShowNext('probNextBtn');
}

function probNext() {
  ce2Next('prob_ecoute', loadProbEcoute, 'mario', 'problèmes résolus',
    'Tu gardes bien l\'énoncé dans ta tête — c\'est le plus dur !',
    'Astuce : réécoute et demande-toi si on ajoute ou si on enlève.');
}


// =====================================================================
// 3. ACCORDER LE NOM ET L'ADJECTIF
// =====================================================================
function startAccord() {
  ce2Start('accord_gn', ACCORD_GN, 'accordScreen', loadAccord);
}

function loadAccord() {
  var c = ce2Ctx('accord_gn'); if (!c) return;
  var it = c.queue[c.idx];
  c.answered = false;
  ce2Progress('accord_gn', 'accordProgressLabel', 'accordProgress', 'Groupe');
  ce2HideNext('accordNextBtn');
  document.getElementById('accordFeedback').className = 'feedback-card';

  document.getElementById('accordDet').textContent = it.det;
  document.getElementById('accordNom').textContent = it.nom;
  document.getElementById('accordGenre').textContent = it.genre;
  var slot = document.getElementById('accordSlot');
  slot.textContent = '……';
  slot.classList.remove('filled');

  var lvlEl = document.getElementById('accordLevelBadge');
  if (lvlEl) {
    lvlEl.style.display = 'inline-block';
    lvlEl.textContent = ['', '⭐ Niveau 1', '⭐⭐ Niveau 2', '⭐⭐⭐ Niveau 3'][it.lvl || 1];
    lvlEl.className = 'level-badge lvl-' + (it.lvl || 1);
  }

  var grid = document.getElementById('accordOptions');
  grid.innerHTML = '';
  var opts = it.opts.slice();
  var bonne = it.opts[0];
  opts.sort(function () { return Math.random() - 0.5; });
  opts.forEach(function (o) {
    var btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = o;
    btn.onclick = function () { accordChoisir(btn, o, o === bonne); };
    grid.appendChild(btn);
  });
  speak('Quel adjectif s\'accorde avec ' + it.det + ' ' + it.nom + ' ?', 0.85);
}

function accordChoisir(btn, mot, bon) {
  var c = ce2Ctx('accord_gn'); if (!c || c.answered) return;
  var it = c.queue[c.idx];
  c.answered = true;
  document.querySelectorAll('#accordOptions .answer-btn').forEach(function (b) { b.disabled = true; });

  var slot = document.getElementById('accordSlot');
  slot.textContent = mot;
  slot.classList.add('filled');

  if (bon) {
    btn.classList.add('correct');
    c.score++; state.stars += 2; state.xp += 10;
    playSound('correct');
    setFeedback('accordFeedback', true, '🌟 Oui !', it.aide);
    confetti();
    speak(it.det + ' ' + it.nom + ' ' + mot, 0.82);
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#accordOptions .answer-btn').forEach(function (b) {
      if (b.textContent === it.opts[0]) b.classList.add('correct');
    });
    playSound('wrong');
    logError({
      id: it.id, lvl: it.lvl || 1,
      text: 'Quel adjectif s\'accorde avec « ' + it.det + ' ' + it.nom + ' » ?',
      image: '🔗', answers: it.opts, correct: 0, explain: it.aide
    }, 'accord_gn');
    setFeedback('accordFeedback', false, '💪 Regarde encore', it.aide);
  }
  saveProgress(); updateStarDisplay();
  ce2ShowNext('accordNextBtn');
}

function accordNext() {
  ce2Next('accord_gn', loadAccord, 'peach', 'accords réussis',
    'Tu regardes le déterminant avant de choisir — c\'est la bonne méthode !',
    'Rappelle-toi : le déterminant donne le genre et le nombre.');
}


// =====================================================================
// 4. LES MOTS DE LA MÊME FAMILLE (trouver l'intrus)
// =====================================================================
function startFamilles() {
  ce2Start('familles', FAMILLES, 'famillesScreen', loadFamilles);
}

function loadFamilles() {
  var c = ce2Ctx('familles'); if (!c) return;
  var it = c.queue[c.idx];
  c.answered = false;
  ce2Progress('familles', 'famProgressLabel', 'famProgress', 'Liste');
  ce2HideNext('famNextBtn');
  document.getElementById('famFeedback').className = 'feedback-card';
  document.getElementById('famRadical').textContent = '';

  var lvlEl = document.getElementById('famLevelBadge');
  if (lvlEl) {
    lvlEl.style.display = 'inline-block';
    lvlEl.textContent = ['', '⭐ Niveau 1', '⭐⭐ Niveau 2', '⭐⭐⭐ Niveau 3'][it.lvl || 1];
    lvlEl.className = 'level-badge lvl-' + (it.lvl || 1);
  }

  var grid = document.getElementById('famOptions');
  grid.innerHTML = '';
  var mots = it.mots.slice();
  mots.sort(function () { return Math.random() - 0.5; });
  mots.forEach(function (m) {
    var btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = m;
    btn.onclick = function () { famChoisir(btn, m === it.intrus); };
    grid.appendChild(btn);
  });
}

function famEcouter() {
  var c = ce2Ctx('familles'); if (!c) return;
  var it = c.queue[c.idx];
  speak(it.mots.join(', '), 0.78);
}

function famChoisir(btn, bon) {
  var c = ce2Ctx('familles'); if (!c || c.answered) return;
  var it = c.queue[c.idx];
  c.answered = true;
  document.querySelectorAll('#famOptions .answer-btn').forEach(function (b) { b.disabled = true; });
  document.getElementById('famRadical').textContent = 'Radical commun : ' + it.radical;

  if (bon) {
    btn.classList.add('correct');
    c.score++; state.stars += 2; state.xp += 10;
    playSound('correct');
    setFeedback('famFeedback', true, '🌟 Bien vu !', it.aide);
    confetti();
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#famOptions .answer-btn').forEach(function (b) {
      if (b.textContent === it.intrus) b.classList.add('correct');
    });
    playSound('wrong');
    logError({
      id: it.id, lvl: it.lvl || 1,
      text: 'Trouve l\'intrus : ' + it.mots.join(', '),
      image: '🌳', answers: it.mots, correct: it.mots.indexOf(it.intrus), explain: it.aide
    }, 'familles');
    setFeedback('famFeedback', false, '💪 Celui-là est de la famille', it.aide);
  }
  saveProgress(); updateStarDisplay();
  ce2ShowNext('famNextBtn');
}

function famNext() {
  ce2Next('familles', loadFamilles, 'luigi', 'intrus démasqués',
    'Tu repères bien le radical commun — bravo !',
    'Astuce : cherche le petit morceau de mot que trois mots partagent.');
}


// =====================================================================
// PLAN DE TRAVAIL — les priorités de l'évaluation Repères sur l'accueil
// =====================================================================
const PLAN_CE2 = [
  { key:'prob_ecoute',   ic:'🧩', nom:'Résoudre des problèmes',       dom:'MATHS',    go:'startProbEcoute' },
  { key:'denombrement',  ic:'🧱', nom:'Dénombrer des collections',    dom:'MATHS',    go:'startDenombrement' },
  { key:'accord_gn',     ic:'🔗', nom:"Accorder le nom et l'adjectif", dom:'FRANÇAIS', go:'startAccord' },
  { key:'familles',      ic:'🌳', nom:'Mots de la même famille',      dom:'FRANÇAIS', go:'startFamilles' },
  { key:'lecture_ecoute',ic:'👂', nom:'Comprendre un texte entendu',  dom:'FRANÇAIS', go:'startEcouteTexte' },
  { key:'comp_texte',    ic:'📖', nom:'Comprendre un texte lu',       dom:'FRANÇAIS', go:"startModule('comp_texte')" },
];

// Progression d'une priorité : % de réussite observé, sinon 0
function planScore(key) {
  var s = state.moduleStats ? state.moduleStats[key] : null;
  if (!s || !s.total) return 0;
  return Math.max(4, Math.round((s.correct / s.total) * 100));
}

function renderPlanCE2() {
  var host = document.getElementById('planCe2List');
  if (!host) return;
  host.innerHTML = PLAN_CE2.map(function (p) {
    var pct = planScore(p.key);
    var lvl = getUnlockedLevel(p.key) || 1;
    var couleur = pct >= 80 ? 'var(--grass)' : pct >= 50 ? '#e67e22' : 'var(--coral)';
    return '<button class="plan-row" onclick="' + p.go + '">' +
             '<span class="plan-ic">' + p.ic + '</span>' +
             '<span class="plan-txt"><span class="plan-nom">' + p.nom + '</span>' +
             '<span class="plan-dom">' + p.dom + ' · niv. ' + lvl + '</span></span>' +
             '<span class="plan-bar"><i style="width:' + pct + '%;background:' + couleur + '"></i></span>' +
           '</button>';
  }).join('');
}


// =====================================================================
// COMPRENDRE UN TEXTE ENTENDU — le texte est lu 2 fois, jamais affiché
// =====================================================================
function startEcouteTexte() {
  var unlocked = getUnlockedLevel('lecture_ecoute') || 1;
  var queue = TEXTES_ECOUTE.filter(function (t) { return (t.lvl || 1) <= unlocked; });
  if (queue.length === 0) queue = TEXTES_ECOUTE.slice(0, 1);
  state.ecoute = { queue: queue, idx: 0, qIdx: 0, score: 0, total: 0, ecoutes: 0, answered: false };
  showScreen('ecouteScreen');
  loadEcouteTexte();
}

function loadEcouteTexte() {
  var e = state.ecoute; if (!e) return;
  var t = e.queue[e.idx];
  e.qIdx = 0; e.ecoutes = 0;
  document.getElementById('ecouteTitre').textContent = t.titre;
  document.getElementById('ecouteImage').textContent = t.image;
  document.getElementById('ecouteProgressLabel').textContent = 'Texte ' + (e.idx + 1) + ' / ' + e.queue.length;
  document.getElementById('ecouteProgress').style.width = ((e.idx + 1) / e.queue.length * 100) + '%';
  document.getElementById('ecouteCompteur').textContent = 'Tu peux écouter 2 fois';
  document.getElementById('ecouteZone').style.display = 'block';
  document.getElementById('ecouteQZone').style.display = 'none';
  document.getElementById('ecouteGoQ').classList.remove('show');
}

function ecouterTexte() {
  var e = state.ecoute; if (!e) return;
  var t = e.queue[e.idx];
  e.ecoutes++;
  speak(t.texte, 0.8);
  var lbl = document.getElementById('ecouteCompteur');
  if (e.ecoutes === 1) lbl.textContent = 'Écoute 1 sur 2 — tu peux réécouter une fois';
  else if (e.ecoutes === 2) lbl.textContent = 'Écoute 2 sur 2 — à toi de répondre !';
  else lbl.textContent = 'Écoute supplémentaire (n° ' + e.ecoutes + ')';
  if (e.ecoutes >= 1) document.getElementById('ecouteGoQ').classList.add('show');
}

function ecouteQuestions() {
  var e = state.ecoute; if (!e) return;
  if (window.speechSynthesis) speechSynthesis.cancel();
  document.getElementById('ecouteZone').style.display = 'none';
  document.getElementById('ecouteQZone').style.display = 'block';
  loadEcouteQ();
}

function loadEcouteQ() {
  var e = state.ecoute; if (!e) return;
  var t = e.queue[e.idx];
  var q = t.questions[e.qIdx];
  e.answered = false;
  document.getElementById('ecouteQLabel').textContent = 'Question ' + (e.qIdx + 1) + ' / ' + t.questions.length;
  document.getElementById('ecouteQText').textContent = q.text;
  document.getElementById('ecouteFeedback').className = 'feedback-card';
  document.getElementById('ecouteNextBtn').classList.remove('show');

  var grid = document.getElementById('ecouteAnswers');
  grid.innerHTML = '';
  var shuffled = q.answers.map(function (a, i) { return { text: a, ok: i === q.correct }; });
  shuffled.sort(function () { return Math.random() - 0.5; });
  shuffled.forEach(function (a) {
    var btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = a.text;
    btn.onclick = function () { ecouteRepondre(btn, a.ok, q); };
    grid.appendChild(btn);
  });
  setTimeout(function () { speak(q.text, 0.85); }, 300);
}

function ecouteRepondre(btn, ok, q) {
  var e = state.ecoute; if (!e || e.answered) return;
  e.answered = true;
  e.total++;
  document.querySelectorAll('#ecouteAnswers .answer-btn').forEach(function (b) { b.disabled = true; });
  if (ok) {
    btn.classList.add('correct');
    e.score++; state.stars += 2; state.xp += 10;
    playSound('correct');
    setFeedback('ecouteFeedback', true, '🌟 Bravo !', q.explain);
    confetti();
  } else {
    btn.classList.add('wrong');
    playSound('wrong');
    logError(q, 'lecture_ecoute');
    setFeedback('ecouteFeedback', false, '💪 Pas tout à fait', q.explain);
  }
  saveProgress(); updateStarDisplay();
  document.getElementById('ecouteNextBtn').classList.add('show');
}

function ecouteNextQ() {
  var e = state.ecoute; if (!e) return;
  var t = e.queue[e.idx];
  e.qIdx++;
  if (e.qIdx < t.questions.length) { loadEcouteQ(); return; }
  e.idx++;
  if (e.idx < e.queue.length) { loadEcouteTexte(); return; }

  trackModuleStat('lecture_ecoute', e.score, e.total);
  var newLvl = tryUnlockNextLevel('lecture_ecoute');
  var pct = e.total ? e.score / e.total : 0;
  state.stars += 5; saveProgress(); updateStarDisplay();
  setMarioReward(
    pct >= 0.8 ? 'star' : pct >= 0.5 ? 'yoshi' : 'toad',
    e.score + ' / ' + e.total + ' — textes entendus',
    pct >= 0.8 ? '⭐⭐⭐' : pct >= 0.5 ? '⭐⭐' : '⭐',
    newLvl ? ('🎉 Niveau ' + newLvl + ' débloqué !')
           : (pct >= 0.8 ? 'Tu écoutes vraiment bien — c\'est une grande force !'
                         : 'Écoute les deux fois avant de répondre, ça aide beaucoup.')
  );
  showScreen('rewardScreen');
  if (pct >= 0.8) { playSound('win'); confetti(); }
}
