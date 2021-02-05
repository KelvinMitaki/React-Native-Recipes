import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Category Meals"
        onPress={() => navigation.navigate("CategoryMeals")}
      />
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});
