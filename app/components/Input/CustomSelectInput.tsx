import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { moderateScale } from "../../constants/metric";

const SelectInput = ({
  value,
  data,
  onChange,
  label,
}: {
  value: string;
  data: { label: string; value: string }[];
  onChange: (item: { label: string; value: string }) => void;
  label?: string;
}) => {
  return (
    <View style={{ marginTop: moderateScale(12) }}>
      {label && (
        <Text
          style={{
            fontSize: moderateScale(13),
            marginBottom: moderateScale(5),
          }}
        >
          {label}
        </Text>
      )}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={onChange}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color="black"
        //     name="Safety"
        //     size={20}
        //   />
        // )}
      />
    </View>
  );
};

export default SelectInput;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
