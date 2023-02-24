import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { PRE_URL } from "../../../utils/ENV/envs";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";

const initialState: {
  userData: { data: any } | null;
  loading: boolean;
  success: boolean,
  error: any,
} = {
  userData: null,
  loading: false,
  success: false,
  error: null,
};

const fundProjectSlice = createSlice({
  name: "fundProject",
  initialState,
  reducers: {
    fundProjectRequested: (state, action) => {
      state.loading = true;
    },
    fundProjectReceived: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    fundProjectRequestFailed: (state, action) => {
      state.loading = false;
    },
      kindFundingRequested: (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
  kindFundingSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      console.log( state.success)
      state.error = null;
    },
  kindFundingFailed: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
  },

  }

});

export const {
  kindFundingRequested,
  kindFundingSuccess,
  kindFundingFailed,
  fundProjectRequested,
  fundProjectReceived,
  fundProjectRequestFailed
  } =fundProjectSlice.actions;

export default fundProjectSlice.reducer;

export const fundProject = () => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();
    if (getToken && getToken.token) {
      const token = getToken.token;

      dispatch(
        apiCallBegan({
          url: PRE_URL + "extras/member_support_project/",
          extraheaders: "Token " + token,
          method: "get",
          onStart:fundProjectRequested.type,
          onSuccess:fundProjectReceived.type,
          onError: fundProjectRequestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(fundProjectRequestFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occurred while fetching duelist:", error);
    dispatch(fundProjectRequestFailed(error.message));
  }
};

export const kindFunding = (projectId: number, heading: string) => (dispatch: AppDispatch) => {
  console.log('inside payinkind'+ " " +projectId + ' ' +  heading )
  dispatch(
    apiCallBegan({
        url: PRE_URL + "extras/member_support_project/support_in_kind",
        method: "post",
      data: {
      //  project:projectId,
       heading:heading
      },
      onStart: kindFundingRequested.type,
      onSuccess: kindFundingSuccess.type,
      onError: kindFundingFailed.type,
    })
  );
};
