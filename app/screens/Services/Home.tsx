import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { HomeHeader } from "../../components";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants/metric";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }: any) => {
  return (
    <View>
      <HomeHeader title="Services" navigation={navigation} back={"back"} />
      <View>
        <TouchableOpacity
          style={{
            marginTop: verticalScale(80),
            alignItems: "center",
            flexDirection: "row",
            marginLeft: horizontalScale(10),
            borderWidth: moderateScale(1),
            borderRadius: moderateScale(10),
            padding: moderateScale(10),
          }}
          onPress={() => navigation.navigate("MembersService")}
        >
          <MaterialIcons name="people" size={45} color={COLORS.icon} />
          <Text
            style={{
              marginLeft: horizontalScale(20),
              fontWeight: "500",
              fontSize: moderateScale(16),
            }}
          >
            Members Service Request
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: verticalScale(30),
            alignItems: "center",
            flexDirection: "row",
            marginLeft: horizontalScale(10),
            borderWidth: moderateScale(1),
            borderRadius: moderateScale(10),
            padding: moderateScale(10),
          }}
          onPress={() => navigation.navigate("StaffsService")}
        >
          <MaterialIcons name="people" size={45} color={COLORS.icon} />
          <Text
            style={{
              marginLeft: horizontalScale(20),
              fontWeight: "500",
              fontSize: moderateScale(16),
            }}
          >
            Staff Service Request
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({

});
