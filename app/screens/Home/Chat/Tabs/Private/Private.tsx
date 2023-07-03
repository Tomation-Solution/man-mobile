import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home.";
import Details from "./Details";
import { retrieveUserDetails } from "../../../../../utils/helperFunctions/userDataHandlers";
import { useIsFocused } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Private = ({ setShowTabBar }: any) => {
  const [userData, setUserData] = React.useState<any>(null);
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    retrieveUserDetails().then((data: any) => {
      setUserData(data);
    });
  }, []);

  if (!userData) return null;
  if (!isFocused) return null;

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
              userData={userData}
              {...props}
              options={{
                tabBarStyle: { display: "none" },
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Details">
          {(props) => (
            <Details
              userData={userData}
              {...props}
              setShowTabBar={setShowTabBar}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default Private;

const styles = StyleSheet.create({});
