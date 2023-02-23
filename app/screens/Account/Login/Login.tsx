import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  AccountHeader,
  Formbtn,
  KeyboardAvoidingViewWrapper,
  FormContainer,
  FormInput,
  CustomModal,
} from "../../../components";
import { Formik, Field } from "formik";
import Locked from "../components/LockedWithPayment";

import { login } from "../../../store/slices/auth/loginSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loginValidationSchema } from "../../../utils/validation";

const LoginForm = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  const onModalPress = () => {
    setModalVisible(!modalVisible);
  };

  const { loading } = useAppSelector((state) => state.authReducers.login);

  return (
    <>
      <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
        <Locked onPress={onModalPress} />
      </CustomModal>

      <KeyboardAvoidingViewWrapper>
        <View style={{ paddingVertical: 90 }}>
          <View
            style={{
              paddingHorizontal: 25,
              paddingVertical: 10,
            }}
          >
            <AccountHeader
              title=" Login"
              text="Input details to register as alumnus"
            />
          </View>

          <FormContainer>
            <View style={[styles.card, styles.shawdowProp]}>
              <Formik
                // validationSchema={loginValidationSchema}
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={(values) => {
                  if (loading === false) dispatch(login(values));
                }}
              >
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={FormInput}
                      name="email"
                      placeholder="email"
                    />

                    <Field
                      component={FormInput}
                      name="password"
                      placeholder="password"
                    />

                    <Formbtn
                      style={[styles.btn]}
                      onPress={handleSubmit}
                      title={
                        loading ? (
                          <ActivityIndicator size="small" color="white" />
                        ) : (
                          "Login"
                        )
                      }
                    />
                  </>
                )}
              </Formik>

              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text style={styles.forgotPassword}> Forgot password?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("VerifyUser")}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Text style={styles.register}> Don't have an account? </Text>
                <Text style={styles.registerText}> Register</Text>
              </TouchableOpacity>
            </View>
          </FormContainer>
        </View>
      </KeyboardAvoidingViewWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffff",
    borderRadius: 8,
    paddingVertical: 38,
    paddingHorizontal: 20,
    width: "100%",
    marginVertical: 10,
    paddingBottom: 25,
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
    marginVertical: 30,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },

  forgotPassword: {
    color: "rgba(0,0,34,0.6)",
    paddingVertical: 15,
    fontWeight: "300",
  },
  register: {
    paddingHorizontal: 30,
    marginTop: 10,
    color: "rgba(0,0,34,0.6)",
  },
  registerText: {
    position: "relative",
    right: 31,
    top: 10,
    fontWeight: "700",
    color: "#2b3513",
  },
});

export default LoginForm;
