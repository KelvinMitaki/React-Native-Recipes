import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  NavigationInjectedProps,
  NavigationParams,
  withNavigation
} from "react-navigation";
import Meal from "../models/Meal";

interface Props {
  data: Meal[];
}

const MealList: React.FC<Props & NavigationInjectedProps<NavigationParams>> = ({
  data,
  navigation
}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={m => m.id}
      renderItem={({ item }) => (
        <View style={styles.mealPrt}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MealDetails", { mealId: item.id })
            }
          >
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

export default withNavigation(MealList);

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
