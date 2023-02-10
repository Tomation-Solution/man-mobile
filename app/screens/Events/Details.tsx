import {
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

const Details = ({ route, navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const altRoute = useRoute();
  const data = route?.params?.event || altRoute?.params || {};

  const onPress = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
        <Register onPress={onPress} />
      </CustomModal>
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
          <Image source={data.image} style={{ width: "100%", height: 300 }} />
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
                  {data.date}
                </Text>
                <Text>
                  {data.startTime} to {data.endTime}
                </Text>
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
                {data.location}
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
                  source={data.organizer.image}
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
                    {data.organizer.name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 16,
                    }}
                  >
                    {data.organizer.position}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "300",
                      fontSize: 16,
                    }}
                  >
                    {data.organizer.major}
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
                  {data.organizer.details}
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
              Free
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
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              padding: 10,
              borderRadius: 10,
              width: "100%",
              alignItems: "center",
              marginTop: 10,
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
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Details;

const styles = StyleSheet.create({});
