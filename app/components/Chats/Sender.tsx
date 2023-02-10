import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/color";

interface GeneralChatCardProps {
  img: string;
  name: string;
  message: string;
  time: string;
}

const Sender = ({ img, name, message, time }: GeneralChatCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.msessageContainer}>
        <Text
          style={{
            color: "white",
          }}
        >
          {message}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "grey",
            alignSelf: "flex-end",
            marginTop: 5,
          }}
        >
          {time.split(" ")[1].split(":")[0]} :{" "}
          {time.split(" ")[1].split(":")[1]}
        </Text>
      </View>
      <Image
        source={{ uri: img }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 50,
          marginLeft: 10,
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default Sender;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 10,
    alignSelf: "flex-end",
  },
  msessageContainer: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    width: "93%",
  },
});
