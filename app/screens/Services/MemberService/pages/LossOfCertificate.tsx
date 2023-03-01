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

const LossOfCertificate = ({ navigation }: any) => {
  const { values, errors, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      files: Array(5).fill({ uri: null, name: "" }),
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
        title={"Loss of certificate"}
        back="back"
        navigation={navigation}
      />
      <View style={{ marginTop: verticalScale(30) }}>
        <Text style={styles.text}>
          Attach requirement for loss of certificate
        </Text>
        <View style={styles.documentPickerContainer}>
          {errors.files && <Text style={styles.error}>{errors.files}</Text>}
          {values.files[0].name ? (
            <Text>Selected file 1: {values.files[0].name}</Text>
          ) : null}
          <CustomPicker
            title="Upload Membership Receipt"
            onPress={() => pickDocument(0)}
          />
          {errors.files && <Text style={styles.error}>{errors.files}</Text>}
          {values.files[1].name ? (
            <Text>Selected file 1: {values.files[0].name}</Text>
          ) : null}
          <CustomPicker
            title="Upload certificate loss afidavit"
            onPress={() => pickDocument(1)}
          />
          {errors.files && <Text style={styles.error}>{errors.files}</Text>}
          {values.files[2].name ? (
            <Text>Selected file 1: {values.files[2].name}</Text>
          ) : null}
          <CustomPicker
            title="Upload All dues receipt"
            onPress={() => pickDocument(2)}
          />
          {errors.files && <Text style={styles.error}>{errors.files}</Text>}
          {values.files[3].name ? (
            <Text>Selected file 1: {values.files[3].name}</Text>
          ) : null}
          <CustomPicker
            title="Upload financial statement (2 years)"
            onPress={() => pickDocument(3)}
          />
          {errors.files && <Text style={styles.error}>{errors.files}</Text>}
          {values.files[4].name ? (
            <Text>Selected file 1: {values.files[4].name}</Text>
          ) : null}
          <CustomPicker
            title="Upload Incorporation Certificate"
            onPress={() => pickDocument(5)}
          />
        </View>
        <View style={{ marginTop: verticalScale(40) }}>
          <Formbtn title="Proceed to pay" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default LossOfCertificate;

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
