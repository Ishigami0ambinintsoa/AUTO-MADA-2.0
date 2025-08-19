// ----------------------
// Traductions
// ----------------------
const traductions = {
    fr: {
        titre: "Quiz",
        home:"Accueil",
        quiz:"Quiz",
        lesson :"Leçons",
        simulator:"Simulateur",
        about:"A propos",
        contact:"Contact",
        valider:"Valider",
        correct:"✅ Correct !",
        wrong:"❌ Mauvaise réponse !",
        select:"⚠️ Sélectionnez une réponse !",
        finished:"🎉 Quiz terminé !"
    },
    mg: {
        titre:"Fanadinana",
        home: "Fandraisana",
        quiz: "Fanadinana",
        lesson: "Lesona",
        simulator: "Simulatera",
        about: "Momba anay",
        contact: "Mifandray",
        valider:"Manaova fanamarinana",
        correct:"✅ Marina !",
        wrong:"❌ Diso !",
        select:"⚠️ Misafidiana valiny !",
        finished:"🎉 Vita ny fanadinana !"
    }
};

// ----------------------
// Questions
// ----------------------
const questions = [
  {
    fr: {
      image: "",
      text: "Quel est l'age minimun pour conduire une moto ?",
      options: { A: "16 ans", B: "14 ans", C: "13ans" },
      correct: "A"
    },
    mg: {
      image: "",
      text: "",
      options: { A: "", B: "", C: "" },
      correct: "A"
    }
  },
  {
    fr: {
      image: "",
      text: "Que signifie un panneau rond rouge avec une barre blanche ?",
      options: { A: "Stationnement interdit", B: "Sens interdit", C: "Route prioritaire" },
      correct: "B"
    },
    mg: {
      image: "",
      text: "Inona no dikan'ny famantarana mena boribory misy tsipika fotsy ?",
      options: { A: "Tsy azo mijanona", B: "Tsy azo miditra", C: "Lalana voalohany" },
      correct: "B"
    }
  }
];

// ----------------------
// Variables globales
// ----------------------
let currentLang = 'fr';
let currentQuestion = 0;

// ----------------------
// Éléments HTML
// ----------------------
const titre = document.getElementById("titre");
const questionText = document.getElementById("question-text");
const questionImage = document.getElementById("question-image");
const labelA = document.getElementById("labelA");
const labelB = document.getElementById("labelB");
const labelC = document.getElementById("labelC");
const btnValider = document.getElementById("btnValider");
const feedback = document.getElementById("feedback");

// Menu
const menuIds = ["home","quiz","lesson","simulator","about","contact"];

// ----------------------
// Fonctions
// ----------------------
function afficherQuestion() {
    const q = questions[currentQuestion][currentLang];
    questionText.textContent = q.text;
    questionImage.src = q.image;
    labelA.textContent = q.options.A;
    labelB.textContent = q.options.B;
    labelC.textContent = q.options.C;
    feedback.textContent = "";
    document.querySelector('input[name="answer"]:checked')?.removeAttribute('checked');
}

function checkAnswer() {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (!answer) {
        feedback.textContent = traductions[currentLang].select;
        return;
    }

    const q = questions[currentQuestion][currentLang];
    if (answer.value === q.correct) {
        feedback.textContent = traductions[currentLang].correct;
    } else {
        feedback.textContent = traductions[currentLang].wrong;
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion >= questions.length) {
            feedback.textContent = traductions[currentLang].finished;
            questionText.textContent = "";
            labelA.textContent = "";
            labelB.textContent = "";
            labelC.textContent = "";
            btnValider.style.display = "none";
        } else {
            afficherQuestion();
        }
    }, 1500);
}

function changerLangue(lang) {
    currentLang = lang;
    titre.textContent = traductions[lang].titre;
    btnValider.textContent = traductions[lang].valider;

    // Mettre à jour le menu
    menuIds.forEach(id => {
        document.getElementById(id).textContent = traductions[lang][id];
    });

    // Réafficher question en nouvelle langue
    afficherQuestion();
}

// ----------------------
// Événements
// ----------------------
btnValider.addEventListener("click", checkAnswer);

// Boutons langue
document.querySelectorAll(".langues button").forEach(btn => {
    btn.addEventListener("click", () => changerLangue(btn.getAttribute("onclick").match(/'(.*?)'/)[1]));
});

// ----------------------
// Initialisation
// ----------------------
changerLangue(currentLang);
afficherQuestion();
