import { html } from 'lit-html';
import { controlsTemplate } from './controls';

export const gameTemplate = () => {
    return html`<div class="flex gap-8 justify-around mx-auto mt-8">
        <div class="h-[604px] w-[300px] relative ml-auto">
            <canvas id="board" class="board"></canvas>
            <div id="gameOptions"></div>
            <div id="gameOverlay"></div>
        </div>
        <div class="mr-auto">
            <div id="nextPiece"></div>
            <div id="gameScore"></div>
            ${controlsTemplate()}
        </div>
    </div>`;
};
