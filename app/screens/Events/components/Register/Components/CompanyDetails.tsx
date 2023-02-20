import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../../../../constants/color";
import { Globalstyles } from "../../../../../globals/styles";

const CompanyDetails = ({
  handlePress,
  ticketCount,
  setTicketCount,
  setCompanyName,
  companyName,
}: any) => {
  const [errors, setErrors] = React.useState({
    companyName: "",
    ticketCount: "",
  });
  const handleContinue = () => {
    if (companyName.length >= 3) {
      if (ticketCount === 0) {
        setErrors({
          ...errors,
          ticketCount: "Please enter the number of tickets",
        });
      } else if (ticketCount > 10) {
        setErrors({
          ...errors,
          ticketCount: "Maximum 10 tickets can be booked",
        });
      } else {
        handlePress({ section: "Participants" });
      }
    } else {
      setErrors({
        ...errors,
        companyName: "Please enter a valid company name",
      });
    }
  };

  return (
    <View style={Globalstyles.modalContainer}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        REGISTER PARTICIPANTS
      </Text>
      <View>
        {errors.companyName && (
          <Text style={styles.textError}>{errors.companyName}</Text>
        )}
        {errors.ticketCount && (
          <Text style={styles.textError}>{errors.ticketCount}</Text>
        )}
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TextInput
          style={styles.textInput}
          value={companyName}
          onChange={(e) => {
            setCompanyName(e.nativeEvent.text);
            setErrors({ ...errors, companyName: "", ticketCount: "" });
          }}
          placeholder="COMPANY NAME"
        />
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginTop: 20,
            color: COLORS.icon,
          }}
        >
          Amount :<Text style={styles.textActive}> 5000 per individual</Text>
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "flex-start",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginTop: 20,
            color: COLORS.icon,
          }}
        >
          Participants :
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <Text
            onPress={() => ticketCount > 0 && setTicketCount(ticketCount - 1)}
            style={styles.textAction}
          >
            {" "}
            -{" "}
          </Text>
          <Text
            style={[
              styles.textAction,
              {
                paddingHorizontal: 10,
              },
            ]}
          >
            {" "}
            {ticketCount}{" "}
          </Text>
          <Text
            onPress={() => {
              ticketCount < 10 && setTicketCount(ticketCount + 1);
              setErrors({ ...errors, ticketCount: "" });
            }}
            style={styles.textAction}
          >
            +
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginTop: 20,
            color: COLORS.icon,
          }}
        >
          Total :<Text style={styles.textActive}> {ticketCount * 5000}</Text>
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            borderColor: COLORS.primary,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
            flex: 1,
          }}
          activeOpacity={0.8}
          onPress={() => handlePress({ section: "Personal Details" })}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "500",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
            flex: 1,
            marginLeft: 20,
          }}
          activeOpacity={0.8}
          onPress={handleContinue}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompanyDetails;

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
  textError: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    color: "crimson",
  },
});
