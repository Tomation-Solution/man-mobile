import { Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/color";
import { Globalstyles } from "../../../globals/styles";
import { Ionicons } from "@expo/vector-icons";

interface AcceptedProps {
  onPress: any;
}

const Accepted = ({ onPress }: AcceptedProps) => {
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
        Meeting Accepted!
      </Text>
      <Text
        style={{
          marginVertical: 15,
          textAlign: "center",
          fontSize: 16,
        }}
      >
        This meeting has been added to your event list
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

      <View
        style={{
          flexDirection: "row",

          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Ionicons
          name="document-text-outline"
          size={24}
          color={COLORS.primary}
        />
        <Text
          onPress={onPress}
          style={{
            marginLeft: 10,
            color: COLORS.primary,
            fontWeight: "300",
            fontSize: 12,
          }}
        >
          Download Document attached to meeting
        </Text>
      </View>
    </View>
  );
};

export default Accepted;
