import { View, Text, StyleSheet, TextInput } from "react-native";
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

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const FactoryLocationUpdate = ({ navigation }: any) => {

  const dispatch = useAppDispatch();

  const {
    values,
    errors,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    touched,
  } = useFormik({
    initialValues: {
      files: Array(4).fill({ uri: null, name: "" }),
    },
    onSubmit: async (values: any) => {
      try {
        const formData = new FormData();
        values.files.forEach((file:any, index:any) => {
          const fileKey = ['deactivation_request', 'submit_most_recent_financial_statement', 'upload_all_levy_recipt', ][index];
          formData.append(fileKey, file || "No file was submitted.");
        });
        // await dispatch(( ));
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
    if (!result.cancelled) {
      const files = [...values.files];
      files[index] = { uri: result.uri, name: result.name };
      setFieldValue("files", files);
    }
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        title={"Factory Location Update"}
        back="back"
        navigation={navigation}
      />
      <View style={{ marginTop: verticalScale(30) }}>
        <Text style={styles.text}>
          Fulfill the below to get your request updated
        </Text>
        <View style={styles.documentPickerContainer}>

          {values.files[0].name ? (
            <Text>Selected file 1: {values.files[0].name}</Text>
          ) : null}

          <CustomPicker
            title="Proceed to update your profile"
            onPress={() => pickDocument({index: 0})}
          />

          {values.files[1].name ? (
            <Text>Selected file 2: {values.files[1].name}</Text>
          ) : null}

          <CustomPicker
            title="Submit most recent financial statement"
            onPress={() => pickDocument({index: 1})}
          />

          {values.files[2].name ? (
            <Text>Selected file 3: {values.files[2].name}</Text>
          ) : null}

          <CustomPicker
            title="Upload dues reciept"
            onPress={() => pickDocument({index: 2})}
          />

          {values.files[3].name ? (
            <Text>Selected file 4: {values.files[3].name}</Text>
          ) : null}

          <CustomPicker
            title="Upload factory inspection report "
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

export default FactoryLocationUpdate;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    fontSize: moderateScale(14),
    fontWeight: "400",
    textAlign: "center",
    lineHeight: moderateScale(24),
  },
  documentPickerContainer: {
    marginTop: verticalScale(50),
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8F6F8",
    paddingHorizontal: 20,
    paddingVertical: 13,
    marginTop: 21,
    backgroundColor: "#EAEBE7",
    borderRadius: 9,
  },
  error: {
    color: "red",
  },
});
