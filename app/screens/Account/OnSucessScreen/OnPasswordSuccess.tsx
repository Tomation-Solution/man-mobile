import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { OnSuccess, Container, Formbtn } from '../../../components'
import { TouchableOpacity } from 'react-native';

const OnSuccessScreen = ({ navigation }: any) => {
  return (
    <Container>
      <View style={styles.container}>
        <OnSuccess
          images={{ uri: 'https://i.ibb.co/NsCffmB/checker.png' }}
          text={`Password successfully changed`}
          title='Continue'
          onPress={() => navigation.navigate('Login')}
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
    width: 320,
    height: 300
  }
})


export default OnSuccessScreen
