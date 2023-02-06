import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import React, { useState } from "react";

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
          padding: 20,
          backgroundColor: " rgba(0, 0 , 0, 0.7) ",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({});
