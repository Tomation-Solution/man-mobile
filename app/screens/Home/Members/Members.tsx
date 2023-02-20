import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Container, HomeHeader, SearchBar } from "../../../components";
import { COLORS } from "../../../constants/color";
import { images } from "../../../assets/dummyData";

import { ScrollView } from "react-native-gesture-handler";

import MembersCard from "../../../components/Members/MembersCard";

const data = [
  {
    id: 1,
    name: "MD Abubakar",
    image: images.man_1,
    portfolio: "Chairman",
    position: "Blaid Group  MD/ CEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
  },
  {
    id: 2,
    name: "MD Abubakar",
    image: images.man_1,
    portfolio: "Vice President",
    position: "Blaid Group  MD/ CEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
  },
  {
    id: 3,
    name: "MD Abubakar",
    image: images.man_1,
    portfolio: "Chairman",
    position: "Blaid Group  MD/ CEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
  },
  {
    id: 4,
    name: "MD Abubakar",
    image: images.man_1,
    portfolio: "Vice President",
    position: "Blaid Group  MD/ CEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
  },
];

const Members = ({ navigation }: any) => {
  return (
    <Container style={styles.container}>
      <HomeHeader
        navigation={navigation}
        title="Members"
        back="back"
        titleColor={COLORS.blue}
      />
      <SearchBar hasFilter />
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item) => {
          return <MembersCard key={item.id} item={item} />;
        })}
      </ScrollView>
    </Container>
  );
};

export default Members;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
