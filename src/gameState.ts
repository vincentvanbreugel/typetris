import { Game } from './game';
import {
    GAME_SPEEDS,
    BASE_SCORES_LINE_CLEAR,
    BASE_SCORE_SOFT_DROP,
    LEVEL_LIMIT,
    MAX_LEVEL,
} from './constants/game';

export class GameState {
    game: Game;
    score = 0;
    level = 0;
    speed: number;
    totalLinesCleared = 0;
    softDropCount = 0;
    newLinesCleared = 0;

    constructor(game: Game) {
        this.game = game;
        this.speed = GAME_SPEEDS[this.level];
    }

    reset() {
        this.totalLinesCleared = 0;
        this.softDropCount = 0;
        this.score = 0;
        this.updateScore();
    }

    updateScore() {
        if (this.newLinesCleared) {
            this.score =
                this.score + BASE_SCORES_LINE_CLEAR[this.newLinesCleared - 1] * (this.level + 1);
            this.totalLinesCleared = this.totalLinesCleared + this.newLinesCleared;
        }

        if (this.softDropCount) {
            this.score = this.score + this.softDropCount * BASE_SCORE_SOFT_DROP;
        }

        this.newLinesCleared = 0;
        this.softDropCount = 0;
        this.game.scoreElement.innerHTML = `${this.score}`;
        this.game.clearedlinesElement.innerHTML = `${this.totalLinesCleared}`;
    }

    checkLevelChange() {      
        if (this.totalLinesCleared > ((this.level + 1) * LEVEL_LIMIT) && this.level < MAX_LEVEL) {
          this.updateLevel();
        }
    }

    updateLevel() {
      this.level++;
      this.game.levelElement.innerHTML = `${this.level}`;
      this.speed = GAME_SPEEDS[this.level];
      this.game.stopGameLoop();
      this.game.startGameLoop();
    }
}