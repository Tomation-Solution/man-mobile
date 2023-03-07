import { StyleSheet } from "react-native";
import React from "react";
import { Container } from "../../components";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MembersService from "../Services/MemberService/MemberService";
//import StaffsService from "../Services/StaffService";
import ReissuanceForm from "./MemberService/pages/ReissuanceForm";
import ReissuanceOfCertificate from "../Services/MemberService/pages/ReissuanceOfCertificate";
import LossOfCertificate from "../Services/MemberService/pages/LossOfCertificate";
import ChangeOfName from "../Services/MemberService/pages/ChangeOfName";
import MergerOfCompanies from "./MemberService/pages/MergerOfCompanies";
import DeactivationOfMembership from "./MemberService/pages/DeactivationOfMembership";
import ProductsManufacturingUpdate from "./MemberService/pages/ProductsManufacturingUpdate";
import FactoryLocationUpdate from "./MemberService/pages/FactoryLocationUpdate";

const Stack = createNativeStackNavigator();

const Services = ({ navigation }: any) => {
  return (
    <Container>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="MembersService"
      >
        <Stack.Screen name="MembersService">
          {(props) => <MembersService {...props} />}
        </Stack.Screen>
        {/* <Stack.Screen name="StaffsService">
          {(props) => <StaffsService {...props} />}
        </Stack.Screen> */}
        {/* <Stack.Screen name="ReissuanceForm">
          {(props) => <ReissuanceForm {...props} />}
        </Stack.Screen> */}
        <Stack.Screen name="ReissuanceOfCertificate">
          {(props) => <ReissuanceOfCertificate {...props} />}
        </Stack.Screen>
        <Stack.Screen name="LossOfCertificate">
          {(props) => <LossOfCertificate {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ChangeOfName">
          {(props) => <ChangeOfName {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MergerOfCompanies">
          {(props) => <MergerOfCompanies {...props} />}
        </Stack.Screen>
        <Stack.Screen name="DeactivationOfMembership">
          {(props) => <DeactivationOfMembership {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ProductsManufacturingUpdate">
          {(props) => <ProductsManufacturingUpdate {...props} />}
        </Stack.Screen>
        <Stack.Screen name="FactoryLocationUpdate">
          {(props) => <FactoryLocationUpdate {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Container>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
