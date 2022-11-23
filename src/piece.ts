import { COLS, ROWS, Tetromino } from './constants';
import type { Point } from './constants';
import { Board } from './board';

export class Piece {
    position: Point[];
    identifier: number;
    board: Board;
    isLocked = false;

    constructor(tetromino: Tetromino, board: Board) {
        this.position = tetromino.shape;
        this.identifier= tetromino.identifier;
        this.board = board;
    }

    move(direction: Point): void {
        this.clearCurrentPosition();

        if (!this.isMoveValid(direction)) {
            this.updatePosition({ newValue: this.identifier });
            return;
        }

        this.updatePosition({ direction, newValue: this.identifier });
        this.board.draw();
    }

    isMoveValid(direction: Point): boolean {
        if (!this.isBetweenWalls(direction) || !this.isBetweenOtherPieces(direction)) {
            return false;
        }

        if (!this.isAboveFloor(direction) || !this.isAboveOtherPieces(direction)) {
            this.isLocked = true;
            return false;
        }

        return true;
    }

    lockPiece() {
        this.isLocked = true;
    }

    isBetweenOtherPieces(direction: Point): boolean {
        return this.position.every((point) => {
            const xPosition = point.x + direction.x;
            return this.board.boardState[point.y][xPosition] === 0;
        });
    }

    isAboveOtherPieces(direction: Point): boolean {
        return this.position.every((point) => {
            const yPosition = point.y + direction.y;
            return this.board.boardState[yPosition][point.x] === 0;
        });
    }

    isBetweenWalls(direction: Point): boolean {
        return this.position.every((point) => {
            const xPosition = point.x + direction.x;
            return xPosition >= 0 && xPosition < COLS;
        });
    }

    isAboveFloor(direction: Point) {
        return this.position.every((point) => {
            const yPosition = point.y + direction.y;
            return yPosition < ROWS;
        });
    }

    clearCurrentPosition() {
        this.updatePosition({});
    }

    updatePosition({ direction = { y: 0, x: 0 }, newValue = 0 }): void {
        for (let i = 0; i < this.position.length; i++) {
            const point = this.position[i];

            this.position[i] = {
                y: point.y + direction.y,
                x: point.x + direction.x,
            };

            this.board.boardState[point.y + direction.y][point.x + direction.x] = newValue;
        }
    }
}
