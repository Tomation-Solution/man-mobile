import React, { useCallback} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';


interface DropDownProps{
  data:any
  defaultButtonText:any
  buttonStyle:any
  buttonTextStyle:any
  setSelectedItem:any
  searchPlaceHolder:any,
  dropdownIconPosition:any
  dropdownIconColor :any
  dropdownIconSize :any
  defaultValue:any

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
    dropdownIconSize = 25,
    defaultValue,
}:DropDownProps) {
  const onSelect = useCallback(
    (item, i) => setSelectedItem(item),
    [setSelectedItem]
  );
  return (
    <SelectDropdown
       data={data}
       onSelect={onSelect}
       defaultButtonText={defaultButtonText}
       buttonStyle={{
        backgroundColor: "#E8F6F8",
        width: 280,
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        ...buttonStyle,

       }}
       defaultValue={defaultValue}
       renderDropdownIcon={() => (
          <AntDesign
            name="down"
            size={dropdownIconSize}
            color={dropdownIconColor}
          />
       )}
       dropdownIconPosition={dropdownIconPosition}
    />
  );
}
