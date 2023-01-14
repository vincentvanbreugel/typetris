import { render } from 'lit-html';
import { Board } from './Board';
import { Piece } from './Piece';
import { AudioPlayer } from './AudioPlayer';
import { NextPieceBoard } from './NextPiece';
import { GameState } from './GameState';
import { TETROMINOS } from '../constants/tetrominosConstants';
import { DIRECTIONS, KEYS } from '../constants/gameConstants';
import { gameLayoutTemplate, newGameTemplate, pauseTemplate, gameOverTemplate } from '../templates';
import type { Rotations, Tetromino, Point } from '../types/types';

export class Game {
    state: GameState;
    private board: Board;
    private audio: AudioPlayer;
    private piece: Piece;
    private nextPiece: Piece;
    private nextPieceBoard: NextPieceBoard;
    private gameOptionsId = 'gameOptions';
    private gameOptionsElement: HTMLElement;
    private overlayId = 'gameOverlay';
    private overlayElement: HTMLElement;
    private boardId = 'board';
    private levelBtnAttr = '[data-level-btn]';
    private requestId: number | undefined;
    private gameTimer = { start: 0, elapsed: 0 };
    private lineClearActive = false;

    constructor(elementId: string) {
        this.renderGameLayoutTemplate(elementId);
        this.gameOptionsElement = document.getElementById(this.gameOptionsId) as HTMLElement;
        this.renderNewGameTemplate();
        this.overlayElement = document.getElementById(this.overlayId) as HTMLElement;
        this.audio = new AudioPlayer();
        this.state = new GameState(this);
        this.board = new Board(this.boardId);
        this.nextPieceBoard = new NextPieceBoard();
        this.piece = this.getRandomPiece();
        this.nextPiece = this.getRandomPiece();
        this.attachEventHandlers();
    }

    private renderGameLayoutTemplate(elementId: string): void {
        const element = document.getElementById(elementId) as HTMLElement;
        render(gameLayoutTemplate(), element);
    }

    private renderNewGameTemplate(hide = false): void {
        const data = {
            hide,
            startGame: this.startGame.bind(this),
            selectLevel: this.selectLevel.bind(this),
        };
        render(newGameTemplate(data), this.gameOptionsElement);
    }

    private renderGameOverTemplate(hide = false): void {
        const data = {
            action: this.restartGame.bind(this),
            hide,
        };
        render(gameOverTemplate(data), this.overlayElement);
    }

    private renderPauseTemplate(hide = false): void {
        const data = {
            resumeAction: this.handleClickPause.bind(this),
            newGameAction: this.restartGame.bind(this),
            hide,
        };
        render(pauseTemplate(data), this.overlayElement);
    }

    private attachEventHandlers(): void {
        document.addEventListener('keydown', (event) => {
            if (!this.state.isRunning) {
                return;
            }

            if (event.key === KEYS.PAUSE) {
                this.handleClickPause();
            }

            if (this.lineClearActive || this.state.isPaused) {
                return;
            }

            switch (event.key) {
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

    startGame(): void {
        this.setGameOptions();
        this.renderNewGameTemplate(true);
        this.movePiece({ direction: DIRECTIONS.NO_CHANGE });
        this.nextPieceBoard.draw(this.nextPiece);
        this.startGameLoop();
        this.state.isRunning = true;
        this.audio.track.play();
    }

    restartGame(): void {
        this.stopGameLoop();
        this.audio.track.pause();
        this.audio.track.currentTime = 0;
        this.state.reset();
        this.nextPieceBoard.clear();
        this.board = new Board(this.boardId);
        this.piece = this.getRandomPiece();
        this.nextPiece = this.getRandomPiece();
        this.renderPauseTemplate(true);
        this.renderGameOverTemplate(true);
        this.renderNewGameTemplate();
    }

    async startGameLoop(timeStamp: DOMHighResTimeStamp = 0): Promise<void> {
        this.gameTimer.elapsed = timeStamp - this.gameTimer.start;
        if (this.lineClearActive) {
            return;
        }

        if (this.gameTimer.elapsed > this.state.speed) {
            this.gameTimer.start = timeStamp;

            if (this.piece.isLocked) {
                await this.handleLockedPiece();
            } else {
                this.movePiece({ direction: DIRECTIONS.DOWN });
            }

            if (this.state.isGameOver) {
                return;
            }
        }

        this.requestId = requestAnimationFrame(this.startGameLoop.bind(this));
    }

    stopGameLoop(): void {
        cancelAnimationFrame(this.requestId as number);
    }

    private movePiece(params: {
        direction: Point;
        initialDrop?: boolean;
        userInput?: boolean;
    }): void {
        const { direction, initialDrop, userInput } = params;

        if (!this.piece.isMoveValid({ direction })) {
            if (initialDrop) {
                this.gameOver();
            }
            return;
        }

        this.piece.move(direction);

        if (userInput && direction === DIRECTIONS.DOWN) {
            this.state.incrementDropScore();

            if (this.piece.isLocked) {
                this.handleLockedPiece();
            }
        }

        this.board.draw();
    }

    private rotatePiece(rotation: Rotations): void {
        if (!this.piece.isMoveValid({ rotation })) {
            return;
        }

        this.audio.rotate.play();
        this.piece.rotate(rotation);
        this.board.draw();
    }

    private hardDrop(): void {
        if (this.piece.isLocked) {
            return;
        }

        const cellsDropped = this.piece.hardDrop();
        this.state.incrementDropScore(cellsDropped, true);

        this.board.draw();

        if (this.piece.isLocked) {
            this.handleLockedPiece();
        }
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

    private async handleLockedPiece(): Promise<void> {
        this.lineClearActive = true;
        this.stopGameLoop();
        await this.checkLinesClear();
        this.state.updateScore();
        this.state.checkLevelChange();
        this.piece = this.nextPiece;
        this.nextPiece = this.getRandomPiece();
        this.nextPieceBoard.draw(this.nextPiece);
        this.movePiece({ direction: DIRECTIONS.NO_CHANGE, initialDrop: true });
        this.lineClearActive = false;
        this.startGameLoop();
    }

    private async checkLinesClear(): Promise<void> {
        const linesCleared = this.board.getLinesCleared();
        if (linesCleared.length) {
            await this.board.handleClearLines(linesCleared);
            this.state.newLinesCleared = linesCleared.length;
        }
    }

    selectLevel(e: Event): void {
        const levelSelectButtons = document.querySelectorAll(this.levelBtnAttr);
        levelSelectButtons.forEach((element) => {
            element.classList.remove('selected', 'opacity-100');
            element.classList.add('opacity-25');
        });

        const target = e.target as Element;
        if (target) {
            target.classList.add('selected', 'opacity-100');
            target.classList.remove('opacity-25');
        }
    }

    private setGameOptions(): void {
        const selectedLevel = (<HTMLButtonElement>document.querySelector(`${this.levelBtnAttr}.selected`))?.value;        
        this.state.setGameOptions({ level: parseInt(selectedLevel, 10) });
    }

    private handleClickPause(): void {
        this.state.togglePause();
        if (!this.state.isPaused) {
            this.startGameLoop();
            this.renderPauseTemplate(true);
            this.audio.track.play();
        } else {
            this.stopGameLoop();
            this.renderPauseTemplate();
            this.audio.track.pause();
        }
    }

    private async gameOver(): Promise<void> {
        this.state.isGameOver = true;
        this.state.isRunning = false;
        this.audio.track.pause();
        this.audio.track.currentTime = 0;
        this.nextPieceBoard.clear();
        await this.board.handleGameOver();
        this.renderGameOverTemplate();
    }
}
