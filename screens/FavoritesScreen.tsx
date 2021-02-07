import React from "react";
import { Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  HeaderButton,
  HeaderButtons,
  Item
} from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import MealList from "../components/MealList";
import Colors from "../constants/Colors";
import { NavigationDrawerProp } from "react-navigation-drawer";
import {
  NavigationParams,
  NavigationRoute,
  NavigationSetParamsActionPayload
} from "react-navigation";
import { Redux } from "../interfaces/Redux";
import { useSelector } from "react-redux";

const FavoritesScreen: NavigationStackScreenComponent = () => {
  const { favoriteMeals } = useSelector((state: Redux) => state.meals);
  return <MealList data={favoriteMeals} />;
};

FavoritesScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Your Favorites",
  headerLeft: () => (
    <HeaderButtons
      HeaderButtonComponent={props => (
        <HeaderButton
          {...props}
          IconComponent={Ionicons}
          iconSize={23}
          color={Platform.OS === "android" ? "white" : Colors.primaryColor}
        />
      )}
    >
      <Item
        title="Drawer"
        iconName="ios-menu"
        onPress={() =>
          ((navigation as unknown) as NavigationDrawerProp<
            NavigationRoute<NavigationSetParamsActionPayload>,
            NavigationParams
          >).toggleDrawer()
        }
      />
    </HeaderButtons>
  )
});

export default FavoritesScreen;

const styles = StyleSheet.create({});
