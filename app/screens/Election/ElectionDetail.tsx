import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { Container, HomeHeader, CustomModal } from "../../components";
import * as Progress from "react-native-progress";
import { COLORS } from "../../constants/color";
import { horizontalScale, verticalScale } from "../../constants/metric";
import Error from "./component/OnConfirmStatus";
import { useRoute } from "@react-navigation/native";

interface ElectionDetailsProps {
  route: any;
  navigation: any;
}

const ElectionDetail = ({ navigation, route }: ElectionDetailsProps) => {
  const altRoute = useRoute();
  const profile = route?.params?.profile || altRoute?.params || {};

  console.log("profileis our", profile.member);

  const [modalVisible, setModalVisible] = useState(false);
  const onModalPress = () => {
    setModalVisible(!modalVisible);
  };

  const [progress, setProgress] = useState(1);

  return (
    <ScrollView>
      <Container>
        <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
          {/* <NotificationModal onPress={onModalPress} /> */}
          <Error onPress={modalVisible} />
        </CustomModal>
        <HomeHeader
          navigation={navigation}
          title={profile.title || "Details " + profile.id}
          back={navigation.goBack()}
        />

        <Text style={styles.electionTitle}>
          {" "}
          {profile.name} an Aspirant for the position of {profile.position}.Man
        </Text>
        <View style={styles.newsCabinet}>
          <View style={styles.newsImageActionContainer}>
            <View style={styles.newsImageContainer}>
              <Image
                source={{
                  uri: profile?.upload_manifesto_image
                    ? profile.upload_manifesto_image.toString()
                    : undefined,
                }}
                resizeMode="cover"
                style={styles.electionImage}
              />
            </View>
          </View>
        </View>

        <View style={styles.containerflex}>
          <View style={styles.contianer}>
            <Progress.Bar
              width={300}
              height={20}
              progress={progress}
              color={"#5cb85c"}
              borderRadius={5}
              borderColor={"#5cb85c"}
            />
          </View>

          <View style={styles.rowSection}>
            <Text style={styles.voteProgress}>
              {" "}
              {`${(progress * 2).toFixed(0)}% of 100% (200 Votes)`}{" "}
            </Text>

            <TouchableOpacity
              onPress={() => onModalPress()}
              style={styles.votingbtn}
            >
              <Text style={styles.voteText}>Vote</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.electionrow}>
          <View>
            <Text style={styles.Bio}> Bio </Text>
            <Text style={[styles.biotext]}>
              {profile.name}an Aspirant for the position of {"ceo"}.Man
              {profile.aspirantBio[0]}
            </Text>
          </View>
        </View>

        <View style={styles.detailssection}>
          <Text style={styles.sectiontitle}> Manifesto</Text>
          <Text style={styles.destailsText}>{profile.aspirantBio[1]}</Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 14,
                color: "#2b3513",
                marginVertical: 18,
                fontWeight: "500",
                paddingBottom: 10,
                textDecorationLine: "underline",
              }}
            >
              {" "}
              Download full Manifesto
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </ScrollView>
  );
};
export default ElectionDetail;

const styles = StyleSheet.create({
  electionTitle: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
  },
  newsCabinet: {
    marginVertical: 15,
  },
  newsImageActionContainer: {
    position: "relative",
  },
  newsImageContainer: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  electionImage: {
    width: "94%",
    elevation: 4,
    height: 200,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "black",
    borderRadius: 10,
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 3 },
  },

  containerflex: {
    borderRadius: 4,
    padding: 10,
    marginVertical: 0,
  },
  contianer: {},

  rowSection: {
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 100,
    marginBottom: 10,
  },
  votingbtn: {
    marginVertical: 0,
    borderColor: COLORS.primary,
    borderRadius: 4,
    borderWidth: 2,
    paddingHorizontal: 39,
    paddingVertical: 8,
    alignItems: "flex-end",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },

  voteText: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "500",
    alignItems: "center",
    color: COLORS.primary,
  },
  voteProgress: {
    marginVertical: 10,
    fontSize: 14,
    fontWeight: "400",
  },
  electionrow: {
    flexDirection: "column",
    flex: 0.5,
    borderRadius: 6,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: COLORS.primary,
  },
  Bio: {
    fontWeight: "400",
    fontSize: 19,
    textAlign: "justify",
    color: "#fff",
  },
  biotext: {
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 19,
    padding: 5,
    marginVertical: 5,
    color: "#fff",
  },
  sectiontitle: {
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    marginVertical: 5,
  },
  sectiontxt: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 20,
  },
  detailssection: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginVertical: 15,
  },
  destailsText: {
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 19,
    padding: 5,
  },
});
