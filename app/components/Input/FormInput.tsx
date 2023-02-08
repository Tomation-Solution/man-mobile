<<<<<<< HEAD
import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const FormInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]


  return (
    <>

      <TextInput
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
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
=======
import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const FormInput = (props) => {
    const {
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        ...inputProps
    } = props

    const hasError = errors[name] && touched[name]


    return (
        <>

            <TextInput
                style={[styles.textInput, hasError && styles.errorInput]}
                value={value}
                onChangeText={(text) => onChange(name)(text)}
                onBlur={() => {
                    setFieldTouched(name)
                    onBlur(name)
                }}
                {...inputProps}
            />
            {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}

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
>>>>>>> 82554832a754210e0e7b75e124072cb9bf197b47
