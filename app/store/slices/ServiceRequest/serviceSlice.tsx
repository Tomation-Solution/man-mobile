import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { PRE_URL } from "../../../utils/ENV/envs";
import {
  retrieveUserDetails,
  storeUserDetails,
} from "../../../utils/helperFunctions/userDataHandlers";
import { Alert } from "react-native";

const initialState = {
  userData: "",
  reisuance: {},
  loading: false,
  isLoggedIn: false,
  error: {},
  success: false,
};

const ServiceRequestSlice = createSlice({
  name: "ServiceRequest",
  initialState,
  reducers: {
    ServiceRequestRequested: (state, action) => {
      state.loading = true;
    },

    ServiceRequestReceived: (state, action) => {
      state.loading = false;
    },
    GetServiceRequestReceived: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },

    GetReissuanceRequestReceived: (state, action) => {
      state.reisuance = action.payload.data;
      state.loading = false;
    },

    ServiceRequestRequestFailed: (state, action) => {
      state.loading = false;
      console.log("ServiceRequestRequestFailed", action.payload);
    },
    ChangeNameRequested: (state, action) => {
      state.loading = true;
    },

    ChangeNameReceived: (state, action) => {
      state.loading = false;
      state.success = true;
      Alert.alert("Success");
    },
    ReissuancePatchReceived: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    ChangeNameRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload.response.data.data;
      // console.log("ServiceRequestRequestFailed", action.payload);
    },
    MergeofCompanyRequested: (state, action) => {
      state.loading = true;
    },

    MergeofCompanyReceived: (state, action) => {
      state.loading = false;
      console.log("ServiceRequestSuccess", action.payload);
    },
    MergeofCompanyRequestFailed: (state, action) => {
      state.loading = false;
    },
    DeactivationOfMembershipRequested: (state, action) => {
      state.loading = true;
    },

    DeactivationOfMembershipReceived: (state, action) => {
      state.loading = false;
    },
    DeactivationOfMembershipRequestFailed: (state, action) => {
      state.loading = false;
    },
    Product_manfacturing_UpdateRequested: (state, action) => {
      state.loading = true;
    },

    Product_manfacturing_UpdateReceived: (state, action) => {
      state.loading = false;
    },
    Product_manfacturing_UpdateRequestFailed: (state, action) => {
      state.loading = false;
    },
    FactoryLocationUpdateRequested: (state, action) => {
      state.loading = true;
    },

    FactoryLocationUpdateReceived: (state, action) => {
      state.loading = false;
    },
    FactoryLocationUpdateRequestFailed: (state, action) => {
      state.loading = false;
    },
    clearConfig: (state) => {
      state.loading = false;
      state.success = false;
    },
  },
});

export const {
  ServiceRequestRequested,
  ServiceRequestReceived,
  GetServiceRequestReceived,
  ServiceRequestRequestFailed,
  ChangeNameRequested,
  ChangeNameReceived,
  ChangeNameRequestFailed,
  MergeofCompanyRequested,
  MergeofCompanyReceived,
  MergeofCompanyRequestFailed,
  DeactivationOfMembershipRequested,
  DeactivationOfMembershipReceived,
  DeactivationOfMembershipRequestFailed,
  Product_manfacturing_UpdateRequested,
  Product_manfacturing_UpdateReceived,
  Product_manfacturing_UpdateRequestFailed,
  FactoryLocationUpdateRequested,
  FactoryLocationUpdateReceived,
  GetReissuanceRequestReceived,
  FactoryLocationUpdateRequestFailed,
  ReissuancePatchReceived,
  clearConfig,
} = ServiceRequestSlice.actions;

export default ServiceRequestSlice.reducer;

export const Reissuance_Certificate =
  (formData: any) => async (dispatch: AppDispatch) => {
    console.log("hey i'm  ServiceRequestDetails", formData);
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "services_request/reissuance_of_cert_services/",
            contentType: "multipart/form-data",
            extraheaders: "Token " + token,
            method: "post",
            data: formData,
            onStart: ServiceRequestRequested.type,
            onSuccess: ServiceRequestReceived.type,
            onError: ServiceRequestRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(ServiceRequestRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user profile:", error);
      dispatch(ServiceRequestRequestFailed(error.message));
    }
  };

export const GetReissuance_Certificate =
  () => async (dispatch: AppDispatch) => {
    console.log("hey i'm  ServiceRequestDetails");
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "membershipservice/1/",
            extraheaders: "Token " + token,
            method: "get",
            onStart: ServiceRequestRequested.type,
            onSuccess: GetReissuanceRequestReceived.type,
            onError: ServiceRequestRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(ServiceRequestRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching :", error);
      dispatch(ServiceRequestRequestFailed(error.message));
    }
  };

