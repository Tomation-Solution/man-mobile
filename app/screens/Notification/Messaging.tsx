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

const Messaging = () => {
    return (

        <View style={styles.container}>
            {data.map((gallery) => (
                <View key={gallery.id} style={styles.row}>
                    <View style={styles.controw}>
                        <Image
                            source={gallery.images[0]}
                            style={{ width: 37, height: 37, borderRadius: 50 }} />
                        <View style={{ flexDirection: 'column', }}>
                            <Text style={{ fontSize: 14 }}> {gallery.description}</Text>
                            <Text style={{ fontSize: 11, marginVertical: 5, color: '#4d4d4d84' }}> {gallery.title}</Text>
                        </View>
                    </View>

                    <AntDesign name="right" size={16} color="#4d4d4d84" />

                </View>

            ))}

        </View>
    );
};

export default Messaging;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderColor: '#4d4d4d84 ',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    controw: {
        flexDirection: 'row',
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'space-between'


    }

});
