import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const Picture = ({
  image,
  id,
  slice,
  total,
  setSlice,
  setShowModal,
  setImageIndex,
}: any) => {
  const handlePress = () => {
    setImageIndex(id);
    setShowModal();
  };

  return (
    <View style={[styles.picture]}>
      {slice === id && (
        <TouchableOpacity
          onPress={() => setSlice(total)}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            zIndex: 3,
            width: width / 5.5,
            height: width / 5.5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            +{total - (id + 1)}
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={image}
          style={{
            width: width / 5.5,
            height: width / 5.5,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Picture;

const styles = StyleSheet.create({
  picture: {
    borderRadius: 15,
    overflow: "hidden",
    width: width / 5.5,
    height: width / 5.5,
    position: "relative",
    marginBottom: 20,
  },
});
