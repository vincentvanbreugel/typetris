import { Board } from './board';
import { TETROMINOS, Point } from './constants/tetrominos';
import { DIRECTIONS } from './constants/game';
import type { Rotations } from './types';
import { Piece } from './piece';

export class Game {
    private startButton: HTMLButtonElement;
    private board: Board;
    private piece: Piece;
    private gameInterval!: number;

    constructor(boardId: string, startButtonId: string) {
        this.startButton = document.getElementById(startButtonId) as HTMLButtonElement;
        this.board = new Board(boardId);
        this.piece = this.getRandomPiece();

        this.attachEventHandlers();
    }

    startGame(): void {
        this.movePiece({ y: 0, x: 0 });

        this.gameInterval = setInterval(() => {            
            this.movePiece({ y: 1, x: 0 });

            if (this.piece.isLocked) {
                this.piece = this.getRandomPiece();
                this.movePiece({ y: 0, x: 0 }, true);
            }
        }, 1000);
    }

    private attachEventHandlers(): void {
        this.startButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.startGame();
        });

        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowDown':
                    this.movePiece(DIRECTIONS.DOWN);
                    break;
                case 'ArrowLeft':
                    this.movePiece(DIRECTIONS.LEFT);
                    break;
                case 'ArrowRight':
                    this.movePiece(DIRECTIONS.RIGHT);
                    break;
                case 's':
                    this.rotatePiece('clockwise');
                    break;
            }
        });
    }

    private movePiece(direction: Point, newPiece = false): void {
        if (!this.piece.isMoveValid({ direction })) {
            if (newPiece) {
                this.gameOver()
            }
            return;
        }

        this.piece.move(direction);
        this.board.draw();
    }

    private rotatePiece(rotation: Rotations): void {
        if (!this.piece.isMoveValid({ rotation })) {
            return;
        }

        this.piece.rotate(rotation);
        this.board.draw();
    }

    private getRandomPiece(): Piece {
        const index = Math.floor(Math.random() * TETROMINOS.length);
        const tetromino = JSON.parse(JSON.stringify(TETROMINOS[index]));

        return new Piece(tetromino, this.board);
    }

    private gameOver() {
        alert('game over');
        clearInterval(this.gameInterval);
    }
}
