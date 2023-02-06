import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Container } from "../../components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Details1 from "./Details1";
import Details2 from "./Details2";

const Stack = createNativeStackNavigator();

const Donation = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home">
          {(props) => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Details1">
          {(props) => <Details1 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Details2">
          {(props) => <Details2 {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </View>
  );
};

export default Donation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
