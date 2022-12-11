import { html } from 'lit-html';

export const nextPieceTemplate = () => {
    return html`<div class="next-piece-container">
        <canvas id="nextPieceBoard" class="next-piece-canvas"></canvas>
    </div>`;
};
