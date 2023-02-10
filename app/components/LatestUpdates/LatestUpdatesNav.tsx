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
    key: "1",
    image: images.meeting_1,
  },
  {
    key: "2",
    image: images.meeting_2,
  },
  {
    key: "3",
    image: images.meeting_3,
  },
];

const { width, height } = Dimensions.get("window");

const UpdateContainer = ({ item }: any) => {
  return (
    <View style={styles.updateContainerContainer}>
      <TouchableOpacity style={[styles.updateContainerNavButton, { left: 10 }]}>
        <Entypo name="chevron-thin-left" size={24} color={COLORS.primary} />
      </TouchableOpacity>
      <Image
        // resizeMode="contain"
        source={item.image}
        style={styles.updateContainerImage}
      />
      <TouchableOpacity
        style={[styles.updateContainerNavButton, { right: 10 }]}
      >
        <Entypo name="chevron-thin-right" size={24} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

const LatestUpdatesNav = () => {
  return (
    <View style={[styles.container, section]}>
      <Text style={[sectionHeaderText]}>Latest Updates</Text>
      <ScrollView
        pagingEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {updatesData.map((item, index) => (
          <UpdateContainer key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default LatestUpdatesNav;

const styles = StyleSheet.create({
  container: {},
  updateContainerContainer: {
    borderRadius: 30,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: horizontalScale(10),
    width: width * 0.9,
    height: horizontalScale(200),
    marginHorizontal: horizontalScale(1),
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
