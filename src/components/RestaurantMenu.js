import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import {MENU_API} from '../utils/constants';

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId}  = useParams();

    useEffect(() => {
        fetchMenu();
    }, []); 


    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        //debugger;
        const json = await data.json();
        // console.log(jsonData);        
        // console.log(jsonData.data?.cards[0]?.card?.card?.info);
        setResInfo(json.data);
        //setResInfo(jsonData.data?.cards[0]?.card?.card?.info);
        console.log(resInfo);

    }

    if (resInfo === null) return <Shimmer />;

   // console.log(resInfo?.name);
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