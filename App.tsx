import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import type { StatusBarStyle } from "react-native";
import { HomeScreen } from "./app/screens";
import { useState } from "react";
import { COLORS } from "./app/constants/color";

export default function App() {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
        <StatusBar backgroundColor={"white"} hidden={isHidden} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
