import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Globalstyles } from "../../../../../globals/styles";
import { COLORS } from "../../../../../constants/color";
import { verticalScale } from "../../../../../constants/metric";

const PaymentsForm = ({ onPress, paymentName, amount, handlePress }: any) => {
  const handleContinue = () => {
    handlePress({ section: "LetterSubmission" });
  };

  return (
    <View style={Globalstyles.modalContainer}>
      <Text style={{ textAlign: "center" }}>Payment of {paymentName}</Text>
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          alignItems: "center",
          marginTop: verticalScale(20),
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            fontWeight: "500",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Amount to pay : {amount}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          borderRadius: 10,
          alignItems: "center",
          marginLeft: 20,
        }}
        activeOpacity={0.8}
        //onPress={}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Pay
        </Text>
      </TouchableOpacity>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            borderColor: COLORS.primary,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
          onPress={onPress}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "500",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Close
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
            flex: 1,
            marginLeft: 20,
          }}
          activeOpacity={0.8}
          onPress={handleContinue}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentsForm;
const styles = StyleSheet.create({
  button: {
    marginTop: verticalScale(20),
    backgroundColor: COLORS.primary,
  },
});
