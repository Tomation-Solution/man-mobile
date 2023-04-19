import { Alert, StyleSheet, Text, View } from "react-native";
import React, { memo, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants/color";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeScreen } from "../screens";
import Chat from "../screens/Home/Chat/Tabs/Chat";
import { Account } from "../screens/Home";
import Memebers from "../screens/Home/Members/Memebers";
import { useAppSelector } from "../store/hooks";

const Tab = createBottomTabNavigator();

const BottomNav = ({ environment }: any) => {
  const [isInancial, setIsInancial] = React.useState(false);
  const { error } = useAppSelector(
    (state) => state.newsPublication.publication
  );
  useEffect(() => {
    if (error) {
      if (error?.is_inancial) {
        setIsInancial(true);
        Alert.alert("Notice", "Please pay your annual due", [
          {
            text: "Cancel",
            onPress: () => console.log("clicked"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => console.log("clicked"),
          },
        ]);
      }
    }
  }, [error]);
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },

        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 5,
        },
      }}
    >
      {!isInancial && (
        <>
          <Tab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" color={color} size={28} />
              ),
            }}
            name="HomeScreen"
          >
            {(props) => <HomeScreen environment={environment} {...props} />}
          </Tab.Screen>
          <Tab.Screen
            options={{
              tabBarStyle: { display: "none" },

              tabBarIcon: ({ color }) => (
                <Ionicons name="chatbox" color={color} size={28} />
              ),
            }}
            name="Chat"
          >
            {(props) => <Chat environment={environment} {...props} />}
          </Tab.Screen>

          <Tab.Screen
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="people" color={color} size={28} />
              ),
            }}
            name="Members"
            component={Memebers}
          />
        </>
      )}
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={28} />
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default memo(BottomNav);

const styles = StyleSheet.create({});
