// Importation des images des briques
import RED_BRICK_IMAGE from './images/brick-red.png';
import BLUE_BRICK_IMAGE from './images/brick-blue.png';
import GREEN_BRICK_IMAGE from './images/brick-green.png';
import YELLOW_BRICK_IMAGE from './images/brick-yellow.png';
import PURPLE_BRICK_IMAGE from './images/brick-purple.png';

// Sélection de l'élément canvas pour calculer la largeur des briques en fonction de la largeur du canvas
const canvas: HTMLCanvasElement | null = document.querySelector('#playField');

// Constantes
export const STAGE_PADDING = 10; // Marge autour de la scène de jeu
export const STAGE_ROWS = 20; // Nombre de lignes de la scène
export const STAGE_COLS = 10; // Nombre de colonnes de la scène
export const BRICK_PADDING = 5; // Marge entre les briques

// Calcul de la largeur des briques en fonction de la largeur du canvas
export const BRICK_WIDTH = canvas
  ? Math.floor((canvas.width - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING
  : 100;

// Calcul de la hauteur des briques en fonction de la hauteur du canvas
export const BRICK_HEIGHT = canvas
  ? Math.floor((canvas.height - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING
  : 30;

// Dimensions et position initiale de la raquette
export const PADDLE_WIDTH = 150;
export const PADDLE_HEIGHT = 25;
export const PADDLE_STARTX = 450;

// Vitesse de la raquette
export const PADDLE_SPEED = 5;

// Vitesse, taille et position initiale de la balle
export const BALL_SPEED = 2;
export const BALL_SIZE = 20;
export const BALL_STARTX = 500;
export const BALL_STARTY = 400;

// Dictionnaire pour les images des briques, associant un numéro à chaque image
export const BRICK_IMAGES: { [key: number]: string } = {
  1: RED_BRICK_IMAGE,
  2: GREEN_BRICK_IMAGE,
  3: YELLOW_BRICK_IMAGE,
  4: BLUE_BRICK_IMAGE,
  5: PURPLE_BRICK_IMAGE
};

// Dictionnaire pour l'énergie des briques, associant un numéro à chaque niveau d'énergie
export const BRICK_ENERGY: { [key: number]: number } = {
  1: 1, // Brique rouge
  2: 1, // Brique verte
  3: 2, // Brique jaune
  4: 2, // Brique bleue
  5: 3 // Brique violette
};

// Configuration du niveau du jeu
// Chaque nombre représente un type de brique ou un espace vide (0)
export const LEVEL = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
  0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
  0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 
  0, 0, 5, 5, 0, 0, 5, 5, 0, 0,
];
