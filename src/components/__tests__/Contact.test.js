import {getAllByRole, render, screen} from '@testing-library/react'
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom"


// describe is just to group the test cases and 
// they can be nested,also vcan have multiple groups
// test === it (alias )


describe("Contact us page test cases", () => {

    beforeAll(() => {
        //console.log("Before All");
    });

    beforeEach(() => {
        //console.log("Before Each");
    });

    afterAll(() => {
       // console.log("After All");
    });

    afterEach(() => {
       // console.log("After Each");
    });


    test("Should load Contact Us Component", () => {
        // render js component on jsdom 
        render(<ContactUs />)
    
        const heading = screen.getByRole("heading")
    
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load Button inside Contact Component", () => {
        // render js component on jsdom 
        render(<ContactUs />)
    
        const btn = screen.getByRole("button")
    
        expect(btn).toBeInTheDocument();
    });
    
    test("Should load input name inside Contact Component", () => {
        // render js component on jsdom 
        render(<ContactUs />)
    
        const inputName = screen.getByPlaceholderText("name")
    
        expect(inputName).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes on the Contact Component", () => {
        render(<ContactUs />);
    
        // Query
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2);
    
    });

})



