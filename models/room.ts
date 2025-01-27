import { Room } from "../types/room-type"

export const rooms: Room[] = [
    {
        name: "Single",
        description: "A small room with a bed for one person",
        capacity: 1,
        sku: "S",
        price: 100,
    },
    {
        name: "Double",
        description: "A standard room with a queen bed for 2",
        capacity: 2,
        sku: "D",
        price: 200,
    },
    {
        name: "Triple",
        description: "A large room with a queen bed for 2 and a twin bed for 1",
        capacity: 3,
        sku: "F",
        price: 300,
    },
    {
        name: "Quad",
        description: "An extra large room with two queen beds for 4 people total",
        capacity: 4,
        sku: "Q",
        price: 400,
    },
];
