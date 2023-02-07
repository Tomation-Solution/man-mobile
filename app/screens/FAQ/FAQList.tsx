import React from 'react';
import FAQ from './ FAQ';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Container, HomeHeader, FormInput, Formbtn } from '../../components';
import { Formik, Field } from 'formik'

// import { NavigationStackProp } from '@react-navigation/native';


// type Props = {
//     navigation: NavigationStackProp<any>;
// };


const FAQList = ({ navigation }: any) => {
    const faqs = [
        {
            question: 'What is React Native?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim..',
        },
        {
            question: 'What is React?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim..',
        },
        {
            question: 'What is React Native?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim..',
        },
        {
            question: 'What is React?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim..',
        },
        {
            question: 'What is React Native?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim..',
        },
        {
            question: 'What is React?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim..',
        },
    ];

    return (
        <ScrollView>
            <Container>
                <HomeHeader
                    title=' Frequently asked question '
                    navigation={navigation}
                // back={navigation.goBack()}
                />
                {faqs.map((faq, index) => (
                    <FAQ key={index} question={faq.question} answer={faq.answer} />
                ))}

                <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }} >
                    <Text style={{ fontSize: 16, lineHeight: 22, fontWeight: '600', }}> Contact</Text>

                    <View>




                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={(values, actions) => {
                                // Perform login logic here
                                console.log(values);
                                actions.resetForm();
                            }}
                        >
                            {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                                <>
                                    <Field name="email">
                                        {({ field }) => (
                                            <FormInput
                                                customstyles={[styles.update]}
                                                label="Email"
                                                type="email"
                                            // field={field}
                                            // form={{ errors, touched }}
                                            // placeholder='hlle'
                                            // onChange={handleChange}
                                            // onBlur={handleBlur}
                                            />
                                        )}
                                    </Field>
                                    {/* <Field name="password">
                                        {({ field }) => (
                                            <FormInput
                                                label="Password"
                                                type="password"
                                                field={field}
                                                form={{ errors, touched }}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        )}
                                    </Field> */}
                                    {/* <Button title="Login" onPress={handleSubmit} /> */}
                                </>
                            )}
                        </Formik>




                    </View>

                </View>
            </Container>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    update: {
        width: '100%',
        backgroundColor: '#000'
    }

})


export default FAQList;
