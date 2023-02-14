import { View, Text,StyleSheet, Image } from 'react-native';
import React from 'react';
import Container from '../Container';
import FormSubmitButton from '../form/FormBtn';
const OnSuccess = (props) => {
    const {images, text,title,testStyle,onPress,imageStyles} =  props
  return (
    <Container>
        <View style={styles.row}  >
         <View style={styles.container}>
        <Image
        style={[imageStyles]}
        source={images}/>
         <Text style={styles.fineText}> {text}</Text>
         <FormSubmitButton
style={[testStyle]}
title={title}
onPress={onPress}
/>

         </View>

        </View>
    </Container>
  )
}

const styles = StyleSheet.create({
row:{
  display:'flex',
    flexDirection: 'row',
justifyContent: 'center',
},
container:{
    paddingVertical:70,
    paddingHorizontal:25,
    display:'flex',
},
fineText:{
  textAlign:'center',
  paddingVertical:30,
  fontSize:16,
  lineHeight:21.86,
  fontWeight:'700'


}

})


export default OnSuccess
