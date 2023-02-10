import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Container, HomeHeader, SearchBar } from "../../components";
import { COLORS } from "../../constants/color";
import CompanyWide from "./EventTypes/CompanyWide";
import Team from "./EventTypes/Team";
import Staff from "./EventTypes/Staff";

const NavButton = ({
  name,
  active,
  setActive,
}: {
  name: string;
  active: string;
  setActive: (name: string) => void;
}) => {
  const isActive = active === name;
  return (
    <TouchableOpacity
      onPress={() => setActive(name)}
      style={{
        borderBottomColor: isActive ? COLORS.primary : "gray",
        borderBottomWidth: 2,
        paddingVertical: 6,
        flex: 1,
      }}
    >
      <Text
        style={{
          color: isActive ? COLORS.primary : "gray",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }: any) => {
  const [active, setActive] = React.useState("Company Wide");
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <HomeHeader title={`${active} Events`} navigation={navigation} />
        <SearchBar hasFilter />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <NavButton name="Company Wide" active={active} setActive={setActive} />
        <NavButton name="Team" active={active} setActive={setActive} />

        <NavButton name="Staff" active={active} setActive={setActive} />
      </View>
      <View>
        {active === "Company Wide" && <CompanyWide navigation={navigation} />}
        {active === "Team" && <Team navigation={navigation} />}
        {active === "Staff" && <Staff navigation={navigation} />}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 35,
  },
  navButton: {},
});
