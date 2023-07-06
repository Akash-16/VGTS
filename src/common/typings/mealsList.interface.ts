import { Meals } from "./meals.interface";

export interface MealsList {
  id: number | string;
  name: string;
  image: string;
  discription: string;
}

export interface InitialState {
  mealsList: MealsList[];
  mealsDetails: MealsList | Meals;
  error: string;
  showError: boolean;
  isLoading: boolean;
}

export interface MealsState {
  meals: InitialState;
}
