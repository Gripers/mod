import { combineReducers } from '@reduxjs/toolkit';

import { reducer as cartReducer } from './slices/cartSlice';
import { reducer as favoritesReducer } from './slices/favoritesSlice';
import { rootApi } from './api';

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
  [rootApi.reducerPath]: rootApi.reducer,
});

export default rootReducer;
