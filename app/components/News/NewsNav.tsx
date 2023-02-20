import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../../constants/color";
import { Globalstyles } from "../../globals/styles";
import { ScrollView } from "react-native-gesture-handler";
import NewsCard from "./NewsCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getNews } from "../../store/slices/news_publication/newsSlice";
import LoadingIndicator from "../../utils/LoadingIndicator";

const NewsNav = ({ navigation, environment }: any) => {
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
    <View style={Globalstyles.section}>
      <View style={styles.newsNavHeader}>
        <Text style={[Globalstyles.sectionHeaderText, { color: "white" }]}>
          News
        </Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={{ color: "white", fontSize: 16 }}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            {news?.data?.map((item: any) => {
              return (
                <NewsCard
                  key={item.id}
                  item={item}
                  onPress={() =>
                    navigation.navigate("News", {
                      screen: "Details",
                      params: item,
                    })
                  }
                />
              );
            })}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default NewsNav;

const styles = StyleSheet.create({
  newsNavHeader: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
