import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home.";
import Details from "./Details";

const Stack = createNativeStackNavigator();

const Private = ({ navigation, showTabBar, setShowTabBar }: any) => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home">
          {(props) => (
            <Home
              {...props}
              options={{
                tabBarStyle: { display: "none" },
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Details">
          {(props) => <Details {...props} setShowTabBar={setShowTabBar} />}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default Private;

const styles = StyleSheet.create({});
