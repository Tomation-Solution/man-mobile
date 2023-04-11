import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { images } from "../../assets/dummyData";
import { appImages } from "../../assets/app/images";
import {
  horizontalScale,
  normalize,
  verticalScale,
} from "../../constants/metric";
import { COLORS } from "../../constants/color";
import { SPACING } from "../../globals/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { retrieveUserDetails } from "../../utils/helperFunctions/userDataHandlers";
import { useAppSelector } from "../../store/hooks";

interface Props {
  navigation?: any;
  title?: any;
  back?: any;
  isTitleComponent?: any;
  showNotification?: boolean;
}
const HomeHeader = ({
  navigation,
  title,
  back,
  isTitleComponent,
  showNotification,
}: Props) => {
  const { isLoggedIn } = useAppSelector((state) => state.authReducers.login);
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    if (isLoggedIn) {
      retrieveUserDetails().then((data: any) => {
        setUserData(data);
      });
    }
  }, [isLoggedIn]);

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          back ? back() : navigation.openDrawer();
        }}
      >
        <Ionicons
          name={back ? "chevron-back" : "menu"}
          color={COLORS.primary}
          size={normalize(30)}
        />
      </TouchableOpacity>

      {isTitleComponent ? (
        isTitleComponent
      ) : title ? (
        <Text style={{ fontSize: normalize(14) }}>{title?.toUpperCase()}</Text>
      ) : (
        <>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <View style={styles.imageContainer}>
              <Image
                source={
                  userData?.profileImage
                    ? { uri: userData?.profile_image?.toString() }
                    : images.man
                }
                style={{
                  width: verticalScale(30),
                  height: horizontalScale(30),
                }}
              />
            </View>
          </TouchableOpacity>
        </>
      )}

      {!back && (
        <View style={{}}>
          <Image
            source={appImages.full_logo}
            style={{
              width: verticalScale(80),
              height: horizontalScale(50),
            }}
          />
        </View>
      )}

      {showNotification && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Notification")}
          style={styles.notificationContainer}
        >
          <FontAwesome
            name="bell"
            color={COLORS.primary}
            size={normalize(20)}
          />
          <View style={styles.redDot} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SPACING.sectionPadding,
  },
  imageContainer: {
    height: horizontalScale(30),
    width: verticalScale(30),
    borderRadius: 100,
    overflow: "hidden",
  },
  notificationContainer: {
    position: "relative",
  },
  redDot: {
    width: verticalScale(8),
    height: horizontalScale(8),
    backgroundColor: "crimson",
    borderRadius: 10,
    position: "absolute",
    top: 0,
    right: 0,
  },
});
