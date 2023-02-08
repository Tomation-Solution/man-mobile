import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Container } from "../../components";
import { AntDesign } from '@expo/vector-icons';
import { images } from "../../assets/dummyData";

const data = [
    {
        id: 1,
        title: " 7 hours ago ",
        description:
            "New message from Michael Ayinde",
        images: [images.meeting_1],
    },
    {
        id: 2,
        title: " 2 days ago",
        description:
            "New message from Michael Ayinde.",
        images: [images.meeting_1],
    },
    {
        id: 3,
        title: " 1 day ago",
        description:
            "2 New messages from Dozie Francis",
        images: [images.meeting_1],
    },
    {
        id: 4,
        title: " 1 day ago",
        description:
            "2 New messages from Dozie Francis",
        images: [images.meeting_1],
    },
    {
        id: 5,
        title: " 1 day ago",
        description:
            "2 New messages from Dozie Francis",
        images: [images.meeting_1],
    },
    {
        id: 6,
        title: " 1 day ago",
        description:
            "2 New messages from Dozie Francis",
        images: [images.meeting_1],
    },
]

const Events = () => {
    return (

        <View style={styles.container}>
            {data.map((gallery) => (
                <View key={gallery.id} style={styles.row}>
                    <View style={{ flexDirection: 'column', }}>
                        <Text style={{ fontSize: 14 }}> {gallery.description}</Text>
                        <Text style={{ fontSize: 11, marginVertical: 5, color: '#4d4d4d84' }}> {gallery.title}</Text>
                    </View>
                </View>
            ))}

        </View>
    );
};

export default Events;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 8,
        borderColor: '#4d4d4d84 ',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    controw: {
        flexDirection: 'row',
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'space-between'


    }

});
