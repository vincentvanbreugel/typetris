import { COLS, ROWS, SPAWN_POSITION, DIRECTIONS } from './constants/game';
import type { Tetromino, Point, Shape } from './constants/tetrominos';
import type { Rotations } from './types';
import type { COLOR } from './constants/colors';
import { Board } from './Board';

export class Piece {
    isLocked = false;
    id: number;
    private anchorPoint: Point;
    private piecePosition: Point[];
    shapes: Shape[];
    color: COLOR;
    private shapeIndex: number;
    private board: Board;

    constructor(tetromino: Tetromino, board: Board) {
        this.id = tetromino.id;
        this.anchorPoint = SPAWN_POSITION;
        this.piecePosition = [];
        this.shapes = tetromino.shapes;
        this.color = tetromino.color;
        this.shapeIndex = 0;
        this.board = board;
    }

    move(direction: Point): void {
        this.clearPiecePosition();
        this.updateBoardPosition({ direction, value: this.id });
        this.isLocked = this.isPieceLocked();
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
        while (this.isMoveValid({ direction: DIRECTIONS.DOWN })) {
            this.move(DIRECTIONS.DOWN);
            cellsDropped++;
        }

        return cellsDropped;
    }

    isPieceLocked(): boolean {
        const params = {
            direction: DIRECTIONS.DOWN,
            piecePosition: this.getCopyPiecePosition(),
        };

        return (
            !this.isAboveFloor(params) ||
            !this.isAboveOtherPieces(params)
        );
    }

    isMoveValid(params: { direction?: Point; rotation?: Rotations }): boolean {
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
                        x: this.anchorPoint.x + valueIndex,
                        y: this.anchorPoint.y + rowIndex,
                    });
                }
            });
        });

        const config = {
            ...(direction && { direction }),
            piecePosition: newPiecePosition,
        };

        if (!this.isBetweenWalls(config) || !this.isBetweenOtherPieces(config)) {
            return false;
        }

        if (!this.isAboveFloor(config) || !this.isAboveOtherPieces(config)) {
            return false;
        }

        return true;
    }

    private updatePiecePosition(): void {
        this.piecePosition = [];
        this.shapes[this.shapeIndex].forEach((row, rowIndex) => {
            row.forEach((value, valueIndex) => {
                if (value === 1) {
                    this.piecePosition.push({
                        x: this.anchorPoint.x + valueIndex,
                        y: this.anchorPoint.y + rowIndex,
                    });
                }
            });
        });
    }

    private updateBoardPosition({ direction = DIRECTIONS.NO_CHANGE, value = 0 }): void {
        this.anchorPoint = {
            x: this.anchorPoint.x + direction.x,
            y: this.anchorPoint.y + direction.y,
        };

        this.updatePiecePosition();

        this.piecePosition.forEach((pos) => {
            this.board.state[pos.y][pos.x] = value;
        });
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

            return this.board.state[point.y][xPosition] === 0 ||
            this.piecePosition.find(p => p.x === xPosition && p.y === point.y );
        });
    }

    private isBetweenWalls(params: { direction?: Point; piecePosition: Point[] }): boolean {
        const { direction, piecePosition } = params;
        return piecePosition.every((point) => {
            const xPosition = direction ? point.x + direction.x : point.x;
            return xPosition >= 0 && xPosition < COLS;
        });
    }

    private isAboveOtherPieces(params: { direction?: Point; piecePosition: Point[] }): boolean {
        const { direction, piecePosition } = params;

        return piecePosition.every((point) => {
            const yPosition = direction ? point.y + direction.y : point.y;
            // check if new point position on the board is either empty or taken up by one of the current Piece points.
            return (
                this.board.state[yPosition][point.x] === 0 ||
                this.piecePosition.find(p => p.x === point.x && p.y === yPosition )
            );
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

    private getCopyPiecePosition(): Point[] {
        return Object.assign([], this.piecePosition);
    }
}
