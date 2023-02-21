import { Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/color";
import { Globalstyles } from "../../../globals/styles";
import LoadingIndicator from "../../../utils/LoadingIndicator";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { appology } from "../../../store/slices/meetings/meetingsSlice";

interface RescheduleProps {
  submitApollogy: any;
  loading: boolean;
  success: boolean;
  close: any;
}

const Reschedule = ({ close, submitApollogy }: RescheduleProps) => {
  const [reason, setReason] = React.useState<string>("");
  const dispatch = useAppDispatch();

  const { appologySent, loading, message } = useAppSelector(
    (state) => state.meetings
  );

  return (
    <View style={Globalstyles.modalContainer}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        Render an Applogy
      </Text>

      {loading ? (
        <LoadingIndicator />
      ) : appologySent || message ? (
        <Text
          style={{
            fontSize: 15,
            fontWeight: "300",
            marginVertical: 15,
            color: "crimson",
          }}
        >
          {message ? message : "Appology sent"}
        </Text>
      ) : (
        <TextInput
          onChangeText={(text) => setReason(text)}
          style={{
            marginVertical: 15,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.primary,
            padding: 10,
            width: "100%",
          }}
          placeholder="Reason for appology"
        />
      )}
      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          borderRadius: 10,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text
          onPress={
            loading
              ? () => {}
              : appologySent || message
              ? () => close()
              : () => submitApollogy(reason)
          }
          style={{
            color: "white",
            fontWeight: "500",

            width: "100%",
            textAlign: "center",
          }}
        >
          {loading
            ? "Loading..."
            : appologySent || message
            ? "Close"
            : "Send Appology"}
        </Text>
      </View>
    </View>
  );
};

export default Reschedule;
