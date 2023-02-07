import React from 'react';
import FAQ from './ FAQ';
import { View, Text, TouchableOpacity } from 'react-native';


const FAQList = () => {
    const faqs = [
        {
            question: 'What is React Native?',
            answer: 'React Native is a framework for building native mobile apps using React.',
        },
        {
            question: 'What is React?',
            answer: 'React is a JavaScript library for building user interfaces.',
        },
    ];

    return (
        <View>
            {faqs.map((faq, index) => (
                <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
        </View>
    );
};

export default FAQList;
