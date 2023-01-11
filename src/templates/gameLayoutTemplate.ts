import { html } from 'lit-html';
import { controlsTemplate } from './index';

export const gameLayoutTemplate = () => {
    return html`<div class="game-layout text-slate-100 bg-gray-800 h-screen flex text-lg">
        <div class="flex gap-4 justify-around m-auto pb-12">
            <div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 relative ml-auto">
                <div class="h-[664px] w-[334px] border-2 border-slate-100 rounded-sm">
                    <canvas id="board" class="board"></canvas>
                    <div id="gameOptions"></div>
                    <div id="gameOverlay"></div>
                </div>
            </div>
            <div class="mr-auto w-[220px] flex flex-col">
                <div id="gameScore"></div>
                <div id="nextPiece"></div>
                <div class="mt-auto">${controlsTemplate()}</div>
            </div>
        </div>
    </div>`;
};
