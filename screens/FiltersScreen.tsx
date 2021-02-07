import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationParams, NavigationRoute } from "react-navigation";
import { NavigationDrawerProp } from "react-navigation-drawer";
import {
  HeaderButton,
  HeaderButtons,
  Item
} from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Switch } from "react-native-gesture-handler";

const FiltersScreen: NavigationStackScreenComponent = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Glutten-free</Text>
        <Switch />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Filter Meals",
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
            NavigationRoute<NavigationParams>,
            NavigationParams
          >).toggleDrawer()
        }
      />
    </HeaderButtons>
  )
});

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    margin: 20
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%"
  }
});
