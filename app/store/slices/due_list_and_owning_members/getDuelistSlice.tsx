import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { PRE_URL } from "../../../utils/ENV/envs";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";

const initialState: {
  userData: { data: any } | null;
  loading: boolean;
  success: boolean;
  duePaymentGateway: any;
} = {
  userData: null,
  loading: false,
  success: false,
  duePaymentGateway: null,
};

const getDuelistSlice = createSlice({
  name: "getDuelist",
  initialState,
  reducers: {
    getDuelistRequested: (state, action) => {
      state.loading = true;
    },
    getDuelistReceived: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    payDueSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.duePaymentGateway = action.payload?.data?.data;
    },
    getDuelistRequestFailed: (state, action) => {
      state.loading = false;
      console.log("getDuelistRequestFailed", action.payload);
    },
  },
});

const {
  getDuelistRequested,
  getDuelistReceived,
  getDuelistRequestFailed,
  payDueSuccess,
} = getDuelistSlice.actions;

export default getDuelistSlice.reducer;

export const getDuelist = () => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();
    if (getToken && getToken.token) {
      const token = getToken.token;

      dispatch(
        apiCallBegan({
          url: PRE_URL + "dues/memberdue/",
          extraheaders: "Token " + token,
          method: "get",
          onStart: getDuelistRequested.type,
          onSuccess: getDuelistReceived.type,
          onError: getDuelistRequestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(getDuelistRequestFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occurred while fetching duelist:", error);
    dispatch(getDuelistRequestFailed(error.message));
  }
};

export const payDue = (id: number) => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();

    if (getToken && getToken.token) {
      const token = getToken.token;

      dispatch(
        apiCallBegan({
          url: `${PRE_URL}dues/process_payment/due/${id}/`,
          extraheaders: "Token " + token,
          contentType: "multipart/form-data",
          method: "post",
          onStart: getDuelistRequested.type,
          onSuccess: payDueSuccess.type,
          onError: getDuelistRequestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(getDuelistRequestFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occured registerring you", error);
    dispatch(getDuelistRequestFailed(error.message));
  }
};
