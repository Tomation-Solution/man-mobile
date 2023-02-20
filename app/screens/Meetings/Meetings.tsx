import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container } from "../../components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Details";
import Home from "./Home";

const Stack = createNativeStackNavigator();

const News = ({ navigation, environment }: any) => {
  return (
    <Container>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home">
          {(props) => <Home environment={environment} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Details">
          {(props) => <Details {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Container>
  );
};

export default News;

const styles = StyleSheet.create({});
