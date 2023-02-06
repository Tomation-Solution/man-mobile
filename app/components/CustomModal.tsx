import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Dimensions,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const CustomModal = ({ children, visible, onRequestClose }: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View
        style={{
          flex: 1,
          // padding: 20,
          backgroundColor: " rgba(0, 0 , 0, 0.7) ",
          alignItems: "center",
          justifyContent: "center",
          width: width,
        }}
      >
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({});
