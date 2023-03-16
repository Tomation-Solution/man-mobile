import React, { useCallback } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { normalize } from "../../constants/metric";

interface DropDownProps {
  data: any;
  defaultButtonText: any;
  buttonStyle: any;
  buttonTextStyle: any;
  setSelectedItem: any;
  searchPlaceHolder: any;
  dropdownIconPosition: any;
  dropdownIconColor: any;
  dropdownIconSize: any;
  defaultValue: any;
}

export default function Dropdown({
  data,
  defaultButtonText,
  buttonStyle,
  buttonTextStyle,
  // searchPlaceHolder,
  setSelectedItem,
  dropdownIconPosition = "right",
  dropdownIconColor = "rgba(30, 30, 30, 0.41)",
  dropdownIconSize = 20,
  defaultValue,
}: any) {
  const onSelect = useCallback(
    (item: any, index: number) => setSelectedItem(item),
    [setSelectedItem]
  );
  return (
    <SelectDropdown
      data={data}
      onSelect={onSelect}
      defaultButtonText={defaultButtonText}
      buttonStyle={{
        backgroundColor: COLORS.icon,
        width: "100%",
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        ...buttonStyle,
      }}
      buttonTextStyle={{
        fontSize: normalize(13),
        fontWeight: "bold",
        ...buttonTextStyle,
      }}
      defaultValue={defaultValue}
      dropdownStyle={{
        backgroundColor: "white",
        width: "85%",
        borderRadius: 10,
      }}
      renderDropdownIcon={() => (
        <AntDesign name="down" size={20} color={"white"} />
      )}
      dropdownIconPosition={dropdownIconPosition}
    />
  );
}
