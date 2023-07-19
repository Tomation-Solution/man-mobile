import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { useEffect, useState } from "react";
import RootNavigation from "./app/navigation/RootNavigation";
import { Provider } from "react-redux";
import store from "./app/store/configureStore";
import messaging from "@react-native-firebase/messaging";
import { Alert } from "react-native";

export default function App() {
  const [isHidden, setIsHidden] = useState(false);

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  }

  useEffect(() => {
    const initializeMessaging = async () => {
      await requestUserPermission();

      messaging()
        .getToken()
        .then((token) => {
          console.log("FCM token:", token);
        })
        .catch((error) => {
          console.log("Failed to get FCM token:", error);
        });

      messaging().onMessage(async (remoteMessage) => {
        console.log("FCM message received:", remoteMessage);
      });
    };
    initializeMessaging();

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
          //  setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        //  setLoading(false);
      });

    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
      // navigation.navigate(remoteMessage.data.type);
    });

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
      <StatusBar backgroundColor={"white"} hidden={isHidden} />
    </>
  );
}
