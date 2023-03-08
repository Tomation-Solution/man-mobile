import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../../../constants/color";
import SendBox from "../../../../components/Chats/SendBox";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { retrieveUserDetails } from "../../../../utils/helperFunctions/userDataHandlers";
import {
  addChat,
  clearChat,
  getChat,
} from "../../../../store/slices/chat/chat";
import { SHORT_NAME } from "../../../../utils/ENV/envs";
import { useIsFocused } from "@react-navigation/native";
import { EnvironmentContext } from "../../../../navigation/DrawerNav";

const General = ({ navigation, environment }: any) => {
  const [web_socket, setWeb_socket] = React.useState<any>(null);
  const [userData, setUserData] = React.useState<any>(null);
  const [text, setText] = React.useState("");
  const [endPoint, setEndPoint] = React.useState<any>("genral");

  const isFocused = useIsFocused();

  const { loading, chat } = useAppSelector((state) => state.chat);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (environment.environment && environment.id) {
      setEndPoint(`${environment.id}commitee`);
    } else {
      setEndPoint("general");
    }
  }, [environment]);

  useEffect(() => {
    dispatch(clearChat());
    retrieveUserDetails().then((data: any) => {
      setUserData(data);
    });
  }, [navigation, isFocused]);

  useEffect(() => {
    console.log("in general");
    if (userData) {
      dispatch(getChat(`chat/?room_name=${endPoint}`));

      var ws = new WebSocket(
        environment.id && environment.environment
          ? `ws://rel8backend.herokuapp.com/ws/commitee_chat/${SHORT_NAME}/${environment.id}/`
          : `wss://rel8backend-production.up.railway.app/ws/chat/${SHORT_NAME}/general/`
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
  }, [navigation, isFocused, userData]);

  const sendMessage = () => {
    if (!text) {
      return;
    }
    setText("");
    // web_socket
    const data = {
      message: text,
      send_user_id: userData?.user_id,
      is_group: true,
    };

    try {
      web_socket.send(JSON.stringify(data));
    } catch (e) {
      console.log("catch", e);
    }

    web_socket.onmessage = (e: any) => {
      // a message was received
      const response = JSON.parse(e.data);
      console.log("response", response);

      dispatch(
        addChat({
          user__id: response.send_user_id,
          message: response.message,
          full_name: response.full_name,
        })
      );
      // inputRef.current.clear()
    };
  };

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: COLORS.icon,
        }}
      >
        {chat
          ?.slice()
          .reverse()
          ?.map((item: any, index: number) => (
            <View
              key={index}
              style={{
                margin: 10,
                alignSelf:
                  item.user__id === userData?.user_id
                    ? "flex-end"
                    : "flex-start",
              }}
            >
              {item.full_name && (
                <View>
                  <Text style={{ color: "black", fontSize: 10 }}>
                    {item.full_name}
                  </Text>
                </View>
              )}
              <View
                style={{
                  padding: 10,
                  backgroundColor:
                    item.user__id === userData?.user_id
                      ? COLORS.primary
                      : "black",

                  borderBottomEndRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderTopLeftRadius:
                    item.user__id === userData?.user_id ? 10 : 0,
                  borderTopRightRadius:
                    item.user__id === userData?.user_id ? 0 : 10,
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
            </View>
          ))}
      </ScrollView>
      <SendBox
        disabled={text.length === 0}
        value={text}
        onSubmit={sendMessage}
        setText={setText}
      />
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
