import { html } from 'lit-html';
import { primaryButtonTemplate } from './index';

const levels = Array.from(Array(10).keys());

export const newGameTemplate = (data: {
    hide: boolean;
    startGame: () => void;
    selectLevel: (e: Event) => void;
}) => {
    return html`<div
        class="absolute top-1 right-1 bottom-1 left-1 bg-gray-900 items-center justify-center flex-col ${data.hide
            ? 'hidden'
            : 'flex'}"
    >
        <div class="mb-12 font-bold tracking-wide text-[40px] flex font-outline">
            <span class="text-blue-400 font-outline-blue">T</span>
            <span class="text-green-400 font-outline-green">Y</span>
            <span class="text-red-400 font-outline-red">P</span>
            <span class="text-orange-400 font-outline-orange">E</span>
            <span class="text-yellow-300 font-outline-yellow">T</span>
            <span class="text-green-400 font-outline-green">R</span>
            <span class="text-cyan-300 font-outline-cyan">I</span>
            <span class="text-purple-400 font-outline-purple">S</span>
        </div>

        <div class="uppercase font-bold tracking-wide mb-3">Speed Level</div>
        <div
            class="flex flex-wrap justify-center mx-6 border-l-2 border-t-2 border-slate-100 mb-16"
        >
            ${levels.map((level) => {
                return html`<div
                    class="grow
                            border-r-2 
                            border-b-2
                            border-slate-100
                            text-slate-100
                            flex
                            font-bold"
                >
                    <button
                        type="button"
                        data-level-btn
                        value="${level}"
                        @click=${data.selectLevel}
                        class="grow 
                        px-4 
                        py-2 
                        hover:opacity-100 
                        transition 
                        duration-150 
                        ease-in-out
                        ${level === 0 ? 'opacity-100 selected' : 'opacity-25'}"
                    >
                        ${level}
                    </button>
                </div>`;
            })}
        </div>

        ${primaryButtonTemplate({
            text: 'Ready',
            action: data.startGame,
        })}
    </div>`;
};
