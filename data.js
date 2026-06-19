// =====================================================================
// DATA — Questions par NIVEAU (1=Débutant, 2=Intermédiaire, 3=Avancé)
// 10 questions minimum par module, réparties sur 3 niveaux
// Contenu aligné CE1 avancé : tables, adjectifs, synonymes/antonymes,
// conjugaison, fractions simples
// =====================================================================

const modules = {

  // ─── VOCABULAIRE ──────────────────────────────────────────────────
  fr_vocab: {
    title: '🔤 Les mots', key: 'fr_vocab',
    questions: [
      // Niveau 1 — synonymes & antonymes simples
      { id:'fv1',  lvl:1, text:'Quel mot veut dire la même chose que "content" ?', image:'😊', answers:['heureux','triste','fatigué','fâché'], correct:0, explain:'"Heureux" est un synonyme de "content" !' },
      { id:'fv2',  lvl:1, text:'Quel mot veut dire le contraire de "grand" ?', image:'📏', answers:['petit','lourd','vite','beau'], correct:0, explain:'Grand ↔ Petit — ce sont des antonymes !' },
      { id:'fv3',  lvl:1, text:'Quel mot veut dire la même chose que "rapide" ?', image:'🏃', answers:['vite','lent','doux','calme'], correct:0, explain:'"Vite" et "rapide" sont des synonymes !' },
      { id:'fv4',  lvl:1, text:'Quel mot veut dire le contraire de "propre" ?', image:'🧹', answers:['sale','joli','neuf','doux'], correct:0, explain:'Propre ↔ Sale — ce sont des antonymes !' },
      // Niveau 2 — familles de mots, termes génériques
      { id:'fv5',  lvl:2, text:'Quel mot appartient à la famille de "terre" ?', image:'🌍', answers:['terrasse','chemin','ciel','mer'], correct:0, explain:'"Terrasse" vient de "terre" — même famille !' },
      { id:'fv6',  lvl:2, text:'Quel terme regroupe "rose, tulipe, marguerite" ?', image:'🌸', answers:['des fleurs','des arbres','des fruits','des légumes'], correct:0, explain:'Rose, tulipe et marguerite sont toutes des fleurs !' },
      { id:'fv7',  lvl:2, text:'Quel mot est un synonyme de "courageux" ?', image:'🦁', answers:['brave','peureux','timide','calme'], correct:0, explain:'"Brave" est un synonyme de "courageux" !' },
      { id:'fv8',  lvl:2, text:'Quel mot est un antonyme de "allumer" ?', image:'💡', answers:['éteindre','éclairer','chauffer','ouvrir'], correct:0, explain:'Allumer ↔ Éteindre — ce sont des antonymes !' },
      // Niveau 3 — sens figuré, nuances
      { id:'fv9',  lvl:3, text:'Quel mot est un synonyme de "minuscule" ?', image:'🔬', answers:['tout petit','très grand','assez gros','très long'], correct:0, explain:'"Tout petit" et "minuscule" veulent dire la même chose !' },
      { id:'fv10', lvl:3, text:'Quel mot est un antonyme de "généreux" ?', image:'🎁', answers:['avare','gentil','serviable','souriant'], correct:0, explain:'Généreux ↔ Avare — un avare ne partage pas !' },
      { id:'fv11', lvl:3, text:'Quel mot appartient à la famille de "chant" ?', image:'🎵', answers:['chanter','danser','jouer','courir'], correct:0, explain:'"Chanter" appartient à la famille de "chant" !' },
      { id:'fv12', lvl:3, text:'Quel mot est un synonyme de "demeurer" ?', image:'🏠', answers:['habiter','partir','voyager','courir'], correct:0, explain:'"Habiter" et "demeurer" veulent dire vivre quelque part !' },
    ]
  },

  // ─── PHRASES & GRAMMAIRE ──────────────────────────────────────────
  fr_phrases: {
    title: '✍️ Les phrases', key: 'fr_phrases',
    questions: [
      // Niveau 1 — reconnaissance de base
      { id:'fp1', lvl:1, text:'Quel est le verbe dans : "Le chat dort sur le canapé." ?', image:'🐱', answers:['dort','chat','canapé','Le'], correct:0, explain:'"Dort" est le verbe — c\'est l\'action du chat !' },
      { id:'fp2', lvl:1, text:'Quel est le sujet dans : "La fille chante." ?', image:'🎤', answers:['La fille','chante','La','fille'], correct:0, explain:'"La fille" est le sujet — c\'est elle qui chante !' },
      { id:'fp3', lvl:1, text:'Quelle phrase est à la forme négative ?', image:'🚫', answers:['Je ne mange pas.','Je mange bien.','Elle court vite.','Il chante fort.'], correct:0, explain:'"Je ne mange pas" utilise ne…pas → forme négative !' },
      // Niveau 2 — adjectifs, accord
      { id:'fp4', lvl:2, text:'Quel mot est un adjectif dans : "Le petit chat joue." ?', image:'🐱', answers:['petit','chat','joue','Le'], correct:0, explain:'"Petit" est un adjectif — il décrit le chat !' },
      { id:'fp5', lvl:2, text:'Comment accorde-t-on l\'adjectif avec "les filles" ?', image:'👧', answers:['contentes','content','contentas','contenter'], correct:0, explain:'"Filles" est féminin pluriel → contentes (fe + s) !' },
      { id:'fp6', lvl:2, text:'Quel adjectif décrit la couleur dans : "Le ballon rouge roule." ?', image:'🔴', answers:['rouge','ballon','roule','Le'], correct:0, explain:'"Rouge" est l\'adjectif de couleur qui décrit le ballon !' },
      { id:'fp7', lvl:2, text:'Complète : "Les lions sont ___." ', image:'🦁', answers:['forts','fort','forte','fortes'], correct:0, explain:'"Lions" est masculin pluriel → forts (sans -e, avec -s) !' },
      // Niveau 3 — conjugaison, types de phrases
      { id:'fp8', lvl:3, text:'Quel est le verbe conjugué dans : "Nous mangeons des pommes." ?', image:'🍎', answers:['mangeons','Nous','pommes','des'], correct:0, explain:'"Mangeons" est le verbe conjugué à la 1ère personne du pluriel !' },
      { id:'fp9', lvl:3, text:'Transforme en phrase interrogative : "Elle aime le chocolat."', image:'❓', answers:['Est-ce qu\'elle aime le chocolat ?','Elle aime le chocolat !','Elle n\'aime pas le chocolat.','Le chocolat aime elle.'], correct:0, explain:'Pour poser une question, on utilise "Est-ce que…" !' },
      { id:'fp10', lvl:3, text:'Quel type de phrase est : "Ferme la porte !" ?', image:'🚪', answers:['Impérative','Interrogative','Déclarative','Exclamative'], correct:0, explain:'Une phrase qui donne un ordre est une phrase impérative !' },
      { id:'fp11', lvl:3, text:'Quel adjectif s\'accorde correctement avec "une maison" ?', image:'🏠', answers:['ancienne','ancien','anciens','anciennes'], correct:0, explain:'"Maison" est féminin singulier → ancienne (avec -ne) !' },
      { id:'fp12', lvl:3, text:'Identifie le complément dans : "Tom mange une pomme." ?', image:'🍏', answers:['une pomme','Tom','mange','une'], correct:0, explain:'"Une pomme" est le complément d\'objet direct — c\'est ce que Tom mange !' },
    ]
  },

  // ─── ORTHOGRAPHE ──────────────────────────────────────────────────
  fr_ortho: {
    title: '🔡 Orthographe', key: 'fr_ortho',
    questions: [
      { id:'fo1', lvl:1, text:'Comment écrit-on le pluriel de "ballon" ?', image:'🎈', answers:['ballons','balloon','ballon','ballones'], correct:0, explain:'Au pluriel on ajoute -s → des ballons.' },
      { id:'fo2', lvl:1, text:'Choisis la bonne orthographe :', image:'🌸', answers:['fleur','fleure','flur','fler'], correct:0, explain:'On écrit "fleur" — f, l, e, u, r.' },
      { id:'fo3', lvl:1, text:'Quel mot s\'écrit avec un "ph" ?', image:'📸', answers:['photo','fato','fouto','phato'], correct:0, explain:'"Photo" s\'écrit avec "ph" qui fait le son [f] !' },
      { id:'fo4', lvl:2, text:'Comment s\'écrit le son [o] dans "château" ?', image:'🏰', answers:['eau','o','au','os'], correct:0, explain:'Dans "châ-teau", le son [o] s\'écrit "eau".' },
      { id:'fo5', lvl:2, text:'Comment écrit-on le pluriel de "cheval" ?', image:'🐴', answers:['chevaux','chevals','chevales','chevau'], correct:0, explain:'"Cheval" fait "chevaux" — cas particulier !' },
      { id:'fo6', lvl:2, text:'Quel mot est bien écrit ?', image:'🌙', answers:['nuit','nwit','nouit','nuie'], correct:0, explain:'"Nuit" s\'écrit n-u-i-t.' },
      { id:'fo7', lvl:2, text:'Comment écrit-on le féminin de "beau" ?', image:'🌺', answers:['belle','beau','beaux','belles'], correct:0, explain:'Beau → Belle au féminin singulier !' },
      { id:'fo8', lvl:3, text:'Comment écrit-on le pluriel de "œil" ?', image:'👀', answers:['yeux','œils','œilles','yeus'], correct:0, explain:'"Œil" fait "yeux" au pluriel — cas très particulier !' },
      { id:'fo9', lvl:3, text:'Quel mot prend un accent circonflexe ?', image:'⌃', answers:['forêt','foret','fouret','forait'], correct:0, explain:'"Forêt" s\'écrit avec un accent circonflexe sur le "e" !' },
      { id:'fo10', lvl:3, text:'Comment écrit-on "j\'ai" au passé composé de "avoir" ?', image:'📝', answers:['j\'ai','j\'ais','j\'ait','j\'aie'], correct:0, explain:'"J\'ai" — le participe passé d\'avoir reste invariable ici !' },
      { id:'fo11', lvl:3, text:'Quel mot s\'écrit avec "-tion" ?', image:'💬', answers:['attention','atention','atantion','attantion'], correct:0, explain:'"Attention" s\'écrit a-t-t-e-n-t-i-o-n !' },
      { id:'fo12', lvl:3, text:'Comment écrit-on le féminin de "acteur" ?', image:'🎭', answers:['actrice','acteuse','acteure','acteusse'], correct:0, explain:'Acteur → Actrice au féminin — le suffixe change !' },
    ]
  },

  // ─── CONJUGAISON ──────────────────────────────────────────────────
  fr_conj: {
    title: '🔀 Conjugaison', key: 'fr_conj',
    questions: [
      // Niveau 1 — présent verbes en -er
      { id:'fc1', lvl:1, text:'Conjugue "chanter" : Je ___ une chanson.', image:'🎵', answers:['chante','chantes','chantons','chantez'], correct:0, explain:'Je chante — 1ère personne du singulier en -e !' },
      { id:'fc2', lvl:1, text:'Conjugue "manger" : Nous ___ une pizza.', image:'🍕', answers:['mangeons','mangons','mangez','mangent'], correct:0, explain:'Nous mangeons — attention au "e" devant -ons !' },
      { id:'fc3', lvl:1, text:'Conjugue "jouer" : Ils ___ au foot.', image:'⚽', answers:['jouent','joue','jouons','jouez'], correct:0, explain:'Ils jouent — 3ème personne du pluriel en -ent !' },
      { id:'fc4', lvl:1, text:'Conjugue "sauter" : Tu ___ très haut.', image:'🦘', answers:['sautes','saute','sautons','sautez'], correct:0, explain:'Tu sautes — 2ème personne du singulier en -es !' },
      // Niveau 2 — présent être/avoir + verbes irréguliers
      { id:'fc5', lvl:2, text:'Conjugue "être" : Elle ___ contente.', image:'😊', answers:['est','es','sont','êtes'], correct:0, explain:'Elle est — 3ème personne du singulier de "être" !' },
      { id:'fc6', lvl:2, text:'Conjugue "avoir" : Nous ___ un chien.', image:'🐶', answers:['avons','avez','ont','aves'], correct:0, explain:'Nous avons — 1ère personne du pluriel de "avoir" !' },
      { id:'fc7', lvl:2, text:'Conjugue "aller" : Je ___ à l\'école.', image:'🏫', answers:['vais','vas','vont','allez'], correct:0, explain:'Je vais — "aller" est irrégulier au présent !' },
      { id:'fc8', lvl:2, text:'Conjugue "faire" : Vous ___ du sport.', image:'🏊', answers:['faites','faisons','font','faisez'], correct:0, explain:'Vous faites — attention, "faites" et non "faisez" !' },
      // Niveau 3 — passé composé, futur simple
      { id:'fc9',  lvl:3, text:'Conjugue au passé composé : Elle ___ une chanson.', image:'🎤', answers:['a chanté','est chantée','avait chanté','chantera'], correct:0, explain:'Passé composé = avoir/être + participe passé → Elle a chanté !' },
      { id:'fc10', lvl:3, text:'Conjugue au futur : Demain, je ___ au parc.', image:'🌳', answers:['irai','vais','allai','suis allé'], correct:0, explain:'Futur simple de "aller" → j\'irai !' },
      { id:'fc11', lvl:3, text:'Conjugue au passé composé : Nous ___ nos devoirs.', image:'📚', answers:['avons fait','faisions','ferons','avons faisé'], correct:0, explain:'Passé composé de "faire" → nous avons fait !' },
      { id:'fc12', lvl:3, text:'Conjugue au futur : Il ___ une belle maison.', image:'🏠', answers:['aura','a','avait','aurait'], correct:0, explain:'Futur d\'avoir à la 3ème personne → il aura !' },
    ]
  },

  // ─── CALCUL ───────────────────────────────────────────────────────
  math_calc: {
    title: '🔢 Calcul', key: 'math_calc',
    questions: [
      // Niveau 1 — additions et soustractions simples
      { id:'mc1', lvl:1, text:'3 + 2 = ?', image:'🍎', answers:['5','6','4','7'], correct:0, explain:'3 + 2 = 5.' },
      { id:'mc2', lvl:1, text:'10 - 4 = ?', image:'✨', answers:['6','7','5','4'], correct:0, explain:'10 - 4 = 6.' },
      { id:'mc3', lvl:1, text:'7 + 8 = ?', image:'🌟', answers:['15','14','16','13'], correct:0, explain:'7 + 8 = 15. On passe par 10 : 7+3=10, +5 = 15 !' },
      // Niveau 2 — tables de multiplication
      { id:'mc4', lvl:2, text:'2 × 5 = ?', image:'✌️', answers:['10','12','8','15'], correct:0, explain:'2 × 5 = 10. Table de 2 !' },
      { id:'mc5', lvl:2, text:'3 × 4 = ?', image:'🔢', answers:['12','9','15','8'], correct:0, explain:'3 × 4 = 12. Table de 3 !' },
      { id:'mc6', lvl:2, text:'5 × 6 = ?', image:'🖐️', answers:['30','25','35','20'], correct:0, explain:'5 × 6 = 30. Table de 5 !' },
      { id:'mc7', lvl:2, text:'4 × 7 = ?', image:'🎯', answers:['28','24','32','21'], correct:0, explain:'4 × 7 = 28. Table de 4 !' },
      { id:'mc8', lvl:2, text:'6 × 3 = ?', image:'🎲', answers:['18','15','21','12'], correct:0, explain:'6 × 3 = 18. Table de 6 !' },
      // Niveau 3 — multiplications + opérations posées
      { id:'mc9',  lvl:3, text:'7 × 8 = ?', image:'🚀', answers:['56','54','63','48'], correct:0, explain:'7 × 8 = 56. Table de 7 !' },
      { id:'mc10', lvl:3, text:'9 × 6 = ?', image:'🌙', answers:['54','48','63','45'], correct:0, explain:'9 × 6 = 54. Table de 9 !' },
      { id:'mc11', lvl:3, text:'35 + 47 = ?', image:'➕', answers:['82','72','81','92'], correct:0, explain:'35 + 47 = 82. On ajoute dizaines puis unités !' },
      { id:'mc12', lvl:3, text:'80 - 36 = ?', image:'➖', answers:['44','46','34','54'], correct:0, explain:'80 - 36 = 44. Méthode : 36 + 4 = 40, + 40 = 80 !' },
    ]
  },

  // ─── PROBLÈMES ────────────────────────────────────────────────────
  math_prob: {
    title: '🧩 Problèmes', key: 'math_prob',
    questions: [
      { id:'mp1', lvl:1, text:'Léa a 4 bonbons. Elle en reçoit 3. Combien en a-t-elle ?', image:'🍬', answers:['7','8','6','4'], correct:0, explain:'4 + 3 = 7 bonbons !' },
      { id:'mp2', lvl:1, text:'Il y a 10 poussins. 4 s\'envolent. Combien en reste-t-il ?', image:'🐣', answers:['6','7','5','4'], correct:0, explain:'10 - 4 = 6 poussins restent.' },
      { id:'mp3', lvl:1, text:'Un livre coûte 5€. Tom a 8€. Combien lui reste-t-il ?', image:'📚', answers:['3€','2€','4€','13€'], correct:0, explain:'8 - 5 = 3 euros restants !' },
      { id:'mp4', lvl:2, text:'Il y a 3 boîtes de 6 crayons. Combien de crayons en tout ?', image:'🖍️', answers:['18','15','12','21'], correct:0, explain:'3 × 6 = 18. On utilise la table de 3 !' },
      { id:'mp5', lvl:2, text:'Emma a 4 sachets de 5 billes. Combien de billes en tout ?', image:'🔮', answers:['20','15','25','10'], correct:0, explain:'4 × 5 = 20 billes. Table de 4 !' },
      { id:'mp6', lvl:2, text:'Un gâteau est partagé en 4 parts égales. Tom prend 1 part. Quelle fraction a-t-il ?', image:'🎂', answers:['1/4','1/2','3/4','1/3'], correct:0, explain:'1 part sur 4 → c\'est 1/4, un quart du gâteau !' },
      { id:'mp7', lvl:2, text:'Une pizza est coupée en 2 parts égales. Lou mange 1 part. Quelle fraction reste-t-il ?', image:'🍕', answers:['1/2','1/4','2/3','1/3'], correct:0, explain:'Il restait 2 parts, Lou en mange 1 → il reste 1/2 !' },
      { id:'mp8', lvl:3, text:'Emma a 15€. Elle achète un jeu à 9€. Combien lui reste-t-il ?', image:'🎮', answers:['6€','5€','7€','4€'], correct:0, explain:'15 - 9 = 6 euros !' },
      { id:'mp9', lvl:3, text:'Un ruban de 24 cm est coupé en 3 parties égales. Chaque partie fait…', image:'📏', answers:['8 cm','6 cm','12 cm','4 cm'], correct:0, explain:'24 ÷ 3 = 8 cm. Division par 3 !' },
      { id:'mp10', lvl:3, text:'Un chocolat a 12 carreaux. Lina mange 1/3 du chocolat. Combien de carreaux mange-t-elle ?', image:'🍫', answers:['4','3','6','2'], correct:0, explain:'1/3 de 12 = 12 ÷ 3 = 4 carreaux !' },
      { id:'mp11', lvl:3, text:'Un train part à 8h et arrive à 10h30. Combien dure le trajet ?', image:'🚂', answers:['2h30','2h','3h','1h30'], correct:0, explain:'De 8h à 10h30 = 2 heures et 30 minutes !' },
      { id:'mp12', lvl:3, text:'Une boîte contient 36 bonbons. On les partage entre 4 enfants. Combien chacun en reçoit ?', image:'🍬', answers:['9','8','7','12'], correct:0, explain:'36 ÷ 4 = 9 bonbons chacun. Table de 4 !' },
    ]
  },

  // ─── FRACTIONS ────────────────────────────────────────────────────
  math_frac: {
    title: '🍕 Fractions', key: 'math_frac',
    questions: [
      { id:'mf1', lvl:1, text:'Une pizza coupée en 2 parts égales — chaque part c\'est…', image:'🍕', answers:['1/2','1/4','1/3','2/2'], correct:0, explain:'1 part sur 2 → c\'est 1/2, la moitié !' },
      { id:'mf2', lvl:1, text:'Un gâteau coupé en 4 parts égales — chaque part c\'est…', image:'🎂', answers:['1/4','1/2','2/4','1/3'], correct:0, explain:'1 part sur 4 → c\'est 1/4, un quart !' },
      { id:'mf3', lvl:1, text:'Une tablette de chocolat coupée en 3 parts — chaque part c\'est…', image:'🍫', answers:['1/3','1/2','1/4','3/1'], correct:0, explain:'1 part sur 3 → c\'est 1/3, un tiers !' },
      { id:'mf4', lvl:2, text:'Un ruban de 12 cm. On coupe la moitié. Quelle longueur reste-t-il ?', image:'📏', answers:['6 cm','4 cm','3 cm','8 cm'], correct:0, explain:'La moitié de 12 = 12 ÷ 2 = 6 cm !' },
      { id:'mf5', lvl:2, text:'Un paquet de 8 bonbons. Tu prends 1/4. Combien de bonbons prends-tu ?', image:'🍬', answers:['2','4','8','1'], correct:0, explain:'1/4 de 8 = 8 ÷ 4 = 2 bonbons !' },
      { id:'mf6', lvl:2, text:'Quelle fraction est la plus grande ?', image:'📊', answers:['1/2','1/4','1/3','1/8'], correct:0, explain:'Plus le bas de la fraction est petit, plus la part est grande. 1/2 est la plus grande !' },
      { id:'mf7', lvl:2, text:'Une orange est coupée en 4 quartiers. Tu en manges 2. Quelle fraction as-tu mangé ?', image:'🍊', answers:['2/4','1/4','3/4','4/4'], correct:0, explain:'Tu as mangé 2 parts sur 4 → 2/4 (c\'est pareil que 1/2) !' },
      { id:'mf8', lvl:3, text:'1/3 de 12 bonbons = ?', image:'🍬', answers:['4','3','6','2'], correct:0, explain:'1/3 de 12 = 12 ÷ 3 = 4 bonbons !' },
      { id:'mf9', lvl:3, text:'Sur 20 élèves, 1/4 ont un chat. Combien d\'élèves ont un chat ?', image:'🐱', answers:['5','4','10','2'], correct:0, explain:'1/4 de 20 = 20 ÷ 4 = 5 élèves !' },
      { id:'mf10', lvl:3, text:'Quelle fraction représente 3 parts sur 4 ?', image:'🎯', answers:['3/4','4/3','1/4','2/4'], correct:0, explain:'3 parts sur 4 → on écrit 3/4, trois quarts !' },
      { id:'mf11', lvl:3, text:'Lina mange 1/2 d\'une tarte. Il reste combien de la tarte ?', image:'🥧', answers:['1/2','1/4','0','2/4'], correct:0, explain:'Si elle mange 1/2, il reste 1/2 de la tarte !' },
      { id:'mf12', lvl:3, text:'Une journée a 24 heures. 1/3 de la journée c\'est combien d\'heures ?', image:'⏰', answers:['8h','12h','6h','4h'], correct:0, explain:'1/3 de 24 = 24 ÷ 3 = 8 heures !' },
    ]
  },

  // ─── NOMBRES ──────────────────────────────────────────────────────
  math_num: {
    title: '💯 Les nombres', key: 'math_num',
    questions: [
      { id:'mn1', lvl:1, text:'Quel nombre vient après 19 ?', image:'🔢', answers:['20','18','21','10'], correct:0, explain:'Après 19 vient 20 — on passe à la dizaine !' },
      { id:'mn2', lvl:1, text:'Quel est le plus grand nombre ?', image:'📊', answers:['45','39','43','41'], correct:0, explain:'45 est le plus grand — il a le plus de dizaines !' },
      { id:'mn3', lvl:2, text:'Dans 83, combien y a-t-il de dizaines ?', image:'🔟', answers:['8','3','83','0'], correct:0, explain:'83 = 8 dizaines et 3 unités.' },
      { id:'mn4', lvl:2, text:'Comment écrit-on "soixante-dix" ?', image:'✨', answers:['70','60','17','76'], correct:0, explain:'Soixante-dix = 70.' },
      { id:'mn5', lvl:2, text:'Quel nombre est entre 50 et 60 ?', image:'🎯', answers:['55','49','61','70'], correct:0, explain:'55 est bien entre 50 et 60 !' },
      { id:'mn6', lvl:2, text:'3 dizaines et 7 unités = ?', image:'🔢', answers:['37','73','307','370'], correct:0, explain:'3 dizaines = 30, + 7 unités = 37 !' },
      { id:'mn7', lvl:2, text:'Comment écrit-on "quatre-vingt-dix" ?', image:'🔢', answers:['90','80','89','79'], correct:0, explain:'Quatre-vingts-dix = 90 !' },
      { id:'mn8', lvl:3, text:'Quel nombre est le plus proche de 100 ?', image:'🎯', answers:['97','88','79','65'], correct:0, explain:'97 est le plus proche de 100 — il ne lui manque que 3 !' },
      { id:'mn9', lvl:3, text:'Combien de centaines dans 347 ?', image:'💯', answers:['3','4','7','34'], correct:0, explain:'347 = 3 centaines, 4 dizaines, 7 unités !' },
      { id:'mn10', lvl:3, text:'Range dans l\'ordre croissant : 72, 27, 52, 25', image:'📈', answers:['25, 27, 52, 72','72, 52, 27, 25','27, 25, 52, 72','52, 72, 25, 27'], correct:0, explain:'Croissant = du plus petit au plus grand : 25, 27, 52, 72 !' },
      { id:'mn11', lvl:3, text:'Quel est le double de 35 ?', image:'✌️', answers:['70','60','75','65'], correct:0, explain:'Le double de 35 = 35 × 2 = 70 !' },
      { id:'mn12', lvl:3, text:'Quel est la moitié de 84 ?', image:'➗', answers:['42','44','40','48'], correct:0, explain:'La moitié de 84 = 84 ÷ 2 = 42 !' },
    ]
  },

};

