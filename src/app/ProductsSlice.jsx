import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (signal, { rejectWithValue }) => {
    const options = {
      url: "http://localhost:5005/products",
      method: "GET",
      signal, // Pass the signal to axios to allow request cancellation
    };
    try {
      const { data } = await axios(options);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: [],
    filteredProducts: [], // Add filteredProducts to initialState
    loading: false,
    error: null,
  },
  reducers: {
    filterByCategory: (state, action) => {
      const selectedCategories = action.payload;
      if (selectedCategories.length === 0) {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter((product) =>
          selectedCategories.includes(product.category)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts = action.payload; // Set initial filtered products
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { filterByCategory } = productsSlice.actions;
export default productsSlice.reducer;
