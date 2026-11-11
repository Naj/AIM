// =====================================================================
// DATA CE2 — Mise à jour niveau CE2 (novembre 2026)
//
// Ce fichier ÉTEND data.js sans jamais le modifier :
//   1. CE2_EXTRA ajoute des questions CE2 à CHAQUE module existant
//      (les thématiques déjà maîtrisées continuent donc d'être travaillées)
//   2. Les nouvelles banques alimentent les 4 ateliers calés sur les
//      formats réels des évaluations Repères CE2
//
// Convention héritée de data.js : la bonne réponse est en position 0,
// l'affichage mélange les propositions (voir loadQuestion dans modules.js).
// Les apostrophes françaises imposent des chaînes en guillemets doubles.
// =====================================================================

const CE2_EXTRA = {

  // ─── VOCABULAIRE ──────────────────────────────────────────────────
  fr_vocab: [
    { id:"c2fv1", lvl:1, text:"Quel mot veut dire la même chose que \"rapidement\" ?", image:"💨", answers:["vite","lentement","doucement","tard"], correct:0, explain:"\"Vite\" et \"rapidement\" sont des synonymes !" },
    { id:"c2fv2", lvl:1, text:"Quel mot veut dire le contraire de \"ancien\" ?", image:"✨", answers:["nouveau","vieux","usé","cassé"], correct:0, explain:"Ancien ↔ Nouveau — ce sont des antonymes !" },
    { id:"c2fv3", lvl:2, text:"Dans \"recommencer\", que veut dire le préfixe \"re-\" ?", image:"🔄", answers:["à nouveau","avant","contre","sans"], correct:0, explain:"\"Re-\" veut dire à nouveau : recommencer = commencer une deuxième fois !" },
    { id:"c2fv4", lvl:2, text:"Dans \"invisible\", que veut dire le préfixe \"in-\" ?", image:"👻", answers:["le contraire","beaucoup","petit","encore"], correct:0, explain:"\"In-\" indique le contraire : invisible = qui ne se voit pas !" },
    { id:"c2fv5", lvl:2, text:"Comment appelle-t-on celui qui joue du piano ?", image:"🎹", answers:["un pianiste","un pianeur","un pianier","un pianard"], correct:0, explain:"Le suffixe \"-iste\" sert à nommer le métier : pianiste !" },
    { id:"c2fv6", lvl:3, text:"Que veut dire \"avoir un cœur d'or\" ?", image:"💛", answers:["être très gentil","être très riche","être malade","être fatigué"], correct:0, explain:"C'est une expression : avoir un cœur d'or = être très généreux et gentil !" },
    { id:"c2fv7", lvl:3, text:"Quel mot est un synonyme de \"bâtir\" ?", image:"🏗️", answers:["construire","détruire","dessiner","acheter"], correct:0, explain:"Bâtir et construire veulent dire la même chose !" },
    { id:"c2fv8", lvl:3, text:"Quel mot est le contraire de \"autoriser\" ?", image:"🚫", answers:["interdire","permettre","accepter","laisser"], correct:0, explain:"Autoriser ↔ Interdire — ce sont des antonymes !" },
  ],

  // ─── PHRASES & GRAMMAIRE ──────────────────────────────────────────
  fr_phrases: [
    { id:"c2fp1", lvl:1, text:"Dans \"Le chien de Paul dort.\", quelle est la nature de \"Paul\" ?", image:"🐕", answers:["un nom propre","un nom commun","un déterminant","un adjectif"], correct:0, explain:"\"Paul\" est un nom propre : il prend une majuscule !" },
    { id:"c2fp2", lvl:1, text:"Dans \"le chien\", quelle est la nature de \"le\" ?", image:"📘", answers:["un déterminant","un nom","un verbe","un adjectif"], correct:0, explain:"\"Le\" est un déterminant : il accompagne le nom !" },
    { id:"c2fp3", lvl:2, text:"Dans \"Léa mange une pomme.\", que mange-t-elle ? (le complément)", image:"🍎", answers:["une pomme","Léa","mange","une"], correct:0, explain:"\"Une pomme\" est le complément : c'est ce que Léa mange !" },
    { id:"c2fp4", lvl:2, text:"Quel est le type de la phrase \"Quelle belle journée !\" ?", image:"☀️", answers:["exclamative","interrogative","déclarative","impérative"], correct:0, explain:"Le point d'exclamation indique une phrase exclamative !" },
    { id:"c2fp5", lvl:2, text:"Quel est le sujet dans \"Dans le jardin, les enfants jouent.\" ?", image:"🌳", answers:["les enfants","Dans le jardin","jouent","le jardin"], correct:0, explain:"Qui est-ce qui joue ? Les enfants → c'est le sujet !" },
    { id:"c2fp6", lvl:3, text:"Quel est le verbe conjugué dans \"Hier, nous avons visité le musée.\" ?", image:"🏛️", answers:["avons visité","musée","Hier","nous"], correct:0, explain:"Au passé composé, le verbe est en deux morceaux : avons visité !" },
    { id:"c2fp7", lvl:3, text:"Quel est le sujet complet dans \"Les élèves de la classe chantent.\" ?", image:"🎶", answers:["Les élèves de la classe","Les élèves","la classe","chantent"], correct:0, explain:"Le sujet complet, c'est tout le groupe : \"Les élèves de la classe\" !" },
    { id:"c2fp8", lvl:3, text:"Mets à la forme négative : \"Il mange des bonbons.\"", image:"🍬", answers:["Il ne mange pas de bonbons.","Il mange pas bonbons.","Ne il mange pas de bonbons.","Il ne mange des bonbons."], correct:0, explain:"On encadre le verbe avec ne…pas, et \"des\" devient \"de\" !" },
  ],

  // ─── ORTHOGRAPHE ──────────────────────────────────────────────────
  fr_ortho: [
    { id:"c2fo1", lvl:1, text:"Complète : \"Il ___ malade aujourd'hui.\"", image:"🤒", answers:["est","et","ait","ais"], correct:0, explain:"On peut dire \"il était malade\" → c'est le verbe être : est !" },
    { id:"c2fo2", lvl:1, text:"Complète : \"Je vais ___ l'école.\"", image:"🏫", answers:["à","a","as","at"], correct:0, explain:"\"À\" avec un accent indique le lieu où l'on va !" },
    { id:"c2fo3", lvl:2, text:"Complète : \"Ils ___ des jouets neufs.\"", image:"🧸", answers:["ont","on","onts","hont"], correct:0, explain:"On peut dire \"ils avaient\" → c'est le verbe avoir : ont !" },
    { id:"c2fo4", lvl:2, text:"Complète : \"___ frère est plus grand que moi.\"", image:"👦", answers:["Son","Sont","Sons","Cont"], correct:0, explain:"\"Son\" montre à qui c'est : son frère = le frère de quelqu'un !" },
    { id:"c2fo5", lvl:2, text:"Quel est le pluriel de \"bijou\" ?", image:"💎", answers:["bijoux","bijous","bijoues","bijoux-es"], correct:0, explain:"Bijou, caillou, chou, genou, hibou, joujou, pou prennent un -x !" },
    { id:"c2fo6", lvl:3, text:"Quel est le pluriel de \"journal\" ?", image:"📰", answers:["journaux","journals","journales","journeaux"], correct:0, explain:"Les mots en -al font -aux au pluriel : journal → journaux !" },
    { id:"c2fo7", lvl:3, text:"Quel mot est bien écrit ?", image:"✍️", answers:["tomber","tonber","tombé-r","taumber"], correct:0, explain:"Devant m, b et p, on écrit \"m\" au lieu de \"n\" : tomber !" },
    { id:"c2fo8", lvl:3, text:"Complète : \"Elles ___ parties en vacances.\"", image:"🧳", answers:["sont","son","sonts","cont"], correct:0, explain:"On peut dire \"elles étaient parties\" → verbe être : sont !" },
  ],

  // ─── CONJUGAISON ──────────────────────────────────────────────────
  fr_conj: [
    { id:"c2fc1", lvl:1, text:"Conjugue à l'imparfait : \"Je ___ à la balle.\" (jouer)", image:"⚽", answers:["jouais","joue","jouerai","jouai"], correct:0, explain:"À l'imparfait, je prend la terminaison -ais : je jouais !" },
    { id:"c2fc2", lvl:1, text:"Conjugue au futur : \"Demain, tu ___ au parc.\" (aller)", image:"🌳", answers:["iras","vas","allais","irais"], correct:0, explain:"Au futur, \"aller\" devient : j'irai, tu iras !" },
    { id:"c2fc3", lvl:2, text:"Conjugue à l'imparfait : \"Nous ___ très contents.\" (être)", image:"😄", answers:["étions","sommes","serons","étiez"], correct:0, explain:"Imparfait de être : j'étais, nous étions !" },
    { id:"c2fc4", lvl:2, text:"Conjugue au passé composé : \"Elles ___ au cinéma.\" (aller)", image:"🎬", answers:["sont allées","ont allé","sont allé","est allées"], correct:0, explain:"Avec être, le participe s'accorde : elles sont allées !" },
    { id:"c2fc5", lvl:2, text:"Conjugue au présent : \"Nous ___ nos devoirs.\" (finir)", image:"📚", answers:["finissons","finons","finisons","finissez"], correct:0, explain:"Les verbes en -ir du 2e groupe ajoutent -iss : nous finissons !" },
    { id:"c2fc6", lvl:3, text:"Conjugue à l'imparfait : \"Vous ___ un chat noir.\" (avoir)", image:"🐈‍⬛", answers:["aviez","avez","aurez","avaient"], correct:0, explain:"Imparfait de avoir : j'avais, vous aviez !" },
    { id:"c2fc7", lvl:3, text:"Conjugue au futur : \"Ils ___ un gâteau.\" (faire)", image:"🎂", answers:["feront","font","faisaient","feraient"], correct:0, explain:"Au futur, \"faire\" devient : je ferai, ils feront !" },
    { id:"c2fc8", lvl:3, text:"À quel temps est le verbe dans \"Je mangeais une glace.\" ?", image:"🍦", answers:["à l'imparfait","au présent","au futur","au passé composé"], correct:0, explain:"La terminaison -ais est la marque de l'imparfait !" },
  ],

  // ─── CALCUL ───────────────────────────────────────────────────────
  math_calc: [
    { id:"c2mc1", lvl:1, text:"47 + 28 = ?", image:"➕", answers:["75","65","74","85"], correct:0, explain:"7 + 8 = 15 : je pose 5 et je retiens 1. Puis 4 + 2 + 1 = 7 → 75 !" },
    { id:"c2mc2", lvl:1, text:"9 × 4 = ?", image:"✖️", answers:["36","32","45","27"], correct:0, explain:"9 × 4 = 36 (table de 9) !" },
    { id:"c2mc3", lvl:2, text:"156 + 237 = ?", image:"🔢", answers:["393","383","493","392"], correct:0, explain:"6+7=13 → 3 retenue 1 ; 5+3+1=9 ; 1+2=3 → 393 !" },
    { id:"c2mc4", lvl:2, text:"7 × 8 = ?", image:"✖️", answers:["56","54","48","64"], correct:0, explain:"7 × 8 = 56 — une table à bien connaître !" },
    { id:"c2mc5", lvl:2, text:"100 − 64 = ?", image:"➖", answers:["36","46","44","34"], correct:0, explain:"Pour aller de 64 à 100 : 6 pour faire 70, puis 30 → 36 !" },
    { id:"c2mc6", lvl:3, text:"234 × 2 = ?", image:"✖️", answers:["468","438","464","428"], correct:0, explain:"200×2=400, 30×2=60, 4×2=8 → 468 !" },
    { id:"c2mc7", lvl:3, text:"68 + 9 = ?", image:"➕", answers:["77","78","76","87"], correct:0, explain:"Astuce : ajoute 10 puis enlève 1 → 78 − 1 = 77 !" },
    { id:"c2mc8", lvl:3, text:"25 × 4 = ?", image:"💯", answers:["100","80","90","125"], correct:0, explain:"25 × 4 = 100 — comme 4 pièces de 25 centimes font 1 euro !" },
  ],

  // ─── PROBLÈMES ────────────────────────────────────────────────────
  math_prob: [
    { id:"c2mp1", lvl:1, text:"Tom a 24 billes. Il en donne 9 à son ami. Combien lui en reste-t-il ?", image:"🔵", answers:["15 billes","33 billes","16 billes","14 billes"], correct:0, explain:"Il en donne, donc on enlève : 24 − 9 = 15 !" },
    { id:"c2mp2", lvl:1, text:"Il y a 3 paquets de 6 gâteaux. Combien de gâteaux en tout ?", image:"🍪", answers:["18 gâteaux","9 gâteaux","12 gâteaux","24 gâteaux"], correct:0, explain:"3 paquets de 6 : 3 × 6 = 18 !" },
    { id:"c2mp3", lvl:2, text:"Léa a 45 €. Elle dépense 18 €. Combien lui reste-t-il ?", image:"💶", answers:["27 €","63 €","37 €","26 €"], correct:0, explain:"Elle dépense, donc on enlève : 45 − 18 = 27 € !" },
    { id:"c2mp4", lvl:2, text:"Un fermier range 12 œufs dans chaque boîte. Il remplit 5 boîtes. Combien d'œufs ?", image:"🥚", answers:["60 œufs","17 œufs","50 œufs","65 œufs"], correct:0, explain:"5 boîtes de 12 : 5 × 12 = 60 !" },
    { id:"c2mp5", lvl:2, text:"Au match, il y a 128 spectateurs. 95 arrivent en plus. Combien en tout ?", image:"🏟️", answers:["223 spectateurs","213 spectateurs","33 spectateurs","233 spectateurs"], correct:0, explain:"On ajoute : 128 + 95 = 223 !" },
    { id:"c2mp6", lvl:3, text:"Zoé achète 3 livres à 7 € chacun. Elle paie avec 30 €. Combien lui rend-on ?", image:"📚", answers:["9 €","21 €","10 €","23 €"], correct:0, explain:"Deux étapes : 3 × 7 = 21 €, puis 30 − 21 = 9 € !" },
    { id:"c2mp7", lvl:3, text:"4 équipes de 8 joueurs sont prévues. 3 joueurs sont absents. Combien de joueurs présents ?", image:"⚽", answers:["29 joueurs","32 joueurs","28 joueurs","35 joueurs"], correct:0, explain:"Deux étapes : 4 × 8 = 32, puis 32 − 3 = 29 !" },
    { id:"c2mp8", lvl:3, text:"Une école a 250 élèves. 85 partent en sortie, puis 40 à la piscine. Combien restent ?", image:"🏫", answers:["125 élèves","165 élèves","135 élèves","115 élèves"], correct:0, explain:"250 − 85 = 165, puis 165 − 40 = 125 !" },
  ],

  // ─── FRACTIONS ────────────────────────────────────────────────────
  math_frac: [
    { id:"c2mf1", lvl:1, text:"Quelle est la moitié de 10 ?", image:"🍎", answers:["5","2","10","20"], correct:0, explain:"La moitié de 10, c'est 10 partagé en 2 : 5 !" },
    { id:"c2mf2", lvl:1, text:"Une pizza est coupée en 2 parts égales. Une part, c'est quelle fraction ?", image:"🍕", answers:["1/2","1/4","2/1","1/3"], correct:0, explain:"Une part sur deux s'écrit 1/2 — on dit \"un demi\" !" },
    { id:"c2mf3", lvl:2, text:"Combien font 1/4 de 20 ?", image:"🍰", answers:["5","4","10","15"], correct:0, explain:"On partage 20 en 4 parts égales : 20 ÷ 4 = 5 !" },
    { id:"c2mf4", lvl:2, text:"Un gâteau est coupé en 4 parts. On en mange 3. Quelle fraction a été mangée ?", image:"🎂", answers:["3/4","4/3","1/4","3/1"], correct:0, explain:"3 parts sur 4 s'écrit 3/4 !" },
    { id:"c2mf5", lvl:2, text:"Combien font 1/3 de 9 ?", image:"🍊", answers:["3","9","6","1"], correct:0, explain:"On partage 9 en 3 parts égales : 9 ÷ 3 = 3 !" },
    { id:"c2mf6", lvl:3, text:"À quelle fraction 2/4 est-elle égale ?", image:"⚖️", answers:["1/2","1/4","2/2","3/4"], correct:0, explain:"2/4, c'est la moitié : 2/4 = 1/2 !" },
    { id:"c2mf7", lvl:3, text:"Quelle fraction est la plus grande : 1/2 ou 1/4 ?", image:"📊", answers:["1/2","1/4","elles sont égales","on ne peut pas savoir"], correct:0, explain:"Moins il y a de parts, plus elles sont grosses : 1/2 > 1/4 !" },
    { id:"c2mf8", lvl:3, text:"Combien font 3/4 + 1/4 ?", image:"🧩", answers:["1 entier","4/8","2/4","3/8"], correct:0, explain:"3 parts + 1 part = 4 parts sur 4, soit le gâteau entier : 1 !" },
  ],

  // ─── LES NOMBRES ──────────────────────────────────────────────────
  math_num: [
    { id:"c2mn1", lvl:1, text:"Dans 472, quel est le chiffre des centaines ?", image:"💯", answers:["4","7","2","47"], correct:0, explain:"Dans 472 : 4 centaines, 7 dizaines, 2 unités !" },
    { id:"c2mn2", lvl:1, text:"Quel nombre vient juste après 999 ?", image:"🔢", answers:["1000","9910","99","1999"], correct:0, explain:"Après 999 vient 1000 — on passe au millier !" },
    { id:"c2mn3", lvl:2, text:"Quelle est la décomposition de 2 345 ?", image:"🧮", answers:["2000 + 300 + 40 + 5","2000 + 30 + 40 + 5","200 + 300 + 40 + 5","2000 + 300 + 4 + 5"], correct:0, explain:"2 milliers, 3 centaines, 4 dizaines, 5 unités !" },
    { id:"c2mn4", lvl:2, text:"Quel nombre est le plus grand : 3 210 ou 3 120 ?", image:"📈", answers:["3 210","3 120","ils sont égaux","on ne peut pas savoir"], correct:0, explain:"Même millier : on compare les centaines, 2 > 1 → 3 210 !" },
    { id:"c2mn5", lvl:2, text:"Dans 5 678, quel est le chiffre des milliers ?", image:"🔟", answers:["5","6","7","8"], correct:0, explain:"5 678 = 5 milliers, 6 centaines, 7 dizaines, 8 unités !" },
    { id:"c2mn6", lvl:3, text:"Quel nombre vaut 7 000 + 400 + 60 + 3 ?", image:"🧮", answers:["7 463","7 436","7 643","74 63"], correct:0, explain:"7 milliers, 4 centaines, 6 dizaines, 3 unités → 7 463 !" },
    { id:"c2mn7", lvl:3, text:"Quel est le plus petit : 4 102, 4 012, 4 120 ou 4 021 ?", image:"📉", answers:["4 012","4 021","4 102","4 120"], correct:0, explain:"Tous ont 4 milliers : on compare les centaines, 0 est le plus petit, puis 1 < 2 → 4 012 !" },
    { id:"c2mn8", lvl:3, text:"Combien y a-t-il de dizaines dans 340 ?", image:"📦", answers:["34","3","40","304"], correct:0, explain:"340 = 34 paquets de 10 → 34 dizaines !" },
  ],

  // ─── GÉOMÉTRIE ────────────────────────────────────────────────────
  math_geo: [
    { id:"c2mg1", lvl:1, text:"Quelle figure a 4 côtés égaux et 4 angles droits ?", image:"⬜", answers:["le carré","le triangle","le cercle","le losange"], correct:0, explain:"Le carré : 4 côtés de même longueur et 4 angles droits !" },
    { id:"c2mg2", lvl:1, text:"Combien de côtés a un triangle ?", image:"🔺", answers:["3","4","5","2"], correct:0, explain:"Tri- veut dire trois : un triangle a 3 côtés !" },
    { id:"c2mg3", lvl:2, text:"Quel instrument sert à vérifier un angle droit ?", image:"📐", answers:["l'équerre","la règle","le compas","le rapporteur"], correct:0, explain:"L'équerre a un angle droit : on la pose sur le coin à vérifier !" },
    { id:"c2mg4", lvl:2, text:"Combien d'angles droits a un rectangle ?", image:"▭", answers:["4","2","3","0"], correct:0, explain:"Le rectangle a 4 angles droits, comme le carré !" },
    { id:"c2mg5", lvl:2, text:"Comment s'appelle un polygone à 5 côtés ?", image:"⬟", answers:["un pentagone","un hexagone","un quadrilatère","un octogone"], correct:0, explain:"Penta- veut dire cinq : un pentagone a 5 côtés !" },
    { id:"c2mg6", lvl:3, text:"Quel est le périmètre d'un carré de 6 cm de côté ?", image:"📏", answers:["24 cm","12 cm","36 cm","18 cm"], correct:0, explain:"Le périmètre fait le tour : 6 + 6 + 6 + 6 = 24 cm !" },
    { id:"c2mg7", lvl:3, text:"Quel est le périmètre d'un rectangle de 8 cm sur 3 cm ?", image:"📐", answers:["22 cm","24 cm","11 cm","19 cm"], correct:0, explain:"8 + 3 + 8 + 3 = 22 cm !" },
    { id:"c2mg8", lvl:3, text:"Combien le carré a-t-il d'axes de symétrie ?", image:"🪞", answers:["4","2","1","0"], correct:0, explain:"Le carré se plie en deux de 4 façons : 2 médianes et 2 diagonales !" },
  ],

  // ─── COMPRENDRE UN TEXTE (inférences) ─────────────────────────────
  comp_texte: [
    { id:"c2ct1", lvl:1, text:"\"Léa met ses bottes, son manteau et prend son parapluie.\" Quel temps fait-il ?", image:"☔", answers:["Il pleut","Il fait très chaud","Il neige","Il y a du soleil"], correct:0, explain:"Bottes + parapluie : le texte ne le dit pas, mais c'est la pluie !" },
    { id:"c2ct2", lvl:1, text:"\"Tom souffle les bougies et ouvre ses cadeaux.\" Que fête-t-il ?", image:"🎂", answers:["Son anniversaire","Noël","La rentrée","Un mariage"], correct:0, explain:"Bougies + cadeaux = un anniversaire !" },
    { id:"c2ct3", lvl:2, text:"\"Le chat se cache sous le lit quand l'orage gronde.\" Pourquoi se cache-t-il ?", image:"🐱", answers:["Il a peur du bruit","Il a faim","Il veut dormir","Il joue"], correct:0, explain:"On le devine : le tonnerre lui fait peur !" },
    { id:"c2ct4", lvl:2, text:"\"Papa regarde sa montre et marche de plus en plus vite.\" Pourquoi ?", image:"⌚", answers:["Il est en retard","Il a froid","Il est perdu","Il fait du sport"], correct:0, explain:"Regarder sa montre et accélérer : il craint d'être en retard !" },
    { id:"c2ct5", lvl:2, text:"\"Maya rend son livre et en emprunte un autre.\" Où est-elle ?", image:"📚", answers:["À la bibliothèque","Au supermarché","À la piscine","Au cinéma"], correct:0, explain:"On emprunte et on rend des livres à la bibliothèque !" },
    { id:"c2ct6", lvl:3, text:"\"Le ciel se couvre, les oiseaux se taisent, le vent se lève.\" Que va-t-il se passer ?", image:"🌩️", answers:["Un orage arrive","Le soleil va briller","La nuit tombe","Il va neiger"], correct:0, explain:"Tous ces indices annoncent l'orage !" },
    { id:"c2ct7", lvl:3, text:"\"Zoé relit sa leçon trois fois avant de dormir.\" Que prépare-t-elle ?", image:"📝", answers:["Une évaluation","Un voyage","Un repas","Un spectacle"], correct:0, explain:"Relire sa leçon plusieurs fois : elle révise pour un contrôle !" },
    { id:"c2ct8", lvl:3, text:"\"Le boulanger sort le pain du four, la rue est encore vide.\" Quel moment est-ce ?", image:"🥖", answers:["Tôt le matin","En pleine nuit","À midi","Le soir"], correct:0, explain:"Le boulanger travaille très tôt, avant que les gens se lèvent !" },
  ],

  // ─── COMPRENDRE LES PHRASES ───────────────────────────────────────
  comp_phrases: [
    { id:"c2cp1", lvl:1, text:"Quel mot donne du sens ? \"Le chien ___ dans le jardin.\"", image:"🐕", answers:["aboie","nage","vole","lit"], correct:0, explain:"Un chien aboie — c'est le seul mot qui a du sens ici !" },
    { id:"c2cp2", lvl:1, text:"Quel mot donne du sens ? \"Je bois un verre d'___.\"", image:"💧", answers:["eau","air","or","herbe"], correct:0, explain:"On boit de l'eau !" },
    { id:"c2cp3", lvl:2, text:"Quel mot donne du sens ? \"L'oiseau ___ dans le ciel.\"", image:"🐦", answers:["vole","nage","creuse","dort"], correct:0, explain:"Dans le ciel, l'oiseau vole !" },
    { id:"c2cp4", lvl:2, text:"Quel mot donne du sens ? \"La maîtresse ___ au tableau.\"", image:"👩‍🏫", answers:["écrit","mange","court","nage"], correct:0, explain:"Au tableau, la maîtresse écrit !" },
    { id:"c2cp5", lvl:2, text:"Quel mot donne du sens ? \"On range les livres dans la ___.\"", image:"📚", answers:["bibliothèque","baignoire","casserole","voiture"], correct:0, explain:"Les livres se rangent dans une bibliothèque !" },
    { id:"c2cp6", lvl:3, text:"Quel mot donne du sens ? \"Le gâteau cuit dans le ___.\"", image:"🎂", answers:["four","frigo","placard","tiroir"], correct:0, explain:"Pour cuire, il faut de la chaleur : le four !" },
    { id:"c2cp7", lvl:3, text:"Quel mot donne du sens ? \"Pour couper le pain, j'utilise un ___.\"", image:"🥖", answers:["couteau","crayon","ballon","pinceau"], correct:0, explain:"On coupe le pain avec un couteau !" },
    { id:"c2cp8", lvl:3, text:"Quel mot donne du sens ? \"En hiver, il ___ souvent dans les montagnes.\"", image:"❄️", answers:["neige","fleurit","bronze","moissonne"], correct:0, explain:"En hiver, en montagne, il neige !" },
  ],

  // ─── ÉCRITURE DE MOTS ─────────────────────────────────────────────
  ecriture_mots: [
    { id:"c2em1", lvl:1, text:"Quel mot est bien écrit ?", image:"✏️", answers:["beaucoup","beacoup","bocoup","beaucou"], correct:0, explain:"\"Beaucoup\" : b-e-a-u-c-o-u-p, avec un p muet à la fin !" },
    { id:"c2em2", lvl:1, text:"Quel mot est bien écrit ?", image:"🔁", answers:["toujours","toujour","tousjours","toujourd"], correct:0, explain:"\"Toujours\" prend toujours un s à la fin !" },
    { id:"c2em3", lvl:2, text:"Quel mot est bien écrit ?", image:"⏰", answers:["maintenant","maintenan","mintenant","maitenant"], correct:0, explain:"\"Maintenant\" : main-te-nant !" },
    { id:"c2em4", lvl:2, text:"Quel mot est bien écrit ?", image:"❓", answers:["pourquoi","pourcoi","pourquoa","pour quoi"], correct:0, explain:"\"Pourquoi\" s'écrit en un seul mot !" },
    { id:"c2em5", lvl:2, text:"Quel mot est bien écrit ?", image:"👨‍👩‍👧", answers:["famille","famile","familles","fammille"], correct:0, explain:"\"Famille\" prend deux l : fa-mi-lle !" },
    { id:"c2em6", lvl:3, text:"Quel mot est bien écrit ?", image:"📅", answers:["demain","demin","demain-t","demein"], correct:0, explain:"\"Demain\" : de-main, comme la main !" },
    { id:"c2em7", lvl:3, text:"Quel mot est bien écrit ?", image:"🗓️", answers:["aujourd'hui","aujourdhui","ojourd'hui","aujourd'uit"], correct:0, explain:"\"Aujourd'hui\" prend une apostrophe au milieu !" },
    { id:"c2em8", lvl:3, text:"Quel mot est bien écrit ?", image:"⏳", answers:["longtemps","lontemps","longtemp","long-temps"], correct:0, explain:"\"Longtemps\" : long + temps, collés, avec un s !" },
  ],

  // ─── LIGNE GRADUÉE ────────────────────────────────────────────────
  ligne_graduee: [
    { id:"c2lg1", lvl:1, text:"Sur une ligne de 0 à 100 graduée de 10 en 10, quel nombre est à la 3e graduation ?", image:"📏", answers:["30","3","13","300"], correct:0, explain:"10, 20, 30 → la 3e graduation est 30 !" },
    { id:"c2lg2", lvl:1, text:"Quel nombre est juste au milieu entre 0 et 100 ?", image:"📐", answers:["50","10","100","25"], correct:0, explain:"Le milieu de 0 et 100, c'est 50 !" },
    { id:"c2lg3", lvl:2, text:"Sur une ligne de 100 à 200 graduée de 10 en 10, quel nombre est à la 5e graduation ?", image:"📏", answers:["150","105","115","500"], correct:0, explain:"110, 120, 130, 140, 150 → c'est 150 !" },
    { id:"c2lg4", lvl:2, text:"Quel nombre est juste au milieu entre 200 et 300 ?", image:"📐", answers:["250","230","205","275"], correct:0, explain:"Le milieu de 200 et 300, c'est 250 !" },
    { id:"c2lg5", lvl:2, text:"Sur une ligne graduée de 10 en 10, quel nombre vient juste avant 1 000 ?", image:"🔢", answers:["990","900","999","1010"], correct:0, explain:"En reculant de 10 depuis 1 000 : 990 !" },
    { id:"c2lg6", lvl:3, text:"Sur une ligne de 0 à 1 000 graduée de 100 en 100, quel nombre est à la 7e graduation ?", image:"📏", answers:["700","70","7","770"], correct:0, explain:"100, 200, 300, 400, 500, 600, 700 → c'est 700 !" },
    { id:"c2lg7", lvl:3, text:"Quel nombre est juste au milieu entre 0 et 1 000 ?", image:"📐", answers:["500","100","50","550"], correct:0, explain:"Le milieu de 0 et 1 000, c'est 500 !" },
    { id:"c2lg8", lvl:3, text:"Quel nombre est juste au milieu entre 1 000 et 2 000 ?", image:"🔢", answers:["1 500","1 050","1 200","1 750"], correct:0, explain:"Le milieu de 1 000 et 2 000, c'est 1 500 !" },
  ],

  // ─── GÉOMÉTRIE & MESURES ──────────────────────────────────────────
  geo_problemes: [
    { id:"c2gp1", lvl:1, text:"Combien y a-t-il de centimètres dans 1 mètre ?", image:"📏", answers:["100 cm","10 cm","1 000 cm","50 cm"], correct:0, explain:"1 m = 100 cm !" },
    { id:"c2gp2", lvl:1, text:"Combien y a-t-il de minutes dans une heure ?", image:"🕐", answers:["60 minutes","100 minutes","30 minutes","24 minutes"], correct:0, explain:"Une heure dure 60 minutes !" },
    { id:"c2gp3", lvl:2, text:"Combien y a-t-il de mètres dans 1 kilomètre ?", image:"🛣️", answers:["1 000 m","100 m","10 m","500 m"], correct:0, explain:"Kilo veut dire mille : 1 km = 1 000 m !" },
    { id:"c2gp4", lvl:2, text:"Combien y a-t-il de grammes dans 1 kilogramme ?", image:"⚖️", answers:["1 000 g","100 g","10 g","500 g"], correct:0, explain:"1 kg = 1 000 g !" },
    { id:"c2gp5", lvl:2, text:"Quel est le périmètre d'un carré de 5 cm de côté ?", image:"⬜", answers:["20 cm","10 cm","25 cm","15 cm"], correct:0, explain:"5 + 5 + 5 + 5 = 20 cm !" },
    { id:"c2gp6", lvl:3, text:"Combien font 2 m et 50 cm en centimètres ?", image:"📐", answers:["250 cm","2 050 cm","25 cm","205 cm"], correct:0, explain:"2 m = 200 cm, plus 50 cm → 250 cm !" },
    { id:"c2gp7", lvl:3, text:"Quel est le périmètre d'un rectangle de 10 cm sur 4 cm ?", image:"▭", answers:["28 cm","14 cm","40 cm","24 cm"], correct:0, explain:"10 + 4 + 10 + 4 = 28 cm !" },
    { id:"c2gp8", lvl:3, text:"Combien y a-t-il de millilitres dans 1 litre ?", image:"🧴", answers:["1 000 mL","100 mL","10 mL","500 mL"], correct:0, explain:"1 L = 1 000 mL !" },
  ],

  // ─── ÉCRIRE LES NOMBRES EN LETTRES ────────────────────────────────
  ecrire_nombres: [
    { id:"c2en1", lvl:1, text:"Quel nombre s'écrit \"quatre-vingts\" ?", image:"🔤", answers:["80","40","20","90"], correct:0, explain:"Quatre-vingts = 4 × 20 = 80 !" },
    { id:"c2en2", lvl:1, text:"Quel nombre s'écrit \"soixante-douze\" ?", image:"🔤", answers:["72","62","82","612"], correct:0, explain:"Soixante (60) + douze (12) = 72 !" },
    { id:"c2en3", lvl:2, text:"Quel nombre s'écrit \"deux cent quarante\" ?", image:"🔢", answers:["240","204","2 040","224"], correct:0, explain:"Deux cents (200) + quarante (40) = 240 !" },
    { id:"c2en4", lvl:2, text:"Quel nombre s'écrit \"quatre-vingt-dix-neuf\" ?", image:"🔤", answers:["99","89","79","4 019"], correct:0, explain:"Quatre-vingt-dix (90) + neuf (9) = 99 !" },
    { id:"c2en5", lvl:2, text:"Quel nombre s'écrit \"mille cinq cents\" ?", image:"🔢", answers:["1 500","1 050","150","15 000"], correct:0, explain:"Mille (1 000) + cinq cents (500) = 1 500 !" },
    { id:"c2en6", lvl:3, text:"Quel nombre s'écrit \"trois mille deux cents\" ?", image:"🔢", answers:["3 200","3 020","32 000","3 002"], correct:0, explain:"Trois mille (3 000) + deux cents (200) = 3 200 !" },
    { id:"c2en7", lvl:3, text:"Comment écrit-on 605 en lettres ?", image:"✍️", answers:["six cent cinq","six cents cinq","soixante-cinq","six cent cinquante"], correct:0, explain:"\"Cent\" ne prend pas de s quand un nombre le suit : six cent cinq !" },
    { id:"c2en8", lvl:3, text:"Comment écrit-on 1 080 en lettres ?", image:"✍️", answers:["mille quatre-vingts","mille huitante","mille quatre-vingt","cent quatre-vingts"], correct:0, explain:"1 000 + 80 → mille quatre-vingts, avec un s car rien ne suit !" },
  ],

  // ─── SOUSTRACTION ─────────────────────────────────────────────────
  soustraction: [
    { id:"c2so1", lvl:1, text:"52 − 27 = ?", image:"➖", answers:["25","35","24","32"], correct:0, explain:"2 − 7 impossible : j'emprunte. 12 − 7 = 5, puis 4 − 2 = 2 → 25 !" },
    { id:"c2so2", lvl:1, text:"80 − 35 = ?", image:"➖", answers:["45","55","44","35"], correct:0, explain:"80 − 30 = 50, puis 50 − 5 = 45 !" },
    { id:"c2so3", lvl:2, text:"145 − 68 = ?", image:"🔢", answers:["77","87","76","83"], correct:0, explain:"145 − 68 : 145 − 70 = 75, puis +2 → 77 !" },
    { id:"c2so4", lvl:2, text:"200 − 123 = ?", image:"➖", answers:["77","87","67","177"], correct:0, explain:"De 123 à 200 : 77 !" },
    { id:"c2so5", lvl:2, text:"90 − 9 = ?", image:"➖", answers:["81","91","89","71"], correct:0, explain:"90 − 10 = 80, puis +1 → 81 !" },
    { id:"c2so6", lvl:3, text:"304 − 158 = ?", image:"🔢", answers:["146","156","144","246"], correct:0, explain:"De 158 à 304 : 42 pour aller à 200, puis 104 → 146 !" },
    { id:"c2so7", lvl:3, text:"1 000 − 250 = ?", image:"💯", answers:["750","850","650","780"], correct:0, explain:"250 + 750 = 1 000 → la réponse est 750 !" },
    { id:"c2so8", lvl:3, text:"523 − 47 = ?", image:"➖", answers:["476","486","466","576"], correct:0, explain:"523 − 50 = 473, puis +3 → 476 !" },
  ],
};

