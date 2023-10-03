import {fireEvent, render, screen } from "@testing-library/react";
import {Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import {BrowserRouter} from 'react-router-dom'
import "@testing-library/jest-dom"

it("Should render Header Component with a login button", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header  />
            </Provider>
        </BrowserRouter>
        );

        //const loginBtn = screen.getByRole("button");

        // when multiple btns
        const loginBtn = screen.getByRole("button", {name: "Login"});
        //const loginBtn = screen.getByText("Login");

        expect(loginBtn).toBeInTheDocument();
});

it("Should render Header Component with 0 Cart Item", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header  />
            </Provider>
        </BrowserRouter>
        );

        const cartItems = screen.getByText("Cart (0 items)");

        expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart Item", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header  />
            </Provider>
        </BrowserRouter>
        );

        const cartItems = screen.getByText(/Cart/);

        expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header  />
            </Provider>
        </BrowserRouter>
        );

        const loginBtn = screen.getByRole("button", {name: "Login"});
        fireEvent.click(loginBtn);

        const logoutBtn = screen.getByRole("button", {name: "Logout"});

        expect(logoutBtn).toBeInTheDocument();
});