import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  AccountHeader,
  Formbtn,
  FormContainer,
  FormInput,
  CustomModal,
  Container,
} from "../../../components";
import { Formik, Field } from "formik";
import Locked from "../components/LockedWithPayment";
import { login } from "../../../store/slices/auth/loginSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loginValidationSchema } from "../../../utils/validation";
import { normalize } from "../../../constants/metric";
import { COLORS } from "../../../constants/color";
import { appImages } from "../../../assets/app/images";

const LoginForm = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const [hidePassword, setHidePassword] = useState(true);

  const onModalPress = () => {
    setModalVisible(!modalVisible);
  };

  const { loading, error } = useAppSelector(
    (state) => state.authReducers.login
  );

  return (
    <>
      <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
        <Locked onPress={onModalPress} />
      </CustomModal>

      <Container>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: normalize(70),
              height: normalize(70),
            }}
            source={appImages.full_logo}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <AccountHeader
              title=" Login"
              text="Input details to register as alumnus"
            />
          </View>
          {error && (
            <Text style={{ color: "red", fontSize: normalize(12) }}>
              {error}
            </Text>
          )}

          <FormContainer>
            <View style={[styles.card, styles.shawdowProp]}>
              <Formik
                validationSchema={loginValidationSchema}
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
                      isSecureEntry={true}
                      hidePassword={hidePassword}
                      handlePasswordVisibility={() => {
                        setHidePassword(() => !hidePassword);
                      }}
                      name="password"
                      placeholder="password"
                    />

                    <Formbtn
                      style={[styles.btn]}
                      onPress={handleSubmit}
                      disabled={loading || !isValid}
                      title={
                        loading === true ? (
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
                <Text style={{}}>
                  {" "}
                  Don't have an account? <Text style={{}}> Register</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </FormContainer>
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffff",
    borderRadius: 8,
    paddingVertical: 38,
    paddingHorizontal: 20,
    marginVertical: 10,
    paddingBottom: 25,
    flex: 1,
  },
  shawdowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  Loginheading: {
    fontSize: normalize(24),
    fontWeight: "700",
    lineHeight: 32.78,
    color: COLORS.primary,
  },
  heading: {
    fontSize: normalize(14),
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
});

export default LoginForm;
