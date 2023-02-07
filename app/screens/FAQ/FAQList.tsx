import React from 'react';
import FAQ from './ FAQ';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
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
                    back={navigation.goBack()}
                />
                {faqs.map((faq, index) => (
                    <FAQ key={index} question={faq.question} answer={faq.answer} />
                ))}

                <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }} >
                    <Text style={{ fontSize: 16, lineHeight: 22, fontWeight: '600', }}> Contact</Text>

                    <View>



                        <FormInput
                            label="Email"
                            type="email"
                        // value={field.value}
                        // onChange={field.onChange}
                        // onBlur={field.onBlur}
                        // error={form.errors.email}
                        // touched={form.touched.email}
                        />




                    </View>

                </View>
            </Container>
        </ScrollView>
    );
};

export default FAQList;
