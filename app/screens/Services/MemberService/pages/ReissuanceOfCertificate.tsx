import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { HomeHeader } from "../../../../components";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../constants/metric";
import { Ionicons } from "@expo/vector-icons";
import { Formbtn } from "../../../../components";
import { useFormik } from "formik";
import * as DocumentPicker from "expo-document-picker";
import { useAppDispatch, useAppSelector } from "./../../../../store/hooks";
import {
  GetReissuance_Certificate,
  Reissuance_Certificate,
  clearConfig,
} from "../../../../store/slices/ServiceRequest/serviceSlice";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const ReissuanceOfCertificate = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(
    (state) => state.ServiceRequestReducers.ServiceSlice
  );

  function ClearConfig() {
    dispatch(clearConfig());
  }

  useEffect(() => {
    ClearConfig();
  }, []);

  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HomeHeader
        title={"Reissuance of certificate"}
        back={navigation.goBack}
        navigation={navigation}
      />
      <View style={{ marginTop: verticalScale(20) }}>
        <Text
          style={{
            fontSize: moderateScale(25),
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          CALL FOR RENEWAL OF MEMBERSHIP CERTIFICATE
        </Text>
        <Text
          style={{
            fontSize: moderateScale(16),
            marginTop: verticalScale(20),
            fontWeight: "400",
            textAlign: "justify",
            lineHeight: moderateScale(21),
          }}
        >
          As you are aware, the life span of the 2nd batch of Membership
          Certificate of the Manufacturers Association of Nigeria (MAN) which
          was issued in January 2020 expires on the 31st of December 2022. In
          view of the above, the Association is inviting members to come forward
          for the renewal of their membership certificate.
        </Text>
        <Text
          style={{
            fontSize: moderateScale(16),
            marginTop: verticalScale(20),
            fontWeight: "400",
            textAlign: "justify",
            lineHeight: moderateScale(21),
          }}
        >
          Members are therefore advised to follow the guidelines below and do so
          early to avoid late re-issuance of Certificate
        </Text>

        <Text
          style={{
            fontSize: moderateScale(16),
            marginTop: verticalScale(20),
            fontWeight: "400",
            textAlign: "justify",
            lineHeight: moderateScale(21),
          }}
        >
          Similarly, it is pertinent to inform members who have not applied for
          re-issuance or fully complied with the requirements since 2017 when
          the exercise of three yearly renewal commenced to kindly do so
          urgently. This is because MAN Certificate in their possession has
          become obsolete and would no longer be accepted by the Association and
          all relevant Government Agencies and Parastatals.
        </Text>

        <Text
          style={{
            fontSize: moderateScale(16),
            marginTop: verticalScale(20),
            fontWeight: "500",
            textAlign: "justify",
            lineHeight: moderateScale(21),
          }}
        >
          Please find below the requirements for the re-issuance:
        </Text>

        <View
          style={{
            marginTop: verticalScale(20),
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(20),
              marginTop: verticalScale(20),
              fontWeight: "500",
              textAlign: "justify",
              lineHeight: moderateScale(21),
              textDecorationLine: "underline",
              textDecorationColor: "#000",
            }}
          >
            Section A: Companies that changed the names on their original
            Certificates are required to do the following:
          </Text>
          <View style={styles.container}>
            <Text style={styles.bulletText}>
              {"\u2022"} Complete the Membership Certificate Re-issuance form as
              attached.
            </Text>
            <Text style={styles.bulletText}>
              {"\u2022"} Return of MAN Membership Certificate which expired on
              the 31st December 2023.
            </Text>
            <Text style={styles.bulletText}>
              {"\u2022"} Payment of all outstanding subscription(s) as advised
              by the undersigned on the 2023 Demand.
            </Text>
            <Text style={styles.bulletText}>
              {"\u2022"} Submission of 2021 and 2022 Audited Financial
              Statements of the company (new applicants shall include 2019
              Audited Financial Report).
            </Text>
            <Text style={styles.bulletText}>
              {"\u2022"} Copy of the certificate of incorporation.
            </Text>
            <Text style={styles.bulletText}>
              {"\u2022"} Submit Change of name Certificate as issued by
              Corporate Affairs Commission (CAC).
            </Text>
            <Text style={styles.bulletText}>
              {"\u2022"} A Bank Payment Teller in the sum of Fifty Thousand
              Naira Only (N50,000) in favor of Manufacturers Association of
              Nigeria for re-issuance of Membership Certificate.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              ClearConfig();
              navigation.navigate("ChangeOfName");
            }}
            style={{
              backgroundColor: "#182005",
              borderRadius: 8,
              justifyContent: "center",
              paddingHorizontal: horizontalScale(24),
              paddingVertical: verticalScale(10),
              marginBottom: verticalScale(30),
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(16),
                color: "#fff",

                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Proceed
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: verticalScale(20),
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(20),
              marginTop: verticalScale(20),
              fontWeight: "500",
              textAlign: "justify",
              lineHeight: moderateScale(21),
              textDecorationLine: "underline",
              textDecorationColor: "#000",
            }}
          >
            Section B:Companies that lost their MAN Membership Certificates are
            required to do the following
          </Text>
          <View style={styles.container}>
            <Text style={styles.bulletText}>
              {"\u2022"} An affidavit from a Court of competence jurisdiction
              supporting the loss of the Certificate.
            </Text>
            <Text style={styles.bulletText}>
              {"\u2022"} Bank Payment Teller in the sum of Fifty Thousand Naira
              (N50,000) in favour of Manufacturers Association of Nigeria for
              re-issuance of Membership Certificate.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              ClearConfig();
              navigation.navigate("LossOfCertificate");
            }}
            style={{
              backgroundColor: "#182005",
              borderRadius: 8,
              justifyContent: "center",
              paddingHorizontal: horizontalScale(24),
              paddingVertical: verticalScale(10),
              marginBottom: verticalScale(30),
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(16),
                color: "#fff",

                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReissuanceOfCertificate;

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    textAlign: "center",
    lineHeight: moderateScale(24),
  },
  documentPickerContainer: {
    marginTop: verticalScale(80),
  },
  documentPicker: {
    flexDirection: "row",
    backgroundColor: "#EAEBE7",
    borderRadius: 8,
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(15),
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8F6F8",
    paddingHorizontal: 9,
    paddingVertical: 13,
    marginVertical: 21,
    backgroundColor: "#EAEBE7",
    borderRadius: 9,
  },
  error: {
    color: "red",
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bulletText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
});
