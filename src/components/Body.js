import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData2";
import {useState, useEffect} from 'react';


const Body = () => {

    const [restaurantList, setRestaurantList] = useState(resList);
    
        useEffect(() => {
                console.log("UseEffect Called");

                fetchData();

        }, [] );

        const fetchData = async () => {
                const data = await fetch(
                        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
                      );
                      const json = await data.json();
                      console.log(json);
        
        };


        console.log("Render Called");
        return (
            <div className="body">
                    {/* <div className="search">Search</div> */}

                    <div className="filter">
                        <button className="filter-btn"onClick={
                                () => {
                                        console.log('btn clicked');
                                        // filter logic here
                                        const filteredList = restaurantList.filter(res => res.data.avgRating >= 4 );

                                        console.log(filteredList);
                                        setRestaurantList(filteredList);
                                }} 
                                >
                                Top Rated Restaurants</button>
                    </div>


                    <div className="res-container">
                    {
                        restaurantList.map(restaurant => <RestaurantCard key={restaurant.data.id} resData = {restaurant.data}/>)

                    }
                    </div>  
            </div>
    )
}

export default Body;