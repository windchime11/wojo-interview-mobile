export type Combination = {
    S?: number;
    D?: number;
    F?: number;
    Q?: number;
};

export type Config = Combination[][];

export type Room = {
    capacity: number; // Number of travelers who can fit in the room
    sku: string;
    name: string;
    description: string;
    price: number;
};
