import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HomeHeader, SearchBar } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { publications } from "../../assets/dummyData/publications";
import PublicationsCard from "../../components/Publications/PubicationsCard";

const Home = ({ navigation }: any) => {
  return (
    <View>
      <HomeHeader navigation={navigation} title={"Publications"} />

      <SearchBar hasFilter />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 20,
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {publications.map((publications) => (
            <PublicationsCard
              key={publications.id}
              item={publications}
              onPress={() => navigation.navigate("Details", { publications })}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
