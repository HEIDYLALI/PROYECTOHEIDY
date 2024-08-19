import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import { addItem } from './CartSlice'; // Importar addItem desde CartSlice

 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store