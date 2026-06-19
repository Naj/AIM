// =====================================================================
// FLASHCARDS — Répétition espacée
// Chaque carte : mot, image emoji, définition courte, exemples
// =====================================================================
const flashcards = [
  // ── Niveau 1 : mots courants ──
  { id:'fc_chat',    lvl:1, word:'un chat',      emoji:'🐱', def:'Animal domestique qui miaule et ronronne.', exemple:'Le chat dort sur le canapé.' },
  { id:'fc_maison',  lvl:1, word:'une maison',   emoji:'🏠', def:'Bâtiment où on habite avec sa famille.', exemple:'Notre maison a un grand jardin.' },
  { id:'fc_soleil',  lvl:1, word:'le soleil',    emoji:'☀️', def:'Étoile qui éclaire et réchauffe la Terre.', exemple:'Le soleil brille fort aujourd\'hui.' },
  { id:'fc_arbre',   lvl:1, word:'un arbre',     emoji:'🌳', def:'Grande plante avec un tronc, des branches et des feuilles.', exemple:'Le chêne est un grand arbre.' },
  { id:'fc_eau',     lvl:1, word:'l\'eau',       emoji:'💧', def:'Liquide transparent qu\'on boit et qui remplit les rivières.', exemple:'Bois de l\'eau quand tu as soif.' },
  { id:'fc_ami',     lvl:1, word:'un ami',       emoji:'🤝', def:'Personne qu\'on aime bien et avec qui on joue.', exemple:'Lucas est mon meilleur ami.' },
  { id:'fc_livre',   lvl:1, word:'un livre',     emoji:'📚', def:'Objet avec des pages qu\'on lit pour apprendre ou s\'amuser.', exemple:'J\'ai lu un livre sur les dinosaures.' },
  { id:'fc_fleur',   lvl:1, word:'une fleur',    emoji:'🌸', def:'Partie colorée d\'une plante, souvent parfumée.', exemple:'La rose est une belle fleur rouge.' },

  // ── Niveau 2 : adjectifs & nuances ──
  { id:'fc_courageux', lvl:2, word:'courageux',  emoji:'🦁', def:'Qui n\'a pas peur d\'affronter les difficultés.', exemple:'Le pompier est très courageux.' },
  { id:'fc_genereux',  lvl:2, word:'généreux',   emoji:'🎁', def:'Qui aime partager et donner aux autres.', exemple:'Elle est généreuse : elle partage ses bonbons.' },
  { id:'fc_paisible',  lvl:2, word:'paisible',   emoji:'🕊️', def:'Calme et tranquille, sans bruit ni agitation.', exemple:'La campagne est un endroit paisible.' },
  { id:'fc_immense',   lvl:2, word:'immense',    emoji:'🌍', def:'Très très grand, presque sans limite.', exemple:'L\'océan est immense.' },
  { id:'fc_fragile',   lvl:2, word:'fragile',    emoji:'🥚', def:'Qui se casse ou se blesse facilement.', exemple:'Ce vase en verre est très fragile.' },
  { id:'fc_mystere',   lvl:2, word:'mystérieux', emoji:'🔮', def:'Difficile à comprendre ou à expliquer, qui cache quelque chose.', exemple:'Cette vieille maison est mystérieuse.' },
  { id:'fc_feroce',    lvl:2, word:'féroce',     emoji:'🐯', def:'Très violent et dangereux, qui attaque facilement.', exemple:'Le loup est un animal féroce.' },
  { id:'fc_doux',      lvl:2, word:'doux',       emoji:'🐑', def:'Agréable au toucher, pas rugueux ; aussi : calme et gentil.', exemple:'La laine est douce. Il a une voix douce.' },

  // ── Niveau 3 : mots avancés CE1 ──
  { id:'fc_resoudre',  lvl:3, word:'résoudre',   emoji:'🧩', def:'Trouver la solution à un problème.', exemple:'Je vais résoudre ce problème de maths.' },
  { id:'fc_observer',  lvl:3, word:'observer',   emoji:'🔭', def:'Regarder attentivement pour comprendre.', exemple:'On observe les étoiles avec un télescope.' },
  { id:'fc_imaginer',  lvl:3, word:'imaginer',   emoji:'💭', def:'Créer des images ou des idées dans sa tête.', exemple:'J\'imagine un monde plein de couleurs.' },
  { id:'fc_comparer',  lvl:3, word:'comparer',   emoji:'⚖️', def:'Regarder les ressemblances et différences entre deux choses.', exemple:'Compare le chat et le chien.' },
  { id:'fc_paysage',   lvl:3, word:'un paysage', emoji:'🏔️', def:'Ce qu\'on voit quand on regarde au loin : montagnes, forêts, mer…', exemple:'Le paysage de montagne est magnifique.' },
  { id:'fc_silence',   lvl:3, word:'le silence', emoji:'🤫', def:'Absence de bruit, quand tout est calme.', exemple:'Dans la bibliothèque, on garde le silence.' },
  { id:'fc_patience',  lvl:3, word:'la patience',emoji:'⏳', def:'Capacité à attendre sans s\'énerver.', exemple:'Il faut de la patience pour apprendre à lire.' },
  { id:'fc_curiosite', lvl:3, word:'la curiosité',emoji:'🔍', def:'Désir de découvrir, d\'apprendre des choses nouvelles.', exemple:'La curiosité est une grande qualité.' },
];

