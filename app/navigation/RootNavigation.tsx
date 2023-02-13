import { StyleSheet, View } from "react-native";

import { useReducer, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./DrawerNav";
import { Login } from "../screens";
import { useSelector } from "react-redux";

const RootNavigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const initialState = {
    isAuthenticated: false,
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <DrawerNav /> */}
        <Login />
      </View>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
