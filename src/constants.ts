export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 30;

export const COLORS = ['#ffffff', '#ff6b6b', '#cc5de8', '#5c7cfa', '#22b8cf', '#51cf66', '#fcc419', '#ff922b'];

export type Point = {
    y: number;
    x: number;
};

export type Tetromino = {
    identifier: number;
    shape: Point[];
};

export const TETROMINOS: Tetromino[] = [
    {
        identifier: 1,
        shape: [
            {
                y: 0,
                x: 4,
            },
            {
                y: 0,
                x: 5,
            },
            {
                y: 1,
                x: 4,
            },
            {
                y: 1,
                x: 5,
            },
        ],
    },
    {
        identifier: 2,
        shape: [
            {
                y: 0,
                x: 4,
            },
            {
                y: 1,
                x: 4,
            },
            {
                y: 2,
                x: 4,
            },
            {
                y: 2,
                x: 3,
            },
        ],
    },
];
