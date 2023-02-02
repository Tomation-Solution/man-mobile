import Container from './../../../components/Container';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput ,Image,TouchableOpacity} from 'react-native';
import FormContainer from '../FormContainer';
import FormSubmitButton from '../../../components/form/FormBtn';
import FormInput from '../../../components/Input/input2'
import KeyboardAvoidingViewWrapper from '../../../components/form/KeyboardAvoidngwrapper'
import {ComfirmationInput} from '../../../components'
import { useNavigation } from '@react-navigation/native';



const ForgetPassword = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const Navigate=useNavigation()


  return (
<>
<Container>
<View style={{paddingVertical:100}}>
<View style={{paddingHorizontal:3,paddingVertical:10,
}} >
<Text style={styles.Loginheading}> Forgot password </Text>
<Text style={styles.heading}> Enter email address to recover account</Text>
</View>
<View style={[styles.card,styles.shawdowProp]}>

<FormInput
label='EMAIL ADDRESS'
placeholder='Enter Email Address'
autoCapitalize='none'
secureTextEntry

/>

<FormSubmitButton
            title='Continue'
            style ={[styles.add]}
            onPress={()=> Navigate.navigate( 'VerifyCode')}

/>
  </View>
  </View>
    </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  add:{
    marginTop:12
  },
    card:{

        backgroundColor:'#ffff',
        borderRadius:8,
        paddingVertical:38,
        paddingHorizontal:25,
        width:'100%',
        marginVertical:10,
      },
      shawdowProp:{
        shadowColor:'#171717',
        shadowOffset:{width:0, height:1},
        shadowOpacity:0.22,
        shadowRadius:2.22,
        elevation:3
      },
      Loginheading:{
        fontSize:24,
        fontWeight:"700",
        lineHeight:32.78,
        color:"#2B3513"

      },
      heading:{
      fontSize:14,
      fontWeight:'700',
      lineHeight:21.86,
      color:'rgba(0,0,34,0.41)',

      },
      add:{
        marginTop:12
      },
      forgotPassword:{
        color:'rgba(0,0,34,0.6)'
      },
      register:{
paddingHorizontal:30,
marginTop:10,
color:'rgba(0,0,34,0.6)'
      },
      registerText:{
        position:'relative',
        right:31,
        top:10,
        fontWeight:'700',
        color:'#2b3513'
      },
});

export default ForgetPassword;

