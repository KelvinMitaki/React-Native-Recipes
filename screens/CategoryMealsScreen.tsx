import React from "react";
import { StyleSheet } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import { Redux } from "../interfaces/Redux";

const CategoryMealsScreen: NavigationStackScreenComponent<{
  id?: string;
}> = ({ navigation }) => {
  const catId = navigation.getParam("id");
  const { filteredMeals } = useSelector((state: Redux) => state.meals);
  const meals = filteredMeals.filter(meal =>
    meal.categoryIds.indexOf(catId as string)
  );
  return <MealList data={meals} />;
};
CategoryMealsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: CATEGORIES.find(cat => cat.id === navigation.getParam("id"))
    ?.title
});

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
