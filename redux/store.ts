import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice';
import cartReducer from '@/redux/reducers'

const store = configureStore({
	reducer: {
		products: productReducer,
		cart: cartReducer
	},
});
export default store;
