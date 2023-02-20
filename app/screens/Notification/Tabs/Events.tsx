import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Container, EventsCard } from "../../../components";
import { images } from "../../../assets/dummyData";


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
                <EventsCard
                    key={gallery.id}
                    title={gallery.title}
                    description={gallery.description}
                />
            ))}

        </View>
    );
};

export default Events;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


});
