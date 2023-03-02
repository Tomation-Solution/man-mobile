import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const FormContainer = ({ children }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default FormContainer;
