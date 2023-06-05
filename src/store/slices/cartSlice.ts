import { createSlice } from '@reduxjs/toolkit';

import { Product } from '@/types/product.type';

const initialState: Product[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.push(payload);
    },
    removeItem: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
    updateItemQuantity: (state, { payload }) => {
      return state.map((product) => {
        return product.id === payload.id
          ? { ...product, quantity: payload.quantity }
          : product;
      });
    },
    emptyCart: (state) => {
      state = [];
    },
  },
});

export const { reducer, actions } = cartSlice;
