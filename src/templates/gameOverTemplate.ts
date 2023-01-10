import { html } from 'lit-html';
import { primaryButtonTemplate } from './index';

export const gameOverTemplate = (data: { hide: boolean; action: () => void }) => {
    return html`<div
        class="game-overlay absolute top-[4px] right-[4px] bottom-[4px] left-[4px] bg-gray-900 items-center justify-center flex-col ${data.hide
            ? 'hidden'
            : 'flex'}"
    >
        <div class="mb-12 font-bold tracking-wide text-4xl flex">
            <span class="text-blue-500">G</span>
            <span class="text-green-500">A</span>
            <span class="text-red-500">M</span>
            <span class="text-orange-500">E</span>
            <span class="w-2"></span>
            <span class="text-yellow-500">O</span>
            <span class="text-green-500">V</span>
            <span class="text-cyan-500">E</span>
            <span class="text-purple-500">R</span>
        </div>
        ${primaryButtonTemplate({
            text: 'Start new game',
            action: data.action,
        })}
    </div>`;
};
