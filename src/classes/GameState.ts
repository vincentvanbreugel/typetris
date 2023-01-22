import { Game } from './Game';
import { Display } from './Display';
import {
    GAME_SPEEDS,
    BASE_SCORES_LINE_CLEAR,
    BASE_SCORE_SOFT_DROP,
    BASE_SCORE_HARD_DROP,
    LEVEL_LIMIT,
    MAX_LEVEL,
} from '../constants/gameConstants';

export class GameState {
    game: Game;
    private display: Display;
    score = 0;
    level = 0;
    speed: number;
    isRunning = false;
    isPaused = false;
    isGameOver = false;
    totalLinesCleared = 0;
    dropScore = 0;
    newLinesCleared = 0;

    constructor(game: Game) {
        this.game = game;
        this.display = new Display();
        this.speed = GAME_SPEEDS[this.level];
        this.renderScoreTemplate();
    }

    private renderScoreTemplate(): void {
        this.display.score({
            score: this.score.toString().padStart(6, '0'),
            clearedLines: this.totalLinesCleared.toString().padStart(3, '0'),
            level: this.level.toString().padStart(2, '0'),
        })
    }

    reset(): void {
        this.totalLinesCleared = 0;
        this.dropScore = 0;
        this.score = 0;
        this.speed = GAME_SPEEDS[this.level];
        this.isPaused = false;
        this.isGameOver = false;
        this.updateScore();
    }

    incrementDropScore(rowsDropped = 1, hardDrop = false): void {
        if (hardDrop) {
            this.dropScore = this.dropScore + rowsDropped * BASE_SCORE_HARD_DROP;
        } else {
            this.dropScore = this.dropScore + rowsDropped * BASE_SCORE_SOFT_DROP;
        }
    }

    updateScore(): void {
        if (this.newLinesCleared) {
            this.score =
                this.score + BASE_SCORES_LINE_CLEAR[this.newLinesCleared - 1] * (this.level + 1);
            this.totalLinesCleared = this.totalLinesCleared + this.newLinesCleared;
        }

        if (this.dropScore) {
            this.score = this.score + this.dropScore * BASE_SCORE_SOFT_DROP;
        }

        this.newLinesCleared = 0;
        this.dropScore = 0;
        this.renderScoreTemplate();
    }

    setGameOptions(config: { level: number }): void {
        const { level } = config;
        this.setLevel(level);
    }

    private setLevel(level: number): void {
        this.level = level;
        this.speed = GAME_SPEEDS[this.level];
        this.renderScoreTemplate();
    }

    checkLevelChange(): void {
        if (this.totalLinesCleared > (this.level + 1) * LEVEL_LIMIT && this.level < MAX_LEVEL) {
            this.setLevel(this.level + 1);
        }
    }

    togglePause(): void {
        this.isPaused = !this.isPaused;
    }
}
