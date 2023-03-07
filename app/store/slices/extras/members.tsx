import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState: {
  membersList: any;
  loading: boolean;
} = {
  membersList: [],
  loading: false,
};

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    membersRequested: (state, action) => {
      state.loading = true;
    },
    membersReceived: (state, action) => {
      state.loading = false;
      state.membersList = action.payload;
    },
    membersRequestFailed: (state, action) => {
      state.loading = false;
    },
  },
});

export const { membersRequested, membersReceived, membersRequestFailed } =
  membersSlice.actions;

export default membersSlice.reducer;

export const getMembers = () => async (dispatch: AppDispatch) => {
  try {
    const getToken: any = await retrieveUserDetails();

    if (getToken && getToken.token) {
      const token = getToken.token;

      dispatch(
        apiCallBegan({
          url: PRE_URL + `user/memberlist-info/get_all_members/`,
          extraheaders: "Token " + token,
          method: "get",
          onStart: membersRequested.type,
          onSuccess: membersReceived.type,
          onError: membersRequestFailed.type,
        })
      );
    } else {
      const error = new Error("Unable to retrieve user token");
      console.error(error);
      dispatch(membersRequestFailed(error.message));
    }
  } catch (error: any) {
    console.error("An error occured getting members", error);
    dispatch(membersRequestFailed(error.message));
  }
};
