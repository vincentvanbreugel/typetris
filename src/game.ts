import { Board } from "./board";
import { TETROMINOS } from "./constants";
import { Piece } from "./piece";

export class Game {
  startButton: HTMLButtonElement;
  board: Board;
  piece: Piece;

  constructor(boardId: string, startButtonId: string) {
    this.startButton = document.getElementById(startButtonId) as HTMLButtonElement;    
    this.board = new Board(boardId);
    this.piece = this.getRandomPiece();
    
    this.attachEventHandlers();
  }

  attachEventHandlers(): void {
    this.startButton.addEventListener('click', () => {
      this.startGame();
    });
  }

  startGame(): void {
    this.piece.move({y: 0, x: 0});
    this.piece.move({y: 1, x: 0});
    this.board.draw();
  }

  getRandomPiece(): Piece {
    const index = Math.floor(Math.random() * TETROMINOS.length);
    return new Piece(TETROMINOS[index], this.board);
  }
}
