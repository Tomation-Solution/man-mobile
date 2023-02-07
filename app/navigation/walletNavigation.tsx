import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {VerifyUser, Registration,Login,ForgotPassword,ChangePassword,VerifyCode,
  OnAccountSuccess,OnSuccessScreen,OnPasswordSuccess,PaymentDetails
} from '../screens'



const WalletNavigation = () => {
    const WalletStack = createNativeStackNavigator()
    return (
      <WalletStack.Navigator    screenOptions={{  headerShown: false, }} >
              <WalletStack.Screen name="PaymentDetails" component={PaymentDetails} />
            {/* <WalletStack.Screen name="Login" component={Login} />
           <WalletStack.Screen name="Registration" component={Registration} />
           <WalletStack.Screen name="ForgotPassword" component={ForgotPassword} />
           <WalletStack.Screen name="ChangePassword" component={ChangePassword}/>
           <WalletStack.Screen name="VerifyUser" component={VerifyUser}/>
           <WalletStack.Screen name="VerifyCode" component={VerifyCode}/>
           <WalletStack.Screen name="OnAccountSuccess" component={OnAccountSuccess}/>
           <WalletStack.Screen name="onSucess" component={OnSuccessScreen}/>
           <WalletStack.Screen name="PasswordChanged" component={OnPasswordSuccess}/> */}
           </WalletStack.Navigator >
  );
}

export default WalletNavigation




