import { html } from 'lit-html';

export const overlayTemplate = (data: {text: string, hide: boolean, restartGame: () => void}) => {
    return html`<div class="game-overlay ${data.hide ? '' : 'is-visible'}">
            <span>${data.text}</span>
            <button type="button" @click=${data.restartGame} class="restart-button">Start new game</button>
        </div>`;
};
