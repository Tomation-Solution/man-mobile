import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { PRE_URL } from "../../../utils/ENV/envs";
import {
  retrieveUserDetails,
  storeUserDetails,
} from "../../../utils/helperFunctions/userDataHandlers";

const initialState = {
  userData: "",
  loading: false,
  isLoggedIn: false,
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
    ServiceRequestRequestFailed: (state, action) => {
      state.loading = false;
      console.log("ServiceRequestRequestFailed", action.payload);
    },
    ChangeNameRequested: (state, action) => {
      state.loading = true;
    },

    ChangeNameReceived: (state, action) => {
      state.loading = false;
    },
    ChangeNameRequestFailed: (state, action) => {
      state.loading = false;
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
  },
});

export const {
  ServiceRequestRequested,
  ServiceRequestReceived,
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
  FactoryLocationUpdateRequestFailed,
}= ServiceRequestSlice.actions;

export default ServiceRequestSlice.reducer;

export const Reissuance_Certificate = (formData: any) => async (dispatch: AppDispatch) => {
  console.log("hey i'm  ServiceRequestDetails", formData)
  try {
    const getToken: any = await retrieveUserDetails();
    if (getToken && getToken.token) {
      const token = getToken.token;
      dispatch(
        apiCallBegan({
          url: PRE_URL + "services_request/reissuance_of_certificate/",
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


export const Change_Of_Name = (formData: any) => async (dispatch: AppDispatch) => {
  // console.log("hey i'm  ServiceRequestDetails", formData)
  try {
    const getToken: any = await retrieveUserDetails();
    if (getToken && getToken.token) {
      const token = getToken.token;
      dispatch(
        apiCallBegan({
          url: PRE_URL + "services_request/Change_of_name/",
          extraheaders: "Token " + token,
          method: "post",
          data: formData,
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


export const Merge_Of_Company = (formData: any) => async (dispatch: AppDispatch) => {
  // console.log("hey i'm  ServiceRequestDetails", formData)
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
          onStart:  MergeofCompanyRequested.type,
          onSuccess:  MergeofCompanyReceived.type,
          onError:  MergeofCompanyRequestFailed.type,
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


export const Deactivation_Of_Membership = (formData: any) => async (dispatch: AppDispatch) => {
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
          onStart:  DeactivationOfMembershipRequested.type,
          onSuccess:   DeactivationOfMembershipReceived.type,
          onError:  DeactivationOfMembershipRequestFailed.type,
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

export const Product_Manufacture_Update = (formData: any) => async (dispatch: AppDispatch) => {
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
          onStart:  DeactivationOfMembershipRequested.type,
          onSuccess:   DeactivationOfMembershipReceived.type,
          onError:  DeactivationOfMembershipRequestFailed.type,
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

export const Factory_location_update = (formData: any) => async (dispatch: AppDispatch) => {
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
          onStart:  DeactivationOfMembershipRequested.type,
          onSuccess:   DeactivationOfMembershipReceived.type,
          onError:  DeactivationOfMembershipRequestFailed.type,
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
