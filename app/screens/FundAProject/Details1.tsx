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
  normalize,
} from "../../constants/metric";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const Details = ({ route, navigation }: DetailsProps) => {
  const altRoute = useRoute();
  const altNavigation = useNavigation();
  const data = route?.params?.item || altRoute?.params || {};

  return (
    <Container>
      <HomeHeader
        navigation={navigation}
        title={"Fund a project" || "Details " + data.id}
        back={() => navigation.goBack("Home")}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: data?.image ? data.image.toString() : undefined }}
            style={styles.image}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.headText}>About project</Text>
          <View>
            <Text style={styles.descriptionText}>{data.about}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              // onPress={() => navigation.navigate("Details2", { data })}
            >
              <Text style={{ color: "white", fontSize: normalize(18) }}>
                In Kind
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              // onPress={() => navigation.navigate("Details2", { data })}
            >
              <Text style={{ color: "white", fontSize: normalize(18) }}>
                In Cash
              </Text>
            </TouchableOpacity>
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
    fontSize: moderateScale(18),
    fontWeight: "700",
  },
  descriptionText: {
    fontSize: moderateScale(14),
    color: "gray",
    textAlign: "justify",
    marginTop: verticalScale(20),
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: verticalScale(20),
  },
  button: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
    backgroundColor: COLORS.primary,
    textAlign: "center",
    borderRadius: moderateScale(6),
    flex: 1,
    borderColor: COLORS.primary,
    borderWidth: moderateScale(1),
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
