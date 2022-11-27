import { Board } from './board';
import { TETROMINOS, Tetromino, Point } from './constants/tetrominos';
import { DIRECTIONS, KEYS } from './constants/game';
import { gameTemplate } from './templates/game';
import type { Rotations } from './types';
import { Piece } from './piece';
import { GameState } from './gameState';

export class Game {
    private startButtonId = 'startButton';
    private startButton: HTMLButtonElement;
    private scoreId = 'score';
    scoreElement: HTMLElement;
    private clearedLinesId = 'clearedLines';
    clearedlinesElement: HTMLElement;
    private levelId = 'level';
    levelElement: HTMLElement;
    private pauseId = 'pauseOverlay';
    private pauseElement: HTMLElement;
    private gameOverId = 'gameOverOverlay';
    private gameOverElement: HTMLElement;
    state: GameState;
    private boardId = 'board';
    private board: Board;
    private piece: Piece;
    private gameLoop!: number;
    private isRunning = false;

    constructor() {
        this.renderTemplate();
        this.startButton = document.getElementById(this.startButtonId) as HTMLButtonElement;
        this.scoreElement = document.getElementById(this.scoreId) as HTMLElement;
        this.clearedlinesElement = document.getElementById(this.clearedLinesId) as HTMLElement;
        this.levelElement = document.getElementById(this.levelId) as HTMLElement;
        this.pauseElement = document.getElementById(this.pauseId) as HTMLElement;
        this.gameOverElement = document.getElementById(this.gameOverId) as HTMLElement;
        this.state = new GameState(this);
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
        this.stopGameLoop();
        this.pauseElement.classList.remove('is-visible');
        this.gameOverElement.classList.remove('is-visible');
        this.state.reset();
        this.board = new Board(this.boardId, this);
        this.piece = this.getRandomPiece();
    }

    startGameLoop(): void {
        console.log(this.state.speed);
        
        this.gameLoop = setInterval(() => {
            this.movePiece({ direction: DIRECTIONS.DOWN });

            if (this.piece.isLocked) {
                this.board.checkLineClear();
                this.state.updateScore();
                this.state.checkLevelChange();
                this.piece = this.getRandomPiece();
                this.movePiece({ direction: DIRECTIONS.NO_CHANGE, initialDrop: true });
            }
        }, this.state.speed);
    }

    stopGameLoop(): void {
        clearInterval(this.gameLoop);
    }

    private attachEventHandlers(): void {
        this.startButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.startGame();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === KEYS.PAUSE) {
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
            this.state.softDropCount++;
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
            tetromino = this.getRandomTetromino();
        }

        return new Piece(tetromino, this.board);
    }

    private getRandomTetromino(): Tetromino {
        const index = Math.floor(Math.random() * TETROMINOS.length);
        return JSON.parse(JSON.stringify(TETROMINOS[index])) as Tetromino;
    }

    private togglePause() {
        this.isRunning = !this.isRunning;
        this.pauseElement.classList.toggle('is-visible');
        if (this.isRunning) {
            this.startGameLoop();
        } else {
            this.stopGameLoop();
        }
    }

    private gameOver() {
        this.gameOverElement.classList.add('is-visible');
        this.stopGameLoop();
    }
}
