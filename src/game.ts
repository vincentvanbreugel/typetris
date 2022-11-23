import { Board } from './board';
import { TETROMINOS } from './constants';
import { Piece } from './piece';

export class Game {
    startButton: HTMLButtonElement;
    board: Board;
    piece: Piece;

    constructor(boardId: string, startButtonId: string) {
        this.startButton = document.getElementById(startButtonId) as HTMLButtonElement;
        this.board = new Board(boardId);
        this.piece = this.getRandomPiece();

        this.attachEventHandlers();
    }

    attachEventHandlers(): void {
        this.startButton.addEventListener('click', () => {
            this.startGame();
        });

        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowDown':
                    this.piece.move({ y: 1, x: 0 });
                    break;
                case 'ArrowLeft':
                    this.piece.move({ y: 0, x: -1 });
                    break;
                case 'ArrowRight':
                    this.piece.move({ y: 0, x: 1 });
                    break;
            }
        });
    }

    startGame(): void {
        this.piece.move({ y: 0, x: 0 });

        const gameInterval = window.setInterval(() => {
            this.piece.move({ y: 1, x: 0 });

            if (this.piece.isLocked) {
                this.piece = this.getRandomPiece();
                this.piece.move({ y: 0, x: 0 });
            }
        }, 400);
    }

    getRandomPiece(): Piece {
        const index = Math.floor(Math.random() * TETROMINOS.length);
        const tetromino = JSON.parse(JSON.stringify(TETROMINOS[index]));

        return new Piece(tetromino, this.board);
    }
}
