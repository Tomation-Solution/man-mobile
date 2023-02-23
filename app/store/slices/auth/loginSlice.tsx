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
  message: "",
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequested: (state, action) => {
      state.loading = true;
      console.log("loginRequested", "looading");
    },

    loginReceived: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      console.log("loginReceived", action.payload);
      storeUserDetails(JSON.stringify(action.payload));
      state.userData = JSON.stringify(action.payload);
    },
    loginRequestFailed: (state, action) => {
      state.loading = false;
      console.log("loginRequestFailed", action.payload);
    },
    logUserOut: (state) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.userData = "";
    },

    registrationRequested: (state, action) => {
      state.loading = true;
      console.log("registrationRequested", "looading");
    },
    registrationReceived: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      console.log("registrationReceived", action.payload);
      storeUserDetails(JSON.stringify(action.payload));
      state.userData = JSON.stringify(action.payload);
    },
    registrationRequestFailed: (state, action) => {
      state.loading = false;
      console.log("registrationRequestFailed", action.payload);
      state.error = action.payload.response.data.message.error;
      console.log("state.error", state.error);
    },
  },
});

const {
  loginRequested,
  loginReceived,
  loginRequestFailed,
  logUserOut,
  registrationRequested,
  registrationReceived,
  registrationRequestFailed,
} = loginSlice.actions;

export default loginSlice.reducer;

export const login = (loginDetails: any) => (dispatch: AppDispatch) => {
  console.log("loginDetails", loginDetails);
  dispatch(
    apiCallBegan({
      url: PRE_URL + "auth/login/",
      method: "post",
      data: loginDetails,
      onStart: loginRequested.type,
      onSuccess: loginReceived.type,
      onError: loginRequestFailed.type,
    })
  );
};

export const logout = () => (dispatch: AppDispatch, getState: any) => {
  dispatch(logUserOut());
};

export const checkLogin = () => async (dispatch: AppDispatch) => {
  const userDetails = await retrieveUserDetails();
  if (userDetails) {
    dispatch(loginReceived(JSON.parse(userDetails)));
  }
};

export const getUserDetails = () => async (dispatch: AppDispatch) => {
  const userDetails = await retrieveUserDetails();
  return userDetails;
};

export const createMember =
  (registrationDetails: any) => (dispatch: AppDispatch) => {
    dispatch(
      apiCallBegan({
        url: PRE_URL + "auth/ManageMemberValidation/create_member/",
        method: "post",
        data: registrationDetails,
        onStart: registrationRequested.type,
        onSuccess: registrationReceived.type,
        onError: registrationRequestFailed.type,
      })
    );
  };
