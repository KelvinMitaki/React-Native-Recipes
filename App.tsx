import { LogBox, Platform } from "react-native";
import { enableScreens } from "react-native-screens";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Colors from "./constants/Colors";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FiltersScreen from "./screens/FiltersScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

enableScreens();

LogBox.ignoreLogs([
  "It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens"
]);

const stackNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    Favorites: FavoritesScreen,
    Filters: FiltersScreen,
    MealDetails: MealDetailsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        ...(Platform.OS === "android" && {
          backgroundColor: Colors.primaryColor
        })
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }
  }
);

const tabNavigator = createBottomTabNavigator({
  Meals: stackNavigator,
  Favorites: FavoritesScreen
});

export default createAppContainer(tabNavigator);
