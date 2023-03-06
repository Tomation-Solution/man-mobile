import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ProfileViewCard, HomeHeader, Container } from '../../components';
import { images } from "../../assets/dummyData";
import { ScrollView } from "react-native-gesture-handler";


interface ProfileDetailsProps {
    route: any;
    navigation: any;
}




const ProfileDetails = ({ navigation, route }: ProfileDetailsProps) => {

    const profiledata = route.params.data;

console.log('INSIDE PROFILEDETAILS',profiledata)

    return (
        <Container>
            <HomeHeader navigation={navigation} title={"Election"} />
            <Text style={styles.electionTitle}> mr kunle an Aspirant for the position of  President .Man</Text>

            <ScrollView>
                {profiledata?.data?.map((profile:any) => (
                    <ProfileViewCard
                        key={profile.id}
                        item={profile}
                        onPress={() => navigation.navigate("ElectionDetails", { profile })} />
                ))}
            </ScrollView>
        </Container>
    )
}
const styles = StyleSheet.create({
    electionTitle: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18,
    },
})

export default ProfileDetails



