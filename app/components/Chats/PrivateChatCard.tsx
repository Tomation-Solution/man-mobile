import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const PrivateChatCard = ({ item, onPress }: any) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: item.sender_image }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
      <TouchableOpacity
        onPress={onPress}
        style={{
          marginLeft: 10,
          flex: 1,
          paddingVertical: 20,
          borderBottomWidth: 1,
          borderBottomColor: "lightgray",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>{item.sender}</Text>
            {item.read !== true && (
              <Text
                style={{
                  backgroundColor: "red",
                  height: 7,
                  width: 7,
                  borderRadius: 10,
                  marginLeft: 5,
                }}
              />
            )}
          </View>
          <Text
            style={{
              fontSize: 10,
              color: "gray",
              position: "absolute",
              right: 0,
            }}
          >
            {item.time.split(":")[0]} : {item.time.split(":")[1]}
          </Text>
        </View>
        <Text>{item.message.slice(0, 45)}...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrivateChatCard;

const styles = StyleSheet.create({});
