import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Globalstyles } from "../../../globals/styles";
import { COLORS } from "../../../constants/color";
import { TextInput } from "react-native-gesture-handler";

interface AppointProxyProps {
  onPress: any;
}

const AppointProxy = ({ onPress }: AppointProxyProps) => {
  return (
    <View style={Globalstyles.modalContainer}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        You won't be able to attend?
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        Appoint a Proxy
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: COLORS.primary,
          }}
        >
          (Optional)
        </Text>
      </Text>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Enter Proxy Full Name"
        />
        <TextInput style={styles.textInput} placeholder="Enter Proxy Email" />
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 10,
            flex: 1,
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
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
            marginTop: 10,
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
            Appoint
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppointProxy;

const styles = StyleSheet.create({
  container: {},
  textInput: {
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
});
