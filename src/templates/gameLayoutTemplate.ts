import { html } from 'lit-html';
import { controlsTemplate } from './index';

export const gameLayoutTemplate = () => {
    return html`<div class="game-layout text-slate-100 bg-gray-800 h-screen flex">
            <div class="flex gap-4 justify-around m-auto pb-12">
            <div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 mb-3 relative ml-auto">
                <div class="h-[604px] w-[304px] border-2 border-slate-100 rounded-sm">
                    <canvas id="board" class="board"></canvas>
                    <div id="gameOptions"></div>
                    <div id="gameOverlay"></div>
                </div>
            </div>
            <div class="mr-auto w-[200px]">
                <div id="gameScore"></div>
                <div id="nextPiece"></div>
                ${controlsTemplate()}
            </div>
        </div>
    </div>`;
};
