import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Events from './Events'
import Messaging from './Messaging'
import { Container, NotificationHeader } from '../../components';

interface NotificationProps {
    navigation: any;
}


const NotificationScreen = ({ navigation }: NotificationProps) => {

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: "completed", title: " Messaging" },
        { key: "pending", title: " Events" }
    ]);

    const renderScene = SceneMap({
        completed: Messaging,
        pending: Events
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
            style={{ marginTop: 2, backgroundColor: '#fff' }}
            bounces='false'
        />
    );
    return (
        <>
            <Container>
                <NotificationHeader
                    title=' Notification'
                    back={navigation.goBack}
                    navigation={navigation}
                />

                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    // initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}

                />
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