// Fusion dans les modules existants (jamais de remplacement)
Object.keys(CE2_EXTRA).forEach(function (key) {
  var mod = typeof modules !== "undefined" ? modules[key] : null;
  if (mod && Array.isArray(mod.questions)) {
    var existing = {};
    mod.questions.forEach(function (q) { existing[q.id] = true; });
    CE2_EXTRA[key].forEach(function (q) { if (!existing[q.id]) mod.questions.push(q); });
  }
});


// =====================================================================
// ATELIER 1 — DÉNOMBRER DES COLLECTIONS
// Format Repères : compter des cubes groupés, écrire le total en chiffres
// =====================================================================
const DENOMBREMENT = [
  { id:"dn1",  lvl:1, h:1, t:3, u:4 },
  { id:"dn2",  lvl:1, h:2, t:0, u:5 },
  { id:"dn3",  lvl:1, h:1, t:5, u:2 },
  { id:"dn4",  lvl:2, h:2, t:4, u:7 },
  { id:"dn5",  lvl:2, h:3, t:6, u:1 },
  { id:"dn6",  lvl:2, h:4, t:0, u:8 },
  { id:"dn7",  lvl:2, h:2, t:7, u:3 },
  { id:"dn8",  lvl:3, h:5, t:3, u:9 },
  { id:"dn9",  lvl:3, h:6, t:8, u:4 },
  { id:"dn10", lvl:3, h:7, t:0, u:6 },
];

