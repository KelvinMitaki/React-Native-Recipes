import { AnyAction } from "redux";
import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/Meal";
import { AddFavorite } from "../../screens/MealDetailsScreen";

export interface MealsState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

type Action = AddFavorite;

const INITIAL_STATE: MealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = INITIAL_STATE, action: Action): MealsState => {
  switch (action.type) {
    case "addFavorite":
      const meal = state.meals.find(m => m.id === action.payload.mealId);
      if (meal) {
        return {
          ...state,
          ...(!state.favoriteMeals.find(
            m => m.id === action.payload.mealId
          ) && { favoriteMeals: [...state.favoriteMeals, meal] })
        };
      }
      return state;
    default:
      return state;
  }
};

export default mealsReducer;
