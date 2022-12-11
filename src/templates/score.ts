import { html } from 'lit-html';

export const scoreTemplate = (data: { score: number; clearedLines: number; level: number }) => {
    return html`<div class="game-score">
            <div>Score</div>
            <div id="score" class="score">${data.score}</div>
        </div>
        <div class="line-score">
            <div>Lines Cleared</div>
            <div id="clearedLines" class="cleared-lines">${data.clearedLines}</div>
        </div>
        <div class="level">
            <div>Level</div>
            <div id="level" class="level">${data.level}</div>
        </div>`;
};
