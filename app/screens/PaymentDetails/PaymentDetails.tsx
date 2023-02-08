import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Container, HomeHeader } from "../../components";
import CompletedPayment from "./Tabs/CompletedPaymen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PendingPayment from "./Tabs/PendingPayment";
import { COLORS } from "../../constants/color";



const Top = createMaterialTopTabNavigator();


const PaymentScreen = ({ navigation }: any) => {

    return (

        <Container>
            <HomeHeader
                title=" My Account"
                navigation={navigation}
                back={navigation.goBack}
            />
            <View style={[styles.card]}>

                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Image
                        source={{ uri: 'https://i.ibb.co/cCDrZSj/dues.png' }}
                        style={{ width: 30, height: 28, marginHorizontal: 18 }}
                    />
                    <View style={{ flexDirection: 'column' }}>

                        <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 7, lineHeight: 21 }}>  21,0000</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', textAlign: 'center' }}> Total Outstanding</Text>
                    </View>
                </View>
            </View>


            <Top.Navigator
                screenOptions={{
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarIndicatorStyle: { backgroundColor: COLORS.primary },
                    tabBarLabelStyle: { fontSize: 12, fontWeight: "bold", width: '100%' },
                    tabBarStyle: { backgroundColor: "white", marginTop: 2 },
                }}>

                <Top.Screen name="Compeleted Payment" component={CompletedPayment} />
                <Top.Screen name="Pending Payment" component={PendingPayment} />

            </Top.Navigator>



        </Container>
    );
};

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
        marginVertical: 10,
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


export default PaymentScreen;
