import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { mealsReducer } from "./actions/mealsAction";
import { checkoutReducer } from "./actions/checkoutActions";

const reducers = combineReducers({
  meals: mealsReducer,
  checkout: checkoutReducer,
});

const state = configureStore({
  reducer: reducers,
});
export type AppDispatch = typeof state.dispatch;
export default state;
