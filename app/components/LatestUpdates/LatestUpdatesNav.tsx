import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Globalstyles } from "../../globals/styles";
import { images } from "../../assets/dummyData";
import { horizontalScale } from "../../constants/metric";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getRequest } from "../../store/slices/extras/extrasSlice";
import { toSentenceCase } from "../../utils/helperFunctions/toSentenceCase";
import { getEvents } from "../../store/slices/events/eventsSlice";
import { getNews } from "../../store/slices/news_publication/newsSlice";
import { getPublication } from "../../store/slices/news_publication/publicationSlice";

const { sectionHeaderText, section } = Globalstyles;

const updatesData = [
  {
    key: "1",
    image: images.meeting_1,
  },
  {
    key: "2",
    image: images.meeting_2,
  },
  {
    key: "3",
    image: images.meeting_3,
  },
];

const { width, height } = Dimensions.get("window");

const UpdateContainer = ({ item, onPress }: any) => {
  useEffect(() => {
    console.log("item: ", item);
  }, [item]);

  return (
    <View
      style={{
        borderRadius: 30,
        overflow: "hidden",
        width: width * 0.9,
      }}
    >
      <View style={styles.updateContainerContainer}>
        <TouchableOpacity
          style={[styles.updateContainerNavButton, { left: 10 }]}
        >
          <Entypo name="chevron-thin-left" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <Image
          source={item?.image ? { uri: item.image?.toString() } : images.man}
          style={styles.updateContainerImage}
        />
        <TouchableOpacity
          style={[styles.updateContainerNavButton, { right: 10 }]}
        >
          <Entypo name="chevron-thin-right" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: horizontalScale(20),
          paddingVertical: horizontalScale(5),
          backgroundColor: COLORS.primary,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: horizontalScale(13),
            fontWeight: "700",
          }}
        >
          {item?.name?.toString().length > 20
            ? item?.name?.toString().substring(0, 20) + "..."
            : item?.name?.toString()}
        </Text>

        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: "white",
            paddingVertical: horizontalScale(5),
            paddingHorizontal: horizontalScale(10),
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontSize: horizontalScale(13),
              fontWeight: "700",
            }}
          >
            Read More
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LatestUpdatesNav = ({ navigation, environment }: any) => {
  const dispatch = useAppDispatch();
  const { response } = useAppSelector((state) => state.extras.extrasSlice);

  const { publications } = useAppSelector(
    (state) => state.newsPublication.publication
  );
  const { news } = useAppSelector((state) => state.newsPublication.news);
  const { events, loading } = useAppSelector((state) => state.events);

  useEffect(() => {
    if (environment.environment && environment.id) {
      dispatch(getEvents(environment.environment, environment.id));
      dispatch(getNews(environment.environment, environment.id));
      dispatch(getPublication(environment.environment, environment.id));
    } else {
      dispatch(getEvents());
      dispatch(getNews());
      dispatch(getPublication());
    }

    console.log("news", news);
    console.log("events", events);
    console.log("publications", publications);
    // console.log("latestUpdates", latestUpdates);
  }, [environment, navigation]);

  // const [latestUpdates, setLatestUpdates] = React.useState<any>([
  //   {
  //     type: "news",
  //     data: { ...news?.data[0] },
  //   },
  //   {
  //     type: "events",
  //     data: { ...events?.data[0] },
  //   },
  // ]);

  // useEffect(() => {
  //   dispatch(getRequest());
  // }, []);

  return (
    <View style={[styles.container, section]}>
      <Text style={[sectionHeaderText]}>Latest Updates</Text>
      <ScrollView
        pagingEnabled
        snapToAlignment="center"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {news &&
          news?.data?.length > 0 &&
          events &&
          events?.data?.length > 0 &&
          publications &&
          publications?.data?.length > 0 &&
          [
            {
              type: "news",
              data: { ...news?.data[0] },
            },
            {
              type: "events",
              data: { ...events?.data[0] },
            },
            {
              type: "publications",
              data: { ...publications?.data[0] },
            },
          ]?.map((item: any, index: number) => (
            <UpdateContainer
              key={index}
              item={item.data}
              onPress={() => {
                navigation.navigate(toSentenceCase(item?.type), {
                  screen: "Details",
                  params: item.data,
                });
              }}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default LatestUpdatesNav;

const styles = StyleSheet.create({
  container: {},
  updateContainerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: horizontalScale(10),
    width: width * 0.9,
    height: horizontalScale(200),
    marginHorizontal: horizontalScale(1),
  },
  updateContainerImage: {
    width: "100%",
    height: "100%",
  },
  updateContainerNavButton: {
    position: "absolute",
    zIndex: 1,
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: "white",
  },
});
