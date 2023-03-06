import { View, Text, StyleSheet ,ScrollView} from "react-native";
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
import { Merge_Of_Company } from './../../../../store/slices/ServiceRequest/serviceSlice';

interface DetailsProps {
  route?: any;
  navigation?: any;
}





const MergerOfCompanies = ({ navigation }: any) => {
  const dispatch = useAppDispatch();

  const { values, errors, setFieldValue,resetForm, handleSubmit } = useFormik({
    initialValues: {
      files: Array(4).fill({ uri: null, name: "" }),
    },

    onSubmit: async (values: any) => {
      try {
        const formData = new FormData();

        formData.append("submit_most_recent_financial_statement", values.files[0]);
        formData.append("upload_dues_reciept", values.files[1]);
        formData.append("upload_membership_cert_for_both_companies", values.files[2]);
        formData.append("upload_request_letter", values.files[3]);


        console.log('HELLO THIS IS A FORMDATA',formData)

        await dispatch(Merge_Of_Company(formData));
        resetForm();
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
    <ScrollView>
    <View>
      <HomeHeader
        title={"Merger of comapanies"}
        back="back"
        navigation={navigation}
      />

      <View style={{ marginTop: verticalScale(30) }}>
        <Text style={styles.text}> Attach requirement for Merger of Companies</Text>
        <View style={styles.documentPickerContainer}>




          {values.files[0].name ? (
            <Text>Selected file 1: {values.files[0].name}</Text>
          ) : null}

          <CustomPicker
            title="Submit most recent financial statement"
            onPress={() => pickDocument({index: 0})}
          />

          {values.files[1].name ? (
            <Text>Selected file 2: {values.files[1].name}</Text>
          ) : null}

          <CustomPicker
            title="Upload_dues_reciept"
            onPress={() => pickDocument({index: 1})}
          />

          {values.files[2].name ? (
            <Text>Selected file 3: {values.files[2].name}</Text>
          ) : null}

          <CustomPicker
            title="Upload membership cert for both companies"
            onPress={() => pickDocument({index: 2})}
          />

           {values.files[3].name ? (
            <Text>Selected file 4: {values.files[3].name}</Text>
          ) : null}

          <CustomPicker
            title="Upload membership cert for both companies"
            onPress={() => pickDocument({index: 3})}
          />
        </View>

        <View style={{ marginTop: verticalScale(40) }}>
          <Formbtn title="Request" onPress={handleSubmit} />
        </View>

      </View>

    </View>
    </ScrollView>
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
