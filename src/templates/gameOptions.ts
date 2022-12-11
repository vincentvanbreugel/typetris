import { html } from 'lit-html';

const levels = Array.from(Array(10).keys());

export const gameOptionsTemplate = (data: { hide: boolean; startGame: () => void }) => {
    return html`<div class="game-options ${data.hide ? '' : 'is-visible'}">
            <form>
                <fieldset>
                    <legend>Level select</legend>
                    ${levels.map((level) => {
                        return html`<div>
                            <label for="level${level}">${level}</label>
                            <input type="radio" name="level-select" id="level${level}" value=${level} ?checked=${level === 0}></input>
                        </div>`;
                    })}
                </fieldset>
            </form>
            <button type="button" @click=${
                data.startGame
            } id="startButton" class="start-button">Start</button>
        </div>`;
};
