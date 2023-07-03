import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";

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

  const filteredMembers = membersList?.data?.filter(
    (user: any) => user.user !== userData.user_id
  );

  useLayoutEffect(() => {
    dispatch(getMembers());
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {userData && (
        <FlatList
          data={membersList?.data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PrivateChatCard
              key={item.id}
              item={item}
              onPress={() => {
                dispatch(clearChat());
                navigation.navigate("Details", { message: item });
              }}
            />
          )}
        />
      )}
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
