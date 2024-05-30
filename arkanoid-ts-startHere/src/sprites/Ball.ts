// Importation du type Vector depuis un fichier "~/types"
import { Vector } from "~/types";

// Déclaration de la classe Ball (Balle)
export class Ball { 
    // Propriétés privées
    private speed: Vector; // Vecteur de vitesse de la balle, avec des composantes x et y
    private ballImage: HTMLImageElement = new Image(); // Image HTML de la balle

    // Constructeur de la classe Ball
    constructor(
        speed: number, // Vitesse de la balle en tant que scalaire
        private ballSize: number, // Taille de la balle (hauteur et largeur sont identiques)
        private position: Vector, // Position initiale de la balle en tant que vecteur (x, y)
        image: string // Chemin de l'image de la balle
    ){
        this.ballSize = ballSize; // Initialisation de la taille de la balle
        this.position = position; // Initialisation de la position de la balle
        this.speed = { // Initialisation de la vitesse de la balle en tant que vecteur
            x: speed, // Composante x de la vitesse (positive)
            y: -speed // Composante y de la vitesse (négative pour que la balle monte initialement)
        }
        this.ballImage.src = image; // Chargement de l'image de la balle en utilisant la source fournie
    };

    // Getter pour obtenir la largeur de la balle
    get width(): number{
        return this.ballSize; // La largeur est égale à la taille de la balle
    }
    
    // Getter pour obtenir la hauteur de la balle
    get height(): number{
        return this.ballSize; // La hauteur est égale à la taille de la balle
    }
    
    // Getter pour obtenir la position actuelle de la balle
    get pos(): Vector{
        return this.position; // Retourne la position actuelle de la balle en tant que vecteur (x, y)
    }
    
    // Getter pour obtenir l'image de la balle
    get image(): HTMLImageElement {
        return this.ballImage; // Retourne l'élément HTML de l'image de la balle
    }

    // Méthode pour changer la direction de la vitesse en y
    changeYDirection(): void {
        this.speed.y = -this.speed.y; // Inverse la composante y de la vitesse pour faire rebondir la balle verticalement
    }
    
    // Méthode pour changer la direction de la vitesse en x
    changeXDirection(): void {
        this.speed.x = -this.speed.x; // Inverse la composante x de la vitesse pour faire rebondir la balle horizontalement
    }
    
    // Méthode pour déplacer la balle
    moveBall(): void {
        this.pos.x += this.speed.x; // Ajoute la composante x de la vitesse à la position x actuelle de la balle
        this.pos.y += this.speed.y; // Ajoute la composante y de la vitesse à la position y actuelle de la balle
    }
}
