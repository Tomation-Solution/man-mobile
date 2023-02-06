import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Container, AccountHeader } from "../../components";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';



const CompletedPayment = () => {
    const [tableData, setTableData] = useState([
        ["Anniversary levy", "$1000", "01/01/2020", "Completed"],
        ["registration levy", "$800", "02/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["Anniversary levy", "$1000", "01/01/2020", "Completed"],
        ["registration levy", "$800", "02/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["Anniversary levy", "$1000", "01/01/2020", "Completed"],
        ["registration levy", "$800", "02/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
    ]);
    const tableHead = ["Reason", "Amount", "Date", "Action"];

    const onButtonClick = () => {
        Alert.alert('Pay your bills');
    };

    const buttonElement = () => (
        <TouchableOpacity onPress={onButtonClick}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>Receipt</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* <TableComponent
                tableHead={tableHead}
                tableData={tableData}
                backgroundColor={"#555D42"}
            /> */}
            <Table borderStyle={{ borderColor: 'transparent' }}>
                <Row data={tableHead} flexArr={[1, 1, 1, 1]} style={styles.head} textStyle={styles.text} />
                <ScrollView>
                    {
                        tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 3 ? buttonElement() : cellData} textStyle={styles.text} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </ScrollView>
            </Table>
        </View >
    );
};









const PendingPayment = () => {
    const [tableData, setTableData] = useState([
        ["Anniversary levy", "$1000", "01/01/2020", "Completed"],
        ["registration levy", "$800", "02/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["Anniversary levy", "$1000", "01/01/2020", "Completed"],
        ["registration levy", "$800", "02/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["Anniversary levy", "$1000", "01/01/2020", "Completed"],
        ["registration levy", "$800", "02/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
        ["registration levy", "$500", "03/01/2020", "Completed"],
    ]);
    const tableHead = ["Reason", "Amount", "Date", "Action"];

    const onButtonClick = () => {
        Alert.alert('Pay your bills');
    };

    const buttonElement = () => (
        <TouchableOpacity onPress={onButtonClick}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>Pay</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* <TableComponent
                tableHead={tableHead}
                tableData={tableData}
                backgroundColor={"#555D42"}
            /> */}
            <Table borderStyle={{ borderColor: 'transparent' }}>
                <Row data={tableHead} flexArr={[1, 1, 1, 1]} style={styles.head} textStyle={styles.text} />
                <ScrollView>
                    {
                        tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 3 ? buttonElement() : cellData} textStyle={styles.text} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </ScrollView>
            </Table>
        </View >
    );
};

const PaymentScreen = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: "completed", title: "Completed Payment" },
        { key: "pending", title: "Pending Payment" }
    ]);

    const renderScene = SceneMap({
        completed: CompletedPayment,
        pending: PendingPayment
    });


    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'black'}
            inactiveColor={'black'}
            labelStyle={[styles.label]}
            tabStyle={[styles.tab, { height: 38, maxHeight: 38, minHeight: 38, padding: 0 }]}
            indicatorStyle={{ backgroundColor: '#555D42' }}
            contentContainerStyle={{ borderRadius: 100, elevation: 0 }}
            style={{ marginTop: 25, backgroundColor: '#fff' }}
            bounces='false'
        />
    );




    return (

        <Container>
            <AccountHeader
                title=" My Account"
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
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                // initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}

            />

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


export default PaymentScreen;
