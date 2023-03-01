import { StyleSheet, View } from "react-native";

import { useReducer, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./DrawerNav";
import { Login } from "../screens";
import { useSelector } from "react-redux";
import { useAppSelector } from "../store/hooks";

const RootNavigation = () => {
  const isLoggedIn = useAppSelector(
    (state) => state.authReducers.login.isLoggedIn
  );

  console.log("isLoggedIn", isLoggedIn);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* {isLoggedIn ? <DrawerNav /> : <Login />} */}
        <DrawerNav />
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
