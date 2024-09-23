import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for fetching categories from an API
export const fetchCategories = createAsyncThunk(
  "categorySlice/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:5005/categories");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// Initial state
const initialState = {
  categories: [], // Initialize categories as an empty array
  loading: false,
  error: null,
};

// Create slice
const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {}, // You can add your own reducers here if needed
  extraReducers: (builder) => {
    builder
      // Handle pending state
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear any previous errors
      })
      // Handle fulfilled state (successful fetch)
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload; // Set fetched categories
        state.loading = false;
      })
      // Handle rejected state (failed fetch)
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message
      });
  },
});

export default categorySlice.reducer;