// =====================================================================
// PUZZLES DE PHRASES — Remise en ordre de mots
// =====================================================================
const puzzlePhrases = [
  // Niveau 1 — phrases simples 3-4 mots
  { id:'pp1', lvl:1, words:['Le','chat','dort','.'],        correct:[0,1,2,3], hint:'Qui dort ? Qu\'est-ce qu\'il fait ?' },
  { id:'pp2', lvl:1, words:['Elle','chante','bien','.'],    correct:[0,1,2,3], hint:'Qui chante ? Comment ?' },
  { id:'pp3', lvl:1, words:['Le','chien','court','.'],      correct:[0,1,2,3], hint:'Sujet + verbe + point !' },
  { id:'pp4', lvl:1, words:['J\'','aime','les','pommes','.'], correct:[0,1,2,3,4], hint:'Je + verbe + complément' },
  { id:'pp5', lvl:1, words:['Il','fait','beau','.'],        correct:[0,1,2,3], hint:'Il fait quel temps ?' },

  // Niveau 2 — phrases avec adjectif ou complément
  { id:'pp6',  lvl:2, words:['Le','petit','chat','joue','.'],           correct:[0,1,2,3,4], hint:'Article + adjectif + nom + verbe' },
  { id:'pp7',  lvl:2, words:['Emma','mange','une','pomme','rouge','.'], correct:[0,1,2,3,4,5], hint:'Sujet + verbe + article + nom + adjectif' },
  { id:'pp8',  lvl:2, words:['Les','enfants','jouent','au','parc','.'], correct:[0,1,2,3,4,5], hint:'Qui ? Fait quoi ? Où ?' },
  { id:'pp9',  lvl:2, words:['Elle','ne','mange','pas','.'],            correct:[0,1,2,3,4], hint:'Forme négative : ne … pas' },
  { id:'pp10', lvl:2, words:['Mon','chien','est','très','grand','.'],   correct:[0,1,2,3,4,5], hint:'Sujet + verbe être + adjectif' },

  // Niveau 3 — phrases complexes avec ponctuation
  { id:'pp11', lvl:3, words:['Est-ce','que','tu','aimes','le','chocolat','?'],    correct:[0,1,2,3,4,5,6], hint:'Phrase interrogative avec Est-ce que' },
  { id:'pp12', lvl:3, words:['Hier','nous','avons','mangé','une','tarte','.'],    correct:[0,1,2,3,4,5,6], hint:'Passé composé : avoir + participe passé' },
  { id:'pp13', lvl:3, words:['Demain','je','ferai','mes','devoirs','.'],          correct:[0,1,2,3,4,5], hint:'Futur simple' },
  { id:'pp14', lvl:3, words:['Le','jardinier','patient','arrose','ses','fleurs','.'], correct:[0,1,2,3,4,5,6], hint:'Adjectif placé après le nom' },
  { id:'pp15', lvl:3, words:['Ferme','la','porte','!'],                            correct:[0,1,2,3], hint:'Phrase impérative — ordre !' },
];

