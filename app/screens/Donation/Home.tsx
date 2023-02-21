import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Container, HomeHeader } from "../../components";
import DonationCard from "./DonationCard";
import { ScrollView } from "react-native-gesture-handler";
import { images } from "../../assets/dummyData";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet.",
    image: images.donation_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
    projectDetails: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus",
    ],
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet.",
    image: images.meeting_2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
    projectDetails: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus",
    ],
  },

  {
    id: 3,
    title: "Lorem ipsum dolor sit amet.",
    image: images.donation_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
    projectDetails: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus",
    ],
  },

  {
    id: 4,
    title: "Lorem ipsum dolor sit amet.",
    image: images.meeting_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
    projectDetails: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus",
    ],
  },

  {
    id: 5,
    title: "Lorem ipsum dolor sit amet.",
    image: images.donation_1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corrupti aut tempore nobis tempora deleniti velit amet voluptatum animi incidunt quibusdam, eaque dolore omnis molestiae.",
    projectDetails: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus",
    ],
  },
];

const Home = ({ navigation }: any) => {
  return (
    <Container style={styles.container}>
      <HomeHeader
        navigation={navigation}
        title={"Fund a Project"}
        back={"back"}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item) => {
          return (
            <DonationCard
              key={item.id}
              item={item}
              onPress={() => navigation.navigate("Details1", { item })}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
