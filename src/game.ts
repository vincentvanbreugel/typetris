import { Board } from './board';
import { TETROMINOS, Tetromino, Point } from './constants/tetrominos';
import {
    DIRECTIONS,
    KEYS,
    BASE_SCORES_LINE_CLEAR,
    BASE_SCORE_SOFT_DROP,
    GAME_SPEEDS,
} from './constants/game';
import { gameTemplate } from './templates/game';
import type { Rotations } from './types';
import { Piece } from './piece';

export class Game {
    private startButtonId = 'startButton';
    private startButton: HTMLButtonElement;
    private scoreId = 'score';
    private scoreElement: HTMLElement;
    private clearedLinesId = 'clearedLines';
    private clearedlinesElement: HTMLElement;
    private pauseId = 'pauseOverlay';
    private pauseElement: HTMLElement;
    private gameOverId = 'gameOverOverlay';
    private gameOverElement: HTMLElement;
    private boardId = 'board';
    private board: Board;
    private piece: Piece;
    private score: number;
    private level: number;
    private speed: number;
    private gameLoop!: number;
    newLinesCleared = 0;
    private totalLinesCleared = 0;
    private softDropCount = 0;
    private isRunning = false;

    constructor() {
        this.score = 0;
        this.level = 0;
        this.speed = GAME_SPEEDS[this.level];
        this.renderTemplate();
        this.startButton = document.getElementById(this.startButtonId) as HTMLButtonElement;
        this.scoreElement = document.getElementById(this.scoreId) as HTMLElement;
        this.clearedlinesElement = document.getElementById(this.clearedLinesId) as HTMLElement;
        this.pauseElement = document.getElementById(this.pauseId) as HTMLElement;
        this.gameOverElement = document.getElementById(this.gameOverId) as HTMLElement;
        this.board = new Board(this.boardId, this);
        this.piece = this.getRandomPiece();
        this.attachEventHandlers();
    }

    renderTemplate() {
        const body = document.querySelector('body') as HTMLBodyElement;
        body.insertAdjacentHTML('afterbegin', gameTemplate);
    }

    startGame(): void {
        this.resetGame();
        this.isRunning = true;
        this.startButton.innerHTML = 'Restart';
        this.movePiece({ direction: DIRECTIONS.NO_CHANGE });
        this.startGameLoop();
    }

    private resetGame(): void {
        clearInterval(this.gameLoop);
        this.pauseElement.classList.remove('is-visible');
        this.gameOverElement.classList.remove('is-visible');
        this.totalLinesCleared = 0;
        this.softDropCount = 0;
        this.score = 0;
        this.updateScore();
        this.board = new Board(this.boardId, this);
        this.piece = this.getRandomPiece();
    }

    private startGameLoop(): void {
        this.gameLoop = setInterval(() => {
            this.movePiece({ direction: DIRECTIONS.DOWN });

            if (this.piece.isLocked) {
                this.board.checkLineClear();
                this.updateScore();
                this.piece = this.getRandomPiece();
                this.movePiece({ direction: DIRECTIONS.NO_CHANGE, initialDrop: true });
            }
        }, this.speed);
    }

    private attachEventHandlers(): void {
        this.startButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.startGame();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'p') {
                this.togglePause();
            }
        });

        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case KEYS.DOWN:
                    this.movePiece({ direction: DIRECTIONS.DOWN, userInput: true });
                    break;
                case KEYS.LEFT:
                    this.movePiece({ direction: DIRECTIONS.LEFT, userInput: true });
                    break;
                case KEYS.RIGHT:
                    this.movePiece({ direction: DIRECTIONS.RIGHT, userInput: true });
                    break;
                case KEYS.ROTATE_CLOCKWISE:
                    this.rotatePiece('clockwise');
                    break;
                case KEYS.ROTATE_COUNTER_CLOCKWISE:
                    this.rotatePiece('counterClockwise');
                    break;
            }
        });
    }

    private movePiece(params: {
        direction: Point;
        initialDrop?: boolean;
        userInput?: boolean;
    }): void {
        const { direction, initialDrop, userInput } = params;

        if (!this.isRunning || !this.piece.isMoveValid({ direction })) {
            if (initialDrop) {
                this.gameOver();
            }
            return;
        }

        this.piece.move(direction);

        if (userInput && direction === DIRECTIONS.DOWN) {
            this.softDropCount++;
        }

        this.board.draw();
    }

    private rotatePiece(rotation: Rotations): void {
        if (!this.isRunning || !this.piece.isMoveValid({ rotation })) {
            return;
        }

        this.piece.rotate(rotation);
        this.board.draw();
    }

    private getRandomPiece(): Piece {
        let tetromino = this.getRandomTetromino();
        
        // re-roll once
        if (this.piece && tetromino.id === this.piece.id) {
            console.log('reroll');
            
            tetromino = this.getRandomTetromino();
        }

        return new Piece(tetromino, this.board);
    }

    private getRandomTetromino(): Tetromino {
        const index = Math.floor(Math.random() * TETROMINOS.length);
        return JSON.parse(JSON.stringify(TETROMINOS[index])) as Tetromino;
    }

    private updateScore() {
        if (this.newLinesCleared) {
            this.score =
                this.score + BASE_SCORES_LINE_CLEAR[this.newLinesCleared - 1] * (this.level + 1);
            this.totalLinesCleared = this.totalLinesCleared + this.newLinesCleared;
        }

        if (this.softDropCount) {
            this.score = this.score + this.softDropCount * BASE_SCORE_SOFT_DROP;
        }

        this.newLinesCleared = 0;
        this.softDropCount = 0;
        this.scoreElement.innerHTML = `${this.score}`;
        this.clearedlinesElement.innerHTML = `${this.totalLinesCleared}`;
    }

    private togglePause() {
        this.isRunning = !this.isRunning;
        this.pauseElement.classList.toggle('is-visible');
        if (this.isRunning) {
            this.startGameLoop();
        } else {
            clearInterval(this.gameLoop);
        }
    }

    private gameOver() {
        this.gameOverElement.classList.add('is-visible');
        clearInterval(this.gameLoop);
    }
}
