import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { Globalstyles } from "../../globals/styles";
import { FontAwesome5, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const data = [
  {
    name: "Events",
    icon: <FontAwesome5 name="calendar-check" size={45} color={COLORS.icon} />,
  },
  {
    name: "Meetings",
    icon: <FontAwesome5 name="calendar-check" size={45} color={COLORS.icon} />,
  },
  {
    name: "Publications",
    icon: <FontAwesome name="picture-o" size={45} color={COLORS.icon} />,
  },
  {
    name: "Gallery",
    icon: <FontAwesome name="picture-o" size={45} color={COLORS.icon} />,
  },
  {
    name: "Fund A Project",
    icon: <FontAwesome5 name="gift" size={45} color={COLORS.icon} />,
  },
  {
    name: "Service Request",
    icon: (
      <MaterialIcons name="home-repair-service" size={45} color={COLORS.icon} />
    ),
  },
];

const FeedNavButton = ({
  icon,
  name,
  onPress,
}: {
  icon: any;
  name: string;
  onPress: any;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.feedNavButton}
    >
      <View>{icon}</View>
      <Text style={{ fontSize: 14 }}>{name}</Text>
    </TouchableOpacity>
  );
};

const FeedsNav = ({ navigation }: any) => {
  return (
    <View style={[Globalstyles.section]}>
      <Text style={[Globalstyles.sectionHeaderText, { marginBottom: 20 }]}>
        Feeds
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <FeedNavButton
            key={index}
            icon={item.icon}
            name={item.name}
            onPress={() => navigation.navigate(item.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeedsNav;

const styles = StyleSheet.create({
  feedNavButton: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});
