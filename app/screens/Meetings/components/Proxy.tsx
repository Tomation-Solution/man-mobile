import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { registerEvents } from "../../../store/slices/events/eventsSlice";
import { Globalstyles } from "../../../globals/styles";
import { COLORS } from "../../../constants/color";

const { height, width } = Dimensions.get("window");

const Proxy = ({ event_id, onPress }: { event_id: number; onPress: any }) => {
  const [full_name, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");

  const { registerEvent } = useAppSelector((state) => state.events);

  const dispatch = useAppDispatch();

  const appointProxy = () => {
    const proxy_participants = {
      full_name,
      email,
    };

    console.log("proxy", proxy_participants);
    dispatch(registerEvents(event_id, proxy_participants));
  };

  return (
    <View style={Globalstyles.modalContainer}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        APPOINT A PROXY
      </Text>
      {registerEvent ? (
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: COLORS.primary,
          }}
        >
          Proxy Appointed Successfully
        </Text>
      ) : (
        <>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              marginTop: 20,
              paddingVertical: 5,
              borderBottomColor: COLORS.primary,
              borderBottomWidth: 1,
            }}
          >
            <Text style={styles.smallText}>
              This indicates that you wont be able to attend the meeting, and
              will be represented by a proxy with the following details.
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              marginTop: 20,
              maxHeight: height * 0.5,
            }}
          >
            <View
              style={{
                width: "100%",
                alignItems: "flex-start",
                marginTop: 20,
                paddingVertical: 5,
              }}
            >
              <TextInput
                style={{
                  width: "100%",
                  paddingVertical: 5,
                  borderBottomColor: COLORS.primary,
                  borderBottomWidth: 1,
                  marginTop: 10,
                }}
                placeholder="Fullname"
                placeholderTextColor={COLORS.icon}
                onChange={(e) => {
                  setFullname(e.nativeEvent.text);
                }}
              />

              <TextInput
                style={{
                  width: "100%",
                  paddingVertical: 5,
                  borderBottomColor: COLORS.primary,
                  borderBottomWidth: 1,
                  marginTop: 10,
                }}
                placeholder="Email"
                placeholderTextColor={COLORS.icon}
                onChange={(e) => {
                  setEmail(e.nativeEvent.text);
                }}
              />
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                padding: 10,
                borderRadius: 10,
                alignItems: "center",
                marginTop: 20,
              }}
              activeOpacity={0.8}
              onPress={appointProxy}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "500",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Appoint
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Proxy;

const styles = StyleSheet.create({
  smallText: {
    color: COLORS.primary,
    fontWeight: "300",
    fontSize: 13,
    textAlign: "center",
  },
});
