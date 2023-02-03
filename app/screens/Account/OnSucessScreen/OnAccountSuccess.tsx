import { View, Text } from 'react-native'
import React from 'react'
import { OnSuccess,Container,Formbtn} from '../../../components'
import { useNavigation } from '@react-navigation/native';

const OnAccountSuccess = () => {
    const Navigate =useNavigation()
  return (
    <Container>
        <OnSuccess
         image={require('../../../assets/app/images/logo/AcctSuccess.png')}
         text={`A link has been sent to your  email  address to recover account`}
         title='Continue'
         onPress={()=> Navigate.navigate('VerifyCode')}

        />


    </Container>
  )
}

export default OnAccountSuccess
