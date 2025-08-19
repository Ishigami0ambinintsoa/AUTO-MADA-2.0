const questions = [
  {
    image:"stop.jpg",
    text: "Que signifie ce panneau ?",
    options: {
      A: "Cédez le passage",
      B: "Arrêt obligatoire",
      C: "Sens interdit"
    },
    correct: "B"
  },
  {
    image: "chemin obligatoire aux pietons.jpg",
    text: "Ce panneau indique :",
    options: {
      A: "Stationnement autorisé",
      B: "chemin obligatoire aux piétons",
      C: "Sens unique"
    },
    correct: "B"
  },
];

let currentQuestion = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-image").src = q.image;
  document.getElementById("question-text").textContent = q.text;
  document.getElementById("labelA").textContent = q.options.A;
  document.getElementById("labelB").textContent = q.options.B;
  document.getElementById("labelC").textContent = q.options.C;
  document.getElementById("feedback").textContent = "";

  // Décocher les anciennes réponses
  document.querySelectorAll('input[name="answer"]').forEach(r => r.checked = false);
}

function checkAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  const feedback = document.getElementById("feedback");
  if (!selected) {
    feedback.textContent = "❗Veuillez choisir une réponse.";
    feedback.style.color = "orange";
    return;
  }

  const q = questions[currentQuestion];
  if (selected.value === q.correct) {
    feedback.textContent = "✅ Bonne réponse !";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `❌ Mauvaise réponse. Réponse correcte : ${q.options[q.correct]}`;
    feedback.style.color = "red";
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      document.querySelector(".quiz-card").innerHTML = `
        <h3>🎉 Vous avez terminé le quiz !</h3>
        <a href="quiz.html" class="btn">Recommencer</a>
      `;
    }
  }, 2000);
}

window.onload = loadQuestion;
