import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const navSlice = createSlice({
  name: "navToggle",
  initialState,
  reducers: {
    toggleNav: (state, action) => {
      state = action.payload;
    },
  },
});

export const { toggleNav } = navSlice.actions;

export default navSlice.reducer;
