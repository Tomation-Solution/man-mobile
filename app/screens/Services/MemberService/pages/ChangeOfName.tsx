import { View, Text, StyleSheet, ScrollView } from "react-native";
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

  const { values, errors, setFieldValue, resetForm, handleSubmit } = useFormik({
    initialValues: {
      files: Array(4).fill({ uri: null, name: "" }),
    },
    onSubmit: async (values: any) => {
      const formData = new FormData();
      formData.append("attach_membership_certificate", values.files[0]);
      formData.append("membership_due_receipt", values.files[1]);
      formData.append("upload_financial_statement", values.files[2]);
      formData.append("upload_incorporation_certificate", values.files[3]);
      console.log("HELLO THIS IS A FORMDATA", formData);
      await dispatch(Change_Of_Name(formData));
      resetForm();
    }

  },
  );






  const pickDocument = async ({ index }: any) => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (result.type === 'success') {
      const files = [...values.files];
      files[index] = { uri: result.uri, name: result.uri.split('/').pop(), type: result.mimeType };
      setFieldValue("files", files);
      // console.log(files)
    }
  }
  return (
    <View>
      <ScrollView>
        <HomeHeader
          title={"Change of Name"}
          navigation={navigation}
          back={navigation.goBack}
        />
        <View style={{ marginTop: verticalScale(30) }}>
          <Text style={styles.text}>Attach requirement for Change of Name</Text>
          <View style={styles.documentPickerContainer}>

            {values.files[0].name ? (
              <Text>Selected file 1: {values.files[0].name}</Text>
            ) : null}

            <CustomPicker
              title="Attach Membership Certificate"
              onPress={() => pickDocument({ index: 0 })}
            />

            {values.files[1].name ? (
              <Text>Selected file 2: {values.files[1].name}</Text>
            ) : null}

            <CustomPicker
              title="Membership due receipt"
              onPress={() => pickDocument({ index: 1 })}
            />

            {values.files[2].name ? (
              <Text>Selected file 3: {values.files[2].name}</Text>
            ) : null}

            <CustomPicker
              title="Upload financial statement (2 years)"
              onPress={() => pickDocument({ index: 2 })}
            />

            {values.files[3].name ? (
              <Text>Selected file 4: {values.files[3].name}</Text>
            ) : null}

            <CustomPicker
              title="Upload Incorporation Certificate"
              onPress={() => pickDocument({ index: 3 })}
            />

          </View>

          <View style={{ marginTop: verticalScale(40) }}>
            <Formbtn title="Request" onPress={handleSubmit} />
          </View>
        </View>
      </ScrollView>
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
