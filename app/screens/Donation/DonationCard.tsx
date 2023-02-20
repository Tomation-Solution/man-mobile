import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants/color";
import { AntDesign } from "@expo/vector-icons";

interface DonationCardProps {
  item: any;
  onPress: () => void;
}

const DonationCard = ({ item, onPress }: DonationCardProps) => {
  return (
    <View style={styles.newsCabinet}>
      <View style={styles.newsImageActionContainer}>
        <View style={styles.newsImageContainer}>
          <Image
            source={item.image}
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
          {item?.description.substring(0, 150)} ...
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
export default DonationCard;

const styles = StyleSheet.create({
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
