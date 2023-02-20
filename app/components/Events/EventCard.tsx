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
          source={image ? image : appImages.logo}
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
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: COLORS.primary,
            borderBottomColor: COLORS.primary,
            borderBottomWidth: 1,
            paddingBottom: 5,
          }}
        >
          {title}
        </Text>
        <Text>
          {date} - {time}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default EventCard;

const styles = StyleSheet.create({});
