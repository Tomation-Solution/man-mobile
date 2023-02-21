import { StyleSheet, View } from "react-native";

import { useReducer, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./DrawerNav";

import { useSelector } from "react-redux";
import { useAppSelector } from "../store/hooks";
import AuthNavigation from "./AuthNavigation";

const RootNavigation = () => {
  const isLoggedIn = useAppSelector(
    (state) => state.authReducers.login.isLoggedIn
  );

  console.log("isLoggedIn", isLoggedIn);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {isLoggedIn ? <DrawerNav /> : <AuthNavigation />}
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
