import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/color";
import { Globalstyles } from "../../globals/styles";
import { images } from "../../assets/dummyData";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

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

const NewsCard = ({ item }: any) => {
  return (
    <View style={styles.newsCabinet}>
      <View style={styles.newsImageActionContainer}>
        <View style={styles.newsImageContainer}>
          <Image
            source={images.meeting_1}
            resizeMode="cover"
            style={{ width: "100%", height: 200 }}
          />
        </View>
        <View style={styles.reactionContainer}>
          <TouchableOpacity activeOpacity={0.6} style={styles.reaction}>
            <AntDesign name="message1" size={20} color="white" />
            <Text style={{ marginLeft: 5, color: "white", fontSize: 11 }}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.reaction}>
            <AntDesign name="heart" size={20} color="crimson" />
            <Text style={{ marginLeft: 5, color: "white", fontSize: 11 }}>
              5
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontSize: 18,
            marginVertical: 5,
            fontWeight: "700",
            color: COLORS.primary,
          }}
        >
          {item.title}
        </Text>
        <Text style={{ textAlign: "justify", color: COLORS.primary }}>
          {item.description.substring(0, 150)} ...
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{ color: COLORS.primary, fontWeight: "700" }}>
              Read More
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const NewsNav = () => {
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
          return <NewsCard key={item.id} item={item} />;
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
  newsCabinet: {
    marginVertical: 15,
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  newsImageActionContainer: {
    position: "relative",
  },
  reactionContainer: {
    position: "absolute",
    bottom: 0,
    right: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: 5,
  },
  newsImageContainer: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
});
