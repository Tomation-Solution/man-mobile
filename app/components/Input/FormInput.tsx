import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { normalize } from "../../constants/metric";
import { Ionicons } from "@expo/vector-icons";

const FormInput = (props: any) => {
  const {
    handlePasswordVisibility,
    hidePassword,
    isSecureEntry,
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          borderBottomWidth: 1,
          borderColor: "#9DA292",
          height: 35,

          marginBottom: 10,
        }}
      >
        <TextInput
          style={[
            {
              color: "rbga(0,0,18, 0.16)",
              fontSize: normalize(14),
              flex: 1,
            },
            hasError && styles.errorInput,
          ]}
          value={value}
          secureTextEntry={hidePassword}
          onChangeText={(text) => onChange(name)(text)}
          onBlur={() => {
            setFieldTouched(name);
            onBlur(name);
          }}
          {...inputProps}
        />

        {isSecureEntry && (
          <TouchableOpacity onPress={handlePasswordVisibility}>
            <Ionicons
              name={hidePassword ? "md-eye-off" : "md-eye"}
              size={normalize(18)}
              color="grey"
            />
          </TouchableOpacity>
        )}
      </View>
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#9DA292",
    height: 35,
    color: "rbga(0,0,18, 0.16)",
    borderRadius: 8,
    fontSize: normalize(15),
    paddingLeft: 6,
  },
  textInput: {
    height: 55,
    width: "100%",
    borderColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  errorText: {
    fontSize: normalize(10),
    color: "red",
  },
  errorInput: {
    borderColor: "red",
  },
});

export default FormInput;
