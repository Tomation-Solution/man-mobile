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
import { useAppDispatch } from './../../../../store/hooks';
import { Reissuance_Certificate } from './../../../../store/slices/ServiceRequest/serviceSlice';

interface DetailsProps {
  route?: any;
  navigation?: any;
}


  const ReissuanceOfCertificate = ({ navigation }: any) => {
    const dispatch = useAppDispatch();
    const {
      values,
      errors,
      setFieldValue,
      handleChange,
      handleBlur,
      resetForm,
      handleSubmit,
      touched,
    } = useFormik({
      initialValues: {
        file: { uri: null, name: "" },
        message: "",
      },
      onSubmit: async (values:any) => {
        try {
          // const payload = {
        console.log(values)
          //       uri: values.file.uri,
          //       // type: "application/pdf",
          //       // name: values.file.name,
          // };
          await dispatch(Reissuance_Certificate(values));
          resetForm(); // Reset the form after submission
        } catch (error) {
          console.error(error);
        }
      }
    });

    const pickDocument = async (): Promise<void> => {
      let result = await DocumentPicker.getDocumentAsync({});
      if (!result.cancelled) {
        const file = { uri: result.uri, name: result.name };
        setFieldValue("file", file);
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
            {errors.file && <Text style={styles.error}>{errors.file}</Text>}
            {values.file.name ? (
              <Text>Selected file 1: {values.file.name}</Text>
            ) : null}
            <View style={styles.documentPicker}>
              <Text style={styles.text}>Attach Membership Receipt</Text>
              <Ionicons
                name="link-sharp"
                size={24}
                onPress={() => pickDocument()}
              />
            </View>
            {/* <TextInput
              style={styles.input}
              onChangeText={handleChange("message")}
              onBlur={handleBlur("message")}
              value={values.message}
              multiline={true}
              numberOfLines={10}
              placeholder="Enter your message "
            /> */}
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
