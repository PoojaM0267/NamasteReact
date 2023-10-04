import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
//console.log(items);

const dispatch = useDispatch();

// dispatch an action
const handleAddItem = (item) => {
    dispatch(addItem(item));
}

return (
    <div>
        {items.map(item => (
            <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left"> 
            <div className="py-2 flex justify-between"> 
                <div className="w-9/12">
                    <span> {item.card.info.name} </span> 
                    <span> - Rs. {item.card.info.price  ? item.card.info.price /100 : item.card.info.defaultPrice / 100} </span>
                    <p className="text-xs">
                        {item.card.info.description}
                    </p>
                </div>
                <div className="px-4 w-3/12">                    
                    <div className="absolute">
                        <button className="px-2 py-1 bg-gray-100 text-black shadow-lg rounded-lg mx-20"
                        onClick={() => handleAddItem(item)}
                        > Add +</button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                </div>

            </div>
            
        </div>
        ))}
    </div>
);

}

export default ItemList;