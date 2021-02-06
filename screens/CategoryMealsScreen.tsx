import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen: NavigationStackScreenComponent<{
  id?: string;
}> = ({ navigation }) => {
  const catId = navigation.getParam("id");
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(catId as string));
  return <MealList data={meals} />;
};
CategoryMealsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: CATEGORIES.find(cat => cat.id === navigation.getParam("id"))
    ?.title
});

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
