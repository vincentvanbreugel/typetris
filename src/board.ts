import { ROWS, COLS, BLOCK_SIZE, LINE_CLEAR_DELAY } from './constants/game';
import { COLORS } from './constants/colors';
import { TETROMINOS } from './constants/tetrominos';

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
                const tetromino = TETROMINOS.find((tetromino) => {
                    return tetromino.id === this.state[y][x];
                });

                if (tetromino) {
                    this.context.fillStyle = tetromino.color;
                } else {
                    this.context.fillStyle = COLORS.white;
                }
                this.context.fillRect(x, y, 1, 1);
            }
        }
    }

    async handleClearLines(lines: number[]): Promise<void> {
        this.highlightClearedLines(lines);
        await this.sleep(LINE_CLEAR_DELAY);
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

    private highlightClearedLines(lines: number[]): void {
        lines.forEach((line) => {
            this.state[line].forEach((cell, index) => {
                const tetromino = TETROMINOS.find((tetromino) => {
                    return tetromino.id === cell;
                });
                if (tetromino) {
                    this.context.fillStyle = tetromino.color + '75';
                    this.context.clearRect(index, line, 1, 1);
                    this.context.fillRect(index, line, 1, 1);
                }
            });
        });
    }

    private sleep(ms: number): Promise<number> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    private create(): void {
        this.context.canvas.width = COLS * BLOCK_SIZE;
        this.context.canvas.height = ROWS * BLOCK_SIZE;
        this.context.scale(BLOCK_SIZE, BLOCK_SIZE);
    }
}
