import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { useState } from "react";
import RootNavigation from "./app/navigation/RootNavigation";

export default function App() {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <RootNavigation />
      <StatusBar backgroundColor={"white"} hidden={isHidden} />
    </>
  );
}
