import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import PrivateChatCard from "../../../../../components/Chats/PrivateChatCard";
import { COLORS } from "../../../../../constants/color";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { getMembers } from "../../../../../store/slices/extras/members";
import LoadingIndicator from "../../../../../utils/LoadingIndicator";
import { clearChat } from "../../../../../store/slices/chat/chat";

const Home = ({ navigation, userData }: any) => {
  const dispatch = useAppDispatch();
  const { membersList, loading } = useAppSelector(
    (state) => state.extras.members
  );

  useEffect(() => {
    dispatch(getMembers());
  }, []);

  return (
    <View style={{}}>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      ></View>
      <ScrollView
        style={{
          padding: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        {loading ? (
          <LoadingIndicator />
        ) : (
          <View
            style={{
              flex: 1,
              height: "100%",
            }}
          >
            {userData &&
              membersList?.data
                ?.filter((user: any) => user.user !== userData.user_id)
                .map((message: any) => (
                  <PrivateChatCard
                    key={message.id}
                    item={message}
                    onPress={() => {
                      dispatch(clearChat());
                      navigation.navigate("Details", { message });
                    }}
                  />
                ))}
          </View>
        )}
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
