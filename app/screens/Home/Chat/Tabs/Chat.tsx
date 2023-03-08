import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import General from "./General";
import { COLORS } from "../../../../constants/color";
import Private from "./Private/Private";

const Top = createMaterialTopTabNavigator();

const Chat = ({ environment }: any) => {
  const [showTabBar, setShowTabBar] = React.useState(true);
  const [title, setTitle] = React.useState("Chat");

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 10,
        }}
      ></View>
      <Top.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarIndicatorStyle: { backgroundColor: COLORS.primary },
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
          tabBarStyle: { backgroundColor: "white" },
        }}
      >
        <Top.Screen
          name="General Chats"
          options={{
            swipeEnabled: false,
          }}
        >
          {(props) => <General {...props} environment={environment} />}
        </Top.Screen>
        <Top.Screen
          name="Private Chats"
          options={{
            swipeEnabled: false,
            tabBarStyle: { display: showTabBar ? "flex" : "none" },
          }}
        >
          {(props) => (
            <Private
              {...props}
              showTabBar={showTabBar}
              setShowTabBar={setShowTabBar}
            />
          )}
        </Top.Screen>
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
