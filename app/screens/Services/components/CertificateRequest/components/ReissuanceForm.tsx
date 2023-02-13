import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../../../../constants/color";
import { Globalstyles } from "../../../../../globals/styles";

const ReissuanceForm = ({ handlePress, setDetails, onPress }: any) => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [details, set_Details] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleContinue = () => {
    if (details.name.length >= 3) {
      if (details.email.length >= 3) {
        if (details.phone.length >= 3) {
          setDetails({ ...details });
          handlePress({ section: "Payment Form" });
        } else {
          setErrors({
            ...errors,
            phone: "Please enter a valid phone number",
          });
        }
      } else {
        setErrors({
          ...errors,
          email: "Please enter a valid email address",
        });
      }
    } else {
      setErrors({
        ...errors,
        name: "Please enter a valid name",
      });
    }
  };

  return (
    <View style={Globalstyles.modalContainer}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        REISSUANCE FORM
      </Text>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TextInput
          style={styles.textInput}
          placeholder="FULL NAME"
          value={details.name}
          onChangeText={(text) => {
            set_Details({ ...details, name: text });
            setErrors({ ...errors, name: "" });
          }}
        />
        {errors.name.length > 0 && (
          <Text style={styles.textError}>{errors.name}</Text>
        )}
        <TextInput
          style={styles.textInput}
          placeholder="EMAIL ADDRESS"
          value={details.email}
          onChangeText={(text) => {
            set_Details({ ...details, email: text });
            setErrors({ ...errors, email: "" });
          }}
        />
        {errors.email.length > 0 && (
          <Text style={styles.textError}>{errors.email}</Text>
        )}
        <TextInput
          style={styles.textInput}
          placeholder="PHONE NUMBER"
          value={details.phone}
          onChangeText={(text) => {
            set_Details({ ...details, phone: text });
            setErrors({ ...errors, phone: "" });
          }}
        />
        {errors.phone.length > 0 && (
          <Text style={styles.textError}>{errors.phone}</Text>
        )}
      </View>
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
            flex: 1,
          }}
          activeOpacity={0.8}
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

export default ReissuanceForm;
const styles = StyleSheet.create({
  container: {},
  textInput: {
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
  },
  textActive: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    color: COLORS.primary,
  },

  textAction: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    color: COLORS.primary,
  },
  textError: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    color: "crimson",
  },
});
