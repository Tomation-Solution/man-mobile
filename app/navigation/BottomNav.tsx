import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants/color";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeScreen } from "../screens";
import Chat from "../screens/Home/Chat/Tabs/Chat";
import { Account } from "../screens/Home";
import Memebers from "../screens/Home/Members/Memebers";

const Tab = createBottomTabNavigator();

const BottomNav = ({ environment }: any) => {
  return (
    <Tab.Navigator
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
            <MaterialCommunityIcons name="account" color={color} size={28} />
          ),
        }}
        name="Account"
        component={Account}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" color={color} size={28} />
          ),
        }}
        name="Members"
        component={Memebers}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
