import { BLOCK_SIZE } from '../constants/gameConstants';
import { Color } from '../types/types';

export class Utils {
    static sleep(ms: number): Promise<number> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    static drawMino(x: number, y: number, context: CanvasRenderingContext2D, color: Color): void {
        const borderWidth = 2 / BLOCK_SIZE;
        const innerBorderWidth = borderWidth * 2;
        const offset = borderWidth * 2;
        const innerOffset = offset * 2;

        context.fillStyle = color['dark'];
        context.fillRect(x, y, 1, 1);
        context.fillStyle = color['light'];
        context.fillRect(x + borderWidth, y + borderWidth, 1 - offset, 1 - offset);
        context.fillStyle = color['neutral'];
        context.fillRect(
            x + innerBorderWidth,
            y + innerBorderWidth,
            1 - innerOffset,
            1 - innerOffset
        );
    }
}
