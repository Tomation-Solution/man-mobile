import { Alert, StyleSheet, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { HomeHeader, SearchBar } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import NewsCard from "../../components/News/NewsCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getNews } from "../../store/slices/news_publication/newsSlice";
import LoadingIndicator from "../../utils/LoadingIndicator";
import NoData from "../../components/NoData";

const Home = ({ navigation, environment }: any) => {
  const dispatch = useAppDispatch();
  const { news, loading, newsError } = useAppSelector(
    (state) => state.newsPublication.news
  );

  useEffect(() => {
    if (environment.environment && environment.id) {
      dispatch(getNews(environment.environment, environment.id));
    } else {
      dispatch(getNews());
    }
  }, [environment]);

  // useEffect(() => {
  //   if (newsError) {
  //     if (newsError?.is_inancial) {
  //       Alert.alert("Notice", "Please pay your annual due", [
  //         {
  //           text: "Cancel",
  //           onPress: () =>
  //             navigation.navigate("Homescreen", {
  //               screen: "Account",
  //             }),
  //           style: "cancel",
  //         },
  //         {
  //           text: "OK",
  //           onPress: () =>
  //             navigation.navigate("Homescreen", {
  //               screen: "Account",
  //             }),
  //         },
  //       ]);
  //     }
  //   }
  // }, [newsError]);

  return (
    <View>
      <HomeHeader navigation={navigation} title={"News"} />

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
              {news?.data?.length === 0 ? (
                news?.data?.map((news: any) => (
                  <NewsCard
                    key={news?.id}
                    item={news}
                    onPress={() => navigation.navigate("Details", { news })}
                  />
                ))
              ) : (
                <NoData />
              )}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
