import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen: NavigationStackScreenComponent = () => {
  return (
    <MealList
      data={MEALS.filter(
        m => m.id === "m1" || m.id === "m2" || m.id === "m3" || m.id === "m4"
      )}
    />
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites"
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
