import { BLOCK_SIZE } from './constants/game';
import { COLOR } from './constants/colors';

export class Utils {
    static sleep(ms: number): Promise<number> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    static drawMino(x: number, y: number, context: CanvasRenderingContext2D, color: COLOR): void {
        const borderWidth = 1 / BLOCK_SIZE;   
        const offset = borderWidth * 2;

        context.fillStyle = color['light'];
        context.fillRect(x, y, 1, 1);
        context.fillStyle = color['neutral'];
        context.fillRect(x + borderWidth, y + borderWidth, 1 - offset, 1 - offset);
    }
}
