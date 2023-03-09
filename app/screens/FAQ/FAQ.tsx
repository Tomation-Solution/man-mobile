import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik, Field } from 'formik'
import { COLORS } from "../../constants/color";


interface FAQProps {
    question: any;
    answer: any;
}


const FAQ = ({ question, answer }: FAQProps) => {
    const [expanded, setExpanded] = useState(false);

    return (


        <View style={styles.container}>

            <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.questionContainer}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: StyleSheet.hairlineWidth, }}>
                    <Text style={[styles.question, expanded && styles.activeQuestion]}>{question}</Text>
                    <Text style={styles.sign}>{expanded ? '-' : '+'}</Text>
                </View>
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
        justifyContent: 'center',
        display: 'flex',
        paddingHorizontal: 10


    },
    question: {
        fontWeight: '500',
        flex: 1,
        fontSize: 15,
        paddingBottom: 10,
    },
    activeQuestion: {
        color: COLORS.primary


    },
    sign: {
        marginHorizontal: 10,
        borderColor: '#4ECB71',
        borderRadius: 200,
        borderWidth: 1,
        color: '#4ECB71',
        width: 40,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    answer: {
        paddingVertical: 10,
        paddingLeft: 3,
        color: '#000022',
        shadowOpacity: 0.7,
        fontSize: 14,
        lineHeight: 16
    },
});

export default FAQ;
