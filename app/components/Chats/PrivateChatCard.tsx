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
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "lightgray",
      }}
    >
      <Image
        source={{
          uri:
            item?.photo.toString() ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        }}
        style={{ width: 35, height: 35, borderRadius: 25 }}
      />

      <TouchableOpacity
        onPress={onPress}
        style={{
          marginLeft: 10,
          flex: 1,
          paddingVertical: 5,
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
            <Text>{item?.full_name}</Text>
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
            {/* {item?.time?.split(":")[0]} : {item.time.split(":")[1]} */}
          </Text>
        </View>
        <Text>{item?.message?.slice(0, 45)}...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrivateChatCard;

const styles = StyleSheet.create({});
