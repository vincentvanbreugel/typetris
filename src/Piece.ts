import { COLS, ROWS, SPAWN_POSITION, DIRECTIONS } from './constants/game';
import type { Tetromino, Point, Shape } from './constants/tetrominos';
import type { Rotations } from './types';
import { Board } from './Board';

export class Piece {
    isLocked = false;
    id: number;
    private shapePosition: Point;
    private piecePosition: Point[];
    private shapes: Shape[];
    private shapeIndex: number;
    private board: Board;

    constructor(tetromino: Tetromino, board: Board) {
        this.id = tetromino.id;
        this.shapePosition = SPAWN_POSITION;
        this.piecePosition = [];
        this.shapes = tetromino.shapes;
        this.shapeIndex = 0;
        this.board = board;
    }

    move(direction: Point): void {
        this.clearPiecePosition();
        this.updateBoardPosition({ direction, value: this.id });
    }

    rotate(rotation: Rotations): void {
        if (rotation === 'clockwise') {
            this.incrementShapeIndex();
        } else {
            this.decrementShapeIndex();
        }

        this.move(DIRECTIONS.NO_CHANGE);
    }

    hardDrop(): number {
        let cellsDropped = 0;
        while(this.isMoveValid({direction: DIRECTIONS.DOWN})) {
            this.move(DIRECTIONS.DOWN);
            cellsDropped++;
        }

        return cellsDropped;
    }

    isMoveValid(params: { direction?: Point; rotation?: Rotations }): boolean {
        this.clearPiecePosition();

        const { direction, rotation } = params;
        const newPiecePosition: Point[] = [];
        let newShapeIndex = this.shapeIndex;

        if (rotation) {
            if (rotation === 'clockwise') {
                this.shapeIndex !== 3 ? newShapeIndex++ : (newShapeIndex = 0);
            } else {
                this.shapeIndex !== 0 ? newShapeIndex-- : (newShapeIndex = 3);
            }
        }

        this.shapes[newShapeIndex].forEach((row, rowIndex) => {
            row.forEach((value, valueIndex) => {
                if (value === 1) {
                    newPiecePosition.push({
                        x: this.shapePosition.x + valueIndex,
                        y: this.shapePosition.y + rowIndex,
                    });
                }
            });
        });

        const config = {
            ...(direction && { direction }),
            piecePosition: newPiecePosition,
        };

        if (!this.isBetweenWalls(config) || !this.isBetweenOtherPieces(config)) {
            this.updateBoardPosition({ value: this.id });
            return false;
        }

        if (!this.isAboveFloor(config) || !this.isAboveOtherPieces(config)) {
            this.updateBoardPosition({ value: this.id });
            this.lockPiece();
            return false;
        }

        this.updateBoardPosition({ value: this.id });
        return true;
    }

    private updatePiecePosition(): void {
        this.piecePosition = [];
        this.shapes[this.shapeIndex].forEach((row, rowIndex) => {
            row.forEach((value, valueIndex) => {
                if (value === 1) {
                    this.piecePosition.push({
                        x: this.shapePosition.x + valueIndex,
                        y: this.shapePosition.y + rowIndex,
                    });
                }
            });
        });
    }

    private updateBoardPosition({ direction = DIRECTIONS.NO_CHANGE, value = 0 }): void {
        this.shapePosition = {
            x: this.shapePosition.x + direction.x,
            y: this.shapePosition.y + direction.y,
        };

        this.updatePiecePosition();

        this.piecePosition.forEach((pos) => {
            this.board.state[pos.y][pos.x] = value;
        });
    }

    private lockPiece() {    
        this.isLocked = true;
    }

    private incrementShapeIndex(): void {
        this.shapeIndex !== 3 ? this.shapeIndex++ : (this.shapeIndex = 0);
    }

    private decrementShapeIndex(): void {
        this.shapeIndex !== 0 ? this.shapeIndex-- : (this.shapeIndex = 3);
    }

    private isBetweenOtherPieces(params: { direction?: Point; piecePosition: Point[] }): boolean {
        const { direction, piecePosition } = params;
        return piecePosition.every((point) => {
            const xPosition = direction ? point.x + direction.x : point.x;
            return this.board.state[point.y][xPosition] === 0;
        });
    }

    private isAboveOtherPieces(params: { direction?: Point; piecePosition: Point[] }): boolean {
        const { direction, piecePosition } = params;
        return piecePosition.every((point) => {
            const yPosition = direction ? point.y + direction.y : point.y;
            return this.board.state[yPosition][point.x] === 0;
        });
    }

    private isBetweenWalls(params: { direction?: Point; piecePosition: Point[] }): boolean {
        const { direction, piecePosition } = params;
        return piecePosition.every((point) => {
            const xPosition = direction ? point.x + direction.x : point.x;
            return xPosition >= 0 && xPosition < COLS;
        });
    }

    private isAboveFloor(params: { direction?: Point; piecePosition: Point[] }) {
        const { direction, piecePosition } = params;
        return piecePosition.every((point) => {
            const yPosition = direction ? point.y + direction.y : point.y;
            return yPosition < ROWS;
        });
    }

    private clearPiecePosition() {
        this.piecePosition.forEach((pos) => {
            this.board.state[pos.y][pos.x] = 0;
        });
    }
}
