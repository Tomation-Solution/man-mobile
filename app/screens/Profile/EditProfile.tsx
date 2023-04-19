import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useReducer } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { Container } from "../../components";

import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  editProfile,
  getProfile,
} from "../../store/slices/profile/getProfileSlice";
import LoadingIndicator from "../../utils/LoadingIndicator";

const EditProfile = ({ navigation }: any) => {
  const appDispatch = useAppDispatch();

  const { userData, profileEditted, loading } = useAppSelector(
    (state) => state.profileReducers.getProfileSlice
  );

  useEffect(() => {
    if (profileEditted) {
      appDispatch(getProfile());
    }
  }, [profileEditted]);

  const memberEducation = userData?.data[0]?.member_education;
  const memberEmploymentHistory = userData?.data[0]?.member_employment_history;
  const member_info = userData?.data[0]?.member_info;
  // const languageProficiency = userData?.data[0]?.language_proficiency;

  const initialFormState = {
    membereducation: memberEducation.map((education: any) => {
      return {
        name_of_institution: education.name_of_institution || "",
        degree: education.degree || "",
        major: education.major || "",
        year: education.year || "",
      };
    }),
    memberemploymenthistory: memberEmploymentHistory.map((employment: any) => {
      return {
        postion_title: employment.postion_title || "",
        employer_name_and_addresse: employment.employer_name_and_addresse || "",
        start_date: employment.start_date || "",
        end_date: employment.end_date || "",
      };
    }),

    member_info: member_info.map((item: any) => {
      return { [item.name]: item.value || "" };
    }),
  };

  console.log(initialFormState);
  const formReducer = (state: any, action: any) => {
    switch (action.type) {
      case "ADD_EDUCATION":
        return {
          ...state,
          membereducation: [
            ...state.membereducation,
            {
              name_of_institution: "",
              degree: "",
              major: "",
              year: "",
            },
          ],
        };
      case "REMOVE_EDUCATION":
        return {
          ...state,
          membereducation: state.membereducation.slice(0, -1),
        };
      case "UPDATE_EDUCATION":
        return {
          ...state,
          membereducation: state.membereducation.map(
            (education: any, index: number) =>
              index === action.payload.index
                ? { ...education, [action.payload.field]: action.payload.value }
                : education
          ),
        };
      case "ADD_EMPLOYMENT":
        return {
          ...state,
          memberemploymenthistory: [
            ...state.memberemploymenthistory,
            {
              company: "",
              position: "",
              startYear: "",
              endYear: "",
            },
          ],
        };
      case "REMOVE_EMPLOYMENT":
        return {
          ...state,
          memberemploymenthistory: state.memberemploymenthistory.slice(0, -1),
        };
      case "UPDATE_EMPLOYMENT":
        return {
          ...state,
          memberemploymenthistory: state.memberemploymenthistory.map(
            (employment: any, index: number) =>
              index === action.payload.index
                ? {
                    ...employment,
                    [action.payload.field]: action.payload.value,
                  }
                : employment
          ),
        };

      case "UPDATE_MEMBER_INFO":
        const temp_mem_info = [...state.member_info];
        const index = temp_mem_info.findIndex(
          (item: any) => Object.keys(item)[0] === action.payload.field
        );
        temp_mem_info[index] = {
          [action.payload.field]: action.payload.value,
        };
        console.log(temp_mem_info);

        return {
          ...state,
          member_info: temp_mem_info,
        };

      default:
        return state;
    }
  };

  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleAddEducation = () => dispatch({ type: "ADD_EDUCATION" });
  // const handleRemoveEducation = () => dispatch({ type: "REMOVE_EDUCATION" });
  const handleEducationChange = (index: number, field: any, value: any) =>
    dispatch({ type: "UPDATE_EDUCATION", payload: { index, field, value } });

  const handleAddEmployment = () => dispatch({ type: "ADD_EMPLOYMENT" });
  // const handleRemoveEmployment = () => dispatch({ type: "REMOVE_EMPLOYMENT" });
  const handleEmploymentChange = (index: number, field: any, value: any) =>
    dispatch({ type: "UPDATE_EMPLOYMENT", payload: { index, field, value } });

  const submitForm = () => {
    console.log("sending: ", formState);
    appDispatch(editProfile(formState, userData?.data[0]?.id));
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
          <ScrollView showsVerticalScrollIndicator={false}>
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

            {formState.memberemploymenthistory.map(
              (employment: any, index: number) => (
                <View key={index}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.primary,
                        fontWeight: "bold",
                        fontSize: 16,
                        marginTop: 10,
                        textDecorationColor: "crimson",
                        textDecorationLine: employment.is_delete
                          ? "line-through"
                          : "none",
                      }}
                    >
                      Employment History {index + 1}
                    </Text>
                    {/* <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    handleEmploymentChange(index, "is_delete", true);
                    console.log("formastae", formState);
                  }}
                >
                  <Ionicons name={"remove"} color={COLORS.primary} size={30} />
                </TouchableOpacity> */}
                  </View>
                  <View style={[styles.feidlContainer, { flex: 1 }]}>
                    <Text style={styles.label}>Company Name and Address</Text>
                    <TextInput
                      editable={employment.is_delete ? false : true}
                      value={employment.employer_name_and_addresse}
                      style={styles.inputField}
                      onChangeText={(value) =>
                        handleEmploymentChange(
                          index,
                          "employer_name_and_addresse",
                          value
                        )
                      }
                      placeholder="Enter Comapny Name"
                    />
                  </View>
                  <View style={[styles.feidlContainer, { flex: 1 }]}>
                    <Text style={styles.label}>Job Title</Text>
                    <TextInput
                      editable={employment.is_delete ? false : true}
                      value={employment.postion_title}
                      style={styles.inputField}
                      onChangeText={(value) =>
                        handleEmploymentChange(index, "postion_title", value)
                      }
                      placeholder="Enter Job Title"
                    />
                  </View>

                  <View style={styles.outerContainer}>
                    <View style={[styles.feidlContainer, { flex: 1 }]}>
                      <Text style={styles.label}>Start Date</Text>
                      <TextInput
                        editable={employment.is_delete ? false : true}
                        value={employment.start_date}
                        style={styles.inputField}
                        onChangeText={(value) =>
                          handleEmploymentChange(index, "start_date", value)
                        }
                        placeholder="Enter Start Date"
                      />
                    </View>
                    <View
                      style={[
                        styles.feidlContainer,
                        { flex: 1, marginLeft: 20 },
                      ]}
                    >
                      <Text style={styles.label}>End Date</Text>
                      <TextInput
                        editable={employment.is_delete ? false : true}
                        value={employment.end_date}
                        style={styles.inputField}
                        onChangeText={(value) =>
                          handleEmploymentChange(index, "end_date", value)
                        }
                        placeholder="Enter End Date"
                      />
                    </View>
                  </View>
                </View>
              )
            )}
          </ScrollView>
        )}
      </>
    </Container>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feidlContainer: {
    marginVertical: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "300",
    color: COLORS.primary,
  },
  text: {
    fontSize: 16,
    paddingBottom: 10,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
  },
  inputField: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.primary,
    paddingBottom: 10,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
  },
});
