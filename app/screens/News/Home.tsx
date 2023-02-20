import { StyleSheet, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { HomeHeader, SearchBar } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import NewsCard from "../../components/News/NewsCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getNews } from "../../store/slices/news_publication/newsSlice";
import LoadingIndicator from "../../utils/LoadingIndicator";

const Home = ({ navigation, environment }: any) => {
  const dispatch = useAppDispatch();
  const { news, loading } = useAppSelector(
    (state) => state.newsPublication.news
  );

  useEffect(() => {
    if (environment.environment && environment.id) {
      dispatch(getNews(environment.environment, environment.id));
    } else {
      dispatch(getNews());
    }
  }, [environment]);

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
              {news?.data?.map((news: any) => (
                <NewsCard
                  key={news?.id}
                  item={news}
                  onPress={() => navigation.navigate("Details", { news })}
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
