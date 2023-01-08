import { html } from 'lit-html';

export const scoreTemplate = (data: { score: number; clearedLines: number; level: number }) => {
    return html`<div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 mb-3">
            <div class="border-2 border-slate-100 rounded-sm text-center font-bold py-1">
                <div class="uppercase">Score</div>
                <div class="text-lg">${data.score}</div>
            </div>
        </div>
        <div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 mb-3">
            <div class="border-2 border-slate-100 rounded-sm text-center font-bold py-1">
                <div class="uppercase">Lines</div>
                <div class="text-lg">${data.clearedLines}</div>
            </div>
        </div>
        <div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 mb-3">
            <div class="border-2 border-slate-100 rounded-sm text-center font-bold py-1">
                <div class="uppercase">Speed LV</div>
                <div class="text-lg">${data.level}</div>
            </div>
        </div>`;
};
