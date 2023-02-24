import { View, Text, StyleSheet } from "react-native";
import React,{useEffect} from "react";
import { Container, HomeHeader } from "../../components";
import DonationCard from "./DonationCard";
import { ScrollView } from "react-native-gesture-handler";
import { images } from "../../assets/dummyData";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fundProject } from "../../store/slices/Fund_A_Project/fundSlice";


const Home = ({ navigation }: any) => {
  const { isLoggedIn } = useAppSelector((state:any) => state.authReducers.login);
  const { userData,loading} = useAppSelector(
  (state) => state.fundProjectReducers.fundProjectSlice
);
console.log('hey '+ userData)

const dispatch = useAppDispatch();

useEffect(()=> {
  if (isLoggedIn) {
      dispatch(fundProject())
  }
},[dispatch,isLoggedIn])


  return (
    <Container style={styles.container}>
      <HomeHeader
        navigation={navigation}
        title={"Fund a Project"}
        back={"back"}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
     {userData?.data.map((item:any) => {
          console.log('hello' + item.id)
          return (
            <DonationCard
              key={item.id}
              item={item}
              onPress={() => navigation.navigate("Details1", { item })}
            />
          );
        })}
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
