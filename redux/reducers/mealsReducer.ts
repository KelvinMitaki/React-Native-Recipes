import { AnyAction } from "redux";
import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/Meal";
import { AddFilter } from "../../screens/FiltersScreen";
import { ToggleFavorite } from "../../screens/MealDetailsScreen";

export interface MealsState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

type Action = ToggleFavorite | AddFilter;

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
    case "addFilter":
      const {
        isGluttenFree,
        isLactoseFree,
        isVegan,
        isVegeterian
      } = action.payload;
      const filteredMeals = state.meals.filter(
        m =>
          m.isGlutenFree === isGluttenFree &&
          m.isLactoseFree === isLactoseFree &&
          m.isVegan === isVegan &&
          m.isVegetarian === isVegeterian
      );
      return { ...state, filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
