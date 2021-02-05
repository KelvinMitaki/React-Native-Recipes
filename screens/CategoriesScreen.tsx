import React from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Button } from "react-native-elements";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <View>
      <Button title="Category Meals" />
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("CategoryMeals")}
            style={styles.gridItem}
          >
            <View>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    ...(Platform.OS === "android" && { backgroundColor: Colors.primaryColor })
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});
