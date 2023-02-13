import { StyleSheet } from "react-native";
import React from "react";
import { Container } from "../../components";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import MembersService from "./MembersService";
import StaffsService from "./StaffsService";

const Stack = createNativeStackNavigator();

const Services = ({ navigation }: any) => {
  return (
    <Container style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home">
          {(props) => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MembersService">
          {(props) => <MembersService {...props} />}
        </Stack.Screen>
        <Stack.Screen name="StaffsService">
          {(props) => <StaffsService {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Container>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
