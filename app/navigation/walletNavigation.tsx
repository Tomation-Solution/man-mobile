import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  VerifyUser,
  Registration,
  Login,
  ForgotPassword,
  ChangePassword,
  VerifyCode,
  OnAccountSuccess,
  OnSuccessScreen,
  OnPasswordSuccess,
  PaymentDetails,
  FagList,
  Notification,
  Election,
  ElectionDetails,
  ProfileDetails,
  Votingstat
} from "../screens";

const navigationScreenOptions = { headerShown: false };

const WalletNavigation = () => {
  const WalletStack = createNativeStackNavigator();
  return (
    <WalletStack.Navigator screenOptions={navigationScreenOptions}>
      <WalletStack.Screen name="Election" component={Election} />
      <WalletStack.Screen name='ProfileDetails' component={ProfileDetails} />
      <WalletStack.Screen name='ElectionDetails' component={ElectionDetails} />
      <WalletStack.Screen name='Votingstat' component={Votingstat} />

      {/* <WalletStack.Screen name="PaymentDetails" component={PaymentDetails} /> */}
      {/* <WalletStack.Screen name="Notification" component={Notification} /> */}
      {/* <WalletStack.Screen name="FagList" component={FagList} /> */}
      {/*
      <WalletStack.Screen name="Registration" component={Registration} />
      <WalletStack.Screen name="Login" component={Login} />
      <WalletStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <WalletStack.Screen name="ChangePassword" component={ChangePassword} />
      <WalletStack.Screen name="VerifyUser" component={VerifyUser} />
      <WalletStack.Screen name="VerifyCode" component={VerifyCode} />
      <WalletStack.Screen
        name="OnAccountSuccess"
        component={OnAccountSuccess}
      />
      <WalletStack.Screen name="onSucess" component={OnSuccessScreen} />
      <WalletStack.Screen
        name="PasswordChanged"
        component={OnPasswordSuccess}
      /> */}
    </WalletStack.Navigator>
  );
};

export default WalletNavigation;
