// store.js
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";
import cartSlice from "./CartSlice";
import categorySlice from "./CategorySlice";

export const store = configureStore({
  reducer: {
    productsSlice: productsReducer,
    cartSlice: cartSlice,
    categorySlice: categorySlice,
  },
});
