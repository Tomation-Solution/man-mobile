import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
    },
    questionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    question: {
        fontWeight: 'bold',
        flex: 1,
    },
    activeQuestion: {
        backgroundColor: '#107382',
    },
    sign: {
        marginHorizontal: 10,
    },
    answer: {
        paddingLeft: 20,
    },
});

export default FAQ;
