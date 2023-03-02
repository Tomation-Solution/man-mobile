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

const ProductsManufacturingUpdate = ({ navigation }: any) => {
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
      files: Array(3).fill({ uri: null, name: "" }),
      profile: "",
    },
    onSubmit: async (values: any) => {
      try {
        const formData = new FormData();

        values.files.forEach((file, index) => {
          const fileKey = ['proceed_to_update_your_profile', 'submit_most_recent_financial_statement', 'upload_all_levy_recipt',' upload_Product_update_report' ][index];
          formData.append(fileKey, file || "No file was submitted.");
        });

        await dispatch(Change_Of_Name(formData));
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
    if (!result.cancelled) {
      const files = [...values.files];
      files[index] = { uri: result.uri, name: result.name };
      setFieldValue("files", files);
    }
  };

  return (
    <View >
      <HomeHeader
        title={"Product Manufacturing Update"}
        back="back"
        navigation={navigation}
      />
      <View style={{ marginTop: verticalScale(30) }}>
        <Text style={styles.text}>
          Fulfill the below to get your request updated
        </Text>
        <View style={styles.documentPickerContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("profile")}
            onBlur={handleBlur("profile")}
            value={values.profile}
            placeholder="Proceed to update your profile"
          />
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
            title="Upload all levy recipt(Up-to-date)"
            onPress={() => pickDocument({index: 1})}
          />

          {values.files[2].name ? (
            <Text>Selected file 3: {values.files[2].name}</Text>
          ) : null}
          <CustomPicker
            title="Upload Product update report "
            onPress={() => pickDocument({index: 2})}
          />

        </View>
        <View style={{ marginTop: verticalScale(40) }}>
          <Formbtn title="Request" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default ProductsManufacturingUpdate;

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
