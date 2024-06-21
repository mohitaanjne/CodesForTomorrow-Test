import { createSlice } from "@reduxjs/toolkit";

const initialToggleState = { toggle: "cardView" };

const toggleSlice = createSlice({
  name: "toggleButton",
  initialState: initialToggleState,
  reducers: {
    handleToggle(state, action) {
      state.toggle = action.payload;
    },
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;
