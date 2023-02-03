import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput ,Image,TouchableOpacity} from 'react-native';
import FormContainer from '../FormContainer';
import FormInput from '../../../components/Input/input2';
import FormSubmitButton from '../../../components/form/FormBtn';
import KeyboardAvoidingViewWrapper from '../../../components/form/KeyboardAvoidngwrapper'
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../../components';
import { Formik, Field } from 'formik'
import * as yup from 'yup'


const LoginForm = () => {

const Navigate =useNavigation()


  return (
<>




<KeyboardAvoidingViewWrapper>



<View style={{paddingVertical:130}}>
<View style={{paddingHorizontal:25,paddingVertical:10,
}} >
<Text style={styles.Loginheading}> Login</Text>
<Text style={styles.heading}> Input details to register as alumnus</Text>
</View>




    <FormContainer>

<View style={[styles.card,styles.shawdowProp]}>
<Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={values => console.log(values)}>

            {({ handleSubmit, isValid }) => (
              <>

         <Field    component={FormInput}    name="email" placeholder="email" />

              <Field    component={FormInput}    name="password" placeholder="password" />


                     <FormSubmitButton  style ={[styles.btn]}
                      onPress={()=>Navigate.navigate('Registration')}
                     title='Login'  />
                     </>
            )}
          </Formik>

            <TouchableOpacity
                  onPress={()=> Navigate.navigate('ForgotPassword')}   >
             <Text style={styles.forgotPassword}> Forgot password?</Text>
            </TouchableOpacity>

     <TouchableOpacity
     onPress={()=> Navigate.navigate('Registration')}
      style={{display:'flex',flexDirection:'row',}}>
<Text style={styles.register}> Don't have an account? </Text>
<Text style={styles.registerText}> Register</Text>
            </TouchableOpacity>
</View>
    </FormContainer>
    </View>
    </KeyboardAvoidingViewWrapper>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
    card:{

        backgroundColor:'#ffff',
        borderRadius:8,
        paddingVertical:38,
        paddingHorizontal:20,
        width:'100%',
        marginVertical:10,
        paddingBottom:25
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
      btn:{
        marginTop:15
      },
      forgotPassword:{
        color:'rgba(0,0,34,0.6)',
        paddingVertical:15

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

export default LoginForm;
