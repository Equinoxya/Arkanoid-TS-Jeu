// Importation de la classe Brick depuis le fichier correspondant
import { Brick } from "./sprites/Brick";

// Importation des constantes nécessaires depuis le fichier setup
import {
    BRICK_IMAGES, // Images des briques
    LEVEL, // Niveau de jeu représenté par un tableau de chiffres
    STAGE_COLS, // Nombre de colonnes de la scène
    STAGE_PADDING, // Padding (marge) de la scène
    BRICK_WIDTH, // Largeur des briques
    BRICK_HEIGHT, // Hauteur des briques
    BRICK_PADDING, // Padding (marge) entre les briques
    BRICK_ENERGY // Énergie des briques (nombre de coups nécessaires pour les détruire)
} from './setup';

// Fonction pour créer les briques
export function createBricks(): Brick[] {
    return LEVEL.reduce((ack, element, i) => {
        // Calcul de la ligne et de la colonne de la brique en fonction de son index
        const row = Math.floor((i + 1) / STAGE_COLS);
        const col = i % STAGE_COLS;

        // Calcul des coordonnées x et y de la brique
        const x = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING);
        const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING);

        // Si l'élément est 0, aucune brique n'est créée à cette position
        if (element === 0) return ack;

        // Retourne un nouveau tableau de briques avec la nouvelle brique ajoutée
        return [
            ...ack, // Tous les éléments accumulés jusqu'à présent
            new Brick(
                BRICK_WIDTH, // Largeur de la brique
                BRICK_HEIGHT, // Hauteur de la brique
                { x, y }, // Position de la brique
                BRICK_ENERGY[element], // Énergie de la brique en fonction de l'élément
                BRICK_IMAGES[element] // Image de la brique en fonction de l'élément
            )
        ];
    }, [] as Brick[]); // Initialisation de l'accumulateur comme un tableau vide de briques
}
