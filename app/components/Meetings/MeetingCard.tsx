import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Accept = () => {
  const [accepted, setAccepted] = React.useState(false);
  return (
    <TouchableOpacity
      style={styles.actionContainer}
      onPress={() => setAccepted(!accepted)}
    >
      <Ionicons
        name="md-checkmark"
        size={18}
        color={accepted ? "green" : "gray"}
      />
      <Text
        style={{
          fontSize: 12,
          color: accepted ? "green" : "gray",
          marginLeft: 5,
        }}
      >
        Accept
      </Text>
    </TouchableOpacity>
  );
};

const Appology = ({ onPress }: any) => {
  const [accepted, setAccepted] = React.useState(false);
  const handleOnPress = () => {
    onPress();
    console.log("Appology");
    setAccepted(!accepted);
  };
  return (
    <TouchableOpacity style={styles.actionContainer} onPress={handleOnPress}>
      <MaterialCommunityIcons
        name="hands-pray"
        size={18}
        color={accepted ? "green" : "gray"}
      />
      <Text
        style={{
          fontSize: 12,
          color: accepted ? "green" : "gray",
          marginLeft: 5,
        }}
      >
        Appology
      </Text>
    </TouchableOpacity>
  );
};

const Join = ({ onPress }: any) => {
  const [accepted, setAccepted] = React.useState(false);
  const handleOnPress = () => {
    onPress();
    console.log("Appology");
    setAccepted(!accepted);
  };
  return (
    <TouchableOpacity style={styles.actionContainer} onPress={handleOnPress}>
      <MaterialIcons
        name="connect-without-contact"
        size={18}
        color={accepted ? "green" : "gray"}
      />
      <Text
        style={{
          fontSize: 12,
          color: accepted ? "green" : "gray",
          marginLeft: 5,
        }}
      >
        Join
      </Text>
    </TouchableOpacity>
  );
};

const MeetingCard = ({ title, date, time, onPress }: any) => {
  return (
    <View
      style={{
        marginBottom: 12,
        padding: 10,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        borderRadius: 10,
        shadowColor: "#000",
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginBottom: 10,
            fontStyle: "italic",
          }}
        >
          {date} - {time}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Accept />
        <Appology />
        <Join />
      </View>
    </View>
  );
};

export default MeetingCard;

const styles = StyleSheet.create({
  container: {},
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
