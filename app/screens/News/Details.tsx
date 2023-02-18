import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { HomeHeader } from "../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { images } from "../../assets/dummyData";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getComments } from "../../store/slices/news_publication/newsSlice";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const Like = () => {
  const [liked, setLiked] = React.useState(false);
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => setLiked(!liked)}>
      <FontAwesome
        name="thumbs-up"
        size={24}
        color={liked ? "crimson" : "gray"}
      />
    </TouchableOpacity>
  );
};

const CommentIcon = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <FontAwesome name="comment" size={24} color={"gray"} />
    </TouchableOpacity>
  );
};

const CommentCard = ({
  img,
  name,
  comment,
}: {
  img: any;
  name: string;
  comment: string;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          borderRadius: 50,
          overflow: "hidden",
          width: 40,
          height: 40,
          marginRight: 10,
        }}
      >
        <Image source={img} style={{ width: 40, height: 40 }} />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={{ fontWeight: "700" }}>{name}</Text>
        <View
          style={{
            backgroundColor: COLORS.icon,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: COLORS.primary }}>{comment}</Text>
        </View>
      </View>
    </View>
  );
};

const Comment = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          borderRadius: 50,
          overflow: "hidden",
          width: 40,
          height: 40,
          marginRight: 10,
        }}
      >
        <Image source={images.man} style={{ width: 40, height: 40 }} />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={{ fontWeight: "700" }}>John Doe</Text>
        <View
          style={{
            backgroundColor: COLORS.icon,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
        >
          <TextInput
            numberOfLines={4}
            style={{ minHeight: 40 }}
            multiline
            placeholder="Write a comment"
          />
        </View>
      </View>
    </View>
  );
};

const Details = ({ route, navigation }: DetailsProps) => {
  const [showAll, setShowAll] = React.useState(3);
  const altRoute = useRoute();
  const data = route?.params?.news || altRoute?.params || {};
  const dispatch = useAppDispatch();

  const { comments, commenstLoading } = useAppSelector(
    (state) => state.newsPublication.news
  );

  const handlePress = () => {
    setShowAll(showAll === 3 ? comments?.data?.length : 3);
  };

  useEffect(() => {
    dispatch(getComments(data.id));
  }, []);

  return (
    <>
      <HomeHeader
        navigation={navigation}
        title={data.name || "Details " + data.id}
        back={() => navigation.goBack("News")}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          marginBottom: 20,
        }}
      >
        <View>
          <View
            style={{
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: data?.image ? data.image.toString() : undefined }}
              style={{ width: "100%", height: 300 }}
            />
          </View>

          <View
            style={{
              flex: 1,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              padding: 20,
              width: "100%",
              backgroundColor: "white",
              position: "relative",
              top: -20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
              }}
            >
              {data.name}
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 15,
                  color: "gray",
                  textAlign: "justify",
                }}
              >
                {data.description}
              </Text>
            </View>
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                color: "gray",
                fontWeight: "700",
              }}
            >
              {data?.likes} Likes
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 20,
                borderTopColor: COLORS.icon,
                borderTopWidth: 1,
                borderBottomColor: COLORS.icon,
                borderBottomWidth: 1,
                padding: 5,
              }}
            >
              <Like />
              <CommentIcon />
            </View>
            <View
              style={{
                marginTop: 20,
              }}
            >
              {comments?.data?.slice(0, showAll)?.map((item: any) => (
                <CommentCard
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  comment={item.comment}
                />
              ))}
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handlePress}
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: COLORS.primary, fontWeight: "700" }}>
                {showAll === 3
                  ? `View ${comments?.data?.length - showAll} more comments`
                  : "Hide comments"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Comment />
    </>
  );
};

export default Details;

const styles = StyleSheet.create({});
