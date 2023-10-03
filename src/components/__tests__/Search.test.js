import {fireEvent, render, screen} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from '../mocks/mockRestaurantListData.json';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// jest doesnt identify fetch
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});


it("Should render the Body Component with Search", async () => {
    await act(async () => render(<BrowserRouter>
     <Body />
    </BrowserRouter>));

    const searchBtn = screen.getByRole("button", {name: "Search"});

    expect(searchBtn).toBeInTheDocument();

});

it("Should render the Body Component with Search iput results", async () => {
    await act(async () => render(<BrowserRouter>
     <Body />
    </BrowserRouter>));

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: {value: "burger"} })

    fireEvent.click(searchBtn);

    // screen should load search result cards
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(5);

});
