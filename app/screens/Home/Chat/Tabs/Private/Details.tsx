import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../../../../constants/color";
import { HomeHeader } from "../../../../../components";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { addChat, getChat } from "../../../../../store/slices/chat/chat";
import SendBox from "../../../../../components/Chats/SendBox";
import LoadingIndicator from "../../../../../utils/LoadingIndicator";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const SenderInfo = ({ name, image }: { name: string; image: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: image || undefined }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          marginRight: 10,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: COLORS.primary,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const Details = ({ route, navigation, setShowTabBar, userData }: any) => {
  const altRoute = useRoute();
  const data = route?.params?.message || altRoute?.params || {};
  const [web_socket, setWeb_socket] = React.useState<any>(null);
  const [text, setText] = React.useState("");
  const { loading, chat } = useAppSelector((state) => state.chat);
  const [messages, setMessages] = React.useState<any>([]);

  const dispatch = useAppDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    setShowTabBar(false);
    console.log("isFocused", userData?.user_id, data.user);
    return () => {
      setShowTabBar(true);
    };
  }, [isFocused]);

  useEffect(() => {
    if (data) {
      const room_name =
        userData?.user_id > data.user
          ? `${userData?.user_id}and${data.user}`
          : `${data.user}and${userData?.user_id}`;

      dispatch(getChat(`chat/?room_name=${room_name}`));
      setMessages(chat.data);

      var ws = new WebSocket(
        `wss://web-production-d5b0.up.railway.app/ws/chat/testing_org/${room_name}/`
      );
      setWeb_socket(ws);
      ws.onopen = (e) => {
        // connection opened
        console.log("connecting", e);
      };

      ws.onclose = (e) => {
        console.log("err", e);
      };
    }
  }, [navigation]);

  const sendMessage = () => {
    if (!text) {
      return;
    }
    setText("");
    // web_socket
    const data = {
      message: text,
      send_user_id: userData?.user_id,
      is_group: false,
    };

    try {
      web_socket.send(JSON.stringify(data));
    } catch (e) {
      console.log("catch", e);
    }

    web_socket.onmessage = (e: any) => {
      // a message was received
      const response = JSON.parse(e.data);
      dispatch(
        addChat({
          user__id: response.send_user_id,
          message: response.message,
        })
      );
      // inputRef.current.clear()
    };
  };

  return (
    <>
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <HomeHeader
          navigation={navigation}
          isTitleComponent={
            <SenderInfo name={data.full_name} image={data?.photo.toString()} />
          }
          back={() => navigation.goBack()}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: COLORS.icon,
        }}
      >
        {chat?.map((item: any, index: number) => (
          <View
            key={index}
            style={{
              padding: 10,
              backgroundColor:
                item.user__id === userData?.user_id ? COLORS.primary : "black",
              margin: 10,
              borderRadius: 10,
              alignSelf:
                item.user__id === userData?.user_id ? "flex-end" : "flex-start",
            }}
          >
            <Text
              style={{
                color: COLORS.icon,
              }}
            >
              {item.message}
            </Text>
          </View>
        ))}
      </ScrollView>
      <SendBox
        disabled={text.length === 0}
        value={text}
        onSubmit={sendMessage}
        setText={setText}
      />
    </>
  );
};

export default Details;

const styles = StyleSheet.create({});
