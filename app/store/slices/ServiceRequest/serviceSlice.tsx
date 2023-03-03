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
      state.isLoggedIn = true;
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
      state.isLoggedIn = true;
    },
    ChangeNameRequestFailed: (state, action) => {
      state.loading = false;
      // console.log("ServiceRequestRequestFailed", action.payload);
    },
  },
});

export const {
  ServiceRequestRequested,
  ServiceRequestReceived,
  ServiceRequestRequestFailed,
  ChangeNameRequested,
  ChangeNameReceived,
  ChangeNameRequestFailed
}
  = ServiceRequestSlice.actions;

export default ServiceRequestSlice.reducer;

export const Reissuance_Certificate = (Reissuance_Certificate: any) => async (dispatch: AppDispatch) => {
  console.log("hey i'm  ServiceRequestDetails", Reissuance_Certificate)
  try {
    const getToken: any = await retrieveUserDetails();
    if (getToken && getToken.token) {
      const token = getToken.token;
      dispatch(
        apiCallBegan({
          url: PRE_URL + "services_request/reissuance_of_certificate/",
          extraheaders: "Token " + token,
          method: "post",
          data: {
            attach_membership_reciept: [
              Reissuance_Certificate
            ]
          },
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


