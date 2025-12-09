// Author: Ben Anderson (A00473343)
// Purpose: This file condenses the text to speech functionality so ita can be
//          imported to each page with minimal code.

let currentUtterance = null;

/**
 * Speak text from the beginning. 
 * If speech is already happening, it restarts the speech.
 */
function speak(text) {
  stop(); // ensure no overlapping speech

  currentUtterance = new SpeechSynthesisUtterance(text);

  // Tuning
  currentUtterance.pitch = 1.15;
  currentUtterance.rate = 0.95;
  currentUtterance.volume = 1;

  // Voice preference
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v =>
    (v.name.toLowerCase().includes("female") || v.name.toLowerCase().includes("samantha")) &&
    v.lang.startsWith("en")
  );

  if (preferred) {
    currentUtterance.voice = preferred;
  }

  window.speechSynthesis.speak(currentUtterance);

  currentUtterance.onend = () => {
    currentUtterance = null;
  };
}

/**
 * Stop any currently playing speech immediately.
 */
function stop() {
  window.speechSynthesis.cancel();
  currentUtterance = null;
}

/**
 * Returns true while the browser is currently speaking.
 */
function isSpeaking() {
  return window.speechSynthesis.speaking;
}

/**
 * Toggle speech:
 * - If not speaking → start speaking from beginning
 * - If speaking → stop immediately
 */
function toggleSpeak(text) {
  if (isSpeaking()) {
    stop();
  } else {
    speak(text);
  }
}

export default {
  speak,
  stop,
  toggleSpeak,
  isSpeaking
}; 