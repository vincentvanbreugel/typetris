import { Tetromino } from "./constants";
import { Board } from "./board";

export class Piece {
    piece: Tetromino;
    board: Board;

    constructor(shape: Tetromino, board: Board) {
        this.piece = shape;
        this.board = board;
    }

    move(direction: {y: number, x: number}) {
        this.clearCurrentPosition();

        for (let i = 0; i < this.piece.position.length; i++) {
            const point = this.piece.position[i];

            this.piece.position[i] = {
                y: point.y + direction.y,
                x: point.x + direction.x,
            },
            this.board.boardState[point.y + direction.y][point.x + direction.x] = this.piece.identifier;
            this.board.draw();
        }
    }

    clearCurrentPosition() {
        for (let i = 0; i < this.piece.position.length; i++) {
            const point = this.piece.position[i]
            this.board.boardState[point.y][point.x] = 0;
        }
    }
}
