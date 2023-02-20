import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { appImages } from "../../assets/app/images";

interface GalleryCardProps {
  title: string;
  description: string[];
  images: string[];
  onPress: () => void;
}

const { width } = Dimensions.get("window");

const GalleryCard = ({ title, images, onPress }: GalleryCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: width / 2 - 30,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          overflow: "hidden",
        }}
      >
        <Image
          source={images[0] ? images[0] : appImages.logo}
          style={{ width: "100%", height: 100 }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          backgroundColor: "white",
          paddingVertical: 5,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            color: "gray",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GalleryCard;

const styles = StyleSheet.create({
  container: {},
});
