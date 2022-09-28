import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    user_id: '',
    userName: ''

}

const adminSlice = createSlice({

    name: 'admin',
    initialState: initialState,
    reducers: {
        loginUserId(state, action) {
            state.user_id = action.payload.userId;
            state.userName = action.payload.userName
        }
    }
});

export const adminActions = adminSlice.actions;
export default adminSlice.reducer;
