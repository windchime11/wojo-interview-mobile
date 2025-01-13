import { rooms } from "@/models";

export type Room = {
    capacity: number; // Number of travelers who can fit in the room
    sku: string;
    name: string;
    description: string;
    price: number;
};

export function GET() {
    return Response.json(rooms);
}
