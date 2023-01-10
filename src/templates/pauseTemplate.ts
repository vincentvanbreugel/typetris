import { html } from 'lit-html';
import { primaryButtonTemplate } from './index';

export const pauseTemplate = (data: {
    hide: boolean;
    resumeAction: () => void;
    newGameAction: () => void;
}) => {
    return html`<div
        class="game-overlay absolute top-[4px] right-[4px] bottom-[4px] left-[4px] bg-gray-900 items-center justify-center flex-col ${data.hide
            ? 'hidden'
            : 'flex'}"
    >
        <div class="mb-12 font-bold tracking-wide text-4xl flex">
            <span class="text-red-500">P</span>
            <span class="text-orange-500">A</span>
            <span class="text-yellow-500">U</span>
            <span class="text-green-500">S</span>
            <span class="text-cyan-500">E</span>
            <span class="text-purple-500">D</span>
        </div>
        <div class="mb-8 w-full">
            ${primaryButtonTemplate({
                text: 'Resume',
                action: data.resumeAction,
            })}
        </div>

        ${primaryButtonTemplate({
            text: 'Start new game',
            action: data.newGameAction,
        })}
    </div>`;
};
