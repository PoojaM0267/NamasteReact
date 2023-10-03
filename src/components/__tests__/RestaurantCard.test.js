import {render, screen} from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it ("Should render Restaurant card with props data", () => {

    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Third Wave Coffee");

    expect(name).toBeInTheDocument();
})


// it ("Should render Restaurant card Component with Promoted label", () => {
//    // test hoc
//    const RestCardPromoted = withPromotedLabel(<RestaurantCard />);
//    render(<RestCardPromoted  resData={MOCK_DATA}/>);

//    const label = screen.getByText("Top Rated");

//     expect(label).toBeInTheDocument();

// })