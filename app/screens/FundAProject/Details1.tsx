import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Container, CustomModal, HomeHeader } from "../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
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
  const [isOpen, setIsOpen] = useState(false);

  const altRoute = useRoute();
  const altNavigation = useNavigation();
  const data = route?.params?.item || altRoute?.params || {};

  return (
    <>
      <CustomModal visible={isOpen} onRequestClose={setIsOpen}>
        <View style={styles.modalWrapper}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: normalize(14),
                fontWeight: "bold",
              }}
            >
              Select Action
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                padding: 5,
                borderRadius: 10,
              }}
              onPress={() => setIsOpen(false)}
            >
              <Text
                style={{
                  fontSize: normalize(12),
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: normalize(22),
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
              }}
            >
              <TextInput style={styles.input} placeholder="Amount" />
              <TouchableOpacity
                style={{
                  width: "100%",
                  marginTop: normalize(15),
                  marginBottom: normalize(10),
                  backgroundColor: COLORS.primary,
                  borderRadius: normalize(10),
                }}
                onPress={() => {
                  setIsOpen(false);
                  // navigation.navigate("Payment");
                }}
              >
                <Text style={styles.modalText}>Make support</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CustomModal>
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: 20,
                  padding: moderateScale(10),
                }}
                onPress={() => navigation.navigate("Details2", { data })}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: normalize(13),
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Support in Kind
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsOpen(true)}
                style={{
                  borderColor: COLORS.primary,
                  borderWidth: 1,
                  borderRadius: 20,
                  padding: moderateScale(10),
                }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontSize: normalize(13),
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Support with cash
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {},
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
  input: {
    width: "100%",
    height: verticalScale(40),
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  modalWrapper: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalText: {
    fontSize: normalize(14),
    fontWeight: "bold",
    color: "white",
    paddingVertical: 10,
    textAlign: "center",
  },
});
