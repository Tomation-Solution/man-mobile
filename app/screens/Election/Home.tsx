import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Container, HomeHeader, ElectionsCard } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { list_election } from "../../store/slices/elections/getelectionSlice";


const ElectionHome = ({ navigation }: any) => {
  const dispatch = useAppDispatch();

  const { isLoggedIn } = useAppSelector((state) => state.authReducers.login);
const { userData, loading } = useAppSelector(
  (state) => state.electionReducers.getelectionSlice
)
console.log(userData)

  useEffect(() => {
    dispatch(list_election());
  }, []);


  return (
    <Container>
      <HomeHeader
        title="Elections"
        navigation={navigation}
        back={navigation.goBack}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {userData?.data?.map((data:any) => (
          <ElectionsCard
            key={data.id}
            id={data.id}
            position={data.name}
            navigation={navigation}
            onPress={() => navigation.navigate("ProfileDetails", { data })}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default ElectionHome;

const styles = StyleSheet.create({});
