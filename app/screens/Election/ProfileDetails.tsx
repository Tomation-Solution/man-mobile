import { View, Text, StyleSheet } from 'react-native'
import React,{useEffect} from 'react'
import { ProfileViewCard, HomeHeader, Container } from '../../components';
import { images } from "../../assets/dummyData";
import { ScrollView } from "react-native-gesture-handler";
import { list_of_Contestant } from '../../store/slices/elections/getelectionSlice';
import { useAppDispatch, useAppSelector } from "../../store/hooks";


interface ProfileDetailsProps {
    route: any;
    navigation: any;
}



const ProfileDetails = ({ navigation }: ProfileDetailsProps) => {
    const dispatch = useAppDispatch();

    const { isLoggedIn } = useAppSelector((state) => state.authReducers.login);
    const { contestantData, loading } = useAppSelector(
        (state) => state.electionReducers.getelectionSlice
      )
     console.log('this is profile details',contestantData?.data[0].member)

    useEffect(() => {
        dispatch(list_of_Contestant());
      }, [dispatch]);

    return (
        <Container>
            <HomeHeader navigation={navigation} title={"Election"} />
            <Text style={styles.electionTitle}> mr kunle an Aspirant for the position of  President .Man</Text>

            <ScrollView>
                {contestantData?.data.map((profile:any) => (
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



