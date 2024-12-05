import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishItems: [],
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, action) => {
      const existingItem = state.wishItems.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.wishItems.push({ ...action.payload });
      }
    },
    removeFromWish: (state, action) => {
      state.wishItems = state.wishItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToWish, removeFromWish } = wishSlice.actions;
export default wishSlice.reducer;
