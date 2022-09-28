import { configureStore } from "@reduxjs/toolkit";
import AdminReducer from '../store/AdminStates';

const store = configureStore({
    
    reducer: {
        admin: AdminReducer
        
    },
});

export default store;
