import React from "react";
import { LogBox, Platform } from "react-native";
import { enableScreens } from "react-native-screens";
import {
  createAppContainer,
  NavigationParams,
  NavigationRoute,
  NavigationRouteConfigMap
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  createBottomTabNavigator,
  NavigationBottomTabOptions,
  NavigationTabProp
} from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
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

const mealsStackNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
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

const favoritesStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen
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

const tabScreenConfig: NavigationRouteConfigMap<
  NavigationBottomTabOptions,
  NavigationTabProp<NavigationRoute<NavigationParams>, any>,
  unknown
> = {
  Meals: {
    screen: mealsStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      )
    }
  },
  Favorites: {
    screen: favoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      )
    }
  }
};

const tabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.accentColor,
        inactiveColor: "white",
        barStyle: {
          backgroundColor: Colors.primaryColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor
        }
      });

export default createAppContainer(tabNavigator);
