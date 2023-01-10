import { html } from 'lit-html';
import { primaryButtonTemplate } from './primaryButton';

export const overlayTemplate = (data: { text: string; btnText: string; hide: boolean; action: () => void }) => {
    return html`<div
        class="game-overlay absolute top-[4px] right-[4px] bottom-[4px] left-[4px] bg-gray-900 items-center justify-center flex-col ${data.hide
            ? 'hidden'
            : 'flex'}"
    >
        <span class="mb-8">${data.text}</span>
        ${primaryButtonTemplate({
            text: data.btnText,
            action: data.action,
        })}
    </div>`;
};
