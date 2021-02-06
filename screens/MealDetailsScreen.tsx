import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  HeaderButton,
  HeaderButtons,
  Item
} from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import { MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";

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
  headerTitle: MEALS.find(m => m.id === navigation.getParam("mealId"))?.title,
  headerRight: () => (
    <HeaderButtons
      HeaderButtonComponent={props => (
        <HeaderButton
          {...props}
          IconComponent={Ionicons}
          iconSize={23}
          color={Platform.OS === "ios" ? Colors.primaryColor : "white"}
        />
      )}
    >
      <Item
        title="Favorite"
        iconName="ios-star"
        onPress={() => console.log("mark as favorite")}
      />
    </HeaderButtons>
  )
});

export default MealDetailsScreen;

const styles = StyleSheet.create({});
