import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    user_id: '',
    userName: '',
    cart: []

}

const adminSlice = createSlice({

    name: 'admin',
    initialState: initialState,
    reducers: {
        loginUserId(state, action) {
            state.user_id = action.payload.userId;
            state.userName = action.payload.userName
        },
        cartData(state, action) {

            state.cart = [...state.cart, {
                name: action.payload.name,
                description: action.payload.description,
                price: action.payload.price,
                quantity: action.payload.quantity,
                id: action.payload.id
            }]

        },

        quant(state, action) {
            state.cart[action.payload.index].quantity = action.payload.quantity
        },

        deleteData(state, action) {

            state.cart.splice(action.payload.index, 1);
            
        }

    }
}
);

export const adminActions = adminSlice.actions;
export default adminSlice.reducer;
