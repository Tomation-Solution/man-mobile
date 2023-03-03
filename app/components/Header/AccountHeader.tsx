import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { normalize } from "../../constants/metric";
import { COLORS } from "../../constants/color";

interface Props {
  title?: string;
  text?: any;
}

const AccountHeader = ({ title, text }: Props) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Text style={styles.Loginheading}>{title}</Text>
      <Text style={styles.heading}> {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Loginheading: {
    fontSize: normalize(20),
    fontWeight: "700",
    lineHeight: 32.78,
    color: COLORS.primary,
  },
  heading: {
    fontSize: normalize(14),
    fontWeight: "300",
    lineHeight: 21.86,
    color: "rgba(0,0,34,0.41)",
  },
});

export default AccountHeader;
