import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container } from "../../components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import EditProfile from "./EditProfile";

const Stack = createNativeStackNavigator();

const Profile = ({ navigation }: any) => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home">
          {(props) => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen name="EditProfile">
          {(props) => <EditProfile {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
