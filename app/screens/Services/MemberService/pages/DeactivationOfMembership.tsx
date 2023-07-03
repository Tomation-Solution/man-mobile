import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
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
import { useFormik } from "formik";
import * as DocumentPicker from "expo-document-picker";
import {
  Deactivation,
  Deactivation_Of_Membership,
  clearConfig,
} from "../../../../store/slices/ServiceRequest/serviceSlice";
interface DetailsProps {
  route?: any;
  navigation?: any;
}

const DeactivationOfMembership = ({ navigation }: any) => {
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
            "Submit A Letter Requesting For Deactivation/Suspension Of Membership",
          type: "",
        },
        {
          uri: "",
          name: "",
          title: "Submission Of Original Membership Certificate.",
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
      formData.append(
        "letter_request_for_activation_or_deactivation",
        values.files[0]
      );
      if (values.files[0].uri) {
      }
      if (values.files[1].uri) {
        formData.append("submit_original_membership_cert", values.files[1]);
      }

      await dispatch(Deactivation(formData));
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

  function ClearConfig() {
    dispatch(clearConfig());
  }

  useEffect(() => {
    ClearConfig();
  }, []);

  return (
    <View>
      <HomeHeader
        title={"Deactivation of Membership"}
        back={navigation.goBack}
        navigation={navigation}
      />
      <View style={{ marginTop: verticalScale(30) }}>
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
            Please find below the requirements for the Deactivation/Suspension:
          </Text>
          <View style={styles.container}>
            <Text style={styles.bulletText}>
              {"\u2022"} Submit a letter requesting for deactivation/suspension
              of membership.
            </Text>
            <Text style={styles.bulletText}>
              {"\u2022"} payment of all outstanding subscriptions/levies
            </Text>
            <Text style={styles.bulletText}>
              {"\u2022"} submission of original membership certificate.
            </Text>
          </View>
        </View>

        <View style={{ marginTop: verticalScale(10) }}>
          {/* <Text style={styles.text}>
            Attach requirement for Loss of Certificate
          </Text> */}

          <View style={styles.documentPickerContainer}>
            {errors["letter_request_for_activation_or_deactivation"] && (
              <Text style={styles.errorText}>
                {errors["letter_request_for_activation_or_deactivation"]}
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
            {errors["submit_original_membership_cert"] && (
              <Text style={styles.errorText}>
                {errors["submit_original_membership_cert"]}
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
      </View>
    </View>
  );
};

export default DeactivationOfMembership;

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    textAlign: "center",
  },
  documentPickerContainer: {
    marginTop: verticalScale(50),
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
  errorText: {
    color: "red",
    fontSize: 12,
  },
});
