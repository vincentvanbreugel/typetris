import { ROWS, COLS, BLOCK_SIZE } from "./constants";

export class Game {
  constructor() {
    const canvas: HTMLCanvasElement = document.getElementById('board') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
    
    ctx.canvas.width = COLS * BLOCK_SIZE;
    ctx.canvas.height = ROWS * BLOCK_SIZE;
    ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
  }
}