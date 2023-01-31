import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface GalleryCardProps {
  title: string;
  description: string;
  images: string[];
  navigation: any;
}

const GalleryCard = ({ title, images, navigation }: GalleryCardProps) => {
  return (
    <TouchableOpacity>
      <View>
        <Image source={{ uri: images[0] }} />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default GalleryCard;

const styles = StyleSheet.create({
  container: {},
});
