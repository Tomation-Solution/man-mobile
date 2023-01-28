import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { images } from "../../assets/dummyData";
import { horizontalScale, verticalScale } from "../../constants/metric";
import { COLORS } from "../../constants/color";
import { SPACING } from "../../globals/styles";

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="ios-menu" size={32} />
      <Text style={{ fontSize: 16, fontWeight: "500" }}>
        Welcome, Tomiwa Ayandele
      </Text>

      <View>
        <View style={styles.imageContainer}>
          <Image
            source={images.man}
            style={{ width: verticalScale(30), height: horizontalScale(30) }}
          />
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <FontAwesome name="bell" color={COLORS.primary} size={20} />
        <View style={styles.redDot} />
      </View>
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
