import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../constants/color";
import { Globalstyles } from "../../globals/styles";

interface profileCardProps {
    item: any;
    onPress: () => void;
}
const { width } = Dimensions.get("window");

const ProfileViewCard = ({ item, onPress }: profileCardProps) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} >

            <View style={styles.newsCabinet}>

                <View style={styles.newsImageActionContainer}>
                    <View style={styles.newsImageContainer}>
                        <Image
                            source={item.images[1]}
                            resizeMode="cover"
                            style={{ width: "100%", height: 200 }}
                        />
                    </View>


                </View>

                <View style={{ padding: 10 }}>

                    <Text style={{ textAlign: "justify", color: COLORS.primary }}>
                        {item?.description.substring(0, 150)} ...
                        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                            <Text style={{ color: COLORS.primary, fontWeight: "700", textAlign: 'center' }}>
                                Continue
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

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
    reactionContainer: {
        position: "absolute",
        bottom: 0,
        right: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    reaction: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        margin: 5,
    },
    newsImageContainer: {
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        overflow: "hidden",
        position: "relative",
    },
});

export default ProfileViewCard
