import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Divider } from "@react-native-material/core";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../constants/metric";
import { TouchableOpacity } from "react-native-gesture-handler";

const Item = ({ image, name, link, navigation }: any) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate(link)}
      >
        <MaterialIcons name={image} size={20} style={styles.icon} />
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
      <Divider
        style={{ borderWidth: horizontalScale(0.175), borderColor: "#2B3513" }}
      />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: horizontalScale(10),
    height: verticalScale(60),
  },
  icon: {
    marginRight: horizontalScale(10),
  },
  text: {
    height: verticalScale(21),
    fontWeight: "400",
    fontSize: moderateScale(16),
    lineHeight: moderateScale(21),
  },
});
