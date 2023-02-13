import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container } from "../../components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import ElectionDetails from "./ElectionDetail";
import ProfileDetails from "./ProfileDetails";
import VoteStat from "./VoteStat";



const Stack = createNativeStackNavigator();

const News = ({ navigation }: any) => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home">
          {(props) => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ElectionDetails">
          {(props) => <ElectionDetails {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ProfileDetails">
          {(props) => <ProfileDetails {...props} />}
        </Stack.Screen>
        <Stack.Screen name="VoteStat">
          {(props) => <VoteStat {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
  );
};

export default News;

const styles = StyleSheet.create({});
