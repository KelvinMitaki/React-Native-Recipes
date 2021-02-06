import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Button } from "react-native-elements";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen: NavigationStackScreenComponent<{
  id?: string;
}> = ({ navigation }) => {
  const catId = navigation.getParam("id");
  const meals = MEALS.filter(meal => meal.categoryIds.indexOf(catId as string));
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={meals}
      keyExtractor={m => m.id}
      renderItem={({ item }) => (
        <View style={styles.mealPrt}>
          <TouchableOpacity>
            <View style={styles.mealItem}>
              <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                <ImageBackground
                  source={{ uri: item.imageUrl }}
                  style={styles.bgImage}
                >
                  <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                  </Text>
                </ImageBackground>
              </View>
              <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                <Text>{item.duration} m</Text>
                <Text>{item.complexity.toUpperCase()}</Text>
                <Text>{item.affordability.toUpperCase()}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};
CategoryMealsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: CATEGORIES.find(cat => cat.id === navigation.getParam("id"))
    ?.title
});

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  mealPrt: {
    paddingHorizontal: 15
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#cccccc80",
    marginVertical: 10,
    borderRadius: 5,
    overflow: "hidden"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "80%"
  },
  mealDetail: {
    height: "20%",
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  bgImage: {
    height: "100%",
    width: "100%"
  },
  title: {
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center"
  }
});
