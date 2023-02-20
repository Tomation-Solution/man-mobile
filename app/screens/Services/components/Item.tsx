import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";

import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../../constants/metric";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Container, CustomModal } from "../../../components";
import CertificateRequest from "./CertificateRequest/CertificateRequest";
import LetterSubmission from "./CertificateRequest/components/LetterSubmission";

const Item = ({ item, index }: any) => {
  const [key, setKey] = useState(index);
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <Container style={styles.rowContainer} key={index}>
      <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
        {key === 0 && <CertificateRequest onPress={onPress} />}
        {key === 2 && (
          <LetterSubmission onPress={onPress} fileName="Membership Admission" />
        )}
        {key === 3 && <CertificateRequest onPress={onPress} />}
        {key === 4 && (
          <LetterSubmission
            onPress={onPress}
            fileName="Letter requesting for merger of companies"
          />
        )}
        {key === 5 && (
          <LetterSubmission
            onPress={onPress}
            fileName="Letter requesting for deactivation/suspension of membership"
          />
        )}
        {key === 6 && (
          <LetterSubmission
            onPress={onPress}
            fileName="Letter requesting for Reactivation of membership"
          />
        )}
      </CustomModal>
      <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Item;
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
