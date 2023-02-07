import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik, Field } from 'formik'


interface FAQProps {
    question: any;
    answer: any;
}


const FAQ = ({ question, answer }: FAQProps) => {
    const [expanded, setExpanded] = useState(false);

    return (


        <View style={styles.container}>

            <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.questionContainer}>
                <Text style={[styles.question, expanded && styles.activeQuestion]}>{question}</Text>
                <Text style={styles.sign}>{expanded ? '-' : '+'}</Text>
            </TouchableOpacity>
            {expanded && <Text style={styles.answer}>{answer}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        display: 'flex',
        alignItems: 'center',

    },
    questionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        display: 'flex'

    },
    question: {
        fontWeight: '500',
        flex: 1,
        fontSize: 15,
        paddingBottom: 10
    },
    activeQuestion: {
        color: '#000022'

    },
    sign: {
        marginHorizontal: 10,
        borderColor: '#4ECB71',
        borderRadius: 200,
        borderWidth: 1,
        color: '#107382',
        width: 40,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    answer: {
        paddingLeft: 0,
        color: '#000022',
        shadowOpacity: 0.7,
        fontSize: 12,
        lineHeight: 16
    },
});

export default FAQ;
