import { html } from 'lit-html';

export const overlayTemplate = (data: { text: string; hide: boolean; restartGame: () => void }) => {
    return html`<div
        class="game-overlay absolute top-[4px] right-[4px] bottom-[4px] left-[4px] bg-gray-900 items-center justify-center flex-col ${data.hide
            ? 'hidden'
            : 'flex'}"
    >
        <span class="mb-4">${data.text}</span>
        <button type="button" @click=${data.restartGame} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Start new game
        </button>
    </div>`;
};
