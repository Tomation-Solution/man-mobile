import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  AccountHeader,
  FormContainer,
  FormInput,
  Formbtn,
  KeyboardAvoidingViewWrapper,
  CustomModal,
} from "../../../components";
import Locked from "../components/LockedWithPay";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { createMember } from "../../../store/slices/auth/loginSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { COLORS } from "../../../constants/color";
import { Alert } from "react-native";

const Registration = ({ route, navigation }: any) => {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(true);

  const data = route?.params?.data;

  const onModalPress = () => {
    setModalVisible(!modalVisible);
  };
  <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
    <Locked onPress={onModalPress} />
  </CustomModal>;

  const handleRegister = (values: any) => {
    console.log(values);
    dispatch(createMember(values));
  };

  const { loading, error, validationData, registrationStatus } = useAppSelector(
    (state) => state.authReducers.login
  );

  const user_data = validationData.data[0]?.user;

  useEffect(() => {
    if (registrationStatus) {
      Alert.alert("Success", "Registration Succesful", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login"),
        },
      ]);
    }
    if (!data) {
      navigation.navigate("Login");
    }
  }, [registrationStatus, data]);

  return (
    <KeyboardAvoidingViewWrapper>
      <View style={{ paddingVertical: 50 }}>
        <View
          style={{
            paddingHorizontal: 25,
            paddingVertical: 1,
          }}
        >
          <AccountHeader
            title="Registration"
            text="Input details to register as alumnus"
          />
          {error && (
            <Text
              style={{
                color: "red",
                fontSize: 15,
              }}
            >
              {error}
            </Text>
          )}
        </View>

        <FormContainer>
          <View style={[styles.card, styles.shawdowProp]}>
            <Formik
              validationSchema={yup.object().shape({
                password: yup.string().required().min(6).label("Password"),
                rel8Email: yup.string().required().min(6).label("Email"),
                MEMBERSHIP_NO: yup
                  .string()
                  .required()
                  .label("Membership number"),
              })}
              initialValues={{
                MEMBERSHIP_NO: data,
                names: user_data?.names || "",
                email: "",
                cellular: user_data?.Cellular_Phone || "",
                "PHONE NUMBER": user_data?.["PHONE NUMBER"] || "",
                FACTORY_ADDRESS: user_data?.FACTORY_ADDRESS || "",
                "PRODUCTS MANUFACTURED":
                  user_data?.["PRODUCTS MANUFACTURED"] || "",
                SECTOR: user_data?.SECTOR || "",
                CLASSIFICATION: user_data?.CLASSIFICATION || "",
                "SUB-SECTOR": user_data?.["SUB-SECTOR"] || "",
                "TAX IDENTIFICATION NUMBER (TIN)":
                  user_data?.["TAX IDENTIFICATION NUMBER (TIN)"] || "",
                chapter: user_data?.chapter || "",
                "Web Page": user_data?.["Web Page"] || "",
                CAC_REGISTRATION_NUMBER:
                  user_data?.CAC_REGISTRATION_NUMBER || "",
                Telephone_1: user_data?.Telephone_1 || "",
                Telephone_2: user_data?.Telephone_2 || "",
                ADDRESS: user_data?.ADDRESS || "",

                password: "",
              }}
              onSubmit={(values) => handleRegister(values)}
            >
              {({ handleSubmit, isValid }) => (
                <>
                  <Field
                    component={FormInput}
                    name="MEMBERSHIP_NO"
                    placeholder="Membership number"
                    editable={false}
                  />
                  <Field
                    component={FormInput}
                    name="names"
                    placeholder="Names"
                  />
                  <Field
                    component={FormInput}
                    name="cellular"
                    placeholder="Cellular"
                  />
                  <Field
                    component={FormInput}
                    name="PHONE NUMBER"
                    placeholder="Phone number"
                  />
                  <Field
                    component={FormInput}
                    name="FACTORY_ADDRESS"
                    placeholder="Factory address"
                  />
                  <Field
                    component={FormInput}
                    name="PRODUCTS MANUFACTURED"
                    placeholder="Products manufactured"
                  />
                  <Field
                    component={FormInput}
                    name="SECTOR"
                    placeholder="Sector"
                  />
                  <Field
                    component={FormInput}
                    name="CLASSIFICATION"
                    placeholder="Classification"
                  />
                  <Field
                    component={FormInput}
                    name="SUB-SECTOR"
                    placeholder="Sub-sector"
                  />
                  <Field
                    component={FormInput}
                    name="TAX IDENTIFICATION NUMBER (TIN)"
                    placeholder="Tax identification number"
                  />
                  <Field
                    component={FormInput}
                    name="chapter"
                    placeholder="Chapter"
                  />
                  <Field
                    component={FormInput}
                    name="Web Page"
                    placeholder="Web page"
                  />
                  <Field
                    component={FormInput}
                    name="CAC_REGISTRATION_NUMBER"
                    placeholder="CAC registration number"
                  />
                  <Field
                    component={FormInput}
                    name="Telephone_1"
                    placeholder="Telephone 1"
                  />
                  <Field
                    component={FormInput}
                    name="Telephone_2"
                    placeholder="Telephone 2"
                  />
                  <Field
                    component={FormInput}
                    name="ADDRESS"
                    placeholder="Address"
                  />
                  <Field
                    component={FormInput}
                    name="rel8Email"
                    placeholder="Email"
                  />
                  <Field
                    component={FormInput}
                    name="password"
                    placeholder="Password"
                  />
                  <Formbtn
                    disabeld={loading}
                    style={[styles.btn]}
                    title="Register"
                    onPress={handleSubmit}
                  />
                </>
              )}
            </Formik>

            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Text style={styles.register}> Already have an account? </Text>
              <Text style={styles.login}> Login </Text>
            </TouchableOpacity>
          </View>
        </FormContainer>
      </View>
    </KeyboardAvoidingViewWrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffff",
    borderRadius: 8,
    paddingVertical: 22,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
  shawdowProp: {
    shadowColor: "#171717",

    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  Loginheading: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32.78,
    color: COLORS.primary,
  },
  heading: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21.86,
    color: "rgba(0,0,34,0.41)",
  },
  btn: {
    marginVertical: 15,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },

  register: {
    paddingHorizontal: 30,
    marginTop: 10,
    color: "rgba(0,0,34,0.6)",
    fontSize: 13,
  },
  login: {
    position: "relative",
    right: 31,
    top: 10,
    fontWeight: "700",
    color: COLORS.primary,
    fontSize: 13,
  },
});

export default Registration;
