import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { GalleryCard, HomeHeader, SearchBar } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadGallery } from "../../store/slices/gallery/gallerySlice";

const Home = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const { loading, galleryData } = useAppSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(loadGallery());
  }, []);

  return (
    <View>
      <HomeHeader navigation={navigation} title={"Gallery"} />

      <SearchBar hasFilter />
      <ScrollView>
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
            <Text>Loading...</Text>
          ) : (
            <>
              {galleryData?.data?.data?.map((gallery: any, index: any) => (
                <GalleryCard
                  key={index}
                  image={gallery.images[0].image}
                  name={gallery.name}
                  onPress={() => navigation.navigate("Details", { gallery })}
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
