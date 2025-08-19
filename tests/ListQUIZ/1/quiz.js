const questions = [

  {
    image:"",
    text: "Quel est le taux d’alcoolémie maximal autorisé ?",
    options: {
      A: "0.5 g/l",
      B: "0.8 g/l",
      C: "1.0 g/l"
    },
    correct: "A"
  },

  {
    image:"",
    text: "Que signifie un panneau rond bordé de rouge ?",
    options: {
      A: "Obligation",
      B: "Interdiction",
      C: "Danger"
    },
    correct: "B"
  },

  {
    image:"",
    text: "Quelle est la priorité dans un rond-point ?",
    options: {
      A: "Priorité à droite",
      B: "Priorité à gauche",
      C: "Priorité à ceux dans le rond-point"
    },
    correct: "C"
  },

  {
    image:"",
    text: "Que signifie un panneau triangulaire avec un point d'exclamation ?",
    options: {
      A: "Fin de route",
      B: "Danger",
      C: "Interdiction"
    },
    correct: "B"
  },

  {
    image:"",
    text: "Que signifie une ligne blanche continue au milieu de la route ?",
    options: {
      A: "Peut dépasser",
      B: "Interdiction de dépasser",
      C: "Route prioritaire"
    },
    correct: "B"
  },

  {
    image:"",
    text: "Que signifie un feu orange fixe ?",
    options: {
      A: "Accélérer",
      B: "S'arrêter si possible",
      C: "Ignorer"
    },
    correct: "B"
  }

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
