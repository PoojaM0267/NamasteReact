import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name : "cart",
        initialState: {
            items : []
        },
        reducers:{
            addItem : (state, action) => {
                state.items.push(action.payload)
            },
            removeItem : () => {
                state.items.pop();
            },
            clearCart : (state, action) => {
                state.items.length = 0;
                //console.log(current(state));

                // state = []  will not work as it is not mutating the state but chnging the reference
                //console.log(state); will not work as it not show
                // console.log(current(state));

            }
        }
    });

    export const {addItem, removeItem, clearCart} = cartSlice.actions;

    export default cartSlice.reducer;

