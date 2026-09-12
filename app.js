/* ============================================================
   Application — logique
   ============================================================ */

// ---------------- i18n ----------------
const I18N = {
  fr: {
    brandName: "Dossier",
    homeKicker: "Préparation entretien — RAF · DAF · FP&A",
    homeTitle: "Entraînez vos réponses avant le jour J.",
    homeSub: "Deux modes d'entraînement. Sur mobile, dans le bus, entre deux réunions.",
    tile1Label: "Mode 1",
    tile1Title: "Entretien classique",
    tile1Desc: "5 questions tirées au sort parmi les 19 questions clés d'un entretien RAF/DAF. Réponse de référence disponible pour chacune.",
    tile2Label: "Mode 2",
    tile2Title: "Réflexe",
    tile2Desc: "Une question à la fois, piochée dans une grande banque : technique, psychologique, mise en situation, management. Jamais deux fois la même question tant que vous n'avez pas remis le compteur à zéro.",
    questionsWord: "questions",
    homeFootnote: "Votre progression est enregistrée uniquement sur cet appareil.",
    revealAnswer: "Voir ma réponse",
    hideAnswer: "Masquer la réponse",
    revealExample: "Voir un exemple de réponse",
    hideExample: "Masquer l'exemple",
    nextQuestion: "Question suivante",
    stopHere: "M'arrêter là",
    playAgain: "Rejouer",
    backHome: "Retour à l'accueil",
    endTitle1: "Série terminée.",
    endSub1: "5 nouvelles questions vous attendent à tout moment.",
    emptyTitle: "Vous avez fait le tour de la banque.",
    emptySub: "Toutes les questions ont déjà été posées sur cet appareil. Réinitialisez la mémoire pour recommencer depuis le début.",
    resetMemory: "Réinitialiser la mémoire",
    resetConfirm: "Effacer l'historique des questions déjà vues ? Vous les reverrez depuis le début.",
    seenOf: (seen, total) => `${seen} / ${total} questions déjà vues sur cet appareil`,
    catLabels: {
      technique: "Technique finance",
      psycho: "Psychologique",
      situation: "Mise en situation",
      leadership: "Management",
      culture: "Culture & repères"
    }
  },
  en: {
    brandName: "Dossier",
    homeKicker: "Interview prep — Finance Controller · CFO · FP&A",
    homeTitle: "Rehearse your answers before the big day.",
    homeSub: "Two training modes. On your phone, on the bus, between meetings.",
    tile1Label: "Mode 1",
    tile1Title: "Classic interview",
    tile1Desc: "5 random questions from the 19 core questions of a Finance Director interview. A reference answer is available for each.",
    tile2Label: "Mode 2",
    tile2Title: "Reflex",
    tile2Desc: "One question at a time, drawn from a large bank: technical, psychological, scenario-based, management. Never the same question twice until you reset the counter.",
    questionsWord: "questions",
    homeFootnote: "Your progress is saved only on this device.",
    revealAnswer: "See my answer",
    hideAnswer: "Hide answer",
    revealExample: "See an example answer",
    hideExample: "Hide example",
    nextQuestion: "Next question",
    stopHere: "Stop here",
    playAgain: "Play again",
    backHome: "Back to home",
    endTitle1: "Round complete.",
    endSub1: "5 new questions are ready whenever you are.",
    emptyTitle: "You've been through the whole bank.",
    emptySub: "Every question has already been shown on this device. Reset the memory to start over from the beginning.",
    resetMemory: "Reset memory",
    resetConfirm: "Clear the history of questions already seen? You'll see them again from the start.",
    seenOf: (seen, total) => `${seen} / ${total} questions already seen on this device`,
    catLabels: {
      technique: "Finance technical",
      psycho: "Psychological",
      situation: "Scenario",
      leadership: "Leadership",
      culture: "Culture & awareness"
    }
  }
};

const CAT_COLOR = {
  technique: "var(--tag-technique)",
  psycho: "var(--tag-psycho)",
  situation: "var(--tag-situation)",
  leadership: "var(--tag-leadership)",
  culture: "var(--tag-culture)"
};

const STORAGE_LANG = "ip_lang";
const STORAGE_REFLEX_SEEN = "ip_reflex_seen";

let currentLang = localStorage.getItem(STORAGE_LANG) || "fr";

function t(key) {
  return I18N[currentLang][key];
}

function applyI18n() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[currentLang][key];
    if (typeof val === "string") el.textContent = val;
  });
  document.getElementById("tile1Meta").innerHTML =
    `${STAR_QUESTIONS.length} <span>${t("questionsWord")}</span>`;
  renderReflexMeta();
  // Refresh whichever game view is currently visible, so labels/content re-render in the new language
  if (!document.getElementById("view-game1").classList.contains("hidden")) renderG1Question();
  if (!document.getElementById("view-game2").classList.contains("hidden")) renderG2Question();
}

// ---------------- Navigation ----------------
const views = ["view-home", "view-game1", "view-game1-end", "view-game2", "view-game2-empty"];

function showView(id) {
  views.forEach(v => {
    document.getElementById(v).classList.toggle("hidden", v !== id);
  });
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  localStorage.setItem(STORAGE_LANG, currentLang);
  applyI18n();
});

