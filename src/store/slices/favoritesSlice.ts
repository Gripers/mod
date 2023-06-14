import { createSlice } from "@reduxjs/toolkit";

import { Product } from "@/types/product.type";

const initialState: Product[] = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { reducer, actions } = favoritesSlice;
