import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
// import client from '../api/client';
// import { useLogin } from '../context/LoginProvider';
// import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import FormContainer from '../FormContainer';
import FormInput from '../../../components/Input/input2';
import FormSubmitButton from '../../../components/form/FormBtn';

const LoginForm = () => {
//   const { setIsLoggedIn, setProfile } = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

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
        label='Email'
        placeholder='example@email.com'
        autoCapitalize='none'
      />
      <FormInput
        // value={password}
        // onChangeText={value => handleOnChangeText(value, 'password')}
        label='Password'
        placeholder='********'
        autoCapitalize='none'
        secureTextEntry
      />
            <FormSubmitButton
            style ={[styles.add]}
            title='Login'

            />


</View>



    </FormContainer>
    </View>
  );
};

const styles = StyleSheet.create({

    card:{

        backgroundColor:'#f2ffff',
        borderRadius:8,
        paddingVertical:45,
        paddingHorizontal:25,
        width:'100%',
        marginVertical:10,
      },
      shawdowProp:{
        shadowColor:'#171717',
        // shadowOffset:{width:-2, height:4},
        shadowOpacity:0.2,
        shadowRadius:10,
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
      }
});

export default LoginForm;
