import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const FormSubmitButton = ({ title, submitting, onPress, style }) => {
  const backgroundColor = submitting
    ? '#182005'
    : '#2B3513';

  return (
    <TouchableOpacity
      onPress={!submitting ? onPress : null}
      style={[styles.container,style ,{ backgroundColor }]}
    >
      <Text style={{ fontSize: 18, color: '#fff' }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default FormSubmitButton;
