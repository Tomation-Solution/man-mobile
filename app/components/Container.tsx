import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const Container: React.FunctionComponent<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 35,
  },
});
