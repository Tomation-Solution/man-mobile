import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Container from '../Container'
import { horizontalScale, verticalScale } from "../../constants/metric";

interface ElectionsCardProps {
    id: number;
    position: string;
    onPress: () => void;
}


const ElectionCard = ({ id, position, onPress }: ElectionsCardProps) => {
    return (
        <ScrollView>
            <View style={styles.containerflex}>
                <View style={styles.contianer}>
                    <View style={{ flex: 0.5, flexDirection: 'row' }}>
                        <Text> Position: {id}</Text>
                        <Text> {position}</Text>
                    </View>

                    <View style={styles.rowSection} >
                        <TouchableOpacity onPress={onPress} style={styles.asipirantbtn}>
                            <Text style={[styles.btnText, styles.color]}> See Asipirants</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.votingbtn}>
                            <Text style={styles.btnText}> See Voting Stat</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ElectionCard

const styles = StyleSheet.create({
    containerflex: {
        flex: 1
    },
    contianer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    rowSection: {
        flex: 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    asipirantbtn: {
        paddingHorizontal: 3,
        paddingVertical: 11,
        backgroundColor: '#2b3513',
        borderRadius: 4,
        borderColor: '#2b3513',
        borderWidth: 1


    },
    votingbtn: {
        // width: 96,
        // height: 34,
        paddingHorizontal: 3,
        paddingVertical: 11,
        borderColor: '#2b3513',
        borderRadius: 4,
        borderWidth: 1
    },
    btnText: {
        fontSize: 11,
        textAlign: 'center',
        fontWeight: '500'
    },
    color: {
        color: 'white',
    }



});
