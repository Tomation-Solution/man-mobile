import { StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../constants/color";
import { EnvironmentContext } from "../DrawerNav";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/slices/auth/loginSlice";
import { moderateScale, normalize } from "../../constants/metric";

interface DrawerLabelProps {
  focused: boolean;
  title: string;
  icon: any;
  hasSwitch?: boolean;
  hasSubMenus?: boolean;
  subMenus?: any;
  navigation?: any;
  isAnAction?: any;
  hasSwitchMenu?: any;
  menuOn?: string;
  setMenuOn?: any;
  name?: string;
  environment?: any;
  setEnvironment?: any;
  hasChapter?: boolean;
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
  hasSwitchMenu,
  menuOn,
  setMenuOn,
  name,
  environment,
  setEnvironment,
  hasChapter,
}: DrawerLabelProps) => {
  const [showSubMenus, setShowSubMenus] = React.useState(false);
  const [switchMenuActive, setSwitchMenuActive] = React.useState<
    number | string
  >();
  const [switchMenu, setSwitchMenu] = React.useState<any>(false);

  const dispatch = useAppDispatch();

  const handleSwitchMenu = (
    id: number,
    environment?: string,
    specialCase?: boolean
  ) => {
    if (specialCase) {
      if (switchMenuActive === id - 1) {
        setSwitchMenuActive("");
        setEnvironment(() => {
          return { environment: "", id: "" };
        });
      } else {
        setSwitchMenuActive(id - 1);
        setEnvironment(() => {
          return { environment: environment, id: id };
        });
      }
    } else {
      if (switchMenuActive === id) {
        setSwitchMenuActive("");
        setEnvironment(() => {
          return { environment: "", id: "" };
        });
      } else {
        setSwitchMenuActive(id);
        setEnvironment(() => {
          return { environment: name, id: id };
        });
      }
    }
  };

  const handleOnPress = () => {
    // if (!hasSwitchMenu) return;
    if (hasSwitch) {
      if (menuOn === title) {
        setMenuOn("");
        setSwitchMenuActive("");
      } else {
        setMenuOn(title);
        setSwitchMenuActive("");
      }
    } else if (hasSubMenus) {
      setShowSubMenus(!showSubMenus);
    } else if (isAnAction) {
      isAnAction();
    } else {
      if (title === "Logout") {
        dispatch(logout());
      } else navigation.navigate(title);
    }
  };

  const envnSwtichHandler = (id: number) => {
    setSwitchMenu(!switchMenu);
    console.log(environment);
    if (switchMenu) {
      setMenuOn("");
      setSwitchMenuActive("");
      setEnvironment(() => {
        return { environment: "", id: "" };
      });
    } else {
      setMenuOn(title);
      setEnvironment(() => {
        return { environment: name, id: id };
      });
    }
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleOnPress}
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
                fontSize: normalize(15),
                marginLeft: 10,
              }}
            >
              {title}
            </Text>
          </View>

          {hasSwitch && hasSwitchMenu && (
            <TouchableOpacity onPress={() => setSwitchMenu(!switchMenu)}>
              <MaterialCommunityIcons
                name={showSubMenus ? "chevron-up" : "chevron-down"}
                size={20}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          )}

          {/* here is the code for the switch menu  */}
          {hasSwitch && !hasSwitchMenu && (
            <View style={{}}>
              <TouchableOpacity onPress={() => envnSwtichHandler(1)}>
                <MaterialCommunityIcons
                  name={
                    menuOn === title ? "toggle-switch" : "toggle-switch-off"
                  }
                  size={30}
                  color={menuOn === title ? COLORS.primary : "gray"}
                />
              </TouchableOpacity>
            </View>
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
                    fontSize: normalize(15),
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

      {menuOn === title && hasSwitchMenu && (
        <>
          {hasChapter && (
            <TouchableOpacity
              onPress={() => handleSwitchMenu(1, "chapters", true)}
              activeOpacity={0.7}
              style={{
                marginVertical: 6,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                paddingVertical: 10,
                paddingLeft: 35,
                width: "100%",
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  color: COLORS.primary,
                  fontWeight: switchMenuActive === 0 ? "bold" : "normal",
                  fontSize: normalize(15),
                  marginLeft: 10,
                }}
              >
                Chapter Environment
              </Text>
              <MaterialCommunityIcons
                name={
                  switchMenuActive === 0 ? "toggle-switch" : "toggle-switch-off"
                }
                size={30}
                color={switchMenuActive === 0 ? COLORS.primary : "gray"}
              />
            </TouchableOpacity>
          )}
          {hasSwitchMenu.map((item: any) => {
            return (
              <TouchableOpacity
                onPress={() => handleSwitchMenu(item.id)}
                activeOpacity={0.7}
                key={item.id}
                style={{
                  marginVertical: 6,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: normalize(10),
                  paddingVertical: normalize(8),
                  paddingLeft: 35,
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight:
                      switchMenuActive === item.id ? "bold" : "normal",
                    fontSize: normalize(15),
                    marginLeft: 10,
                  }}
                >
                  {item?.name.length > 20
                    ? item?.name.slice(0, 25) + "..."
                    : item?.name}
                </Text>
                <MaterialCommunityIcons
                  name={
                    switchMenuActive === item.id
                      ? "toggle-switch"
                      : "toggle-switch-off"
                  }
                  size={30}
                  color={switchMenuActive === item.id ? COLORS.primary : "gray"}
                />
              </TouchableOpacity>
            );
          })}
        </>
      )}
    </>
  );
};

export default DrawerLabel;

const styles = StyleSheet.create({});