// ===================== SEUILS DE NIVEAUX =====================
// Seuils de réussite pour débloquer chaque niveau (% de bonnes réponses)
const LEVEL_THRESHOLDS = { 1: 0, 2: 50, 3: 65, 4: 75, 5: 80 };

// ===================== LECTURE =====================
const stories = [
  {
    id:'st1', lvl:1,
    title:'Le petit chat perdu',
    image:'🐱',
    text:'Milo est un petit chat orange. Un jour, il sort dans le jardin et se perd dans la forêt. Il a peur. Il miaule très fort. Sa maîtresse Emma l\'entend et court vers lui. Elle le prend dans ses bras. Milo est sauvé !',
    questions:[
      { id:'sq1', text:'Comment s\'appelle le chat ?', answers:['Milo','Emma','Léa','Tom'], correct:0, explain:'Dans l\'histoire, le chat s\'appelle Milo !' },
      { id:'sq2', text:'De quelle couleur est-il ?', answers:['Orange','Blanc','Noir','Gris'], correct:0, explain:'Milo est un petit chat orange.' },
      { id:'sq3', text:'Qui sauve Milo ?', answers:['Emma','Sa maman','Un chien','Un oiseau'], correct:0, explain:'C\'est Emma, sa maîtresse, qui court le sauver !' },
    ]
  },
  {
    id:'st2', lvl:2,
    title:'La journée de Lou',
    image:'🌞',
    text:'Ce matin, Lou se lève tôt. Elle mange du pain avec du beurre. Puis elle prend son sac et part à l\'école. En chemin, elle voit un arc-en-ciel dans le ciel. À l\'école, elle apprend à lire de nouveaux mots. Le soir, elle est fière !',
    questions:[
      { id:'sq4', text:'Que mange Lou le matin ?', answers:['Du pain avec du beurre','Des céréales','Un yaourt','Des fruits'], correct:0, explain:'Lou mange du pain avec du beurre !' },
      { id:'sq5', text:'Qu\'est-ce que Lou voit en chemin ?', answers:['Un arc-en-ciel','Un chien','Une voiture','Un oiseau'], correct:0, explain:'Elle voit un arc-en-ciel !' },
      { id:'sq6', text:'Comment Lou se sent-elle le soir ?', answers:['Fière','Triste','Fatiguée','En colère'], correct:0, explain:'Le soir, Lou est fière de ce qu\'elle a appris !' },
    ]
  },
  {
    id:'st3', lvl:3,
    title:'La surprise de Tom',
    image:'🎂',
    text:'Tom a 7 ans aujourd\'hui. Il descend l\'escalier et voit des ballons partout ! Ses parents lui ont préparé un gâteau au chocolat. Ses amis Léa et Nino arrivent avec des cadeaux. Tom est très heureux. C\'est le meilleur jour de sa vie !',
    questions:[
      { id:'sq7', text:'Quel âge a Tom ?', answers:['7 ans','6 ans','8 ans','5 ans'], correct:0, explain:'Tom a 7 ans aujourd\'hui !' },
      { id:'sq8', text:'Quel gâteau ont préparé ses parents ?', answers:['Au chocolat','À la fraise','À la vanille','Au citron'], correct:0, explain:'Un gâteau au chocolat !' },
      { id:'sq9', text:'Comment Tom se sent-il ?', answers:['Très heureux','Triste','Fatigué','Surpris'], correct:0, explain:'Tom est très heureux — c\'est le meilleur jour de sa vie !' },
    ]
  }
  ,
  // ─── NIVEAU 4 ─── Textes plus longs, inférence simple ───────────────────
  {
    id: 'st4', lvl: 4,
    title: 'Le renard et le corbeau',
    image: '🦊',
    text: `Un corbeau avait trouvé un morceau de fromage et s'était posé sur une branche pour le manger. Un renard passa par là et vit le fromage. "Comme tu es beau !" dit-il au corbeau. "Ta voix doit être aussi belle que ton plumage. Chante-moi quelque chose !" Le corbeau, flatté, ouvrit le bec pour chanter. Le fromage tomba aussitôt. Le renard l'attrapa et s'en alla en riant. "On n'est pas flatté impunément !" dit-il.`,
    questions: [
      {
        id: 'sq10',
        text: `Pourquoi le renard complimente-t-il le corbeau ?`,
        answers: [
          `Pour lui faire ouvrir le bec et prendre le fromage`,
          `Parce qu'il aime vraiment la voix du corbeau`,
          `Parce qu'il veut devenir ami avec lui`,
          `Parce que le corbeau a un beau plumage`
        ],
        correct: 0,
        explain: `C'est une ruse ! Le renard veut que le corbeau ouvre le bec pour chanter — ce qui fera tomber le fromage. Il ne pense pas vraiment ce qu'il dit.`
      },
      {
        id: 'sq11',
        text: `Que ressent le corbeau quand le renard le complimente ?`,
        answers: [
          `Il est flatté et fier de lui`,
          `Il est méfiant et se tait`,
          `Il est triste et part`,
          `Il est en colère contre le renard`
        ],
        correct: 0,
        explain: `Le corbeau est flatté — les compliments lui font plaisir, alors il oublie d'être prudent. C'est ce que le renard voulait !`
      },
      {
        id: 'sq12',
        text: `Quelle leçon nous apprend cette histoire ?`,
        answers: [
          `Il ne faut pas se laisser flatter par les compliments`,
          `Il ne faut jamais manger dans un arbre`,
          `Les renards sont toujours méchants`,
          `Il faut apprendre à chanter`
        ],
        correct: 0,
        explain: `Cette fable nous apprend à nous méfier des flatteries : quelqu'un qui nous fait des compliments n'a pas toujours de bonnes intentions !`
      },
      {
        id: 'sq13',
        text: `Comment sait-on que le renard était intelligent ?`,
        answers: [
          `Il a inventé un plan pour obtenir le fromage sans se battre`,
          `Il courait très vite`,
          `Il avait trouvé le fromage le premier`,
          `Il était plus grand que le corbeau`
        ],
        correct: 0,
        explain: `Le renard n'a pas essayé de voler le fromage de force — il a utilisé sa ruse et des mots pour arriver à ses fins. C'est ce qui montre son intelligence !`
      }
    ]
  },
  {
    id: 'st5', lvl: 4,
    title: 'La vieille maison du bout de la rue',
    image: '🏚️',
    text: `Au bout de la rue des Lilas vivait une vieille maison aux volets fermés. Les enfants du quartier disaient qu'elle était hantée et n'osaient pas s'en approcher. Un jour, Camille remarqua de la lumière derrière un volet. Le lendemain, elle vit une dame âgée arroser des fleurs sur le pas de la porte. Camille s'approcha timidement. "Bonjour !" dit-elle. La dame sourit. Elle s'appelait Marguerite et vivait seule depuis dix ans. Elle proposa à Camille d'entrer voir ses centaines de livres. Ce jour-là, Camille comprit que les apparences peuvent tromper.`,
    questions: [
      {
        id: 'sq14',
        text: `Pourquoi les enfants avaient-ils peur de cette maison ?`,
        answers: [
          `Parce qu'elle semblait abandonnée et mystérieuse`,
          `Parce qu'un fantôme leur avait parlé`,
          `Parce que la dame les avait chassés`,
          `Parce qu'il y avait un chien méchant`
        ],
        correct: 0,
        explain: `Les volets fermés et l'aspect mystérieux de la maison faisaient peur aux enfants — mais ce n'était que des apparences ! En réalité une dame gentille y habitait.`
      },
      {
        id: 'sq15',
        text: `Qu'est-ce qui a poussé Camille à s'approcher de la maison ?`,
        answers: [
          `Elle a vu de la lumière puis une dame arroser des fleurs`,
          `Ses amis l'avaient poussée à le faire`,
          `Elle cherchait son chat perdu`,
          `Elle voulait prouver qu'elle était courageuse`
        ],
        correct: 0,
        explain: `Camille a été curieuse : elle a d'abord remarqué de la lumière, signe que quelqu'un vivait là. Puis en voyant une dame arroser des fleurs, elle a osé s'approcher.`
      },
      {
        id: 'sq16',
        text: `Comment était vraiment Marguerite ?`,
        answers: [
          `Une dame seule et gentille qui aimait les livres`,
          `Une sorcière dangereuse`,
          `Une dame riche et froide`,
          `Une enfant déguisée en vieille dame`
        ],
        correct: 0,
        explain: `Marguerite était simplement une dame âgée qui vivait seule depuis dix ans. Elle était accueillante et a proposé à Camille de voir ses livres — rien d'effrayant !`
      },
      {
        id: 'sq17',
        text: `Que veut dire "les apparences peuvent tromper" dans cette histoire ?`,
        answers: [
          `Quelque chose peut sembler effrayant alors qu'il ne l'est pas`,
          `Les maisons anciennes sont toujours belles à l'intérieur`,
          `Il ne faut pas parler aux inconnus`,
          `Les enfants ont toujours raison`
        ],
        correct: 0,
        explain: `La maison semblait abandonnée et effrayante — c'était son apparence. Mais en réalité, une dame gentille y vivait. L'apparence peut donc nous faire croire des choses fausses !`
      }
    ]
  },

  // ─── NIVEAU 5 ─── Textes longs, inférence complexe, implicite ─────────────
  {
    id: 'st6', lvl: 5,
    title: 'La décision de Noah',
    image: '🌧️',
    text: `Ce matin-là, Noah se réveilla avec la pluie qui tambourinait sur les vitres. Il avait attendu ce samedi toute la semaine : son équipe de foot jouait la grande finale. Mais en descendant, il vit sa maman dans le couloir, les yeux rouges. "Mamie est à l'hôpital," dit-elle d'une voix douce. Noah sentit son cœur se serrer. Il regarda ses crampons posés près de la porte, puis sa maman. Sans dire un mot, il alla chercher son manteau. Sa maman le serra fort dans ses bras. "Tu es sûr ?" dit-elle. Noah hocha la tête. Sur la route de l'hôpital, il ne regarda pas son téléphone. Il savait que ses coéquipiers lui enverraient des messages, peut-être même qu'ils seraient en colère. Mais pour l'instant, une seule chose comptait.`,
    questions: [
      {
        id: 'sq18',
        text: `Qu'a décidé Noah sans le dire à voix haute ?`,
        answers: [
          `D'aller voir sa mamie à l'hôpital plutôt que jouer le match`,
          `De ne plus jouer au foot`,
          `D'appeler ses coéquipiers pour s'excuser`,
          `De rester à la maison dormir`
        ],
        correct: 0,
        explain: `Noah n'a pas dit ce qu'il faisait, mais ses actions le montrent : il a mis son manteau et est allé à l'hôpital. On comprend sa décision sans qu'il la prononce.`
      },
      {
        id: 'sq19',
        text: `Pourquoi la maman de Noah avait-elle les yeux rouges ?`,
        answers: [
          `Elle avait pleuré à cause de la maladie de mamie`,
          `Elle était fatiguée de travailler la nuit`,
          `Elle avait regardé un film triste`,
          `Elle avait mal aux yeux à cause de la pluie`
        ],
        correct: 0,
        explain: `Le texte ne le dit pas directement, mais on peut le deviner : sa maman venait d'apprendre que mamie était à l'hôpital. Les yeux rouges montrent qu'elle avait pleuré.`
      },
      {
        id: 'sq20',
        text: `Pourquoi Noah ne regarde-t-il pas son téléphone dans la voiture ?`,
        answers: [
          `Il préfère se concentrer sur sa famille plutôt que sur le foot`,
          `Son téléphone était en panne`,
          `Il avait peur des messages de ses amis`,
          `Sa maman lui avait interdit`
        ],
        correct: 0,
        explain: `Noah sait qu'il recevrait des messages de ses coéquipiers au sujet du match. En ne regardant pas, il montre qu'il a fait son choix et que sa famille passe avant le foot.`
      },
      {
        id: 'sq21',
        text: `Quelle qualité montre Noah dans cette histoire ?`,
        answers: [
          `La générosité et le sens des priorités`,
          `La rapidité à courir`,
          `L'obéissance à sa maman`,
          `Sa passion pour le football`
        ],
        correct: 0,
        explain: `Noah choisit sa famille — sa mamie malade — plutôt que son match de finale. Ce sacrifice montre qu'il sait ce qui est vraiment important : c'est le sens des priorités et la générosité.`
      },
      {
        id: 'sq22',
        text: `Comment Noah se sent-il probablement sur la route de l'hôpital ?`,
        answers: [
          `Triste pour mamie mais en paix avec son choix`,
          `En colère contre sa maman`,
          `Soulagé de ne pas jouer le match`,
          `Heureux car il aime les hôpitaux`
        ],
        correct: 0,
        explain: `Noah sait qu'il rate sa finale — c'est difficile. Mais il n'a pas hésité : il est en paix avec sa décision. On peut ressentir deux choses à la fois : de la tristesse et de la fierté de son choix.`
      }
    ]
  },
  {
    id: 'st7', lvl: 5,
    title: 'Le secret du jardinier',
    image: '🌱',
    text: `M. Bertrand était le jardinier de l'école depuis quarante ans. Chaque matin, avant l'arrivée des enfants, il arrosait ses rosiers, taillait les haies et ramassait les feuilles mortes. Les élèves ne lui parlaient presque jamais. Certains l'appelaient "le vieux monsieur au chapeau" sans connaître son prénom. Un jour, une petite fille nommée Inès trouva un carnet tombé près du portail. En le feuilletant, elle découvrit des dessins magnifiques : des fleurs, des papillons, des paysages de montagne, et des poèmes écrits à la main. Elle courut rendre le carnet à M. Bertrand. Ses yeux brillèrent. "Merci," dit-il. Puis il ajouta doucement : "Personne ne sait que je fais ça." Inès sourit. "Maintenant, moi je sais." Ce soir-là, elle parla de M. Bertrand à ses parents différemment : non plus comme "le vieux monsieur", mais comme "l'artiste du jardin".`,
    questions: [
      {
        id: 'sq23',
        text: `Pourquoi M. Bertrand dit-il "personne ne sait que je fais ça" ?`,
        answers: [
          `Parce que son talent artistique était caché — personne ne le connaissait vraiment`,
          `Parce qu'il dessinait en secret pour faire une surprise`,
          `Parce qu'il avait peur qu'on lui vole son carnet`,
          `Parce que dessiner était interdit à l'école`
        ],
        correct: 0,
        explain: `Les élèves ne voyaient en lui qu'un vieux jardinier. Personne ne savait qu'il était aussi artiste et poète. Son talent était invisible aux yeux des autres — c'est la vraie signification de sa phrase.`
      },
      {
        id: 'sq24',
        text: `Pourquoi Inès parle-t-elle différemment de M. Bertrand après cet événement ?`,
        answers: [
          `Parce qu'elle le connaît vraiment maintenant et voit ses qualités cachées`,
          `Parce que ses parents lui ont demandé d'être polie`,
          `Parce qu'elle veut lui emprunter son carnet`,
          `Parce que son professeur lui a parlé de lui`
        ],
        correct: 0,
        explain: `Inès a découvert qui était vraiment M. Bertrand. Elle ne le réduit plus à son apparence mais à ce qu'il est vraiment. La connaissance change le regard qu'on porte sur les gens.`
      },
      {
        id: 'sq25',
        text: `Que représente le carnet dans cette histoire ?`,
        answers: [
          `La vraie personnalité de M. Bertrand, cachée derrière son travail quotidien`,
          `Un carnet de notes pour le jardinage`,
          `Un cadeau qu'il voulait offrir aux enfants`,
          `Des secrets dangereux qu'il ne voulait pas montrer`
        ],
        correct: 0,
        explain: `Le carnet révèle qui est vraiment M. Bertrand : un artiste sensible qui aime les fleurs, les papillons et la poésie. Il représente sa vie intérieure, invisible aux autres jusqu'alors.`
      },
      {
        id: 'sq26',
        text: `Quelle idée importante cette histoire transmet-elle ?`,
        answers: [
          `Chaque personne cache en elle quelque chose de précieux qu'on ne voit pas au premier regard`,
          `Il faut toujours rendre les objets trouvés`,
          `Les jardiniers sont des artistes`,
          `Il faut parler aux adultes à l'école`
        ],
        correct: 0,
        explain: `L'histoire montre que M. Bertrand, vu comme "le vieux monsieur", est en réalité un artiste sensible. Cela nous invite à prendre le temps de vraiment connaître les gens autour de nous.`
      },
      {
        id: 'sq27',
        text: `Que ressent M. Bertrand quand ses yeux brillent ?`,
        answers: [
          `De la joie et de l'émotion d'être enfin vu pour ce qu'il est vraiment`,
          `De la colère qu'Inès ait ouvert son carnet`,
          `De la surprise de trouver son carnet`,
          `De la tristesse de devoir partir`
        ],
        correct: 0,
        explain: `Ses yeux qui brillent montrent une émotion forte — de la joie, peut-être des larmes retenues. Pendant des années, personne ne savait qu'il était artiste. Qu'Inès l'ait découvert et lui rende son carnet avec respect le touche profondément.`
      }
    ]
  }
];

