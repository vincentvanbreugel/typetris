import { html } from 'lit-html';

export const overlayTemplate = (text: string, hide = false) => {
    return html`<div id="gameOverlay" class="game-overlay ${hide ? html`` : html`is-visible`}">
        <span>${text}</span>
        <button type="button" data-restart-button class="restart-button">Start new game</button>
    </div>`;
};
