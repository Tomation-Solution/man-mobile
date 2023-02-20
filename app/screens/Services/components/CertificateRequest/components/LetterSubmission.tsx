import React, { useState, useCallback } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

import * as DocumentPicker from "expo-document-picker";
import { Globalstyles } from "../../../../../globals/styles";
import { COLORS } from "../../../../../constants/color";
import { verticalScale } from "../../../../../constants/metric";

const FileSubmission = ({ onPress, fileName }: any) => {
  const [fileResponse, setFileResponse] = useState({});

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.getDocumentAsync({});
      setFileResponse(response);

      console.log(response);
      console.log(fileResponse);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <View style={Globalstyles.modalContainer}>
      <Text>Upload {fileName}</Text>
      <TouchableOpacity
        style={{
          borderColor: COLORS.primary,
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          alignItems: "center",
          marginTop: verticalScale(20),
        }}
        onPress={handleDocumentSelection}
      >
        <Text
          style={{
            color: COLORS.primary,
            fontWeight: "500",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Select 📑
        </Text>
      </TouchableOpacity>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            borderColor: COLORS.primary,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
          onPress={onPress}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "500",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Close
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
            flex: 1,
            marginLeft: 20,
          }}
          activeOpacity={0.8}
          onPress={onPress}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FileSubmission;

const styles = StyleSheet.create({
  button: {
    marginTop: verticalScale(20),
    backgroundColor: COLORS.primary,
  },
});
