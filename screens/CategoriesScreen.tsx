import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationStackScreenComponent } from "react-navigation-stack";

const CategoriesScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <View>
      <Text>CategoriesScreen CategoriesScreen</Text>
      <Button
        title="Category Meals"
        onPress={() => navigation.navigate("CategoryMeals")}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
