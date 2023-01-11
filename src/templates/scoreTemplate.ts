import { html } from 'lit-html';

export const scoreTemplate = (data: { score: string; clearedLines: string; level: string }) => {
    return html`<div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 mb-3">
            <div class="border-2 border-slate-100 rounded-sm text-center font-bold tracking-wide py-1">
                <div class="uppercase">Score</div>
                <div class="text-xl">${data.score}</div>
            </div>
        </div>
        <div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 mb-3">
            <div class="border-2 border-slate-100 rounded-sm text-center font-bold tracking-wide py-1">
                <div class="uppercase">Lines</div>
                <div class="text-xl">${data.clearedLines}</div>
            </div>
        </div>
        <div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 mb-3">
            <div class="border-2 border-slate-100 rounded-sm text-center font-bold tracking-wide py-1">
                <div class="uppercase">Speed LV</div>
                <div class="text-xl">${data.level}</div>
            </div>
        </div>`;
};
