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
import { Deactivation_Of_Membership } from "../../../../store/slices/ServiceRequest/serviceSlice";
interface DetailsProps {
  route?: any;
  navigation?: any;
}

const MergerOfCompanies = ({ navigation }: any) => {
  const dispatch = useAppDispatch();

  const { values, errors, setFieldValue, resetForm, handleSubmit } = useFormik({
    initialValues: {
      files: Array(3).fill({ uri: null, name: "" }),
    },
    onSubmit: async (values: any) => {
      try {
        const formData = new FormData();
        formData.append("deactivation_request", values.files[0]);
        formData.append("submit_most_recent_financial_statement", values.files[1]);
        formData.append("upload_all_levy_recipt", values.files[2]);



        console.log('HELLO THIS IS A FORMDATA', formData)
        await dispatch(Deactivation_Of_Membership(formData));
        resetForm(); // Reset the form after submission
      } catch (error) {
        console.error(error);
      }
    },
  });





  const pickDocument = async ({ index }: any) => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (result.type === 'success') {
      const files = [...values.files];
      files[index] = { uri: result.uri, name: result.uri.split('/').pop(), type: result.mimeType };
      setFieldValue("files", files);
    }
  };

  return (
    <View>
      <HomeHeader
        title={"Deactivation of Membership"}
        back={navigation.goBack}
        navigation={navigation}
      />
      <View style={{ marginTop: verticalScale(30) }}>
        <Text style={styles.text}> Deactivation/Suspension of Membership</Text>
        <View style={styles.documentPickerContainer}>

          {values.files[0].name ? (
            <Text>Selected file 1: {values.files[0].name}</Text>
          ) : null}

          <CustomPicker
            title="Deactivation request( Letter)"
            onPress={() => pickDocument({ index: 0 })}
          />

          {values.files[1].name ? (
            <Text>Selected file 2: {values.files[1].name}</Text>
          ) : null}

          <CustomPicker
            title="Submit most recent financial statement "
            onPress={() => pickDocument({ index: 1 })}
          />

          {values.files[2].name ? (
            <Text>Selected file 3: {values.files[2].name}</Text>
          ) : null}

          <CustomPicker
            title="Upload all levy recipt(Up-to-date)"
            onPress={() => pickDocument({ index: 2 })}
          />



        </View>

        <View style={{ marginTop: verticalScale(40) }}>
          <Formbtn title="Request" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default MergerOfCompanies;

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
