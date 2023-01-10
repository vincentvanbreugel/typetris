import { html } from 'lit-html';

export const controlsTemplate = () => {
    return html`<div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900">
        <div class="border-2 border-slate-100 rounded-sm">
            <div class="text-center uppercase font-bold tracking-wide pt-1">Controls</div>
            <div class="p-2">
                <div class="flex justify-between">
                    <span class="bold">&#8592; &#8594; &#8595;</span>
                    <span class="action">Move</span>
                </div>
                <div class="flex justify-between">
                    <span class="button">&#8593;</span>
                    <span class="action">Hard Drop</span>
                </div>
                <div class="flex justify-between">
                    <span class="button">D S</span>
                    <span class="action">Rotate</span>
                </div>
                <div class="flex justify-between">
                    <span class="button">P</span>
                    <span class="action">Pause</span>
                </div>
            </div>
        </div>
    </div> `;
};
