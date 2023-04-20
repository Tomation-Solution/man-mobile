import {
  Alert,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useEffect, useReducer } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { Container } from "../../components";

import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  clearConfig,
  editProfile,
  getProfile,
} from "../../store/slices/profile/getProfileSlice";
import LoadingIndicator from "../../utils/LoadingIndicator";
import { normalize } from "../../constants/metric";

const EditProfile = ({ navigation }: any) => {
  const appDispatch = useAppDispatch();

  const { userData, profileEditted, loading } = useAppSelector(
    (state) => state.profileReducers.getProfileSlice
  );

  useEffect(() => {
    if (profileEditted) {
      dispatch(clearConfig());
      Alert.alert("Notice", "Profile Edited!", [
        {
          text: "OK",
          onPress: () => {
            navigation.goBack();
          },
        },
      ]);
    }
  }, [profileEditted]);

  const member_info = userData?.data[0]?.member_info;

  const initialFormState = {
    membereducation: [],
    memberemploymenthistory: [],

    member_info: member_info?.map((item: any) => {
      return { [item.name]: item.value || "" };
    }),
  };

  const formReducer = (state: any, action: any) => {
    switch (action.type) {
      case "UPDATE_MEMBER_INFO":
        const temp_mem_info = [...state.member_info];
        const index = temp_mem_info.findIndex(
          (item: any) => Object.keys(item)[0] === action.payload.field
        );
        temp_mem_info[index] = {
          [action.payload.field]: action.payload.value,
        };

        return {
          ...state,
          member_info: temp_mem_info,
        };

      default:
        return state;
    }
  };

  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const submitForm = () => {
    appDispatch(editProfile(formState, userData?.data[0]?.id)).then(
      (res: any) => {
        if (res) {
          Alert.alert("Notice", res.message, [
            {
              text: "OK",
              onPress: () => navigation.goBack(),
            },
          ]);
          console.log("Profile edited successfully", res);
          // navigation.goBack();
        }
      }
    );
  };

  const handleMemberInfoChange = (field: any, value: any) =>
    dispatch({ type: "UPDATE_MEMBER_INFO", payload: { field, value } });

  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingVertical: 10,
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name={"chevron-back"} color={COLORS.primary} size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
          }}
          activeOpacity={0.8}
          onPress={submitForm}
          disabled={loading}
        >
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ color: COLORS.primary }}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <ScrollView
            style={{
              flex: 1,
              marginBottom: 10,
            }}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                marginTop: 20,
              }}
            >
              <View
                style={[
                  styles.feidlContainer,
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.label,
                    {
                      borderBottomColor: COLORS.primary,
                      borderBottomWidth: 1,
                      paddingVertical: 6,
                      fontWeight: "bold",
                      flex: 1,
                      fontSize: 18,
                    },
                  ]}
                >
                  MEMBER INFORMATION
                </Text>
                <View />
              </View>

              {formState.member_info?.map((item: any, index: number) => {
                let curValue: string = Object.values(item)[0] as string;

                return (
                  <View key={index}>
                    <Text
                      style={[
                        styles.label,
                        {
                          borderBottomColor: COLORS.primary,
                          borderBottomWidth: 1,
                          paddingVertical: 6,
                          fontWeight: "bold",
                          flex: 1,
                          fontSize: 18,
                        },
                      ]}
                    >
                      {Object.keys(item)[0]}
                    </Text>
                    <TextInput
                      style={styles.inputField}
                      placeholder={`Enter ${Object.keys(item)[0]}`}
                      value={curValue}
                      onChangeText={(value) =>
                        handleMemberInfoChange(Object.keys(item)[0], value)
                      }
                    />
                  </View>
                );
              })}
            </View>
          </ScrollView>
        )}
      </>
    </Container>
  );
};

export default memo(EditProfile);

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feidlContainer: {
    marginVertical: 12,
  },
  label: {
    fontSize: normalize(11),
    fontWeight: "200",
    color: "black",
  },
  text: {
    fontSize: normalize(14),
    paddingBottom: 10,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
  },
  inputField: {
    fontSize: normalize(14),
    fontWeight: "500",
    color: COLORS.primary,
    marginTop: 8,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
  },
});
