import { ROWS, COLS, BLOCK_SIZE, COLORS } from "./constants";
import { Piece } from "./piece";

export class Board {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    boardState: number[][]

    constructor(boardId: string) {
        this.canvas = document.getElementById(boardId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.boardState = Array.from(Array(ROWS), () => Array(COLS).fill(0));
        this.createBoard();
    }

    createBoard(): void {
        this.context.canvas.width = COLS * BLOCK_SIZE;
        this.context.canvas.height = ROWS * BLOCK_SIZE;
        this.context.scale(BLOCK_SIZE, BLOCK_SIZE);
    }

    draw(): void {
        for (let y = 0; y < this.boardState.length; y++) {
            for (let x = 0; x < this.boardState[0].length; x++) {
                this.context.fillStyle = COLORS[this.boardState[y][x]];
                this.context.fillRect(x, y, 1, 1);
            }
        }
    }
}
