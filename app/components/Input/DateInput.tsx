import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  Platform,
} from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { moderateScale } from "../../constants/metric";
import { Text } from "react-native";

type InputProps = {
  placeholder: string;
  secureTextEntry?: boolean;
  label?: string;
  onChangeText: any;
} & TextInputProps;

const DateInput: React.FC<InputProps> = ({
  label,
  placeholder,
  secureTextEntry,
  onChangeText,

  ...rest
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    if (Platform.OS === "android") {
      const formattedDate = currentDate.toISOString();
      onChangeText(formattedDate.split("T")[0]); // Pass the selected date as the argument to onChangeText
    }
  };

  const showMode = (currentMode: any) => {
    // if (Platform.OS === "android") {
    //   setShow(false);
    //   // for iOS, add a button that closes the picker
    // }
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <Pressable
      onPress={showDatepicker}
      style={{ marginTop: moderateScale(10) }}
    >
      {label && (
        <Text
          style={{
            fontSize: moderateScale(14),
          }}
        >
          {label}
        </Text>
      )}
      <View
        style={{
          position: "relative",
          flexDirection: "row",
          alignItems: "center",

          borderRadius: moderateScale(10),
          borderWidth: moderateScale(1),
          borderColor: "#ccc",
          marginTop: moderateScale(4),
        }}
      >
        <TextInput
          editable={false}
          value={date.toLocaleDateString() || ""}
          style={{
            flex: 1,
            paddingHorizontal: moderateScale(10),
            paddingVertical: moderateScale(10),
            fontSize: moderateScale(16),
            color: "#000",
          }}
          placeholder={placeholder}
          {...rest}
        />

        <Pressable
          style={{
            position: "absolute",
            right: moderateScale(10),
            //   top: moderateScale(10),
          }}
          onPress={showDatepicker}
        >
          <Ionicons
            name="calendar-outline"
            size={moderateScale(18)}
            color={"#000"}
          />
        </Pressable>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            onChange={onChange}
            display="spinner"
          />
        )}
      </View>
    </Pressable>
  );
};

export default DateInput;
