import { html } from 'lit-html';

const levels = Array.from(Array(10).keys());

export const gameOptionsTemplate = (data: { hide: boolean; startGame: () => void }) => {
    return html`<div
        class="game-options absolute top-2 right-2 bottom-2 left-2 bg-gray-900 items-center justify-center flex-col ${data.hide
            ? 'hidden'
            : 'flex'}"
    >
        <form class="mb-4">
            <fieldset>
                <legend>Level select</legend>
                ${levels.map((level) => {
                    return html`<div>
                            <label for="level${level}">${level}</label>
                            <input type="radio" name="level-select" id="level${level}" value=${level} ?checked=${
                        level === 0
                    }></input>
                        </div>`;
                })}
            </fieldset>
        </form>
        <button type="button" @click=${data.startGame} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Start
        </button>
    </div>`;
};
