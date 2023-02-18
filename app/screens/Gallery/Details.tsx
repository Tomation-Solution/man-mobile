import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CustomModal, HomeHeader } from "../../components";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import GalleryPicture from "../../components/Gallery/GalleryPicture";
import GalleryPicturePreview from "../../components/Gallery/GalleryPicturePreview";

const { width } = Dimensions.get("window");

interface DetailsProps {
  route: any;
  navigation: any;
}

const DetailsImage = ({
  images,
  slice,
  setSlice,
  setShowModal,
  modal,
  setImageIndex,
}: any) => {
  return (
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
      {images.slice(0, slice + 1)?.map((item: any, index: any) => (
        <GalleryPicture
          key={index}
          id={index}
          image={item.image}
          slice={slice}
          total={images.length}
          setSlice={setSlice}
          setShowModal={() => setShowModal(!modal)}
          setImageIndex={setImageIndex}
        />
      ))}
    </View>
  );
};

const Details = ({ route, navigation }: DetailsProps) => {
  const data = route.params.gallery;

  const [slice, setSlice] = useState(3);
  const [modal, setShowModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      {modal && (
        <CustomModal>
          <View
            style={{
              flexDirection: "row",
              width: width * 0.9,
              flex: 1,
            }}
          >
            <GalleryPicturePreview
              image={data?.images[imageIndex].image}
              setShowModal={setShowModal}
              setImageIndex={setImageIndex}
              imageIndex={imageIndex}
              length={data?.images.length}
            />
          </View>
        </CustomModal>
      )}
      <HomeHeader
        navigation={navigation}
        title={data?.name.slice(0, 20) + "..." || "Details " + data.id}
        back={navigation.goBack}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
            {data?.name}
          </Text>
        </View>
        <DetailsImage
          modal={modal}
          setShowModal={setShowModal}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          slice={slice}
          setSlice={setSlice}
          images={data.images}
        />
      </ScrollView>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({});