// ===================== DICTÉE =====================
const dicteeWords = [
  { id:'dw1', lvl:1, word:'CHAT',    hint:'Animal qui fait miaou 🐱',         letters:['C','H','A','T','O','N','I','E'] },
  { id:'dw2', lvl:1, word:'MAISON',  hint:'On y habite 🏠',                   letters:['M','A','I','S','O','N','T','E'] },
  { id:'dw3', lvl:1, word:'SOLEIL',  hint:'Il brille dans le ciel ☀️',        letters:['S','O','L','E','I','L','A','R'] },
  { id:'dw4', lvl:2, word:'PORTE',   hint:'On l\'ouvre et on la ferme 🚪',    letters:['P','O','R','T','E','A','N','I'] },
  { id:'dw5', lvl:2, word:'LIVRE',   hint:'On le lit 📖',                     letters:['L','I','V','R','E','A','N','T'] },
  { id:'dw6', lvl:2, word:'ÉCOLE',   hint:'On y apprend 🏫',                  letters:['É','C','O','L','E','A','I','N'] },
  { id:'dw7', lvl:2, word:'FORÊT',   hint:'Pleine d\'arbres 🌲',              letters:['F','O','R','Ê','T','A','I','N'] },
  { id:'dw8', lvl:3, word:'CHÂTEAU', hint:'Une grande maison ancienne 🏰',    letters:['C','H','Â','T','E','A','U','R'] },
  { id:'dw9', lvl:3, word:'CRAYON',  hint:'On écrit avec lui ✏️',             letters:['C','R','A','Y','O','N','I','T'] },
  { id:'dw10',lvl:3, word:'PRINTEMPS',hint:'La saison des fleurs 🌸',        letters:['P','R','I','N','T','E','M','P','S','O','A','L'] },
];

