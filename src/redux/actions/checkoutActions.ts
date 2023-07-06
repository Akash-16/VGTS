import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutDetails: {},
  error: "",
  isError: false,
  isLoading: true,
};

export const checkout = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    updateLoader: (state, actions) => {
      state.isLoading = actions.payload;
    },
    updateError: (state, actions) => {
      state.isError = true;
      state.error = actions.payload;
    },
    checkoutDetails: (state, actions) => {
      state.checkoutDetails = actions.payload;
    },
  },
});

export const { updateLoader, updateError, checkoutDetails } = checkout.actions;
export const checkoutReducer = checkout.reducer;
