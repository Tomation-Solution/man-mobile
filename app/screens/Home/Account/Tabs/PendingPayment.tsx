import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Container, AccountHeader } from "../../../../components";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getDuelist } from "../../../../store/slices/due_list_and_owning_members/getDuelistSlice";



const PendingPayment = () => {


    const { isLoggedIn } = useAppSelector((state) => state.authReducers.login);
    const { userData,loading} = useAppSelector(
    (state) => state.duelistReducers.getDuelistSlice
);

    const dispatch = useAppDispatch();

        useEffect(()=> {
            if (isLoggedIn) {
                dispatch(getDuelist())
            }
        },[dispatch])

    const tableHead = ["Reason", "Amount", "Date", "Action"];

    const onButtonClick = () => {
        Alert.alert('Pay your bills');
    };

    const ButtonElement = ({ispaid}:any) => (

        <TouchableOpacity onPress={onButtonClick}>
            <View style={styles.btn}>
            <Text style={styles.btnText}> {ispaid ? "Show Receipt" : "Pay"} </Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
    
                {loading ? ( 
                    <Text> Loading...</Text>
                ) : ( 
                 <>
            <Table borderStyle={{ borderColor: 'transparent' }}>
                <Row data={tableHead} flexArr={[1, 1, 1, 1]} style={styles.head} textStyle={styles.text} />
                <ScrollView>
                     {
                        userData?.data?.map((rowData:any, index:any) => {  
                            const { due__startDate, due__Name, amount,is_paid  } = rowData;
                     return(
                    <TableWrapper key={index} style={styles.row}>
                      {
                    <>  
                  <Cell data={due__Name} textStyle={styles.text} />
                  <Cell data={amount} textStyle={styles.text} />
                  <Cell data={due__startDate} textStyle={styles.text} />
              
                  <View style={styles.tableButton}> 
                   <ButtonElement ispaid={is_paid} />         
                  </View>      


                 </>
                  }
                 </TableWrapper>
                    )})} 
                </ScrollView>
            </Table>
            </>
                )}
        </View >
    )
}
const styles = StyleSheet.create({
    head: { width: '100%', height: 45, backgroundColor: '#555D42' },
    wrapper: { flexDirection: 'row' },
    tableButton:{

    },
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
    btn: { width: 60, backgroundColor: '#555D42', borderRadius: 10, marginLeft: 14 },
    btnText: { textAlign: 'center', color: '#fff', fontSize: 13, }
});

export default PendingPayment
