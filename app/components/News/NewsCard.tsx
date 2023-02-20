import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants/color";
import { AntDesign } from "@expo/vector-icons";

interface NewsCardProps {
  item: any;
  onPress: () => void;
}

const { width } = Dimensions.get("window");

const NewsCard = ({ item, onPress }: NewsCardProps) => {
  return (
    <View style={styles.newsCabinet}>
      <View style={styles.newsImageActionContainer}>
        <View style={styles.newsImageContainer}>
          <Image
            source={{ uri: item?.image ? item.image.toString() : undefined }}
            resizeMode="cover"
            style={{ width: "100%", height: 200 }}
          />
        </View>
        <View style={styles.reactionContainer}>
          <TouchableOpacity activeOpacity={0.6} style={styles.reaction}>
            <AntDesign name="message1" size={20} color="black" />
            <Text style={{ marginLeft: 5, color: "white", fontSize: 11 }}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.reaction}>
            {item.has_reacted ? (
              <AntDesign name="heart" size={20} color={"crimson"} />
            ) : (
              <AntDesign name="hearto" size={20} color={"black"} />
            )}
            <Text style={{ marginLeft: 5, color: "white", fontSize: 11 }}>
              {item.likes}
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
          {item?.name}
        </Text>
        <Text style={{ textAlign: "justify", color: COLORS.primary }}>
          {item?.body?.substring(0, 150)} ...
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <Text style={{ color: COLORS.primary, fontWeight: "700" }}>
              Read More
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};
export default NewsCard;

const styles = StyleSheet.create({
  newsCabinet: {
    width: "100%",
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
