import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { HomeHeader } from "../../components";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

interface DetailsProps {
  route: any;
  navigation: any;
}

const DetailsImage = ({ images }: any) => {
  const [active, setActive] = React.useState(0);
  const change = ({ nativeEvent }: any) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={images}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={change}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{ width: width, height: 300 }}
            resizeMode="cover"
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {images.map((image: any, index: number) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: index === active ? "#000" : "#fff",
              margin: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

const Details = ({ route, navigation }: DetailsProps) => {
  const data = route.params.gallery;

  return (
    <>
      <HomeHeader
        navigation={navigation}
        title={data.title || "Details " + data.id}
        back={navigation.goBack}
      />
      <DetailsImage images={data.images} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              backgroundColor: "#000",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {data.title.toUpperCase()}
            </Text>
          </View>

          <View
            style={{
              padding: 10,
              marginTop: 10,
            }}
          >
            {data.description.map((desc: any, index: number) => (
              <Text
                key={index}
                style={{
                  fontSize: 18,
                  color: "gray",
                  textAlign: "justify",
                  marginVertical: 10,
                }}
              >
                {desc}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({

});
