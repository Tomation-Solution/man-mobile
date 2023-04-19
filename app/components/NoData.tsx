import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NoData = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 300,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>No Data Found</Text>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({});
