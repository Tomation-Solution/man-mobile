import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { TextInput } from "react-native-gesture-handler";

const SendBox = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        paddingHorizontal: 10,
      }}
    >
      <FontAwesome name="picture-o" size={20} color={COLORS.icon} />
      <TextInput
        placeholder="Type a message"
        multiline
        numberOfLines={2}
        style={{
          width: "80%",
          height: "80%",
          backgroundColor: COLORS.icon,
          borderRadius: 10,
          padding: 10,
        }}
      />
      <TouchableOpacity>
        <Ionicons name="send" size={20} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default SendBox;

const styles = StyleSheet.create({});
