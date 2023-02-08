import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../../../../constants/color";
import { images } from "../../../../../assets/dummyData";
import { HomeHeader } from "../../../../../components";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const Details = ({ route, navigation }: DetailsProps) => {
  const altRoute = useRoute();
  const data = route?.params?.news || altRoute?.params || {};

  const [showAll, setShowAll] = React.useState(3);

  const handlePress = () => {
    setShowAll(showAll === 3 ? data.comments.length : 3);
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginBottom: 20,
        }}
      ></ScrollView>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({});
