import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { images } from "../../assets/dummyData";
import { horizontalScale, verticalScale } from "../../constants/metric";
import { COLORS } from "../../constants/color";
import { SPACING } from "../../globals/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  navigation?: any;
  title?: any;
  back?: any;
  isTitleComponent?: any;
}
const HomeHeader = ({ navigation, title, back, isTitleComponent }: Props) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          back ? back() : navigation.openDrawer();
        }}
      >
        <Ionicons
          name={back ? "chevron-back" : "menu"}
          color={COLORS.primary}
          size={30}
        />
      </TouchableOpacity>

      {isTitleComponent ? (
        isTitleComponent
      ) : title ? (
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      ) : (
        <>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Welcome, Tomiwa Ayandele
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <View style={styles.imageContainer}>
              <Image
                source={images.man}
                style={{
                  width: verticalScale(30),
                  height: horizontalScale(30),
                }}
              />
            </View>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate("Notification")}
        style={styles.notificationContainer}
      >
        <FontAwesome name="bell" color={COLORS.primary} size={20} />
        <View style={styles.redDot} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SPACING.sectionPadding,
  },
  imageContainer: {
    height: horizontalScale(30),
    width: verticalScale(30),
    borderRadius: 100,
    overflow: "hidden",
  },
  notificationContainer: {
    position: "relative",
  },
  redDot: {
    width: verticalScale(8),
    height: horizontalScale(8),
    backgroundColor: "crimson",
    borderRadius: 10,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
