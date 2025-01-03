import pluralize from "pluralize";
import { StyleSheet, Text, View } from "react-native";
import { RadioGroup } from "@/ui";
import { useRooms } from "@/hooks";
import { Room } from "@/app/rooming+api";

type Combination = {
    S?: number;
    D?: number;
    F?: number;
    Q?: number;
};
type Config = Combination[][];
const configs: Config = [
    [],
    [{ S: 1 }],
    [{ S: 2 }, { D: 1 }],
    [{ S: 3 }, { S: 1, D: 1 }, { F: 1 }],
    [{ S: 4 }, { S: 2, D: 1 }, { D: 2 }, { F: 1, S: 1 }, { Q: 1 }],
    [{ S: 5 }, { S: 3, D: 1 }, { D: 2, S: 1 }, { F: 1, D: 1 }, { F: 1, S: 2 }, { Q: 1, S: 1 }],
];

export type RoomingListProps = {
    nbTravelers: number;
    selectedId?: string;
    setSelection: React.Dispatch<React.SetStateAction<string | undefined>>;
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
        configs[nbTravelers]?.map((combination) =>
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
