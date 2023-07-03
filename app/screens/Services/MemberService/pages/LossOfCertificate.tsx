import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import React, { useEffect } from "react";
import { HomeHeader } from "../../../../components";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../constants/metric";
import CustomPicker from "../components/CustomPicker";
import { useAppDispatch, useAppSelector } from "./../../../../store/hooks";
import { Formbtn } from "../../../../components";
import { ErrorMessage, useFormik } from "formik";
import * as DocumentPicker from "expo-document-picker";
import {
  Change_Of_Name,
  LossOfCertificatePut,
} from "../../../../store/slices/ServiceRequest/serviceSlice";
import { toTitleCase } from "../../../../utils/helperFunctions/toSentenceCase";
import { Pressable } from "react-native";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const LossOfCertificate = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const [errors, setErrors] = React.useState<any>({});
  const { loading, error, success } = useAppSelector(
    (state) => state.ServiceRequestReducers.ServiceSlice
  );

  const { values, setFieldValue, resetForm, handleSubmit } = useFormik({
    initialValues: {
      files: [
        {
          uri: "",
          name: "",
          title:
            "An Affidavit From A Court Of Competence Jurisdiction Supporting The Loss Of The Certificate",
          type: "",
        },
        {
          uri: "",
          name: "",
          title:
            "Return Of MAN Membership Certificate Which Expired On The 31st December.",
          type: "",
        },
        {
          uri: "",
          name: "",
          title:
            "Bank Payment Teller In The Sum Of Fifty Thousand Naira (N50,000) In Favour Of Manufacturers Association Of Nigeria For Re-Issuance Of Membership Certificate",
          type: "",
        },
        {
          uri: "",
          name: "",
          title: "Certificate of Incorporation",
          type: "",
        },
        {
          uri: "",
          name: "",
          title: "Audited Finicial Statement (One)",
          type: "",
        },
        {
          uri: "",
          name: "",
          title: "Audited Finicial Statement (Two)",
          type: "",
        },
      ],

      // files: Array(5).fill({ uri: null, name: "" }),
    },
    onSubmit: async (values: any) => {
      if (success) {
        navigation.goBack();
        return;
      }
      const formData = new FormData();
      formData.append("affidavit_from_court", values.files[0]);
      if (values.files[0].uri) {
      }
      if (values.files[1].uri) {
        formData.append("bank_teller_of_payment", values.files[1]);
      }
      if (values.files[2].uri) {
        formData.append(
          "certificate_which_expired_on_thirtyone",
          values.files[2]
        );
      }
      if (values.files[3].uri) {
        formData.append("copy_of_certificate_incoporation", values.files[3]);
      }
      if (values.files[4].uri) {
        formData.append("audited_finicial_statement_one", values.files[4]);
      }
      if (values.files[5].uri) {
        formData.append("audited_finicial_statement_two", values.files[5]);
      }

      await dispatch(LossOfCertificatePut(formData));
      // resetForm();
    },
  });

  const pickDocument = async ({ index }: any) => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (result.type === "success") {
      const files = [...values.files];
      files[index] = {
        uri: result.uri,
        name: result.name,
        type: result.mimeType,
      };
      setFieldValue("files", files);
      // console.log(files)
    }
  };

  useEffect(() => {
    if (error) {
      const _errors: any = { ...error };
      console.log("error: ", _errors);
      // errors.map((item: any) => {
      //   _errors[item.field] = item.message[0];
      // });

      setErrors(_errors);
    }
    console.log("error: ", error);
  }, [error]);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader
          title={"Change of Name"}
          navigation={navigation}
          back={navigation.goBack}
        />
        <View style={{ marginTop: verticalScale(10) }}>
          <Text style={styles.text}>
            Attach requirement for Loss of Certificate
          </Text>

          <View style={styles.documentPickerContainer}>
            {errors["submit_change_of_name_cert"] && (
              <Text style={styles.errorText}>
                {errors["submit_change_of_name_cert"]}
              </Text>
            )}
            <CustomPicker
              title={
                values.files[0].name
                  ? values.files[0].name
                  : values.files[0].title
              }
              onPress={() => pickDocument({ index: 0 })}
            />
            {errors["bank_teller_of_payment"] && (
              <Text style={styles.errorText}>
                {errors["bank_teller_of_payment"]}
              </Text>
            )}
            <CustomPicker
              title={
                values.files[1].name
                  ? values.files[1].name
                  : values.files[1].title
              }
              onPress={() => pickDocument({ index: 1 })}
            />
            {errors["certificate_which_expired_on_thirtyone"] && (
              <Text style={styles.errorText}>
                {errors["certificate_which_expired_on_thirtyone"]}
              </Text>
            )}
            <CustomPicker
              title={
                values.files[2].name
                  ? values.files[2].name
                  : values.files[2].title
              }
              onPress={() => pickDocument({ index: 2 })}
            />
            {errors["copy_of_certificate_incoporation"] && (
              <Text style={styles.errorText}>
                {errors["copy_of_certificate_incoporation"]}
              </Text>
            )}
            <CustomPicker
              title={
                values.files[3].name
                  ? values.files[3].name
                  : values.files[3].title
              }
              onPress={() => pickDocument({ index: 3 })}
            />
            {errors["audited_finicial_statement_one"] && (
              <Text style={styles.errorText}>
                {errors["audited_finicial_statement_one"]}
              </Text>
            )}
            <CustomPicker
              title={
                values.files[4].name
                  ? values.files[4].name
                  : values.files[4].title
              }
              onPress={() => pickDocument({ index: 4 })}
            />
            {errors["audited_finicial_statement_two"] && (
              <Text style={styles.errorText}>
                {errors["audited_finicial_statement_two"]}
              </Text>
            )}
            <CustomPicker
              title={
                values.files[5].name
                  ? values.files[5].name
                  : values.files[5].title
              }
              onPress={() => pickDocument({ index: 5 })}
            />
          </View>

          <View style={{ marginVertical: verticalScale(40) }}>
            <Pressable
              disabled={loading}
              style={{
                marginBottom: verticalScale(40),
                alignSelf: "center",
                borderColor: "#000",
                borderWidth: 1,
                borderRadius: 10,
                width: "100%",
                paddingVertical: verticalScale(8),
              }}
              onPress={() => handleSubmit()}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#000",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {loading ? "Loading..." : "Submit"}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LossOfCertificate;

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    textAlign: "center",
    lineHeight: moderateScale(24),
  },
  documentPickerContainer: {
    marginTop: verticalScale(25),
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});
