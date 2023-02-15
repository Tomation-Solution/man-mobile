import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { useState } from "react";
import RootNavigation from "./app/navigation/RootNavigation";
import { Provider } from "react-redux";
import store from "./app/store/configureStore";

export default function App() {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
      <StatusBar backgroundColor={"white"} hidden={isHidden} />
    </>
  );
}
