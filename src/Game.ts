import { Board } from './Board';
import { TETROMINOS, Tetromino, Point } from './constants/tetrominos';
import { BASE_SCORE_HARD_DROP, DIRECTIONS, KEYS } from './constants/game';
import { gameTemplate } from './templates/game';
import type { Rotations } from './types';
import { Piece } from './Piece';
import { GameState } from './GameState';

export class Game {
    private startButtonId = 'startButton';
    private startButton: HTMLButtonElement;
    private restartButtonId = 'restartButton';
    private restartButton: HTMLButtonElement;
    private scoreId = 'score';
    scoreElement: HTMLElement;
    private clearedLinesId = 'clearedLines';
    clearedlinesElement: HTMLElement;
    private levelId = 'level';
    levelElement: HTMLElement;
    private newGameId = 'newGameOverlay';
    private newGameElement: HTMLElement;
    private pauseId = 'pauseOverlay';
    private pauseElement: HTMLElement;
    private gameOverId = 'gameOverOverlay';
    private gameOverElement: HTMLElement;
    state: GameState;
    private boardId = 'board';
    private board: Board;
    private piece: Piece;
    private timeoutId: number | undefined;

    constructor() {
        this.renderTemplate();
        this.startButton = document.getElementById(this.startButtonId) as HTMLButtonElement;
        this.restartButton = document.getElementById(this.restartButtonId) as HTMLButtonElement;
        this.scoreElement = document.getElementById(this.scoreId) as HTMLElement;
        this.clearedlinesElement = document.getElementById(this.clearedLinesId) as HTMLElement;
        this.newGameElement = document.getElementById(this.newGameId) as HTMLElement;
        this.levelElement = document.getElementById(this.levelId) as HTMLElement;
        this.pauseElement = document.getElementById(this.pauseId) as HTMLElement;
        this.gameOverElement = document.getElementById(this.gameOverId) as HTMLElement;
        this.state = new GameState(this);
        this.board = new Board(this.boardId);
        this.piece = this.getRandomPiece();
        this.attachEventHandlers();
    }

    startGame(): void {
        this.setGameOptions();
        this.newGameElement.classList.remove('is-visible');
        this.movePiece({ direction: DIRECTIONS.NO_CHANGE });
        this.startGameLoop();
    }

    restartGame(): void {
        this.stopGameLoop();
        this.resetGame();
        this.newGameElement.classList.add('is-visible');
        this.pauseElement.classList.remove('is-visible');
    }

    private renderTemplate() {
        const body = document.querySelector('body') as HTMLBodyElement;
        body.insertAdjacentHTML('afterbegin', gameTemplate);
    }

    private attachEventHandlers(): void {
        this.startButton.addEventListener('click', (e: Event) => {
            this.startGame();
            (e.target as HTMLElement).blur();
        });

        this.restartButton.addEventListener('click', (e: Event) => {
            this.restartGame();
            (e.target as HTMLElement).blur();
        });

        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case KEYS.PAUSE:
                    this.handleClickPause();
                    break;
                case KEYS.HARD_DROP:
                    this.hardDrop();
                    break;
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

    private startGameLoop(): void {
        this.timeoutId = setTimeout(async () => {
            this.movePiece({ direction: DIRECTIONS.DOWN });

            if (this.piece.isLocked) {
                await this.checkLinesClear();
                this.state.updateScore();
                this.state.checkLevelChange();
                this.piece = this.getRandomPiece();
                this.movePiece({ direction: DIRECTIONS.NO_CHANGE, initialDrop: true });
            }

            this.startGameLoop();
        }, this.state.speed);
    }

    private stopGameLoop(): void {
        clearTimeout(this.timeoutId);
    }

    private resetGame(): void {
        this.pauseElement.classList.remove('is-visible');
        this.gameOverElement.classList.remove('is-visible');
        this.state.reset();
        this.board = new Board(this.boardId);
        this.piece = this.getRandomPiece();
    }

    private setGameOptions(): void {
        const selectedLevel = (<HTMLOptionElement>(
            document.querySelector('input[name="level-select"]:checked')
        ))?.value;
        this.state.setLevel(parseInt(selectedLevel, 10));
    }

    private movePiece(params: {
        direction: Point;
        initialDrop?: boolean;
        userInput?: boolean;
    }): void {
        const { direction, initialDrop, userInput } = params;

        if (this.state.isPaused || !this.piece.isMoveValid({ direction })) {
            if (initialDrop) {
                this.gameOver();
            }
            return;
        }

        this.piece.move(direction);
        this.board.draw();

        if (userInput && direction === DIRECTIONS.DOWN) {
            this.state.dropScore++;
        }
    }

    private rotatePiece(rotation: Rotations): void {
        if (this.state.isPaused || !this.piece.isMoveValid({ rotation })) {
            return;
        }

        this.piece.rotate(rotation);
        this.board.draw();
    }

    private hardDrop(): void {
        const cellsDropped = this.piece.hardDrop();
        this.state.dropScore = this.state.dropScore + cellsDropped * BASE_SCORE_HARD_DROP;
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

    private async checkLinesClear() {
        const linesCleared = this.board.getLinesCleared();
        if (linesCleared.length) {
            await this.board.handleClearLines(linesCleared);
            this.state.newLinesCleared = linesCleared.length;
        }
    }

    private handleClickPause() {
        this.state.togglePause();
        this.pauseElement.classList.toggle('is-visible');

        if (!this.state.isPaused) {
            this.startGameLoop();
        } else {
            this.stopGameLoop();
        }
    }

    private gameOver() {
        this.stopGameLoop();
        this.gameOverElement.classList.add('is-visible');
    }
}
