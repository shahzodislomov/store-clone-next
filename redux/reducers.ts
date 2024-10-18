import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  url: string;
  title: string;
  cost: number;
}

type CartState = Product[];

const initialState: CartState = [];

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    removeOne: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((x) => x.id !== action.payload);
    },
    removeAll: () => {
      return [];
    }
  }
});

export const { addProduct, removeOne, removeAll } = cartReducer.actions;
export default cartReducer.reducer;