// =====================================================================
// KARAOKÉ DE PHRASES — Phrases lues mot par mot
// =====================================================================
const karaokePhrase = [
  // Niveau 1 — phrases courtes
  { id:'kp1', lvl:1, phrase:'Le soleil brille dans le ciel bleu.', emoji:'☀️', theme:'Nature' },
  { id:'kp2', lvl:1, phrase:'Mon chat s\'appelle Milo.', emoji:'🐱', theme:'Animaux' },
  { id:'kp3', lvl:1, phrase:'J\'aime jouer avec mes amis.', emoji:'🤝', theme:'Amitié' },
  { id:'kp4', lvl:1, phrase:'Les fleurs poussent au printemps.', emoji:'🌸', theme:'Saisons' },
  { id:'kp5', lvl:1, phrase:'Je mange une pomme rouge.', emoji:'🍎', theme:'Nourriture' },

  // Niveau 2 — phrases avec structure plus riche
  { id:'kp6',  lvl:2, phrase:'Le petit chien court très vite dans le jardin.', emoji:'🐶', theme:'Animaux' },
  { id:'kp7',  lvl:2, phrase:'Elle a mangé une délicieuse tarte aux pommes.', emoji:'🥧', theme:'Nourriture' },
  { id:'kp8',  lvl:2, phrase:'Nous allons à l\'école tous les matins.', emoji:'🏫', theme:'École' },
  { id:'kp9',  lvl:2, phrase:'Les enfants jouent au ballon dans la cour.', emoji:'⚽', theme:'Sport' },
  { id:'kp10', lvl:2, phrase:'La forêt est pleine d\'arbres magnifiques.', emoji:'🌲', theme:'Nature' },

  // Niveau 3 — phrases longues avec ponctuation variée
  { id:'kp11', lvl:3, phrase:'Hier soir, j\'ai lu un livre très intéressant sur les animaux.', emoji:'📚', theme:'Lecture' },
  { id:'kp12', lvl:3, phrase:'Est-ce que tu as déjà vu un arc-en-ciel après la pluie ?', emoji:'🌈', theme:'Nature' },
  { id:'kp13', lvl:3, phrase:'Le jardinier patient arrose ses roses rouges chaque matin.', emoji:'🌹', theme:'Nature' },
  { id:'kp14', lvl:3, phrase:'Demain nous irons au marché acheter des fruits et des légumes.', emoji:'🛒', theme:'Vie quotidienne' },
  { id:'kp15', lvl:3, phrase:'La curiosité est la qualité la plus importante pour apprendre.', emoji:'🔍', theme:'École' },
];

