import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./app/screens";
import { useState } from "react";

export default function App() {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      <StatusBar style="dark" hidden={isHidden} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
