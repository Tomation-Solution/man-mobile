import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput ,Image,TouchableOpacity} from 'react-native';
// import client from '../api/client';
// import { useLogin } from '../context/LoginProvider';
// import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import FormContainer from '../FormContainer';
import FormInput from '../../../components/Input/input2';
import FormSubmitButton from '../../../components/form/FormBtn';
import KeyboardAvoidingViewWrapper from '../../../components/form/KeyboardAvoidngwrapper'
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../../components';




const LoginForm = () => {
//   const { setIsLoggedIn, setProfile } = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
const Navigate =useNavigation()
  const [error, setError] = useState('');

//   const { email, password } = userInfo;

//   const handleOnChangeText = (value, fieldName) => {
//     setUserInfo({ ...userInfo, [fieldName]: value });
//   };

//   const isValidForm = () => {
//     if (!isValidObjField(userInfo))
//       return updateError('Required all fields!', setError);

//     if (!isValidEmail(email)) return updateError('Invalid email!', setError);

//     if (!password.trim() || password.length < 8)
//       return updateError('Password is too short!', setError);

//     return true;
//   };

//   const submitForm = async () => {
//     if (isValidForm()) {
//       try {
//         const res = await client.post('/sign-in', { ...userInfo });

//         if (res.data.success) {
//           setUserInfo({ email: '', password: '' });
//           setProfile(res.data.user);
//           setIsLoggedIn(true);
//         }

//         console.log(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

  return (
<>

{/* <View style={{position:'absolute',}} >
<Image
style={{ position:'absolute', width:100,height:100,}}
source= {require('../../../assets/app/images/logo/Ellipse143.png')}/>
</View> */}


<KeyboardAvoidingViewWrapper>

<View style={{paddingVertical:130}}>
<View style={{paddingHorizontal:25,paddingVertical:10,
}} >
<Text style={styles.Loginheading}> Login</Text>
<Text style={styles.heading}> Input details to register as alumnus</Text>
</View>

    <FormContainer>
      {/* {error ? (
        <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>
          {error}
        </Text>
      ) : null} */}
<View style={[styles.card,styles.shawdowProp]}>
<FormInput
        // value={email}
        // onChangeText={value => handleOnChangeText(value, 'email')}
        label='Username'
        placeholder='username'
        autoCapitalize='none'
      />
      <FormInput
        // value={password}
        // onChangeText={value => handleOnChangeText(value, 'password')}
        label='Password'
        placeholder='password'
        autoCapitalize='none'
        secureTextEntry
      />
            <FormSubmitButton
            style ={[styles.add]}
            title='Login'

            />
            <TouchableOpacity
                  onPress={()=> Navigate.navigate('ForgotPassword')}

            >
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
        color:'rgba(0,0,34,0.6)',
        paddingVertical:7
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
