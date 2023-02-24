import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Container, HomeHeader } from "../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants/color";
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../constants/metric";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const Details = ({ route, navigation }: DetailsProps) => {
  const altRoute = useRoute();
  const altNavigation = useNavigation();
  const data = route?.params?.item || altRoute?.params || {};
  console.log(data);
  return (
    <Container style={styles.container}>
      <HomeHeader
        navigation={navigation}
        title={"Fund a project" || "Details " + data.id}
        back={() => navigation.goBack("Details")}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.imageContainer}>
          <Image   source={{ uri: data?.image ? data.image.toString() : undefined }}
           style={styles.image} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.headText}>About project</Text>
          <View>
            <Text style={styles.descriptionText}>{data.about}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => navigation.navigate("Details2")}
            >
              <Text style={{ color: "white" }}>Support in Kind</Text>
            </TouchableOpacity>
            <View style={styles.button2}>
              <Text style={{ color: COLORS.primary }}>Support with cash</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  scrollView: {
    marginBottom: verticalScale(20),
  },
  imageContainer: {
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
  },
  image: {
    width: "100%",
    height: horizontalScale(300),
  },
  descriptionContainer: {
    flex: 1,
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    padding: moderateScale(20),
    width: "100%",
    backgroundColor: "white",
    position: "relative",
    top: verticalScale(-20),
  },
  headText: {
    fontSize: moderateScale(20),
    fontWeight: "700",
  },
  descriptionText: {
    fontSize: moderateScale(15),
    color: "gray",
    textAlign: "justify",
    marginTop: verticalScale(20),
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(20),
    marginBottom: horizontalScale(40),
  },
  button1: {
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(16),
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(16),
    marginRight: horizontalScale(20),
    width: horizontalScale(130),
    height: verticalScale(67),
  },
  button2: {
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(16),
    borderColor: COLORS.primary,
    borderWidth: moderateScale(1),
    width: horizontalScale(130),
    height: verticalScale(67),
  },
});
