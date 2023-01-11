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
        <div class="mb-12 font-bold tracking-wide text-[40px] flex font-outline">
            <span class="text-red-400 font-outline-red">P</span>
            <span class="text-orange-400 font-outline-orange">A</span>
            <span class="text-yellow-300 font-outline-yellow">U</span>
            <span class="text-green-400 font-outline-green">S</span>
            <span class="text-cyan-300 font-outline-cyan">E</span>
            <span class="text-purple-400 font-outline-purple">D</span>
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
