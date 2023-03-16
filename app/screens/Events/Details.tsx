import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Container, CustomModal, HomeHeader } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { ScrollView } from "react-native-gesture-handler";
import Register from "./components/Register/Register";
import { openExternalLink } from "../../utils/helperFunctions/openExternalLink";
import { registerEvents } from "../../store/slices/events/eventsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Accepted from "./components/Accepted";
import LoadingIndicator from "../../utils/LoadingIndicator";
import Rejected from "./components/Rejected";

const MeetingAction = ({
  onPress,
  text,
  loading,
}: {
  onPress: any;
  text: string;
  loading: boolean;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
        flex: 1,
        marginHorizontal: 5,
      }}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "500",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        {loading ? <ActivityIndicator size="small" color="white" /> : text}
      </Text>
    </TouchableOpacity>
  );
};

const Details = ({ route, navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalComp, setModalComp] = useState(null);
  const [modalContent, setModalContent] = useState("register");
  const altRoute = useRoute();
  const data = route?.params?.event || altRoute?.params || {};
  const { loading, registerEvent } = useAppSelector((state) => state.events);
  const dispatch = useAppDispatch();

  const onPress = () => {
    dispatch(registerEvents(data.id));
  };

  const handleRegister = () => {
    setModalContent("register");
    setModalVisible(true);
    dispatch(registerEvents(data.id));
  };

  const handleModal = (component: any) => {
    setModalComp(component);
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
        {modalComp}
      </CustomModal>

      {modalContent === "register" && (
        <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
          {loading ? (
            <LoadingIndicator />
          ) : registerEvent ? (
            <Accepted onPress={() => setModalVisible(false)} />
          ) : (
            <Rejected onPress={() => setModalVisible(false)} />
          )}
        </CustomModal>
      )}
      <HomeHeader
        navigation={navigation}
        title={"Event Details"}
        back={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          position: "relative",
          marginBottom: 120,
        }}
      >
        <View
          style={{
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: data.image ? data.image : undefined }}
            style={{ width: "100%", height: 300 }}
          />
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "300",
            marginTop: 3,
            marginLeft: 10,
          }}
        >
          {data.title}
        </Text>

        <View
          style={{
            marginTop: 15,
          }}
        >
          <View
            style={{
              borderTopColor: "#e0e0e0",
              borderTopWidth: 1,
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="calendar-outline" size={30} color="#000" />
              <View
                style={{
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "300",
                  }}
                >
                  {data.startDate}
                </Text>
                <Text>{data.startTime}</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Ionicons name="location" size={30} color="#000" />
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: "300",
                  alignContent: "flex-start",
                }}
              >
                {data.event_access.has_paid ? (
                  <TouchableOpacity
                    onPress={() => openExternalLink(data.event_access.link)}
                  >
                    <Text style={{ color: COLORS.primary }}>
                      {data.event_access.link}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  "Please pay to view"
                )}
              </Text>
            </View>
          </View>

          <View
            style={{
              borderTopColor: "#e0e0e0",
              borderTopWidth: 1,
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "300",
              }}
            >
              Organizer
            </Text>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Image
                  source={{
                    uri: data?.organiserImage
                      ? data?.organiserImage
                      : undefined,
                  }}
                  style={{ width: 70, height: 70, borderRadius: 100 }}
                />

                <View
                  style={{
                    marginLeft: 20,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 16,
                    }}
                  >
                    {data.organiser_name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 16,
                    }}
                  >
                    {}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "300",
                      fontSize: 16,
                    }}
                  >
                    {data.organiser_extra_info}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderTopColor: "#e0e0e0",
              borderTopWidth: 1,
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                color: COLORS.primary,
              }}
            >
              Details
            </Text>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "300",
                    fontSize: 16,
                    textAlign: "justify",
                  }}
                >
                  {data.event_extra_details}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              borderTopColor: "#e0e0e0",
              borderTopWidth: 1,
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderBottomColor: "#e0e0e0",
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "300",
              }}
            >
              Event Fee
            </Text>

            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              #{data.amount.split(".")[0]}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <MeetingAction
              onPress={() =>
                handleModal(<Register onPress={() => setModalVisible(false)} />)
              }
              text="Add Partcipants"
              loading={loading}
            />
          </View>
          {!data?.event_access?.has_paid && (
            <MeetingAction
              onPress={handleRegister}
              text="Register"
              loading={loading}
            />
          )}
        </View>
      </View>
    </Container>
  );
};

export default Details;

const styles = StyleSheet.create({});
