import { Board } from './board';
import { TETROMINOS, Point } from './constants/tetrominos';
import { Piece } from './piece';

export class Game {
    private startButton: HTMLButtonElement;
    private board: Board;
    private piece: Piece;

    constructor(boardId: string, startButtonId: string) {
        this.startButton = document.getElementById(startButtonId) as HTMLButtonElement;
        this.board = new Board(boardId);
        this.piece = this.getRandomPiece();

        this.attachEventHandlers();
    }

    startGame(): void {
        this.movePiece({ y: 0, x: 0 });

        const gameInterval = window.setInterval(() => {            
            this.movePiece({ y: 1, x: 0 });

            if (this.piece.isLocked) {
                this.piece = this.getRandomPiece();
                this.movePiece({ y: 0, x: 0 });
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
                    this.movePiece({ y: 1, x: 0 });
                    break;
                case 'ArrowLeft':
                    this.movePiece({ y: 0, x: -1 });
                    break;
                case 'ArrowRight':
                    this.movePiece({ y: 0, x: 1 });
                    break;
                case 's':
                    this.rotatePiece();
                    break;
            }
        });
    }

    private movePiece(direction: Point): void {
        this.piece.move(direction);
        this.board.draw();
    }

    private rotatePiece(): void {
        this.piece.rotate();
        this.board.draw();
    }

    private getRandomPiece(): Piece {
        const index = Math.floor(Math.random() * TETROMINOS.length);
        const tetromino = JSON.parse(JSON.stringify(TETROMINOS[index]));

        return new Piece(tetromino, this.board);
    }
}
