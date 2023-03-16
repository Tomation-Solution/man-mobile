import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Globalstyles } from "../../../../globals/styles";
import { COLORS } from "../../../../constants/color";
import { TextInput } from "react-native-gesture-handler";
import PersonDetails from "./Components/PersonalDetails";
import Participants from "./Components/Participants";
import CompanyDetails from "./Components/CompanyDetails";

interface AppointProxyProps {
  onPress: any;
  amount: number;
  event_id: number;
}

const Register = ({ onPress, amount, event_id }: AppointProxyProps) => {
  const initialState = {
    section: "Company Details",
    ticketCount: 0,
    companyName: "",
    participants: [],
    personalDetails: {
      name: "",
      email: "",
      phone: "",
    },
  };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "setSection":
        return {
          ...state,
          section: action.payload,
        };
      case "setTicketCount":
        return {
          ...state,
          ticketCount: action.payload,
        };

      case "setParticipantsEmail":
        const participantsWithEmail = [...state.participants];
        participantsWithEmail[action.payload.index] = {
          ...participantsWithEmail[action.payload.index],
          email: action.payload.email,
        };
        return {
          ...state,
          participants: participantsWithEmail,
        };

      case "setParticipantsName":
        const participantsWithName = [...state.participants];
        participantsWithName[action.payload.index] = {
          ...participantsWithName[action.payload.index],
          full_name: action.payload.full_name,
        };
        return {
          ...state,
          participants: participantsWithName,
        };
      case "setPersonalDetails":
        return {
          ...state,
          personalDetails: {
            full_name: action.payload.name,
            email: action.payload.email,
            // phone: action.payload.phone,
          },
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { section, ticketCount, companyName, participants } = state;

  const handlePress = ({ section }: { section: string }) => {
    dispatch({ type: "setSection", payload: section });
  };
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
      }}
    >
      <View>
        <TextInput
          placeholder="email"
          onChange={(e) => {
            dispatch({
              type: "setParticipants",
              payload: { email: e.nativeEvent.text },
            });
          }}
        />
      </View>
      {section === "Personal Details" && (
        <PersonDetails
          handlePress={handlePress}
          onPress={onPress}
          setDetails={(personalDetails: any) =>
            dispatch({ type: "setPersonalDetails", payload: personalDetails })
          }
        />
      )}
      {section === "Company Details" && (
        <CompanyDetails
          handlePress={handlePress}
          ticketCount={ticketCount}
          companyName={companyName}
          amount={amount}
          setTicketCount={(ticketCount: number) =>
            dispatch({ type: "setTicketCount", payload: ticketCount })
          }
          setSection={(section: string) =>
            dispatch({ type: "setSection", payload: section })
          }
        />
      )}
      {section === "Participants" && (
        <Participants
          handlePress={handlePress}
          companyName={companyName}
          ticketCount={ticketCount}
          participants={participants}
          event_id={event_id}
          onPress={onPress}
          setTicketCount={(ticketCount: number) =>
            dispatch({ type: "setTicketCount", payload: ticketCount })
          }
          dispatch={dispatch}
        />
      )}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {},
  textInput: {
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
  },
  textActive: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    color: COLORS.primary,
  },

  textAction: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    color: COLORS.primary,
  },
});
