import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { images } from "../../assets/dummyData";
import { horizontalScale, verticalScale } from "../../constants/metric";

import { COLORS } from "../../constants/color";
import { SPACING } from "../../globals/styles";
import CustomModal from "../CustomModal";
import NotificationModal from "../Notification/NotificationModal";

interface Props {
    navigation: any;
    title?: string;
    back?: any;
}
const NotificationHeader = ({ navigation, title, back }: Props) => {

    const [modalVisible, setModalVisible] = useState(true);

    const onModalPress = () => { setModalVisible(!modalVisible); };

    <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
        <NotificationModal onPress={onModalPress} />
    </CustomModal>

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    back ? back() : navigation.openDrawer();
                }}
            >
                <Ionicons
                    name={back ? "chevron-back" : "menu"}
                    color={COLORS.primary}
                    size={30}
                />
            </TouchableOpacity>

            {title ? (
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
            ) : (
                <>
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>
                        Welcome, Tomiwa Ayandele
                    </Text>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={images.man}
                                style={{
                                    width: verticalScale(30),
                                    height: horizontalScale(30),
                                }}
                            />
                        </View>
                    </View>
                </>
            )}
            <View style={styles.notificationContainer}>
                <TouchableOpacity onPress={() => { onModalPress() }} >
                    <Text style={{ color: '#4d4d4d84', fontWeight: '500', fontSize: 15 }}> Clear </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NotificationHeader;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SPACING.sectionPadding,
    },
    imageContainer: {
        height: horizontalScale(30),
        width: verticalScale(30),
        borderRadius: 100,
        overflow: "hidden",
    },
    notificationContainer: {
        position: "relative",
    },
    redDot: {
        width: verticalScale(8),
        height: horizontalScale(8),
        backgroundColor: "crimson",
        borderRadius: 10,
        position: "absolute",
        top: 0,
        right: 0,
    },
});
