import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { ScrollView, TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../../../../constants/color";
import { Globalstyles } from "../../../../../globals/styles";

const { height, width } = Dimensions.get("window");

const Participants = ({
  handlePress,
  ticketCount,
  companyName,
  participant,
  setParticipants,
  setTicketCount,
  onPress,
}: any) => {
  return (
    <View style={Globalstyles.modalContainer}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        PARTICIPANTS INFORMATION
      </Text>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 20,
          paddingVertical: 5,
          borderBottomColor: COLORS.primary,
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: COLORS.primary,
            marginBottom: 5,
          }}
        >
          {companyName ? companyName : "Company Name"}
        </Text>
        <Text style={styles.smallText}>
          Kindly input the names and email address of every participant that you
          are about to pay for
        </Text>
      </View>

      <ScrollView
        style={{
          width: "100%",
          marginTop: 20,
          maxHeight: height * 0.5,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          {[...Array(ticketCount)].map((_, i) => (
            <View
              key={i}
              style={{
                width: "100%",
                alignItems: "flex-start",
                marginTop: 20,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: COLORS.icon,
                }}
              >
                Participant {i + 1}
              </Text>

              <TextInput
                style={{
                  width: "100%",
                  paddingVertical: 5,
                  borderBottomColor: COLORS.primary,
                  borderBottomWidth: 1,
                  marginTop: 10,
                }}
                placeholder="Name"
                placeholderTextColor={COLORS.icon}
                onChangeText={(text) => {
                  setParticipants((prev: any) => {
                    prev[i].name = text;
                    return [...prev];
                  });
                }}
              />
              <TextInput
                style={{
                  width: "100%",
                  paddingVertical: 5,
                  borderBottomColor: COLORS.primary,
                  borderBottomWidth: 1,
                  marginTop: 10,
                }}
                placeholder="Email"
                placeholderTextColor={COLORS.icon}
                onChangeText={(text) => {
                  setParticipants((prev: any) => {
                    prev[i].email = text;
                    return [...prev];
                  });
                }}
              />
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={{
            alignItems: "center",
            marginTop: 20,
            paddingVertical: 5,
          }}
          activeOpacity={0.8}
          onPress={() => {
            if (ticketCount < 10) {
              setTicketCount(ticketCount + 1);
              setParticipants((prev: any) => {
                prev.push({ name: "", email: "" });
                return [...prev];
              });
            }
          }}
        >
          <Text style={styles.smallText}>Click to Add Participants</Text>
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
              flex: 1,
            }}
            activeOpacity={0.8}
            onPress={() => handlePress({ section: "Company Details" })}
          >
            <Text
              style={{
                color: COLORS.primary,
                fontWeight: "500",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Back
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
            onPress={onPress}
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
        </View>
      </ScrollView>
    </View>
  );
};

export default Participants;

const styles = StyleSheet.create({
  smallText: {
    color: COLORS.primary,
    fontWeight: "300",
    fontSize: 13,
    textAlign: "center",
  },
});
