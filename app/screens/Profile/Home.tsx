import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Container, CustomModal } from "../../components";
import { images } from "../../assets/dummyData";
import { COLORS } from "../../constants/color";
import { Ionicons } from "@expo/vector-icons";
import PicturePreview from "../../components/Profile/PicturePreview";
import * as DocumentPicker from "expo-document-picker";
// import Picture from "../../components/Profile/Picture";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  editProfilePhoto,
  getProfile,
} from "../../store/slices/profile/getProfileSlice";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { normalize } from "../../constants/metric";
import LoadingIndicator from "../../utils/LoadingIndicator";

const { width } = Dimensions.get("window");

const pictures = [
  { id: 0, img: images.man },
  { id: 1, img: images.man },
  { id: 2, img: images.man },
  { id: 3, img: images.man },
  { id: 4, img: images.meeting_1 },
  { id: 5, img: images.man },
  { id: 6, img: images.man },
  { id: 7, img: images.man },
];

const Home = ({ navigation }: any) => {
  const [slice, setSlice] = useState(3);
  const [modal, setShowModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [photo, setPhoto] = useState<any>(null);
  const { isLoggedIn } = useAppSelector((state) => state.authReducers.login);
  const { userData, loading } = useAppSelector(
    (state) => state.profileReducers.getProfileSlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    if (photo !== null) {
      console.log(photo);
      dispatch(editProfilePhoto(photo));
    }
  }, [photo]);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "image/*",
    });
    if (result.type === "success") {
      setPhoto(result);
    }
  };

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
            <PicturePreview
              image={pictures[imageIndex].img}
              setShowModal={setShowModal}
              setImageIndex={setImageIndex}
              imageIndex={imageIndex}
              length={pictures.length}
            />
          </View>
        </CustomModal>
      )}
      {loading && (
        <CustomModal>
          <View
            style={{
              flexDirection: "row",
              width: width * 0.9,
              flex: 1,
            }}
          >
            <LoadingIndicator />
          </View>
        </CustomModal>
      )}
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingVertical: 10,
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons
                name={"chevron-back"}
                color={COLORS.primary}
                size={30}
              />
            </TouchableOpacity>
            <View
              style={{
                position: "relative",
              }}
            >
              <Image
                source={
                  userData?.data[0]?.photo
                    ? { uri: userData?.data[0]?.photo?.toString() }
                    : images.man
                }
                style={{
                  width: width / 5,
                  height: width / 5,
                  borderRadius: 100,
                }}
              />
              <Pressable
                onPress={() => {
                  pickDocument();
                }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: -5,
                  borderRadius: 100,
                  padding: 5,
                }}
              >
                <MaterialCommunityIcons
                  name="pencil-circle"
                  size={normalize(24)}
                  color={COLORS.primary}
                />
              </Pressable>
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate("EditProfile");
              }}
            >
              <Text style={{ color: COLORS.primary }}>Edit Profile</Text>
            </Pressable>
          </View>

          <View>
            {loading ? (
              <Text>Loading...</Text>
            ) : (
              <>
                {userData?.data[0]?.member_info.map((item: any) => {
                  return (
                    <View key={item.id} style={styles.fieldContainer}>
                      <View style={styles.fieldContainer}>
                        <Text style={styles.label}>
                          {item.name.toUpperCase()}
                        </Text>
                        <Text style={styles.text}>
                          {item.value === null ? "No data" : item.value}
                        </Text>
                      </View>
                    </View>
                  );
                })}

                <View>
                  {userData?.data[0]?.member_employment_history.map(
                    (item: any) => {
                      return (
                        <View key={item.id} style={styles.fieldContainer}>
                          <View style={styles.fieldContainer}>
                            <Text style={styles.label}>
                              {item?.employer_name_and_addresse}
                            </Text>
                            <Text style={styles.text}>
                              {item?.postion_title}
                            </Text>
                          </View>
                        </View>
                      );
                    }
                  )}
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fieldContainer: {
    marginVertical: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: "300",
    color: COLORS.primary,
  },
  text: {
    fontSize: 16,
    paddingBottom: 10,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
  },
});
