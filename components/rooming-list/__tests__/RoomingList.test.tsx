import { render, waitFor } from "@testing-library/react-native";
import { RoomingList } from "../RoomingList";
import React from "react";

jest.mock("@/hooks", () => ({
    useRooms: jest.fn(() => ({
        rooms: [],
        loading: false,
    })),
}));

it("Renders the component.", async () => {
    const component = render(<RoomingList nbTravelers={1} setSelection={jest.fn()} />);
    await waitFor(() => expect(component.getByTestId("rooming-list")).toBeTruthy());
});
