export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 33;
export const SPAWN_POSITION = {
    x: 4,
    y: 0,
};

export const DIRECTIONS = {
    NO_CHANGE: { y: 0, x: 0 },
    LEFT: { y: 0, x: -1 },
    DOWN: { y: 1, x: 0 },
    RIGHT: { y: 0, x: 1 },
};
export const KEYS = {
    LEFT: 'ArrowLeft',
    DOWN: 'ArrowDown',
    RIGHT: 'ArrowRight',
    ROTATE_CLOCKWISE: 'd',
    ROTATE_COUNTER_CLOCKWISE: 's',
    HARD_DROP: 'ArrowUp',
    PAUSE: 'Enter',
};

export const BASE_SCORES_LINE_CLEAR = [40, 100, 300, 1200];
export const BASE_SCORE_SOFT_DROP = 1;
export const BASE_SCORE_HARD_DROP = 2;

const getSpeedinMilliSeconds = (frames: number): number => {
    return (frames / 60) * 1000;
}
export const GAME_SPEEDS = [
    getSpeedinMilliSeconds(53),
    getSpeedinMilliSeconds(49),
    getSpeedinMilliSeconds(45),
    getSpeedinMilliSeconds(41),
    getSpeedinMilliSeconds(37),
    getSpeedinMilliSeconds(33),
    getSpeedinMilliSeconds(28),
    getSpeedinMilliSeconds(22),
    getSpeedinMilliSeconds(17),
    getSpeedinMilliSeconds(11),
    getSpeedinMilliSeconds(10),
    getSpeedinMilliSeconds(9),
    getSpeedinMilliSeconds(8),
    getSpeedinMilliSeconds(7),
    getSpeedinMilliSeconds(6),
    getSpeedinMilliSeconds(6),
    getSpeedinMilliSeconds(5),
    getSpeedinMilliSeconds(5),
    getSpeedinMilliSeconds(4),
    getSpeedinMilliSeconds(4),
    getSpeedinMilliSeconds(3),
];
export const MAX_LEVEL = 20;
export const LEVEL_LIMIT = 10;
export const LINE_CLEAR_DELAY = 400;
export const GAME_OVER_DELAY = 600;