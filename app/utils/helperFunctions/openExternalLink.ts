import { Linking } from "react-native";

export const openExternalLink = async (url: string) => {
  // Check if the device supports the URL scheme (http / https)
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    // Open the URL in the user's default browser
    await Linking.openURL(url);
  } else {
    console.log(`Don't know how to open URL: ${url}`);
  }
};
