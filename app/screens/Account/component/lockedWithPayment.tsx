import { Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/color";
import { Globalstyles } from "../../../globals/styles";
import { FormInput } from "../../../components";
import { Formik, Field } from 'formik'

interface RescheduleProps {
  onPress: any;
}

const Reschedule = ({ onPress }: RescheduleProps) => {

  return (
    <>
    <View style={Globalstyles.modalContainer}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        Acount Locked!
      </Text>
<View style={{display:'flex', flexDirection:'column',}}>
<View style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
  <Text> TOTAL OUTSTANDING </Text>
  <Text style={{fontWeight:'700'}}>  25,000,00 </Text>
</View>
<Text style={{ fontSize:12,fontWeight:'400'}}> pay partial amount of Total outstanding</Text>


</View>
<Formik  initialValues={{  amount: '',}} onSubmit={values => console.log(values)}>
            {({ handleSubmit, isValid }) => (
        <>
         <Field    component={FormInput}    name="amount" placeholder="Amount" />
       </>
            )}
</Formik>



      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          borderRadius: 10,
          width: "50%",
          alignItems: "center",
          marginTop:20
        }}
      >
        <Text
          onPress={onPress}
          style={{
            color: "white",
            fontWeight: "500",

            width: "100%",
            textAlign: "center",
          }}
        >
        pay
        </Text>
      </View>
    </View>
    </>
  );
};

export default Reschedule;
