import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SPACING } from "../../globals/styles";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <AntDesign name="search1" size={20} style={{ marginRight: 10 }} />
      <TextInput placeholder="Search..." style={{ fontSize: 14, flex: 1 }} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAEBE7",
    padding: 10,
    borderRadius: 10,
    marginVertical: SPACING.sectionPadding,
  },
});
