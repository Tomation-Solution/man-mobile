import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants/metric";
import { Container, CustomModal, HomeHeader } from "../../components";
import LetterSubmission from "./components/CertificateRequest/components/LetterSubmission";
import { appImages } from "../../assets/app/images";
import { FlatList } from "react-native-gesture-handler";
interface DetailsProps {
  route?: any;
  navigation?: any;
}

const data = [
  { name: "Members List", image: appImages.profile_1, link: "#" },
  { name: "Companies List", image: appImages.profile_1, link: "#" },
  { name: "Upload Admission List", image: appImages.certificate, link: "#" },
  {
    name: "Generate Letter of Admission",
    image: appImages.certificate,
    link: "#",
  },
];

const Item = ({ item, index }: any) => {
  const [key, setKey] = useState(index);
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <Container style={styles.rowContainer} key={index}>
      <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
        {key === 2 && (
          <LetterSubmission onPress={onPress} fileName="Admission List" />
        )}
      </CustomModal>
      <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    </Container>
  );
};

const StaffsService = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <HomeHeader title="Staffs Services" navigation={navigation} back="back" />

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

export default StaffsService;
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
