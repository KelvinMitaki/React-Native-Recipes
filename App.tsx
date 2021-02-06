import React from "react";
import { LogBox, Platform } from "react-native";
import { enableScreens } from "react-native-screens";
import {
  createAppContainer,
  CreateNavigatorConfig,
  NavigationParams,
  NavigationRoute,
  NavigationRouteConfigMap,
  NavigationStackRouterConfig
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  createBottomTabNavigator,
  NavigationBottomTabOptions,
  NavigationTabProp
} from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Colors from "./constants/Colors";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FiltersScreen from "./screens/FiltersScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import {
  StackNavigationConfig,
  StackNavigationOptions,
  StackNavigationProp
} from "react-navigation-stack/lib/typescript/src/vendor/types";

enableScreens();

LogBox.ignoreLogs([
  "It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens",
  "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants)."
]);

const defaultNavOpts: CreateNavigatorConfig<
  StackNavigationConfig,
  NavigationStackRouterConfig,
  StackNavigationOptions,
  StackNavigationProp
> = {
  defaultNavigationOptions: {
    headerStyle: {
      ...(Platform.OS === "android" && {
        backgroundColor: Colors.primaryColor
      })
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
  }
};

const mealsStackNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen
  },
  defaultNavOpts
);

const favoritesStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen
  },
  defaultNavOpts
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

const filtersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  defaultNavOpts
);

const drawerNavigator = createDrawerNavigator(
  {
    MealsTab: {
      screen: tabNavigator,
      navigationOptions: {
        title: "Meals"
      }
    },
    Filters: {
      screen: filtersNavigator,
      navigationOptions: {
        title: "Filter Meals"
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor
    }
  }
);

export default createAppContainer(drawerNavigator);
