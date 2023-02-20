import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNav from "./BottomNav";
import { COLORS } from "../constants/color";
import News from "../screens/News/News";
import Events from "../screens/Events/Events";
import DrawerContent from "./components/DrawerContent";
import {
  Election,
  Gallery,
  Notification,
  Resources,
  Services,
  Support,
  AdminSupport,
  TechnicalSupport,
} from "../screens";
import Meetings from "../screens/Meetings/Meetings";
import Profile from "../screens/Profile/Profile";
import Publications from "../screens/Publications/Publications";

const Drawer = createDrawerNavigator();

const { width } = Dimensions.get("window");

export const EnvironmentContext = React.createContext({});

const DrawerNav = () => {
  const [environment, setEnvironment] = React.useState({
    environment: "",
    id: "",
  });
  return (
    <EnvironmentContext.Provider value={{ environment, setEnvironment }}>
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
        drawerContent={(props: any) => (
          <DrawerContent
            {...props}
            environment={environment}
            setEnvironment={setEnvironment}
          />
        )}
      >
        <Drawer.Screen name="Homescreen">
          {(props) => <BottomNav environment={environment} {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="News">
          {(props) => (
            <News
              environment={environment}
              setEnvironment={setEnvironment}
              {...props}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Publications">
          {(props) => <Publications environment={environment} {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Events" component={Events} />
        <Drawer.Screen name="Election" component={Election} />
        <Drawer.Screen name="Resources" component={Resources} />
        <Drawer.Screen name="Support" component={Support} />
        <Drawer.Screen name="Admin Support" component={AdminSupport} />
        <Drawer.Screen name="Technical Suport" component={TechnicalSupport} />

        {/* soupport screens  */}

        <Drawer.Screen name="Gallery">
          {(props) => <Gallery environment={environment} {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Services" component={Services} />
        <Drawer.Screen name="Meetings">
          {(props) => <Meetings environment={environment} {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    </EnvironmentContext.Provider>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});