// =====================================================================
// BADGES MARIO — Exploits débloquables
// =====================================================================
const BADGES_DEF = [
  // ── Progression ──
  { id:'badge_first',    label:'Premier pas',       emoji:'🍄',  desc:'Tu as fait ta première activité !',                          check: s => s.sessions >= 1 },
  { id:'badge_streak3',  label:'3 jours de suite',  emoji:'🔥',  desc:'3 jours consécutifs sur AIM !',                              check: s => s.streak >= 3 },
  { id:'badge_streak7',  label:'Semaine parfaite',  emoji:'⭐',  desc:'7 jours de suite — tu es incroyable !',                      check: s => s.streak >= 7 },
  { id:'badge_streak14', label:'2 semaines !',      emoji:'🏆',  desc:'14 jours de suite — une vraie championne !',                 check: s => s.streak >= 14 },

  // ── Étoiles ──
  { id:'badge_50stars',  label:'50 étoiles',        emoji:'🌟',  desc:'Tu as gagné 50 étoiles !',                                   check: s => s.stars >= 50 },
  { id:'badge_100stars', label:'Centenaire',        emoji:'💫',  desc:'100 étoiles — Mario est fier de toi !',                      check: s => s.stars >= 100 },
  { id:'badge_200stars', label:'Légende',           emoji:'👑',  desc:'200 étoiles — tu es une vraie légende !',                    check: s => s.stars >= 200 },

  // ── Modules ──
  { id:'badge_rev10',    label:'Réviseure',         emoji:'🔁',  desc:'Tu as utilisé le mode révision !',                          check: s => (s.moduleStats['__revision__']?.total||0) >= 1 },
  { id:'badge_memory',   label:'Mémoire d\'or',     emoji:'🧠',  desc:'Tu as réussi le jeu de mémoire difficile !',                 check: s => (s.moduleStats['memory']?.correct||0) >= 8 },
  { id:'badge_lecture4', label:'Grande lectrice',   emoji:'📖',  desc:'Tu as débloqué les histoires de niveau 4 !',                 check: s => (s.unlockedLevels?.['lecture']||1) >= 4 },
  { id:'badge_lecture5', label:'Lectrice experte',  emoji:'📚',  desc:'Tu as débloqué les histoires de niveau 5 — bravo !',        check: s => (s.unlockedLevels?.['lecture']||1) >= 5 },
  { id:'badge_tables',   label:'Maîtresse des tables', emoji:'✖️', desc:'Tu as fait tous les quiz de tables de multiplication !', check: s => (s.moduleStats?.['math_calc']?.total||0) >= 20 },
  { id:'badge_flash20',  label:'Flash mémo',        emoji:'⚡',  desc:'Tu as appris 20 flashcards !',                              check: s => (s.moduleStats?.['flashcards']?.total||0) >= 20 },
  { id:'badge_puzzle',   label:'Puzzle master',     emoji:'🧩',  desc:'Tu as réussi 5 puzzles de phrases !',                       check: s => (s.moduleStats?.['puzzle']?.correct||0) >= 5 },
  { id:'badge_karaoke',  label:'Star du karaoké',   emoji:'🎤',  desc:'Tu as chanté 10 phrases en karaoké !',                      check: s => (s.moduleStats?.['karaoke']?.total||0) >= 10 },
  { id:'badge_defi7',    label:'Défi de la semaine',emoji:'🎯',  desc:'Tu as fait le défi du jour 7 fois !',                       check: s => (s.defiCount||0) >= 7 },

  // ── Mario spéciaux ──
  { id:'badge_peach',    label:'Couronne de Peach', emoji:'👸',  desc:'Tu as terminé toutes les dictées !',                        check: s => (s.moduleStats?.['dictee']?.total||0) >= 6 },
  { id:'badge_yoshi',    label:'Yoshi champion',    emoji:'🦎',  desc:'Tu as fait le jeu de mémoire 5 fois !',                     check: s => (s.moduleStats?.['memory']?.total||0) >= 5 },
  { id:'badge_star_arc', label:'Étoile Arc-en-ciel',emoji:'🌈',  desc:'Tu as terminé un module à 100% !',                          check: s => Object.values(s.moduleStats||{}).some(m => m.total >= 5 && m.correct === m.total) },
  { id:'badge_mushroom', label:'Super Champignon',  emoji:'🍄',  desc:'Tu as débloqué le niveau 2 dans 3 modules !',               check: s => Object.values(s.unlockedLevels||{}).filter(l => l >= 2).length >= 3 },
  { id:'badge_luigi',    label:'Partenaire Luigi',  emoji:'💚',  desc:'Tu as terminé la conjugaison orale !',                      check: s => (s.moduleStats?.['conj_oral']?.total||0) >= 6 },
];

// =====================================================================
// DÉFI DU JOUR — 5 questions adaptées au niveau débloqué par module
// =====================================================================
function buildDailyChallenge() {
  const todayKey = new Date().toISOString().split('T')[0];
  const seedNum  = todayKey.split('-').reduce((a, b) => a + parseInt(b), 0);

  // Collect only questions within the unlocked level for each module
  const allQ = [];
  Object.values(modules).forEach(mod => {
    const maxLvl = (typeof getUnlockedLevel === 'function')
      ? (getUnlockedLevel(mod.key) || 1) : 1;
    mod.questions
      .filter(q => (q.lvl || 1) <= maxLvl)
      .forEach(q => allQ.push({ ...q, moduleKey: mod.key }));
  });

  if (allQ.length === 0) return [];

  // Deterministic shuffle seeded by date — different each day, reproducible
  const seeded = allQ.map((q, i) => {
    const h = Math.sin(seedNum * 127 + i * 31) * 43758.5453;
    return { q, r: h - Math.floor(h) };
  }).sort((a, b) => a.r - b.r).map(x => x.q);

  // Pick 5 from different modules if possible
  const picked = [];
  const usedMods = new Set();
  // First pass: one per module
  for (const q of seeded) {
    if (picked.length >= 5) break;
    if (!usedMods.has(q.moduleKey)) { picked.push(q); usedMods.add(q.moduleKey); }
  }
  // Second pass: fill remaining slots with any unused question
  const usedIds = new Set(picked.map(q => q.id));
  for (const q of seeded) {
    if (picked.length >= 5) break;
    if (!usedIds.has(q.id)) { picked.push(q); usedIds.add(q.id); }
  }
  return picked.slice(0, 5);
}
