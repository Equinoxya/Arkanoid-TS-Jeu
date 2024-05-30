// Importation des modules et classes nécessaires
import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { Collision } from "./Collison";

// Importation des images
import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';

// Importation des constantes de configuration
import {
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY
} from "./setup";

// Importation de la fonction auxiliaire pour créer les briques
import { createBricks } from "./helpers";

// Variables pour suivre l'état du jeu
let gameOver = false;
let score = 0;

// Fonction pour afficher le message de fin de jeu
function setGameOver(view: CanvasView) {
    view.drawInfo('Game Over!');
    gameOver = false;
}

// Fonction pour afficher le message de victoire
function setGameWin(view: CanvasView) {
    view.drawInfo('Game Won!');
    view.clear();
    gameOver = false;
}

// Boucle principale du jeu
function gameLoop(
    view: CanvasView,
    bricks: Brick[],
    paddle: Paddle,
    ball: Ball,
    collision: Collision
) {
    // Nettoyage de la vue et redessin des éléments
    view.clear();
    view.drawBricks(bricks);
    view.drawSprite(paddle);
    view.drawSprite(ball);

    // Mouvement de la balle
    ball.moveBall();

    // Mouvement de la raquette
    if (
        (paddle.isMovingLeft && paddle.pos.x > 0) || 
        (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
    ) {
        paddle.movePaddle();
    }

    // Vérification des collisions
    collision.checkBallCollision(ball, paddle, view);
    const isCollidingBrick = collision.isCollidingBricks(ball, bricks);
    if (isCollidingBrick) {
        score += 1;
        view.drawScore(score);
    }

    // Vérification de la fin de jeu
    if (ball.pos.y > view.canvas.height) gameOver = true;
    if (bricks.length === 0) return setGameWin(view);
    if (gameOver) return setGameOver(view);

    // Requête pour la prochaine frame de la boucle de jeu
    requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision));
}

// Fonction pour démarrer le jeu
function startGame(view: CanvasView) {
    console.log("HELLO");
    score = 0;
    view.drawInfo('');
    view.drawScore(0);

    // Création de l'instance de collision
    const collision = new Collision();

    // Création des briques
    const bricks = createBricks();

    // Création de la balle
    const ball = new Ball(
        BALL_SPEED,
        BALL_SIZE,
        { x: BALL_STARTX, y: BALL_STARTY },
        BALL_IMAGE
    );

    // Création de la raquette
    const paddle = new Paddle(
        PADDLE_SPEED,
        PADDLE_WIDTH,
        PADDLE_HEIGHT,
        {
            x: PADDLE_STARTX,
            y: view.canvas.height - PADDLE_HEIGHT - 5
        },
        PADDLE_IMAGE
    );

    // Lancement de la boucle de jeu
    gameLoop(view, bricks, paddle, ball, collision);
}

// Création d'une nouvelle vue
const view = new CanvasView('#playField');
view.initStartButton(startGame);
