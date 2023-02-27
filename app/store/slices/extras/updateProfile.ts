import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState = {
  loading: false,
  error: null,
  success: false,
};

const slice = createSlice({
  name: "updateProfile",
  initialState,
  reducers: {
    updateProfileRequested: (state, action) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    updateProfileFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const {
  updateProfileRequested,
  updateProfileSuccess,
  updateProfileFailed,
} = slice.actions;

export default slice.reducer;

export const updateProfile = (data: any) => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();

    if (getToken && getToken.token) {
      const token = getToken.token;

      dispatch(
        apiCallBegan({
          url: PRE_URL + `user/memberlist-info/get_all_members/`,
          extraheaders: "Token " + token,
          method: "put",
          data,
          onStart: updateProfileRequested.type,
          onSuccess: updateProfileSuccess.type,
          onError: updateProfileFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(updateProfileFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occured updating prfile ", error);
    dispatch(updateProfileFailed(error.message));
  }
};