// =====================================================================
// ATELIER 2 — PROBLÈMES ENTENDUS
// Format Repères : énoncé lu à voix haute, résultat choisi parmi 6
// =====================================================================
const PROB_ECOUTE = [
  { id:"pe1", lvl:1, enonce:"Dans son album, Tom a douze images. Son frère lui en donne sept de plus. Combien Tom a-t-il d'images en tout ?",
    rep:19, opts:[19,5,18,20,17,21], unite:"images", aide:"Il en reçoit en plus : on ajoute. 12 + 7 = 19." },
  { id:"pe2", lvl:1, enonce:"Léa avait vingt bonbons. Elle en a mangé huit. Combien lui en reste-t-il ?",
    rep:12, opts:[12,28,13,11,18,22], unite:"bonbons", aide:"Elle en mange, donc on enlève. 20 − 8 = 12." },
  { id:"pe3", lvl:2, enonce:"Dans la classe, il y a dix-huit cahiers rouges. La maîtresse en apporte quinze de plus. Combien y a-t-il de cahiers en tout ?",
    rep:33, opts:[33,23,3,32,43,13], unite:"cahiers", aide:"On ajoute : 18 + 15 = 33." },
  { id:"pe4", lvl:2, enonce:"Un livre coûte quarante-cinq euros. Zoé a dix-neuf euros. Combien lui manque-t-il ?",
    rep:26, opts:[26,64,24,36,25,16], unite:"euros", aide:"Ce qui manque : 45 − 19 = 26." },
  { id:"pe5", lvl:2, enonce:"Il y a trente-six élèves dans la cour. Vingt-huit autres arrivent. Combien d'élèves en tout ?",
    rep:64, opts:[64,54,8,63,74,62], unite:"élèves", aide:"On ajoute : 36 + 28 = 64." },
  { id:"pe6", lvl:2, enonce:"Le car a soixante places. Vingt-quatre sont déjà prises. Combien reste-t-il de places libres ?",
    rep:36, opts:[36,84,46,34,26,44], unite:"places", aide:"On enlève : 60 − 24 = 36." },
  { id:"pe7", lvl:3, enonce:"La bibliothèque a vingt-cinq livres de contes et trente-huit livres d'aventure. Combien de livres en tout ?",
    rep:63, opts:[63,13,53,64,73,62], unite:"livres", aide:"On réunit les deux : 25 + 38 = 63." },
  { id:"pe8", lvl:3, enonce:"Maya avait cinquante images. Elle en a donné douze à Lou, puis quinze à Tom. Combien lui en reste-t-il ?",
    rep:23, opts:[23,27,33,38,13,22], unite:"images", aide:"Deux étapes : 50 − 12 = 38, puis 38 − 15 = 23." },
  { id:"pe9", lvl:3, enonce:"Le fleuriste prépare trois bouquets. Dans chaque bouquet, il met quinze fleurs. Combien de fleurs utilise-t-il ?",
    rep:45, opts:[45,18,35,50,40,55], unite:"fleurs", aide:"Trois fois quinze : 3 × 15 = 45." },
  { id:"pe10", lvl:3, enonce:"Le stade peut accueillir cent vingt personnes. Quarante-cinq sièges sont cassés. Combien de places utilisables ?",
    rep:75, opts:[75,165,85,65,74,95], unite:"places", aide:"On enlève : 120 − 45 = 75." },
];

