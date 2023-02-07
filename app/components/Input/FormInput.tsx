import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const FormInput = (props) => {
  const {
    field,
    customstyles,
    form,
    ...inputProps
  } = props;

  const hasError = form && form.errors[field.name] && form.touched[field.name];

  return (
    <>
      <TextInput
        style={[customstyles, styles.textInput, hasError && styles.errorInput]}
        value={field ? field.value : inputProps.value}
        onChangeText={(text) => {
          if (field) {
            field.onChange(text);
          } else {
            inputProps.onChange(text);
          }
        }}
        onBlur={() => {
          if (field) {
            form.setFieldTouched(field.name);
            field.onBlur(field.name);
          } else {
            inputProps.onBlur();
          }
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{form.errors[field.name]}</Text>}
    </>
  );
};


const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#9DA292',
    height: 35,
    color: 'rbga(0,0,18, 0.16)',
    borderRadius: 8,
    fontSize: 15,
    paddingLeft: 6,

  },
  textInput: {
    height: 55,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 15,



  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  }

});

export default FormInput;
