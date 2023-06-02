import React from "react";
import {
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

const KeyboardAvoidingViewWrapper = ({ children }: any) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default KeyboardAvoidingViewWrapper;
