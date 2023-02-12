import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Container } from "../../components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Details from "./Details";

const Stack = createNativeStackNavigator();

const Gallery = ({ navigation }: any) => {
  return (
    <Container>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home">
          {/* {(props) => <Home {...props} />} */}
        </Stack.Screen>
        <Stack.Screen name="Details">
          {/* {(props) => <Details {...props} />} */}
        </Stack.Screen>
      </Stack.Navigator>
    </Container>
  );
};

export default Gallery;

const styles = StyleSheet.create({});
