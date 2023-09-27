import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData2";
import {useState, useEffect} from 'react';
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import useRestaurantList from "../utils/useRestaurantsList";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

        const [searchText, setSearchText] = useState("");
        
        const {restaurantList, filteredRestaurantList} = useRestaurantList();
        const onlineStatus = useOnlineStatus();

        console.log("Render Called");

        if(!onlineStatus) return <h1>
                        Looks like you are Offline !!! Please check your internet connection.
                </h1>

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
                        filteredRestaurantList?.map(restaurant =>
                                 <Link to={"/restaurants/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                                        <RestaurantCard  resData={restaurant?.info}/> 
                                </Link>
                                 )

                    }
                    </div>  
            </div>
    )
}

export default Body;