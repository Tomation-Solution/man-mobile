import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from 'react-native'
import { useEffect, useState } from 'react'
import { Container, HomeHeader } from '../../components';
import * as Progress from 'react-native-progress';



interface ElectionDetailsProps {
    route: any;
    navigation: any;
}

const ElectionDetail = ({ navigation, route }: ElectionDetailsProps) => {
    const profile = route.params.profile;
    // const [votesReceived, setVotesReceived] = useState(0);
    // const [totalVotes, setTotalVotes] = useState(0);
    const [progress, setProgress] = useState(1);

    // useEffect(() => {
    // setProgress((votesReceived / totalVotes) * 100);
    // }, [votesReceived, totalVotes]);



    return (
        <ScrollView>
            <Container>
                <HomeHeader
                    navigation={navigation}
                    title={profile.title || "Details " + profile.id}
                    back={navigation.goBack}
                />
                <Text style={styles.electionTitle}> {profile.name} an Aspirant for the position of {profile.position}.Man</Text>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={styles.ElectionBody}>
                        <View style={styles.Electioncolumn} >
                            <Image
                                style={styles.electionimg}
                                source={profile.images[2]}
                            />
                            <View style={styles.electionrow2}>
                                <TouchableOpacity style={styles.votingbtn}>
                                    <Text style={styles.btnText}> Vote</Text>
                                </TouchableOpacity>

                                <View style={{ marginLeft: 10 }} >
                                    <Progress.Bar
                                        width={86}
                                        height={12}
                                        progress={progress}
                                        color={'#5cb85c'}
                                        borderRadius={5}
                                        borderColor={'#5cb85c'}
                                    />
                                    <Text style={styles.text}>{`${(progress * 2).toFixed(0)}% of 100% (200 Votes)`}</Text>


                                </View>

                            </View>
                        </View>

                        <View style={styles.electionrow}>
                            <View>
                                <Text style={styles.Bio}> Bio</Text>
                                <Text style={styles.biotext}> {profile.name} an Aspirant for the position of {profile.position}.Man </Text>
                                <Text style={styles.biotext}> {profile.name} an Aspirant for the position of {profile.position}.Man </Text>
                                <Text style={styles.biotext}> {profile.name} an Aspirant for the position of {profile.position}.Man </Text>
                                <Text style={styles.biotext}> {profile.name} an Aspirant for the position of {profile.position}.Man </Text>
                                <Text style={styles.biotext}> {profile.name} an Aspirant for the position of {profile.position}.Man </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.detailssection}>
                        <Text style={styles.sectiontitle} > Manifesto</Text>
                        <Text>{profile.description} </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, lineHeight: 18, color: '#2b3513', marginVertical: 5, fontWeight: '600', textAlign: 'left' }}> Download full Manifesto</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.vidsection}>
                        <View>
                            <Image source={profile.images[2]} style={{ flex: 0.5, width: 150, height: 103, borderRadius: 10 }} />
                            <Text> </Text>
                        </View>
                        <View >
                            <Image source={profile.images[1]} style={{ flex: 0.5, width: 150, height: 103, borderRadius: 10 }} />
                            <Text> </Text>
                        </View>
                    </View>
                </View>
            </Container>
        </ScrollView>

    )
}

export default ElectionDetail

const styles = StyleSheet.create({
    electionTitle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18,
    },
    ElectionBody: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
    },
    text: {
        fontSize: 9,
        marginTop: 10,
        fontWeight: '700',
        lineHeight:10,
    },
    Electioncolumn: {
        flexDirection: 'column',
        flex: 0.6
    },
    electionrow: {
        flexDirection: 'row',
        flex: 0.5
    },
    electionrow2: {
        flexDirection: 'row',
        marginVertical: 10,
        flex: 0.5

    },
    electionimg: {
        width: 160,
        height: 191,
        borderRadius: 6,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    votingbtn: {
        // width: 96,
        // height: 34,
        paddingVertical: 11,
        borderColor: '#2b3513',
        borderRadius: 4,
        borderWidth: 1,
        paddingHorizontal: 20,
    },
    btnText: {
        fontSize: 11,
        textAlign: 'center',
        fontWeight: '500'
    },
    votesection: {
    },
    Bio: {
        fontWeight: '400',
        fontSize: 20
    },
    biotext: {
        fontSize: 11,
        textAlign: 'center',
        lineHeight:19,

    },
    sectiontitle: {
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'left',
        marginVertical: 10

    },
    sectiontxt: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 20,

    },
    vidsection: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    detailssection: {

    },

});
