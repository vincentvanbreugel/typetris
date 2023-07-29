import { Board } from './Board';
import { Piece } from './Piece';
import { AudioPlayer } from './AudioPlayer';
import { NextPieceBoard } from './NextPiece';
import { Display } from './Display';
import { GameState } from './GameState';
import { Inputs } from './Inputs';
import { TETROMINOS } from '../constants/tetrominosConstants';
import { DIRECTIONS } from '../constants/gameConstants';
import type { Rotations, Tetromino, Point, MusicOptions } from '../types/types';

export class Game {
    state: GameState;
    private display: Display;
    private board: Board;
    private audioPlayer: AudioPlayer;
    private piece: Piece;
    private nextPiece: Piece;
    private nextPieceBoard: NextPieceBoard;
    private inputs: Inputs;
    private boardId = 'board';
    private gameOptionAttr = 'game-option-btn';
    private requestId: number | undefined;
    private gameTimer = { start: 0, elapsed: 0 };
    lineClearActive = false;

    constructor(elementId: string) {
        this.display = new Display();
        this.display.gameLayout(elementId);
        this.renderNewGameTemplate();
        this.audioPlayer = new AudioPlayer();
        this.state = new GameState(this);
        this.board = new Board(this.boardId);
        this.nextPieceBoard = new NextPieceBoard();
        this.piece = this.getRandomPiece();
        this.nextPiece = this.getRandomPiece();
        this.inputs = new Inputs(this, this.state);
        this.inputs.attachEventHandlers();
    }

    private renderNewGameTemplate(hide = false): void {
        this.display.newGame({
            hide,
            startGame: this.startGame.bind(this),
            selectGameOption: this.selectGameOption.bind(this),
        });
    }

    private renderGameOverTemplate(hide = false): void {
        this.display.gameOver({
            hide,
            action: this.restartGame.bind(this),
        });
    }

    private renderPauseTemplate(hide = false): void {
        this.display.pause({
            hide,
            resumeAction: this.handleClickPause.bind(this),
            newGameAction: this.restartGame.bind(this),
        });
    }

    startGame(): void {
        this.setGameOptions();
        this.renderNewGameTemplate(true);
        this.movePiece({ direction: DIRECTIONS.NO_CHANGE });
        this.nextPieceBoard.draw(this.nextPiece);
        this.startGameLoop();
        this.state.isRunning = true;
        this.audioPlayer.play('music');
    }

    restartGame(): void {
        this.stopGameLoop();
        this.audioPlayer.stop('music');
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
                this.audioPlayer.play('lock');
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

    movePiece(params: { direction: Point; initialDrop?: boolean; userInput?: boolean }): void {
        const { direction, initialDrop, userInput } = params;

        if (!this.piece.isMoveValid({ direction })) {
            if (initialDrop) {
                this.gameOver();
            }
            return;
        }

        if (userInput && (direction === DIRECTIONS.LEFT || direction === DIRECTIONS.RIGHT)) {
            this.audioPlayer.play('move');
        }

        this.piece.move(direction);

        if (userInput && direction === DIRECTIONS.DOWN) {
            this.state.incrementDropScore();

            if (this.piece.isLocked) {
                this.audioPlayer.play('lock');
                this.handleLockedPiece();
            }
        }

        this.board.draw();
    }

    rotatePiece(rotation: Rotations): void {
        if (!this.piece.isMoveValid({ rotation })) {
            return;
        }

        this.audioPlayer.play('rotate');
        this.piece.rotate(rotation);
        this.board.draw();
    }

    hardDrop(): void {
        if (this.piece.isLocked) {
            return;
        }

        const cellsDropped = this.piece.hardDrop();
        this.state.incrementDropScore(cellsDropped, true);

        this.audioPlayer.play('hardDrop');
        this.board.draw();

        if (this.piece.isLocked) {
            this.handleLockedPiece();
        }
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
            this.audioPlayer.play('lineClear');
            await this.board.handleClearLines(linesCleared);
            this.state.newLinesCleared = linesCleared.length;
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

    handleClickPause(): void {
        this.state.togglePause();
        if (!this.state.isPaused) {
            this.startGameLoop();
            this.renderPauseTemplate(true);
            this.audioPlayer.resume('music');
        } else {
            this.stopGameLoop();
            this.renderPauseTemplate();
            this.audioPlayer.pause('music');
        }
    }

    private async gameOver(): Promise<void> {
        this.state.isGameOver = true;
        this.state.isRunning = false;
        this.audioPlayer.stop('music');
        this.audioPlayer.play('gameOver');
        this.nextPieceBoard.clear();
        await this.board.handleGameOver();
        this.renderGameOverTemplate();
    }

    private setGameOptions(): void {
        const musicSetting: MusicOptions = (<HTMLButtonElement>(
            document.querySelector(`[${this.gameOptionAttr}="music"].selected`)
        ))?.value as 'a' | 'b' | 'off';
        const selectedLevel = (<HTMLButtonElement>(
            document.querySelector(`[${this.gameOptionAttr}="level"].selected`)
        ))?.value;

        this.audioPlayer.setMusic(musicSetting);
        this.state.setGameOptions({ level: parseInt(selectedLevel, 10) });
    }

    selectGameOption(e: Event): void {
        const target = e.target as Element;
        const gameOptionType = target.getAttribute(this.gameOptionAttr);
        const valueOptions = document.querySelectorAll(`[game-option-btn="${gameOptionType}"]`);
        valueOptions.forEach((element) => {
            element.classList.remove('selected', 'opacity-100');
            element.classList.add('opacity-25');
        });

        if (target) {
            target.classList.add('selected', 'opacity-100');
            target.classList.remove('opacity-25');
        }
    }
}
