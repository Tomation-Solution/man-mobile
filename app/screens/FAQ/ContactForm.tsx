import React from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';
import { Formik } from 'formik';
import { Formbtn } from '../../components';


const ContactForm = () => (
    <Formik
        initialValues={
            {
                email: '',
                name: '',
                message: '',
            }
        }
        onSubmit={values => {
            // Implement your submit handler here
            console.log(values);
        }}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.container}>
                <Text style={{ fontSize: 16, lineHeight: 22, fontWeight: '600', textAlign: 'center' }}> Contact</Text>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="Email"
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        placeholder="Name"
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Message:</Text>
                    <TextInput
                        style={styles.inputmessage}
                        onChangeText={handleChange('message')}
                        onBlur={handleBlur('message')}
                        value={values.message}
                        placeholder="Message"
                    />
                </View>
                <View style={styles.submitButton}>
                    < Formbtn
                        title="Submit"
                        onPress={handleSubmit}
                        style={[styles.btn]}
                        textStyles={[styles.btnText]}
                    />
                </View>
            </View>
        )}
    </Formik>
);

const styles = StyleSheet.create({
    container: {
        padding: 9,
    },
    formGroup: {
        marginVertical: 3,
    },
    label: {
        fontWeight: '600',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#E6E6E6',
        padding: 10,
        fontSize: 12,
    },
    inputmessage: {
        backgroundColor: '#E6E6E6',
        padding: 10,
        fontSize: 12,
        height: 90
    },
    btn: {
        width: 112,
        justifyContent: 'center',

    },
    btnText: {
        textAlign: 'center',
        fontSize: 13
    },
    submitButton: {
        marginTop: 20,
    },
});

export default ContactForm;
