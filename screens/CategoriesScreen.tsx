import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CategoryMeals", { id: item.id })
            }
            style={{ ...styles.gridItem, backgroundColor: item.color }}
          >
            <View style={styles.titlePrt}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10
  },
  title: {
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 22,
    fontWeight: "bold"
  },
  titlePrt: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1
  }
});
