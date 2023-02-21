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

    // const profiledata = route.params.data;

    const data = [
        {
            id: 1,
            position: " President ",
            name: 'mr Kunle',
            title: " Election",
            images: [images.meeting_1, images.meeting_2, images.meeting_3],
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",

        },
        {
            id: 2,
            position: " Secretary ",
            name: 'mr Kunle',
            title: " Election",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
            images: [images.meeting_1, images.meeting_2, images.meeting_3],

        },
        {
            id: 3,
            position: " manager",
            name: 'mr Kunle',
            title: " Election",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
            images: [images.meeting_1, images.meeting_2, images.meeting_3],

        },
        {
            id: 4,
            position: " President ",
            name: 'mr Kunle',
            title: " Election",
            images: [images.meeting_1, images.meeting_2, images.meeting_3],

            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",

        },
        {
            id: 5,
            position: " President ",
            name: 'mr Kunle',
            title: " Election",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
            images: [images.meeting_1, images.meeting_2, images.meeting_3],

        },
        {
            id: 6,
            position: " President ",
            name: 'mr Kunle',
            title: " Election",

            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
            images: [images.meeting_1, images.meeting_2, images.meeting_3],

        },
        {
            id: 7,
            position: " President ",
            name: 'mr Kunle',
            title: " Election",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
            images: [images.meeting_1, images.meeting_2, images.meeting_3],

        },
        {
            id: 8,
            position: " President ",
            name: 'mr Kunle',
            title: " Election",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",

            images: [images.meeting_1, images.meeting_2, images.meeting_3],

        },
        {
            id: 9,
            position: " President ",
            title: " Election",
            name: 'mr Kunle',
            images: [images.meeting_1, images.meeting_2, images.meeting_3],

            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
        },
        {
            id: 10,
            position: " President ",
            title: " Election",
            name: 'mr Kunle',
            images: [images.meeting_1, images.meeting_2, images.meeting_3],

            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
        },

        {
            id: 11,
            position: " President ",
            title: " Election",
            name: 'mr Kunle',
            images: [images.meeting_1, images.meeting_2, images.meeting_3],

            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
        },

    ]

    return (
        <Container>
            <HomeHeader navigation={navigation} title={"Election"} />
            <Text style={styles.electionTitle}> mr kunle an Aspirant for the position of  President .Man</Text>

            <ScrollView>
                {data.map((profile) => (
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



