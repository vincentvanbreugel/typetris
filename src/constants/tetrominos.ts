export type Point = {
    y: number;
    x: number;
};

export type Tetromino = {
    identifier: number;
    shape: Point[];
    canRotate: boolean;
    rotatePointIndex: number | null
};

export const TETROMINOS: Tetromino[] = [
    {
        identifier: 1,
        canRotate: false,
        rotatePointIndex: null,
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
        canRotate: true,
        rotatePointIndex: 2,
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
    {
        identifier: 3,
        canRotate: true,
        rotatePointIndex: 2,
        shape: [
            {
                y: 0,
                x: 3,
            },
            {
                y: 1,
                x: 3,
            },
            {
                y: 2,
                x: 3,
            },
            {
                y: 2,
                x: 4,
            },
        ],
    },
];
