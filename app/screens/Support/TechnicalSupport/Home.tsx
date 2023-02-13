import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Picker from '@react-native-picker/picker';

const TechnicalSupport = () => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Email');

  const data = [
    { label: 'Email', value: 'Email' },
    { label: 'Message', value: 'Message' },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setDropdownVisibility(!isDropdownVisible)}>
        <Ionicons name="ios-mail" size={24} color="#000" />
      </TouchableOpacity>
      {isDropdownVisible && (
        <Formik
          initialValues={{ email: '', message: '' }}
          validationSchema={Yup.object({
            email: Yup.string().email().required(),
            message: Yup.string().required(),
          })}
          onSubmit={(values, actions) => {
            // TODO: Implement submit logic
            console.log(values);
            actions.resetForm();
            setDropdownVisibility(false);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.dropdownContainer}>
              <TouchableOpacity onPress={() => setDropdownVisibility(false)}>
                {/* <Picker
                  selectedValue={selectedValue}
                  style={styles.picker}
                  onValueChange={(value) => setSelectedValue(value)}
                >
                  {data.map((item) => (
                    <Picker.Item label={item.label} value={item.value} key={item.value} />
                  ))}
                </Picker> */}
              </TouchableOpacity>
              {(values.email !== '' || values.message !== '') && (
                <View>
                  <Text style={styles.label}>Email:</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
                  <Text style={styles.label}>Message:</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('message')}
                    onBlur={handleBlur('message')}
                    value={values.message}
                    multiline={true}
                    numberOfLines={4}
                  />
                  {errors.message && touched.message ? <Text>{errors.message}</Text> : null}
<TouchableOpacity style={styles.button} >
  <Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
</View>
)}
</View>
)}
</Formik>
)}
</View>
);
};

export default  TechnicalSupport


const styles = StyleSheet.create({
container: {
alignItems: 'center',
justifyContent: 'center',
},
dropdownContainer: {
position: 'absolute',
top: 40,
left: 20,
right: 20,
backgroundColor: '#fff',
borderWidth: 1,
borderColor: '#ccc',
padding: 10,
},
picker: {
height: 50,
},
label: {
marginTop: 10,
fontWeight: 'bold',
},
input: {
height: 40,
borderColor: 'gray',
borderWidth: 1,
marginTop: 5,
padding: 5,
},
button: {
backgroundColor: 'blue',
padding: 10,
marginTop: 10,
alignItems: 'center',
},
buttonText: {
color: '#fff',
fontWeight: 'bold',
},
});

