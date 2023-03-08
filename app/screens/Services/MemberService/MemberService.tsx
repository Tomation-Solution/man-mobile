import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../constants/metric";
import { HomeHeader, CustomModal } from "../../../components";
import { FlatList } from "react-native-gesture-handler";
import Item from "./components/Item";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const data = [
  // { name: "Membership admission", image: "laptop", link: "ReissuanceForm" },
  {
    name: "Reissuance of certificate",
    image: "laptop",
    link: "ReissuanceOfCertificate",
  },
  { name: "Loss of certificate", image: "laptop", link: "LossOfCertificate" },
  { name: "Change of Name", image: "people", link: "ChangeOfName" },
  {
    name: "Merger of member companies",
    image: "laptop",
    link: "MergerOfCompanies",
  },
  {
    name: "Deactivation/Suspension of membership",
    image: "laptop",
    link: "DeactivationOfMembership",
  },
  // {
  //   name: "Activation of deactivated/suspended member",
  //   image: "laptop",
  //   link: "#",
  // },
  {
    name: "Update on product(s) manufactured",
    image: "shop",
    link: "ProductsManufacturingUpdate",
  },
  {
    name: "Update on factory location(s)",
    image: "laptop",
    link: "FactoryLocationUpdate",
  },
];

const MembersService = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <HomeHeader title="Services" navigation={navigation} back="back" />

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            image={item.image}
            link={item.link}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default MembersService;
const styles = StyleSheet.create({
  container: {
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
