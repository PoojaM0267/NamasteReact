import RestaurantCard, {withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
import resList from "../utils/mockData2";
import {useState, useEffect, useContext} from 'react';
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import useRestaurantList from "../utils/useRestaurantsList";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

        const [searchText, setSearchText] = useState("");
        
        const {restaurantList, filteredRestaurantList , setRestaurantList, setFilteredRestaurant} = useRestaurantList();
        const onlineStatus = useOnlineStatus();

        const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

        const {loggedInUser, setUserName } = useContext(UserContext);

        if(!onlineStatus) return (
                <h1>
                        Looks like you are Offline !!! Please check your internet connection.
                </h1>);

        return restaurantList && restaurantList.length === 0 ? <Shimmer /> : (
            <div className="body">
                    <div className="filter flex">
                        <div className="m-4 p-4">
                                <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} 
                                onChange={(e) => {
                                        setSearchText(e.target.value);
                                }}/>
                                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                                 onClick={() => {
                                        const filteredRestaurantList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                        setFilteredRestaurant(filteredRestaurantList);
                                }}>Search</button>

                        </div>

                        <div className="m-4 p-4 flex items-center ">
                                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={
                                        () => {
                                                //console.log('btn clicked');
                                                // filter logic here
                                                const filteredList = restaurantList.filter(res => res.info.avgRating >= 4.2 );

                                                //console.log(filteredList);
                                                //setRestaurantList(filteredList);
                                                setFilteredRestaurant(filteredList);
                                        }} 
                                        >
                                        Top Rated Restaurants</button>
                        </div>

                        <div className="m-4 p-4 flex items-center ">
                               <label className="p-2">UserName: </label>
                                <input className="p-2 border border-black"
                                value={loggedInUser}
                                onChange={(e) => setUserName(e.target.value)} />
                        </div>                        
                    </div>


                    <div className="flex flex-wrap">
                    {
                        filteredRestaurantList?.map(restaurant =>
                                 <Link to={"/restaurants/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                                        {
                                                restaurant?.info?.avgRating > 4.1 ? <RestaurantCardPromoted resData={restaurant?.info}/> : <RestaurantCard resData={restaurant?.info}/>
                                        } 
                                </Link>
                                 )

                    }
                    </div>  
            </div>
    )
}

export default Body;