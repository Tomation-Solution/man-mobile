import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import React, { useEffect } from "react";
import { HomeHeader } from "../../../../components";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../constants/metric";
import CustomPicker from "../components/CustomPicker";
import { useAppDispatch, useAppSelector } from "./../../../../store/hooks";
import { Formbtn } from "../../../../components";
import { ErrorMessage, useFormik } from "formik";
import * as DocumentPicker from "expo-document-picker";
import { Change_Of_Name } from "../../../../store/slices/ServiceRequest/serviceSlice";
import { toTitleCase } from "../../../../utils/helperFunctions/toSentenceCase";

interface DetailsProps {
  route?: any;
  navigation?: any;
}

const ChangeOfName = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const [errors, setErrors] = React.useState<any>({});
  const { loading, error } = useAppSelector(
    (state) => state.ServiceRequestReducers.ServiceSlice
  );

  const { values, setFieldValue, resetForm, handleSubmit } = useFormik({
    initialValues: {
      name_of_company: "",
      amount_to_be_paid: "",
      cac_reg_number: "",
      tax_identification_number: "",
      man_reg_number: "",
      company_official_email: "",
      company_official_website: "",
      corporate_addresse: "",
      other_factory_location: [],
      products_manufactured: [],
      list_of_imported_materials_used_in_production: [],
      list_of_local_materials_used_in_production: [],
      managing_director_email: "",
      managing_director_phone: "",
      chief_finance_officer_phone: "",
      chief_finance_officer_email: "",
      head_of_admin_phone: "",
      head_of_admin_email: "",
      head_of_corporate_affair_phone: "",
      head_of_corporate_affair_email: "",
      officer_handling_man_issues_in_your_company_phone: "",
      officer_handling_man_issues_in_your_company_email: "",

      files: [
        {
          uri: "",
          name: "",
          title: "Original Membership Certificate",
          type: "",
        },
        {
          uri: "",
          name: "",
          title: "Year One Audited Finacial Statements",
          type: "",
        },
        {
          uri: "",
          name: "",
          title: "Year Two Audited Finacial Statements",
          type: "",
        },
        {
          uri: "",
          name: "",
          title: "Certificate of Incorporation",
          type: "",
        },
        {
          uri: "",
          name: "",
          title: "Year Turn Over Attachment",
          type: "",
        },
      ],

      // files: Array(5).fill({ uri: null, name: "" }),
    },
    onSubmit: async (values: any) => {
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
      if (values.files[2].uri) {
        formData.append(
          "year_two_audited_finacial_statements",
          values.files[2]
        );
      }
      if (values.files[3].uri) {
        formData.append("certificate_of_incorporation", values.files[3]);
      }
      if (values.files[4].uri) {
        formData.append("year_turn_over_attachment", values.files[4]);
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

      await dispatch(Change_Of_Name(formData));
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

  return (
    <View>
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
                values.files[0].name
                  ? values.files[0].name
                  : values.files[0].title
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
                values.files[1].name
                  ? values.files[1].name
                  : values.files[1].title
              }
              onPress={() => pickDocument({ index: 1 })}
            />
            {errors["year_two_audited_finacial_statements"] && (
              <Text style={styles.errorText}>
                {errors["year_two_audited_finacial_statements"]}
              </Text>
            )}
            <CustomPicker
              title={
                values.files[2].name
                  ? values.files[2].name
                  : values.files[2].title
              }
              onPress={() => pickDocument({ index: 2 })}
            />
            {errors["certificate_of_incorporation"] && (
              <Text style={styles.errorText}>
                {errors["certificate_of_incorporation"]}
              </Text>
            )}
            <CustomPicker
              title={
                values.files[3].name
                  ? values.files[3].name
                  : values.files[3].title
              }
              onPress={() => pickDocument({ index: 3 })}
            />
            {errors["year_turn_over_attachment"] && (
              <Text style={styles.errorText}>
                {errors["year_turn_over_attachment"]}
              </Text>
            )}
            <CustomPicker
              title={
                values.files[4].name
                  ? values.files[4].name
                  : values.files[4].title
              }
              onPress={() => pickDocument({ index: 4 })}
            />
          </View>

          <View style={{ marginVertical: verticalScale(40) }}>
            <Formbtn
              title={loading ? "Loading..." : "Submit"}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChangeOfName;

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
