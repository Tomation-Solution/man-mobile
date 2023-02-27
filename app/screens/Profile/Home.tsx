import {
  Dimensions,
  Image,
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
// import Picture from "../../components/Profile/Picture";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProfile } from "../../store/slices/profile/getProfileSlice";

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
  const { isLoggedIn } = useAppSelector((state) => state.authReducers.login);
  const { userData, loading } = useAppSelector(
    (state) => state.profileReducers.getProfileSlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProfile());
    }
  }, []);

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
            <Image
              source={images.man}
              style={{
                width: width / 5,
                height: width / 5,
                borderRadius: 100,
              }}
            />

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate("EditProfile");
              }}
            >
              <Text style={{ color: COLORS.primary }}>Edit Profile</Text>
            </TouchableOpacity>
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
