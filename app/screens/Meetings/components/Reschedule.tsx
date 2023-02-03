import { Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/color";

interface RescheduleProps {
  onPress: any;
}

const Reschedule = ({ onPress }: RescheduleProps) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        width: "80%",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        Thank You!
      </Text>
      <Text
        style={{
          marginVertical: 15,
          textAlign: "center",
          fontSize: 16,
        }}
      >
        Meeting Request reschedule has been requested. You will get a feedback
        soon.
      </Text>

      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          borderRadius: 10,
          width: "100%",
          alignItems: "center",
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
          Close
        </Text>
      </View>
    </View>
  );
};

export default Reschedule;
