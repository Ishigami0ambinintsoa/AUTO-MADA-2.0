const questions = [

  {
    image:"",
    text: "Quelle est la limite de vitesse en agglomération ?",
    options: {
      A: "30 km/h",
      B: "50 km/h",
      C: "70 km/h"
    },
    correct: "B"
  },

  {
    image:"",
    text: "Que faire avant de tourner à gauche ?",
    options: {
      A: "Ralentir sans clignotant",
      B: "Klaxonner",
      C: "Utiliser le clignotant et vérifier l'arrière"
    },
    correct: "C"
  },

  {
    image:"",
    text: "Peut-on téléphoner en conduisant avec des écouteurs",
    options: {
      A: "Oui",
      B: "Non",
      C: "Seulement à l'arrêt"
    },
    correct: "B"
  },

  {
    image:"",
    text: "Comment reconnaître un passage piéton ?",
    options: {
      A: "Lignes blanches au sol",
      B: "Feux tricolores",
      C: "Panneau bleu"
    },
    correct: "A"
  },

  {
    image:"",
    text: "Que signifie une ligne blanche continue au milieu de la route",
    options: {
      A: "Peut dépasser",
      B: "Interdiction de dépasser",
      C: "Route prioritaire"
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