// ================================================================
// JEU 1 — Entretien classique
// ================================================================
let g1Set = [];
let g1Index = 0;

function pickRandom(arr, n) {
  const copy = arr.slice();
  const out = [];
  while (out.length < n && copy.length) {
    const i = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(i, 1)[0]);
  }
  return out;
}

function startGame1() {
  g1Set = pickRandom(STAR_QUESTIONS, 5);
  g1Index = 0;
  showView("view-game1");
  renderG1Question();
}

function renderG1Dots() {
  const dotsEl = document.getElementById("g1Dots");
  dotsEl.innerHTML = "";
  g1Set.forEach((_, i) => {
    const d = document.createElement("span");
    d.className = "dot" + (i < g1Index ? " is-done" : i === g1Index ? " is-current" : "");
    dotsEl.appendChild(d);
  });
}

function renderG1Question() {
  const item = g1Set[g1Index];
  document.getElementById("g1Progress").textContent = `${g1Index + 1} / ${g1Set.length}`;
  document.getElementById("g1Question").textContent = item[currentLang].q;
  const list = document.getElementById("g1AnswerList");
  list.innerHTML = "";
  item[currentLang].a.forEach(point => {
    const li = document.createElement("li");
    li.textContent = point;
    list.appendChild(li);
  });
  list.classList.add("hidden");
  document.getElementById("g1RevealBtn").textContent = t("revealAnswer");
  renderG1Dots();
}

document.getElementById("g1RevealBtn").addEventListener("click", () => {
  const list = document.getElementById("g1AnswerList");
  const btn = document.getElementById("g1RevealBtn");
  const isHidden = list.classList.contains("hidden");
  list.classList.toggle("hidden");
  btn.textContent = isHidden ? t("hideAnswer") : t("revealAnswer");
});

document.getElementById("g1Next").addEventListener("click", () => {
  g1Index++;
  if (g1Index >= g1Set.length) {
    showView("view-game1-end");
  } else {
    renderG1Question();
  }
});

document.getElementById("g1Restart").addEventListener("click", startGame1);
document.getElementById("g1Home").addEventListener("click", () => showView("view-home"));
document.getElementById("g1Back").addEventListener("click", () => showView("view-home"));
document.getElementById("startGame1").addEventListener("click", startGame1);

// ================================================================
// JEU 2 — Réflexe
// ================================================================
let g2Current = null;

function getSeenIds() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_REFLEX_SEEN)) || [];
  } catch (e) {
    return [];
  }
}

function addSeenId(id) {
  const seen = getSeenIds();
  if (!seen.includes(id)) {
    seen.push(id);
    localStorage.setItem(STORAGE_REFLEX_SEEN, JSON.stringify(seen));
  }
}

function resetSeen() {
  localStorage.removeItem(STORAGE_REFLEX_SEEN);
}

function renderReflexMeta() {
  const total = REFLEX_QUESTIONS.length;
  document.getElementById("tile2Meta").innerHTML =
    `${total} <span>${t("questionsWord")}</span>`;
}

function pickNextReflexQuestion() {
  const seen = getSeenIds();
  const remaining = REFLEX_QUESTIONS.filter(q => !seen.includes(q.id));
  if (remaining.length === 0) return null;
  return remaining[Math.floor(Math.random() * remaining.length)];
}

function renderG2Progress() {
  const seen = getSeenIds().length;
  document.getElementById("g2Progress").textContent = t("seenOf")(seen, REFLEX_QUESTIONS.length);
}

function renderG2Question() {
  if (!g2Current) return;
  const item = g2Current;
  const tag = document.getElementById("g2CatTag");
  tag.textContent = t("catLabels")[item.category];
  tag.style.background = CAT_COLOR[item.category];
  document.getElementById("g2Question").textContent = item[currentLang].q;
  const ex = document.getElementById("g2Example");
  ex.textContent = item[currentLang].example;
  ex.classList.add("hidden");
  document.getElementById("g2RevealBtn").textContent = t("revealExample");
  renderG2Progress();
}

function startGame2() {
  const next = pickNextReflexQuestion();
  if (!next) {
    showView("view-game2-empty");
    return;
  }
  g2Current = next;
  addSeenId(next.id);
  showView("view-game2");
  renderG2Question();
}

document.getElementById("startGame2").addEventListener("click", startGame2);
document.getElementById("g2Back").addEventListener("click", () => showView("view-home"));
document.getElementById("g2Stop").addEventListener("click", () => showView("view-home"));

document.getElementById("g2RevealBtn").addEventListener("click", () => {
  const ex = document.getElementById("g2Example");
  const btn = document.getElementById("g2RevealBtn");
  const isHidden = ex.classList.contains("hidden");
  ex.classList.toggle("hidden");
  btn.textContent = isHidden ? t("hideExample") : t("revealExample");
});

document.getElementById("g2Next").addEventListener("click", startGame2);

document.getElementById("g2Trash").addEventListener("click", () => {
  if (confirm(t("resetConfirm"))) {
    resetSeen();
    renderG2Progress();
  }
});

document.getElementById("g2EmptyReset").addEventListener("click", () => {
  resetSeen();
  startGame2();
});
document.getElementById("g2EmptyHome").addEventListener("click", () => showView("view-home"));

// ---------------- Init ----------------
applyI18n();
showView("view-home");
