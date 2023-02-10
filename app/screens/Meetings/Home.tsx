import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HomeHeader, SearchBar } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { meetings } from "../../assets/dummyData/meetings";
import MeetingCard from "../../components/Meetings/MeetingCard";

const Home = ({ navigation }: any) => {
  return (
    <>
      <HomeHeader navigation={navigation} title="Your Meetings" />
      <SearchBar />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {meetings.map((meeting: any) => (
          <MeetingCard
            key={meeting.id}
            title={meeting.title}
            date={meeting.date}
            time={meeting.startTime}
            onPress={() => navigation.navigate("Details", { meeting })}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
