import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { events } from "../../../assets/dummyData/event";
import EventCard from "../../../components/Events/EventCard";

const CompanyWide = ({ navigation }: any) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 100,
      }}
    >
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          date={event.date}
          time={event.startTime}
          image={event.image}
          onPress={() => navigation.navigate("Details", { event })}
        />
      ))}
    </ScrollView>
  );
};

export default CompanyWide;

const styles = StyleSheet.create({});
