import { combineReducers } from "redux";
import mealsReducer from "./reducers/mealsReducer";

const reducers = combineReducers({
  meals: mealsReducer
});

export default reducers;
