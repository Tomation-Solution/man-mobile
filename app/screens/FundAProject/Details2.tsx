import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Container, HomeHeader, Dropdown, Formbtn } from "../../components";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../constants/metric";
import { Formik } from "formik";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { COLORS } from "../../constants/color";
import { kindFunding } from "../../store/slices/Fund_A_Project/fundSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";


interface DetailsProps {
  route?: any;
  navigation?: any;
}
interface MessageValues {
  heading: string;
}


const Details2 = ({ route, navigation }: DetailsProps) => {
  const data = route?.params?.data|| {};
// console.log(' inside details oh ' + data?.image)

  const initialValues: MessageValues = {
    heading: "",
  };

  const dispatch = useAppDispatch();

  const handleSubmit = async (values: MessageValues, { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }) => {

      const { heading } = values;
    await dispatch(kindFunding( data?.id, heading));
      setSubmitting(false);
      resetForm();
  };

  const {loading} = useAppSelector(
    (state:any) => state.fundProjectReducers.fundProjectSlice
  );

  return (
    <Container>
      <HomeHeader title="Fund a Project" navigation={navigation} back="back" />
      <View style={styles.inputContainer}>


        <Formik
          initialValues={{ heading: '' }}
          validationSchema={Yup.object({
           heading: Yup.string().required(),})}
            onSubmit={handleSubmit}
            >
          {({
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            handleSubmit,
          }) => (
            <View>
              <Text style={styles.headText}>Support in Kind</Text>
              <View style={styles.supportContainer}>
                <Dropdown defaultButtonText={"Support Type"} />
              </View>

              <TextInput
                style={styles.input}
                onChangeText={handleChange('heading')}
                onBlur={handleBlur('heading')}
                value={values.heading}
                multiline={true}
                numberOfLines={7}
                placeholder='Enter your message '
              />
              {errors.message && touched.heading ? <Text style={styles.error}>{errors.message}</Text> : null}
                        <Formbtn
                        onPress={handleSubmit}
                        title='Get Support'/>

            </View>
          )}
        </Formik>
      </View>
    </Container>
  );
};

export default Details2;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  headText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: moderateScale(24),
    marginTop: verticalScale(20),
  },
  inputContainer: {
    marginHorizontal: horizontalScale(10),
  },
  supportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E8F6F8",
    borderRadius: moderateScale(8),

    marginTop: horizontalScale(40),
  },
  text: {
    fontWeight: "400",
    fontSize: moderateScale(16),
    color: "#010001",
  },
  textInput: {
    alignContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#E8F6F8",
    marginTop: verticalScale(30),
  },
  button: {
    //width: horizontalScale(140),
    padding: moderateScale(16),
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(16),
    marginTop: verticalScale(40),
    marginHorizontal: "auto",
  },
  error: {
    color: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8F6F8',
    paddingHorizontal: 9,
    paddingVertical: 13,
    marginVertical: 21,
    backgroundColor:'#E8F6F8',
    borderRadius:9
  },

});
