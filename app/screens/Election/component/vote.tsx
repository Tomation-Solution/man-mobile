import { Text, View,TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/color";
import { Globalstyles } from "../../../globals/styles";
import { Formbtn } from "../../../components";



interface RescheduleProps {
  onPress: any;
}

const Reschedule = ({ onPress }: RescheduleProps) => {
  return (
    <View style={Globalstyles.modalContainer}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        Vote
      </Text>
      <Text
        style={{
          marginVertical: 15,
          textAlign: "center",
          fontSize: 16,
        }}
      >
        Please confirm that you are willing vote for Mr. kunle
        kenny for the postion President of Man
      </Text>



<View style={{display:'flex',flexDirection:'row'}}>
<Text
        style={{
          marginVertical: 15,
          textAlign: "center",
          fontSize: 17,
          fontWeight:'900'
        }}
      >
        Note:
      </Text>
      <Text
        style={{
          marginVertical: 15,
          textAlign: "center",
          fontSize: 16,
        }}
      >
        you can only vote once for this position
      </Text>
</View>


<View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
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
        Yes
        </Text>
      </TouchableOpacity>
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
        No
        </Text>
      </TouchableOpacity>
</View>
    </View>
  );
};

export default Reschedule;