// ===================== ORAL =====================
const oralQuestions = [
  { id:'oq1', lvl:1, text:'Comment tu t\'appelles et quel âge as-tu ?',        image:'🙋', model:'Je m\'appelle Maïssa et j\'ai 7 ans.',                                                      speak:'Comment tu t\'appelles et quel âge as-tu ?' },
  { id:'oq2', lvl:1, text:'Décris ce que tu vois : 🌳🌸🐦',                    image:'🌳', model:'Je vois un arbre vert, des fleurs roses et un oiseau qui vole.',                          speak:'Décris ce que tu vois avec un arbre, des fleurs et un oiseau.' },
  { id:'oq3', lvl:2, text:'Qu\'as-tu fait ce matin avant l\'école ?',          image:'🌅', model:'Ce matin, je me suis levée, j\'ai mangé mon petit-déjeuner et je me suis habillée.',    speak:'Qu\'as-tu fait ce matin avant de venir à l\'école ?' },
  { id:'oq4', lvl:2, text:'Donne le synonyme de "content" et fais une phrase.', image:'😊', model:'Un synonyme de content est heureux. Exemple : Je suis heureux quand je joue dehors.',  speak:'Donne le synonyme de content et fais une phrase avec ce mot.' },
  { id:'oq5', lvl:2, text:'Donne l\'antonyme de "chaud" et fais une phrase.',  image:'🌡️', model:'L\'antonyme de chaud est froid. Exemple : En hiver, il fait très froid.',               speak:'Donne l\'antonyme de chaud et fais une phrase.' },
  { id:'oq6', lvl:3, text:'Quel est ton animal préféré et pourquoi ?',         image:'🦁', model:'Mon animal préféré est le chat parce qu\'il est doux et mignon.',                       speak:'Quel est ton animal préféré et pourquoi ?' },
  { id:'oq7', lvl:3, text:'Conjugue "aller" au présent pour toutes les personnes.', image:'🔀', model:'Je vais, tu vas, il va, nous allons, vous allez, ils vont.',                       speak:'Conjugue le verbe aller au présent pour toutes les personnes.' },
];

