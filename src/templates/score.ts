import { html } from 'lit-html';

export const scoreTemplate = (data: { score: number; clearedLines: number; level: number }) => {
    return html`<div class="mb-3">
            <div>Score</div>
            <div class="score">${data.score}</div>
        </div>
        <div class="mb-3">
            <div>Lines Cleared</div>
            <div class="cleared-lines">${data.clearedLines}</div>
        </div>
        <div class="mb-3">
            <div>Level</div>
            <div class="level">${data.level}</div>
        </div>`;
};
