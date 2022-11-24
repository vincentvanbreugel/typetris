import { COLS, ROWS } from './constants';
import type { Tetromino, Point } from './constants/tetrominos';
import { Board } from './board';

export class Piece {
    isLocked = false;
    private position: Point[];
    private identifier: number;
    private board: Board;

    constructor(tetromino: Tetromino, board: Board) {
        this.position = tetromino.shape;
        this.identifier = tetromino.identifier;
        this.board = board;
    }

    move(direction: Point): void {
        this.clearCurrentPosition();

        if (!this.isMoveValid(direction)) {
            this.updatePosition({ newValue: this.identifier });
            return;
        }

        this.updatePosition({ direction, newValue: this.identifier });
    }

    rotate(): void {
        console.log('rotate');
    }

    private isMoveValid(direction: Point): boolean {
        if (!this.isBetweenWalls(direction) || !this.isBetweenOtherPieces(direction)) {
            return false;
        }

        if (!this.isAboveFloor(direction) || !this.isAboveOtherPieces(direction)) {
            this.lockPiece();
            return false;
        }

        return true;
    }

    private lockPiece() {
        this.isLocked = true;
    }

    private isBetweenOtherPieces(direction: Point): boolean {
        return this.position.every((point) => {
            const xPosition = point.x + direction.x;
            return this.board.state[point.y][xPosition] === 0;
        });
    }

    private isAboveOtherPieces(direction: Point): boolean {
        return this.position.every((point) => {
            const yPosition = point.y + direction.y;
            return this.board.state[yPosition][point.x] === 0;
        });
    }

    private isBetweenWalls(direction: Point): boolean {
        return this.position.every((point) => {
            const xPosition = point.x + direction.x;
            return xPosition >= 0 && xPosition < COLS;
        });
    }

    private isAboveFloor(direction: Point) {
        return this.position.every((point) => {
            const yPosition = point.y + direction.y;
            return yPosition < ROWS;
        });
    }

    private clearCurrentPosition() {
        this.updatePosition({});
    }

    private updatePosition({ direction = { y: 0, x: 0 }, newValue = 0 }): void {
        for (let i = 0; i < this.position.length; i++) {
            const point = this.position[i];

            this.position[i] = {
                y: point.y + direction.y,
                x: point.x + direction.x,
            };

            this.board.state[point.y + direction.y][point.x + direction.x] = newValue;
        }
    }
}
