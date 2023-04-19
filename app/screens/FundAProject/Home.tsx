import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Container, HomeHeader } from "../../components";
import DonationCard from "./DonationCard";
import { ScrollView } from "react-native-gesture-handler";
import { images } from "../../assets/dummyData";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fundProject } from "../../store/slices/Fund_A_Project/fundSlice";
import LoadingIndicator from "../../utils/LoadingIndicator";
import NoData from "../../components/NoData";

const Home = ({ navigation }: any) => {
  const { isLoggedIn } = useAppSelector(
    (state: any) => state.authReducers.login
  );
  const { userData, loading } = useAppSelector(
    (state) => state.fundProjectReducers.fundProjectSlice
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fundProject());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fundProject());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <Container>
      <HomeHeader
        navigation={navigation}
        title={"Fund a Project"}
        back={navigation.goBack}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {loading ? (
            <LoadingIndicator />
          ) : (
            <>
              {userData?.data.length > 0 ? (
                userData?.data.map((item: any) => {
                  return (
                    <DonationCard
                      key={item.id}
                      item={item}
                      onPress={() => navigation.navigate("Details1", { item })}
                    />
                  );
                })
              ) : (
                <NoData />
              )}
            </>
          )}
        </View>
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
