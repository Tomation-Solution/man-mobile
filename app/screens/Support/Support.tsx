import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container } from "../../components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Faq from "./FAQ/Home";
import AdminSupport from "./AdminSupport/Home";



const Stack = createNativeStackNavigator();

const News = ({ navigation }: any) => {
  return (
    <Container>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home">

          {(props) => <Faq {...props} />}

        </Stack.Screen>

        <Stack.Screen name="Admin Support">
          {(props) => <AdminSupport {...props} />}
        </Stack.Screen>
        {/* <Stack.Screen name="Admin Support">
          {(props) => <AdminSupport {...props} />}
        </Stack.Screen> */}
      </Stack.Navigator>
     </Container>
  );
};

export default News;

const styles = StyleSheet.create({});
