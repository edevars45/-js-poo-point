class Point_A { 
    #x; // Propriété privée pour la coordonnée x
    #y; // Propriété privée pour la coordonnée y

    static compteur = 0; // Propriété statique (non utilisée ici, mais peut servir à compter les instances)

    constructor(x = 0, y = 0) { // Constructeur de la classe, initialise les coordonnées
        console.log("constructor()"); // Affiche "constructor()" dans la console lors de la création d'un objet
        this.setX(x); // Appelle le mutateur setX pour définir la coordonnée x
        this.setY(y); // Appelle le mutateur setY pour définir la coordonnée y
    }
  
    // Accesseurs (getters)
    get X() { // Accesseur pour récupérer la valeur de x
        return this.#x; // Retourne la valeur de la propriété privée #x
    }

    get Y() { // Accesseur pour récupérer la valeur de y
        return this.#y; // Retourne la valeur de la propriété privée #y
    }

    // Mutateurs (setters)
    setX(x) { // Mutateur pour définir la valeur de x
        this.#x = x; // Définit la valeur de la propriété privée #x
    }

    setY(y) { // Mutateur pour définir la valeur de y
        this.#y = y; // Définit la valeur de la propriété privée #y
    }

    toString() { // Méthode pour obtenir une représentation sous forme de chaîne de l'objet
        return `Point A(x = ${this.X}, y = ${this.Y})`; // Retourne une chaîne formatée représentant le point A
    }
}