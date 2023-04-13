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

  const user_data = validationData?.data[0]?.user;

  useEffect(() => {
    if (registrationStatus) {
      navigation.navigate("Login");
    }
  }, [registrationStatus]);

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
            text="Input details to register as Member"
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
                name: yup.string().required().label("Name"),
                password: yup.string().required().min(6).label("Password"),
                GSM: yup.string().required().min(11).label("Phone number"),

                MEMBERSHIP_NO: yup
                  .string()
                  .required()
                  .label("Membership number"),
              })}
              initialValues={{
                name: user_data?.name || "",
                password: "",
                rel8Email: "",
                GSM: user_data?.GSM || "",
                EMAIL: user_data?.EMAIL,
                POSITION_HELD: user_data?.POSITION_HELD,
                MEMBERSHIP_GRADE: user_data?.MEMBERSHIP_GRADE || "",
                MEMBERSHIP_NO: data,
                TITLE: user_data?.TITLE,
              }}
              onSubmit={(values) => handleRegister(values)}
            >
              {({ handleSubmit, isValid }) => (
                <>
                  <Field
                    component={FormInput}
                    name="name"
                    placeholder="Full name"
                    editable={false}
                  />
                  <Field
                    component={FormInput}
                    name="GSM"
                    placeholder="Phone number"
                    editable={false}
                  />
                  <Field
                    component={FormInput}
                    name="MEMBERSHIP_GRADE"
                    placeholder="Membership Grade"
                    editable={false}
                  />

                  <Field
                    component={FormInput}
                    name="MEMBERSHIP_NO"
                    placeholder="Membership number"
                    editable={false}
                  />
                  <Field
                    component={FormInput}
                    name="rel8Email"
                    placeholder="Email address"
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
