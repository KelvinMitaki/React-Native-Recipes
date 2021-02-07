import { AnyAction } from "redux";
import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/Meal";
import { ToggleFavorite } from "../../screens/MealDetailsScreen";

export interface MealsState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

type Action = ToggleFavorite;

const INITIAL_STATE: MealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = INITIAL_STATE, action: Action): MealsState => {
  switch (action.type) {
    case "toggleFavorite":
      const meal = state.favoriteMeals.find(
        m => m.id === action.payload.mealId
      );
      if (meal) {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.filter(m => m.id !== meal.id)
        };
      }
      return {
        ...state,
        favoriteMeals: [
          state.meals.find(m => m.id === action.payload.mealId) as Meal,
          ...state.favoriteMeals
        ]
      };
    default:
      return state;
  }
};

export default mealsReducer;
