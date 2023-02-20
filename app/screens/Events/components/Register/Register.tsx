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
}

const Register = ({ onPress }: AppointProxyProps) => {
  const initialState = {
    section: "Personal Details",
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
      case "setCompanyName":
        return {
          ...state,
          companyName: action.payload,
        };
      case "setParticipants":
        if (ticketCount <= 10) {
          return {
            ...state,
            participants: [
              ...state.participants,
              {
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
              },
            ],
          };
        }

      case "setPersonalDetails":
        return {
          ...state,
          personalDetails: {
            name: action.payload.name,
            email: action.payload.email,
            phone: action.payload.phone,
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
          setTicketCount={(ticketCount: number) =>
            dispatch({ type: "setTicketCount", payload: ticketCount })
          }
          setCompanyName={(companyName: string) =>
            dispatch({ type: "setCompanyName", payload: companyName })
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
          onPress={onPress}
          setTicketCount={(ticketCount: number) =>
            dispatch({ type: "setTicketCount", payload: ticketCount })
          }
          setParticipants={(participant: any) =>
            dispatch({ type: "setParticipants", payload: participant })
          }
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
