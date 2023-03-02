import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { HomeHeader } from "../../../../components";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../constants/metric";
import CustomPicker from "../components/CustomPicker";
import { useAppDispatch } from './../../../../store/hooks';
import { Formbtn } from "../../../../components";
import { useFormik } from "formik";
import * as DocumentPicker from "expo-document-picker";
import { Change_Of_Name } from "../../../../store/slices/ServiceRequest/serviceSlice";
interface DetailsProps {
  route?: any;
  navigation?: any;
}

const ChangeOfName = ({ navigation }: any) => {
  const dispatch = useAppDispatch();

  const { values, errors, setFieldValue,resetForm, handleSubmit } = useFormik({
    initialValues: {
      files: Array(4).fill({ uri: null, name: "" }),
    },
    onSubmit: async (values: any) => {

         const formData = new FormData();
        // Create an object that matches the required data structure

        formData.append("id", "4");
        formData.append("attach_membership_certificate", values.files[0]);
        formData.append("membership_due_receipt", values.files[1]);
        formData.append("upload_financial_statement", values.files[2]);
        formData.append("upload_incorporation_certificate", values.files[3]);
        formData.append("member", "2");

        console.log("HELLO THIS IS A FORMDATA", formData);
        // await dispatch(Change_Of_Name(requestData));
        resetForm(); // Reset the form after submission
      }

    },
);






  const pickDocument = async ({ index }: any) => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (!result.cancelled) {
      const files = [...values.files];
      files[index] = { uri: result.uri, name: result.name };
      setFieldValue("files", files);
    }
  };

  return (
    <View>
      <HomeHeader
        title={"Change of Name"}
        back="back"
        navigation={navigation}
      />
      <View style={{ marginTop: verticalScale(30) }}>
        <Text style={styles.text}>Attach requirement for Change of Name</Text>
        <View style={styles.documentPickerContainer}>

          {values.files[0].name ? (
            <Text>Selected file 1: {values.files[0].name}</Text>
          ) : null}

          <CustomPicker
            title="Attach Membership Certificate"
            onPress={() => pickDocument({index: 0})}
          />

          {values.files[1].name ? (
            <Text>Selected file 2: {values.files[1].name}</Text>
          ) : null}

          <CustomPicker
            title="Membership due receipt"
            onPress={() => pickDocument({index: 1})}
          />

          {values.files[2].name ? (
            <Text>Selected file 3: {values.files[2].name}</Text>
          ) : null}

          <CustomPicker
            title="Upload financial statement (2 years)"
            onPress={() => pickDocument({index: 2})}
          />

          {values.files[3].name ? (
            <Text>Selected file 4: {values.files[3].name}</Text>
          ) : null}

          <CustomPicker
            title="Upload Incorporation Certificate"
            onPress={() => pickDocument({index: 3})}
          />

        </View>

        <View style={{ marginTop: verticalScale(40) }}>
          <Formbtn title="Request" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default ChangeOfName;

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    textAlign: "center",
    lineHeight: moderateScale(24),
  },
  documentPickerContainer: {
    marginTop: verticalScale(50),
  },
});
