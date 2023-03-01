import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { HomeHeader } from "../../../../components";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../constants/metric";
import CustomPicker from "../components/CustomPicker";

import { Formbtn } from "../../../../components";
import { useFormik } from "formik";
import * as DocumentPicker from "expo-document-picker";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const MergerOfCompanies = ({ navigation }: any) => {
  const { values, errors, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      files: Array(4).fill({ uri: null, name: "" }),
    },
    onSubmit: (values) => {
      console.log(values);
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
        title={"Merger of Companies"}
        back="back"
        navigation={navigation}
      />
      <View style={{ marginTop: verticalScale(30) }}>
        <Text style={styles.text}>
          Attach requirement for Merger of Companies
        </Text>
        <View style={styles.documentPickerContainer}>
          {errors.files && <Text style={styles.error}>{errors.files}</Text>}
          {values.files[0].name ? (
            <Text>Selected file 1: {values.files[0].name}</Text>
          ) : null}
          <CustomPicker
            title="Upload request letter"
            onPress={() => pickDocument(0)}
          />
          {errors.files && <Text style={styles.error}>{errors.files}</Text>}
          {values.files[1].name ? (
            <Text>Selected file 1: {values.files[0].name}</Text>
          ) : null}
          <CustomPicker
            title="Submit most recent financial statement  "
            onPress={() => pickDocument(1)}
          />
          {errors.files && <Text style={styles.error}>{errors.files}</Text>}
          {values.files[2].name ? (
            <Text>Selected file 1: {values.files[2].name}</Text>
          ) : null}
          <CustomPicker
            title="Upload dues reciept"
            onPress={() => pickDocument(2)}
          />
          {errors.files && <Text style={styles.error}>{errors.files}</Text>}
          {values.files[3].name ? (
            <Text>Selected file 1: {values.files[3].name}</Text>
          ) : null}
          <CustomPicker
            title="Upload membership cert for both companies"
            onPress={() => pickDocument(3)}
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
});