// =====================================================================
// ATELIER 3 — ACCORDER LE NOM ET L'ADJECTIF
// Format Repères : choisir l'adjectif accordé dans le groupe nominal
// =====================================================================
const ACCORD_GN = [
  { id:"ag1",  lvl:1, det:"les",  nom:"feuilles", genre:"FÉMININ PLURIEL",   opts:["vertes","verte","vert","verts"],
    aide:"« feuilles » est féminin pluriel → l'adjectif prend -e ET -s : vertes." },
  { id:"ag2",  lvl:1, det:"un",   nom:"chien",    genre:"MASCULIN SINGULIER", opts:["noir","noire","noirs","noires"],
    aide:"« un chien » est masculin singulier → l'adjectif ne change pas : noir." },
  { id:"ag3",  lvl:1, det:"une",  nom:"robe",     genre:"FÉMININ SINGULIER",  opts:["bleue","bleu","bleues","bleus"],
    aide:"« une robe » est féminin singulier → on ajoute seulement -e : bleue." },
  { id:"ag4",  lvl:2, det:"des",  nom:"gâteaux",  genre:"MASCULIN PLURIEL",   opts:["délicieux","délicieuse","délicieuses","délicieu"],
    aide:"Les adjectifs en -eux ne changent pas au masculin pluriel : délicieux." },
  { id:"ag5",  lvl:2, det:"les",  nom:"garçons",  genre:"MASCULIN PLURIEL",   opts:["petits","petit","petite","petites"],
    aide:"« garçons » est masculin pluriel → on ajoute -s : petits." },
  { id:"ag6",  lvl:2, det:"des",  nom:"fleurs",   genre:"FÉMININ PLURIEL",    opts:["blanches","blanche","blancs","blanc"],
    aide:"blanc devient blanche au féminin, puis -s au pluriel : blanches." },
  { id:"ag7",  lvl:2, det:"un",   nom:"arbre",    genre:"MASCULIN SINGULIER", opts:["grand","grande","grands","grandes"],
    aide:"« un arbre » est masculin singulier → grand, sans marque." },
  { id:"ag8",  lvl:3, det:"les",  nom:"histoires",genre:"FÉMININ PLURIEL",    opts:["drôles","drôle","drôls","drôlles"],
    aide:"L'adjectif finit déjà par -e : on ajoute seulement le -s du pluriel : drôles." },
  { id:"ag9",  lvl:3, det:"une",  nom:"école",    genre:"FÉMININ SINGULIER",  opts:["nouvelle","nouveau","nouvelles","nouveaux"],
    aide:"nouveau devient nouvelle au féminin singulier." },
  { id:"ag10", lvl:3, det:"des",  nom:"chevaux",  genre:"MASCULIN PLURIEL",   opts:["rapides","rapide","rapids","rapidves"],
    aide:"L'adjectif finit par -e : on ajoute juste le -s : rapides." },
];

