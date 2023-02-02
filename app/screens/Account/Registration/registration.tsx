import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput ,Image,TouchableOpacity} from 'react-native';
// import client from '../api/client';
// import { useLogin } from '../context/LoginProvider';
// import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import FormContainer from '../FormContainer';
import FormInput from '../../../components/Input/input2';
import FormSubmitButton from '../../../components/form/FormBtn';
import KeyboardAvoidingViewWrapper from '../../../components/form/KeyboardAvoidngwrapper'
import { Container } from '../../../components';
import { useNavigation } from '@react-navigation/native';


const RegistrationForm = () => {
//   const { setIsLoggedIn, setProfile } = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
const Navigate = useNavigation()
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
<KeyboardAvoidingViewWrapper>
<View style={{paddingVertical:60}}>



<View style={{paddingHorizontal:25,paddingVertical:1,
}} >
<Text style={styles.Loginheading}> Registration</Text>
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

        placeholder='Fulname'
        autoCapitalize='none'
      />
      <FormInput
        // value={password}
        // onChangeText={value => handleOnChangeText(value, 'password')}
        // label='UserName'
        placeholder='Username'
        autoCapitalize='none'
        secureTextEntry
      />
            <FormInput
        // value={password}
        // onChangeText={value => handleOnChangeText(value, 'password')}
        // label='Password'
        placeholder='Password'
        autoCapitalize='none'
        secureTextEntry
      />

      <View style={{display:'flex',flexDirection:'row', width:'100%',paddingVertical:21, }}>
  <View style={{width:'45%',flexDirection:'column',display:'flex', }}>
   <FormInput
        // value={password}
        // onChangeText={value => handleOnChangeText(value, 'password')}
        // label='Phone Number'
        placeholder='Phone numbers'
        autoCapitalize='none'
        secureTextEntry
      />
            <FormInput
        // value={password}
        // onChangeText={value => handleOnChangeText(value, 'password')}
        // label='DEPARTMENT'
        placeholder='Department'
        autoCapitalize='none'
        secureTextEntry
      />
      </View>

      <View style={{width:'50%',marginLeft:15}} >
   <FormInput
        // value={password}
        // onChangeText={value => handleOnChangeText(value, 'password')}
        // label=' Graduation YEAR'
        placeholder='Graduation year'
        autoCapitalize='none'
        secureTextEntry
        />

            <FormInput
        // value={password}
        // onChangeText={value => handleOnChangeText(value, 'password')}
        // label='CHAPTER'
        placeholder='Chapter'
        autoCapitalize='none'
        secureTextEntry
      />
      </View>
      </View>

            <FormSubmitButton
            style ={[styles.add]}
            title='Register'
            onPress={()=> Navigate.navigate('VerifyUser')}


            />
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
        color:'rgba(0,0,34,0.6)'
              },
              login:{
position:'relative',
right:31,
top:10,
fontWeight:'700',
color:'#2b3513'
              }
});

export default RegistrationForm;
