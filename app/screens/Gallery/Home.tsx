import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SearchBar } from "../../components";

const Home = () => {
  return (
    <View>
      <SearchBar hasFilter />
      <Text>Gallery</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
