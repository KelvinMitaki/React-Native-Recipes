import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen: NavigationStackScreenComponent<{
  id?: string;
}> = ({ navigation }) => {
  const cat = CATEGORIES.find(cat => cat.id === navigation.getParam("id"));
  return (
    <View>
      <Button
        title="Meal Details"
        onPress={() => navigation.navigate("MealDetails")}
      />
      <Text>{cat?.title}</Text>
    </View>
  );
};
CategoryMealsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: CATEGORIES.find(cat => cat.id === navigation.getParam("id"))
    ?.title
});

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
