import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (signal, { rejectWithValue }) => {
    const options = {
      url: "http://localhost:5005/products",
      method: "GET",
      signal,
    };
    try {
      const { data } = await axios(options);
      console.log("Fetched products:", data);
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
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
    filteredProducts: [],
    loading: false,
    error: null,
  },
  reducers: {
    filterByCategory: (state, action) => {
      const selectedCategories = action.payload;
      console.log("All products:", state.products);
      console.log("Filtering by categories:", selectedCategories);
      if (selectedCategories.length === 0) {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter((product) =>
          selectedCategories.some((category) =>
            product.category.toLowerCase().includes(category.toLowerCase())
          )
        );
      }
      console.log("Filtered products:", state.filteredProducts);
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
        state.filteredProducts = action.payload;
        state.loading = false;
        console.log("Products loaded into state:", state.products);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Error in fetchProducts:", action.payload);
      });
  },
});

export const { filterByCategory } = productsSlice.actions;
export default productsSlice.reducer;
