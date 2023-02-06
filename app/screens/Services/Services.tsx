import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { Container, HomeHeader } from "../../components";
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../constants/metric";
import { appImages } from "../../assets/app/images";

const Services = ({ navigation }: any) => {
  return (
    <Container style={styles.container}>
      <HomeHeader title="Services" navigation={navigation} back="back" />
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={appImages.certificate}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.text}>Certificate Request</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={appImages.profile_1}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.text}>Chat with the DG</Text>
        </View>
      </View>
      <View style={[styles.rowContainer, { margin: moderateScale(80) }]}>
        <Image
          source={appImages.about}
          style={{
            width: horizontalScale(24),
            height: verticalScale(24),
            marginRight: horizontalScale(20),
          }}
        />
        <Text style={{ fontWeight: "500", fontSize: moderateScale(14) }}>
          News
        </Text>
      </View>
    </Container>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
  },
});
