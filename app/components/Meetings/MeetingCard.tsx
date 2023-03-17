import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Accept = ({ accept, accepted }: any) => {
  const handleAccept = () => {
    accept();
  };
  return (
    <TouchableOpacity style={styles.actionContainer} onPress={handleAccept}>
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

const Apology = ({ meeting_id, setMeetingId, apology }: any) => {
  const handleOnPress = () => {
    setMeetingId(() => meeting_id);
    console.log("Meeting Id", meeting_id);
    apology();
  };
  return (
    <TouchableOpacity style={styles.actionContainer} onPress={handleOnPress}>
      <MaterialCommunityIcons name="hands-pray" size={18} color={"gray"} />
      <Text
        style={{
          fontSize: 12,
          color: "gray",
          marginLeft: 5,
        }}
      >
        Apology
      </Text>
    </TouchableOpacity>
  );
};

const Join = ({}: any) => {
  const [accepted, setAccepted] = React.useState(false);
  const handleOnPress = () => {
    alert("Comming Soon!");
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

const MeetingCard = ({
  title,
  date,
  time,
  onPress,
  accept,
  accepted,
  apology,
  setMeetingId,
  meeting_id,
}: any) => {
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
        <Accept accept={accept} accepted={accepted} />
        <Apology
          apology={apology}
          setMeetingId={setMeetingId}
          meeting_id={meeting_id}
        />
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
