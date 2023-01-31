import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SPACING } from "../../globals/styles";
import { COLORS } from "../../constants/color";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

interface SearchBarProps {
  hasFilter?: boolean;
}

const FilterModal = () => {
  return (
    <View style={styles.filterModal}>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        FILTER
      </Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={{ color: "gray", fontSize: 14 }}>FROM</Text>
          <TextInput placeholder="DD/MM/YYYY" style={styles.input} />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "gray", fontSize: 14 }}>TO</Text>
          <TextInput placeholder="DD/MM/YYYY" style={styles.input} />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          marginBottom: 10,
          width: width / 1.5,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          APPLY
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const SearchBar = ({ hasFilter }: SearchBarProps) => {
  const [showFilterModal, setShowFilterModal] = React.useState(false);

  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <AntDesign
            color={COLORS.primary}
            name="search1"
            size={20}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Search..."
            style={{ fontSize: 14, flex: 1 }}
          />
        </View>
        {hasFilter && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowFilterModal(!showFilterModal)}
          >
            <Ionicons
              color={COLORS.primary}
              name="filter"
              size={20}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        )}
      </View>
      {showFilterModal && <FilterModal />}
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
    position: "relative",
  },
  filterModal: {
    position: "absolute",
    top: 60,
    right: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: width / 1.2,
    padding: 10,
    zIndex: 6,
    elavation: 6,
    borderRadius: 10,
  },
  input: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 5,
    width: "100%",
  },
});
