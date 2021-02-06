import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const FavoritesScreen: NavigationStackScreenComponent = () => {
  return (
    <View>
      <Text>FavoritesScreen FavoritesScreen</Text>
    </View>
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites"
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
