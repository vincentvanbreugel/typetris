import { render } from 'lit-html';
import {
    nextPieceTemplate,
    scoreTemplate,
    gameLayoutTemplate,
    newGameTemplate,
    pauseTemplate,
    gameOverTemplate,
} from '../templates';

export class Display {
    private nextPieceElementId = 'nextPiece';
    private nextPieceElement: HTMLElement;
    private scoreElementId = 'gameScore';
    private scoreElement: HTMLElement;
    private gameOptionsId = 'gameOptions';
    private overlayId = 'gameOverlay';
    private overlayElement: HTMLElement | null = null;

    constructor() {
        this.nextPieceElement = document.getElementById(this.nextPieceElementId) as HTMLElement;
        this.scoreElement = document.getElementById(this.scoreElementId) as HTMLElement;
    }

    gameLayout(elementId: string): void {
        const element = document.getElementById(elementId) as HTMLElement;
        render(gameLayoutTemplate(), element);
    }

    newGame(params: {
        hide: boolean;
        startGame: () => void;
        selectGameOption: (e: Event) => void;
    }): void {
        const element = document.getElementById(this.gameOptionsId) as HTMLElement;
        render(newGameTemplate(params), element);
    }

    pause(params: { hide: boolean; resumeAction: () => void; newGameAction: () => void }): void {
        const element = this.getOverlayElement();
        render(pauseTemplate(params), element);
    }

    gameOver(params: { hide: boolean; action: () => void }): void {
        const element = this.getOverlayElement();
        render(gameOverTemplate(params), element);
    }

    nextPiece(): void {
        render(nextPieceTemplate(), this.nextPieceElement);
    }

    score(params: { score: string; clearedLines: string; level: string }): void {
        const { score, clearedLines, level } = params;
        render(
            scoreTemplate({
                score,
                clearedLines,
                level,
            }),
            this.scoreElement
        );
    }

    private getOverlayElement(): HTMLElement {
        if (this.overlayElement) {
            return this.overlayElement;
        }

        this.overlayElement = document.getElementById(this.overlayId) as HTMLElement;
        return this.overlayElement;
    }
}
