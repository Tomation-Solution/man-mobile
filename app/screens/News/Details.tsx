import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { HomeHeader } from "../../components";
import { useRoute } from "@react-navigation/native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { createComment } from "../../store/slices/news_publication/newsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getComments } from "../../store/slices/news_publication/newsSlice";
import LoadingIndicator from "../../utils/LoadingIndicator";
import { deleteComment } from "../../store/slices/news_publication/newsSlice";

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

const CommentCard = ({
  id,
  img,
  name,
  comment,
  onPress,
}: {
  id: string;
  img: any;
  name: string;
  comment: string;
  onPress: any;
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
        <Image source={{ uri: img }} style={{ width: 40, height: 40 }} />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "700" }}>{name}</Text>
          <TouchableOpacity onPress={() => onPress(id)} activeOpacity={0.7}>
            <Text style={{ color: "crimson" }}>Delete</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderColor: COLORS.icon,
            borderWidth: 1,
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

const Details = ({ route, navigation }: DetailsProps) => {
  const [showAll, setShowAll] = React.useState(3);
  const altRoute = useRoute();
  const data = route?.params?.news || altRoute?.params || {};
  const dispatch = useAppDispatch();

  const [userComment, setUserComment] = React.useState("");

  const { comments, commenstLoading, news } = useAppSelector(
    (state) => state.newsPublication.news
  );

  const handlePress = () => {
    setShowAll(showAll === 3 ? comments?.data?.length : 3);
  };

  const inputRef = React.useRef<any>(null);

  const handleComment = () => {
    inputRef.current.focus();
  };

  const handleDelete = (id: string) => {
    dispatch(deleteComment(id));
    dispatch(getComments(data.id));
  };

  const handleSend = () => {
    if (userComment.length === 0) return;
    dispatch(createComment(data.id, userComment));
    setUserComment("");
    dispatch(getComments(data.id));
  };

  useEffect(() => {
    dispatch(getComments(data.id));
    console.log(data.id);
  }, [navigation, data.id, dispatch]);

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
              <Text style={styles.textStyle}>{data.body}</Text>
              {data?.paragraphs?.map((item: any, index: number) => (
                <View key={index}>
                  <Text style={styles.paragraphHeading}>{item.heading}</Text>
                  <Text style={styles.textStyle}>{item.paragragh}</Text>
                </View>
              ))}
            </View>

            <Text
              style={{
                marginTop: 5,
                fontSize: 13,
                color: "gray",
                fontWeight: "700",
              }}
            >
              {data?.likes ? data.likes : 0} Likes
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
              {/* comment  */}
              <TouchableOpacity onPress={handleComment} activeOpacity={0.7}>
                <FontAwesome name="comment" size={24} color={"gray"} />
              </TouchableOpacity>
            </View>

            {commenstLoading ? (
              <LoadingIndicator />
            ) : (
              <>
                <View
                  style={{
                    marginTop: 20,
                  }}
                >
                  {comments?.data?.slice(0, showAll).map((item: any) => (
                    <CommentCard
                      onPress={handleDelete}
                      key={item.id}
                      id={item.id}
                      img={item?.member?.photo_url}
                      name={item?.member?.full_name}
                      comment={item?.comment}
                    />
                  ))}
                </View>

                {comments?.data?.length > 3 && (
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
                        ? `View ${
                            comments?.data?.length - showAll
                          } more comments`
                        : "Hide comments"}
                    </Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        {/* <View
        style={{
          borderRadius: 50,
          overflow: "hidden",
          width: 40,
          height: 40,
          marginRight: 10,
        }}
      >
        <Image source={images.man} style={{ width: 40, height: 40 }} />
      </View> */}
        <View
          style={{
            flex: 1,
          }}
        >
          {/* <Text style={{ fontWeight: "700" }}>John Doe</Text> */}
          <View
            style={{
              backgroundColor: COLORS.icon,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          >
            <TextInput
              value={userComment}
              onChangeText={(text) => setUserComment(text)}
              ref={inputRef}
              numberOfLines={4}
              // style={{ minHeight: 40 }}
              multiline
              placeholder="Write a comment"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handleSend}
          style={{
            marginLeft: 10,
          }}
          activeOpacity={0.7}
        >
          <FontAwesome name="send" size={24} color={"gray"} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  paragraphHeading: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
  },

  textStyle: {
    fontSize: 16,
    color: "gray",
    marginVertical: 5,
    textAlign: "justify",
  },
});
