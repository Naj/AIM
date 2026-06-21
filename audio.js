// ===================== AUDIO ENGINE =====================

function playSound(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const now = ctx.currentTime;
    if (type === 'correct') {
      const notes = [523, 659, 784];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine'; osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.25, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.25);
        osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + 0.25);
      });
    } else if (type === 'wrong') {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sawtooth'; osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.25);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(); osc.stop(now + 0.3);
    } else if (type === 'win') {
      const notes = [523, 659, 784, 1047, 1319];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine'; osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.22, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.35);
        osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + 0.35);
      });
    } else if (type === 'flip') {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine'; osc.frequency.value = 440;
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(); osc.stop(now + 0.08);
    } else if (type === 'tap') {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine'; osc.frequency.value = 600;
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.start(); osc.stop(now + 0.06);
    }
  } catch(e) {}
}

function speak(text, rate) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'fr-FR';
  utt.rate = rate || 0.85;
  utt.pitch = 1.1;
  // Try to pick a French voice
  const voices = window.speechSynthesis.getVoices();
  const frVoice = voices.find(v => v.lang.startsWith('fr'));
  if (frVoice) utt.voice = frVoice;
  window.speechSynthesis.speak(utt);
}

// Wait for voices to load
if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

// ===================== RECONNAISSANCE VOCALE (MICRO) =====================
// Message clair selon le type d'erreur, au lieu de laisser le bouton micro
// échouer en silence (icône qui revient en arrière sans aucune explication).
function micErrorMessage(errorCode) {
  if (errorCode === 'not-allowed' || errorCode === 'service-not-allowed') return '🔒 Le micro est bloqué. Autorise-le dans les réglages de l\'appareil, puis réessaie !';
  if (errorCode === 'network')       return '📶 Le micro a besoin d\'internet pour fonctionner. Vérifie ta connexion !';
  if (errorCode === 'no-speech')     return 'Je n\'ai rien entendu, réessaie !';
  if (errorCode === 'audio-capture') return 'Aucun micro trouvé sur cet appareil.';
  return 'Le micro n\'a pas pu être utilisé. Réessaie ou utilise "Voir la réponse" !';
}

function showMicError(transcriptElId, errorCode) {
  const el = document.getElementById(transcriptElId);
  if (!el) return;
  el.textContent = micErrorMessage(errorCode);
  el.classList.add('has-text');
}

// Demande explicitement l'accès au micro puis démarre la reconnaissance vocale.
// Sur certains appareils/navigateurs, lancer rec.start() directement échoue en
// silence si le micro est refusé/indisponible — on passe par getUserMedia d'abord
// pour fiabiliser la demande de permission ET afficher un message clair si ça rate.
function startSpeechRecognition(rec, transcriptElId, onFail) {
  function tryStart() {
    try { rec.start(); }
    catch (e) { showMicError(transcriptElId, null); if (onFail) onFail(); }
  }
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => tryStart())
      .catch(() => { showMicError(transcriptElId, 'not-allowed'); if (onFail) onFail(); });
  } else {
    tryStart();
  }
}
