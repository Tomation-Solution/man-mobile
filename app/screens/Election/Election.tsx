import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Container, HomeHeader, ElectionsCard } from "../../components";
import { ScrollView } from "react-native-gesture-handler";

const Election = ({ navigation }: any) => {
  const data = [
    {
      id: 1,
      position: " President ",
      name: "mr Kunle",
      title: " Election",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
    },
    {
      id: 2,
      position: " Secretary ",
      name: "mr Kunle",
      title: " Election",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
    },
    {
      id: 3,
      position: " manager",
      name: "mr Kunle",
      title: " Election",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
    },
    {
      id: 4,
      position: " President ",
      name: "mr Kunle",
      title: " Election",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
    },
    {
      id: 5,
      position: " President ",
      name: "mr Kunle",
      title: " Election",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
    },
    {
      id: 6,
      position: " President ",
      name: "mr Kunle",
      title: " Election",

      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
    },
    {
      id: 7,
      position: " President ",
      name: "mr Kunle",
      title: " Election",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
    },
    {
      id: 8,
      position: " President ",
      name: "mr Kunle",
      title: " Election",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
    },
    {
      id: 9,
      position: " President ",
      title: " Election",
      name: "mr Kunle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse expli",
    },
  ];

  return (
    <Container>
      <HomeHeader
        title="Elections"
        navigation={navigation}
        back={navigation.goBack}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((data) => (
          <ElectionsCard
            key={data.id}
            id={data.id}
            position={data.position}
            navigation={navigation}
            onPress={() => navigation.navigate("ProfileDetails", { data })}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Election;

const styles = StyleSheet.create({});
