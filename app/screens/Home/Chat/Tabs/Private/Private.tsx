import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home.";
import Details from "./Details";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { retrieveUserDetails } from "../../../../../utils/helperFunctions/userDataHandlers";

const Stack = createNativeStackNavigator();

const Private = ({ navigation, showTabBar, setShowTabBar }: any) => {
  const [userData, setUserData] = React.useState<any>(null);
  const dispatch = useAppDispatch();
  const { membersList, loading } = useAppSelector(
    (state) => state.extras.members
  );

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
