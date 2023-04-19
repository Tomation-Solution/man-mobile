import { Alert as NativeAlert } from "react-native";

const defaultButtons = (resolve: any, reject: any) => [
  {
    text: "OK",
    onPress: () => {
      resolve();
    },
  },
];

const AsyncAlert = (title: any, msg: any, getButtons = defaultButtons) =>
  new Promise((resolve, reject) => {
    NativeAlert.alert(title, msg, getButtons(resolve, reject), {
      cancelable: false,
    });
  });

export default AsyncAlert;
