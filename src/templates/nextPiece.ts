import { html } from 'lit-html';

export const nextPieceTemplate = () => {
    return html`<div class="next-piece-container bg-gray-900 h-[140px] w-[140px] mb-3 flex items-center justify-center">
        <canvas id="nextPieceBoard" class="next-piece-canvas"></canvas>
    </div>`;
};
