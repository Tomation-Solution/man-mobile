import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput ,Image,TouchableOpacity} from 'react-native';
import FormContainer from '../FormContainer';
import FormInput from '../../../components/Input/input2';
import FormSubmitButton from '../../../components/form/FormBtn';
import KeyboardAvoidingViewWrapper from '../../../components/form/KeyboardAvoidngwrapper'
import { Container } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { Formik, Field } from 'formik'
import * as yup from 'yup'

const Registration = () => {

const Navigate = useNavigation()
  return (
<KeyboardAvoidingViewWrapper>
<View style={{paddingVertical:60}}>
<View style={{paddingHorizontal:25,paddingVertical:1,
}} >
<Text style={styles.Loginheading}> Registration</Text>
<Text style={styles.heading}> Input details to register as alumnus</Text>
</View>

    <FormContainer>
<View style={[styles.card,styles.shawdowProp]}>
<Formik
            initialValues={{
              fulname:'',
              email: '',
              username:'',
              password: '',
              phonenumbers:'',
              department:'',
              graduationyear:'',
              chapter:''



            }}
            onSubmit={values => console.log(values)}>

            {({ handleSubmit, isValid }) => (
              <>

         <Field    component={FormInput}    name="fullname" placeholder="Full name" />
              <Field    component={FormInput}    name="email" placeholder="Email address" />
              <Field    component={FormInput}    name="username" placeholder="Username" />
              <Field    component={FormInput}    name="password" placeholder="Password" />



              <View style={{display:'flex',flexDirection:'row', width:'100%',paddingVertical:21, }}>
  <View style={{width:'45%',flexDirection:'column',display:'flex', }}>
  <Field    component={FormInput}    name="phonenumber" placeholder="Phone number" />
              <Field    component={FormInput}    name="department" placeholder="Department" />
      </View>

      <View style={{width:'50%',marginLeft:15}} >
      <Field    component={FormInput}    name="graduationyear" placeholder="Graduation year" />
              <Field    component={FormInput}    name="chapter" placeholder="Chaper" />
      </View>
      </View>

      <FormSubmitButton
            style ={[styles.add]}
            title='Register'
            onPress={()=> Navigate.navigate('VerifyUser')}/>




</>
            )}
            </Formik>



      <TouchableOpacity
      onPress={()=> Navigate.navigate('Login')}
      style={{display:'flex',flexDirection:'row',}}>
<Text style={styles.register}> Already have an account? </Text>
<Text style={styles.login}> Login </Text>
            </TouchableOpacity>

</View>



    </FormContainer>
    </View>
    </KeyboardAvoidingViewWrapper>
  );
};

const styles = StyleSheet.create({

    card:{

        backgroundColor:'#ffff',
        borderRadius:8,
        paddingVertical:22,
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
      register:{
        paddingHorizontal:30,
        marginTop:10,
        color:'rgba(0,0,34,0.6)',
        fontSize:13
              },
              login:{
position:'relative',
right:31,
top:10,
fontWeight:'700',
color:'#2b3513',
fontSize:13,

              }
});

export default Registration;
