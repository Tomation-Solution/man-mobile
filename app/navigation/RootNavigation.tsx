import { StyleSheet, View } from "react-native";

import { useReducer, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./walletNavigation";

const RootNavigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const initialState = {
    isAuthenticated: false,
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
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
