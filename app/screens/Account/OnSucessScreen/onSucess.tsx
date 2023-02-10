import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { OnSuccess, Container, Formbtn } from '../../../components'
import { TouchableOpacity } from 'react-native';
import { images } from './../../../assets/dummyData/index';

const OnSuccessScreen = ({ navigation }: any) => {
  return (
    <Container>
      <View style={styles.container}>
        <OnSuccess
          images={{ uri: 'https://i.ibb.co/qsPy90K/Acct-Success.png' }}
          text={`Account successfully created`}
          title='Continue'
          onPress={() => navigation.navigate('PasswordChanged')}
          imageStyles={[styles.image]}
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
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 200
  }

})


export default OnSuccessScreen
