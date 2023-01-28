import { KEYS, DIRECTIONS } from '../constants/gameConstants';
import { Game } from './Game';
import { GameState } from './GameState';

export class Inputs {
    game: Game;
    state: GameState;
    private isHardDropActive = false;

    constructor(game: Game, state: GameState) {
        this.game = game;
        this.state = state;
    }

    attachEventHandlers(): void {
        document.addEventListener('keydown', (event) => {
            if (!this.state.isRunning) {
                return;
            }

            if (event.key === KEYS.PAUSE) {
                this.game.handleClickPause();
            }

            if (this.game.lineClearActive || this.state.isPaused) {
                return;
            }

            switch (event.key) {
                case KEYS.HARD_DROP:
                    if (this.isHardDropActive) {
                        return;
                    }
                    this.isHardDropActive = true;
                    this.game.hardDrop();
                    break;
                case KEYS.DOWN:
                    this.game.movePiece({ direction: DIRECTIONS.DOWN, userInput: true });
                    break;
                case KEYS.LEFT:
                    this.game.movePiece({ direction: DIRECTIONS.LEFT, userInput: true });
                    break;
                case KEYS.RIGHT:
                    this.game.movePiece({ direction: DIRECTIONS.RIGHT, userInput: true });
                    break;
                case KEYS.ROTATE_CLOCKWISE:
                    this.game.rotatePiece('clockwise');
                    break;
                case KEYS.ROTATE_COUNTER_CLOCKWISE:
                    this.game.rotatePiece('counterClockwise');
                    break;
            }
        });

        document.addEventListener('keyup', (event) => {
            switch (event.key) {
                case KEYS.HARD_DROP:
                    this.isHardDropActive = false;
                    break;
            }
        });
    }
}
