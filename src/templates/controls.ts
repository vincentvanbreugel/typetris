import { html } from 'lit-html';

export const controlsTemplate = () => {
  return html`<div>
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
  `
}