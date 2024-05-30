// Importation du type Vector depuis un fichier "~/types"
import { Vector } from "~/types";

// Déclaration de la classe Brick (Brique)
export class Brick {
    // Propriété privée pour stocker l'image de la brique
    private brickImage: HTMLImageElement = new Image();

    // Constructeur de la classe Brick
    constructor (
        private brickWidth: number, // Largeur de la brique
        private brickHeight: number, // Hauteur de la brique
        private position: Vector, // Position initiale de la brique en tant que vecteur (x, y)
        private brickEnergy: number, // Energie de la brique (nombre de coups nécessaires pour la détruire)
        image: string // Chemin de l'image de la brique
    ){
        this.brickWidth = brickWidth; // Initialisation de la largeur de la brique
        this.brickHeight = brickHeight; // Initialisation de la hauteur de la brique
        this.position = position; // Initialisation de la position de la brique
        this.brickEnergy = brickEnergy; // Initialisation de l'énergie de la brique
        this.brickImage.src = image; // Chargement de l'image de la brique en utilisant la source fournie
    }

    // Getter pour obtenir la largeur de la brique
    get width(): number {
        return this.brickWidth; // Retourne la largeur de la brique
    }

    // Getter pour obtenir la hauteur de la brique
    get height(): number {
        return this.brickHeight; // Retourne la hauteur de la brique
    }

    // Getter pour obtenir la position actuelle de la brique
    get pos(): Vector {
        return this.position; // Retourne la position actuelle de la brique en tant que vecteur (x, y)
    }

    // Getter pour obtenir l'image de la brique
    get image(): HTMLImageElement {
        return this.brickImage; // Retourne l'élément HTML de l'image de la brique
    }

    // Getter pour obtenir l'énergie actuelle de la brique
    get energy(): number {
        return this.brickEnergy; // Retourne l'énergie actuelle de la brique
    }

    // Setter pour définir une nouvelle valeur pour l'énergie de la brique
    set energy(energy: number){
        this.brickEnergy = energy; // Met à jour l'énergie de la brique avec la nouvelle valeur fournie
    }
}