// =====================================================================
// ATELIER 4 — LES MOTS DE LA MÊME FAMILLE (trouver l'intrus)
// Format Repères : repérer le mot qui n'appartient pas à la famille
// =====================================================================
const FAMILLES = [
  { id:"fa1",  lvl:1, mots:["dentiste","dentaire","dentition","dentelle"], intrus:"dentelle", radical:"dent",
    aide:"dentiste, dentaire et dentition parlent des DENTS. « dentelle » est un tissu : juste un sosie !" },
  { id:"fa2",  lvl:1, mots:["chant","chanteur","chanson","chantier"], intrus:"chantier", radical:"chant",
    aide:"chant, chanteur et chanson parlent de CHANTER. Un « chantier », c'est un lieu de travaux !" },
  { id:"fa3",  lvl:1, mots:["fleur","fleuriste","fleurir","fleuve"], intrus:"fleuve", radical:"fleur",
    aide:"fleur, fleuriste et fleurir parlent des FLEURS. Un « fleuve », c'est une grande rivière !" },
  { id:"fa4",  lvl:2, mots:["terre","terrain","terrasse","terrible"], intrus:"terrible", radical:"terr",
    aide:"terre, terrain et terrasse parlent du SOL. « terrible » veut dire effrayant !" },
  { id:"fa5",  lvl:2, mots:["lait","laitier","laitage","laisse"], intrus:"laisse", radical:"lait",
    aide:"lait, laitier et laitage parlent du LAIT. Une « laisse », c'est pour promener le chien !" },
  { id:"fa6",  lvl:2, mots:["mer","marin","maritime","merci"], intrus:"merci", radical:"mer",
    aide:"mer, marin et maritime parlent de la MER. « merci », c'est pour remercier !" },
  { id:"fa7",  lvl:2, mots:["jour","journée","journal","jouet"], intrus:"jouet", radical:"jour",
    aide:"jour, journée et journal parlent du JOUR. Un « jouet », c'est pour jouer !" },
  { id:"fa8",  lvl:3, mots:["livre","librairie","libraire","libre"], intrus:"libre", radical:"livr / libr",
    aide:"livre, librairie et libraire parlent des LIVRES. « libre » veut dire sans contrainte !" },
  { id:"fa9",  lvl:3, mots:["porte","portail","portière","portrait"], intrus:"portrait", radical:"port",
    aide:"porte, portail et portière servent à ENTRER. Un « portrait », c'est un dessin de quelqu'un !" },
  { id:"fa10", lvl:3, mots:["danse","danseur","dansant","dentier"], intrus:"dentier", radical:"dans",
    aide:"danse, danseur et dansant parlent de DANSER. Un « dentier », ce sont de fausses dents !" },
];

