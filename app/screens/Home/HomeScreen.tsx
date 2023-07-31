import { ScrollView, StyleSheet, RefreshControl } from "react-native";
import React, { useState } from "react";
import {
  Container,
  FeedsNav,
  HomeHeader,
  LatestUpdatesNav,
  SearchBar,
} from "../../components";
import NewsNav from "../../components/News/NewsNav";

const HomeScreen = ({ navigation, environment }: any) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);

    // Perform the data fetching or any other asynchronous operation here
    // ...

    setRefreshing(false);
  };

  return (
    <Container>
      <HomeHeader navigation={navigation} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar />
        {/* <LatestUpdatesNav navigation={navigation} environment={environment} /> */}
        <FeedsNav navigation={navigation} />
        <NewsNav environment={environment} navigation={navigation} />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
