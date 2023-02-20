import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../constants/metric";

const MembersCard = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headText}>{item.name}</Text>
          <Text style={styles.subText1}>Portfolio -{item.portfolio}</Text>
          <Text style={styles.subText2}>{item.position} </Text>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.subText3}>
          {item?.description.substring(0, 150)} ...
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{ fontWeight: "700" }}>Read More</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default MembersCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(15),
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: moderateScale(10),
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  imageContainer: {
    width: "50%",
    height: verticalScale(180),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginLeft: horizontalScale(15),
    marginTop: verticalScale(100),
  },
  headText: {
    fontWeight: "700",
    fontSize: moderateScale(18),
    lineHeight: moderateScale(25),
    marginVertical: horizontalScale(3),
  },

  subText1: {
    fontWeight: "500",
    fontSize: moderateScale(13),
    lineHeight: moderateScale(18),
    marginBottom: horizontalScale(3),
  },
  subText2: {
    fontWeight: "400",
    fontSize: moderateScale(12),
    lineHeight: moderateScale(16),
    marginBottom: horizontalScale(3),
    color: "#000000",
  },
  descriptionContainer: {
    padding: 10,
  },
  subText3: {
    textAlign: "justify",
  },
});
