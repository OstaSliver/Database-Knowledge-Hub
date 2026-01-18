// js/pages/quiz.js
function renderQuiz(container) {
  if (state.quiz.isFinished) {
    app.router("results");
    return;
  }

  const question = quizData[state.quiz.currentQuestionIndex];
  const progress =
    ((state.quiz.currentQuestionIndex + 1) / quizData.length) * 100;

  container.innerHTML = `
        <div class="max-w-3xl mx-auto fade-in">
                        <!-- Progress Header -->
                        <div class="mb-6">
                            <div class="flex justify-between text-sm text-gray-600 mb-2">
                                <span>คำถามที่ ${state.quiz.currentQuestionIndex + 1} จาก ${quizData.length}</span>
                                <span>${Math.round(progress)}%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style="width: ${progress}%"></div>
                            </div>
                        </div>

                        <!-- Question Card -->
                        <div class="bg-white rounded-xl shadow-md p-6 md:p-8">
                            <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-4 font-semibold">${question.category}</span>
                            <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-relaxed">${question.question}</h2>

                            <!-- Options Grid -->
                            <div class="grid gap-4" id="options-container">
                                ${question.options
                                  .map(
                                    (opt, idx) => `
                                    <button onclick="app.handleAnswer(${idx})" id="opt-${idx}" class="w-full text-left p-4 rounded-lg border-2 border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition flex items-start group">
                                        <div class="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mr-4 group-hover:bg-blue-200 group-hover:text-blue-700 font-bold">
                                            ${String.fromCharCode(65 + idx)}
                                        </div>
                                        <span class="text-gray-700 group-hover:text-gray-900 pt-1">${opt.text}</span>
                                    </button>
                                `,
                                  )
                                  .join("")}
                            </div>

                            <!-- Feedback Area (Hidden initially) -->
                            <div id="feedback-area" class="hidden mt-8 p-6 rounded-lg bg-gray-50 border-l-4">
                                <h4 id="feedback-title" class="font-bold text-lg mb-2"></h4>
                                <p id="feedback-text" class="text-gray-700 mb-4"></p>
                                <div class="text-sm text-gray-500 bg-white p-3 rounded border border-gray-200">
                                    <strong>💡 Hint:</strong> ${question.hint}
                                </div>
                                <div class="mt-6 flex justify-end">
                                    <button onclick="app.nextQuestion()" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-lg font-bold">
                                        ข้อถัดไป ➡️
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
    `;
}

function handleAnswer(selectedIndex) {
  const question = quizData[state.quiz.currentQuestionIndex];
  const selectedOption = question.options[selectedIndex];
  const isCorrect = selectedOption.isCorrect;

  // Disable all buttons
  const buttons = document.querySelectorAll("#options-container button");
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    btn.classList.remove("hover:bg-blue-50", "hover:border-blue-300");
    if (question.options[idx].isCorrect) {
      btn.classList.add("bg-green-100", "border-green-500", "text-green-900");
      btn.innerHTML += ' <span class="float-right">✅</span>';
    } else if (idx === selectedIndex && !isCorrect) {
      btn.classList.add("bg-red-100", "border-red-500", "text-red-900");
      btn.innerHTML += ' <span class="float-right">❌</span>';
    } else {
      btn.classList.add("opacity-50");
    }
  });

  // Show Feedback
  const feedbackArea = document.getElementById("feedback-area");
  const feedbackTitle = document.getElementById("feedback-title");
  const feedbackText = document.getElementById("feedback-text");

  feedbackArea.classList.remove("hidden");
  if (isCorrect) {
    feedbackArea.classList.add("border-green-500", "bg-green-50");
    feedbackTitle.innerText = "ถูกต้อง! 🎉";
    feedbackTitle.classList.add("text-green-700");
  } else {
    feedbackArea.classList.add("border-red-500", "bg-red-50");
    feedbackTitle.innerText = "ยังไม่ถูกครับ 😅";
    feedbackTitle.classList.add("text-red-700");
  }
  feedbackText.innerHTML = `<strong>เหตุผล:</strong> ${selectedOption.rationale}`;

  
  if (state.quiz.answers.length === state.quiz.currentQuestionIndex) {
    state.quiz.answers.push({
      questionId: question.id,
      isCorrect: isCorrect,
      selectedIndex: selectedIndex,
    });
    if (isCorrect) state.quiz.score++;
  }
}

function nextQuestion() {
  if (state.quiz.currentQuestionIndex < quizData.length - 1) {
    state.quiz.currentQuestionIndex++;
    renderQuiz(document.getElementById("app-container"));
  } else {
    state.quiz.isFinished = true;
    app.router("results");
  }
}
