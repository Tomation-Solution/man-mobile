import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { OnSuccess,Container,Formbtn,} from '../../../components'
import { useNavigation } from '@react-navigation/native';

const OnAccountSuccess = () => {
    const Navigate =useNavigation()
  return (
    <Container>
        <OnSuccess
         images={{uri:'https://i.ibb.co/4gzZYwS/Group.png'}}
         text={`A link has been sent to your  email  address to recover account`}
         title='Continue'
         onPress={()=> Navigate.navigate('VerifyCode')}
         imageStyles={[styles.image]}

        />


    </Container>
  )
}
const styles = StyleSheet.create({
  image:{
    width:300,
    height:200
    }
})

export default OnAccountSuccess
