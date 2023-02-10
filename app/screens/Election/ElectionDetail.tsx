import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Container, HomeHeader } from '../../components';


interface ElectionDetailsProps {
    route: any;
    navigation: any;
}

const ElectionDetail = ({ navigation, route }: ElectionDetailsProps) => {
    const Election = route.params.data;


    return (
        <Container>
            <HomeHeader
                navigation={navigation}
                title={Election.title || "Details " + Election.id}
                back={navigation.goBack}
            />
            <Text style={styles.electionTitle}> {Election.name} an Aspirant for the position of {Election.position}.Man</Text>
        </Container>
    )
}

export default ElectionDetail

const styles = StyleSheet.create({
    electionTitle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18

    }

});
