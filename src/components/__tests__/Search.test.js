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

it("Should render Restaurant cards with Search input results", async () => {
    await act(async () => render(<BrowserRouter>
     <Body />
    </BrowserRouter>));

    const cardsBeforeClick = screen.getAllByTestId("resCard");
    expect(cardsBeforeClick.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: {value: "burger"} })

    fireEvent.click(searchBtn);

    // screen should load search result cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(5);

});

it("Should render 14 restaurant cards on click of Top Rated btn", async () => {
    await act(async () => render(<BrowserRouter>
        <Body />
       </BrowserRouter>));

       const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});  
       fireEvent.click(topRatedBtn);
       const topRatedRestcards = screen.getAllByTestId("resCard");
       expect(topRatedRestcards.length).toBe(14);
   
})
