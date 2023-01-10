import { render } from 'lit-html';
import { nextPieceTemplate } from '../templates';
import { BLOCK_SIZE } from '../constants/gameConstants';
import { Piece } from './Piece';
import { Shape } from '../constants/tetrominosConstants';
import { Utils } from './Utils';

export class NextPieceBoard {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private nextPieceElementId = 'nextPiece';
    private nextPieceElement: HTMLElement;
    private canvasId = 'nextPieceBoard';

    constructor() {
        this.nextPieceElement = document.getElementById(this.nextPieceElementId) as HTMLElement;
        this.renderNextPieceTemplate();
        this.canvas = document.getElementById(this.canvasId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    private renderNextPieceTemplate() {
        render(nextPieceTemplate(), this.nextPieceElement);
    }

    draw(piece: Piece): void {
        const shape = piece.shapes[0];
        this.setCanvasDimensions(shape);
        for (let y = 0; y < shape.length; y++) {
            for (let x = 0; x < shape[0].length; x++) {
                if (shape[y][x] !== 0) {
                    Utils.drawMino(x, y, this.context, piece.color);
                }
            }
        }
    }

    clear(): void {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }

    private setCanvasDimensions(shape: Shape): void {
        const height = shape.length === 2 ? 2 : shape.length - 1;
        this.context.canvas.width = shape.length * BLOCK_SIZE;
        this.context.canvas.height = height * BLOCK_SIZE;
        this.context.scale(BLOCK_SIZE, BLOCK_SIZE);
    }
}