// ===================== MEMORY =====================
const memoryEmojis = {
  easy:   ['🌸','⭐','🎈','🦋'],
  medium: ['🌸','⭐','🎈','🦋','🍎','🌈'],
  hard:   ['🌸','⭐','🎈','🦋','🍎','🌈','🐱','🚀']
};

// ===================== GÉOMÉTRIE =====================
const geoModule = {
  title: '📐 Géométrie', key: 'math_geo',
  questions: [
    // Niveau 1 — reconnaître les formes
    { id:'mg1',  lvl:1, text:'Combien de côtés a un triangle ?', image:'🔺', answers:['3','4','2','6'], correct:0, explain:'Un triangle a 3 côtés et 3 angles !' },
    { id:'mg2',  lvl:1, text:'Quelle forme a 4 côtés égaux et 4 angles droits ?', image:'⬛', answers:['Un carré','Un rectangle','Un triangle','Un cercle'], correct:0, explain:'Un carré a 4 côtés tous égaux et 4 angles droits !' },
    { id:'mg3',  lvl:1, text:'Combien de côtés a un rectangle ?', image:'▭', answers:['4','3','6','2'], correct:0, explain:'Un rectangle a 4 côtés — 2 longs et 2 courts !' },
    { id:'mg4',  lvl:1, text:'Quelle forme n\'a pas de côté droit ?', image:'⭕', answers:['Un cercle','Un carré','Un triangle','Un losange'], correct:0, explain:'Un cercle est une courbe — il n\'a aucun côté droit !' },
    { id:'mg5',  lvl:1, text:'Combien de côtés a un hexagone ?', image:'⬡', answers:['6','5','4','8'], correct:0, explain:'Un hexagone a 6 côtés — comme une cellule d\'abeille !' },
    // Niveau 2 — périmètre
    { id:'mg6',  lvl:2, text:'Un carré a des côtés de 3 cm. Quel est son périmètre ?', image:'⬛', answers:['12 cm','9 cm','6 cm','3 cm'], correct:0, explain:'Périmètre du carré = 4 × côté = 4 × 3 = 12 cm !' },
    { id:'mg7',  lvl:2, text:'Un rectangle fait 5 cm de long et 2 cm de large. Quel est son périmètre ?', image:'▭', answers:['14 cm','10 cm','7 cm','20 cm'], correct:0, explain:'Périmètre = 2 × (longueur + largeur) = 2 × (5+2) = 14 cm !' },
    { id:'mg8',  lvl:2, text:'Un triangle a des côtés de 4 cm, 3 cm et 5 cm. Quel est son périmètre ?', image:'🔺', answers:['12 cm','7 cm','15 cm','10 cm'], correct:0, explain:'Périmètre du triangle = somme des 3 côtés = 4+3+5 = 12 cm !' },
    { id:'mg9',  lvl:2, text:'Combien d\'angles droits a un carré ?', image:'📐', answers:['4','3','2','0'], correct:0, explain:'Un carré a exactement 4 angles droits (comme un "L") !' },
    { id:'mg10', lvl:2, text:'Un carré a un périmètre de 20 cm. Quel est son côté ?', image:'⬛', answers:['5 cm','4 cm','10 cm','20 cm'], correct:0, explain:'Côté = périmètre ÷ 4 = 20 ÷ 4 = 5 cm !' },
    // Niveau 3 — plus complexe
    { id:'mg11', lvl:3, text:'Un rectangle a un périmètre de 18 cm et une longueur de 6 cm. Quelle est sa largeur ?', image:'▭', answers:['3 cm','6 cm','9 cm','12 cm'], correct:0, explain:'18 = 2×(6+l) → 9 = 6+l → l = 3 cm !' },
    { id:'mg12', lvl:3, text:'Quel solide a une face rectangulaire et 2 faces triangulaires ?', image:'🔷', answers:['Un prisme','Un cube','Une sphère','Un cône'], correct:0, explain:'Un prisme triangulaire a des faces rectangulaires et triangulaires !' },
  ]
};
// Fusionner dans modules
modules['math_geo'] = geoModule;

