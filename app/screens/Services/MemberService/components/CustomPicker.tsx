import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../constants/metric";
import { Ionicons } from "@expo/vector-icons";

const CustomPicker = ({ title, onPress }: any) => {
  return (
    <View style={styles.documentPicker}>
      <Text style={styles.text}>{title}</Text>
      <Ionicons name="link-sharp" size={24} onPress={onPress} />
    </View>
  );
};

export default CustomPicker;

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    textAlign: "center",
    lineHeight: moderateScale(24),
  },
  documentPickerContainer: {
    marginTop: verticalScale(80),
  },
  documentPicker: {
    flexDirection: "row",
    backgroundColor: "#EAEBE7",
    borderRadius: 8,
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(15),
    marginTop: verticalScale(30),
  },
});
