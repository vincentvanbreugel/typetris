export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 30;

type Position = {
    y: number;
    x: number;
}
export type Tetromino =  {
    identifier: number,
    position: Position[]
};

export const TETROMINOS: Tetromino[] = [
    {
        identifier: 1,
        position: [
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
            }
        ]
    },
    {
        identifier: 2,
        position: [
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
            }
        ]
    }
]
