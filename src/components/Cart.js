import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    };


    return(
    <div className="text-center m-6 p-6">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto p-4">
           {cartItems.length > 0 && <button className="p-2 m-2 bg-black text-white shadow-md cursor-pointer rounded-lg"
            onClick={handleClearCart}>Clear Cart</button>
           }

            {cartItems.length === 0 && <h1>Add some items to Cart !!!</h1> }

            <ItemList items={cartItems} />
        </div>
        
    </div>
    
    );

}

export default Cart;