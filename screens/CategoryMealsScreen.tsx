import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen: NavigationStackScreenComponent<{
  id?: string;
}> = ({ navigation }) => {
  const catId = navigation.getParam("id");
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(catId as string));
  return (
    <View>
      <Button
        title="Meal Details"
        onPress={() => navigation.navigate("MealDetails")}
      />
      <FlatList
        data={meals}
        keyExtractor={m => m.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
CategoryMealsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: CATEGORIES.find(cat => cat.id === navigation.getParam("id"))
    ?.title
});

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
