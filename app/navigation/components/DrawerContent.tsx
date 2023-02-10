import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { appImages } from "../../assets/app/images";
import DrawerLabel from "./DrawerLabel";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { appData } from "../../assets/app/data";
import { ScrollView } from "react-native-gesture-handler";

const DrawerContent = ({ navigation, state, index }: any) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Image source={appImages.logo} style={styles.logo} />
        <Text style={styles.title}>{appData.orgnizationName}</Text>
      </View>

      <DrawerLabel
        focused={state?.index === null} // keep this as null for switches
        title="Members Environment"
        icon={<FontAwesome name="group" size={20} color={COLORS.primary} />}
        hasSwitch
      />
      <DrawerLabel
        focused={state?.index === null} // keep this as null for switches
        title="Exco Environment"
        icon={<Ionicons name="person" size={20} color={COLORS.primary} />}
        hasSwitch
      />

      <DrawerLabel
        focused={state?.index === null} // keep this as null for switches
        title="Committee Environment"
        icon={<Ionicons name="people" size={20} color={COLORS.primary} />}
        hasSwitch
      />
      <DrawerLabel
        focused={state?.index === 0}
        title="Homescreen"
        icon={<Ionicons name="home" size={20} color={COLORS.primary} />}
        navigation={navigation}
      />
      <DrawerLabel
        focused={state?.index === 1}
        title="News"
        icon={<Ionicons name="newspaper" size={20} color={COLORS.primary} />}
        navigation={navigation}
      />
      <DrawerLabel
        focused={state?.index === 2}
        title="Events"
        icon={<Ionicons name="calendar" size={20} color={COLORS.primary} />}
        navigation={navigation}
      />
      <DrawerLabel
        focused={state?.index === 3}
        title="Election"
        icon={<Ionicons name="flag" size={20} color={COLORS.primary} />}
        navigation={navigation}
      />
      <DrawerLabel
        focused={state?.index === 4}
        title="Resources"
        icon={<Ionicons name="book" size={20} color={COLORS.primary} />}
        navigation={navigation}
        hasSubMenus
        subMenus={[
          {
            id: 1,
            title: "Bible",
            icon: <Ionicons name="book" size={20} color={COLORS.primary} />,
          },
          {
            id: 2,
            title: "Sermons",
            icon: <Ionicons name="book" size={20} color={COLORS.primary} />,
          },
          {
            id: 3,
            title: "Prayer",
            icon: <Ionicons name="book" size={20} color={COLORS.primary} />,
          },
          {
            id: 4,
            title: "Devotionals",
            icon: <Ionicons name="book" size={20} color={COLORS.primary} />,
          },
        ]}
      />
      <DrawerLabel
        focused={state?.index === 5}
        title="Gallery"
        icon={<Ionicons name="images" size={20} color={COLORS.primary} />}
        navigation={navigation}
      />
      <DrawerLabel
        focused={state?.index === 6}
        title="Services"
        icon={
          <MaterialCommunityIcons
            name="toolbox"
            size={20}
            color={COLORS.primary}
          />
        }
        navigation={navigation}
      />
      <DrawerLabel
        focused={state?.index === 7}
        title="Support"
        icon={<Ionicons name="heart" size={20} color={COLORS.primary} />}
        navigation={navigation}
        hasSubMenus
        subMenus={[
          {
            id: 1,
            title: "Support",
            icon: <Ionicons name="heart" size={20} color={COLORS.primary} />,
          },
          {
            id: 2,
            title: "Admin Suport",
            icon: <Ionicons name="people" size={20} color={COLORS.primary} />,
          },
          {
            id: 3,
            title: "Technical Suport",
            icon: (
              <Ionicons name="construct" size={20} color={COLORS.primary} />
            ),
          },
        ]}
      />
      <DrawerLabel
        focused={state?.index === null} // keep this as null for switches
        title="Logout"
        icon={<Ionicons name="log-out" size={20} color={COLORS.primary} />}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});
