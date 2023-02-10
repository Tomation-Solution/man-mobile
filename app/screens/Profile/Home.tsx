import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Container, CustomModal } from "../../components";
import { images } from "../../assets/dummyData";
import { COLORS } from "../../constants/color";
import { Ionicons } from "@expo/vector-icons";
import PicturePreview from "../../components/Profile/PicturePreview";
import Picture from "../../components/Profile/Picture";

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
            <View style={styles.feidlContainer}>
              <Text style={styles.label}>NAME</Text>
              <Text style={styles.text}>Tomiwa Ayandele</Text>
            </View>
            <View style={styles.feidlContainer}>
              <Text style={styles.label}>PHONE NUMBER</Text>
              <Text style={styles.text}>+234 816 453 7857</Text>
            </View>
            <View style={styles.feidlContainer}>
              <Text style={styles.label}>EMAIL</Text>
              <Text style={styles.text}>JohnKolawole98@yahoo.com</Text>
            </View>
            <View style={styles.feidlContainer}>
              <Text style={styles.label}>ADDRESS</Text>
              <Text style={styles.text}>
                No 20, Kings Avenue, Ikoyi, Lagos.
              </Text>
            </View>
            <View style={styles.feidlContainer}>
              <Text style={styles.label}>Date of Birth</Text>
              <Text style={styles.text}>12/200</Text>
            </View>

            <View style={styles.outerContainer}>
              <View style={[styles.feidlContainer, { flex: 1 }]}>
                <Text style={styles.label}>Citizenship</Text>

                <Text style={styles.text}>Nigerian</Text>
              </View>
              <View
                style={[styles.feidlContainer, { flex: 1, marginLeft: 30 }]}
              >
                <Text style={styles.label}>Gender</Text>

                <Text style={styles.text}>Male</Text>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
              }}
            >
              <View style={styles.feidlContainer}>
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
                    {" "}
                    (include all college or university degrees)
                  </Text>
                </Text>
              </View>
              <View style={styles.feidlContainer}>
                <Text style={styles.label}>
                  NAME AND LOCATION OF INSTITUTION
                </Text>
                <Text style={styles.text}>lorem school</Text>
              </View>
              <View style={styles.outerContainer}>
                <View style={[styles.feidlContainer, { flex: 1 }]}>
                  <Text style={styles.label}>Major</Text>
                  <Text style={styles.text}>lorem</Text>
                </View>
                <View
                  style={[styles.feidlContainer, { flex: 1, marginLeft: 30 }]}
                >
                  <Text style={styles.label}>Degree</Text>
                  <Text style={styles.text}>lorem</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
              }}
            >
              <View style={styles.feidlContainer}>
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
                  LANGUAGE PROFICIENCY
                </Text>
              </View>

              <View style={styles.outerContainer}>
                <View style={[styles.feidlContainer, { flex: 1 }]}>
                  <Text style={styles.label}>LANGUAGE</Text>
                  <Text style={styles.text}>lorem</Text>
                </View>
                <View
                  style={[styles.feidlContainer, { flex: 1, marginLeft: 20 }]}
                >
                  <Text style={styles.label}>Speaking</Text>
                  <Text style={styles.text}>lorem</Text>
                </View>
                <View
                  style={[styles.feidlContainer, { flex: 1, marginLeft: 20 }]}
                >
                  <Text style={styles.label}>Reading</Text>
                  <Text style={styles.text}>lorem</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
              }}
            >
              <View style={styles.feidlContainer}>
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
                  EMPLOYMENT HISTORY
                </Text>
              </View>
              <View style={styles.feidlContainer}>
                <Text style={styles.label}>POSITION TITLE</Text>
                <Text style={styles.text}>lorem school</Text>
              </View>

              <View style={styles.feidlContainer}>
                <Text style={styles.label}>EMPLOYER' S NAME AND ADDRESS</Text>
                <Text style={styles.text}>lorem school</Text>
              </View>

              <View style={styles.outerContainer}>
                <View style={[styles.feidlContainer, { flex: 1 }]}>
                  <Text style={styles.label}>from</Text>
                  <Text style={styles.text}>lorem</Text>
                </View>
                <View
                  style={[styles.feidlContainer, { flex: 1, marginLeft: 30 }]}
                >
                  <Text style={styles.label}>to</Text>
                  <Text style={styles.text}>lorem</Text>
                </View>
              </View>
            </View>

            <View style={styles.outerContainer}>
              <View style={[styles.feidlContainer, { flex: 1 }]}>
                <Text style={styles.label}>Role</Text>
                <Text style={styles.text}>Accountant</Text>
              </View>
              <View
                style={[styles.feidlContainer, { flex: 1, marginLeft: 30 }]}
              >
                <Text style={styles.label}>Year Employed</Text>
                <Text style={styles.text}>2005</Text>
              </View>
            </View>

            <View style={styles.outerContainer}>
              <View style={[styles.feidlContainer, { flex: 1 }]}>
                <Text style={styles.label}>Employment type</Text>
                <Text style={styles.text}>Full Time</Text>
              </View>
              <View
                style={[styles.feidlContainer, { flex: 1, marginLeft: 30 }]}
              >
                <Text style={styles.label}>Phone Number</Text>
                <Text style={styles.text}>+234 816 453 7857</Text>
              </View>
            </View>
            <View style={styles.feidlContainer}>
              <Text style={styles.label}>BIO</Text>
              <Text style={styles.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis est fugiat ducimus quasi cupiditate rem voluptatum
                quibusdam beatae dicta, nihil libero quidem, sapiente mollitia
                provident natus id maxime dolore magni asperiores earum.
                Deserunt dicta culpa, ut quam aliquid soluta eos animi dolor qui
                vero nesciunt maxime asperiores consectetur expedita quaerat!
              </Text>
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
  feidlContainer: {
    marginVertical: 12,
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
