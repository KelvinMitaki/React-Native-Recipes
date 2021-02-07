import React, { useEffect } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import {
  HeaderButton,
  HeaderButtons,
  Item
} from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { Redux } from "../interfaces/Redux";
import { Dispatch } from "redux";
import Meal from "../models/Meal";

export interface ToggleFavorite {
  type: "toggleFavorite";
  payload: { mealId: string };
}

const MealDetailsScreen: NavigationStackScreenComponent<{
  mealId?: string;
  mealTitle?: string;
  dispatch?: Dispatch<ToggleFavorite>;
  favoriteMeal?: boolean;
}> = ({ navigation }) => {
  const dispatch = useDispatch();
  const mealId = navigation.getParam("mealId");
  const { meals, favoriteMeals } = useSelector((state: Redux) => state.meals);
  useEffect(() => {
    navigation.setParams({ dispatch });
  }, []);
  useEffect(() => {
    const favoriteMeal = favoriteMeals.some(m => m.id === mealId);
    navigation.setParams({ favoriteMeal });
  }, [favoriteMeals]);
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

MealDetailsScreen.navigationOptions = ({ navigation }) => {
  const dispatch = navigation.getParam("dispatch");
  const mealId = navigation.getParam("mealId");
  return {
    headerTitle: navigation.getParam("mealTitle"),
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
          iconName={
            navigation.getParam("favoriteMeal")
              ? "ios-star"
              : "ios-star-outline"
          }
          onPress={() => {
            if (mealId && dispatch) {
              dispatch({ type: "toggleFavorite", payload: { mealId } });
            }
          }}
        />
      </HeaderButtons>
    )
  };
};

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
