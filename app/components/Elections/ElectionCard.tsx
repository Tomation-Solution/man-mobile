import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../Container'
import { horizontalScale, verticalScale } from "../../constants/metric";



const ElectionCard = ({ id, position }: any) => {
    return (
        <View style={styles.containerflex}>

            <View style={styles.contianer}>
                <Text> Position: {id}</Text>
                <Text> {position}</Text>

                <View style={styles.rowSection} >
                    <TouchableOpacity style={styles.asipirantbtn}>
                        <Text style={styles.btnText}> See Asipirants</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.votingbtn}>
                        <Text style={styles.btnText}> See Voting Stat</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default ElectionCard

const styles = StyleSheet.create({
    containerflex: {
        flex: 0.1
    },
    contianer: {
        flex: 0.9,
        flexDirection: 'row',
        alignItems: 'center',

    },
    rowSection: {
        flex: 1,
        flexDirection: 'row',
    },
    asipirantbtn: {
        width: 96,
        height: 34,
        backgroundColor: '#2b3513',
        borderRadius: 4

    },
    votingbtn: {
        width: 96,
        height: 34,
        borderColor: '#2b3513',
        borderRadius: 4,
        borderWidth: 1
    },
    btnText: {
        fontSize: 10
    }



});