// ===================== CONJUGAISON ORALE =====================
const conjugaisonOrale = [
  {
    id:'co1', lvl:1,
    verb:'CHANTER', tense:'présent',
    prompt:'Conjugue le verbe CHANTER au présent pour toutes les personnes.',
    image:'🎵',
    model:'Je chante, tu chantes, il chante, nous chantons, vous chantez, ils chantent.',
    speak:'Conjugue le verbe chanter au présent pour toutes les personnes.',
    hint:'Les verbes en -ER : je -e, tu -es, il -e, nous -ons, vous -ez, ils -ent'
  },
  {
    id:'co2', lvl:1,
    verb:'JOUER', tense:'présent',
    prompt:'Conjugue le verbe JOUER au présent.',
    image:'⚽',
    model:'Je joue, tu joues, il joue, nous jouons, vous jouez, ils jouent.',
    speak:'Conjugue le verbe jouer au présent.',
    hint:'Verbe en -ER : je -e, tu -es, il -e, nous -ons, vous -ez, ils -ent'
  },
  {
    id:'co3', lvl:1,
    verb:'MANGER', tense:'présent',
    prompt:'Conjugue le verbe MANGER au présent.',
    image:'🍎',
    model:'Je mange, tu manges, il mange, nous mangeons, vous mangez, ils mangent.',
    speak:'Conjugue le verbe manger au présent.',
    hint:'Attention : "nous mangeons" avec un e pour garder le son [j] !'
  },
  {
    id:'co4', lvl:2,
    verb:'ÊTRE', tense:'présent',
    prompt:'Conjugue le verbe ÊTRE au présent.',
    image:'🌟',
    model:'Je suis, tu es, il est, nous sommes, vous êtes, ils sont.',
    speak:'Conjugue le verbe être au présent.',
    hint:'Être est irrégulier — apprends-le par cœur !'
  },
  {
    id:'co5', lvl:2,
    verb:'AVOIR', tense:'présent',
    prompt:'Conjugue le verbe AVOIR au présent.',
    image:'🎁',
    model:'J\'ai, tu as, il a, nous avons, vous avez, ils ont.',
    speak:'Conjugue le verbe avoir au présent.',
    hint:'Avoir est irrégulier — j\'ai, tu as, il a, nous avons…'
  },
  {
    id:'co6', lvl:2,
    verb:'ALLER', tense:'présent',
    prompt:'Conjugue le verbe ALLER au présent.',
    image:'🚀',
    model:'Je vais, tu vas, il va, nous allons, vous allez, ils vont.',
    speak:'Conjugue le verbe aller au présent.',
    hint:'Aller est irrégulier : je vais, tu vas, il va…'
  },
  {
    id:'co7', lvl:3,
    verb:'FINIR', tense:'présent',
    prompt:'Conjugue le verbe FINIR au présent.',
    image:'🏁',
    model:'Je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.',
    speak:'Conjugue le verbe finir au présent.',
    hint:'Verbes en -IR : je -is, tu -is, il -it, nous -issons, vous -issez, ils -issent'
  },
  {
    id:'co8', lvl:3,
    verb:'CHANTER', tense:'passé composé',
    prompt:'Conjugue CHANTER au passé composé.',
    image:'🎤',
    model:'J\'ai chanté, tu as chanté, il a chanté, nous avons chanté, vous avez chanté, ils ont chanté.',
    speak:'Conjugue le verbe chanter au passé composé.',
    hint:'Passé composé = avoir/être conjugué + participe passé'
  },
  {
    id:'co9', lvl:3,
    verb:'ALLER', tense:'futur',
    prompt:'Conjugue ALLER au futur simple.',
    image:'🔮',
    model:'J\'irai, tu iras, il ira, nous irons, vous irez, ils iront.',
    speak:'Conjugue le verbe aller au futur simple.',
    hint:'Futur de "aller" est irrégulier : j\'irai, tu iras…'
  },
];

// =====================================================================
// EXERCICES CIBLÉS — Évaluation Repères CE1 Maïssa (Septembre 2025)
// Basés sur les lacunes identifiées dans les radars français + maths
// =====================================================================

// ─── MODULE : Compréhension de texte lu seul (très faible) ───────────
modules['comp_texte'] = {
  title: '📝 Je comprends ce que je lis', key: 'comp_texte',
  questions: [
    // Niveau 1 — phrase unique, mot clé visible
    { id:'ct1', lvl:1, text:'Léa mange une pomme rouge. De quelle couleur est la pomme ?', image:'🍎',
      answers:['Rouge','Verte','Jaune','Bleue'], correct:0,
      explain:'Dans la phrase : "une pomme rouge" — la couleur est rouge !' },
    { id:'ct2', lvl:1, text:'Le chien dort dans son panier. Où est le chien ?', image:'🐶',
      answers:['Dans son panier','Dans le jardin','Sur le canapé','Dans la rue'], correct:0,
      explain:'"Le chien dort dans son panier" — il est dans son panier !' },
    { id:'ct3', lvl:1, text:'Tom a 7 ans. Il va à l\'école à pied. Quel âge a Tom ?', image:'🧒',
      answers:['7 ans','6 ans','8 ans','5 ans'], correct:0,
      explain:'"Tom a 7 ans" — la réponse est dans la première phrase !' },
    { id:'ct4', lvl:1, text:'Il pleut dehors. Emma prend son parapluie. Pourquoi Emma prend-elle son parapluie ?', image:'☔',
      answers:['Parce qu\'il pleut','Parce qu\'il fait soleil','Parce qu\'elle va à la piscine','Parce qu\'elle a froid'], correct:0,
      explain:'"Il pleut dehors" — donc Emma prend son parapluie pour ne pas se mouiller !' },

    // Niveau 2 — 2 phrases, lien de causalité simple
    { id:'ct5', lvl:2, text:'Nina a faim. Elle ouvre le réfrigérateur. Pourquoi Nina ouvre-t-elle le réfrigérateur ?', image:'🌮',
      answers:['Parce qu\'elle a faim','Parce qu\'elle a soif','Parce qu\'il fait chaud','Pour ranger ses affaires'], correct:0,
      explain:'Nina a faim → elle cherche à manger dans le réfrigérateur. C\'est la cause !' },
    { id:'ct6', lvl:2, text:'Le chat voit une souris. Il court très vite. Que fait le chat ?', image:'🐱',
      answers:['Il court après la souris','Il dort','Il mange','Il se cache'], correct:0,
      explain:'Le chat voit une souris et court vite — il court après elle !' },
    { id:'ct7', lvl:2, text:'Luc oublie son manteau. Il a très froid à la récréation. Pourquoi Luc a-t-il froid ?', image:'🥶',
      answers:['Parce qu\'il a oublié son manteau','Parce qu\'il est malade','Parce qu\'il fait chaud','Parce qu\'il est dehors'], correct:0,
      explain:'Il a oublié son manteau → il n\'est pas protégé du froid !' },
    { id:'ct8', lvl:2, text:'"Attention !" crie la maîtresse. Les enfants s\'arrêtent de courir. Que font les enfants après ?', image:'🏫',
      answers:['Ils s\'arrêtent de courir','Ils courent plus vite','Ils sortent de la classe','Ils chantent'], correct:0,
      explain:'"Les enfants s\'arrêtent de courir" — c\'est écrit dans la phrase !' },

    // Niveau 3 — texte court 3 phrases, inférence légère
    { id:'ct9', lvl:3, text:'Zoé se lève. Elle mange ses céréales. Elle prend son cartable. Que va faire Zoé ensuite ?', image:'🎒',
      answers:['Aller à l\'école','Aller se coucher','Jouer dehors','Regarder la télé'], correct:0,
      explain:'Se lever, manger, prendre son cartable — c\'est la routine du matin avant l\'école !' },
    { id:'ct10', lvl:3, text:'Paul voit des nuages noirs dans le ciel. Il rentre vite à la maison. Qu\'est-ce qui va probablement arriver ?', image:'⛈️',
      answers:['Il va pleuvoir','Il va faire soleil','Il va neiger','Il va faire chaud'], correct:0,
      explain:'Des nuages noirs annoncent souvent la pluie — Paul rentre pour ne pas se mouiller !' },
    { id:'ct11', lvl:3, text:'Jade cherche ses clés partout. Elle regarde dans son sac, sur la table, dans sa veste. Elle soupire. Comment se sent Jade ?', image:'😤',
      answers:['Elle est stressée et fatiguée','Elle est heureuse','Elle est en colère contre quelqu\'un','Elle a sommeil'], correct:0,
      explain:'Chercher partout et soupirer montre qu\'elle est stressée et épuisée de chercher !' },
    { id:'ct12', lvl:3, text:'Le matin, Samy ne trouve pas ses chaussures. Il est en retard. Il court jusqu\'à l\'école. Quel est le problème de Samy ?', image:'👟',
      answers:['Il a perdu du temps à chercher ses chaussures','Il a raté le bus','Il a oublié son sac','Il n\'a pas mangé'], correct:0,
      explain:'Chercher ses chaussures lui a fait perdre du temps → il est en retard et doit courir !' },
  ]
};

