import { Board } from "./board";
import { SHAPES } from "./constants";
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
    this.board.dropNewPiece(this.piece);
  }

  getRandomPiece(): Piece {
    return new Piece(SHAPES[0]);
  }
}
