import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    increment: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        toast.success("Item added to cart");
      }
    },
    decrement: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        toast.success("Item removed from cart");
      }
    },
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        toast.success("Item added to cart");
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success("Item added to cart");
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      toast.success("Item removed from cart");
    },
    clearCart: (state) => {
      state.cart = [];
      toast.success("Cart cleared");
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
