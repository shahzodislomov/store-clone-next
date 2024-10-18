import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}
interface ProductState {
	products: Product[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}
const initialState: ProductState = {
	products: [],
	status: 'idle',
	error: null,
};

export const dataFetch = createAsyncThunk<Product[]>(
	'products/fetchProducts',
	async () => {
		const response = await axios.get('https://fakestoreapi.com/products');
		return response.data;
	}
);

const productData = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(dataFetch.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(
				dataFetch.fulfilled,
				(state, action: PayloadAction<Product[]>) => {
					state.status = 'succeeded';
					state.products = action.payload;
				}
			)
			.addCase(dataFetch.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Something went wrong';
			});
	},
});

export default productData.reducer;
