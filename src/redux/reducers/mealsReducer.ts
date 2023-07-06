import { Dispatch } from "redux";

import { client } from "../../config/server";
import { updateLoader, mealsList, mealsDetails } from "../actions/mealsAction";
import { AppDispatch } from "../state";
import { Meals } from "../../common/typings/meals.interface";

export const getMealsList = (name?: string): any => {
  return async (dispatch: Dispatch): Promise<any> => {
    dispatch(updateLoader(true));
    try {
      const { data } = await client.get(
        `search.php?${name ? `s=${name}` : "s"}`
      );
      const list = data.meals
        .map((item: Meals) => {
          return {
            id: item.idMeal,
            name: item.strMeal,
            image: item.strMealThumb,
            discription: item.strInstructions,
          };
        })
        .slice(0, 12);
      dispatch(mealsList(list));
      dispatch(updateLoader(false));
    } catch (error) {
      dispatch(updateLoader(false));
    }
  };
};

export const getMealsDetails = (id: number | string): any => {
  return async (dispatch: AppDispatch): Promise<any> => {
    dispatch(updateLoader(true));
    try {
      const { data } = await client.get(`lookup.php?i=${id}`);
      const details = data.meals[0];
      dispatch(mealsDetails(details));
      dispatch(updateLoader(false));
    } catch (error) {
      dispatch(updateLoader(false));
    }
  };
};
