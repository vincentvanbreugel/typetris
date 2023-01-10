import { html } from 'lit-html';

export const controlsTemplate = () => {
    return html`<div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900">
        <div class="border-2 border-slate-100 rounded-sm">
            <div class="text-center uppercase font-bold tracking-wide pt-1">Controls</div>
            <div class="p-2">
                <div class="flex justify-between">
                    <span>&#8592; &#8594; &#8595;</span>
                    <span>Move</span>
                </div>
                <div class="flex justify-between">
                    <span>&#8593;</span>
                    <span class="flex">Hard<span class="w-1"></span>Drop</span>
                </div>
                <div class="flex justify-between">
                    <span class="flex">D<span class="w-2"></span>S</span>
                    <span>Rotate</span>
                </div>
                <div class="flex justify-between">
                    <span>P</span>
                    <span>Pause</span>
                </div>
            </div>
        </div>
    </div> `;
};
