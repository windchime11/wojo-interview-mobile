import { useRooms } from "@/hooks";
import { rooms } from "@/models";
import { generateAllCombs } from "@/helper/config-generation";
import { Room } from "@/types/room-type";
import { RadioGroup } from "@/ui";
import pluralize from "pluralize";
import { StyleSheet, Text, View } from "react-native";

export type RoomingListProps = {
    nbTravelers: number;
    selectedId?: string;
    setSelection: any;
};
export const RoomingList: React.FC<RoomingListProps> = ({ nbTravelers, selectedId, setSelection }) => {
    const { rooms, loading } = useRooms();
    if (loading) {
        return <Text>Loading...</Text>;
    }
    if (!rooms) {
        return <Text>{`There are no rooms for ${nbTravelers} ${pluralize("traveler", nbTravelers)}`}</Text>;
    }
    const combos =
        generateAllCombs(nbTravelers)?.map((combination) =>
            Object.entries(combination).reduce<{ count: number; room: Room }[]>((prev, [curr, count]) => {
                const room = rooms?.find((room: Room) => room.sku === curr);
                return room ? [...prev, { count, room }] : prev;
            }, [])
        ) ?? [];

    const items = combos.map((combos) => {
        const combination = combos.reduce((prev, curr) => {
            return `${prev ? `${prev}, ` : ""}${curr.count} ${curr.room.name} ${pluralize("room", curr.count)}`;
        }, "");
        return { id: combination, label: combination, value: combination };
    });

    return (
        <View testID="rooming-list" style={styles.container}>
            <RadioGroup items={items} selectedId={selectedId} onChange={setSelection} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
});
