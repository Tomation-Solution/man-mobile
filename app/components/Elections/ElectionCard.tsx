import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Container from "../Container";
import { horizontalScale, verticalScale } from "../../constants/metric";
import { COLORS } from "../../constants/color";

interface ElectionsCardProps {
  id: number;
  position: string;
  onPress: () => void;
  navigation: any;
}

const ElectionCard = ({
  id,
  position,
  onPress,
  navigation,
}: ElectionsCardProps) => {
  return (
    <View style={styles.containerflex}>
      <View style={styles.contianer}>
        <View style={{}}>
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Position: {id}
          </Text>
          <Text
            style={{
              fontSize: 16,
              backgroundColor: "gray",
              color: "#fff",
              padding: 5,
              borderRadius: 4,
              //   marginRight: 10,
              marginBottom: 10,
            }}
          >
            {" "}
            {position}
          </Text>
        </View>

        <View style={styles.rowSection}>
          <TouchableOpacity
            onPress={() => navigation.navigate("VoteStat")}
            style={styles.votingbtn}
          >
            <Text style={styles.btnText}> See Voting Stat</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={styles.asipirantbtn}>
            <Text style={[styles.btnText, styles.color]}> See Asipirants</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ElectionCard;

const styles = StyleSheet.create({
  containerflex: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
  },
  contianer: {
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-around'
  },
  rowSection: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  asipirantbtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: 5,
    marginLeft: 10,
  },
  votingbtn: {
    padding: 5,
    borderColor: COLORS.primary,
    borderRadius: 4,
    borderWidth: 1,
  },
  btnText: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "500",
  },
  color: {
    color: "white",
  },
});
