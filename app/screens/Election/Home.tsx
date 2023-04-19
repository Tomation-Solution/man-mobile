import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Container, HomeHeader, ElectionsCard } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { list_election } from "../../store/slices/elections/getelectionSlice";
import LoadingIndicator from "../../utils/LoadingIndicator";

const ElectionHome = ({ navigation }: any) => {
  const dispatch = useAppDispatch();

  const { isLoggedIn } = useAppSelector((state) => state.authReducers.login);
  const { userData, loading } = useAppSelector(
    (state) => state.electionReducers.getelectionSlice
  );

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
      <View>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            {userData?.data ? (
              userData?.data?.map((data: any) => (
                <ElectionsCard
                  key={data.id}
                  id={data.id}
                  position={data.name}
                  navigation={navigation}
                  onPress={() => navigation.navigate("ProfileDetails")}
                />
              ))
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>No Election Data</Text>
              </View>
            )}
          </>
        )}
      </View>
    </Container>
  );
};

export default ElectionHome;

const styles = StyleSheet.create({});
