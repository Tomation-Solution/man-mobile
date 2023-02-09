import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Container, HomeHeader, ElectionsCard } from "../../components";


const Election = ({ navigation }: any) => {


  const data = [
    {
      id: 1,
      position: " President ",
    },
    {
      id: 2,
      position: " Secretary ",
    },
    {
      id: 3,
      position: " manager",
    },
    {
      id: 4,
      position: " President ",
    },
    {
      id: 5,
      position: " President ",
    },
    {
      id: 6,
      position: " President ",
    },
    {
      id: 7,
      position: " President ",
    },
    {
      id: 8,
      position: " President ",
    },
    {
      id: 9,
      position: " President ",
    }

  ]


  return (
    <Container>
      <HomeHeader
        title="Elections"
        navigation={navigation}
        back={navigation.goBack}
      />
      {data.map((data) => (
        <ElectionsCard
          key={data.id}
          id={data.id}
          position={data.position}
        />

      ))}


    </Container>
  );
};

export default Election;

const styles = StyleSheet.create({});
