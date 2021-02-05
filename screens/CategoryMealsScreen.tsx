import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const CategoryMealsScreen: NavigationStackScreenComponent = ({
  navigation
}) => {
  return (
    <View>
      <Text>CategoryMealsScreen CategoryMealsScreen</Text>
      <Button
        title="Meal Details"
        onPress={() => navigation.navigate("MealDetails")}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
