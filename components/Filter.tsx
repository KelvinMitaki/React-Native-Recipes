import React, { useState } from "react";
import { Platform, StyleSheet, Switch, Text, View } from "react-native";
import Colors from "../constants/Colors";

interface Props {
  title: string;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
}

const Filter: React.FC<Props> = ({ title, onChange, value }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{title}</Text>
      <Switch
        value={value}
        onValueChange={() => onChange(val => !val)}
        trackColor={{
          true: Colors.primaryColor,
          false: Platform.OS === "android" ? "#ccc" : "white"
        }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : "white"}
      />
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  }
});
