// js/app.js
const app = {
  init() {
    this.router("home");
  },

  filterReference() {
    filterReference(); // เรียก function จริง
  },

  router(mode) {
    state.currentMode = mode;
    const container = document.getElementById("app-container");
    container.innerHTML = "";
    container.className = "flex-grow container mx-auto px-4 py-6 fade-in";

    if (mode === "home") renderHome(container);
    else if (mode === "quiz") renderQuiz(container);
    else if (mode === "results") renderResults(container);
    else if (mode === "study") renderStudy(container);
    else if (mode === "reference") renderReference(container);
  },

  startQuiz() {
    state.quiz = {
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      isFinished: false,
    };
    this.router("quiz");
  },
};

document.addEventListener("DOMContentLoaded", () => {
  app.init();
});
