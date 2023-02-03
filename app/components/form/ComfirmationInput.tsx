import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";


import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";


const CELL_COUNT = 4;

const ConfirmationInput = ({ setValue, value }) => {
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <View>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );

};
const styles = StyleSheet.create({
    // root: { marginTop: 50, },
    title: {
      textAlign: "center",
      fontSize: 20,
      color: "rgba(0, 176, 169, 0.72)",
    },
    // codeFieldRoot: { marginTop: 20 },
    cell: {
      width: 40,
      height: 40,
      fontSize: 24,
      borderWidth: 4,
      // marginTop: 40,
      borderColor: "#00000030",
      textAlign: "center",
      borderRadius: 2,
      marginVertical:20
    },
    focusCell: {
      borderColor: "#000",
    },
  });

export default ConfirmationInput;
