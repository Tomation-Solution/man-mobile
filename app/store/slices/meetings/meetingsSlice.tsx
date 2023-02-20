import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../apiActions";
import { AppDispatch } from "../../configureStore";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";
import { PRE_URL } from "../../../utils/ENV/envs";

const initialState: {
  meetings: any;
  loading: boolean;
} = {
  meetings: [],
  loading: false,
};

const meetingsSlice = createSlice({
  name: "meetings",
  initialState,
  reducers: {
    meetingsRequested: (state, action) => {
      state.loading = true;
    },
    meetingsReceived: (state, action) => {
      state.loading = false;
      state.meetings = action.payload;
      console.log("meetings", action.payload);
    },
    meetingsRequestFailed: (state, action) => {
      state.loading = false;
    },
  },
});

const { meetingsRequested, meetingsReceived, meetingsRequestFailed } =
  meetingsSlice.actions;

export default meetingsSlice.reducer;

export const loadMeetings =
  (environment?: string, id?: number) => async (dispatch: AppDispatch) => {
    try {
      const getToken: any = await retrieveUserDetails();

      if (getToken && getToken.token) {
        const token = getToken.token;

        dispatch(
          apiCallBegan({
            url:
              environment && id
                ? PRE_URL +
                  `meeting/meeting_member/?not_council=True&not_commitee=True&not_chapters=True&${environment}=${id}`
                : PRE_URL +
                  `meeting/meeting_member/?not_council=True&not_commitee=True&not_chapters=True`,
            extraheaders: "Token " + token,
            method: "get",
            onStart: meetingsRequested.type,
            onSuccess: meetingsReceived.type,
            onError: meetingsRequestFailed.type,
          })
        );
      } else {
        const error = new Error("Unable to retrieve user token");
        console.error(error);
        dispatch(meetingsRequestFailed(error.message));
      }
    } catch (error: any) {
      console.error("An error occured getting meetings", error);
      dispatch(meetingsRequestFailed(error.message));
    }
  };
