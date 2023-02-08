import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/color";

interface GeneralChatCardProps {
  img: string;
  name: string;
  message: string;
  time: string;
}

const GeneralChatCard = ({
  img,
  name,
  message,
  time,
}: GeneralChatCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: img }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 50,
          marginRight: 10,
          marginTop: 10,
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 16,
            color: COLORS.primary,
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
        <View style={styles.msessageContainer}>
          <Text>{message}</Text>
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
      </View>
    </View>
  );
};

export default GeneralChatCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  msessageContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "93%",
  },
});
