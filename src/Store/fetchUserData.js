// fetchDataSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define async thunk to fetch data from API
export const fetchUserData = createAsyncThunk(
  "fetchUserData/fetchData",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  }
);

// Define initial state
const initialState = {
  userData: [],
  loading: false,
  error: null,
};

// Create slice for managing state
const fetchDataSlice = createSlice({
  name: "fetchUserData",
  initialState,
  reducers: {
    deleteCard: (state, action) => {
      state.userData = state.userData.filter(
        (item) => item.id !== action.payload
      );
    },
    // You can add additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { deleteCard } = fetchDataSlice.actions;
export default fetchDataSlice.reducer;
