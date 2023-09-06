import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
            <div className="body">
                    <div className="search">Search</div>
                    <div className="res-container">
                            {/* <RestaurantCard resName="Meghana Foods"cuisine="Biryani, North Indian, Chinese" /> */}
                            {/* <RestaurantCard resData = {resObj}/> */}
                    {
                            resList.map(restaurant => <RestaurantCard key={restaurant.id} resData = {restaurant}/>)

                    }
                    </div>  
            </div>
    )
}

export default Body;