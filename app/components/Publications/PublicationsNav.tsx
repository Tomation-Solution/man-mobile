import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/color";
import { Globalstyles } from "../../globals/styles";
import { ScrollView } from "react-native-gesture-handler";
import PublicationsCard from "./PubicationsCard";
import { news } from "../../assets/dummyData/news";

const PublicationsNav = ({ navigation }: any) => {
  return (
    <View style={Globalstyles.section}>
      <View style={styles.newsNavHeader}>
        <Text style={[Globalstyles.sectionHeaderText, { color: "white" }]}>
          News
        </Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={{ color: "white", fontSize: 16 }}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {news.map((item) => {
          return (
            <PublicationsCard
              key={item.id}
              item={item}
              onPress={() =>
                navigation.navigate("News", {
                  screen: "Details",
                  params: item,
                })
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PublicationsNav;

const styles = StyleSheet.create({
  newsNavHeader: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
