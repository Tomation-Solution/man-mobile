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

        <Text style={styles.voteProgress}> {`${(progress * 2).toFixed(0)}% of 100% (200 Votes)`} </Text>

          <TouchableOpacity
            // onPress={() => navigation.navigate('VoteStat')}
             style={styles.votingbtn}
            >
            <Text style={styles.voteText}>  Vote</Text>
          </TouchableOpacity>

        </View>
      </View>




                        <View style={styles.electionrow}>
                            <View>
                                <Text style={styles.Bio}> Bio</Text>
                                <Text style={[styles.biotext,styles.color]}> {profile.name} an Aspirant for the position of {profile.position}.Man
                                {profile.description}
                                 </Text>
                            </View>
                        </View>


                    <View style={styles.detailssection}>
                        <Text style={styles.sectiontitle} > Manifesto</Text>
                        <Text style={styles.destailsText}>{profile.description} </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, lineHeight: 14, color: '#2b3513', marginVertical: 18, fontWeight: '500', paddingBottom:10,textDecorationLine:'underline' }}> Download full Manifesto</Text>
                        </TouchableOpacity>
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

    containerflex: {
        borderRadius: 4,
        padding: 10,
        marginVertical: 10,
      },
      contianer: {},
      rowSection: {
        // alignSelf: "flex-start",
        flexDirection:'column',
        alignItems: 'flex-start',
      },
      votingbtn: {
        marginVertical:10,
        borderColor: "#2b3513",
        borderRadius: 4,
        borderWidth: 1,
        paddingHorizontal:39,
        paddingVertical:8,
        marginLeft:10,
        backgroundColor:COLORS.primary,
        alignItems: 'flex-end',
        alignSelf:'flex-end',
        justifyContent:'flex-end',
      

      },
            
      voteText:{
        color: "#fff",
        fontSize: 12,
        textAlign: "center",
        fontWeight: "500",
        alignItems:'center'
            },
            voteProgress:{
                marginVertical:10,

// textAlign:'right'
            },
            electionrow: {
                flexDirection: 'column',
                flex: 0.5,
                backgroundColor:COLORS.primary,
                borderRadius:10,
                justifyContent:'flex-start',
                alignItems:'flex-start',

        
            },
            Bio: {
                fontWeight: '400',
                fontSize: 20,
                color:'#fff',
                textAlign:'justify'
        
            },
            biotext: {
                fontSize: 12,
                textAlign: 'justify',
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
            detailssection:{
           justifyContent:'center',
           alignItems:'flex-start',
           marginVertical:15
            },      
            color: {
                color: "white",
              },
              destailsText:{
                fontSize: 13 ,
                textAlign: 'justify',
                lineHeight:19,
                padding:4,
              },





});
