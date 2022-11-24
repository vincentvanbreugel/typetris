import { ROWS, COLS, BLOCK_SIZE, COLORS } from './constants';

export class Board {
    state: number[][];
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(boardId: string) {
        this.canvas = document.getElementById(boardId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.state = Array.from(Array(ROWS), () => Array(COLS).fill(0));
        this.create();
    }

    draw(): void {
        for (let y = 0; y < this.state.length; y++) {
            for (let x = 0; x < this.state[0].length; x++) {
                this.context.fillStyle = COLORS[this.state[y][x]];
                this.context.fillRect(x, y, 1, 1);
            }
        }
    }

    private create(): void {
        this.context.canvas.width = COLS * BLOCK_SIZE;
        this.context.canvas.height = ROWS * BLOCK_SIZE;
        this.context.scale(BLOCK_SIZE, BLOCK_SIZE);
    }
}
