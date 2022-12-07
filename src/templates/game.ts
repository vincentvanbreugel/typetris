export const gameTemplate = `
<div class="container">
    <div class="board-wrapper">
        <canvas id="board" class="board"></canvas>
        <div id="newGameOverlay" class="new-game-overlay is-visible">
            <form>
            <fieldset>
                <legend>Level select</legend>
                <div>
                    <label for="level0">0</label>
                    <input type="radio" name="level-select" id="level0" value="0" checked></input>
                </div>
                <div>
                    <label for="level1">1</label>
                    <input type="radio" name="level-select" id="level1" value="1"></input>
                </div>
                <div>
                    <label for="level2">2</label>
                    <input type="radio" name="level-select" id="level2" value="2"></input>
                </div>
                <div>
                    <label for="level3">3</label>
                    <input type="radio" name="level-select" id="level3" value="3"></input>
                </div>
                <div>
                    <label for="level4">4</label>
                    <input type="radio" name="level-select" id="level4" value="4"></input>
                </div>
                <div>
                    <label for="level5">5</label>
                    <input type="radio" name="level-select" id="level5" value="5"></input>
                </div>
                <div>
                    <label for="level6">6</label>
                    <input type="radio" name="level-select" id="level6" value="6"></input>
                </div>
                <div>
                    <label for="level7">7</label>
                    <input type="radio" name="level-select" id="level7" value="7"></input>
                </div>
                <div>
                    <label for="level8">8</label>
                    <input type="radio" name="level-select" id="level8" value="8"></input>
                </div>
                <div>
                    <label for="level9">9</label>
                    <input type="radio" name="level-select" id="level9" value="9"></input>
                </div>
            </fieldset>

            </form>
            <button type="button" id="startButton" class="start-button">Start</button>
        </div>
        <div id="pauseOverlay" class="pause-overlay">
            <span>Paused</span>
            <button type="button" data-restart-button class="restart-button">Start new game</button>
        </div>
        <div id="gameOverOverlay" class="game-over-overlay">
            <span>Game over</span>
            <button type="button" data-restart-button class="restart-button">Start new game</button>
        </div>
    </div>
    <div class="game-info">
        <div class="next-piece-container">
            <canvas id="nextPieceBoard" class="next-piece-canvas"></canvas>
        </div>
        <div class="game-score">
          <div>Score</div>
          <div id="score" class="score">0</div>
        </div>
        <div class="line-score">
          <div>Lines Cleared</div>
          <div id="clearedLines" class="cleared-lines">0</div>
        </div>
        <div class="level">
            <div>Level</div>
            <div id="level" class="level">0</div>
        </div>
        <div>
            <div>Controls</div>
            <div class="control">
                <span class="button">J</span>
                <span class="action">Move Left</span>
            </div>
            <div class="control">
                <span class="button">L</span>
                <span class="action">Move Right</span>
            </div>
            <div class="control">
                <span class="button">K</span>
                <span class="action">Move Down</span>
            </div>
            <div class="control">
                <span class="button">D</span>
                <span class="action">Rotate Clockwise</span>
            </div>
            <div class="control">
                <span class="button">S</span>
                <span class="action">Rotate Counter Clockwise</span>
            </div>
            <div class="control">
                <span class="button">I</span>
                <span class="action">Hard Drop</span>
            </div>
            <div class="control">
                <span class="button">P</span>
                <span class="action">Pause</span>
            </div>
        </div>
    </div>
</div>
`;
