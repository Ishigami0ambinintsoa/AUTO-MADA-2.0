let clutchPressed = false;
let gasPressed = false;
let currentGear = 'N'; // Neutre par défaut
let carPosition = 0;

const stepText = document.getElementById("step-text");
const clutch = document.getElementById("clutch");
const gas = document.getElementById("gas");
const gearBox = document.getElementById("gear");
const messageBox = document.getElementById("message-box");
const car = document.getElementById("car");

let step = 1; // Commence à l'étape 1
let carMoving = false;

// Fonction pour afficher les messages à l'utilisateur
function showMessage(message) {
    messageBox.textContent = message;
}

// Affiche l'étape en cours
function proceedStep() {
    switch (step) {
        case 1:
            stepText.innerHTML = "Appuie sur <strong>A</strong> pour l'embrayage.";
            break;
        case 2:
            stepText.innerHTML = "Passe la première vitesse en appuyant sur <strong>1</strong>.";
            break;
        case 3:
            stepText.innerHTML = "Relâche l'embrayage lentement et appuie sur D pour accélérer.";
            break;
        case 4:
            stepText.innerHTML = "Appuie sur <strong>D</strong> pour accélérer.";
            break;
        case 5:
            showMessage("🚗 Voiture démarrée avec succès !");
            break;
    }
}

// Gère les appuis sur les touches
document.addEventListener('keydown', (e) => {
    switch (e.key.toLowerCase()) {
        case 'a': 
            clutchPressed = true;
            break;
        case 'd': 
            gasPressed = true;
            break;
        case '1': 
            if (clutchPressed) {
                currentGear = '1';
                gearBox.textContent = 'Vitesse : 1';
                step = 3; // Passer à l'étape 3 après avoir engagé la 1ère
                proceedStep();  // Afficher l'étape suivante
            }
            break;
    }
    updatePedals();
});

// Gère les relâchements de touches
document.addEventListener('keyup', (e) => {
    switch (e.key.toLowerCase()) {
        case 'a': 
            clutchPressed = false;
            break;
        case 'd': 
            gasPressed = false;
            break;
    }
    updatePedals();
});

// Actualisation des pédales visuellement
function updatePedals() {
    clutch.classList.toggle('active', clutchPressed);
    gas.classList.toggle('active', gasPressed);
}

// Mouvement de la voiture
function moveCar() {
    if (currentGear === '1' && !carMoving && !clutchPressed) {
        // Ne bouger la voiture que si l'accélérateur est pressé après la 1ère
        if (gasPressed) {
            carPosition += 0.5; // Déplacement progressif de la voiture
            car.style.left = carPosition + '%';

            if (carPosition > 50) {
                carMoving = true;
                step = 5; // Voiture démarrée, terminer le processus
                proceedStep();
            }
        }
    }

    // Accélérer uniquement si l'accélérateur est pressé
    if (gasPressed && currentGear === '1' && carPosition > 0) {
        carPosition += 0.1; // Accélérer
        car.style.left = carPosition + '%';
    }

    requestAnimationFrame(moveCar);
}

// Commencer le simulateur
proceedStep();
moveCar();
