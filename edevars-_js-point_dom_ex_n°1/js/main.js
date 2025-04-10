document.addEventListener('DOMContentLoaded', function() { // Exécution après le chargement du DOM
    const xInput = document.getElementById('x'); // Récupère l'élément x
    const yInput = document.getElementById('y'); // Récupère l'élément y
    const createPointButton = document.getElementById('create_point'); // Récupère le bouton
    const pointStateDiv = document.getElementById('point_state'); // Récupère la div d'affichage

    createPointButton.addEventListener('click', function() { // Gestion du clic sur le bouton
        const x = parseFloat(xInput.value); // Récupère et convertit la valeur de x
        const y = parseFloat(yInput.value); // Récupère et convertit la valeur de y

        if (!isNaN(x) && !isNaN(y)) { // Vérifie si x et y sont des nombres valides
            let point = new Point_A (x, y); // Crée un nouvel objet Point
            pointStateDiv.textContent = point.toString(); // Affiche l'état du point
        } else {
            pointStateDiv.textContent = "Veuillez entrer des coordonnées valides."; // Message d'erreur
        }
    });
});