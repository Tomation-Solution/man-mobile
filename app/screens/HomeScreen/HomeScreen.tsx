import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Container,
  FeedsNav,
  HomeHeader,
  LatestUpdatesNav,
  SearchBar,
} from "../../components";

const HomeScreen = () => {
  return (
    <Container>
      <HomeHeader />
      <SearchBar />
      <LatestUpdatesNav />
      <FeedsNav />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
