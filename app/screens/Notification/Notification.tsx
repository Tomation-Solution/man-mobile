import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Events from './Tabs/Events'
import Messaging from './Tabs/Messaging'
import { COLORS } from "../../constants/color";
import { Container, NotificationHeader } from '../../components';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


interface NotificationProps {
    navigation: any;
}

const Top = createMaterialTopTabNavigator();


const NotificationScreen = ({ navigation }: NotificationProps) => {


    return (
        <>
            <Container>
                <NotificationHeader
                    title=' Notification'
                    back={navigation.goBack}
                    navigation={navigation}
                />

                <Top.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: COLORS.primary,
                        tabBarIndicatorStyle: { backgroundColor: COLORS.primary },
                        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
                        tabBarStyle: { backgroundColor: "white" },
                    }}
                >
                    <Top.Screen name="Messaging" component={Messaging} />
                    <Top.Screen name="Events" component={Events} />
                </Top.Navigator>

            </Container>
        </>
    )

}

const styles = StyleSheet.create({
    head: { width: '100%', height: 45, backgroundColor: '#555D42' },
    wrapper: { flexDirection: 'row' },
    container: {
        flex: 1,
        paddingVertical: 15,
    },
    label: {
        fontWeight: '500',
        fontSize: 12,
        flexWrap: 'wrap',
        // color: Colors.text,
        // minWidth: Dimensions.get('window').width < 375 ? '100%' : '60%'
    },
    tab: {
        borderRadius: 10,
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffff',
        borderRadius: 8,
        // paddingVertical: 38,
        // paddingVertical: 20,
        width: 181,
        height: 91,
        // marginVertical: 10,
        // paddingBottom: 25
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    text: { margin: 6, textAlign: 'center', width: '100%', fontWeight: '600', fontSize: 11 },
    dataWrapper: { marginTop: -8, },
    row: { flexDirection: 'row' },
    btn: { width: 60, backgroundColor: '#555D42', borderRadius: 10, },
    btnText: { textAlign: 'center', color: '#fff', fontSize: 14, }
});


export default NotificationScreen
