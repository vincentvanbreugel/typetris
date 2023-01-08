import { html } from 'lit-html';

export const nextPieceTemplate = () => {
    return html`<div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 mb-3">
        <div class="border-2 border-slate-100 rounded-sm">
            <div class="text-center uppercase font-bold pt-1">Next</div>
            <div class="next-piece-container h-[140px] w-[140px] mx-auto mb-3 flex items-center justify-center">
                <canvas id="nextPieceBoard" class="next-piece-canvas"></canvas>
            </div>
        </div>
    </div>`;
};
