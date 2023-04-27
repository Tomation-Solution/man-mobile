import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { CustomModal, HomeHeader, SearchBar } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import MeetingCard from "../../components/Meetings/MeetingCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  appology,
  clearMeetingConfig,
  loadMeetings,
  resgisterForMeeting,
} from "../../store/slices/meetings/meetingsSlice";
import LoadingIndicator from "../../utils/LoadingIndicator";
import Accepted from "./components/Accepted";
import Rejected from "./components/Rejected";
import Reschedule from "./components/Reschedule";

const Home = ({ navigation, environment }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<any>();
  const [id, setMeetingId] = useState<any>();
  const dispatch = useAppDispatch();
  const { meetingRegistered, appologySent, meetings, loading } = useAppSelector(
    (state) => state.meetings
  );

  const register = (meeting_id: number) => {
    setModalVisible(true);
    dispatch(resgisterForMeeting(meeting_id));
    setModalContent("register");
  };

  const apology = () => {
    dispatch(clearMeetingConfig());
    setModalVisible(true);
    setModalContent("appology");
  };

  const submitApplogy = (reason: string) => {
    dispatch(clearMeetingConfig);
    dispatch(appology(id, reason));
  };

  const onPress = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    if (environment.environment && environment.id) {
      dispatch(loadMeetings(environment.environment, environment.id));
    } else {
      dispatch(loadMeetings());
    }
  }, [environment]);

  return (
    <>
      {modalContent === "register" && (
        <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
          {loading ? (
            <LoadingIndicator />
          ) : meetingRegistered ? (
            <Accepted onPress={onPress} />
          ) : (
            <Rejected onPress={onPress} />
          )}
        </CustomModal>
      )}

      {modalContent === "appology" && (
        <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
          <Reschedule
            loading={loading}
            success={appologySent}
            submitApollogy={submitApplogy}
            close={onPress}
          />
        </CustomModal>
      )}
      <HomeHeader navigation={navigation} title="Your Meetings" />
      <SearchBar />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            {meetings?.data.length > 0 ? (
              meetings?.data?.map((meeting: any) => (
                <MeetingCard
                  accept={() => register(meeting.id)}
                  accepted={meeting.is_attending}
                  setMeetingId={setMeetingId}
                  apology={apology}
                  key={meeting.id}
                  meeting_id={meeting.id}
                  title={meeting.name}
                  date={meeting.event_date.split("T")[0]}
                  time={meeting.event_date.split("T")[1].split("+")[1]}
                  onPress={() => navigation.navigate("Details", { meeting })}
                />
              ))
            ) : (
              <Text style={{ textAlign: "center", marginTop: 20 }}>
                No Data Found
              </Text>
            )}
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
