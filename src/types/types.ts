export type Color = {
    [key: string]: any;
};

export type Rotations = 'clockwise' | 'counterClockwise';

export type Point = {
    y: number;
    x: number;
};

export type Shape = number[][];

export type Tetromino = {
    id: number;
    color: Color;
    shapes: Shape[];
};

export type MusicOptions = 'a' | 'b' | 'off';