// =====================================================================
// TEXTES ENTENDUS — « Comprendre un texte et des phrases entendus »
// Format Repères : le texte est lu DEUX FOIS, jamais affiché
// =====================================================================
const TEXTES_ECOUTE = [
  {
    id:"te1", lvl:1, titre:"La surprise de Nina", image:"🎁",
    texte:"Ce matin, Nina se réveille très tôt. Elle entend un petit bruit dans la cuisine. Elle descend l'escalier sans faire de bruit. Sur la table, il y a un gâteau avec des bougies. Son papa a tout préparé pendant la nuit. Nina sourit : elle avait complètement oublié que c'était son anniversaire !",
    questions:[
      { id:"teq1", text:"Où Nina entend-elle un bruit ?", answers:["Dans la cuisine","Dans le jardin","Dans sa chambre","Dans la rue"], correct:0, explain:"Le texte dit qu'elle entend un bruit dans la cuisine." },
      { id:"teq2", text:"Qui a préparé le gâteau ?", answers:["Son papa","Sa maman","Sa sœur","Sa grand-mère"], correct:0, explain:"C'est son papa qui a tout préparé pendant la nuit." },
      { id:"teq3", text:"Pourquoi Nina sourit-elle à la fin ?", answers:["Elle avait oublié son anniversaire","Elle a eu peur","Elle a faim","Elle est en retard"], correct:0, explain:"Elle sourit parce qu'elle avait oublié que c'était son anniversaire !" },
    ]
  },
  {
    id:"te2", lvl:2, titre:"Le secret du vieux chêne", image:"🌳",
    texte:"Au fond du parc se dresse un très vieux chêne. Chaque automne, les enfants viennent ramasser ses glands. Un jour, Sacha remarque un trou dans le tronc. Il s'approche doucement et entend des petits cris. Une famille d'écureuils s'est installée à l'intérieur. Sacha ne dit rien à personne : il veut que les écureuils restent tranquilles.",
    questions:[
      { id:"teq4", text:"Que viennent ramasser les enfants ?", answers:["Des glands","Des pommes","Des feuilles","Des châtaignes"], correct:0, explain:"Chaque automne, les enfants ramassent les glands du chêne." },
      { id:"teq5", text:"Qu'y a-t-il dans le trou du tronc ?", answers:["Une famille d'écureuils","Des oiseaux","Un nid de guêpes","Un trésor"], correct:0, explain:"Une famille d'écureuils s'est installée à l'intérieur." },
      { id:"teq6", text:"Pourquoi Sacha garde-t-il le secret ?", answers:["Pour ne pas déranger les écureuils","Pour garder le trésor","Parce qu'il a peur","Parce qu'il a oublié"], correct:0, explain:"Il veut que les écureuils restent tranquilles : il les protège." },
    ]
  },
  {
    id:"te3", lvl:3, titre:"La course sous la pluie", image:"🏃‍♀️",
    texte:"Le jour de la course, le ciel est gris. Camille a beaucoup entraîné ses jambes tout l'été. Au départ, la pluie se met à tomber très fort. Plusieurs coureurs glissent et abandonnent. Camille, elle, ralentit et pose ses pieds avec soin. Elle arrive la dernière, mais l'entraîneur l'applaudit plus fort que les autres. Il dit qu'elle a été la plus intelligente de la course.",
    questions:[
      { id:"teq7", text:"Quel temps fait-il pendant la course ?", answers:["Il pleut très fort","Il fait grand soleil","Il neige","Il y a du brouillard"], correct:0, explain:"Au départ, la pluie se met à tomber très fort." },
      { id:"teq8", text:"Pourquoi plusieurs coureurs abandonnent-ils ?", answers:["Ils glissent à cause de la pluie","Ils sont fatigués","Ils se sont perdus","Ils ont froid"], correct:0, explain:"Le texte dit que plusieurs coureurs glissent et abandonnent." },
      { id:"teq9", text:"Pourquoi l'entraîneur applaudit-il Camille si fort ?", answers:["Elle a su s'adapter à la pluie","Elle est arrivée première","Elle a couru le plus vite","Elle a aidé un autre coureur"], correct:0, explain:"Elle a ralenti pour ne pas glisser : l'entraîneur trouve qu'elle a été la plus intelligente." },
    ]
  },
];
