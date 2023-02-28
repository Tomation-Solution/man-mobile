import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { HomeHeader } from "../../../../components";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../constants/metric";
import { Ionicons } from "@expo/vector-icons";
import { Formbtn } from "../../../../components";
import { useFormik } from "formik";
import * as DocumentPicker from "expo-document-picker";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const ReissuanceOfCertificate = ({ navigation }: any) => {
  const {
    values,
    errors,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: {
      files: Array(3).fill({ uri: null, name: "" }),
      message: "",
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
        title={"Reissuance of certificate"}
        back="back"
        navigation={navigation}
      />
      <View style={{ marginTop: verticalScale(30) }}>
        <Text style={styles.text}>
          Attach requirement for reissuance of certificate
        </Text>
        <View style={styles.documentPickerContainer}>
          {errors.files && <Text style={styles.error}>{errors.files}</Text>}
          {values.files[0].name ? (
            <Text>Selected file 1: {values.files[0].name}</Text>
          ) : null}
          <View style={styles.documentPicker}>
            <Text style={styles.text}>Attach Membership Receipt</Text>
            <Ionicons
              name="link-sharp"
              size={24}
              onPress={() => pickDocument(0)}
            />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("message")}
            onBlur={handleBlur("message")}
            value={values.message}
            multiline={true}
            numberOfLines={10}
            placeholder="Enter your message "
          />
          {errors.message && touched.message ? (
            <Text style={styles.error}>{errors.message}</Text>
          ) : null}
        </View>
        <View style={{ marginTop: verticalScale(40) }}>
          <Formbtn title="Request" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default ReissuanceOfCertificate;
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
    marginTop: verticalScale(80),
  },
  documentPicker: {
    flexDirection: "row",
    backgroundColor: "#EAEBE7",
    borderRadius: 8,
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(15),
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8F6F8",
    paddingHorizontal: 9,
    paddingVertical: 13,
    marginVertical: 21,
    backgroundColor: "#EAEBE7",
    borderRadius: 9,
  },
  error: {
    color: "red",
  },
});
