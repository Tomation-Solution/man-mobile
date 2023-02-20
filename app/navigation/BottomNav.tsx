import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants/color";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "../screens";
import Chat from "../screens/Home/Chat/Chat";
import { Account } from "../screens/Home";
import Memebers from "../screens/Home/Members/Memebers";
import PrivateChat from "../screens/Home/Chat/PrivateChat";
import Members from "../screens/Home/Members/Members";
import Excos from "../screens/Excos/Excos";
import Donation from "../screens/Donation/Donation";

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
        component={Chat}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet" color={color} size={28} />
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
        name="Donation"
        component={Donation}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
