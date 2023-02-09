import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { HomeHeader } from "../../components";

interface DetailsProps {
  route: any;
  navigation: any;
}

const Details = ({ route, navigation }: DetailsProps) => {
  const data = route.params.gallery;

  return (
    <View>
      <HomeHeader
        navigation={navigation}
        title={data.title || "Details " + data.id}
        back={navigation.goBack}
      />

      <Text>{data.title}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({

});
