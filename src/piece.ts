import { COLS, ROWS, SPAWN_POSITION } from './constants/game';
import type { Tetromino, Point, Shape } from './constants/tetrominos';
import { Board } from './board';

export class Piece {
    isLocked = false;
    private id: number;
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
        this.clearBoardPosition();

        if (!this.isMoveValid(direction)) {
            this.updateBoardPosition({ value: this.id });
            return;
        }

        this.updateBoardPosition({ direction, value: this.id });
    }

    rotate(): void {
        this.clearBoardPosition();
        this.incrementShapeIndex();
        this.updatePiecePosition();

        if (!this.isMoveValid({ y: 0, x: 0 })) {       
            this.decrementShapeIndex(); 
            this.updateBoardPosition({ value: this.id });
            return;
        }

        this.updateBoardPosition({ direction: { y: 0, x: 0 }, value: this.id });
    }

    private updatePiecePosition(): void {
        this.piecePosition = [];
        this.shapes[this.shapeIndex].forEach((row, rowIndex) => {
            row.forEach((value, valueIndex) => {
                if (value === 1) {
                    this.piecePosition.push({
                        x: this.shapePosition.x + valueIndex,
                        y: this.shapePosition.y + rowIndex,
                    })
                }
            })
        });
    }

    private updateBoardPosition({ direction = { y: 0, x: 0 }, value = 0 }): void {
        this.shapePosition = {
            x: this.shapePosition.x + direction.x,
            y: this.shapePosition.y + direction.y,
        }

        this.updatePiecePosition();
        
        this.piecePosition.forEach(pos => {            
            this.board.state[pos.y][pos.x] = value;
        });
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

    private incrementShapeIndex(): void {
        this.shapeIndex !== 3 ? this.shapeIndex++ : this.shapeIndex = 0;
    }

    private decrementShapeIndex(): void {
        this.shapeIndex !== 0 ? this.shapeIndex-- : this.shapeIndex = 3; 
    }

    private isBetweenOtherPieces(direction: Point): boolean {
        return this.piecePosition.every((point) => {
            const xPosition = point.x + direction.x;
            return this.board.state[point.y][xPosition] === 0;
        });
    }

    private isAboveOtherPieces(direction: Point): boolean {
        return this.piecePosition.every((point) => {
            const yPosition = point.y + direction.y;
            return this.board.state[yPosition][point.x] === 0;
        });
    }

    private isBetweenWalls(direction: Point): boolean {
        return this.piecePosition.every((point) => {
            const xPosition = point.x + direction.x;
            return xPosition >= 0 && xPosition < COLS;
        });
    }

    private isAboveFloor(direction: Point) {
        return this.piecePosition.every((point) => {
            const yPosition = point.y + direction.y;
            return yPosition < ROWS;
        });
    }

    private clearBoardPosition() {
        this.updateBoardPosition({});
    }
}
