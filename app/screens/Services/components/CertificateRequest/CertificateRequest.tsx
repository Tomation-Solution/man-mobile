import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";

import PaymentsForm from "./components/PaymentsForm";
import ReissuanceForm from "./components/ReissuanceForm";
import LetterSubmission from "./components/LetterSubmission";

interface AppointProxyProps {
  onPress: any;
}

const CertificateRequest = ({ onPress }: AppointProxyProps) => {
  const initialState = {
    section: "Reissuance Form",
  };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "setSection":
        return {
          ...state,
          section: action.payload,
        };
      case "set_Details":
        return {
          ...state,
          details: {
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
  const { section } = state;

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
      {section === "Reissuance Form" && (
        <ReissuanceForm
          handlePress={handlePress}
          onPress={onPress}
          setDetails={(details: any) =>
            dispatch({ type: "set_Details", payload: details })
          }
        />
      )}

      {section === "Payment Form" && (
        <PaymentsForm
          paymentName="Outstanding subscriptions"
          amount={50000}
          onPress={onPress}
          handlePress={handlePress}
        />
      )}

      {section === "LetterSubmission" && (
        <LetterSubmission onPress={onPress} fileName="Membership admission" />
      )}
    </View>
  );
};

export default CertificateRequest;

const styles = StyleSheet.create({});
