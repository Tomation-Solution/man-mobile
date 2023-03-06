import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { PRE_URL } from "../../../utils/ENV/envs";
import {
  retrieveUserDetails,
  storeUserDetails,
} from "../../../utils/helperFunctions/userDataHandlers";

const initialState: {
  userData: { data: any } | null;
  loading: boolean;
} = {
  userData: null,
  loading: false,
};

const getElectionSliceSlice = createSlice({
  name: "getElectionSlice",
  initialState,
  reducers: {
    getElectionSliceRequested: (state, action) => {
      state.loading = true;
    },
    getElectionSliceReceived: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      console.log("getElectionSliceReceived", action.payload);
    },
    getElectionSliceRequestFailed: (state, action) => {
      state.loading = false;
      console.log("getElectionSliceRequestFailed", action.payload);
    },
    getListOFContestantRequested: (state, action) => {
      state.loading = true;
    },
    getListOFContestantReceived: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      console.log("getElectionSliceReceived", action.payload);
    },
    getListOFContestantRequestFailed: (state, action) => {
      state.loading = false;
      console.log("getElectionSliceRequestFailed", action.payload);
    },

    getListOFMemberRequested: (state, action) => {
      state.loading = true;
    },
    getListOFMemberReceived: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      console.log("getElectionSliceReceived", action.payload);
    },
    getListOFMemberRequestFailed: (state, action) => {
      state.loading = false;
      console.log("getElectionSliceRequestFailed", action.payload);
    },

  },
});

const {
   getElectionSliceRequested,
   getElectionSliceReceived,
   getElectionSliceRequestFailed ,
   getListOFContestantRequested,
   getListOFContestantReceived,
   getListOFContestantRequestFailed,
   getListOFMemberRequested,
   getListOFMemberReceived,
   getListOFMemberRequestFailed

  } =getElectionSliceSlice.actions;

export default getElectionSliceSlice.reducer;

export const list_election = () => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();
    if (getToken && getToken.token) {
      const token = getToken.token;
      console.log("token", token);
      dispatch(
        apiCallBegan({
          url: PRE_URL + "election/adminmanageballotbox/list_of_elections/",
          extraheaders: "Token " + token,
          method: "get",
          onStart: getElectionSliceRequested.type,
          onSuccess: getElectionSliceReceived.type,
          onError: getElectionSliceRequestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(getElectionSliceRequestFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occurred while fetching user profile:", error);
    dispatch(getElectionSliceRequestFailed(error.message));
  }
};


export const list_member_position= () => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();
    if (getToken && getToken.token) {
      const token = getToken.token;
      console.log("token", token);
      dispatch(
        apiCallBegan({
          url: PRE_URL + "election/postion_manager/get_postions/?election_id=2",
          extraheaders: "Token " + token,
          method: "get",
          onStart: getListOFMemberRequested.type,
          onSuccess: getListOFMemberReceived.type,
          onError: getListOFMemberRequestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(getElectionSliceRequestFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occurred while fetching user profile:", error);
    dispatch(getElectionSliceRequestFailed(error.message));
  }
};

export const list_of_Contestant= () => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();
    if (getToken && getToken.token) {
      const token = getToken.token;
      console.log("token", token);
      dispatch(
        apiCallBegan({
          url: PRE_URL + "election/adminmanageballotbox/list_of_contestant/?postion_id=5",
          extraheaders: "Token " + token,
          method: "get",
          onStart: getListOFContestantRequested.type,
          onSuccess: getListOFContestantReceived.type,
          onError: getListOFContestantRequestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(getElectionSliceRequestFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occurred while fetching user profile:", error);
    dispatch(getElectionSliceRequestFailed(error.message));
  }
};

