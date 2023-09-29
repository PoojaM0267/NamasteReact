import Shimmer from './Shimmer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const {resId}  = useParams();

    const [showItems, setShowItems] = useState(false);

    // custom hooks : hooks are just utility functions like helpers
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // const handleClick = () => {
    //         setShowItems(!showItems);
    //         setShowIndex();
    //     }

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 py-2 text-2xl">{name}</h1>

            <h2 className="font-semibold py-2 text-lg">{cuisines.join(", ")}</h2>

            <h2 className='font-semibold py-2 text-lg'>{costForTwoMessage}</h2>
           
                {categories.map((category, index) => (
                    <RestaurantCategory key={category?.card?.card.title} 
                        data={category?.card?.card}
                        showItems = {index === showIndex ? true : false}
                        setShowIndex = {() => setShowIndex(index)}
                        setShowItems = {() => setShowItems(!showItems)}
                         />
                ))}
                       
        </div>
    );
}


export default RestaurantMenu;