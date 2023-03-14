import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState: {
  error: string;
  message: string;
  response: any;
  loading: boolean;
} = {
  error: "",
  message: "",
  response: {},
  loading: false,
};

const extrasSlice = createSlice({
  name: "extras",
  initialState,
  reducers: {
    requestSent: (state) => {
      state.loading = true;
    },
    requestReceived: (state, action) => {
      state.loading = false;
      state.response = action.payload;
      console.log("extrasSlice", action.payload);
    },
    requestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload.response.data.data.error[0];
    },
  },
});

export const { requestSent, requestReceived, requestFailed } =
  extrasSlice.actions;

export default extrasSlice.reducer;

export const getRequest = () => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();

    if (getToken && getToken.token) {
      const token = getToken.token;

      dispatch(
        apiCallBegan({
          url: PRE_URL + `latestupdate/member_lastest_updates/`,
          extraheaders: "Token " + token,
          method: "get",
          onStart: requestSent.type,
          onSuccess: requestReceived.type,
          onError: requestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(requestFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occured getting members", error);
    dispatch(requestFailed(error.message));
  }
};
