import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { HomeHeader, SearchBar } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import NewsCard from "../../components/News/NewsCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getNews } from "../../store/slices/news_publication/newsSlice";
import LoadingIndicator from "../../utils/LoadingIndicator";

const Home = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const { news, loading } = useAppSelector(
    (state) => state.newsPublication.news
  );

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <View>
      <HomeHeader navigation={navigation} title={"News"} />

      <SearchBar hasFilter />
      <ScrollView showsVerticalScrollIndicator={false}>
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
