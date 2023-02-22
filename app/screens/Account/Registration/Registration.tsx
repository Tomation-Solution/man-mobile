import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ActivityIndicator,
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
import { register } from "../../../store/slices/auth/registerationSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import {signUpValidationSchema} from '../../../utils/validation'


interface RegistrationValues {
  fullName: string;
  email: string;
  userName: string;
  password: string,
  phoneNumbers: number;
  department: string;
  graduationYear: string,
  chapter: string,
}

const Registration = ({ navigation }: any) => {

const initialValues: RegistrationValues = {
  fullName: '',
  email: '',
  userName: '',
  password: '',
  phoneNumbers: 0,
  department: '',
  graduationYear: '',
  chapter: '',
}
  const [modalVisible, setModalVisible] = useState(true);
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.authReducers.login);

  const handleSubmit = async (values: RegistrationValues, { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void, resetForm: () => void }) => {
    const { fullName, userName, password, phoneNumbers, department, graduationYear, chapter } = values;
    await dispatch(register({ data: { fullName, userName, password, phoneNumbers, department, graduationYear, chapter }}));
    console.log(values);
    setSubmitting(false);
    resetForm();
  };


  const onModalPress = () => {
    setModalVisible(!modalVisible);
  };
  <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
    <Locked onPress={onModalPress} />
  </CustomModal>;

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
            title="  Registration"
            text=" Input details to register as alumnus"
          />
        </View>

        <FormContainer>
          <View style={[styles.card, styles.shawdowProp]}>
            <Formik
            initialValues={initialValues}
              validationSchema={signUpValidationSchema}
              onSubmit={handleSubmit}>

              {({ isSubmitting}) => (
                <>
                  <Field
                    component={FormInput}
                    name="fullName"
                    placeholder="Full name"
                    type="text"
                  />
                  <Field
                    component={FormInput}
                    name="email"
                    placeholder="Email address"
                    type="email"
                  />
                  <Field
                    component={FormInput}
                    name="userName"
                    placeholder="Username"
                    type="text"
                  />
                  <Field
                    component={FormInput}
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      paddingVertical: 21,
                    }}
                  >
                    <View
                      style={{
                        width: "45%",
                        flexDirection: "column",
                        display: "flex",
                      }}
                    >
                      <Field
                        component={FormInput}
                        name="phoneNumber"
                        placeholder="Phone number"
                        type="tel"
                      />
                      <Field
                        component={FormInput}
                        name="department"
                        placeholder="Department"
                        type="text"
                      />
                    </View>
                    <View style={{ width: "50%", marginLeft: 15 }}>
                      <Field
                        component={FormInput}
                        name="graduationYear"
                        type="number"
                        placeholder="Graduation year"
                      />
                      <Field
                        component={FormInput}
                        name="chapter"
                        placeholder="Chaper"
                        type="number"
                      />
                    </View>
                  </View>

                  <Formbtn
                    style={[styles.btn]}
                    title={ loading? (
                      <ActivityIndicator size="small" color="white" />
                    ): (
                      "Login"
                     )}
                     disabled={isSubmitting}
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
    color: "#2B3513",
  },
  heading: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21.86,
    color: "rgba(0,0,34,0.41)",
  },
  btn: {
    marginVertical: 15,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
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
    color: "#2b3513",
    fontSize: 13,
  },
});

export default Registration;