// ─── MODULE : Comprendre des phrases (faible) ────────────────────────
modules['comp_phrases'] = {
  title: '🔍 Je comprends les phrases', key: 'comp_phrases',
  questions: [
    { id:'cph1', lvl:1, text:'Le chat est sur le tapis. Où est le chat ?', image:'🐱',
      answers:['Sur le tapis','Sous le tapis','Dans le jardin','Sur le lit'], correct:0,
      explain:'"Le chat est sur le tapis" — la préposition "sur" indique l\'endroit !' },
    { id:'cph2', lvl:1, text:'Emma court plus vite que Léa. Qui court le plus vite ?', image:'🏃',
      answers:['Emma','Léa','Les deux pareil','On ne sait pas'], correct:0,
      explain:'"plus vite que" signifie qu\'Emma est la plus rapide !' },
    { id:'cph3', lvl:1, text:'Le soleil se lève à l\'est. De quel côté se lève le soleil ?', image:'🌅',
      answers:['À l\'est','À l\'ouest','Au nord','Au sud'], correct:0,
      explain:'"se lève à l\'est" — la réponse est donnée directement dans la phrase !' },
    { id:'cph4', lvl:2, text:'Avant de dormir, Lou brosse ses dents. Quand Lou brosse-t-elle ses dents ?', image:'🦷',
      answers:['Avant de dormir','Après le petit-déjeuner','En rentrant de l\'école','Le matin'], correct:0,
      explain:'"Avant de dormir" — le mot "avant" indique le moment !' },
    { id:'cph5', lvl:2, text:'Ni Tom ni Léa n\'aiment les épinards. Qui aime les épinards ?', image:'🥬',
      answers:['Personne','Tom seulement','Léa seulement','Les deux'], correct:0,
      explain:'"Ni… ni…" signifie que personne n\'aime les épinards !' },
    { id:'cph6', lvl:2, text:'Le lapin mange la carotte que la fermière a cueillie. Qui a cueilli la carotte ?', image:'🥕',
      answers:['La fermière','Le lapin','Les deux','On ne sait pas'], correct:0,
      explain:'"que la fermière a cueillie" — c\'est bien la fermière qui a cueilli la carotte !' },
    { id:'cph7', lvl:3, text:'Bien qu\'il soit fatigué, Marc continue à travailler. Marc continue-t-il à travailler ?', image:'💪',
      answers:['Oui, malgré la fatigue','Non, il s\'arrête','Il hésite','Il dort'], correct:0,
      explain:'"Bien que" = malgré. Il est fatigué MAIS il continue quand même !' },
    { id:'cph8', lvl:3, text:'Si tu ranges ta chambre, tu pourras regarder la télévision. Que doit-il se passer d\'abord ?', image:'🧹',
      answers:['Ranger la chambre','Regarder la télévision','Faire ses devoirs','Manger'], correct:0,
      explain:'"Si tu ranges… tu pourras…" — la condition est de ranger d\'abord !' },
    { id:'cph9', lvl:3, text:'C\'est le livre de Paul que Marie a emprunté. À qui appartient le livre ?', image:'📚',
      answers:['À Paul','À Marie','Aux deux','À la bibliothèque'], correct:0,
      explain:'"le livre de Paul" — le mot "de" indique l\'appartenance : c\'est le livre de Paul !' },
    { id:'cph10', lvl:3, text:'Les enfants qui n\'ont pas fini leur travail resteront en classe. Qui reste en classe ?', image:'🏫',
      answers:['Ceux qui n\'ont pas fini','Ceux qui ont fini','Tous les enfants','Personne'], correct:0,
      explain:'"qui n\'ont pas fini leur travail" — seulement ceux qui n\'ont pas terminé restent !' },
  ]
};

// ─── MODULE : Écriture des mots / syllabes (faible) ──────────────────
modules['ecriture_mots'] = {
  title: '✏️ J\'écris les mots', key: 'ecriture_mots',
  questions: [
    // Choix de la bonne syllabe
    { id:'em1', lvl:1, text:'Quel mot commence par la syllabe "ma" ?', image:'🏠',
      answers:['maison','bateau','voiture','école'], correct:0,
      explain:'"mai-son" commence bien par la syllabe "ma" !' },
    { id:'em2', lvl:1, text:'Quel mot se termine par le son "ou" ?', image:'🦊',
      answers:['hibou','lapin','chat','chien'], correct:0,
      explain:'"hi-bou" — le mot se termine bien par le son "ou" !' },
    { id:'em3', lvl:1, text:'Combien de syllabes dans le mot "pa-pi-llon" ?', image:'🦋',
      answers:['3','2','4','1'], correct:0,
      explain:'"pa-pi-llon" = 3 syllabes. On tape dans ses mains pour compter !' },
    { id:'em4', lvl:1, text:'Quel mot contient le son "in" ?', image:'🐰',
      answers:['lapin','loup','chat','ours'], correct:0,
      explain:'"la-pin" — le son "in" est à la fin du mot !' },
    { id:'em5', lvl:2, text:'Comment s\'écrit le son [f] dans "éléphant" ?', image:'🐘',
      answers:['ph','f','ff','v'], correct:0,
      explain:'Dans "éléphant", le son [f] s\'écrit "ph" — c\'est un cas particulier !' },
    { id:'em6', lvl:2, text:'Quelle est la bonne façon d\'écrire le son [s] dans "garçon" ?', image:'👦',
      answers:['ç','s','ss','c'], correct:0,
      explain:'"garçon" — devant "o", on utilise la cédille : ç !' },
    { id:'em7', lvl:2, text:'Quel mot est correctement écrit ?', image:'🌲',
      answers:['forêt','foret','fouret','forette'], correct:0,
      explain:'"forêt" s\'écrit avec un accent circonflexe sur le e !' },
    { id:'em8', lvl:2, text:'Quel mot contient le son [ɛ̃] comme dans "pain" ?', image:'🍞',
      answers:['lapin','loto','papa','vélo'], correct:0,
      explain:'"la-pin" — le son "in" est le même que dans "pain" !' },
    { id:'em9', lvl:3, text:'Quel mot est au pluriel correctement écrit ?', image:'🐴',
      answers:['des chevaux','des chevals','des chevales','des cheveau'], correct:0,
      explain:'"cheval" fait "chevaux" au pluriel — cas particulier en -al → -aux !' },
    { id:'em10', lvl:3, text:'Comment écrit-on "j\'entends" au son [ã] ?', image:'👂',
      answers:['an dans en','in','un','é'], correct:0,
      explain:'Le son [ã] peut s\'écrire "an", "en", "am", "em" — plusieurs graphies possibles !' },
    { id:'em11', lvl:3, text:'Quel mot utilise correctement le son [o] ?', image:'🏰',
      answers:['château','chateau','chato','chãteau'], correct:0,
      explain:'"château" — le son [o] s\'écrit "eau" ici !' },
    { id:'em12', lvl:3, text:'Quel mot contient le son [j] comme dans "yeux" ?', image:'👀',
      answers:['fille','fil','file','fila'], correct:0,
      explain:'"fille" — le "ill" fait le son [j] comme dans "yeux" !' },
  ]
};

// ─── MODULE : Ligne graduée (très faible) ────────────────────────────
modules['ligne_graduee'] = {
  title: '📏 La ligne graduée', key: 'ligne_graduee',
  questions: [
    { id:'lg1', lvl:1, text:'Sur une ligne graduée de 0 à 10, entre quels nombres se trouve 5 ?', image:'📏',
      answers:['Entre 4 et 6','Entre 3 et 7','Entre 0 et 10','Entre 1 et 9'], correct:0,
      explain:'5 se trouve entre 4 et 6 sur la ligne graduée !' },
    { id:'lg2', lvl:1, text:'Une règle commence à 0. Chaque trait vaut 1. Le 3ème trait, c\'est quel nombre ?', image:'📐',
      answers:['3','2','4','1'], correct:0,
      explain:'0, 1, 2, 3 — le 3ème trait correspond au nombre 3 !' },
    { id:'lg3', lvl:1, text:'Sur une ligne de 0 à 10, quel nombre est juste au milieu ?', image:'📏',
      answers:['5','4','6','3'], correct:0,
      explain:'0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 — le milieu est 5 !' },
    { id:'lg4', lvl:2, text:'Sur une ligne graduée, un point est entre 6 et 8. Quel nombre est-ce probablement ?', image:'📏',
      answers:['7','5','9','6'], correct:0,
      explain:'Entre 6 et 8, il y a 7 — c\'est le nombre qui se trouve au milieu !' },
    { id:'lg5', lvl:2, text:'Sur une ligne de 0 à 20 graduée de 2 en 2 (0, 2, 4…), entre 4 et 8, quel nombre manque ?', image:'📐',
      answers:['6','5','7','3'], correct:0,
      explain:'0, 2, 4, 6, 8 — on compte de 2 en 2, donc entre 4 et 8 c\'est 6 !' },
    { id:'lg6', lvl:2, text:'Une ligne va de 0 à 100. Le milieu est marqué. Quel nombre représente ce milieu ?', image:'📏',
      answers:['50','40','60','25'], correct:0,
      explain:'Le milieu de 0 à 100, c\'est 50 !' },
    { id:'lg7', lvl:2, text:'Sur une règle graduée en cm, un crayon mesure jusqu\'au 8ème trait. Quelle est sa longueur ?', image:'✏️',
      answers:['8 cm','7 cm','9 cm','6 cm'], correct:0,
      explain:'Si le crayon va jusqu\'au 8ème trait et que chaque trait = 1 cm, il mesure 8 cm !' },
    { id:'lg8', lvl:3, text:'Sur une ligne de 0 à 50 graduée de 5 en 5, où se place 35 ?', image:'📏',
      answers:['Entre 30 et 40','Entre 20 et 30','Entre 40 et 50','Après 40'], correct:0,
      explain:'0, 5, 10, 15, 20, 25, 30, 35, 40… 35 se trouve entre 30 et 40 !' },
    { id:'lg9', lvl:3, text:'Sur une ligne, 0 est à gauche et 100 à droite. Où se place 75 ?', image:'📐',
      answers:['Près du 100, à droite','Au milieu','Près du 0, à gauche','Tout à droite'], correct:0,
      explain:'75 est plus grand que 50 (milieu) → il se place dans la moitié droite, près de 100 !' },
    { id:'lg10', lvl:3, text:'Sur une ligne graduée de 0 à 1000 par dizaines, entre quelles valeurs se place 340 ?', image:'📏',
      answers:['Entre 300 et 400','Entre 200 et 300','Entre 400 et 500','Entre 330 et 350'], correct:0,
      explain:'340 est après 300 et avant 400 — il se place donc entre ces deux centaines !' },
  ]
};

