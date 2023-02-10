import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../../../../constants/color";
import { images } from "../../../../../assets/dummyData";
import { HomeHeader } from "../../../../../components";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const Details = ({ route, navigation, setShowTabBar }: any) => {
  const altRoute = useRoute();
  const data = route?.params?.message || altRoute?.params || {};

  console.log("data", data);

  const isFocused = useIsFocused();

  useEffect(() => {
    setShowTabBar(false);
    return () => {
      setShowTabBar(true);
    };
  }, [isFocused]);

  const SenderInfo = ({ name, image }: { name: string; image: string }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: image }}
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
            <SenderInfo name={data.sender} image={data.sender_image} />
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
      ></ScrollView>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({});
