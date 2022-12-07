import { BLOCK_SIZE } from './constants/game';
import { COLORS } from './constants/colors';
import { Piece } from './Piece';
import { Shape } from './constants/tetrominos';

export class NextPieceBoard {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private clearState = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];

    constructor(boardId: string) {
        this.canvas = document.getElementById(boardId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    draw(piece: Piece): void {
        const shape = piece.shapes[0];
        this.setCanvasDimensions(shape);
        for (let y = 0; y < shape.length; y++) {
            for (let x = 0; x < shape[0].length; x++) {
                if (shape[y][x] !== 0) {
                    this.context.fillStyle = piece.color;
                } else {
                    this.context.fillStyle = COLORS.empty;
                }
                this.context.fillRect(x, y, 1, 1);
            }
        }
    }

    clear(): void {
        this.context.fillStyle = COLORS.empty;

        for (let y = 0; y < this.clearState.length; y++) {
            for (let x = 0; x < this.clearState[0].length; x++) {
                this.context.fillRect(x, y, 1, 1);
            }
        }
    }

    private setCanvasDimensions(shape: Shape): void {
        const height = shape.length === 2 ? 2 : shape.length - 1;
        this.context.canvas.width = shape.length * BLOCK_SIZE;
        this.context.canvas.height = height * BLOCK_SIZE;
        this.context.scale(BLOCK_SIZE, BLOCK_SIZE);
    }
}
