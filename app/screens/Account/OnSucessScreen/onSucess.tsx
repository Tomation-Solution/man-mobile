import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { OnSuccess,Container,Formbtn} from '../../../components'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const OnSuccessScreen = () => {
    const Navigate =useNavigation()
  return (
    <Container>
<View style={styles.container}>
<OnSuccess
         image={require('../../../assets/app/images/logo/AcctSuccess.png')}
         text={`Account successfully created`}
         title='Continue'
         onPress={()=> Navigate.navigate('VerifyCode')}
        />

{/* <TouchableOpacity>
    <Text> Subscibe</Text>
    <Text> OR</Text>
    <Text> Continue to 72 hours free trial </Text>
</TouchableOpacity> */}
</View>

    </Container>
  )
}
const styles = StyleSheet.create({
    container:{
display:'flex',
flexDirection:'row',
justifyContent:'center'

    }
})


export default OnSuccessScreen
