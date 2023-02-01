import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/color";
import { Globalstyles } from "../../globals/styles";
import { images } from "../../assets/dummyData";
import { ScrollView } from "react-native-gesture-handler";
import NewsCard from "./NewsCard";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    image: images.meeting_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    image: images.meeting_2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet.",
    image: images.meeting_3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet.",
    image: images.meeting_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet.",
    image: images.meeting_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
  },
];

const NewsNav = ({ navigation }: any) => {
  return (
    <View style={Globalstyles.section}>
      <View style={styles.newsNavHeader}>
        <Text style={[Globalstyles.sectionHeaderText, { color: "white" }]}>
          News
        </Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={{ color: "white", fontSize: 16 }}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item) => {
          return (
            <NewsCard
              key={item.id}
              item={item}
              onPress={() =>
                navigation.navigate("News", {
                  screen: "Details",
                  params: item,
                })
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default NewsNav;

const styles = StyleSheet.create({
  newsNavHeader: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
