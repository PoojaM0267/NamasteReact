import { useEffect, useState } from "react";
import {GET_ALL_RESTAURANTS } from "./constants";

const useRestaurantList = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);        

    const fetchData = async () => {
        const data = await fetch(
                            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
                          );
        const json = await data.json();

        setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(restaurantList);
    };

    // const fetchData = async () => {
    //     const data = await fetch(GET_ALL_RESTAURANTS);
    //     const json = await data.json();
    //     setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }


    return {restaurantList, filteredRestaurantList, setRestaurantList, setFilteredRestaurant};
}

export default useRestaurantList;
