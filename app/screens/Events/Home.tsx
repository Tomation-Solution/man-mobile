import { ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { HomeHeader, SearchBar } from "../../components";
import EventCard from "../../components/Events/EventCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getEvents } from "../../store/slices/events/eventsSlice";
import LoadingIndicator from "../../utils/LoadingIndicator";
import NoData from "../../components/NoData";

const Home = ({ navigation, environment }: any) => {
  const dispatch = useAppDispatch();
  const { events, loading } = useAppSelector((state) => state.events);

  useEffect(() => {
    if (environment.environment && environment.id) {
      dispatch(getEvents(environment.environment, environment.id));
    } else {
      dispatch(getEvents());
    }
  }, [environment, navigation]);

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <HomeHeader title={` Events`} navigation={navigation} />
        <SearchBar hasFilter />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
          marginBottom: 140,
        }}
      >
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            {events?.data?.length === 0 ? (
              events?.data?.map((event: any, index: number) => (
                <EventCard
                  key={index}
                  title={event.name}
                  date={event.startDate}
                  time={event.startTime}
                  image={event.image}
                  onPress={() => navigation.navigate("Details", { event })}
                />
              ))
            ) : (
              <NoData />
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 35,
  },
  navButton: {},
});
