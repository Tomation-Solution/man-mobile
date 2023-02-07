import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native"
import { Container, AccountHeader } from "../../components";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';




const CompletedPayment = () => {
    const [tableData, setTableData] = useState([
        ["Anniversary levy", "$1000", "01/01/2020", "Completed"],
        ["Registartion levy", "$800", "02/01/2020", "Completed"],
        ["Registartion levy", "$500", "03/01/2020", "Completed"],
        ["Registartion levy", "$500", "03/01/2020", "Completed"],
        ["Registartion levy", "$500", "03/01/2020", "Completed"]

    ]);

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


    const tableHead = ["Reason", "Amount", "Date", "Action"];


    const element = () => (
        <TouchableOpacity>
            <View style={styles.btn}>
                <Text >button</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 0.3 }}>
                <Row data={tableHead} flexArr={[2, 1, 2, 1]} style={styles.head} textStyle={styles.text} />
                {
                    tableData.map((rowData, index) => (
                        <TableWrapper key={index} style={styles.row}>
                            {
                                rowData.map((cellData, cellIndex) => (
                                    <Cell key={cellIndex} data={cellIndex === 3 ? buttonElement() : cellData} />
                                ))
                            }
                        </TableWrapper>
                    ))
                }
            </Table>
        </View>
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
    text: { margin: 1, textAlign: 'center', fontWeight: '600', fontSize: 11 },
    dataWrapper: { marginTop: -1 },
    row: {
        flexDirection: 'row',
    },
    btn: { width: 48, height: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: '#78B7BB', borderRadius: 10 },
    btnText: { textAlign: 'center', color: '#fff' }

});
export default CompletedPayment
