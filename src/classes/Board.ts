import { ROWS, COLS, BLOCK_SIZE, LINE_CLEAR_DELAY } from '../constants/gameConstants';
import { COLORS } from '../constants/colorConstants';
import { TETROMINOS } from '../constants/tetrominosConstants';
import { Utils } from './Utils';

export class Board {
    state: number[][];
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private animatedLines: number[] = [];
    private animationTimer = { start: 0, elapsed: 0 };
    private requestId: number | undefined;

    constructor(boardId: string) {
        this.canvas = document.getElementById(boardId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.state = Array.from(Array(ROWS), () => Array(COLS).fill(0));
        this.create();
    }

    draw(): void {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.fillStyle = COLORS.gray['darker'];
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);

        for (let y = 0; y < this.state.length; y++) {
            for (let x = 0; x < this.state[0].length; x++) {
                const tetromino = TETROMINOS.find((tetromino) => {
                    return tetromino.id === this.state[y][x];
                });

                tetromino && Utils.drawMino(x, y, this.context, tetromino.color);
            }
        }
    }

    async handleClearLines(lines: number[]): Promise<void> {
        this.animatedLines = lines;
        this.animateClearedLines();
        await Utils.sleep(LINE_CLEAR_DELAY);

        cancelAnimationFrame(this.requestId as number);
        this.animatedLines = [];
        this.clearLines(lines);
    }

    getLinesCleared(): number[] {
        const linesCleared = this.state.reduce((array, row, index) => {
            if (row.every((col) => col !== 0)) {
                array.push(index);
            }
            return array;
        }, []);

        return linesCleared || [];
    }

    private clearLines(lines: number[]) {
        lines.forEach((line) => {
            const currentState = JSON.parse(JSON.stringify(this.state)) as number[][];
            this.state.forEach((row, rowIndex) => {
                if (rowIndex === 0) {
                    for (let i = 0; i < row.length; i++) {
                        row[i] = 0;
                    }
                }
                if (rowIndex > 0 && rowIndex <= line) {
                    for (let i = 0; i < row.length; i++) {
                        row[i] = currentState[rowIndex - 1][i];
                    }
                }
            });
        });
    }

    private animateClearedLines(timeStamp: DOMHighResTimeStamp = 0): void {
        this.context.fillStyle = COLORS.gray['darker'];
        this.animationTimer.elapsed = timeStamp - this.animationTimer.start;
        if (this.animationTimer.elapsed >= LINE_CLEAR_DELAY / 5) {
            this.animationTimer.start = timeStamp;

            this.animatedLines.forEach((line) => {
                const lastClearedIndexFromLeft = this.state[line].indexOf(0);
                const nextIndexFromLeft =
                    lastClearedIndexFromLeft !== -1
                        ? lastClearedIndexFromLeft - 1
                        : 4;

                const lastClearedIndexFromRight = this.state[line].lastIndexOf(0);
                const nextIndexFromRight =
                    lastClearedIndexFromRight !== -1
                        ? lastClearedIndexFromRight + 1
                        : 5;
                        
                this.context.clearRect(nextIndexFromLeft, line, 1, 1);
                this.context.clearRect(nextIndexFromRight, line, 1, 1);
                this.context.fillRect(nextIndexFromLeft, line, 1, 1);
                this.context.fillRect(nextIndexFromRight, line, 1, 1);
                this.state[line][nextIndexFromLeft] = 0;
                this.state[line][nextIndexFromRight] = 0;                
            });
        }

        this.requestId = requestAnimationFrame(this.animateClearedLines.bind(this));
    }

    private create(): void {
        this.context.canvas.width = COLS * BLOCK_SIZE;
        this.context.canvas.height = ROWS * BLOCK_SIZE;
        this.context.scale(BLOCK_SIZE, BLOCK_SIZE);
    }
}
