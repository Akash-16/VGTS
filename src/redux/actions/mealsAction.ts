import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mealsList: [],
  mealsDetails: {},
  error: "",
  showError: false,
  isLoading: true,
};

export const meals = createSlice({
  name: "meals",
  initialState,
  reducers: {
    updateLoader: (state, actions) => {
      state.isLoading = actions.payload;
    },
    mealsList: (state, actions) => {
      state.mealsList = actions.payload;
    },
    mealsDetails: (state, actions) => {
      state.mealsDetails = actions.payload;
    },
  },
});

export const { updateLoader, mealsList, mealsDetails } = meals.actions;
export const mealsReducer = meals.reducer;
