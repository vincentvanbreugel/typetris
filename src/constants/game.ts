export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 30;
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
    LEFT: 'a',
    DOWN: 's',
    RIGHT: 'd',
    ROTATE_CLOCKWISE: 'k',
    ROTATE_COUNTER_CLOCKWISE: 'j',
    HARD_DROP: 'w',
}