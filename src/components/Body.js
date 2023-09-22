import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData2";
import {useState, useEffect} from 'react';
import Shimmer from "./Shimmer";

const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    
        useEffect(() => {
                console.log("UseEffect Called");
                fetchData();
        }, [] );

        const fetchData = async () => {
                const data = await fetch(
                        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
                      );
                      const json = await data.json();
                      console.log(json?.data?.cards);
                     
                     setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                     setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                     
                      console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                      console.log(restaurantList);

        
        };


        console.log("Render Called");


        return restaurantList.length === 0 ? <Shimmer /> : (
            <div className="body">
                    <div className="filter">
                        <div className="search">
                                <input type="text" className="search-box" value={searchText} 
                                onChange={(e) => {
                                        setSearchText(e.target.value);
                                }}/>
                                <button onClick={() => {
                                        const filteredRestaurantList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                        setFilteredRestaurant(filteredRestaurantList);
                                }}>Search</button>

                        </div>



                        <button className="filter-btn"onClick={
                                () => {
                                        console.log('btn clicked');
                                        // filter logic here
                                        const filteredList = restaurantList.filter(res => res.info.avgRating >= 4.2 );

                                        console.log(filteredList);
                                        setRestaurantList(filteredList);
                                }} 
                                >
                                Top Rated Restaurants</button>
                    </div>


                    <div className="res-container">
                    {
                        filteredRestaurantList?.map(restaurant => <RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info}/>)

                    }
                    </div>  
            </div>
    )
}

export default Body;