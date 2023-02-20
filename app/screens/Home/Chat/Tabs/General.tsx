import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { messages } from "../../../../assets/dummyData/messages";
import GeneralChatCard from "../../../../components/Chats/GeneralChatCard";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../../../constants/color";
import Sender from "../../../../components/Chats/Sender";
import SendBox from "../../../../components/Chats/SendBox";

const General = () => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      <ScrollView
        style={{
          padding: 10,
          flex: 1,
          marginBottom: 50,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {messages.map((message) => (
            <GeneralChatCard
              key={message.id}
              img={message.profile_image}
              name={message.sender}
              message={message.message}
              time={message.date}
            />
          ))}

          {messages.map((message) => (
            <Sender
              key={message.id}
              img={message.profile_image}
              name={message.sender}
              message={message.message}
              time={message.date}
            />
          ))}
        </View>
      </ScrollView>

      <SendBox />
    </View>
  );
};

export default General;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.icon,
    padding: 10,
    borderRadius: 10,
  },
});
