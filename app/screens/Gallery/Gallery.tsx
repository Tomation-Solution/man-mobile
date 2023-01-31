import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Container, HomeHeader, SearchBar } from "../../components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";

const Stack = createNativeStackNavigator();

const Gallery = ({ navigation }: any) => {
  const [title, setTitle] = useState("Gallery");

  return (
    <Container>
      <HomeHeader navigation={navigation} title={title} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Container>
  );
};

export default Gallery;

const styles = StyleSheet.create({});
