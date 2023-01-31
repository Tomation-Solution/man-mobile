import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SPACING } from "../../globals/styles";
import { COLORS } from "../../constants/color";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SearchBarProps {
  hasFilter?: boolean;
}

const SearchBar = ({ hasFilter }: SearchBarProps) => {
  return (
    <View style={styles.searchContainer}>
      <View style={{ flex: 1 }}>
        <AntDesign
          color={COLORS.primary}
          name="search1"
          size={20}
          style={{ marginRight: 10 }}
        />
        <TextInput placeholder="Search..." style={{ fontSize: 14, flex: 1 }} />
      </View>
      {hasFilter && (
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons
            color={COLORS.primary}
            name="filter"
            size={20}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      )}
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
