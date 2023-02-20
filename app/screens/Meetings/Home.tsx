import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { HomeHeader, SearchBar } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import MeetingCard from "../../components/Meetings/MeetingCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadMeetings } from "../../store/slices/meetings/meetingsSlice";

const Home = ({ navigation, environment }: any) => {
  const dispatch = useAppDispatch();
  const { meetings, loading } = useAppSelector((state) => state.meetings);

  useEffect(() => {
    if (environment.environment && environment.id) {
      dispatch(loadMeetings(environment.environment, environment.id));
    } else {
      dispatch(loadMeetings());
    }
  }, [environment]);

  return (
    <>
      <HomeHeader navigation={navigation} title="Your Meetings" />
      <SearchBar />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {meetings?.data?.map((meeting: any) => (
          <MeetingCard
            key={meeting.id}
            title={meeting.name}
            date={meeting.event_date.split("T")[0]}
            time={meeting.event_date.split("T")[1].split("+")[1]}
            onPress={() => navigation.navigate("Details", { meeting })}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
