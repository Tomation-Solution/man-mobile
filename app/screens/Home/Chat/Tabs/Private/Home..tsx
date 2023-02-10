import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { privateMessages } from "../../../../../assets/dummyData/privateMessages";
import { SearchBar } from "../../../../../components";
import PrivateChatCard from "../../../../../components/Chats/PrivateChatCard";
import { COLORS } from "../../../../../constants/color";
import { useIsFocused } from "@react-navigation/native";

const Home = ({ navigation, setShowTabBar }: any) => {
  return (
    <View style={{}}>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <SearchBar />
      </View>
      <ScrollView
        style={{
          padding: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            height: "100%",
          }}
        >
          {privateMessages.map((message) => (
            <PrivateChatCard
              key={message.id}
              item={message}
              onPress={() => navigation.navigate("Details", { message })}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.icon,
    padding: 10,
    borderRadius: 10,
  },
});
