// Importation du type Vector depuis un fichier "~/types"
import { Vector } from "~/types";

// Déclaration de la classe Paddle (Raquette)
export class Paddle { 
    // Propriété privée pour stocker l'image de la raquette
    private paddleImage: HTMLImageElement = new Image();
    // Propriétés privées pour suivre les mouvements de la raquette
    private moveLeft: boolean;
    private moveRight: boolean;

    // Constructeur de la classe Paddle
    constructor(
        private speed: number, // Vitesse de déplacement de la raquette
        private paddleWidth: number, // Largeur de la raquette
        private paddleHeight: number, // Hauteur de la raquette
        private position: Vector, // Position initiale de la raquette en tant que vecteur (x, y)
        image: string // Chemin de l'image de la raquette
    ) {
        this.speed = speed; // Initialisation de la vitesse de déplacement de la raquette
        this.paddleWidth = paddleWidth; // Initialisation de la largeur de la raquette
        this.paddleHeight = paddleHeight; // Initialisation de la hauteur de la raquette
        this.position = position; // Initialisation de la position de la raquette
        this.moveRight = false; // La raquette ne se déplace pas vers la droite au début
        this.moveLeft = false; // La raquette ne se déplace pas vers la gauche au début
        this.paddleImage.src = image; // Chargement de l'image de la raquette en utilisant la source fournie

        // Ajout d'écouteurs d'événements pour gérer les pressions et relâchements des touches
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }

    // Getter pour obtenir la largeur de la raquette
    get width(): number {
        return this.paddleWidth; // Retourne la largeur de la raquette
    }

    // Getter pour obtenir la hauteur de la raquette
    get height(): number {
        return this.paddleHeight; // Retourne la hauteur de la raquette
    }

    // Getter pour obtenir la position actuelle de la raquette
    get pos(): Vector {
        return this.position; // Retourne la position actuelle de la raquette en tant que vecteur (x, y)
    }

    // Getter pour obtenir l'image de la raquette
    get image(): HTMLImageElement {
        return this.paddleImage; // Retourne l'élément HTML de l'image de la raquette
    }

    // Getter pour vérifier si la raquette se déplace vers la gauche
    get isMovingLeft(): boolean {
        return this.moveLeft; // Retourne vrai si la raquette se déplace vers la gauche, sinon faux
    }

    // Getter pour vérifier si la raquette se déplace vers la droite
    get isMovingRight(): boolean {
        return this.moveRight; // Retourne vrai si la raquette se déplace vers la droite, sinon faux
    }

    // Méthode pour déplacer la raquette
    movePaddle(): void {
        if (this.moveLeft) this.pos.x -= this.speed; // Déplace la raquette vers la gauche si moveLeft est vrai
        if (this.moveRight) this.pos.x += this.speed; // Déplace la raquette vers la droite si moveRight est vrai
    }

    // Méthode pour gérer l'événement de relâchement d'une touche
    handleKeyUp = (e: KeyboardEvent): void => {
        if (e.code === "ArrowLeft" || e.key === "ArrowLeft") // Si la touche relâchée est la flèche gauche
            this.moveLeft = false; // Arrête de déplacer la raquette vers la gauche
        if (e.code === "ArrowRight" || e.key === "ArrowRight") // Si la touche relâchée est la flèche droite
            this.moveRight = false; // Arrête de déplacer la raquette vers la droite
    }

    // Méthode pour gérer l'événement de pression d'une touche
    handleKeyDown = (e: KeyboardEvent): void => {
        if (e.code === "ArrowLeft" || e.key === "ArrowLeft") // Si la touche pressée est la flèche gauche
            this.moveLeft = true; // Commence à déplacer la raquette vers la gauche
        if (e.code === "ArrowRight" || e.key === "ArrowRight") // Si la touche pressée est la flèche droite
            this.moveRight = true; // Commence à déplacer la raquette vers la droite
    }
}
