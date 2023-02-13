import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
// import AsyncStorage from "@react-native-community/async-storage";
import { PRE_URL } from "../../../utils/ENV/envs";

// const retrieveUserDetails = async () => {
//   try {
//     const token = await AsyncStorage.getItem("userDetails");
//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const storeUserDetails = async (userDetails: any) => {
//   try {
//     await AsyncStorage.setItem("userDetails", userDetails);
//   } catch (error) {
//     console.log(error);
//   }
// };

const initialState = {
  loading: false,
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequested: (state, action) => {
      state.loading = true;
    },

    loginReceived: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      // storeUserDetails(JSON.stringify(action.payload));
    },
    loginRequestFailed: (state, action) => {
      state.loading = false;
    },
  },
});

export const { loginRequested, loginReceived, loginRequestFailed } =
  loginSlice.actions;

export default loginSlice.reducer;

export const login = (loginDetails: any) => (dispatch: AppDispatch) => {
  dispatch(
    apiCallBegan({
      url: PRE_URL + "/auth/login",
      method: "post",
      data: loginDetails,
      onStart: loginRequested.type,
      onSuccess: loginReceived.type,
      onError: loginRequestFailed.type,
    })
  );
};

export const logout = () => (dispatch: AppDispatch) => {
  dispatch(
    apiCallBegan({
      url: PRE_URL + "/auth/logout",
      method: "post",
      onStart: loginRequested.type,
      onSuccess: loginReceived.type,
      onError: loginRequestFailed.type,
    })
  );
};

// export const checkLogin = () => async (dispatch: AppDispatch) => {
//   const userDetails = await retrieveUserDetails();
//   if (userDetails) {
//     dispatch(loginReceived(JSON.parse(userDetails)));
//   }
// };

// export const getUserDetails = () => async (dispatch: AppDispatch) => {
//   const userDetails = await retrieveUserDetails();
//   return userDetails;
// };
