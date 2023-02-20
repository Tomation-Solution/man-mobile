import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import {
  Container,
  FeedsNav,
  HomeHeader,
  LatestUpdatesNav,
  SearchBar,
} from "../../components";
import NewsNav from "../../components/News/NewsNav";

const HomeScreen = ({ navigation }: any) => {
  return (
    <Container>
      <HomeHeader navigation={navigation} />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <SearchBar />
        <LatestUpdatesNav />
        <FeedsNav navigation={navigation} />
        <NewsNav navigation={navigation} />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
