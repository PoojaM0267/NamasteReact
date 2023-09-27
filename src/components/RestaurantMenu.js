import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    //const [resInfo, setResInfo] = useState(null);

    const {resId}  = useParams();

    // useEffect(() => {
    //     fetchMenu();
    // }, []); 


    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     setResInfo(json.data);
    //     console.log(resInfo);

    // }


    // custom hooks : hooks are just utility functions like helpers
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;
   //const {name, cuisines, costForTwoMessage, avgRatingString, } = resInfo;

   console.log(resInfo?.cards[0]?.card?.card?.info);
   const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

   const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>

            <h2>{cuisines.join(", ")}</h2>

            <h2>{costForTwoMessage}</h2>

            <h2>Menu</h2>

            <ul>
                {itemCards.map((item) => (
                     <li key={item.card.info.id} >
                        {item.card.info.name} -{" Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                     </li>
                ))}
            </ul>
            
        </div>
    );
}


export default RestaurantMenu;