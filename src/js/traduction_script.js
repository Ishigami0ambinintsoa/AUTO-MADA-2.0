// Langue par défaut (ici le français)
let langueActuelle = "fr";

// Fonction qui change la langue
function changerLangue(lang) {
    langueActuelle = lang; // On enregistre la langue choisie

    // Pour chaque clé de traduction, on met à jour le texte
    for (let id in traductions[langueActuelle]) {
        // On sélectionne l'élément avec cet ID
        let element = document.getElementById(id);
        if (element) {
            // On remplace son contenu par la traduction correspondante
            element.textContent = traductions[langueActuelle][id];
        }
    }
}

// Quand la page est chargée, on affiche la langue par défaut
window.onload = function() {
    changerLangue(langueActuelle);
};
