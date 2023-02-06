import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Container, HomeHeader } from "../../components";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants/metric";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../constants/color";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const Details2 = ({ route, navigation }: DetailsProps) => {
  return (
    <Container style={styles.container}>
      <HomeHeader title="Fund a Project" navigation={navigation} back="back" />
      <View style={styles.inputContainer}>
        <Text style={styles.headText}>Support in Kind</Text>
        <View style={styles.supportContainer}>
          <Text style={styles.text}>Support Type</Text>
          <Ionicons name="chevron-down-outline" size={20} />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Note"
          multiline={true}
          numberOfLines={10}
        />
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            // onPress={}
          >
            <Text style={{ color: "white" }}>Support in Kind</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Details2;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  headText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: moderateScale(24),
    marginTop: verticalScale(20),
  },
  inputContainer: {
    marginHorizontal: horizontalScale(10),
  },
  supportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#EAEBE7",
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(24),
    marginTop: horizontalScale(63),
  },
  text: {
    fontWeight: "400",
    fontSize: moderateScale(16),
    color: "#010001",
  },
  textInput: {
    alignContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#EAEBE7",
    marginTop: verticalScale(30),
  },
  button: {
    //width: horizontalScale(140),
    padding: moderateScale(16),
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(16),
    marginTop: verticalScale(40),
    marginHorizontal: "auto",
  },
});
