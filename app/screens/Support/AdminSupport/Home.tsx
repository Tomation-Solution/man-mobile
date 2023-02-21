import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { Container, Formbtn, HomeHeader, Dropdown } from "../../../components";

const AdminSupport = ({ navigation }: any) => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  return (
    <Container>
      <HomeHeader
        navigation={navigation}
        back={navigation.goBack}
        title="Get Support"
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 13,
            lineHeight: 18,
            textAlign: "center",
            fontWeight: "400",
          }}
        >
          {" "}
          Please fill the necessary information to get your support needs
          attended to as soon as posible
        </Text>
        <TouchableOpacity
          style={styles.messagebtn}
          onPress={() => setDropdownVisibility(!isDropdownVisible)}
        >
          <Feather name="message-square" size={30} color="#fff" />
        </TouchableOpacity>

        {isDropdownVisible && (
          <Formik
            initialValues={{ email: "", message: "" }}
            validationSchema={Yup.object({
              email: Yup.string().email().required(),
              message: Yup.string().required(),
            })}
            onSubmit={(values, actions) => {
              // TODO: Implement submit logic
              console.log(values);
              actions.resetForm();
              setDropdownVisibility(false);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.dropdownContainer}>
                {/* <Text style={styles.label}>Email:</Text> */}
                <Dropdown />
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Email Address"
                />
                {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("message")}
                  onBlur={handleBlur("message")}
                  value={values.message}
                  multiline={true}
                  numberOfLines={5}
                  placeholder="Enter your message "
                />
                {errors.message && touched.message ? (
                  <Text style={styles.error}>{errors.message}</Text>
                ) : null}
                <Formbtn title="Get Support" />
              </View>
            )}
          </Formik>
        )}
      </View>
    </Container>
  );
};
export default AdminSupport;

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  dropdownContainer: {
    marginVertical: 15,
    backgroundColor: "#fff",
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8F6F8",
    paddingHorizontal: 9,
    paddingVertical: 13,
    marginVertical: 21,
    backgroundColor: "#E8F6F8",
    borderRadius: 9,
  },
  error: {
    color: "red",
  },
  messagebtn: {
    backgroundColor: "#2B3513",
    borderRadius: 100,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 450,
    marginHorizontal: 250,
  },
});
