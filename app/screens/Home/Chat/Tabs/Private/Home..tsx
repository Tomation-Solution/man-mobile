import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import { SearchBar } from "../../../../../components";
import PrivateChatCard from "../../../../../components/Chats/PrivateChatCard";
import { COLORS } from "../../../../../constants/color";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { getMembers } from "../../../../../store/slices/extras/members";
import LoadingIndicator from "../../../../../utils/LoadingIndicator";
import { retrieveUserDetails } from "../../../../../utils/helperFunctions/userDataHandlers";
import { clearChat } from "../../../../../store/slices/chat/chat";

const Home = ({ navigation, setShowTabBar, userData }: any) => {
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
      >
        <SearchBar />
      </View>
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
