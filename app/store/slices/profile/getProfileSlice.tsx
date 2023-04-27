import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { PRE_URL } from "../../../utils/ENV/envs";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";

const initialState: {
  userData: any;
  loading: boolean;
  error: any;
  profileEditted: boolean;
} = {
  userData: null,
  loading: false,
  error: null,
  profileEditted: false,
};

const getProfileSlice = createSlice({
  name: "getProfile",
  initialState,
  reducers: {
    getProfileRequested: (state, action) => {
      state.loading = true;
    },
    getProfileReceived: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    getProfileRequestFailed: (state, action) => {
      state.loading = false;
      console.log("getProfileRequestFailed", action.payload);
    },
    editProfileRequested: (state, action) => {
      state.error = null;
      state.loading = true;
    },
    editProfileReceived: (state, action) => {
      state.loading = false;
      state.profileEditted = true;
      console.log("editProfileReceived", action.payload);
    },
    editProfileRequestFailed: (state, action) => {
      state.error = "Profile update failed";
      state.loading = false;
      console.log("editProfileRequestFailed", action.payload);
    },
  },
});

const {
  getProfileRequested,
  getProfileReceived,
  getProfileRequestFailed,
  editProfileReceived,
  editProfileRequestFailed,
  editProfileRequested,
} = getProfileSlice.actions;

export default getProfileSlice.reducer;

export const getProfile = () => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();
    if (getToken && getToken.token) {
      const token = getToken.token;
      dispatch(
        apiCallBegan({
          url: PRE_URL + "user/memberlist-info/my_profile/",
          extraheaders: "Token " + token,
          method: "get",
          onStart: getProfileRequested.type,
          onSuccess: getProfileReceived.type,
          onError: getProfileRequestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(getProfileRequestFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occurred while fetching user profile:", error);
    dispatch(getProfileRequestFailed(error.message));
  }
};

export const editProfile =
  (data: any, id: number) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "user/member-bio/" + id + "/",
            extraheaders: "Token " + token,
            method: "put",
            data,
            onStart: editProfileRequested.type,
            onSuccess: editProfileReceived.type,
            onError: editProfileRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(getProfileRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while fetching user profile:", error);
      dispatch(getProfileRequestFailed(error.message));
    }
  };

export const editProfilePhoto =
  (photo: any) => async (dispatch: AppDispatch) => {
    const data = new FormData();

    data.append("photo", photo);

    console.log("data", data);
    try {
      const getToken: any = await retrieveUserDetails();
      if (getToken && getToken.token) {
        const token = getToken.token;
        dispatch(
          apiCallBegan({
            url: PRE_URL + "user/memberlist-info/update_profile_img/",
            extraheaders: "Token " + token,
            method: "post",
            contentType: "multipart/form-data",
            data,
            onStart: editProfileRequested.type,
            onSuccess: editProfileReceived.type,
            onError: editProfileRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(getProfileRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occurred while update profile image:", error);
      dispatch(getProfileRequestFailed(error.message));
    }
  };
