import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { OnSuccess, Container, Formbtn, } from '../../../components'

const OnAccountSuccess = ({ navigation }: any) => {

  return (
    <Container>
      <OnSuccess
        images={{ uri: 'https://i.ibb.co/4gzZYwS/Group.png' }}
        text={`A link has been sent to your  email  address to recover account`}
        title='Continue'
        onPress={() => navigation.navigate('VerifyCode')}
        imageStyles={[styles.image]}

      />


    </Container>
  )
}
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200
  }
})

export default OnAccountSuccess
