import { html } from 'lit-html';
import { primaryButtonTemplate } from './index';

export const gameOverTemplate = (data: { hide: boolean; action: () => void }) => {
    return html`<div
        class="game-overlay absolute top-[4px] right-[4px] bottom-[4px] left-[4px] bg-gray-900 items-center justify-center flex-col ${data.hide
            ? 'hidden'
            : 'flex'}"
    >
        <div class="mb-12 font-bold tracking-wide text-4xl flex font-outline">
            <span class="text-blue-400 font-outline-blue">G</span>
            <span class="text-green-400 font-outline-green">A</span>
            <span class="text-red-400 font-outline-red">M</span>
            <span class="text-orange-400 font-outline-orange">E</span>
            <span class="w-2"></span>
            <span class="text-yellow-300 font-outline-yellow">O</span>
            <span class="text-green-400 font-outline-green">V</span>
            <span class="text-cyan-300 font-outline-cyan">E</span>
            <span class="text-purple-400 font-outline-purple">R</span>
        </div>
        ${primaryButtonTemplate({
            text: 'Start new game',
            action: data.action,
        })}
    </div>`;
};
