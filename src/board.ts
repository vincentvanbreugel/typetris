import { ROWS, COLS, BLOCK_SIZE } from "./constants";
import { Piece } from "./piece";

export class Board {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(boardId: string) {
        this.canvas = document.getElementById(boardId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.drawBoard();
    }

    drawBoard(): void {
        this.context.canvas.width = COLS * BLOCK_SIZE;
        this.context.canvas.height = ROWS * BLOCK_SIZE;
        this.context.scale(BLOCK_SIZE, BLOCK_SIZE);
    }

    dropNewPiece(piece: Piece): void {
        this.context.fillRect(5, piece.shape[0].length, piece.shape[0].length, piece.shape[0].length);
    }
}
