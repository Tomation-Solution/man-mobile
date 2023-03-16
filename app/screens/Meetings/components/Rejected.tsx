import { Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/color";
import { Globalstyles } from "../../../globals/styles";
import { useAppSelector } from "../../../store/hooks";

interface AcceptedProps {
  onPress: any;
}

const Rejected = ({ onPress }: AcceptedProps) => {
  const { message } = useAppSelector((state) => state.meetings);
  return (
    <View
      style={[
        Globalstyles.modalContainer,
        {
          padding: 40,
        },
      ]}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        Hey!
      </Text>
      <Text
        style={{
          marginVertical: 15,
          textAlign: "center",
          fontSize: 16,
        }}
      >
        {message}
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
          Back
        </Text>
      </View>
    </View>
  );
};

export default Rejected;
