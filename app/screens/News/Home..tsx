import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HomeHeader, NewsCard, SearchBar } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { news } from "../../assets/dummyData/news";

const Home = ({ navigation }: any) => {
  return (
    <View>
      <HomeHeader navigation={navigation} title={"News"} />

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
          {news.map((news) => (
            <NewsCard
              key={news.id}
              item={news}
              onPress={() => navigation.navigate("Details", { news })}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
