import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  ComfirmationInput,
  Formbtn,
  AccountHeader,
  FormContainer,
  Container,
} from "../../../components";
import { COLORS } from "../../../constants/color";

const VerifyUser = ({ navigation }: any) => {
  return (
    <>
      <Container>
        <View style={{ paddingVertical: 100 }}>
          <View
            style={{
              paddingHorizontal: 3,
              paddingVertical: 10,
            }}
          >
            <AccountHeader
              title=" Code "
              text={"Enter 4 digit code recieved to proceed"}
            />
          </View>
          <View style={[styles.card, styles.shawdowProp]}>
            <ComfirmationInput />

            <Formbtn
              style={[styles.btn]}
              title="Continue"
              onPress={() => navigation.navigate("ChangePassword")}
            />
          </View>
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffff",
    borderRadius: 8,
    paddingVertical: 38,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
  shawdowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  Loginheading: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32.78,
    color: COLORS.primary,
  },
  heading: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21.86,
    color: "rgba(0,0,34,0.41)",
  },
  btn: {
    marginVertical: 30,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },

  forgotPassword: {
    color: "rgba(0,0,34,0.6)",
  },
  register: {
    paddingHorizontal: 30,
    marginTop: 10,
    color: "rgba(0,0,34,0.6)",
  },
  registerText: {
    position: "relative",
    right: 31,
    top: 10,
    fontWeight: "700",
    color: COLORS.primary,
  },
});

export default VerifyUser;
