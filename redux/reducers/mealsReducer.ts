import { AnyAction } from "redux";
import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/Meal";

export interface MealsState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

type Action = AnyAction;

const INITIAL_STATE: MealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = INITIAL_STATE, action: Action): MealsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mealsReducer;
