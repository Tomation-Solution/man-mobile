import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GalleryCard, HomeHeader, SearchBar } from "../../components";
import { images } from "../../assets/dummyData";
import { ScrollView } from "react-native-gesture-handler";

const data = [
  {
    id: 1,
    title: "Gallery 1",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
    ],
    images: [images.meeting_1, images.meeting_2, images.meeting_3],
  },
  {
    id: 2,
    title: "Gallery 2",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
    ],
    images: [images.meeting_1, images.meeting_2, images.meeting_3],
  },
  {
    id: 3,
    title: "Gallery 3",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
    ],
    images: [images.meeting_1, images.meeting_2, images.meeting_3],
  },
  {
    id: 4,
    title: "Gallery 4",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
    ],
    images: [images.meeting_1, images.meeting_2, images.meeting_3],
  },
  {
    id: 5,
    title: "Gallery 5",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
    ],
    images: [images.meeting_1, images.meeting_2, images.meeting_3],
  },
  {
    id: 6,
    title: "Gallery 6",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, autem quaerat culpa numquam sapiente officia saepe possimus corrupti voluptatem facilis perferendis ut maiores, itaque dignissimos veritatis vel delectus obcaecati nesciunt ipsam hic fugit, expedita blanditiis. Sapiente voluptas deleniti repellendus natus quidem tenetur sed reiciendis! Odit, molestiae repellendus et ipsam eos quis iusto asperiores eius eum facilis optio culpa. Laudantium sequi ullam dignissimos enim eius mollitia vel autem esse explicabo officiis quaerat provident, modi quidem corrupti iste ratione sunt dolorem incidunt alias dolores! Reiciendis adipisci minus ducimus. Alias magnam voluptatibus itaque tempora ex rerum dolor dolorum recusandae ullam amet. Laudantium, recusandae.",
    ],
    images: [images.meeting_1, images.meeting_2, images.meeting_3],
  },
];

const Home = ({ navigation }: any) => {
  return (
    <View>
      <HomeHeader navigation={navigation} title={"Gallery"} />

      <SearchBar hasFilter />
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          {data.map((gallery) => (
            <GalleryCard
              key={gallery.id}
              title={gallery.title}
              description={gallery.description}
              images={gallery.images}
              onPress={() => navigation.navigate("Details", { gallery })}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
