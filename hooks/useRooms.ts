import { Room } from "@/app/rooming+api";
import { useEffect, useState } from "react";

export const useRooms = () => {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchRooms = async () => {
            const data = await fetch("/rooming");
            const rooms = await data.json();
            setRooms(rooms);
            setLoading(false);
        };
        fetchRooms();
    }, []);
    return {
        loading,
        rooms,
    };
};
