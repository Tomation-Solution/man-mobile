import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { ThemedTextInputV2 } from '../../../components/Input/Input';

function Login() {
  return (
<View style={styles.containter} >


<View style={{ }}>

<Text style={styles.Loginheading}> Login</Text>
<Text style={styles.heading}> Input details to register as alumnus </Text>
</View>

<View style={[styles.card,styles.shawdowProp]}>
<View style={{flex:0.2}}>
  <Text> USERNAME</Text>
<ThemedTextInputV2
placeholder='Username'
style={[styles.input]}
/>

</View>

<View >
  <Text> PASSWORD</Text>
<ThemedTextInputV2
placeholder='Password'
style={[styles.input]}
/>
</View>
</View>

 </View>
  )
}
const styles = StyleSheet.create({
containter:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    display:'flex'

},
Loginheading:{
  fontSize:24,
  fontWeight:"700",
  lineHeight:32.78,

},
heading:{
fontSize:16,
fontWeight:'700',
lineHeight:21.86,
color:'#000022',

},
card:{
  flex:0.9,
  backgroundColor:'white',
  borderRadius:8,
  paddingVertical:45,
  paddingHorizontal:25,
  width:'100%',
  marginVertical:10,
},
shawdowProp:{
  shadowColor:'#171717',
  shadowOffset:{width:-2, height:4},
  shadowOpacity:0.2,
  shadowRadius:3,
},
input:{
  borderBottomColor:'#9DA292',
  borderBottomWidth:1,
  width:305,
  height:53,
}

});


export default Login;