// ─── MODULE : Géométrie — résoudre des problèmes (très faible) ───────
modules['geo_problemes'] = {
  title: '📐 Géométrie & problèmes', key: 'geo_problemes',
  questions: [
    { id:'gp1', lvl:1, text:'Un carré a 4 côtés de 2 cm chacun. Quel est son périmètre ?', image:'⬛',
      answers:['8 cm','6 cm','4 cm','10 cm'], correct:0,
      explain:'Périmètre = 4 × 2 cm = 8 cm. On additionne tous les côtés !' },
    { id:'gp2', lvl:1, text:'Quelle figure a exactement 3 côtés ?', image:'🔺',
      answers:['Le triangle','Le carré','Le rectangle','Le cercle'], correct:0,
      explain:'Le triangle a 3 côtés et 3 angles — "tri" veut dire trois !' },
    { id:'gp3', lvl:1, text:'Un rectangle a 2 longs côtés de 5 cm et 2 courts côtés de 2 cm. Quel est son périmètre ?', image:'▭',
      answers:['14 cm','10 cm','7 cm','20 cm'], correct:0,
      explain:'5 + 2 + 5 + 2 = 14 cm. Ou plus vite : 2 × (5+2) = 14 cm !' },
    { id:'gp4', lvl:2, text:'Un jardin carré a un côté de 10 m. Combien de mètres de clôture faut-il ?', image:'🌿',
      answers:['40 m','30 m','10 m','20 m'], correct:0,
      explain:'Périmètre du carré = 4 × côté = 4 × 10 = 40 mètres de clôture !' },
    { id:'gp5', lvl:2, text:'Une piscine rectangulaire fait 8 m de long et 4 m de large. Quelle est la longueur du tour ?', image:'🏊',
      answers:['24 m','12 m','32 m','16 m'], correct:0,
      explain:'2 × (8 + 4) = 2 × 12 = 24 m pour faire le tour de la piscine !' },
    { id:'gp6', lvl:2, text:'Un triangle a ses côtés qui mesurent 3 cm, 4 cm et 5 cm. Quel est le périmètre ?', image:'🔺',
      answers:['12 cm','9 cm','15 cm','7 cm'], correct:0,
      explain:'3 + 4 + 5 = 12 cm. Pour un triangle, on additionne les 3 côtés !' },
    { id:'gp7', lvl:2, text:'Un carré et un triangle ont le même périmètre de 12 cm. Combien mesure un côté du carré ?', image:'⬛',
      answers:['3 cm','4 cm','12 cm','6 cm'], correct:0,
      explain:'Carré = 4 côtés égaux. 12 ÷ 4 = 3 cm par côté !' },
    { id:'gp8', lvl:3, text:'Un rectangle a un périmètre de 18 cm. Ses longs côtés mesurent 6 cm. Combien mesurent ses courts côtés ?', image:'▭',
      answers:['3 cm','6 cm','9 cm','12 cm'], correct:0,
      explain:'18 = 2×(6 + c) → 9 = 6 + c → c = 3 cm !' },
    { id:'gp9', lvl:3, text:'On veut entourer un jardin carré avec 20 m de clôture. Quelle longueur fait un côté ?', image:'🌳',
      answers:['5 m','4 m','10 m','20 m'], correct:0,
      explain:'Périmètre = 4 × côté → côté = 20 ÷ 4 = 5 m !' },
    { id:'gp10', lvl:3, text:'Un terrain en forme de triangle a des côtés de 12 m, 8 m et 10 m. Quelle longueur de grillage faut-il ?', image:'🔺',
      answers:['30 m','20 m','24 m','36 m'], correct:0,
      explain:'12 + 8 + 10 = 30 m de grillage pour entourer le terrain !' },
  ]
};

// ─── MODULE : Écrire les nombres (faible) ────────────────────────────
modules['ecrire_nombres'] = {
  title: '🔢 J\'écris les nombres', key: 'ecrire_nombres',
  questions: [
    { id:'en1', lvl:1, text:'Comment s\'écrit le nombre "vingt" en chiffres ?', image:'🔢',
      answers:['20','12','2','200'], correct:0,
      explain:'"Vingt" s\'écrit 20 — 2 dizaines, 0 unité !' },
    { id:'en2', lvl:1, text:'Comment s\'écrit le nombre "quarante" en chiffres ?', image:'✨',
      answers:['40','14','4','400'], correct:0,
      explain:'"Quarante" = 40 — 4 dizaines !' },
    { id:'en3', lvl:1, text:'Comment écrit-on "soixante" en chiffres ?', image:'🔟',
      answers:['60','16','6','600'], correct:0,
      explain:'"Soixante" = 60 — 6 dizaines !' },
    { id:'en4', lvl:2, text:'Comment écrit-on "quatre-vingt" en chiffres ?', image:'🎯',
      answers:['80','48','8','18'], correct:0,
      explain:'"Quatre-vingt" = 4 × 20 = 80 !' },
    { id:'en5', lvl:2, text:'Écris en chiffres : "deux cent trente-cinq"', image:'💯',
      answers:['235','253','325','23'], correct:0,
      explain:'Deux cent = 200, trente = 30, cinq = 5 → 200 + 30 + 5 = 235 !' },
    { id:'en6', lvl:2, text:'Comment écrit-on le nombre 57 en lettres ?', image:'🔢',
      answers:['cinquante-sept','soixante-sept','quarante-sept','cinquante-dix'], correct:0,
      explain:'50 = cinquante, 7 = sept → 57 = cinquante-sept !' },
    { id:'en7', lvl:2, text:'Quel est le nombre qui s\'écrit avec 3 centaines, 2 dizaines et 4 unités ?', image:'💯',
      answers:['324','342','234','432'], correct:0,
      explain:'3 centaines = 300, 2 dizaines = 20, 4 unités = 4 → 300 + 20 + 4 = 324 !' },
    { id:'en8', lvl:3, text:'Comment s\'écrit "quatre-vingt-dix-sept" en chiffres ?', image:'🚀',
      answers:['97','79','87','907'], correct:0,
      explain:'"Quatre-vingt" = 80, "dix-sept" = 17 → 80 + 17 = 97 !' },
    { id:'en9', lvl:3, text:'Quel nombre a 5 dizaines et 3 unités ?', image:'🔢',
      answers:['53','35','503','350'], correct:0,
      explain:'5 dizaines = 50, 3 unités = 3 → 50 + 3 = 53 !' },
    { id:'en10', lvl:3, text:'Comment décompose-t-on 472 ?', image:'💯',
      answers:['400 + 70 + 2','400 + 72','47 + 2','4 + 7 + 2'], correct:0,
      explain:'472 = 4 centaines + 7 dizaines + 2 unités = 400 + 70 + 2 !' },
    { id:'en11', lvl:3, text:'Lequel de ces nombres s\'écrit "deux cent soixante" ?', image:'🔢',
      answers:['260','206','620','226'], correct:0,
      explain:'Deux cent = 200, soixante = 60 → 200 + 60 = 260 !' },
    { id:'en12', lvl:3, text:'Quel est le successeur de 199 (le nombre qui vient juste après) ?', image:'➡️',
      answers:['200','198','210','190'], correct:0,
      explain:'Après 199, on change de centaine : 199 + 1 = 200 !' },
  ]
};

// ─── MODULE : Soustraction (faible) ──────────────────────────────────
modules['soustraction'] = {
  title: '➖ Je soustrais', key: 'soustraction',
  questions: [
    { id:'so1', lvl:1, text:'10 - 3 = ?', image:'🔟',
      answers:['7','6','8','3'], correct:0, explain:'10 - 3 = 7 !' },
    { id:'so2', lvl:1, text:'15 - 5 = ?', image:'✨',
      answers:['10','9','11','5'], correct:0, explain:'15 - 5 = 10. On retire une dizaine !' },
    { id:'so3', lvl:1, text:'Il y a 8 oiseaux sur un fil. 3 s\'envolent. Combien reste-t-il ?', image:'🐦',
      answers:['5','4','6','3'], correct:0, explain:'8 - 3 = 5 oiseaux restent sur le fil !' },
    { id:'so4', lvl:2, text:'20 - 8 = ?', image:'🎯',
      answers:['12','11','13','8'], correct:0, explain:'20 - 8 = 12. Astuce : 8 + 12 = 20 !' },
    { id:'so5', lvl:2, text:'35 - 10 = ?', image:'🔢',
      answers:['25','24','26','30'], correct:0, explain:'35 - 10 = 25. On enlève une dizaine !' },
    { id:'so6', lvl:2, text:'J\'ai 24 images. J\'en donne 9. Combien m\'en reste-t-il ?', image:'🖼️',
      answers:['15','14','16','13'], correct:0, explain:'24 - 9 = 15. Astuce : 9 + 5 = 14… non, 9 + 6 = 15 !' },
    { id:'so7', lvl:2, text:'50 - 23 = ?', image:'🎯',
      answers:['27','28','26','37'], correct:0, explain:'50 - 23 = 27. On peut calculer : 23 + 7 = 30, + 20 = 50, donc 27 !' },
    { id:'so8', lvl:3, text:'100 - 37 = ?', image:'💯',
      answers:['63','73','67','57'], correct:0, explain:'100 - 37 = 63. Astuce : 37 + 63 = 100 !' },
    { id:'so9', lvl:3, text:'Un paquet avait 48 biscuits. On en mange 19. Combien en reste-t-il ?', image:'🍪',
      answers:['29','28','30','19'], correct:0, explain:'48 - 19 = 29. Astuce : 19 + 1 = 20, 20 + 28 = 48, donc 1 + 28 = 29 !' },
    { id:'so10', lvl:3, text:'Le résultat de 74 - 38 = ?', image:'🔢',
      answers:['36','34','38','46'], correct:0, explain:'74 - 38 = 36. On peut poser l\'opération ou calculer 38 + 36 = 74 !' },
    { id:'so11', lvl:3, text:'Un train a 56 places. 28 sont occupées. Combien de places libres reste-t-il ?', image:'🚂',
      answers:['28','27','29','30'], correct:0, explain:'56 - 28 = 28 places libres !' },
    { id:'so12', lvl:3, text:'200 - 65 = ?', image:'💯',
      answers:['135','145','125','165'], correct:0, explain:'200 - 65 = 135. Astuce : 65 + 35 = 100, + 100 = 200, donc 135 !' },
  ]
};
