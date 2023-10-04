import {fireEvent, render, screen} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import "@testing-library/jest-dom";
import MOCK_DATA_REST_MENU from "../mocks/restMenuMockData.json"
import appStore from "../../utils/appStore";



global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_REST_MENU),
  })
);

it("Should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );


    const accordianHeader = screen.getByText("Brownies (16)");
    fireEvent.click(accordianHeader);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(16);

    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(18);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(16);

    expect(screen.getByText("Add some items to Cart !!!")).toBeInTheDocument();
});


