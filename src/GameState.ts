import { render } from 'lit-html';
import { Game } from './Game';
import { scoreTemplate } from './templates';

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
    isPaused = false;
    isGameOver = false;
    totalLinesCleared = 0;
    dropScore = 0;
    newLinesCleared = 0;
    private scoreElementId = 'gameScore';
    private scoreElement: HTMLElement;

    constructor(game: Game) {
        this.game = game;
        this.speed = GAME_SPEEDS[this.level];
        this.scoreElement = document.getElementById(this.scoreElementId) as HTMLElement;
        this.renderScoreTemplate();
    }

    private renderScoreTemplate() {
        render(
            scoreTemplate({
                score: this.score,
                clearedLines: this.totalLinesCleared,
                level: this.level,
            }),
            this.scoreElement
        );
    }

    reset() {
        this.totalLinesCleared = 0;
        this.dropScore = 0;
        this.score = 0;
        this.level = 0;
        this.speed = GAME_SPEEDS[this.level];
        this.isPaused = false;
        this.isGameOver = false;
        this.updateScore();
    }

    updateScore() {
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

    checkLevelChange() {
        if (this.totalLinesCleared > (this.level + 1) * LEVEL_LIMIT && this.level < MAX_LEVEL) {
            this.setLevel(this.level + 1);
        }
    }

    togglePause() {
        this.isPaused = !this.isPaused;
    }
}
