import React, { useEffect, useState } from "react";
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
import Filter from "../components/Filter";
import { useDispatch } from "react-redux";

export interface AddFilter {
  type: "addFilter";
  payload: {
    isGluttenFree: boolean;
    isLactoseFree: boolean;
    isVegan: boolean;
    isVegeterian: boolean;
  };
}

const FiltersScreen: NavigationStackScreenComponent<{ save?: () => void }> = ({
  navigation
}) => {
  const [isGluttenFree, setIsGluttenFree] = useState<boolean>(false);
  const [isLactoseFree, setIsLactoseFree] = useState<boolean>(false);
  const [isVegan, setVegan] = useState<boolean>(false);
  const [isVegeterian, setVegeterian] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const saveFilters = () => {
      const appliedFilters = {
        isGluttenFree,
        isLactoseFree,
        isVegan,
        isVegeterian
      };
      dispatch<AddFilter>({ type: "addFilter", payload: appliedFilters });
    };
    navigation.setParams({ save: saveFilters });
  }, [isGluttenFree, isLactoseFree, isVegan, isVegeterian]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <Filter
        onChange={setIsGluttenFree}
        value={isGluttenFree}
        title="Glutten-Free"
      />
      <Filter
        onChange={setIsLactoseFree}
        value={isLactoseFree}
        title="Lactose-Free"
      />
      <Filter onChange={setVegan} value={isVegan} title="Vegan" />
      <Filter
        onChange={setVegeterian}
        value={isVegeterian}
        title="Vegeterian"
      />
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
  ),
  headerRight: () => (
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
        title="Save"
        iconName="ios-save"
        onPress={() => {
          const save = navigation.getParam("save");
          save && save();
          navigation.navigate("Categories");
        }}
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
  }
});
