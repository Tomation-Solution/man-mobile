import AsyncStorage from "@react-native-async-storage/async-storage";

export const retrieveUserDetails = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("userDetails");
    // console.log("Retrieved user details:", jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("An error occurred while retrieving user details:", e);
  }
};

export const storeUserDetails = async (userDetails: any) => {
  try {
    await AsyncStorage.setItem("userDetails", userDetails);
  } catch (error) {
    console.log(error);
  }
};
