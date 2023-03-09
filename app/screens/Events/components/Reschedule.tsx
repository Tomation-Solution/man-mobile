import { Button, Platform, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../constants/color";
import { Globalstyles } from "../../../globals/styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  clearConfig,
  requestReschedule,
} from "../../../store/slices/events/eventsSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import LoadingIndicator from "../../../utils/LoadingIndicator";

interface RescheduleProps {
  onPress: any;
  event_id: number;
}

const convertDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};

const Reschedule = ({ onPress, event_id }: RescheduleProps) => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [time, setTime] = useState(new Date(Date.now()));
  const [isTImePickerShow, setIsTimePickerShow] = useState(false);

  const { loading, eventRescheduled, eventNotRescheduled } = useAppSelector(
    (state) => state.events
  );

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(clearConfig());
    onPress();
  };

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event: any, value: any) => {
    setDate(value);
    if (Platform.OS === "android") {
      setIsPickerShow(false);
    }
  };

  const timeOnchange = (event: any, value: any) => {
    setTime(value);
    if (Platform.OS === "android") {
      setIsTimePickerShow(false);
    }
  };

  const handleReschedule = (data: any) => {
    console.log("date: ", date.toISOString());
    console.log("time: ", time.toLocaleTimeString());

    dispatch(
      requestReschedule({
        event: event_id,
        startDate: convertDate(date),
        startTime: time.toLocaleTimeString(),
      })
    );
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={Globalstyles.modalContainer}>
          {!eventRescheduled && !eventNotRescheduled && (
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "300",
                    textAlign: "center",
                  }}
                >
                  Please select a date and time for the reschedule meeting
                </Text>

                <View>
                  <TouchableOpacity
                    style={{
                      borderBottomColor: COLORS.primary,
                      borderBottomWidth: 1,

                      padding: 5,

                      width: "100%",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                    onPress={showPicker}
                  >
                    <Text>{date.toLocaleDateString()}</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={{
                    borderBottomColor: COLORS.primary,
                    borderBottomWidth: 1,

                    padding: 5,

                    width: "100%",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                  onPress={() => setIsTimePickerShow(true)}
                >
                  <Text>{time.toLocaleTimeString()}</Text>
                </TouchableOpacity>

                {isPickerShow && (
                  <DateTimePicker
                    value={date}
                    mode={"date"}
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    is24Hour={true}
                    onChange={onChange}
                  />
                )}

                {isTImePickerShow && (
                  <DateTimePicker
                    value={time}
                    mode={"time"}
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    is24Hour={true}
                    onChange={timeOnchange}
                  />
                )}
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.primary,
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 30,
                    width: "100%",
                    alignItems: "center",
                  }}
                  onPress={handleReschedule}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "500",

                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    Request Reschedule
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {eventRescheduled && (
            <>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                Thank You!
              </Text>
              <Text
                style={{
                  marginVertical: 15,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Meeting Request reschedule has been requested. You will get a
                feedback soon.
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  padding: 10,
                  borderRadius: 10,
                  width: "100%",
                  alignItems: "center",
                }}
                onPress={handleClose}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "500",

                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Close
                </Text>
              </TouchableOpacity>
            </>
          )}

          {eventNotRescheduled && (
            <>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "500",
                  color: "red",
                }}
              >
                Sorry!
              </Text>
              <Text
                style={{
                  marginVertical: 15,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Meeting Request reschedule was not successful. Please try again
                later.
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  padding: 10,
                  borderRadius: 10,
                  width: "100%",
                  alignItems: "center",
                }}
                onPress={handleClose}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "500",

                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Close
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </>
  );
};

export default Reschedule;
