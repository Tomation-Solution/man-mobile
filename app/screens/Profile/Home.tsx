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
import Picture from "../../components/Profile/Picture";
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
                <View
                  style={{
                    marginTop: 20,
                  }}
                >
                  <View style={styles.fieldContainer}>
                    <Text
                      style={[
                        styles.label,
                        {
                          borderBottomColor: COLORS.primary,
                          borderBottomWidth: 1,
                          paddingVertical: 6,
                          fontWeight: "bold",
                        },
                      ]}
                    >
                      EDUCATION
                      <Text
                        style={{
                          fontStyle: "italic",
                        }}
                      >
                        (include all college or university degrees)
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.fieldContainer}>
                    <Text style={styles.label}>
                      NAME AND LOCATION OF INSTITUTION
                    </Text>
                    <Text style={styles.text}>lorem school</Text>
                  </View>
                  <View style={styles.outerContainer}>
                    <View style={[styles.fieldContainer, { flex: 1 }]}>
                      <Text style={styles.label}>Major</Text>
                      <Text style={styles.text}>lorem</Text>
                    </View>
                    <View
                      style={[
                        styles.fieldContainer,
                        { flex: 1, marginLeft: 30 },
                      ]}
                    >
                      <Text style={styles.label}>Degree</Text>
                      <Text style={styles.text}>lorem</Text>
                    </View>
                  </View>
                </View>

                <View>
                  <Text style={styles.label}>PICTURES</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 20,
                      flexWrap: "wrap",
                    }}
                  >
                    {pictures.slice(0, slice + 1).map(({ id, img }) => (
                      <Picture
                        key={id}
                        id={id}
                        image={img}
                        slice={slice}
                        total={pictures.length}
                        setSlice={setSlice}
                        setShowModal={() => setShowModal(!modal)}
                        setImageIndex={setImageIndex}
                      />
                    ))}
                  </View>
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