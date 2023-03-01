import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

import { HomeHeader } from "../../../../components";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../constants/metric";

import { Formbtn } from "../../../../components";
import { useFormik } from "formik";
import * as DocumentPicker from "expo-document-picker";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const ReissuanceForm = ({ navigation }: any) => {
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
      organizationName: "",
      address: "",
      contactPerson: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <View style={styles.container}>
      <HomeHeader
        title={"Reissuance form"}
        back="back"
        navigation={navigation}
      />
      <View style={{ marginTop: verticalScale(30) }}>
        <Text style={styles.text}>
          Please fill the form to move on with your request
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("organizationName")}
            onBlur={handleBlur("organizationName")}
            value={values.organizationName}
            placeholder="Name of Organization"
          />
          {errors.organizationName && touched.organizationName ? (
            <Text style={styles.error}>{errors.organizationName}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            onChangeText={handleChange("address")}
            onBlur={handleBlur("address")}
            value={values.address}
            placeholder="Address"
          />
          {errors.address && touched.address ? (
            <Text style={styles.error}>{errors.address}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            onChangeText={handleChange("contactPerson")}
            onBlur={handleBlur("contactPerson")}
            value={values.contactPerson}
            placeholder="Contact Person "
          />
          {errors.contactPerson && touched.contactPerson ? (
            <Text style={styles.error}>{errors.contactPerson}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            onChangeText={handleChange("phoneNumber")}
            onBlur={handleBlur("phoneNumber")}
            value={values.phoneNumber}
            placeholder="Phone Number "
          />
          {errors.phoneNumber && touched.phoneNumber ? (
            <Text style={styles.error}>{errors.phoneNumber}</Text>
          ) : null}
        </View>
        <View style={{ marginTop: verticalScale(40) }}>
          <Formbtn title="Next" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default ReissuanceForm;
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
  inputContainer: {
    marginTop: verticalScale(50),
  },

  input: {
    borderWidth: 1,
    borderColor: "#E8F6F8",
    paddingHorizontal: 20,
    paddingVertical: 13,
    marginVertical: 21,
    backgroundColor: "#EAEBE7",
    borderRadius: 9,
  },
  error: {
    color: "red",
  },
});