export const ReissuanceFormPatch =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "membershipservice/1/",
            extraheaders: "Token " + token,
            method: "patch",
            data: formData,
            contentType: "multipart/form-data",
            onStart: ChangeNameRequested.type,
            onSuccess: ReissuancePatchReceived.type,
            onError: ChangeNameRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(ServiceRequestRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user profile:", error);
      dispatch(ServiceRequestRequestFailed(error.message));
    }
  };

export const Change_Of_Name =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "membershipservice/change-of-name/1/",
            extraheaders: "Token " + token,
            method: "put",
            data: formData,
            contentType: "multipart/form-data",
            onStart: ChangeNameRequested.type,
            onSuccess: ChangeNameReceived.type,
            onError: ChangeNameRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(ServiceRequestRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user profile:", error);
      dispatch(ServiceRequestRequestFailed(error.message));
    }
  };

export const LossOfCertificatePut =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "membershipservice/loss-of-cert/2/",
            extraheaders: "Token " + token,
            method: "put",
            data: formData,
            contentType: "multipart/form-data",
            onStart: ChangeNameRequested.type,
            onSuccess: ChangeNameReceived.type,
            onError: ChangeNameRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(ServiceRequestRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user profile:", error);
      dispatch(ServiceRequestRequestFailed(error.message));
    }
  };

export const Merge_Of_Company =
  (formData: any) => async (dispatch: AppDispatch) => {
    console.log("hey i'm MergerOfComapany", formData);

    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "services_request/merger_of_companies/",
            extraheaders: "Token " + token,
            method: "post",
            data: formData,
            onStart: MergeofCompanyRequested.type,
            onSuccess: MergeofCompanyReceived.type,
            onError: MergeofCompanyRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(ServiceRequestRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user profile:", error);
      dispatch(ServiceRequestRequestFailed(error.message));
    }
  };

export const Deactivation =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url:
              PRE_URL + "membershipservice/deactivation-activation-service/1/",
            extraheaders: "Token " + token,
            method: "put",
            data: formData,
            contentType: "multipart/form-data",
            onStart: ChangeNameRequested.type,
            onSuccess: ChangeNameReceived.type,
            onError: ChangeNameRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(ServiceRequestRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user profile:", error);
      dispatch(ServiceRequestRequestFailed(error.message));
    }
  };

export const ProductUpdate =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "membershipservice/update-product-manufactured/1/",
            extraheaders: "Token " + token,
            method: "put",
            data: formData,
            contentType: "multipart/form-data",
            onStart: ChangeNameRequested.type,
            onSuccess: ChangeNameReceived.type,
            onError: ChangeNameRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(ServiceRequestRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user profile:", error);
      dispatch(ServiceRequestRequestFailed(error.message));
    }
  };

export const FactoryLocationUpdatePut =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "membershipservice/update-factory-location/1/",
            extraheaders: "Token " + token,
            method: "put",
            data: formData,
            contentType: "multipart/form-data",
            onStart: ChangeNameRequested.type,
            onSuccess: ChangeNameReceived.type,
            onError: ChangeNameRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(ServiceRequestRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user profile:", error);
      dispatch(ServiceRequestRequestFailed(error.message));
    }
  };

export const Deactivation_Of_Membership =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "services_request/deactivation_of_membership/",
            extraheaders: "Token " + token,
            method: "post",
            data: formData,
            onStart: DeactivationOfMembershipRequested.type,
            onSuccess: DeactivationOfMembershipReceived.type,
            onError: DeactivationOfMembershipRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(ServiceRequestRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user profile:", error);
      dispatch(ServiceRequestRequestFailed(error.message));
    }
  };

export const Product_Manufacture_Update =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "services_request/product_manufacturing_update/",
            extraheaders: "Token " + token,
            method: "post",
            data: formData,
            onStart: DeactivationOfMembershipRequested.type,
            onSuccess: DeactivationOfMembershipReceived.type,
            onError: DeactivationOfMembershipRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(ServiceRequestRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user profile:", error);
      dispatch(ServiceRequestRequestFailed(error.message));
    }
  };

export const Factory_location_update =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "services_request/factory_location_update/",
            extraheaders: "Token " + token,
            method: "post",
            data: formData,
            onStart: DeactivationOfMembershipRequested.type,
            onSuccess: DeactivationOfMembershipReceived.type,
            onError: DeactivationOfMembershipRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(ServiceRequestRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user profile:", error);
      dispatch(ServiceRequestRequestFailed(error.message));
    }
  };
