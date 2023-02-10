import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const FormSubmitButton = ({
  title,
  submitting,
  onPress,
  style,
  textStyles,
}: any) => {
  const backgroundColor = submitting ? "#182005" : "#2B3513";

  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={[styles.container, style, { backgroundColor }]}
    >
      <Text style={[styles.formbtn, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  formbtn: {
    fontSize: 18,
    color: "#fff",
  },
});

export default FormSubmitButton;
