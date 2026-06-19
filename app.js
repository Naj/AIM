function init() {
  checkStreak();
  updateStarDisplay();
  updateXpBar();
  updateStreakPill();
  renderHomeModules();
  registerServiceWorker();
  handleOffline();
}

function renderHomeModules() {
  // Update level badges for ALL modules (QCM + non-QCM)
  const allModuleKeys = [
    ...Object.keys(modules),
    'flashcards','karaoke','puzzle','lecture','dictee','oral','conj_oral','memory'
  ];
  allModuleKeys.forEach(key => {
    const badge = document.getElementById('badge-' + key);
    if (badge) {
      const lvl = getUnlockedLevel(key);
      const maxLvl = (typeof MAX_LEVELS !== 'undefined' && MAX_LEVELS[key]) || 3;
      const stars = '⭐'.repeat(Math.min(lvl, 3));
      badge.textContent = `${stars} Niveau ${lvl}`;
      if (lvl >= maxLvl) {
        badge.style.background = 'linear-gradient(90deg, var(--purple), #c084fc)';
      } else if (lvl >= 3) {
        badge.style.background = 'linear-gradient(90deg, #e67e22, #f39c12)';
      } else if (lvl >= 2) {
        badge.style.background = 'linear-gradient(90deg, var(--sky), #3498db)';
      } else {
        badge.style.background = 'linear-gradient(90deg, var(--grass), #27ae60)';
      }
    }
  });

  // Badge count display
  const earned = state.earnedBadges || [];
  const badgeCountEl = document.getElementById('badge-count-display');
  if (badgeCountEl) {
    badgeCountEl.textContent = earned.length + ' / ' + BADGES_DEF.length;
    badgeCountEl.style.background = earned.length > 0 ? 'var(--sun)' : '#ccc';
  }

  // Défi du jour badge
  const todayKey = new Date().toISOString().split('T')[0];
  const defiBadge = document.getElementById('defiBadgeDot');
  if (defiBadge) defiBadge.style.display = (state.lastDefiDay !== todayKey) ? 'block' : 'none';


  Object.keys(modules).forEach(key => {
    const badge = document.getElementById('badge-' + key);
    if (badge) {
      const lvl = getUnlockedLevel(key);
      badge.textContent = 'Niv. ' + lvl;
      badge.style.background = lvl === 3 ? 'var(--purple)' : lvl === 2 ? '#e67e22' : 'var(--grass)';
    }
  });
  const revBtn = document.getElementById('revisionBtn');
  if (revBtn) revBtn.style.display = hasRevisionItems() ? 'flex' : 'none';
  const rewardRevBtn = document.getElementById('rewardRevBtn');
  if (rewardRevBtn) rewardRevBtn.style.display = hasRevisionItems() ? 'block' : 'none';
}

function registerServiceWorker() {
  // Service Worker uniquement si servi via HTTP(S) — pas en fichier local
  const proto = location.protocol;
  const host  = location.hostname;
  const isServed = proto === 'https:' || host === 'localhost' || host === '127.0.0.1';
  if (!('serviceWorker' in navigator) || !isServed) return;

  navigator.serviceWorker.register('./sw.js', { scope: './' })
    .then(reg => {
      console.log('AIM: Service Worker actif 🚀');
      // Vérifie systématiquement s'il existe une mise à jour du SW
      reg.update();
      reg.onupdatefound = () => {
        const w = reg.installing;
        if (w) w.onstatechange = () => {
          if (w.state === 'installed' && navigator.serviceWorker.controller) {
            console.log('AIM: Nouvelle version installée — rechargement automatique…');
            window.location.reload();
          }
        };
      };
    })
    .catch(err => console.warn('SW non enregistré (mode local) :', err.message));

  // Si un SW change de "contrôleur" (nouvelle version prend le relais), recharge la page
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}

function handleOffline() {
  const check = () => document.body.classList.toggle('offline', !navigator.onLine);
  window.addEventListener('online', check);
  window.addEventListener('offline', check);
  check();
}

// Logo bounce on tap
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo-svg');
  if (logo) {
    logo.addEventListener('click', () => {
      logo.classList.remove('bounce');
      void logo.offsetWidth; // reflow
      logo.classList.add('bounce');
      playSound('tap');
      setTimeout(() => logo.classList.remove('bounce'), 400);
    });
  }
});

init();
