import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./DrawerNav";

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
        {isLoggedIn ? <DrawerNav /> : <DrawerNav />}
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
