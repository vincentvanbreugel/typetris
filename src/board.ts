import { ROWS, COLS, BLOCK_SIZE } from './constants/game';
import { COLORS } from './constants/colors';
import { TETROMINOS } from './constants/tetrominos';
import { Game } from './game';

export class Board {
    state: number[][];
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private game: Game;

    constructor(boardId: string, game: Game) {
        this.canvas = document.getElementById(boardId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.state = Array.from(Array(ROWS), () => Array(COLS).fill(0));
        this.game = game;
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

    checkLineClear(): void {
        const linesCleared = this.state.reduce((array, row, index) => {
            if (row.every((col) => col !== 0)) {
                array.push(index);
            }
            return array;
        }, []);

        if (linesCleared.length) {
            this.clearLines(linesCleared);
        }
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

        this.game.state.newLinesCleared = lines.length;
    }

    private create(): void {
        this.context.canvas.width = COLS * BLOCK_SIZE;
        this.context.canvas.height = ROWS * BLOCK_SIZE;
        this.context.scale(BLOCK_SIZE, BLOCK_SIZE);
    }
}
