let step = 0;
let vitesse = 1;
const stepText = document.getElementById("step-text");
const clutch = document.getElementById("clutch");
const gas = document.getElementById("gas");
const gear = document.getElementById("gear");
const car = document.getElementById("car");
const messageBox = document.getElementById("message-box");

document.addEventListener("keydown", (e) => {
    if (e.key === "a" || e.key === "A") {
        clutch.classList.add("active");
        stepText.textContent = "Appuie sur Z pour l'accélérateur.";
        step = 1;
    }

    if (e.key === "z" || e.key === "Z" && step === 1) {
        gas.classList.add("active");
        if (vitesse < 5) {
            vitesse++;
            gear.textContent = vitesse;
            stepText.textContent = "Tu es en " + vitesse + "ère vitesse.";
            car.style.left = (parseInt(car.style.left || 0) + 15) + "px";
            messageBox.textContent = "Changement réussi !";
        } else {
            messageBox.textContent = "Tu es déjà en 5ème vitesse.";
        }
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "a" || e.key === "A") clutch.classList.remove("active");
    if (e.key === "z" || e.key === "Z") gas.classList.remove("active");
});
