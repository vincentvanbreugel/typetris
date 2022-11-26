import { Board } from './board';
import { TETROMINOS, Point } from './constants/tetrominos';
import { DIRECTIONS, KEYS, BASE_SCORES_LINE_CLEAR, BASE_SCORE_SOFT_DROP } from './constants/game';
import type { Rotations } from './types';
import { Piece } from './piece';

export class Game {
    private startButtonId = 'startButton';
    private startButton: HTMLButtonElement;
    private scoreId = 'score';
    private scoreElement: HTMLElement;
    private clearedLinesId = 'clearedLines'
    private clearedlinesElement: HTMLElement;
    private boardId = 'board';
    private board: Board;
    private piece: Piece;
    private score: number;
    private level: number;
    private gameLoop!: number;
    newLinesCleared = 0;
    private totalLinesCleared = 0;
    private softDropCount = 0;

    constructor() {
        this.score = 0;
        this.level = 0;
        this.renderTemplate();
        this.startButton = document.getElementById(this.startButtonId) as HTMLButtonElement;
        this.scoreElement = document.getElementById(this.scoreId) as HTMLElement;
        this.clearedlinesElement = document.getElementById(this.clearedLinesId) as HTMLElement;
        this.board = new Board(this.boardId, this);
        this.piece = this.getRandomPiece();
        this.attachEventHandlers();
    }

    renderTemplate() {
        const template = `
            <div class="container">
                <canvas id="board" class="board"></canvas>
                <div>
                    <button type="button" id="startButton">Start</button>
                    <div>Score</div>
                    <div id="score" class="score">0</div>
                    <div>Lines Cleared</div>
                    <div id="clearedLines" class="clearedLines">0</div>
                </div>
            </div>
        `;

        const body = document.querySelector('body') as HTMLBodyElement;
        body.insertAdjacentHTML('afterbegin', template);
    }

    startGame(): void {
        this.movePiece({ direction: DIRECTIONS.NO_CHANGE });

        this.gameLoop = setInterval(() => {
            this.movePiece({ direction: DIRECTIONS.DOWN });
            this.board.checkLineClear();

            if (this.piece.isLocked) {
                this.updateScore();
                this.piece = this.getRandomPiece();
                this.movePiece({ direction: DIRECTIONS.NO_CHANGE, initialDrop: true });
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
        if (!this.piece.isMoveValid({ direction })) {
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

    private gameOver() {
        alert('game over');
        clearInterval(this.gameLoop);
    }
}
