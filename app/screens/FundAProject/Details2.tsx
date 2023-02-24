import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Container, HomeHeader, Dropdown } from "../../components";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants/metric";
import { Formik } from "formik";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../constants/color";
import { kindFunding } from "../../store/slices/Fund_A_Project/fundSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";



interface DetailsProps {
  route?: any;
  navigation?: any;
}

const Details2 = ({ route, navigation }: DetailsProps) => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (values { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void, resetForm: () => void }) => {
    const { heading } = values;
    await dispatch(register({ data: { fullName, userName, password, phoneNumbers, department, graduationYear, chapter }}));
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  const {loading} = useAppSelector(
    (state:any) => state.fundProjectReducers.fundProjectSlice
  );

  return (
    <Container style={styles.container}>
      <HomeHeader title="Fund a Project" navigation={navigation} back="back" />
      <View style={styles.inputContainer}>
        <Formik
          initialValues={{ message: "" }}
          validationSchema={Yup.object({
            message: Yup.string().required(),
            onsubmit={handleSubmit }
          })}
        >
          {({
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <View>
              <Text style={styles.headText}>Support in Kind</Text>
              <View style={styles.supportContainer}>
                <Dropdown defaultButtonText={"Support Type"} />
              </View>
              <TextInput
                 name='heading'
                style={styles.textInput}
                placeholder="Note"
                multiline={true}
                numberOfLines={10}
                onChangeText={handleChange("message")}
                onBlur={handleBlur("message")}
                value={values.message}
              />
              {errors.message && touched.message ? (
                <Text style={styles.error}>{errors.message}</Text>
              ) : null}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.button}
                 disabled={isSubmitting}
                >
                  <Text style={{ color: "white" }}>Support in Kind</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Container>
  );
};

export default Details2;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  headText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: moderateScale(24),
    marginTop: verticalScale(20),
  },
  inputContainer: {
    marginHorizontal: horizontalScale(10),
  },
  supportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E8F6F8",
    borderRadius: moderateScale(8),

    marginTop: horizontalScale(40),
  },
  text: {
    fontWeight: "400",
    fontSize: moderateScale(16),
    color: "#010001",
  },
  textInput: {
    alignContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#E8F6F8",
    marginTop: verticalScale(30),
  },
  button: {
    //width: horizontalScale(140),
    padding: moderateScale(16),
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(16),
    marginTop: verticalScale(40),
    marginHorizontal: "auto",
  },
  error: {
    color: "red",
  },
});
