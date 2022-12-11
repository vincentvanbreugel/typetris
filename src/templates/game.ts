import { html } from 'lit-html';
import { controlsTemplate } from './controls';

export const gameTemplate = () => {
    return html`<div class="container">
        <div class="board-wrapper">
            <canvas id="board" class="board"></canvas>
            <div id="gameOptions"></div>
            <div id="gameOverlay"></div>
        </div>
        <div class="game-info">
            <div id="nextPiece"></div>
            <div id="gameScore"></div>
            ${controlsTemplate()}
        </div>
    </div>`;
};
