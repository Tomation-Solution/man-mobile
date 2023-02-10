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
        Acount Locked!
      </Text>
      <Text
        style={{
          marginVertical: 15,
          textAlign: "center",
          fontSize: 16,
        }}
      >
        Pay outstanding fee to gain access to  account
      </Text>

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
        pay
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reschedule;
