import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";
import { Redux } from "../interfaces/Redux";

const CategoryMealsScreen: NavigationStackScreenComponent<{
  id?: string;
}> = ({ navigation }) => {
  const catId = navigation.getParam("id");
  const { filteredMeals } = useSelector((state: Redux) => state.meals);
  const meals = filteredMeals.filter(meal =>
    meal.categoryIds.includes(catId as string)
  );
  if (meals.length === 0) {
    return (
      <View style={styles.screen}>
        <Text h3 h3Style={{ textAlign: "center" }}>
          No meals found on this category
        </Text>
        <Button
          containerStyle={{
            width: "80%",
            alignSelf: "center",
            marginTop: 10
          }}
          buttonStyle={{
            backgroundColor: Colors.primaryColor
          }}
          title="Adjust Filter"
          onPress={() => navigation.navigate("Filters")}
        />
      </View>
    );
  }
  return <MealList data={meals} />;
};
CategoryMealsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: CATEGORIES.find(cat => cat.id === navigation.getParam("id"))
    ?.title
});

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center"
  }
});
