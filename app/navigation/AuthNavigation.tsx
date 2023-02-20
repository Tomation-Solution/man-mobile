import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ChangePassword,
  ForgotPassword,
  Login,
  OnAccountSuccess,
  OnPasswordSuccess,
  OnSuccessScreen,
  Registration,
  VerifyCode,
  VerifyUser,
} from "../screens";

const navigationScreenOptions = { headerShown: false };

const AuthNavigation = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={navigationScreenOptions}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Registration" component={Registration} />
      <AuthStack.Screen name="VerifyUser" component={VerifyUser} />
      <AuthStack.Screen name="VerifyCode" component={VerifyCode} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="ChangePassword" component={ChangePassword} />
      <AuthStack.Screen name="OnAccountSuccess" component={OnAccountSuccess} />
      <AuthStack.Screen name="onSucess" component={OnSuccessScreen} />
      <AuthStack.Screen name="PasswordChanged" component={OnPasswordSuccess} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
