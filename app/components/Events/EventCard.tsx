import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { appImages } from "../../assets/app/images";
import { COLORS } from "../../constants/color";

const { width } = Dimensions.get("window");

interface EventCardProps {
  title: string;
  image: string;
  date: string;
  time: string;
  onPress: () => void;
}

const EventCard = ({ title, image, date, time, onPress }: EventCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        marginBottom: 20,
      }}
    >
      <View
        style={{
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image
          source={{ uri: image ? image.toString() : undefined }}
          style={{ width: "100%", height: 160 }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            borderBottomColor: COLORS.primary,
            borderBottomWidth: 1,
            paddingBottom: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: COLORS.primary,
              width: "80%",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: COLORS.primary,
            }}
          >
            View
          </Text>
        </View>
        <Text>
          {date} - {time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default EventCard;

const styles = StyleSheet.create({});
