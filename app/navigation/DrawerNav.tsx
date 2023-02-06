import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNav from "./BottomNav";
import { COLORS } from "../constants/color";
import News from "../screens/News/News";
import Events from "../screens/Events/Events";
import DrawerContent from "./components/DrawerContent";
import { Election, Gallery, Resources, Services, Support } from "../screens";
import Meetings from "../screens/Meetings/Meetings";

const Drawer = createDrawerNavigator();

const { width } = Dimensions.get("window");

const DrawerNav = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: "white",
            width: width * 0.7,
          },
          drawerActiveTintColor: COLORS.primary,
        }}
        drawerContent={(props: any) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Homescreen" component={BottomNav} />
        <Drawer.Screen name="News" component={News} />
        <Drawer.Screen name="Events" component={Events} />
        <Drawer.Screen name="Election" component={Election} />
        <Drawer.Screen name="Resources" component={Resources} />
        <Drawer.Screen name="Support" component={Support} />
        {/* soupport screens  */}
        <Drawer.Screen name="Gallery" component={Gallery} />
        <Drawer.Screen name="Services" component={Services} />
        <Drawer.Screen name="Meetings" component={Meetings} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
