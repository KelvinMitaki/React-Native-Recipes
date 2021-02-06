import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { MEALS } from "../data/dummy-data";

const MealDetailsScreen: NavigationStackScreenComponent<{
  mealId?: string;
}> = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const meal = MEALS.find(m => m.id === mealId);
  return (
    <View>
      <Text>{meal?.title}</Text>
    </View>
  );
};

MealDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: MEALS.find(m => m.id === navigation.getParam("mealId"))?.title
});

export default MealDetailsScreen;

const styles = StyleSheet.create({});
