import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Globalstyles, SPACING } from "../../globals/styles";

const FeedsNav = () => {
  const FeedNavButton = ({ icon, name }: { icon: any; name: string }) => {
    return (
      <View style={styles.feedNavButton}>
        <View>{icon}</View>
        <Text>{name}</Text>
      </View>
    );
  };
  return (
    <View style={[Globalstyles.section]}>
      <Text style={[Globalstyles.sectionHeaderText]}>FeedsNav</Text>
    </View>
  );
};

export default FeedsNav;

const styles = StyleSheet.create({
  feedNavButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
