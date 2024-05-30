// Importation des classes Brick, Paddle, Ball et CanvasView depuis leurs fichiers respectifs
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { Ball } from "./sprites/Ball";
import { CanvasView } from "./view/CanvasView";

// Déclaration de la classe Collision pour gérer les collisions
export class Collision {
    // Méthode pour vérifier la collision entre la balle et une brique
    isCollidingBrick(ball: Ball, brick: Brick): boolean {
        // Vérifie si les coordonnées de la balle chevauchent celles de la brique
        if (
            ball.pos.x < brick.pos.x + brick.width && // Bord droit de la balle par rapport au bord gauche de la brique
            ball.pos.x + ball.width > brick.pos.x && // Bord gauche de la balle par rapport au bord droit de la brique
            ball.pos.y < brick.pos.y + brick.height && // Bord bas de la balle par rapport au bord haut de la brique
            ball.pos.y + ball.height > brick.pos.y // Bord haut de la balle par rapport au bord bas de la brique
        ) {
            return true; // Collision détectée
        }
        return false; // Pas de collision
    }

    // Méthode pour vérifier la collision entre la balle et une liste de briques
    isCollidingBricks(ball: Ball, bricks: Brick[]): boolean {
        let colliding = false; // Variable pour suivre l'état de collision

        // Parcourt chaque brique dans la liste
        bricks.forEach((brick, i) => {
            if (this.isCollidingBrick(ball, brick)) { // Si une collision est détectée avec une brique
                ball.changeYDirection(); // Change la direction de la balle en y
                if (brick.energy === 1) { // Si l'énergie de la brique est de 1
                    bricks.splice(i, 1); // Supprime la brique de la liste
                } else {
                    brick.energy -= 1; // Réduit l'énergie de la brique de 1
                }
                colliding = true; // Marque qu'une collision a eu lieu
            }
        });
        return colliding; // Retourne l'état de collision
    }

    // Méthode pour vérifier la collision de la balle avec la raquette et les murs
    checkBallCollision(ball: Ball, paddle: Paddle, view: CanvasView): void {
        // 1. Vérifie la collision de la balle avec la raquette
        if (
            ball.pos.x + ball.width > paddle.pos.x && // Bord droit de la balle par rapport au bord gauche de la raquette
            ball.pos.x < paddle.pos.x + paddle.width && // Bord gauche de la balle par rapport au bord droit de la raquette
            ball.pos.y + ball.height === paddle.pos.y // Bord bas de la balle par rapport au bord haut de la raquette
        ) {
            ball.changeYDirection(); // Change la direction de la balle en y
        }

        // 2. Vérifie la collision de la balle avec les murs
        if (ball.pos.x > view.canvas.width - ball.width || ball.pos.x < 0) {
            ball.changeXDirection(); // Change la direction de la balle en x lorsqu'elle touche le mur gauche ou droit
        }
        if (ball.pos.y < 0) {
            ball.changeYDirection(); // Change la direction de la balle en y lorsqu'elle touche le mur supérieur
        }
    }
}
