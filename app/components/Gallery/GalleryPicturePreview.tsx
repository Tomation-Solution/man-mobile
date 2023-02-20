import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const GalleryPicturePreview = ({
  image,
  setShowModal,
  setImageIndex,
  length,
  imageIndex,
}: any) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "100%",
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: width * 0.9,
          zIndex: 3,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            setImageIndex((prev: any) => {
              if (prev === 0) {
                return length - 1;
              } else {
                return prev - 1;
              }
            })
          }
          style={styles.picturePreviewActions}
        >
          <Ionicons name={"chevron-back"} color={"white"} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowModal(false)}
          style={styles.picturePreviewActions}
        >
          <Ionicons name={"close"} color={"white"} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setImageIndex((prev: any) => {
              if (prev === length - 1) {
                return 0;
              } else {
                return prev + 1;
              }
            })
          }
          style={styles.picturePreviewActions}
        >
          <Ionicons name={"chevron-forward"} color={"white"} size={30} />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: image ? image.toString() : undefined }}
        style={{
          width: width * 0.9,
          height: width * 0.9,
        }}
      />
    </View>
  );
};

export default GalleryPicturePreview;

const styles = StyleSheet.create({
  picturePreviewActions: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
});
