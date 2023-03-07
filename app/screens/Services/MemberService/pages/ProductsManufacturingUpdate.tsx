import { View, Text, StyleSheet, TextInput,ScrollView } from "react-native";
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
import { Product_Manufacture_Update } from "../../../../store/slices/ServiceRequest/serviceSlice";

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
      files: Array(4).fill({ uri: null, name: "" }),
      profile: "",
    },
    onSubmit: async (values: any) => {
      try {
        const formData = new FormData();
      formData.append("proceed_to_update_your_profile", values.files[0]);
      formData.append("submit_most_recent_financial_statement", values.files[1]);
      formData.append("upload_all_levy_recipt", values.files[2]);
      formData.append("upload_Product_update_report", values.files[3]);

        await dispatch(Product_Manufacture_Update(formData));
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
    <ScrollView>
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

            {values.files[0].name ? (
              <Text>Selected file 1: {values.files[0].name}</Text>
            ) : null}

            <CustomPicker
              title="Proceed to update your profile"
              onPress={() => pickDocument({ index: 0 })}
            />

          <CustomPicker
            title="Submit most recent financial statement"
            onPress={() => pickDocument({index: 1})}
          />
              {values.files[1].name ? (
            <Text>Selected file 2: {values.files[1].name}</Text>
          ) : null}

          <CustomPicker
            title="Upload all levy recipt(Up-to-date)"
            onPress={() => pickDocument({index: 2})}
          />
          {values.files[2].name ? (
            <Text>Selected file 3: {values.files[2].name}</Text>
          ) : null}

          <CustomPicker
            title="Upload Product update report "
            onPress={() => pickDocument({index: 3})}
          />
          {values.files[3].name ? (
            <Text>Selected file 4: {values.files[3].name}</Text>
          ) : null}

        </View>
        <View style={{ marginTop: verticalScale(40) }}>
          <Formbtn title="Request" onPress={handleSubmit} />
        </View>
      </View>
    </View>
    </ScrollView>
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
