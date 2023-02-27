import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const FormSubmitButton = ({
  title,
  submitting,
  onPress,
  style,
  textStyles,
  loading,
}: any) => {
  const backgroundColor = submitting ? "#182005" : "#2B3513";

  return (
    <TouchableOpacity
      disabled={loading}
      onPress={!loading ? onPress : null}
      style={[
        styles.container,
        style,
        { backgroundColor },
        { opacity: loading ? 0.5 : 1 },
      ]}
    >
      <Text style={[styles.formbtn, textStyles]}>
        {loading ? "Submitting..." : title}
      </Text>
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
