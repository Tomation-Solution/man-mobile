import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home.";
import Details from "./Details";
import { retrieveUserDetails } from "../../../../../utils/helperFunctions/userDataHandlers";

const Stack = createNativeStackNavigator();

const Private = ({ setShowTabBar }: any) => {
  const [userData, setUserData] = React.useState<any>(null);

  useEffect(() => {
    retrieveUserDetails().then((data: any) => {
      setUserData(data);
    });
  }, []);
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
