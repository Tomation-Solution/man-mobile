import { StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants/color";

interface DrawerLabelProps {
  focused: boolean;
  title: string;
  icon: any;
  hasSwitch?: boolean;
  hasSubMenus?: boolean;
  subMenus?: any;
  navigation?: any;
  isAnAction?: any;
}

const DrawerLabel = ({
  focused,
  title,
  icon,
  hasSubMenus,
  hasSwitch,
  navigation,
  subMenus,
  isAnAction,
}: DrawerLabelProps) => {
  const [showSubMenus, setShowSubMenus] = React.useState(false);
  const [on, setOn] = React.useState(false);
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          if (hasSwitch) {
            setOn(!on);
          } else if (hasSubMenus) {
            setShowSubMenus(!showSubMenus);
          } else if (isAnAction) {
            isAnAction();
          } else {
            navigation.navigate(title);
          }
        }}
        style={{ flexDirection: "row" }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: focused ? "#f2f2f2" : "transparent",
            paddingHorizontal: 15,
            paddingVertical: 10,
            width: "100%",
            marginBottom: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {icon}
            <Text
              style={{
                color: COLORS.primary,
                fontWeight: focused ? "bold" : "normal",
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              {title}
            </Text>
          </View>

          {hasSwitch && (
            <TouchableOpacity onPress={() => setOn(!on)}>
              <MaterialCommunityIcons
                name={on ? "toggle-switch-off" : "toggle-switch"}
                size={30}
                color={on ? "gray" : COLORS.primary}
              />
            </TouchableOpacity>
          )}

          {hasSubMenus && (
            <TouchableOpacity onPress={() => setShowSubMenus(!showSubMenus)}>
              <MaterialCommunityIcons
                name={showSubMenus ? "chevron-up" : "chevron-down"}
                size={20}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
      {showSubMenus && (
        <View
          style={{
            backgroundColor: "#f2f2f2",
            paddingHorizontal: 15,
            paddingVertical: 10,
            paddingLeft: 50,
            width: "100%",
            marginBottom: 10,
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {subMenus.map((item: any) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.title)}
                activeOpacity={0.7}
                key={item.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 6,
                }}
              >
                {item.icon}
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: focused ? "bold" : "normal",
                    fontSize: 18,
                    marginLeft: 10,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
};

export default DrawerLabel;

const styles = StyleSheet.create({});
