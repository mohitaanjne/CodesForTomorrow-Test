import { createSlice } from "@reduxjs/toolkit";

const initialToggleState = { toggle: "cardView", isFeedback: false };

const toggleSlice = createSlice({
  name: "toggleButton",
  initialState: initialToggleState,
  reducers: {
    handleToggle(state, action) {
      state.toggle = action.payload;
    },
    handleToggleFeedback(state) {
      state.isFeedback = !state.isFeedback;
    },
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;
