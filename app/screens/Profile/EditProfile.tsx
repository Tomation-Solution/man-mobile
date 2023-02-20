import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { Container } from "../../components";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const EditProfile = ({ navigation }: any) => {
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<any>("date");
  const [show, setShow] = useState(false);
  const [major, setMajor] = useState();
  const [degree, setDegree] = useState();
  const [nationality, setNationality] = useState();
  const [selectedGender, setSelectedGender] = useState();

  const onChange = (event: DateTimePickerEvent, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = ({ currentMode }: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

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
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          <Text style={{ color: COLORS.primary }}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.feidlContainer}>
            <TextInput placeholder="NAME" style={styles.inputField} />
          </View>

          <View style={styles.feidlContainer}>
            <TextInput
              keyboardType="phone-pad"
              placeholder="PHONE NUMBER"
              style={styles.inputField}
            />
          </View>

          <View style={styles.feidlContainer}>
            <TextInput placeholder="Email" style={styles.inputField} />
          </View>

          <View style={styles.feidlContainer}>
            <TextInput placeholder="ADDRESS" style={styles.inputField} />
          </View>

          <View style={styles.feidlContainer}>
            <Text style={styles.label}>Date of Birth</Text>

            <TouchableOpacity
              onPress={showDatepicker}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 10,
                borderBottomColor: COLORS.primary,
                borderBottomWidth: 1,
              }}
            >
              <Text>{date.toLocaleDateString()}</Text>
              <Ionicons name="chevron-down" size={20} color={COLORS.primary} />
            </TouchableOpacity>

            {show && (
              <RNDateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>

        <View style={styles.outerContainer}>
          <View style={[styles.feidlContainer, { flex: 1 }]}>
            <Text style={styles.label}>Citizenship</Text>
            <View
              style={{
                borderBottomColor: COLORS.primary,
                borderBottomWidth: 1,
              }}
            >
              <Picker
                selectedValue={nationality}
                onValueChange={(itemValue, itemIndex) =>
                  setNationality(itemValue)
                }
              >
                <Picker.Item label="Nigerian" value="Nigerian" />
                <Picker.Item label="Others" value="Others" />
              </Picker>
            </View>
          </View>
          <View style={[styles.feidlContainer, { flex: 1, marginLeft: 30 }]}>
            <Text style={styles.label}>Gender</Text>

            <View
              style={{
                borderBottomColor: COLORS.primary,
                borderBottomWidth: 1,
              }}
            >
              <Picker
                selectedValue={selectedGender}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedGender(itemValue)
                }
              >
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <View style={styles.feidlContainer}>
            <Text
              style={[
                styles.label,
                {
                  borderBottomColor: COLORS.primary,
                  borderBottomWidth: 1,
                  paddingVertical: 6,
                  fontWeight: "bold",
                },
              ]}
            >
              EDUCATION
              <Text
                style={{
                  fontStyle: "italic",
                }}
              >
                (include all college or university degrees)
              </Text>
            </Text>
          </View>

          <View style={styles.feidlContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="INSTITUTION NAME"
            />
          </View>
          <View style={styles.feidlContainer}>
            <TextInput
              style={styles.inputField}
              placeholder="INSTITUTION LOCATION"
            />
          </View>

          <View style={styles.outerContainer}>
            <View style={[styles.feidlContainer, { flex: 1 }]}>
              <Text style={styles.label}>Major</Text>
              <View
                style={{
                  borderBottomColor: COLORS.primary,
                  borderBottomWidth: 1,
                }}
              >
                <Picker
                  selectedValue={major}
                  onValueChange={(itemValue, itemIndex) => setMajor(itemValue)}
                >
                  <Picker.Item label="BS.c" value="bsc" />
                  <Picker.Item label="Others" value="Others" />
                </Picker>
              </View>
            </View>
            <View style={[styles.feidlContainer, { flex: 1, marginLeft: 30 }]}>
              <Text style={styles.label}>Degree</Text>
              <View
                style={{
                  borderBottomColor: COLORS.primary,
                  borderBottomWidth: 1,
                }}
              >
                <Picker
                  selectedValue={degree}
                  onValueChange={(itemValue, itemIndex) => setDegree(itemValue)}
                >
                  <Picker.Item label="Some major" value="bsc" />
                  <Picker.Item label="Others" value="Others" />
                </Picker>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <View style={styles.feidlContainer}>
            <Text
              style={[
                styles.label,
                {
                  borderBottomColor: COLORS.primary,
                  borderBottomWidth: 1,
                  paddingVertical: 6,
                  fontWeight: "bold",
                },
              ]}
            >
              LANGUAGE PROFICIENCY
            </Text>
          </View>

          <View style={styles.outerContainer}>
            <View style={[styles.feidlContainer, { flex: 1 }]}>
              <Text style={styles.label}>LANGUAGE</Text>
              <Text style={styles.text}>lorem</Text>
            </View>
            <View style={[styles.feidlContainer, { flex: 1, marginLeft: 20 }]}>
              <Text style={styles.label}>Speaking</Text>
              <Text style={styles.text}>lorem</Text>
            </View>
            <View style={[styles.feidlContainer, { flex: 1, marginLeft: 20 }]}>
              <Text style={styles.label}>Reading</Text>
              <Text style={styles.text}>lorem</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <View style={styles.feidlContainer}>
            <Text
              style={[
                styles.label,
                {
                  borderBottomColor: COLORS.primary,
                  borderBottomWidth: 1,
                  paddingVertical: 6,
                  fontWeight: "bold",
                },
              ]}
            >
              EMPLOYMENT HISTORY
            </Text>
          </View>
          <View style={styles.feidlContainer}>
            <Text style={styles.label}>POSITION TITLE</Text>
            <Text style={styles.text}>lorem school</Text>
          </View>

          <View style={styles.feidlContainer}>
            <Text style={styles.label}>EMPLOYER' S NAME AND ADDRESS</Text>
            <Text style={styles.text}>lorem school</Text>
          </View>

          <View style={styles.outerContainer}>
            <View style={[styles.feidlContainer, { flex: 1 }]}>
              <Text style={styles.label}>from</Text>
              <Text style={styles.text}>lorem</Text>
            </View>
            <View style={[styles.feidlContainer, { flex: 1, marginLeft: 30 }]}>
              <Text style={styles.label}>to</Text>
              <Text style={styles.text}>lorem</Text>
            </View>
          </View>
        </View>

        <View style={styles.outerContainer}>
          <View style={[styles.feidlContainer, { flex: 1 }]}>
            <Text style={styles.label}>Role</Text>
            <Text style={styles.text}>Accountant</Text>
          </View>
          <View style={[styles.feidlContainer, { flex: 1, marginLeft: 30 }]}>
            <Text style={styles.label}>Year Employed</Text>
            <Text style={styles.text}>2005</Text>
          </View>
        </View>

        <View style={styles.outerContainer}>
          <View style={[styles.feidlContainer, { flex: 1 }]}>
            <Text style={styles.label}>Employment type</Text>
            <Text style={styles.text}>Full Time</Text>
          </View>
          <View style={[styles.feidlContainer, { flex: 1, marginLeft: 30 }]}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.text}>+234 816 453 7857</Text>
          </View>
        </View>
        <View style={styles.feidlContainer}>
          <Text style={styles.label}>BIO</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            est fugiat ducimus quasi cupiditate rem voluptatum quibusdam beatae
            dicta, nihil libero quidem, sapiente mollitia provident natus id
            maxime dolore magni asperiores earum. Deserunt dicta culpa, ut quam
            aliquid soluta eos animi dolor qui vero nesciunt maxime asperiores
            consectetur expedita quaerat!
          </Text>
        </View>
      </ScrollView>
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
