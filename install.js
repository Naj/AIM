// AIM — Guide d'installation (Ajouter à l'écran d'accueil)
(function () {
  var SEEN_KEY = 'aim_install_seen';
  var TOAST_COUNT_KEY = 'aim_install_toast_count';
  var MAX_TOASTS = 3; // nombre de visites où le petit toast réapparaît avant de se taire définitivement
  var deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    var btn = document.getElementById('install-native-btn');
    if (btn) btn.style.display = 'block';
  });

  window.triggerNativeInstall = function () {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.finally(function () { deferredPrompt = null; });
  };

  function isStandalone() {
    return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  }
  function isIOS() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }
  function isMobile() {
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  }

  window.switchInstallOS = function (os) {
    document.querySelectorAll('.install-os-tab').forEach(function (t) {
      t.classList.toggle('active', t.dataset.os === os);
    });
    document.querySelectorAll('.install-steps').forEach(function (s) {
      s.classList.remove('active');
    });
    var el = document.getElementById('install-steps-' + os);
    if (el) el.classList.add('active');
  };

  window.openInstallGuide = function () {
    hideInstallToast();
    var overlay = document.getElementById('install-overlay');
    if (!overlay) return;
    overlay.classList.add('open');
    switchInstallOS(isIOS() ? 'ios' : 'android');
    playSoundSafe();
  };

  window.closeInstallGuide = function () {
    var overlay = document.getElementById('install-overlay');
    if (overlay) overlay.classList.remove('open');
    try { localStorage.setItem(SEEN_KEY, '1'); } catch (e) {}
  };

  function hideInstallToast() {
    var toast = document.getElementById('install-toast');
    if (toast) toast.classList.remove('show');
  }

  window.dismissInstallToast = function () {
    hideInstallToast();
  };

  function showInstallDot() {
    var fab = document.getElementById('install-fab');
    if (fab) fab.classList.add('has-dot');
  }

  function showInstallToast() {
    var toast = document.getElementById('install-toast');
    if (!toast) return;
    toast.classList.add('show');
    setTimeout(hideInstallToast, 6000);
  }

  function playSoundSafe() {
    try { if (typeof playSound === 'function') playSound('tap'); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    var fab = document.getElementById('install-fab');

    if (isStandalone()) {
      // App déjà installée : on cache tout le système d'install
      if (fab) fab.style.display = 'none';
      var toastEl = document.getElementById('install-toast');
      if (toastEl) toastEl.style.display = 'none';
      return;
    }
    if (!isMobile()) return;

    var seen = false;
    try { seen = localStorage.getItem(SEEN_KEY) === '1'; } catch (e) {}

    if (!seen) {
      // Première visite : popup complet, comme avant
      setTimeout(function () { openInstallGuide(); }, 4000);
      return;
    }

    // Visites suivantes : plus jamais de popup plein écran —
    // juste une pastille discrète sur le bouton flottant…
    showInstallDot();

    // …et un petit toast qui apparaît et disparaît tout seul,
    // limité à quelques visites pour ne pas être lassant.
    var toastCount = 0;
    try { toastCount = parseInt(localStorage.getItem(TOAST_COUNT_KEY) || '0', 10); } catch (e) {}
    if (toastCount < MAX_TOASTS) {
      setTimeout(function () {
        showInstallToast();
        try { localStorage.setItem(TOAST_COUNT_KEY, String(toastCount + 1)); } catch (e) {}
      }, 3000);
    }
  });
})();
