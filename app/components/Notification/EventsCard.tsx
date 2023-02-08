import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/color";

interface EventCardProps {
    description: string;
    title: string;
}

const GeneralChatCard = ({
    description,
    title,
}: EventCardProps) => {
    return (


        <View style={styles.row}>
            <View style={{ flexDirection: 'column', }}>
                <Text style={{ fontSize: 14 }}> {description}</Text>
                <Text style={{ fontSize: 11, marginVertical: 5, color: '#4d4d4d84' }}> {title}</Text>
            </View>
        </View>

    );
};

export default GeneralChatCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginVertical: 10,
    },
    msessageContainer: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        width: "93%",
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

