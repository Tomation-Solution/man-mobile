import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Globalstyles } from "../../globals/styles";
import { images } from "../../assets/dummyData";
import { horizontalScale } from "../../constants/metric";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";

const { sectionHeaderText, section } = Globalstyles;

const updatesData = [
  {
    key: Math.random().toString(),
    image: images.meeting_1,
  },
  {
    key: Math.random().toString(),
    image: images.meeting_2,
  },
  {
    key: Math.random().toString(),
    image: images.meeting_3,
  },
];

const { width, height } = Dimensions.get("window");

const LatestUpdatesNav = () => {
  // This is the component that renders the image
  const UpdateContainer = ({ item }: any) => {
    return (
      <View style={styles.updateContainerContainer}>
        <TouchableOpacity
          style={[styles.updateContainerNavButton, { left: 10 }]}
        >
          <Entypo name="chevron-thin-left" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <Image source={item.image} style={styles.updateContainerImage} />
        <TouchableOpacity
          style={[styles.updateContainerNavButton, { right: 10 }]}
        >
          <Entypo name="chevron-thin-right" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.container, section]}>
      <Text style={[sectionHeaderText]}>Latest Updates</Text>
      {/* Todo: fix scrolling  */}
      <FlatList
        data={updatesData}
        renderItem={UpdateContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default LatestUpdatesNav;

const styles = StyleSheet.create({
  container: {},
  updateContainerContainer: {
    width: width - horizontalScale(35),
    height: horizontalScale(200),
    borderRadius: 30,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: horizontalScale(10),
  },
  updateContainerImage: {
    width: "100%",
    height: "100%",
  },
  updateContainerNavButton: {
    position: "absolute",
    zIndex: 1,
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: "white",
  },
});
