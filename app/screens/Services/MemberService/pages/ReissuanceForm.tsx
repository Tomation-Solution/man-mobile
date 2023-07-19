import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import React, { memo, useEffect } from "react";
import { HomeHeader } from "../../../../components";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../constants/metric";
import CustomPicker from "../components/CustomPicker";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { Formbtn } from "../../../../components";
import { ErrorMessage, useFormik } from "formik";
import * as DocumentPicker from "expo-document-picker";
import {
  Change_Of_Name,
  GetReissuance_Certificate,
  ReissuanceFormPatch,
  clearConfig,
} from "../../../../store/slices/ServiceRequest/serviceSlice";
import {
  detectDate,
  toTitleCase,
} from "../../../../utils/helperFunctions/toSentenceCase";
import { useFocusEffect } from "@react-navigation/native";
import DateInput from "../../../../components/Input/DateInput";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const ReissuanceForm = ({ navigation, route }: any) => {
  const dispatch = useAppDispatch();
  const [errors, setErrors] = React.useState<any>({});
  const [isReady, setIsReady] = React.useState(false);
  const { loading, error, reisuance, success } = useAppSelector(
    (state) => state.ServiceRequestReducers.ServiceSlice
  );
  const { nextScreen } = route.params;

  const { values, setFieldValue, resetForm, handleSubmit } = useFormik({
    initialValues: {
      name_of_company: "",
      //   amount_to_be_paid: "",
      cac_reg_number: "",
      tax_identification_number: "",
      man_reg_number: "",
      company_official_email: "",
      company_official_website: "",
      corporate_addresse: "",
      //   plants: "",
      //   other_factory_location: [],
      //   products_manufactured: [],
      //   list_of_imported_materials_used_in_production: [],
      //   list_of_local_materials_used_in_production: [],
      //   managing_director_email: "",
      //   managing_director_phone: "",
      phone_number: "",
      ceo_name: "",
      //   chief_finance_officer_phone: "",
      //   chief_finance_officer_email: "",
      chief_finace_officer: "",
      chief_finace_officer_phone_number: "",
      head_of_coporate: "",
      head_of_coporate_phone_number: "",
      //   head_of_admin_phone: "",
      //   head_of_admin_email: "",
      head_of_corporate_affair_phone: "",
      head_of_corporate_affair_email: "",
      //   officer_handling_man_issues_in_your_company_phone: "",
      //   officer_handling_man_issues_in_your_company_email: "",
      officer_handling_man: "",
      officer_handling_man_phone_number: "",
      // yearly_turnover_date_1: "",
      // yearly_turnover_date_2: "",
      // yearly_turnover_file_1: "",
      // yearly_turnover_file_2: "",

      files: [
        {
          uri: "",
          name: "",
          title: "Yearly Turnover File 1",
          type: "",
        },
        {
          uri: "",
          name: "",
          title: "Yearly Turnover File 2",
          type: "",
        },
      ],

      // files: Array(5).fill({ uri: null, name: "" }),
    },
    onSubmit: async (values: any) => {
      if (success) {
        navigation.navigate(nextScreen);
        return;
      }
      const formData = new FormData();
      if (values.files[0].uri) {
        formData.append("original_membership_certificate", values.files[0]);
      }
      if (values.files[1].uri) {
        formData.append(
          "year_one_audited_finacial_statements",
          values.files[1]
        );
      }

      if (values.name_of_company) {
        formData.append("name_of_company", values.name_of_company);
      }
      if (values.amount_to_be_paid) {
        formData.append("amount_to_be_paid", values.amount_to_be_paid);
      }
      if (values.cac_reg_number) {
        formData.append("cac_reg_number", values.cac_reg_number);
      }
      if (values.tax_identification_number) {
        formData.append(
          "tax_identification_number",
          values.tax_identification_number
        );
      }
      if (values.man_reg_number) {
        formData.append("man_reg_number", values.man_reg_number);
      }
      if (values.company_official_email) {
        formData.append(
          "company_official_email",
          values.company_official_email
        );
      }
      if (values.company_official_website) {
        formData.append(
          "company_official_website",
          values.company_official_website
        );
      }
      if (values.corporate_addresse) {
        formData.append("corporate_addresse", values.corporate_addresse);
      }
      if (values.other_factory_location) {
        formData.append(
          "other_factory_location",
          JSON.stringify(values.other_factory_location)
        );
      }
      if (values.products_manufactured) {
        formData.append(
          "products_manufactured",
          JSON.stringify(values.products_manufactured)
        );
      }
      if (values.list_of_imported_materials_used_in_production) {
        formData.append(
          "list_of_imported_materials_used_in_production",
          JSON.stringify(values.list_of_imported_materials_used_in_production)
        );
      }
      if (values.list_of_local_materials_used_in_production) {
        formData.append(
          "list_of_local_materials_used_in_production",
          JSON.stringify(values.list_of_local_materials_used_in_production)
        );
      }
      if (values.managing_director_email) {
        formData.append(
          "managing_director_email",
          values.managing_director_email
        );
      }
      if (values.managing_director_phone) {
        formData.append(
          "managing_director_phone",
          values.managing_director_phone
        );
      }
      if (values.chief_finance_officer_phone) {
        formData.append(
          "chief_finance_officer_phone",
          values.chief_finance_officer_phone
        );
      }
      if (values.chief_finance_officer_email) {
        formData.append(
          "chief_finance_officer_email",
          values.chief_finance_officer_email
        );
      }
      if (values.head_of_admin_phone) {
        formData.append("head_of_admin_phone", values.head_of_admin_phone);
      }
      if (values.head_of_admin_email) {
        formData.append("head_of_admin_email", values.head_of_admin_email);
      }
      if (values.head_of_corporate_affair_phone) {
        formData.append(
          "head_of_corporate_affair_phone",
          values.head_of_corporate_affair_phone
        );
      }
      if (values.head_of_corporate_affair_email) {
        formData.append(
          "head_of_corporate_affair_email",
          values.head_of_corporate_affair_email
        );
      }
      if (values.officer_handling_man_issues_in_your_company_phone) {
        formData.append(
          "officer_handling_man_issues_in_your_company_phone",
          values.officer_handling_man_issues_in_your_company_phone
        );
      }
      if (values.officer_handling_man_issues_in_your_company_email) {
        formData.append(
          "officer_handling_man_issues_in_your_company_email",
          values.officer_handling_man_issues_in_your_company_email
        );
      }

      console.log("HELLO THIS IS A FORMDATA", formData);

      await dispatch(ReissuanceFormPatch(formData));
      // resetForm();
    },
  });

  const pickDocument = async ({ index }: any) => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (result.type === "success") {
      const files = [...values.files];
      files[index] = {
        uri: result.uri,
        name: result.uri.split("/").pop(),
        type: result.mimeType,
      };
      setFieldValue("files", files);
      // console.log(files)
    }
  };

  useEffect(() => {
    dispatch(clearConfig());
    dispatch(GetReissuance_Certificate());
  }, []);

  useEffect(() => {
    if (error) {
      const _errors: any = { ...error };
      console.log("error: ", _errors);
      // errors.map((item: any) => {
      //   _errors[item.field] = item.message[0];
      // });

      setErrors(_errors);
    }
    console.log("error: ", error);
  }, [error]);

  useEffect(() => {
    function* gen() {
      if (reisuance) {
        console.log("reisuance: ", reisuance);
        const _reisuance: any = { ...reisuance };
        Object.keys(_reisuance).map((key, index) => {
          if (key !== "yearly_turn" && key !== "id") {
            setFieldValue(key, _reisuance[key]);
          } else {
            if (_reisuance.yearly_turn.date_one) {
              setFieldValue(
                "yearly_turnover_date_1",
                _reisuance.yearly_turn.date_one
              );
            }
            if (_reisuance.yearly_turn.date_two) {
              setFieldValue(
                "yearly_turnover_date_2",
                _reisuance.yearly_turn.date_two
              );
            }
            if (_reisuance.yearly_turn.file_one) {
              setFieldValue("files[0].name", _reisuance.yearly_turn.file_one);
            }
            if (_reisuance.yearly_turn.file_two) {
              setFieldValue("files[1].name", _reisuance.yearly_turn.file_two);
            }

            // Object.keys(_reisuance.yearly_turn).map((key2, index2) => {
            //   setFieldValue(key2, _reisuance.yearly_turn[key2]);
            // });
          }
        });
      }
      yield setIsReady(true);
    }
    const generate = gen();
    generate.next();
  }, [reisuance]);

  // if (success) {
  //   navigation.navigate(nextScreen);
  // }
  console.log("i was here");

  return (
    <View>
      <Modal visible={!isReady}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Text>Loading...</Text>
        </View>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader
          title={"Change of Name"}
          navigation={navigation}
          back={navigation.goBack}
        />
        <View style={{ marginTop: verticalScale(10) }}>
          <Text style={styles.text}>Attach requirement for Change of Name</Text>
          {/* <TextInput
            placeholder="Name of Company"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              marginVertical: 10,
            }}
            value={values.name_of_company}
            onChangeText={(text) => setFieldValue("name_of_company", text)}
          /> */}
          {Object.keys(values).map((key, index) => {
            if (key !== "files") {
              const checkIfDate = detectDate(values[key]);
              return (
                <View
                  key={index}
                  style={{
                    borderWidth: 1,
                    borderColor: "#000",
                    borderRadius: 5,
                    // marginHorizontal: horizontalScale(20),
                    paddingHorizontal: horizontalScale(10),
                    paddingVertical: verticalScale(5),
                    marginVertical: verticalScale(10),
                  }}
                >
                  {checkIfDate ? (
                    <DateInput
                      placeholder={toTitleCase(key)}
                      label={toTitleCase(key)}
                      onChangeText={(text: string) => {
                        setFieldValue(key, text);
                      }}
                      value={values[key]}
                    />
                  ) : (
                    <TextInput
                      key={index}
                      placeholder={toTitleCase(key)}
                      onBlur={() => {
                        if (!values[key]) {
                          setErrors({
                            ...errors,
                            [key]: "This field is required",
                          });
                        }
                      }}
                      onFocus={() => {
                        if (errors[key]) {
                          setErrors({
                            ...errors,
                            [key]: "",
                          });
                        }
                      }}
                      style={{}}
                      value={values[key]}
                      onChangeText={(text) => setFieldValue(key, text)}
                    />
                  )}
                  {errors[key] && (
                    <Text style={styles.errorText}>{errors[key]}</Text>
                  )}
                </View>
              );
            }
          })}

          <View style={styles.documentPickerContainer}>
            {errors["original_membership_certificate"] && (
              <Text style={styles.errorText}>
                {errors["original_membership_certificate"]}
              </Text>
            )}
            <CustomPicker
              title={
                values.files[0]?.name
                  ? values.files[0]?.name
                  : values.files[0]?.title
              }
              onPress={() => pickDocument({ index: 0 })}
            />
            {errors["year_two_audited_finacial_statements"] && (
              <Text style={styles.errorText}>
                {errors["year_two_audited_finacial_statements"]}
              </Text>
            )}
            <CustomPicker
              title={
                values.files[1]?.name
                  ? values.files[1]?.name
                  : values.files[1]?.title
              }
              onPress={() => pickDocument({ index: 1 })}
            />
          </View>

          <View
            style={{
              marginTop: verticalScale(40),
              marginBottom: verticalScale(20),
            }}
          >
            <Formbtn
              title={loading ? "Loading..." : "Submit & Continue"}
              onPress={handleSubmit}
            />
          </View>
          <Pressable
            style={{
              marginBottom: verticalScale(40),
              alignSelf: "center",
              borderColor: "#000",
              borderWidth: 1,
              borderRadius: 10,
              width: "100%",
              paddingVertical: verticalScale(8),
            }}
            onPress={() => {
              navigation.navigate(nextScreen);
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#000",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Skip
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(ReissuanceForm);

const styles = StyleSheet.create({
  text: {
    fontSize: moderateScale(18),
    fontWeight: "500",
    textAlign: "center",
    lineHeight: moderateScale(24),
  },
  documentPickerContainer: {
    marginTop: verticalScale(25),
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});
