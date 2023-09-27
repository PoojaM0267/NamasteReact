import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const {resId}  = useParams();

    // custom hooks : hooks are just utility functions like helpers
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;
   //const {name, cuisines, costForTwoMessage, avgRatingString, } = resInfo;

   const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

   const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    //console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log('categories');
    console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 py-2 text-2xl">{name}</h1>

            <h2 className="font-semibold py-2 text-lg">{cuisines.join(", ")}</h2>

            <h2 className='font-semibold py-2 text-lg'>{costForTwoMessage}</h2>


            {categories.map((category) => {
                <RestaurantCategory data = {category?.card?.card} />
            })}


            {/* <h2 className='font-bold py-4 text-lg"'>Menu</h2> */}

            {/* <ul>
                {itemCards.map((item) => (
                     <li key={item.card.info.id} >
                        {item.card.info.name} -{" Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                     </li>
                ))}
            </ul> */}


            
        </div>
    );
}


export default RestaurantMenu;