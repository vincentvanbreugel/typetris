export const gameTemplate = `
<div class="container">
    <div class="board-wrapper">
        <canvas id="board" class="board"></canvas>
        <div id="pauseOverlay" class="pause-overlay">
            <span>Paused</span>
        </div>
        <div id="gameOverOverlay" class="game-over-overlay">
            <span>Game over</span>
        </div>
    </div>
    <div class="game-info">
        <button type="button" id="startButton" class="start-button">Start</button>
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
    </div>
</div>
`;