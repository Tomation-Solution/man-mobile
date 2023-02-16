import { Text, View,TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/color";
import { Globalstyles } from "../../../globals/styles";
import { Formbtn } from "../../../components";
import {Octicons} from '@expo/vector-icons'



interface OnConfirmStatusProps {
  onPress: any;
}

const OnConfirmStatus = ({ onPress }: OnConfirmStatusProps) => {
  return (
    <View style={Globalstyles.modalContainer}>
<View>
<Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          textAlign:"center"
        }}
      >
     Confirm Status
      </Text>
      <Text
        style={{
          fontSize: 20,fontWeight: "500", }}
      >
            (Voter Accreditation)

      </Text>
</View>



<View>
<Text
        style={{
          marginVertical: 15,
          textAlign: "justify",
          fontSize: 15,
        }}
      >
        Please confirm that you are a financial member by uploading
        your latest due payment reciept to be eligble to vote
      </Text>
       <Octicons
       style={{
                  marginHorizontal:60,
                  textAlign:'center',
                  marginVertical: 15,
                  borderStyle:'dashed',
                  borderWidth:1,
                  paddingHorizontal:32

      }}
        name="upload"
         size={30}
         color='black'
         />
</View>
      <TouchableOpacity
      onPress={onPress}
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          borderRadius: 10,
          width: "50%",
          alignItems: "center",
        }}
      >

        <Text

          style={{
            color: "white",
            fontWeight: "500",
            width: "100%",
            textAlign: "center",
          }}
        >
        Upload
        </Text>
      </TouchableOpacity>

      <Text style={{}}> Download Reciept</Text>
    </View>
  );
};

export default OnConfirmStatus;
