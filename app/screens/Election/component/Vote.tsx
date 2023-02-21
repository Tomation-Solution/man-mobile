import { Text, View,TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/color";
import { Globalstyles } from "../../../globals/styles";
import { Formbtn } from "../../../components";



interface VoteProps {
  onPress: any;
}

const Vote = ({ onPress }: VoteProps) => {
  return (
    <View style={Globalstyles.modalContainer}>
      <View style={{display:'flex'}}>
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
          textAlign: "justify",
          fontSize: 15,
          paddingVertical:6

        }}
      >
        Please confirm that you are willing vote for Mr. kunle
        kenny for the postion President of Man
      </Text>



<View style={{display:'flex',flexDirection:'row', }}>
<Text
        style={{
          textAlign: "justify",
          fontSize: 16,
          fontWeight:'900',
          paddingVertical:6,
          marginVertical:1

        }}
      >
        Note:
      </Text>
      <Text
        style={{
          // marginVertical: 13,
          textAlign: "justify",
          fontSize: 13,
          marginLeft:5
        }}
      >
        you can only vote once for this position
      </Text>
</View>


<View style={{display:'flex',flexDirection:'row',justifyContent:'space-around', paddingVertical:10
}}>
<TouchableOpacity
      onPress={onPress}
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          borderRadius: 10,
          width: "40%",
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
          // backgroundColor: COLORS.primary,
          padding: 10,
          borderRadius: 10,
          width: "40%",
          alignItems: "center",
          borderColor: COLORS.primary,
          borderWidth:2
        }}
      >

        <Text

          style={{
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
    </View>
  );
};

export default Vote;
