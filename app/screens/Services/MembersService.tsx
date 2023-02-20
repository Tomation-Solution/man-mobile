import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants/metric";
import { HomeHeader, CustomModal } from "../../components";
import Item from "./components/Item";
import { appImages } from "../../assets/app/images";
import { FlatList } from "react-native-gesture-handler";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const data = [
  { name: "Certificate Request", image: appImages.certificate, link: "#" },
  { name: "Chat with the DG", image: appImages.profile_1, link: "#" },
  { name: "MembershipAdmission", image: appImages.certificate, link: "#" },
  { name: "Change of Name", image: appImages.certificate, link: "#" },
  { name: "Merge Companies", image: appImages.certificate, link: "#" },
  {
    name: "Deactivation of Membership",
    image: appImages.certificate,
    link: "#",
  },
  { name: "Activation of Membership", image: appImages.certificate, link: "#" },
  { name: "Update on products", image: appImages.certificate, link: "#" },
  { name: "Update on Factory", image: appImages.certificate, link: "#" },
];

const MembersService = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <HomeHeader
        title="Members Services"
        navigation={navigation}
        back="back"
      />

      <FlatList
        data={data}
        numColumns={2}
        initialNumToRender={1}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MembersService;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    marginTop: verticalScale(40),
    marginRight: horizontalScale(64),
    alignItems: "center",
    justifyContent: "center",
    padding: moderateScale(5),
  },
  image: {
    width: horizontalScale(80),
    height: verticalScale(80),
  },
  text: {
    marginTop: verticalScale(12),
    fontWeight: "400",
    fontSize: moderateScale(14),
    width: horizontalScale(120),
    textAlign: "center",
    marginBottom: verticalScale(10),
  },
});
