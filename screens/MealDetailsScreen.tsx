import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import {
  HeaderButton,
  HeaderButtons,
  Item
} from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import { MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Redux } from "../interfaces/Redux";

const MealDetailsScreen: NavigationStackScreenComponent<{
  mealId?: string;
}> = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const { meals } = useSelector((state: Redux) => state.meals);
  const meal = meals.find(m => m.id === mealId);
  return (
    <>
      <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <Text style={{ color: "white" }}>{meal?.duration}m</Text>
        <Text style={{ color: "white" }}>{meal?.complexity.toUpperCase()}</Text>
        <Text style={{ color: "white" }}>
          {meal?.affordability.toUpperCase()}
        </Text>
      </View>
      <ScrollView>
        <Text style={styles.title}>Ingredients</Text>
        {meal?.ingredients.map(ing => (
          <Text style={styles.listItem} key={ing}>
            {ing}
          </Text>
        ))}
        <Text style={styles.title}>Steps</Text>
        {meal?.steps.map(st => (
          <Text style={styles.listItem} key={st}>
            {st}
          </Text>
        ))}
      </ScrollView>
    </>
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

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%"
  },
  mealRow: {},
  mealDetail: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 10
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
});
