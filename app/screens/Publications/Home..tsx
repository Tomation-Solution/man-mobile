import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { HomeHeader, SearchBar } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import PublicationsCard from "../../components/Publications/PubicationsCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPublication } from "../../store/slices/news_publication/publicationSlice";
import LoadingIndicator from "../../utils/LoadingIndicator";

const Home = ({ navigation, environment }: any) => {
  const dispatch = useAppDispatch();
  const { publications, loading, error } = useAppSelector(
    (state) => state.newsPublication.publication
  );

  useEffect(() => {
    if (environment?.environment && environment?.id) {
      dispatch(getPublication(environment.environment, environment.id));
    } else {
      dispatch(getPublication());
    }
  }, [environment]);

  useEffect(() => {
    if (error) {
      if (error?.is_inancial) {
        // alert(error?.is_inancial);
        navigation.navigate("Homescreen", {
          screen: "Account",
        });
      }
    }
  }, [error]);

  return (
    <View>
      <HomeHeader navigation={navigation} title={"Publications"} />

      <SearchBar hasFilter />
      <ScrollView
        style={{
          marginBottom: 150,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            marginTop: 20,
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {loading ? (
            <LoadingIndicator />
          ) : (
            <>
              {publications?.data?.map((publication: any, index: number) => (
                <PublicationsCard
                  key={index}
                  item={publication}
                  onPress={() =>
                    navigation.navigate("Details", { publication })
                  }
                />
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
