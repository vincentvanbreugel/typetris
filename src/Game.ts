import { render } from 'lit-html';
import { Board } from './Board';
import { TETROMINOS, Tetromino, Point } from './constants/tetrominos';
import { DIRECTIONS, KEYS } from './constants/game';
import { gameTemplate, overlayTemplate, gameOptionsTemplate } from './templates';
import type { Rotations } from './types';
import { Piece } from './Piece';
import { NextPieceBoard } from './NextPieceBoard';
import { GameState } from './GameState';

export class Game {
    state: GameState;
    private gameOptionsId = 'gameOptions';
    private gameOptionsElement: HTMLElement;
    private overlayId = 'gameOverlay';
    private overlayElement: HTMLElement;
    private boardId = 'board';
    private board: Board;
    private levelBtnAttr = '[data-level-btn]';
    private nextPieceBoard: NextPieceBoard;
    private piece: Piece;
    private nextPiece: Piece;
    private requestId: number | undefined;
    private gameTimer = { start: 0, elapsed: 0 };
    private lineClearActive = false;

    constructor(elementId: string) {
        this.renderGameTemplate(elementId);
        this.gameOptionsElement = document.getElementById(this.gameOptionsId) as HTMLElement;
        this.renderGameOptionsTemplate();
        this.overlayElement = document.getElementById(this.overlayId) as HTMLElement;
        this.state = new GameState(this);
        this.board = new Board(this.boardId);
        this.nextPieceBoard = new NextPieceBoard();
        this.piece = this.getRandomPiece();
        this.nextPiece = this.getRandomPiece();
        this.attachEventHandlers();
    }

    startGame(): void {
        this.setGameOptions();
        this.renderGameOptionsTemplate('hide');
        this.movePiece({ direction: DIRECTIONS.NO_CHANGE });
        this.nextPieceBoard.draw(this.nextPiece);
        this.startGameLoop();
    }

    restartGame(): void {
        this.stopGameLoop();
        this.state.reset();
        this.board = new Board(this.boardId);
        this.piece = this.getRandomPiece();
        this.nextPiece = this.getRandomPiece();
        this.renderOverlayTemplate('hide');
        this.renderGameOptionsTemplate();
    }

    private renderGameTemplate(elementId: string) {
        const element = document.getElementById(elementId) as HTMLElement;
        render(gameTemplate(), element);
    }

    private renderGameOptionsTemplate(state = 'show') {
        const data = {
            hide: state === 'hide' ? true : false,
            startGame: this.startGame.bind(this),
        };
        render(gameOptionsTemplate(data), this.gameOptionsElement);
    }

    private renderOverlayTemplate(state: 'paused' | 'gameOver' | 'hide') {
        const data = {
            text: state === 'paused' ? 'Paused' : 'Game over',
            btnText: state === 'paused' ? 'Resume' : 'Start new Game',
            action: state === 'paused' ? this.handleClickPause.bind(this) : this.restartGame.bind(this),
            hide: state === 'hide' ? true : false,
        };
        render(overlayTemplate(data), this.overlayElement);
    }

    private attachEventHandlers(): void {
        document.addEventListener('keydown', (event) => {
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

        const levelSelectButtons = document.querySelectorAll(this.levelBtnAttr);
        levelSelectButtons.forEach((btn) => {HTMLButtonElement
            btn.addEventListener('click', (e) => {
                levelSelectButtons.forEach((element) => {
                    element.classList.remove('active');
                });

                const target = e.target as Element;

                if (target) {
                    target.classList.add('active');
                }
            });
        });
    }

    private async startGameLoop(timeStamp: DOMHighResTimeStamp = 0): Promise<void> {
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

    private stopGameLoop(): void {
        cancelAnimationFrame(this.requestId as number);
    }

    private setGameOptions(): void {
        const selectedLevel = (<HTMLButtonElement>document.querySelector(`${this.levelBtnAttr}.active`))?.value;        
        this.state.setGameOptions({ level: parseInt(selectedLevel, 10) });
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

    private async checkLinesClear() {
        const linesCleared = this.board.getLinesCleared();
        if (linesCleared.length) {
            await this.board.handleClearLines(linesCleared);
            this.state.newLinesCleared = linesCleared.length;
        }
    }

    private handleClickPause() {
        this.state.togglePause();
        if (!this.state.isPaused) {
            this.startGameLoop();
            this.renderOverlayTemplate('hide');
        } else {
            this.stopGameLoop();
            this.renderOverlayTemplate('paused');
        }
    }

    private gameOver() {
        this.state.isGameOver = true;
        this.nextPieceBoard.clear();
        this.renderOverlayTemplate('gameOver');
    }
}
