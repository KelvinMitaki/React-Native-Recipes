import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FiltersScreen from "./screens/FiltersScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const navigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  Favorites: FavoritesScreen,
  Filters: FiltersScreen,
  MealDetails: MealDetailsScreen
});

export default createAppContainer(navigator);
