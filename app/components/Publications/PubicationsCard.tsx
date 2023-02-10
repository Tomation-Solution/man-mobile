import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants/color";
import { images } from "../../assets/dummyData";
import { AntDesign } from "@expo/vector-icons";

interface PublicationCardProps {
  item: any;
  onPress: () => void;
}

const { width } = Dimensions.get("window");

const PublicationsCard = ({ item, onPress }: PublicationCardProps) => {
  return (
    <View style={styles.publicationsCabinet}>
      <View style={styles.publicationsImageActionContainer}>
        <View style={styles.publicationsImageContainer}>
          <Image
            source={images?.meeting_1}
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
              5ss
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
export default PublicationsCard;

const styles = StyleSheet.create({
  publicationsCabinet: {
    marginVertical: 15,
    shadowColor: "black",
    backgroundColor: "white",
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  publicationsImageActionContainer: {
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
  publicationsImageContainer: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
});
