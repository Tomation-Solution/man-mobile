import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { appImages } from "../../assets/app/images";

interface GalleryCardProps {
  title: string;
  description: string;
  images: string[];
  onPress: () => void;
}

const GalleryCard = ({ title, images, onPress }: GalleryCardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Image
          source={images[0] ? images[0] : appImages.logo}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default GalleryCard;

const styles = StyleSheet.create({
  container: {},
});
