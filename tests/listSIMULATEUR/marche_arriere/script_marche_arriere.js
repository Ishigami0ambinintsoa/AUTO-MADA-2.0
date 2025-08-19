let step = 0;
const stepText = document.getElementById("step-text");
const clutch = document.getElementById("clutch");
const gas = document.getElementById("gas");
const gear = document.getElementById("gear");
const car = document.getElementById("car");
const messageBox = document.getElementById("message-box");

document.addEventListener("keydown", (e) => {
    if (e.key === "a" || e.key === "A") {
        clutch.classList.add("active");
        if (step === 0) {
            stepText.textContent = "Passe la marche arrière (R).";
            gear.textContent = "R";
            step++;
        }
    }
    if ((e.key === "z" || e.key === "Z") && step === 1) {
        gas.classList.add("active");
        stepText.textContent = "Relâche doucement l'embrayage.";
        step++;
    }
    if ((e.key === "e" || e.key === "E") && step === 2) {
        clutch.classList.remove("active");
        stepText.textContent = "La voiture recule.";
        car.style.left = (parseInt(car.style.left || 0) - 10) + "px";
        messageBox.textContent = "Marche arrière réussie !";
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "a" || e.key === "A") clutch.classList.remove("active");
    if (e.key === "z" || e.key === "Z") gas.classList.remove("active");
});
