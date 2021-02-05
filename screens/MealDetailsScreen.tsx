import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const MealDetailsScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <View>
      <Text>MealDetailsScreen MealDetailsScreen</Text>
      <Button title="Categories" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({});
