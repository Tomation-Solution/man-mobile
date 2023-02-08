import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import General from "./Tabs/General";
import { COLORS } from "../../../constants/color";
import { HomeHeader } from "../../../components";
import Private from "./Tabs/Private/Private";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Top = createMaterialTopTabNavigator();

const Chat = ({ navigation }: any) => {
  // const getTabBarVisibility = (route:any) => {
  //   const routeName = getFocusedRouteNameFromRoute<any>(route);
  //   const hideOnScreens = ["@react-navigation/native"]; // put here name of screen where you want to hide tabBar
  //   return hideOnScreens.indexOf(routeName) <= -1;
  // };

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <HomeHeader
          title="Chat"
          navigation={navigation}
          back={navigation.goBack}
        />
      </View>
      <Top.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarIndicatorStyle: { backgroundColor: COLORS.primary },
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
          tabBarStyle: { backgroundColor: "white" },
        }}
      >
        <Top.Screen name="General Chats" component={General} />
        <Top.Screen name="Private Chats" component={Private} />
      </Top.Navigator>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
});
