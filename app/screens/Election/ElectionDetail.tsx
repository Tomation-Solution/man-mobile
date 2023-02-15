import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from 'react-native'
import { useEffect, useState } from 'react'
import { Container, HomeHeader } from '../../components';
import * as Progress from 'react-native-progress';
import { COLORS } from "../../constants/color";



interface ElectionDetailsProps {
    route: any;
    navigation: any;
}

const ElectionDetail = ({ navigation, route }: ElectionDetailsProps) => {
    const profile = route.params.profile;

    const [progress, setProgress] = useState(1);


    return (
        <ScrollView>

            <Container>
            <HomeHeader
                    navigation={navigation}
                    title={profile.title || "Details " + profile.id}
                    back={navigation.goBack}
                />

                        <Text style={styles.electionTitle}> {profile.name} an Aspirant for the position of {profile.position}.Man</Text>
                        <View style={styles.newsCabinet}>
                    <View style={styles.newsImageActionContainer}>
                    <View style={styles.newsImageContainer}>
                            <Image
                                source={profile.images[1]}
                                resizeMode="cover"
                                style={{ width: "100%", height: 200 }}
                            />
                        </View>
                        </View>
                        </View>




                <View style={styles.containerflex}>
              <View style={styles.contianer}>
                                              <Progress.Bar
                                        width={300}
                                        height={20}
                                        progress={progress}
                                        color={'#5cb85c'}
                                        borderRadius={5}
                                        borderColor={'#5cb85c'}
                                    />
        </View>

        <View style={styles.rowSection}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('VoteStat')}
             style={styles.votingbtn}
            >
            <Text style={styles.voteText}>  Vote</Text>
          </TouchableOpacity>

            <Text style={styles.voteProgress}> {`${(progress * 2).toFixed(0)}% of 100% (200 Votes)`} </Text>
        </View>
      </View>




                        <View style={styles.electionrow}>
                            <View>
                                <Text style={styles.Bio}> Bio</Text>
                                <Text style={styles.biotext}> {profile.name} an Aspirant for the position of {profile.position}.Man
                                {profile.description}
                                 </Text>
                            </View>
                        </View>


                    <View style={styles.detailssection}>
                        <Text style={styles.sectiontitle} > Manifesto</Text>
                        <Text style>{profile.description} </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, lineHeight: 18, color: '#2b3513', marginVertical: 5, fontWeight: '600', textAlign: 'left' }}> Download full Manifesto</Text>
                        </TouchableOpacity>
                    </View>


            </Container>
        </ScrollView>

    )
}

export default ElectionDetail

const styles = StyleSheet.create({
    newsCabinet: {
        marginVertical: 15,
        shadowColor: "black",
        backgroundColor: "white",
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
    newsImageActionContainer: {
        position: "relative",
    },
    newsImageContainer: {
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        overflow: "hidden",
        position: "relative",
    },
    electionTitle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18,
    },
    ElectionBody: {
        flex: 1,
        flexDirection: 'column',
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
        flexDirection: 'column',
        flex: 0.5,
        backgroundColor:COLORS.primary,
        color:'#fff',
        borderRadius:10

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

    btnText: {
        fontSize: 11,
        textAlign: 'center',
        fontWeight: '500'
    },
    votesection: {
    },
    Bio: {
        fontWeight: '400',
        fontSize: 20,
        color:'#fff',
        textAlign:'center'

    },
    biotext: {
        fontSize: 11,
        textAlign: 'center',
        lineHeight:19,
        color:'#fff',
        padding:5,

    },
    sectiontitle: {
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
        marginVertical: 10

    },
    sectiontxt: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 20,
    },
    containerflex: {
        borderRadius: 4,
        padding: 10,
        marginVertical: 10,
      },
      contianer: {},
      rowSection: {
        alignSelf: "flex-end",
        flexDirection:'row-reverse',
        alignItems: "center",
      },
      asipirantbtn: {
        backgroundColor: "#2b3513",
        borderRadius: 4,
        borderColor: "#2b3513",
        borderWidth: 1,
        padding: 5,
        marginLeft: 10,
      },
      votingbtn: {
        marginVertical:10,
        borderColor: "#2b3513",
        borderRadius: 4,
        borderWidth: 1,
        paddingHorizontal:30,
        paddingVertical:3,
        marginLeft:10,
      },
      voteText:{
        color: "#2b3513",
        fontSize: 12,
        textAlign: "center",
        fontWeight: "500",
            },
            voteProgress:{

            },

      color: {
        color: "white",
      },



});
